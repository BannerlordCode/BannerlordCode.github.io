import { readFileSync } from "fs";
import { classifyPage } from "../lib/handwritten-policy.mjs";

const files = [
  "content/v1.3.15/en/api/campaign-ext/MobilePartyAi.md",
  "content/v1.3.15/en/api/campaign-ext/PartyComponent.md",
  "content/v1.3.15/en/api/campaign-ext/PerkObject.md",
  "content/v1.3.15/en/api/campaign-ext/PolicyObject.md",
  "content/v1.3.15/en/api/core-extra/ItemCategory.md",
  "content/v1.3.15/en/api/mission/Mission.md",
];
for (const f of files) {
  const text = readFileSync(f, "utf8");
  const r = classifyPage(f, text);
  console.log("=== " + f.split("/").pop() + " => " + r.status);
  console.log("    reasons:", JSON.stringify(r.reasons));
}
