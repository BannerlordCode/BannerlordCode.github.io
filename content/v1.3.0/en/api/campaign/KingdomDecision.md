---
title: "KingdomDecision"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomDecision`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomDecision

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomDecision`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Election/KingdomDecision.cs`

## Overview

`KingdomDecision` lives in `TaleWorlds.CampaignSystem.Election` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Kingdom` | `public Kingdom Kingdom { get; }` |
| `ProposerClan` | `public Clan ProposerClan { get; }` |
| `IsEnforced` | `public bool IsEnforced { get; set; }` |
| `PlayerExamined` | `public bool PlayerExamined { get; set; }` |
| `NotifyPlayer` | `public bool NotifyPlayer { get; set; }` |
| `IsPlayerParticipant` | `public bool IsPlayerParticipant { get; set; }` |
| `TriggerTime` | `public CampaignTime TriggerTime { get; set; }` |
| `IsKingsVoteAllowed` | `public virtual bool IsKingsVoteAllowed { get; }` |
| `NeedsPlayerResolution` | `public bool NeedsPlayerResolution { get; }` |

## Key Methods

### IsAllowed
`public abstract bool IsAllowed()`

**Purpose:** Handles logic related to `is allowed`.

### GetInfluenceCost
`public int GetInfluenceCost(Clan sponsorClan)`

**Purpose:** Gets the current value of `influence cost`.

### GetProposalInfluenceCost
`public abstract int GetProposalInfluenceCost()`

**Purpose:** Gets the current value of `proposal influence cost`.

### GetGeneralTitle
`public abstract TextObject GetGeneralTitle()`

**Purpose:** Gets the current value of `general title`.

### GetSupportTitle
`public abstract TextObject GetSupportTitle()`

**Purpose:** Gets the current value of `support title`.

### GetChooseTitle
`public abstract TextObject GetChooseTitle()`

**Purpose:** Gets the current value of `choose title`.

### GetSupportDescription
`public abstract TextObject GetSupportDescription()`

**Purpose:** Gets the current value of `support description`.

### GetChooseDescription
`public abstract TextObject GetChooseDescription()`

**Purpose:** Gets the current value of `choose description`.

### CalculateMeritOfOutcome
`public virtual float CalculateMeritOfOutcome(DecisionOutcome candidateOutcome)`

**Purpose:** Handles logic related to `calculate merit of outcome`.

### DetermineInitialCandidates
`public abstract IEnumerable<DecisionOutcome> DetermineInitialCandidates()`

**Purpose:** Handles logic related to `determine initial candidates`.

### NarrowDownCandidates
`public MBList<DecisionOutcome> NarrowDownCandidates(MBList<DecisionOutcome> initialCandidates, int maxCandidateCount)`

**Purpose:** Handles logic related to `narrow down candidates`.

### DetermineChooser
`public abstract Clan DetermineChooser()`

**Purpose:** Handles logic related to `determine chooser`.

### DetermineSupporters
`public IEnumerable<Supporter> DetermineSupporters()`

**Purpose:** Handles logic related to `determine supporters`.

### CanMakeDecision
`public virtual bool CanMakeDecision(out TextObject reason)`

**Purpose:** Checks whether the current object can `make decision`.

### ShouldBeCancelled
`public bool ShouldBeCancelled()`

**Purpose:** Handles logic related to `should be cancelled`.

### DetermineSupportOption
`public DecisionOutcome DetermineSupportOption(Supporter supporter, MBReadOnlyList<DecisionOutcome> possibleOutcomes, out Supporter.SupportWeights supportWeightOfSelectedOutcome, bool calculateRelationshipEffect)`

**Purpose:** Handles logic related to `determine support option`.

### DetermineSupport
`public abstract float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)`

**Purpose:** Handles logic related to `determine support`.

### DetermineSponsors
`public abstract void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Handles logic related to `determine sponsors`.

### ApplyChosenOutcome
`public abstract void ApplyChosenOutcome(DecisionOutcome chosenOutcome)`

**Purpose:** Applies `chosen outcome` to the current object.

### GetInfluenceCost
`public int GetInfluenceCost(DecisionOutcome decisionOutcome, Clan clan, Supporter.SupportWeights supportWeight)`

**Purpose:** Gets the current value of `influence cost`.

### GetSecondaryEffects
`public abstract TextObject GetSecondaryEffects()`

**Purpose:** Gets the current value of `secondary effects`.

### ApplySecondaryEffects
`public abstract void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)`

**Purpose:** Applies `secondary effects` to the current object.

### GetChosenOutcomeText
`public abstract TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)`

**Purpose:** Gets the current value of `chosen outcome text`.

### SortDecisionOutcomes
`public MBList<DecisionOutcome> SortDecisionOutcomes(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Handles logic related to `sort decision outcomes`.

### GetQueriedDecisionOutcome
`public abstract DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Gets the current value of `queried decision outcome`.

### IsSingleClanDecision
`public bool IsSingleClanDecision()`

**Purpose:** Handles logic related to `is single clan decision`.

### CalculateRelationshipEffectWithSponsor
`public virtual float CalculateRelationshipEffectWithSponsor(Clan clan)`

**Purpose:** Handles logic related to `calculate relationship effect with sponsor`.

### GetInfluenceCostOfSupport
`public int GetInfluenceCostOfSupport(Clan clan, Supporter.SupportWeights supportWeight)`

**Purpose:** Gets the current value of `influence cost of support`.

### OnShowDecision
`public virtual bool OnShowDecision()`

**Purpose:** Called when the `show decision` event is raised.

### GetFollowUpDecision
`public virtual KingdomDecision GetFollowUpDecision()`

**Purpose:** Gets the current value of `follow up decision`.

## Usage Example

```csharp
var implementation = new CustomKingdomDecision();
```

## See Also

- [Complete Class Catalog](../catalog)