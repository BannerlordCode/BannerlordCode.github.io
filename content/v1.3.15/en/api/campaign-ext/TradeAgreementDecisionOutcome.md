---
title: "TradeAgreementDecisionOutcome"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TradeAgreementDecisionOutcome`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TradeAgreementDecisionOutcome

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TradeAgreementDecisionOutcome : DecisionOutcome`
**Base:** `DecisionOutcome`
**Area:** campaign-ext

## Overview

`TradeAgreementDecisionOutcome` lives in `TaleWorlds.CampaignSystem.Election`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnShowDecision
`public override bool OnShowDecision()`

**Purpose:** Called when the `show decision` event is raised.

### ApplyChosenOutcome
`public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)`

**Purpose:** Applies `chosen outcome` to the current object.

### ApplySecondaryEffects
`public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)`

**Purpose:** Applies `secondary effects` to the current object.

### GetProposerClanForPlayerKingdom
`public static Clan GetProposerClanForPlayerKingdom(Kingdom target)`

**Purpose:** Gets the current value of `proposer clan for player kingdom`.

### DetermineChooser
`public override Clan DetermineChooser()`

**Purpose:** Handles logic related to `determine chooser`.

### DetermineInitialCandidates
`public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()`

**Purpose:** Handles logic related to `determine initial candidates`.

### DetermineSponsors
`public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Handles logic related to `determine sponsors`.

### DetermineSupport
`public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)`

**Purpose:** Handles logic related to `determine support`.

### GetChooseDescription
`public override TextObject GetChooseDescription()`

**Purpose:** Gets the current value of `choose description`.

### GetChooseTitle
`public override TextObject GetChooseTitle()`

**Purpose:** Gets the current value of `choose title`.

### GetChosenOutcomeText
`public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)`

**Purpose:** Gets the current value of `chosen outcome text`.

### GetGeneralTitle
`public override TextObject GetGeneralTitle()`

**Purpose:** Gets the current value of `general title`.

### GetProposalInfluenceCost
`public override int GetProposalInfluenceCost()`

**Purpose:** Gets the current value of `proposal influence cost`.

### CanMakeDecision
`public override bool CanMakeDecision(out TextObject reason, bool includeReason = false)`

**Purpose:** Checks whether the current object can `make decision`.

### CalculateSupport
`public float CalculateSupport(Clan clan)`

**Purpose:** Handles logic related to `calculate support`.

### GetQueriedDecisionOutcome
`public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Gets the current value of `queried decision outcome`.

### GetSecondaryEffects
`public override TextObject GetSecondaryEffects()`

**Purpose:** Gets the current value of `secondary effects`.

### GetSupportDescription
`public override TextObject GetSupportDescription()`

**Purpose:** Gets the current value of `support description`.

### GetSupportTitle
`public override TextObject GetSupportTitle()`

**Purpose:** Gets the current value of `support title`.

### IsAllowed
`public override bool IsAllowed()`

**Purpose:** Handles logic related to `is allowed`.

## Usage Example

```csharp
// First obtain a TradeAgreementDecisionOutcome instance from game state, then call one of its public methods
var value = new TradeAgreementDecisionOutcome();
value.OnShowDecision();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
