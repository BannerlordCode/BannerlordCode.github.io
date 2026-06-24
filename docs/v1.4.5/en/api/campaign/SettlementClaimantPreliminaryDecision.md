<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementClaimantPreliminaryDecision`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementClaimantPreliminaryDecision

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementClaimantPreliminaryDecision : KingdomDecision`
**Base:** `KingdomDecision`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Election/SettlementClaimantPreliminaryDecision.cs`

## Overview

`SettlementClaimantPreliminaryDecision` lives in `TaleWorlds.CampaignSystem.Election` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetDecisionTitle
`public override TextObject GetDecisionTitle()`

**Purpose:** Gets the current value of `decision title`.

### GetDecisionDescription
`public override TextObject GetDecisionDescription()`

**Purpose:** Gets the current value of `decision description`.

### GetDecisionLink
`public override string GetDecisionLink()`

**Purpose:** Gets the current value of `decision link`.

### GetDecisionImageIdentifier
`public override ImageIdentifier GetDecisionImageIdentifier()`

**Purpose:** Gets the current value of `decision image identifier`.

### IsAllowed
`public override bool IsAllowed()`

**Purpose:** Handles logic related to `is allowed`.

### GetProposalInfluenceCost
`public override int GetProposalInfluenceCost()`

**Purpose:** Gets the current value of `proposal influence cost`.

### GetGeneralTitle
`public override TextObject GetGeneralTitle()`

**Purpose:** Gets the current value of `general title`.

### GetSupportTitle
`public override TextObject GetSupportTitle()`

**Purpose:** Gets the current value of `support title`.

### GetChooseTitle
`public override TextObject GetChooseTitle()`

**Purpose:** Gets the current value of `choose title`.

### GetSupportDescription
`public override TextObject GetSupportDescription()`

**Purpose:** Gets the current value of `support description`.

### GetChooseDescription
`public override TextObject GetChooseDescription()`

**Purpose:** Gets the current value of `choose description`.

### CalculateMeritOfOutcome
`public override float CalculateMeritOfOutcome(DecisionOutcome candidateOutcome)`

**Purpose:** Handles logic related to `calculate merit of outcome`.

### DetermineInitialCandidates
`public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()`

**Purpose:** Handles logic related to `determine initial candidates`.

### DetermineChooser
`public override Clan DetermineChooser()`

**Purpose:** Handles logic related to `determine chooser`.

### CalculateSupport
`public float CalculateSupport(Clan clan)`

**Purpose:** Handles logic related to `calculate support`.

### DetermineSupport
`public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)`

**Purpose:** Handles logic related to `determine support`.

### DetermineSponsors
`public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Handles logic related to `determine sponsors`.

### ApplyChosenOutcome
`public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)`

**Purpose:** Applies `chosen outcome` to the current object.

### GetSecondaryEffects
`public override TextObject GetSecondaryEffects()`

**Purpose:** Gets the current value of `secondary effects`.

### ApplySecondaryEffects
`public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)`

**Purpose:** Applies `secondary effects` to the current object.

### GetChosenOutcomeText
`public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, SupportStatus supportStatus, bool isShortVersion = false)`

**Purpose:** Gets the current value of `chosen outcome text`.

### GetQueriedDecisionOutcome
`public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Gets the current value of `queried decision outcome`.

### GetFollowUpDecision
`public override KingdomDecision GetFollowUpDecision()`

**Purpose:** Gets the current value of `follow up decision`.

## Usage Example

```csharp
var value = new SettlementClaimantPreliminaryDecision();
value.GetDecisionTitle();
```

## See Also

- [Complete Class Catalog](../catalog)