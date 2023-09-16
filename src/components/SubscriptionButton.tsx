"use client";
import React from "react";
import { Button } from "./ui/button";
import axios from "axios";
import dynamic from "next/dynamic";


type Props = { isPro: boolean };

const SubscriptionButton = (props: Props) => {
  const [loading, setLoading] = React.useState(false);
  const handleSubscription = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button disabled={loading} onClick={handleSubscription} variant="outline">
      {props.isPro ? "Manage Subscriptions" : "Get Pro"}
    </Button>
  );
};

export default dynamic (() => Promise.resolve(SubscriptionButton), {ssr: false})

