---
title: "StartAllianceDecision"
description: "Auto-generated class reference for StartAllianceDecision."
---
# StartAllianceDecision

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class StartAllianceDecision : KingdomDecision`
**Base:** `KingdomDecision`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Election/StartAllianceDecision.cs`

## Overview

`StartAllianceDecision` lives in `TaleWorlds.CampaignSystem.Election` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AllianceCampaignBehavior` | `public IAllianceCampaignBehavior AllianceCampaignBehavior { get; }` |

## Key Methods

### GetDecisionTitle
`public override TextObject GetDecisionTitle()`

**Purpose:** Reads and returns the decision title value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetDecisionTitle();
```

### GetDecisionDescription
`public override TextObject GetDecisionDescription()`

**Purpose:** Reads and returns the decision description value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetDecisionDescription();
```

### GetDecisionLink
`public override string GetDecisionLink()`

**Purpose:** Reads and returns the decision link value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetDecisionLink();
```

### GetDecisionImageIdentifier
`public override ImageIdentifier GetDecisionImageIdentifier()`

**Purpose:** Reads and returns the decision image identifier value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetDecisionImageIdentifier();
```

### IsAllowed
`public override bool IsAllowed()`

**Purpose:** Determines whether the this instance is in the allowed state or condition.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.IsAllowed();
```

### GetProposalInfluenceCost
`public override int GetProposalInfluenceCost()`

**Purpose:** Reads and returns the proposal influence cost value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetProposalInfluenceCost();
```

### GetGeneralTitle
`public override TextObject GetGeneralTitle()`

**Purpose:** Reads and returns the general title value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetGeneralTitle();
```

### GetSupportTitle
`public override TextObject GetSupportTitle()`

**Purpose:** Reads and returns the support title value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetSupportTitle();
```

### GetChooseTitle
`public override TextObject GetChooseTitle()`

**Purpose:** Reads and returns the choose title value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetChooseTitle();
```

### GetSupportDescription
`public override TextObject GetSupportDescription()`

**Purpose:** Reads and returns the support description value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetSupportDescription();
```

### GetChooseDescription
`public override TextObject GetChooseDescription()`

**Purpose:** Reads and returns the choose description value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetChooseDescription();
```

### DetermineInitialCandidates
`public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()`

**Purpose:** Determines the result of initial candidates based on the current state.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.DetermineInitialCandidates();
```

### DetermineChooser
`public override Clan DetermineChooser()`

**Purpose:** Determines the result of chooser based on the current state.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.DetermineChooser();
```

### DetermineSponsors
`public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Determines the result of sponsors based on the current state.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
startAllianceDecision.DetermineSponsors(possibleOutcomes);
```

### ApplyChosenOutcome
`public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)`

**Purpose:** Applies the effect of chosen outcome to the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
startAllianceDecision.ApplyChosenOutcome(chosenOutcome);
```

### OnShowDecision
`public override bool OnShowDecision()`

**Purpose:** Invoked when the show decision event is raised.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.OnShowDecision();
```

### ApplySecondaryEffects
`public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)`

**Purpose:** Applies the effect of secondary effects to the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
startAllianceDecision.ApplySecondaryEffects(possibleOutcomes, chosenOutcome);
```

### GetSecondaryEffects
`public override TextObject GetSecondaryEffects()`

**Purpose:** Reads and returns the secondary effects value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetSecondaryEffects();
```

### GetChosenOutcomeText
`public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, SupportStatus supportStatus, bool isShortVersion = false)`

**Purpose:** Reads and returns the chosen outcome text value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetChosenOutcomeText(chosenOutcome, supportStatus, false);
```

### GetQueriedDecisionOutcome
`public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Reads and returns the queried decision outcome value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetQueriedDecisionOutcome(possibleOutcomes);
```

### CalculateSupport
`public float CalculateSupport(Clan clan, out TextObject hint, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of support.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.CalculateSupport(clan, hint, false);
```

### DetermineSupport
`public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)`

**Purpose:** Determines the result of support based on the current state.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.DetermineSupport(clan, possibleOutcome);
```

### CanMakeDecision
`public override bool CanMakeDecision(out TextObject reason, bool includeReason = false)`

**Purpose:** Checks whether the this instance meets the preconditions for make decision.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.CanMakeDecision(reason, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StartAllianceDecision startAllianceDecision = ...;
startAllianceDecision.GetDecisionTitle();
```

## See Also

- [Area Index](../)