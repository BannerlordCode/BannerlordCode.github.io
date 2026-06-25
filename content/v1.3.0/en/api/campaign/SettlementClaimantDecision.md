---
title: "SettlementClaimantDecision"
description: "Auto-generated class reference for SettlementClaimantDecision."
---
# SettlementClaimantDecision

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementClaimantDecision : KingdomDecision`
**Base:** `KingdomDecision`
**File:** `TaleWorlds.CampaignSystem/Election/SettlementClaimantDecision.cs`

## Overview

`SettlementClaimantDecision` lives in `TaleWorlds.CampaignSystem.Election` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsAllowed
`public override bool IsAllowed()`

**Purpose:** Determines whether the this instance is in the allowed state or condition.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
var result = settlementClaimantDecision.IsAllowed();
```

### GetProposalInfluenceCost
`public override int GetProposalInfluenceCost()`

**Purpose:** Reads and returns the proposal influence cost value held by the this instance.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
var result = settlementClaimantDecision.GetProposalInfluenceCost();
```

### GetSupportTitle
`public override TextObject GetSupportTitle()`

**Purpose:** Reads and returns the support title value held by the this instance.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
var result = settlementClaimantDecision.GetSupportTitle();
```

### GetGeneralTitle
`public override TextObject GetGeneralTitle()`

**Purpose:** Reads and returns the general title value held by the this instance.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
var result = settlementClaimantDecision.GetGeneralTitle();
```

### GetSupportDescription
`public override TextObject GetSupportDescription()`

**Purpose:** Reads and returns the support description value held by the this instance.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
var result = settlementClaimantDecision.GetSupportDescription();
```

### GetChooseTitle
`public override TextObject GetChooseTitle()`

**Purpose:** Reads and returns the choose title value held by the this instance.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
var result = settlementClaimantDecision.GetChooseTitle();
```

### GetChooseDescription
`public override TextObject GetChooseDescription()`

**Purpose:** Reads and returns the choose description value held by the this instance.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
var result = settlementClaimantDecision.GetChooseDescription();
```

### CalculateMeritOfOutcome
`public override float CalculateMeritOfOutcome(DecisionOutcome candidateOutcome)`

**Purpose:** Calculates the current value or result of merit of outcome.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
var result = settlementClaimantDecision.CalculateMeritOfOutcome(candidateOutcome);
```

### DetermineInitialCandidates
`public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()`

**Purpose:** Determines the result of initial candidates based on the current state.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
var result = settlementClaimantDecision.DetermineInitialCandidates();
```

### DetermineChooser
`public override Clan DetermineChooser()`

**Purpose:** Determines the result of chooser based on the current state.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
var result = settlementClaimantDecision.DetermineChooser();
```

### DetermineSupport
`public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)`

**Purpose:** Determines the result of support based on the current state.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
var result = settlementClaimantDecision.DetermineSupport(clan, possibleOutcome);
```

### DetermineSponsors
`public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Determines the result of sponsors based on the current state.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
settlementClaimantDecision.DetermineSponsors(possibleOutcomes);
```

### ApplyChosenOutcome
`public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)`

**Purpose:** Applies the effect of chosen outcome to the this instance.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
settlementClaimantDecision.ApplyChosenOutcome(chosenOutcome);
```

### GetSecondaryEffects
`public override TextObject GetSecondaryEffects()`

**Purpose:** Reads and returns the secondary effects value held by the this instance.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
var result = settlementClaimantDecision.GetSecondaryEffects();
```

### ApplySecondaryEffects
`public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)`

**Purpose:** Applies the effect of secondary effects to the this instance.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
settlementClaimantDecision.ApplySecondaryEffects(possibleOutcomes, chosenOutcome);
```

### GetChosenOutcomeText
`public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)`

**Purpose:** Reads and returns the chosen outcome text value held by the this instance.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
var result = settlementClaimantDecision.GetChosenOutcomeText(chosenOutcome, supportStatus, false);
```

### GetQueriedDecisionOutcome
`public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Reads and returns the queried decision outcome value held by the this instance.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
var result = settlementClaimantDecision.GetQueriedDecisionOutcome(possibleOutcomes);
```

### GetDecisionTitle
`public override TextObject GetDecisionTitle()`

**Purpose:** Reads and returns the decision title value held by the this instance.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
var result = settlementClaimantDecision.GetDecisionTitle();
```

### GetDecisionDescription
`public override TextObject GetDecisionDescription()`

**Purpose:** Reads and returns the decision description value held by the this instance.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
var result = settlementClaimantDecision.GetDecisionDescription();
```

### GetDecisionLink
`public override string GetDecisionLink()`

**Purpose:** Reads and returns the decision link value held by the this instance.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
var result = settlementClaimantDecision.GetDecisionLink();
```

### GetDecisionImageIdentifier
`public override ImageIdentifier GetDecisionImageIdentifier()`

**Purpose:** Reads and returns the decision image identifier value held by the this instance.

```csharp
// Obtain an instance of SettlementClaimantDecision from the subsystem API first
SettlementClaimantDecision settlementClaimantDecision = ...;
var result = settlementClaimantDecision.GetDecisionImageIdentifier();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SettlementClaimantDecision settlementClaimantDecision = ...;
settlementClaimantDecision.IsAllowed();
```

## See Also

- [Area Index](../)