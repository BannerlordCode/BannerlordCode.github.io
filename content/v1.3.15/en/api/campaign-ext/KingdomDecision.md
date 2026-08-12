---
title: "KingdomDecision"
description: "Abstract base for a kingdom-wide vote: defines the proposal clan, the candidate outcomes, supporter weighting, influence cost, and the hook that applies the chosen outcome to the campaign."
---
# KingdomDecision

`KingdomDecision` is the abstract entry point for a kingdom-wide election — the object that the campaign system uses to ask every clan in a kingdom whether they favor or oppose a proposal (declare war, make peace, change a policy, expel a clan, elect a king…) and then commits the winning outcome to the world.

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomDecision`
**Base:** none
**Source:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Election/KingdomDecision.cs`

## Overview

`KingdomDecision` is the abstract contract for everything a kingdom can vote on. A concrete subclass (for example `DeclareWarDecision`, `MakePeaceKingdomDecision`, `KingdomPolicyDecision`, `ExpelClanFromKingdomDecision`, or `KingSelectionKingdomDecision`) supplies the candidate outcomes, scores how much each clan supports each outcome, charges influence for sponsoring or supporting, and — once a winner is chosen — mutates campaign state through `ApplyChosenOutcome` / `ApplySecondaryEffects`. You never instantiate `KingdomDecision` directly; you create a subclass and push it into the kingdom's unresolved-decision queue, where `KingdomDecisionProposalBehavior` (a `CampaignBehavior`) drives the AI proposals, the ruling clan (or the player) resolves it, and the result is logged and broadcast through `CampaignEvents`.

## Mental Model

Think of a `KingdomDecision` as a *ticket in a queue*, not a service. The lifecycle is: a clan proposes it (`new SubclassDecision(proposerClan)` → `kingdom.AddDecision(...)`), it waits `HoursToWait` (48 hours, unless `IsEnforced`) so other clans can be polled, `KingdomDecisionProposalBehavior` repeatedly calls `ShouldBeCancelled` / `DetermineSupportOption` to assign supporters and sponsors, and when the trigger window elapses (or the ruler forces it) the campaign resolves it by calling `ApplyChosenOutcome` followed by `ApplySecondaryEffects`. The class owns *no global state* — it holds only the proposing clan, the trigger time, and a few resolution flags; all the heavy lifting (which clans exist, how much influence they have) is read live from `Kingdom` and `Clan` every time a `Determine*` / `GetInfluenceCost*` method runs. The only layer that creates and holds these objects is the campaign layer (`TaleWorlds.CampaignSystem`); the GauntletUI layer only renders them through `KingdomDecisionsVM`.

## When to use

- Subclass `KingdomDecision` when you need a **kingdom-wide vote** that the vanilla election system should resolve — with influence costs, per-clan supporter weighting, UI presentation, and a logged outcome. Examples: a new policy type, a custom war/peace trigger, or expelling a clan.
- Inject a proposal into the live game with `kingdom.AddDecision(decision, ignoreInfluenceCost)` and react to its lifecycle through `CampaignEvents.KingdomDecisionAdded` / `CampaignEvents.KingdomDecisionConcluded`.
- Read the pending queue with `kingdom.UnresolvedDecisions` when you only need to inspect or veto existing proposals.

## When NOT to use

- Do **not** call `ApplyChosenOutcome` / `ApplySecondaryEffects` directly from a `SubModule` hook to "force" an effect. That bypasses influence deductions, supporter/sponsor assignment, log entries, and the `KingdomDecisionConcluded` event, leaving the UI and save out of sync. Let the decision pipeline resolve it (add the decision and wait, or call `kingdom.AddDecision` on an enforced decision).
- For a one-off, player-only action that does not need clan voting, use a plain `CampaignBehavior` / action instead of standing up a full `KingdomDecision`.
- Do **not** assign `ProposerClan` or `Kingdom` yourself — both are set by the protected constructor from `proposerClan` and restored from the save; they have no public setter.

## Dependencies

- [DecisionOutcome](DecisionOutcome) — the candidate results a decision proposes, scores, and ultimately applies.
- [Supporter](Supporter) — one clan's weighted vote (`SupportWeights`) gathered during resolution.
- [Clan](../../campaign/Clan/) — the proposing clan and every clan polled for support; the source of influence and relations.
- [Kingdom](../../campaign/Kingdom/) — the owning kingdom whose `UnresolvedDecisions` queue and `AddDecision`/`RemoveDecision` methods drive the lifecycle.

## Risk

- **Applying the outcome outside the resolution phase.** `ApplyChosenOutcome` and `ApplySecondaryEffects` mutate live campaign state (war/peace flags, policies, clan standings). Calling either from outside the decision-resolution pipeline skips influence bookkeeping, supporter assignment, and logging — a fast path to desynced UI and corrupted saves.
- **Resolving a stale or invalid decision.** `ShouldBeCancelled()` returns `true` when the kingdom is eliminated, the proposer left the kingdom, or `IsAllowed()` is now false. Resolving after that point dereferences outcomes whose `SponsorClan` may have been eliminated (`ShouldBeCancelled` guards exactly this with the `t.SponsorClan.IsEliminated` check).
- **Forcing resolution too early.** A decision waits `HoursToWait` (48h) before the player/ruler may resolve it; `NeedsPlayerResolution` is only `true` once `TriggerTime` is past (or `IsEnforced`). Setting `IsEnforced = true` bypasses that wait and can resolve before the player has reviewed it.
- **Save-system registration.** `KingdomDecision` is serialized through `[SaveableProperty]` / `[SaveableField]`. A custom subclass must be registered with the save system, or existing saves that contain it will fail to load.
- **`GetInfluenceCostOfSupportInternal` throws** on an unexpected `SupportWeights` (`ArgumentOutOfRangeException`) — only `Choose`/`StayNeutral`/`SlightlyFavor`/`StronglyFavor`/`FullyPush` are valid.

## Members

Members are grouped by role. Each signature is exact; the prose describes side-effects and when the campaign calls it.

### Identity, ownership & lifecycle

| Member | Signature |
|--------|-----------|
| `Kingdom` | `public Kingdom Kingdom { get; }` |
| `ProposerClan` | `public Clan ProposerClan { get; }` |
| `IsEnforced` | `public bool IsEnforced { get; set; }` |
| `PlayerExamined` | `public bool PlayerExamined { get; set; }` |
| `NotifyPlayer` | `public bool NotifyPlayer { get; set; }` |
| `IsPlayerParticipant` | `public bool IsPlayerParticipant { get; }` |
| `TriggerTime` | `public CampaignTime TriggerTime { get; set; }` |
| `IsKingsVoteAllowed` | `public virtual bool IsKingsVoteAllowed { get; }` |
| `NeedsPlayerResolution` | `public bool NeedsPlayerResolution { get; }` |

- `Kingdom` resolves to `_kingdom ?? ProposerClan.Kingdom`, so a decision always knows its realm even before it is queued.
- `ProposerClan` is set once by the protected constructor (`KingdomDecision(Clan proposerClan)`) and has no public setter — it is the clan that pays the proposal influence and, by default, sponsors the decision.
- `TriggerTime` is initialized to `CampaignTime.HoursFromNow(HoursToWait)` (48h) in the constructor. The player/ruler may only resolve the decision once this time is past, unless `IsEnforced` is `true`.
- `IsPlayerParticipant` is `true` only when the player's clan belongs to this kingdom and is not a mercenary — it gates whether the player sees and votes on the decision.
- `NeedsPlayerResolution` is `true` when the player's clan is the ruling clan and either the decision is enforced or `TriggerTime` has passed; otherwise `false`. This is the flag the UI uses to surface a "resolve now" prompt.
- `IsKingsVoteAllowed` (virtual, default `true`) lets a subclass forbid the ruler's tie-breaking/overriding vote.

```csharp
// A freshly proposed decision waits 48 hours before the ruler may resolve it.
KingdomDecision decision = kingdom.UnresolvedDecisions.First();
bool waiting = !decision.TriggerTime.IsPast && !decision.IsEnforced;
bool playerMustResolve = decision.NeedsPlayerResolution;   // ruler & window elapsed/enforced
```

`OnShowDecision` and `GetFollowUpDecision` control presentation and chaining:

`public virtual bool OnShowDecision()` — called when the decision UI is shown; returning `false` hides it. Default returns `true`.
`public virtual KingdomDecision GetFollowUpDecision()` — if non-null, the returned decision is queued after this one concludes (e.g. a king-selection that follows an abdication). Default returns `null`.

### Eligibility & candidacy

`public abstract bool IsAllowed()` — the gate checked by `ShouldBeCancelled`. Return `false` when the proposal no longer makes sense (e.g. target already at war). Called live, every cancellation pass.

`public abstract IEnumerable<DecisionOutcome> DetermineInitialCandidates()` — returns the full set of outcomes the election can choose between (e.g. every clan that could be king, or "peace" vs "continue war").

`public MBList<DecisionOutcome> NarrowDownCandidates(MBList<DecisionOutcome> initialCandidates, int maxCandidateCount)` — assigns each candidate `InitialMerit = CalculateMeritOfOutcome(...)`, sorts by merit, and keeps the top `maxCandidateCount`. Used by `ShouldBeCancelled` to build the shortlist of 3.

`public MBList<DecisionOutcome> SortDecisionOutcomes(MBReadOnlyList<DecisionOutcome> possibleOutcomes)` — orders outcomes by descending `InitialMerit`. You normally rely on this rather than sorting yourself.

`public virtual float CalculateMeritOfOutcome(DecisionOutcome candidateOutcome)` — default returns `1f`; override to weight how desirable an outcome is when narrowing/shortlisting.

`public abstract DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)` — the outcome the proposer *queries* about (the one the proposer would pick); compared against the actual chosen outcome inside `ShouldBeCancelled`.

`public bool IsSingleClanDecision()` — `true` when `Kingdom.Clans.Count == 1` (no real vote needed).

`public abstract Clan DetermineChooser()` — the clan that ultimately chooses the outcome (usually the ruling clan, or the player). Called during resolution to decide who breaks ties.

```csharp
// Build the shortlist the campaign uses to evaluate cancellation / sponsorship.
MBList<DecisionOutcome> candidates =
    decision.NarrowDownCandidates(decision.DetermineInitialCandidates().ToMBList(), 3);
DecisionOutcome queried = decision.GetQueriedDecisionOutcome(candidates);
```

### Support, sponsors & influence cost

`public IEnumerable<Supporter> DetermineSupporters()` — yields one `Supporter` per clan in `Kingdom.Clans` that is not a mercenary. This is the full voter pool.

`public abstract float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)` — the core scoring function: how strongly `clan` supports `possibleOutcome` (driven by relations, policy fit, etc.). Called per clan per outcome inside `DetermineSupportOption`.

`public DecisionOutcome DetermineSupportOption(Supporter supporter, MBReadOnlyList<DecisionOutcome> possibleOutcomes, out Supporter.SupportWeights supportWeightOfSelectedOutcome, bool calculateRelationshipEffect)` — picks the outcome `supporter`'s clan most favors, scales the influence it is willing to spend by clan influence and relations, and writes the chosen `SupportWeights` (or `StayNeutral`/`Choose` → returns `null`). This is what `KingdomDecisionProposalBehavior` calls for every clan each pass.

`public abstract void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)` — assigns each outcome a `SponsorClan` (typically via `AssignDefaultSponsor`). Sponsors pay the proposal influence.

`public int GetInfluenceCost(Clan sponsorClan)` — the influence a clan pays to *propose* this decision (delegates to `GetProposalInfluenceCost`).

`public abstract int GetProposalInfluenceCost()` — the base proposal influence cost.

`public int GetInfluenceCost(DecisionOutcome decisionOutcome, Clan clan, Supporter.SupportWeights supportWeight)` — influence `clan` pays to *support* `decisionOutcome` at the given weight (maps `supportWeight` to `GetInfluenceCostOfSupport`).

`public int GetInfluenceCostOfSupport(Clan clan, Supporter.SupportWeights supportWeight)` — base support cost (20 / 60 / 150 for `SlightlyFavor` / `StronglyFavor` / `FullyPush`, 0 for neutral/choose) scaled by the clan leader's `Charm.FlexibleEthics` perk.

`public virtual float CalculateRelationshipEffectWithSponsor(Clan clan)` — relation change applied between `clan` and `ProposerClan` when `clan` supports the decision (default `0.8f * relation`).

```csharp
// Poll every voter and read how strongly the player's clan backs the top outcome.
foreach (Supporter supporter in decision.DetermineSupporters())
{
    Supporter.SupportWeights weight;
    DecisionOutcome picked = decision.DetermineSupportOption(
        supporter, candidates, out weight, calculateRelationshipEffect: true);
    int cost = decision.GetInfluenceCostOfSupport(supporter.Clan, weight);
    // cost == 0 when weight is StayNeutral / Choose (picked == null)
}
```

### Resolution (applying the outcome)

`public virtual bool CanMakeDecision(out TextObject reason, bool includeReason = false)` — final pre-apply check; default returns `true` with an empty reason. Override to block resolution with a localized reason.

`public bool ShouldBeCancelled()` — the campaign's cancellation gate. Returns `true` if the kingdom is eliminated, the proposer left the kingdom, `IsAllowed()` is `false`, the internal cancel hook fires, or the proposer can no longer afford/win the vote. `KingdomDecisionProposalBehavior` calls this every pass; a `true` result drops the decision from the queue.

`public abstract void ApplyChosenOutcome(DecisionOutcome chosenOutcome)` — **commits the winning outcome to the campaign** (declares war, enacts the policy, expels the clan…). Called exactly once by the resolution pipeline after a winner is selected.

`public abstract void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)` — applies follow-on consequences (relation changes, notifications) after the primary outcome. Called right after `ApplyChosenOutcome`.

`public abstract TextObject GetSecondaryEffects()` — localized description of those secondary effects, shown in the UI before resolution.

`public abstract TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)` — the resolution message; `supportStatus` is `Equal` / `Majority` / `Minority` (see the nested `SupportStatus` enum) and reflects how lopsided the vote was.

```csharp
// The resolution pipeline (do NOT call these yourself outside it):
if (decision.CanMakeDecision(out TextObject reason) && !decision.ShouldBeCancelled())
{
    DecisionOutcome winner = /* selected by the campaign from candidates */;
    decision.ApplyChosenOutcome(winner);
    decision.ApplySecondaryEffects(candidates, winner);
}
```

### Localized titles & descriptions

These supply the strings the election UI renders. All are abstract and return `TextObject`s.

| Member | Signature |
|--------|-----------|
| `GetGeneralTitle` | `public abstract TextObject GetGeneralTitle()` |
| `GetSupportTitle` | `public abstract TextObject GetSupportTitle()` |
| `GetChooseTitle` | `public abstract TextObject GetChooseTitle()` |
| `GetSupportDescription` | `public abstract TextObject GetSupportDescription()` |
| `GetChooseDescription` | `public abstract TextObject GetChooseDescription()` |

## Usage Example

The campaign owns the decision objects; you acquire them from the kingdom's unresolved queue (or subscribe to the add event) and, as a *reader*, you may inspect eligibility and candidates. Committing an outcome is the campaign's job — never call `ApplyChosenOutcome` directly.

```csharp
// Acquire pending decisions for the player's kingdom and inspect them.
Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
foreach (KingdomDecision decision in playerKingdom.UnresolvedDecisions)
{
    if (decision.IsAllowed() && decision.NeedsPlayerResolution)
    {
        // Enumerate the candidates the election will choose between.
        var candidates = decision.DetermineInitialCandidates();
        // (Resolution — ApplyChosenOutcome — is performed by the campaign pipeline,
        //  not by mod code, to keep influence and log entries consistent.)
    }
}
```

React to the lifecycle through the campaign event rather than polling:

```csharp
// In a CampaignBehavior / SubModule: be notified when any decision is queued or concluded.
CampaignEvents.KingdomDecisionAdded.AddNonSerializedListener(this, OnDecisionAdded);
CampaignEvents.KingdomDecisionConcluded.AddNonSerializedListener(this, OnDecisionConcluded);

private void OnDecisionAdded(KingdomDecision decision, bool isPlayerInvolved)
{
    // e.g. log or veto; do NOT resolve here.
}

private void OnDecisionConcluded(KingdomDecision decision, DecisionOutcome chosenOutcome, bool isPlayerInvolved)
{
    // chosenOutcome is the committed result; inspect, do not re-apply.
}
```

To inject your own proposal (the supported write path):

```csharp
// Subclass KingdomDecision, then queue it through the kingdom.
KingdomDecision myDecision = new MyCustomDecision(proposerClan);
proposerClan.Kingdom.AddDecision(myDecision, ignoreInfluenceCost: false);
```

## See Also

- [↑ Parent](../)
- [↔ DecisionOutcome](DecisionOutcome)
- [↔ Supporter](Supporter)
- [↔ Clan](../../campaign/Clan/)
- [↔ Kingdom](../../campaign/Kingdom/)
