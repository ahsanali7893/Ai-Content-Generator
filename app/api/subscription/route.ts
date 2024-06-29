import { NextApiRequest, NextApiResponse } from "next";
import stripe from "@/lib/stripe";
import Stripe from "stripe";

type SubscribeRequest = {
  method: string;
  body: {
    email: string;
    paymentMethodId: string;
    priceId: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, paymentMethodId, priceId } =
      req.body as SubscribeRequest["body"];

    try {
      // Create a customer
      const customer = await stripe.customers.create({
        email: email,
        payment_method: paymentMethodId,
        invoice_settings: {
          default_payment_method: paymentMethodId,
        },
      });

      // Create a subscription
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: priceId }],
        expand: ["latest_invoice.payment_intent"],
      });

      res.status(200).json(subscription);
    } catch (error) {
      if (error instanceof Stripe.errors.StripeError) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
