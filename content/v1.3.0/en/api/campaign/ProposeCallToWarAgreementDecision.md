---
title: "ProposeCallToWarAgreementDecision"
description: "Auto-generated class reference for ProposeCallToWarAgreementDecision."
---
# ProposeCallToWarAgreementDecision

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ProposeCallToWarAgreementDecision : KingdomDecision`
**Base:** `KingdomDecision`
**File:** `TaleWorlds.CampaignSystem/Election/ProposeCallToWarAgreementDecision.cs`

## Overview

`ProposeCallToWarAgreementDecision` lives in `TaleWorlds.CampaignSystem.Election` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AllianceCampaignBehavior` | `public IAllianceCampaignBehavior AllianceCampaignBehavior { get; }` |

## Key Methods

### IsAllowed
`public override bool IsAllowed()`

**Purpose:** Determines whether the this instance is in the allowed state or condition.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
var result = proposeCallToWarAgreementDecision.IsAllowed();
```

### GetProposalInfluenceCost
`public override int GetProposalInfluenceCost()`

**Purpose:** Reads and returns the proposal influence cost value held by the this instance.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
var result = proposeCallToWarAgreementDecision.GetProposalInfluenceCost();
```

### GetGeneralTitle
`public override TextObject GetGeneralTitle()`

**Purpose:** Reads and returns the general title value held by the this instance.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
var result = proposeCallToWarAgreementDecision.GetGeneralTitle();
```

### GetSupportTitle
`public override TextObject GetSupportTitle()`

**Purpose:** Reads and returns the support title value held by the this instance.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
var result = proposeCallToWarAgreementDecision.GetSupportTitle();
```

### GetChooseTitle
`public override TextObject GetChooseTitle()`

**Purpose:** Reads and returns the choose title value held by the this instance.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
var result = proposeCallToWarAgreementDecision.GetChooseTitle();
```

### GetSupportDescription
`public override TextObject GetSupportDescription()`

**Purpose:** Reads and returns the support description value held by the this instance.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
var result = proposeCallToWarAgreementDecision.GetSupportDescription();
```

### GetChooseDescription
`public override TextObject GetChooseDescription()`

**Purpose:** Reads and returns the choose description value held by the this instance.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
var result = proposeCallToWarAgreementDecision.GetChooseDescription();
```

### DetermineInitialCandidates
`public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()`

**Purpose:** Determines the result of initial candidates based on the current state.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
var result = proposeCallToWarAgreementDecision.DetermineInitialCandidates();
```

### DetermineChooser
`public override Clan DetermineChooser()`

**Purpose:** Determines the result of chooser based on the current state.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
var result = proposeCallToWarAgreementDecision.DetermineChooser();
```

### DetermineSponsors
`public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Determines the result of sponsors based on the current state.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
proposeCallToWarAgreementDecision.DetermineSponsors(possibleOutcomes);
```

### ApplyChosenOutcome
`public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)`

**Purpose:** Applies the effect of chosen outcome to the this instance.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
proposeCallToWarAgreementDecision.ApplyChosenOutcome(chosenOutcome);
```

### OnShowDecision
`public override bool OnShowDecision()`

**Purpose:** Invoked when the show decision event is raised.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
var result = proposeCallToWarAgreementDecision.OnShowDecision();
```

### ApplySecondaryEffects
`public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)`

**Purpose:** Applies the effect of secondary effects to the this instance.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
proposeCallToWarAgreementDecision.ApplySecondaryEffects(possibleOutcomes, chosenOutcome);
```

### GetSecondaryEffects
`public override TextObject GetSecondaryEffects()`

**Purpose:** Reads and returns the secondary effects value held by the this instance.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
var result = proposeCallToWarAgreementDecision.GetSecondaryEffects();
```

### GetChosenOutcomeText
`public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)`

**Purpose:** Reads and returns the chosen outcome text value held by the this instance.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
var result = proposeCallToWarAgreementDecision.GetChosenOutcomeText(chosenOutcome, supportStatus, false);
```

### GetQueriedDecisionOutcome
`public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Reads and returns the queried decision outcome value held by the this instance.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
var result = proposeCallToWarAgreementDecision.GetQueriedDecisionOutcome(possibleOutcomes);
```

### CalculateSupport
`public float CalculateSupport(Clan clan)`

**Purpose:** Calculates the current value or result of support.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
var result = proposeCallToWarAgreementDecision.CalculateSupport(clan);
```

### DetermineSupport
`public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)`

**Purpose:** Determines the result of support based on the current state.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
var result = proposeCallToWarAgreementDecision.DetermineSupport(clan, possibleOutcome);
```

### CanMakeDecision
`public override bool CanMakeDecision(out TextObject reason)`

**Purpose:** Checks whether the this instance meets the preconditions for make decision.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
var result = proposeCallToWarAgreementDecision.CanMakeDecision(reason);
```

### GetDecisionTitle
`public override TextObject GetDecisionTitle()`

**Purpose:** Reads and returns the decision title value held by the this instance.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
var result = proposeCallToWarAgreementDecision.GetDecisionTitle();
```

### GetDecisionDescription
`public override TextObject GetDecisionDescription()`

**Purpose:** Reads and returns the decision description value held by the this instance.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
var result = proposeCallToWarAgreementDecision.GetDecisionDescription();
```

### GetDecisionLink
`public override string GetDecisionLink()`

**Purpose:** Reads and returns the decision link value held by the this instance.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
var result = proposeCallToWarAgreementDecision.GetDecisionLink();
```

### GetDecisionImageIdentifier
`public override ImageIdentifier GetDecisionImageIdentifier()`

**Purpose:** Reads and returns the decision image identifier value held by the this instance.

```csharp
// Obtain an instance of ProposeCallToWarAgreementDecision from the subsystem API first
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
var result = proposeCallToWarAgreementDecision.GetDecisionImageIdentifier();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ProposeCallToWarAgreementDecision proposeCallToWarAgreementDecision = ...;
proposeCallToWarAgreementDecision.IsAllowed();
```

## See Also

- [Area Index](../)