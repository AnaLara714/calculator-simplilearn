import React from "react";
import OutputRow from "../outputRow";

export default function Output({ user, answer }) {
  return (
    <div>
      <OutputRow value={answer} />
      <OutputRow value={user} textSize={{ fontSize: "20px" }} />
    </div>
  );
}
