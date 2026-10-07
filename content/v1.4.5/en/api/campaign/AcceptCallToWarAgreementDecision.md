---
title: "AcceptCallToWarAgreementDecision"
description: "Realm decision for answering an ally's call to war: two options, three saved fields, support = AllianceModel.GetScoreOfJoiningWar plus its negation."
---

# AcceptCallToWarAgreementDecision

**Namespace:** `TaleWorlds.CampaignSystem.Election`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AcceptCallToWarAgreementDecision : KingdomDecision`
**Base:** `KingdomDecision`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Election/AcceptCallToWarAgreementDecision.cs`

## Overview

This is the realm-level decision behind **"should our kingdom answer an ally's call to war?"**. It derives from [KingdomDecision](../KingdomDecision), carries three saved fields (`SaveableField(101/102/103)`: `CallingKingdom` / `KingdomToCallToWarAgainst` / `CallToWarCost`), and defines a nested public class `AcceptCallToWarAgreementDecisionOutcome` (four `SaveableField(100..103)`) to hold its two options.

All of its business logic is **binary**: accept or refuse. The accept option is sponsored by `ProposerClan` (`DetermineSponsors` runs `possibleOutcome.SetSponsor(base.ProposerClan)`), while the refuse option goes through `AssignDefaultSponsor`. Once resolved, `ApplyChosenOutcome` calls `AllianceCampaignBehavior.StartCallToWarAgreement(...)` or `.DenyCallToWarAgreement(...)` — **the decision itself changes no diplomatic state; it is merely the entry point to it.**

## Mental Model

Read it as **an adapter that turns AllianceModel's score into two votes**. Four rules:

1. **Support is `GetScoreOfJoiningWar` and its negation.** This is the most important line in the type:

   ```csharp
   float scoreOfJoiningWar = Campaign.Current.Models.AllianceModel.GetScoreOfJoiningWar(CallingKingdom, base.Kingdom, KingdomToCallToWarAgainst, clan, out reason);
   if (obj.ShouldAcceptCallToWar)
   {
       return scoreOfJoiningWar;
   }
   return 0f - scoreOfJoiningWar;
   ```

   The accept option takes the positive score, the refuse option its exact negation. **[AllianceModel](../AllianceModel)'s implementation must therefore return "higher is better".** A derived model with inverted polarity flips the entire election — and nothing crashes.

2. **`CallToWarCost` is frozen at construction.** Line 124 of the constructor runs `CallToWarCost = Campaign.Current.Models.AllianceModel.GetCallToWarCost(callingKingdom, proposerClan.Kingdom, kingdomToCallToWarAgainst);`. **No later change in relations or alliances recomputes it.** All four UI texts (`GetSupportTitle`, `GetChooseTitle`, `GetSupportDescription`, `GetChooseDescription`) fill `{CALL_TO_WAR_PAYMENT}` with that fixed value — **so a mod that wants a different price must reconstruct the decision; there is no setter.**

3. **`CanMakeDecision` is the real gate, not `IsAllowed`.** `IsAllowed()` only tests the static "are we allied / are we already at war" pair. `CanMakeDecision(out reason, includeReason)` adds four dynamic checks: any realm eliminated, our realm already at war with the target, the caller no longer at war with the target, and our realm no longer allied with the caller. **And `ShouldBeCancelledInternal()` literally returns `!CanMakeDecision(out reason)`** — meaning **the decision auto-cancels the moment any one of those fails.** Each of the four `reason` texts is behind the `includeReason` flag and is null when it is false.

4. **`ApplySecondaryEffects` is empty while `GetSecondaryEffects` has wording.** The former does nothing; the latter returns `"{=!}All supporters gains some relation with each other."`. **The text and the behaviour disagree — do not expect supporters to actually gain relation.**

The second anchor is that **`AllianceCampaignBehavior` is lazily resolved**. The property caches into `_allianceCampaignBehavior` on first access via `Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>()`. **Before a campaign exists you get null rather than an exception**, and the NRE only surfaces later at `.StartCallToWarAgreement`.

The third anchor is that **`GetQueriedDecisionOutcome` only ever returns the accept option** — `possibleOutcomes.FirstOrDefault(t => ((...Outcome)t).ShouldAcceptCallToWar)` — **because the UI's question is implicitly always "do you accept?"**. There is no built-in path for asking about a refusal.

## How to use

**How to obtain it.** **You do not construct it — you answer it.** It is a `public class AcceptCallToWarAgreementDecision : KingdomDecision`, created by the kingdom-decision flow once a clan leader is presented with a call to war. Reach the live one through the decision's own accessors and `KingdomDecision.PerformDecision()`; a fresh `new` is only meaningful to a mod that is injecting its own decision.

```csharp
// answer the pending decision the way the UI does
bool accept = decision.ShouldAcceptCallToWar;
decision.PerformDecision();          // commits either accept or refuse
Debug.Print("accepted = " + accept, 0);
```

**The most common pitfall.** **`CallToWarCost` never changes.** It is fixed at construction and shared by all four UI texts, and there is **no setter** — changing the price means removing the old decision object and constructing a new one.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `CallingKingdom` | `[SaveableField(101)] public readonly Kingdom CallingKingdom` | The kingdom issuing the call. A **`readonly` field** with no write path beyond deserialization. Pulled into `AutoGeneratedInstanceCollectObjects`. |
| `KingdomToCallToWarAgainst` | `[SaveableField(102)] public readonly Kingdom KingdomToCallToWarAgainst` | The kingdom being called against. Every UI text fills `{KINGDOM_TO_CALL_TO_WAR_AGAINST}` from it. |
| `CallToWarCost` | `[SaveableField(103)] public readonly int CallToWarCost` | The price of answering, **fixed at construction by `AllianceModel.GetCallToWarCost` and never recomputed**. `ConfirmCallToWarAgreementOffer` reads it and passes it to `StartCallToWarAgreement`. |
| `AllianceCampaignBehavior` | `public IAllianceCampaignBehavior AllianceCampaignBehavior { get; }` | The lazily resolved behavior reference; only queries `GetCampaignBehavior<IAllianceCampaignBehavior>()` when `_allianceCampaignBehavior` is null. **Before a campaign exists it returns null instead of throwing, pushing the NRE to the `.StartCallToWarAgreement` call site.** |
| `IsAllowed` | `public override bool IsAllowed()` | Static admission: `CallingKingdom.IsAllyWith(base.Kingdom) && !base.Kingdom.IsAtWarWith(KingdomToCallToWarAgainst) && CallingKingdom.IsAtWarWith(KingdomToCallToWarAgainst)`. **It performs no disqualification checks — those live in `CanMakeDecision`.** |
| `CanMakeDecision` | `public override bool CanMakeDecision(out TextObject reason, bool includeReason = false)` | The real gate: four dynamic checks plus four `reason` texts. **`ShouldBeCancelledInternal` uses it directly to decide cancellation.** |
| `DetermineInitialCandidates` | `public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()` | `yield return`s exactly two options — accept (`shouldAcceptCallToWar: true`) and refuse (`false`) — with the other three fields identical. |
| `DetermineSponsors` | `public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)` | The accept option gets `SetSponsor(base.ProposerClan)`, the refuse option `AssignDefaultSponsor(possibleOutcome)`. **The proposer is therefore structurally inclined to accept.** |
| `DetermineSupport` | `public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)` | **The business core**: accept returns `GetScoreOfJoiningWar`, refuse returns its negation. `GetScoreOfJoiningWar` fills an `out reason`, **but this method discards it — callers cannot get the explanation from here.** |
| `CalculateSupport` | `public float CalculateSupport(Clan clan)` | A convenience wrapper that is **not an override**: it builds an accept option internally and calls `DetermineSupport`. **It only computes accept-side support**, from which refusal is meant to be derived as 100% minus support. |
| `ApplyChosenOutcome` | `public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)` | The only place that actually mutates game state: `StartCallToWarAgreement(CallingKingdom, base.Kingdom, KingdomToCallToWarAgainst, CallToWarCost)` or `DenyCallToWarAgreement(CallingKingdom, base.Kingdom)`. |
| `GetQueriedDecisionOutcome` | `public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)` | Returns the accept option. **There is no reverse path** — the UI can only ever ask "do you accept?". |
| Nested type | `public class AcceptCallToWarAgreementDecisionOutcome : DecisionOutcome` | Four `SaveableField(100..103)` `readonly` fields: `ShouldAcceptCallToWar` / `Kingdom` / `CallingKingdom` / `KingdomToCallToWarAgainst`. **Its `GetDecisionLink()` and `GetDecisionImageIdentifier()` both return null** — this decision has no wiki link and no icon in the decision list. |

## Examples

The official construction site, copied from `AllianceCampaignBehavior.ConfirmCallToWarAgreementOffer` (note the remove-then-add de-duplication):

```csharp
AcceptCallToWarAgreementDecision decision = new AcceptCallToWarAgreementDecision(Clan.PlayerClan, proposerKingdom, kingdomToCallToWarAgainst);
int cost = decision.CallToWarCost;
KingdomDecision existing = Clan.PlayerClan.Kingdom.UnresolvedDecisions.FirstOrDefault(
    (KingdomDecision s) => s is AcceptCallToWarAgreementDecision d && d.CallingKingdom == proposerKingdom);
if (existing != null)
{
    Clan.PlayerClan.Kingdom.RemoveDecision(existing);
}
Clan.PlayerClan.Kingdom.AddDecision(decision, ignoreInfluenceCost: true);
Debug.Print("cost=" + cost + " influence=" + decision.GetProposalInfluenceCost(), 0);
```

Gate a button on "can this even be voted on", surfacing the reason:

```csharp
AcceptCallToWarAgreementDecision decision = new AcceptCallToWarAgreementDecision(Clan.PlayerClan, CallingKingdom, TargetKingdom);
TextObject reason;
bool canVote = decision.CanMakeDecision(out reason, true);
Debug.Print("can vote=" + canVote + " reason=" + reason, 0);
Debug.Print("allowed=" + decision.IsAllowed() + " title=" + decision.GetGeneralTitle(), 0);
```

Read both sides' support and verify they are exact negations:

```csharp
Clan evaluating = Clan.PlayerClan;
foreach (DecisionOutcome outcome in decision.DetermineInitialCandidates())
{
    float support = decision.DetermineSupport(evaluating, outcome);
    bool accept = ((AcceptCallToWarAgreementDecision.AcceptCallToWarAgreementDecisionOutcome)outcome).ShouldAcceptCallToWar;
    Debug.Print((accept ? "accept" : "refuse") + " support=" + support, 0);
}
Debug.Print("calculateSupport (accept only) = " + decision.CalculateSupport(evaluating), 0);
```

## Risks and crash boundaries

- **`CallToWarCost` never changes.** Fixed at construction and used by all four UI texts. **No setter — changing the price means removing the old decision and constructing a new one.**
- **Polarity depends on the model implementation.** `DetermineSupport` negates `GetScoreOfJoiningWar`. **Swapping [AllianceModel](../AllianceModel) with inverted polarity flips the vote without crashing.**
- **`DetermineSupport` throws away the `out reason`.** `GetScoreOfJoiningWar` fills an explanation and this method discards it. **To learn "why does this clan oppose", call the Model yourself — you cannot get it from here.**
- **`ApplySecondaryEffects` is empty while `GetSecondaryEffects` has text.** The text claims supporters gain relation with each other, **but no code executes it.** A known text/behaviour mismatch.
- **`GetDecisionLink()` and `GetDecisionImageIdentifier()` both return null.** This decision has **no wiki link and no icon** in the decision list, so the UI must handle null itself.
- **`GetQueriedDecisionOutcome` only knows the accept option.** There is no built-in route to ask "why was this refused".
- **`ShouldBeCancelledInternal` equals `!CanMakeDecision`.** The moment any dynamic condition fails — including the very common "our realm is already at war with the target" — **the decision auto-cancels.** After `AddDecision` in a mod, expect it to vanish on the spot.
- **`CalculateSupport` is not an override.** It hard-codes the accept option, **so it can only be used to infer refusal (100% minus support).** Using it for the refusal side gives a wrong answer.
- **`AllianceCampaignBehavior` can resolve to null.** Before a campaign exists the property returns null and the NRE only appears at `.StartCallToWarAgreement` — **the crash site is far from the actual cause.**
- **Duplicate proposals are de-duplicated by remove-then-add.** All three official sites (`:242`, `:574` and `AcceptCallToWarOfferNotificationItemVM.cs:107`) run `FirstOrDefault`, `RemoveDecision`, then `AddDecision`. **But the VM's de-duplication query compares only `CallingKingdom`, not the target kingdom** — a second proposal from the same caller against a different target is blocked by the first one's existence.
- **`GetProposalInfluenceCost` only covers proposing the call to war.** It returns `AllianceModel.GetInfluenceCostOfCallingToWar(base.ProposerClan)` and **does not vary by which clan is voting** — it is always computed from the proposer.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Election/AcceptCallToWarAgreementDecision.cs` is 324 lines with **33 public members** (the overrides, the `CalculateSupport` convenience, the lazy property, the constructor and the nested public class), and `SaveableField` ids 100–103. The 1.4.6 file of the same name exposes an identical public surface.

The nested `AcceptCallToWarAgreementDecisionOutcome` is this decision's option carrier; its `GetDecisionTitle()` picks Yes/No through the `{?SUPPORT}Yes{?}No{\?}` variant driven by `ShouldAcceptCallToWar`.

## Dependencies

- Base: [KingdomDecision](../KingdomDecision), supplying every decision override point plus `ProposerClan` / `Kingdom` / `UnresolvedDecisions` / `AddDecision` / `RemoveDecision`.
- Value source: [AllianceModel](../AllianceModel) — `GetCallToWarCost` (constructor `:124`), `GetInfluenceCostOfCallingToWar` (`:138`) and `GetScoreOfJoiningWar` (`:278`).
- Executor: [AllianceCampaignBehavior](../AllianceCampaignBehavior)'s `StartCallToWarAgreement` / `DenyCallToWarAgreement`, reached through the lazily resolved `IAllianceCampaignBehavior`.
- Payload: three [Kingdom](../Kingdom) values (`CallingKingdom`, `KingdomToCallToWarAgainst`, `base.Kingdom`) plus [Clan](../Clan).PlayerClan.
- Options and voting: [DecisionOutcome](../DecisionOutcome) and `SupportStatus` — `GetChosenOutcomeText` has three wording branches for Majority / Minority / anything else.
- Construction sites: `AllianceCampaignBehavior.OnCallToWarAgreementProposedToPlayerKingdom` (`:247`), `ConfirmCallToWarAgreementOffer` (`:567`), and the VM side at `AcceptCallToWarOfferNotificationItemVM.cs:109`.
- Notification side: [AcceptCallToWarOfferMapNotification](../AcceptCallToWarOfferMapNotification) is the single-clan-phase stand-in for this decision.
- ViewModel side: `AcceptingCallToWarAgreementDecisionItemVM` under `TaleWorlds.CampaignSystem.ViewModelCollection/.../KingdomManagement.Decisions.ItemTypes/`, reading `decision.CallingKingdom` and `KingdomToCallToWarAgainst` as `IFaction`s.
- Serialization: `SaveableField(101..103)` plus the nested outcome's 100–103, registered at `SaveableCampaignTypeDefiner.cs:283` and `AutoGeneratedSaveManager.cs:1748`.
