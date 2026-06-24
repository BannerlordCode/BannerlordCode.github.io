<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MakePeaceDecisionOutcome`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MakePeaceDecisionOutcome

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MakePeaceDecisionOutcome : DecisionOutcome`
**Base:** `DecisionOutcome`
**Area:** campaign-ext

## Overview

`MakePeaceDecisionOutcome` lives in `TaleWorlds.CampaignSystem.Election`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

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

### DetermineInitialCandidates
`public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()`

**Purpose:** Handles logic related to `determine initial candidates`.

### DetermineChooser
`public override Clan DetermineChooser()`

**Purpose:** Handles logic related to `determine chooser`.

### DetermineSponsors
`public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Handles logic related to `determine sponsors`.

### ApplyChosenOutcome
`public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)`

**Purpose:** Applies `chosen outcome` to the current object.

### OnShowDecision
`public override bool OnShowDecision()`

**Purpose:** Called when the `show decision` event is raised.

### GetSecondaryEffects
`public override TextObject GetSecondaryEffects()`

**Purpose:** Gets the current value of `secondary effects`.

### ApplySecondaryEffects
`public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)`

**Purpose:** Applies `secondary effects` to the current object.

### GetChosenOutcomeText
`public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)`

**Purpose:** Gets the current value of `chosen outcome text`.

### GetQueriedDecisionOutcome
`public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Gets the current value of `queried decision outcome`.

### CalculateSupport
`public float CalculateSupport(Clan clan)`

**Purpose:** Handles logic related to `calculate support`.

### DetermineSupport
`public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)`

**Purpose:** Handles logic related to `determine support`.

### GetDecisionTitle
`public override TextObject GetDecisionTitle()`

**Purpose:** Gets the current value of `decision title`.

### GetDecisionDescription
`public override TextObject GetDecisionDescription()`

**Purpose:** Gets the current value of `decision description`.

## Usage Example

```csharp
// First obtain a MakePeaceDecisionOutcome instance from game state, then call one of its public methods
var value = new MakePeaceDecisionOutcome();
value.IsAllowed();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
