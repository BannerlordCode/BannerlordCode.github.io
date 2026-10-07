---
title: "AcceptCallToWarAgreementDecision"
description: "Auto-generated class reference for AcceptCallToWarAgreementDecision."
---
# AcceptCallToWarAgreementDecision

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AcceptCallToWarAgreementDecision : KingdomDecision`
**Base:** `KingdomDecision`
**File:** `TaleWorlds.CampaignSystem/Election/AcceptCallToWarAgreementDecision.cs`

## Overview

`AcceptCallToWarAgreementDecision` is the vote that an allied realm holds when its ally asks it to join a war. It is one concrete subclass of the abstract `KingdomDecision` (`KingdomDecision.cs:12`), declared at `AcceptCallToWarAgreementDecision.cs:17`, and the campaign creates it for you inside `AllianceCampaignBehavior` the moment the player kingdom is on the receiving end of a call to war (`AllianceCampaignBehavior.cs:140`, `AllianceCampaignBehavior.cs:474`). You never look it up on a map; you either read the instance the alliance behaviour already created, or you construct your own and hand it to `Kingdom.AddDecision`.

It is deliberately the simplest possible decision shape: a yes/no question with exactly two answers. `DetermineInitialCandidates` yields one `AcceptCallToWarAgreementDecisionOutcome(true, …)` and one `(false, …)` (`AcceptCallToWarAgreementDecision.cs:144`, `AcceptCallToWarAgreementDecision.cs:145`), and the deciding clan is always the kingdom's ruling clan (`DetermineChooser` returns `base.Kingdom.RulingClan`, line 152). The gold price is computed once in the constructor from `Campaign.Current.Models.AllianceModel.GetCallToWarCost` (`AcceptCallToWarAgreementDecision.cs:70`) and frozen into the readonly `CallToWarCost` save field, so the sum shown in the vote text cannot drift while the player is still voting.

The decision itself does not touch diplomacy. All it does on a "yes" is forward to the alliance behaviour: `ApplyChosenOutcome` calls `StartCallToWarAgreement(CallingKingdom, Kingdom, KingdomToCallToWarAgainst, CallToWarCost, false)` (`AcceptCallToWarAgreementDecision.cs:183`), reached through the lazily-resolved `AllianceCampaignBehavior` property that pulls `IAllianceCampaignBehavior` off `Campaign.Current` (`AcceptCallToWarAgreementDecision.cs:53`).

## Mental Model

Think of this object as *one frozen snapshot of one question*, not as a live alliance. Everything a vote needs to stay coherent is captured at construction: the calling kingdom, the target kingdom, and the gold cost. The `KingdomDecision` base owns the lifecycle — adding, voting, concluding, cancelling — and this class only answers the questions that base asks. That split is the thing to internalise before you subclass it.

Two different "should this be allowed?" questions exist and they are not the same. `IsAllowed` (line 74) asks whether the *political situation makes the question meaningful right now*: the caller is an ally, we are not already at war with the target, and the caller is (`AcceptCallToWarAgreementDecision.cs:76`). `CanMakeDecision(out TextObject reason)` (`AcceptCallToWarAgreementDecision.cs:273`) asks whether the situation has since *gone stale*: any of the three kingdoms eliminated, we are already at war with the target, the caller has stopped fighting the target, or the alliance has broken. `ShouldBeCancelledInternal` is a one-liner over `!CanMakeDecision` (`AcceptCallToWarAgreementDecision.cs:159`), so a broken alliance silently cancels the vote rather than letting players vote on a question that no longer applies.

The consequences of getting the wiring wrong are specific and unforgiving:

- The cast to the nested `AcceptCallToWarAgreementDecisionOutcome` is unguarded in `ApplyChosenOutcome` (`AcceptCallToWarAgreementDecision.cs:181`), `DetermineSponsors` (`AcceptCallToWarAgreementDecision.cs:167`) and `DetermineSupport` (`AcceptCallToWarAgreementDecision.cs:258`). Hand the engine any other `DecisionOutcome` — for example from a custom candidate list — and you get an `InvalidCastException` mid-campaign, not a graceful fallback.
- Support scoring is sign-symmetric. `DetermineSupport` calls `AllianceModel.GetScoreOfJoiningWar` once, then returns `+score` plus a Valor/Calculating trait bonus for accepting and `-score` with a *different, weaker* trait penalty for refusing (`AcceptCallToWarAgreementDecision.cs:263`, `AcceptCallToWarAgreementDecision.cs:267`) — the reject side weights Calculating at 10 where the accept side weights it at 20. Any mod that assumes symmetry here will mispredict AI votes.
- `ApplySecondaryEffects` is an empty method (`AcceptCallToWarAgreementDecision.cs:188`). The "all supporters gain relation with each other" line in `GetSecondaryEffects` (`AcceptCallToWarAgreementDecision.cs:193`) is pure UI text; no supporter relation is actually written by this class. If your mod promises supporters a relation bonus, you must add it yourself.

## Key Properties

| Name | Signature |
|------|-----------|
| `AllianceCampaignBehavior` | `public IAllianceCampaignBehavior AllianceCampaignBehavior { get; }` |

## Key Methods

### IsAllowed
`public override bool IsAllowed()`

**Purpose:** Determines whether the this instance is in the allowed state or condition.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
var result = acceptCallToWarAgreementDecision.IsAllowed();
```

### GetProposalInfluenceCost
`public override int GetProposalInfluenceCost()`

**Purpose:** Reads and returns the proposal influence cost value held by the this instance.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
var result = acceptCallToWarAgreementDecision.GetProposalInfluenceCost();
```

### GetGeneralTitle
`public override TextObject GetGeneralTitle()`

**Purpose:** Reads and returns the general title value held by the this instance.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
var result = acceptCallToWarAgreementDecision.GetGeneralTitle();
```

### GetSupportTitle
`public override TextObject GetSupportTitle()`

**Purpose:** Reads and returns the support title value held by the this instance.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
var result = acceptCallToWarAgreementDecision.GetSupportTitle();
```

### GetChooseTitle
`public override TextObject GetChooseTitle()`

**Purpose:** Reads and returns the choose title value held by the this instance.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
var result = acceptCallToWarAgreementDecision.GetChooseTitle();
```

### GetSupportDescription
`public override TextObject GetSupportDescription()`

**Purpose:** Reads and returns the support description value held by the this instance.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
var result = acceptCallToWarAgreementDecision.GetSupportDescription();
```

### GetChooseDescription
`public override TextObject GetChooseDescription()`

**Purpose:** Reads and returns the choose description value held by the this instance.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
var result = acceptCallToWarAgreementDecision.GetChooseDescription();
```

### DetermineInitialCandidates
`public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()`

**Purpose:** Determines the result of initial candidates based on the current state.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
var result = acceptCallToWarAgreementDecision.DetermineInitialCandidates();
```

### DetermineChooser
`public override Clan DetermineChooser()`

**Purpose:** Determines the result of chooser based on the current state.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
var result = acceptCallToWarAgreementDecision.DetermineChooser();
```

### DetermineSponsors
`public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Determines the result of sponsors based on the current state.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
acceptCallToWarAgreementDecision.DetermineSponsors(possibleOutcomes);
```

### ApplyChosenOutcome
`public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)`

**Purpose:** Applies the effect of chosen outcome to the this instance.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
acceptCallToWarAgreementDecision.ApplyChosenOutcome(chosenOutcome);
```

### ApplySecondaryEffects
`public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)`

**Purpose:** Applies the effect of secondary effects to the this instance.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
acceptCallToWarAgreementDecision.ApplySecondaryEffects(possibleOutcomes, chosenOutcome);
```

### GetSecondaryEffects
`public override TextObject GetSecondaryEffects()`

**Purpose:** Reads and returns the secondary effects value held by the this instance.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
var result = acceptCallToWarAgreementDecision.GetSecondaryEffects();
```

### GetChosenOutcomeText
`public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)`

**Purpose:** Reads and returns the chosen outcome text value held by the this instance.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
var result = acceptCallToWarAgreementDecision.GetChosenOutcomeText(chosenOutcome, supportStatus, false);
```

### GetQueriedDecisionOutcome
`public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Reads and returns the queried decision outcome value held by the this instance.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
var result = acceptCallToWarAgreementDecision.GetQueriedDecisionOutcome(possibleOutcomes);
```

### CalculateSupport
`public float CalculateSupport(Clan clan)`

**Purpose:** Calculates the current value or result of support.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
var result = acceptCallToWarAgreementDecision.CalculateSupport(clan);
```

### DetermineSupport
`public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)`

**Purpose:** Determines the result of support based on the current state.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
var result = acceptCallToWarAgreementDecision.DetermineSupport(clan, possibleOutcome);
```

### CanMakeDecision
`public override bool CanMakeDecision(out TextObject reason)`

**Purpose:** Checks whether the this instance meets the preconditions for make decision.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
var result = acceptCallToWarAgreementDecision.CanMakeDecision(reason);
```

### GetDecisionTitle
`public override TextObject GetDecisionTitle()`

**Purpose:** Reads and returns the decision title value held by the this instance.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
var result = acceptCallToWarAgreementDecision.GetDecisionTitle();
```

### GetDecisionDescription
`public override TextObject GetDecisionDescription()`

**Purpose:** Reads and returns the decision description value held by the this instance.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
var result = acceptCallToWarAgreementDecision.GetDecisionDescription();
```

### GetDecisionLink
`public override string GetDecisionLink()`

**Purpose:** Reads and returns the decision link value held by the this instance.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
var result = acceptCallToWarAgreementDecision.GetDecisionLink();
```

### GetDecisionImageIdentifier
`public override ImageIdentifier GetDecisionImageIdentifier()`

**Purpose:** Reads and returns the decision image identifier value held by the this instance.

```csharp
// Obtain an instance of AcceptCallToWarAgreementDecision from the subsystem API first
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
var result = acceptCallToWarAgreementDecision.GetDecisionImageIdentifier();
```

## How to use

### Getting one

There are exactly two routes. Read-only: the alliance behaviour already put one on the kingdom's list, so pull it out of `UnresolvedDecisions` and check its type. Write: construct it yourself and register it — the constructor is `AcceptCallToWarAgreementDecision(Clan proposerClan, Kingdom callingKingdom, Kingdom kingdomToCallToWarAgainst)` at `AcceptCallToWarAgreementDecision.cs:66`, and registration is `Kingdom.AddDecision(KingdomDecision, bool ignoreInfluenceCost = false)` at `Kingdom.cs:1001`.

### Typical use

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Election;

public class MyForcedCallToWar : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // Called after a war is declared; Campaign.Current is guaranteed non-null here.
    }

    public override void SyncData()
    {
    }

    // Fire from any campaign event, e.g. a Kingdom change listener.
    public void PushCallToWar(Kingdom callingKingdom, Kingdom targetKingdom)
    {
        Kingdom playerKingdom = Clan.PlayerClan.Kingdom;

        // Order matters: the 2nd argument is the ALLY asking, the 3rd is the enemy.
        var decision = new AcceptCallToWarAgreementDecision(
            Clan.PlayerClan, callingKingdom, targetKingdom);

        // IsAllowed() checks the political precondition; skip it and the vote is dead on arrival.
        if (decision.IsAllowed())
        {
            decision.Kingdom.AddDecision(decision);

            // Costs and support are queryable straight off the instance.
            TextObject cost = decision.GetSupportTitle();
            float support = decision.DetermineSupport(Clan.PlayerClan,
                decision.DetermineInitialCandidates().First());
        }
    }
}
```

### The mistake that bites

Swapping the two kingdom arguments. The constructor prices the call with `proposerClan.Kingdom` as the *buying* realm (`AcceptCallToWarAgreementDecision.cs:70`) and `IsAllowed` then requires `callingKingdom.IsAllyWith(base.Kingdom)` (`AcceptCallToWarAgreementDecision.cs:76`) — where `base.Kingdom` is the proposer's kingdom. Pass `(Clan.PlayerClan, targetKingdom, callingKingdom)` and every one of those checks silently evaluates false: no exception, no log, the vote simply never appears on the kingdom screen. Worse, `CallToWarCost` is already cached from the wrong pair, so the number in the vote text is wrong too. There is no way to see this from the outside except calling `IsAllowed()` yourself before adding the decision.

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AcceptCallToWarAgreementDecision acceptCallToWarAgreementDecision = ...;
acceptCallToWarAgreementDecision.IsAllowed();
```

## See Also

- [KingdomDecision](../KingdomDecision) — the abstract base that owns the vote lifecycle this class plugs into
- [DecisionOutcome](../DecisionOutcome) — the base of the nested yes/no outcome class
- [IAllianceCampaignBehavior](../IAllianceCampaignBehavior) — where `ApplyChosenOutcome` actually sends the war declaration
- [Kingdom](../Kingdom) — `AddDecision` / `UnresolvedDecisions` are the registration and lookup surface
- [Area Index](../)