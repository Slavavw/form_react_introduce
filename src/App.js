import AddForm from "./AddForm";
import React, { useState, Suspense } from "react";
import { BeatLoader } from "react-spinners";
import ErrorBoundary, { ErrorScreen } from "./ErrorBoundary";

export default function App() {
  return (
    <Suspense fallback={<BeatLoader color="#b210b2" />}>
      <ErrorBoundary fallback={ErrorScreen}>
        <AddForm />
      </ErrorBoundary>
    </Suspense>
  )
}
