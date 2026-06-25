---
title: "KingSelectionKingdomDecision"
description: "Auto-generated class reference for KingSelectionKingdomDecision."
---
# KingSelectionKingdomDecision

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingSelectionKingdomDecision : KingdomDecision`
**Base:** `KingdomDecision`
**File:** `TaleWorlds.CampaignSystem/Election/KingSelectionKingdomDecision.cs`

## Overview

`KingSelectionKingdomDecision` lives in `TaleWorlds.CampaignSystem.Election` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsKingsVoteAllowed` | `public override bool IsKingsVoteAllowed { get; }` |

## Key Methods

### IsAllowed
`public override bool IsAllowed()`

**Purpose:** Determines whether the this instance is in the allowed state or condition.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
var result = kingSelectionKingdomDecision.IsAllowed();
```

### GetProposalInfluenceCost
`public override int GetProposalInfluenceCost()`

**Purpose:** Reads and returns the proposal influence cost value held by the this instance.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
var result = kingSelectionKingdomDecision.GetProposalInfluenceCost();
```

### GetGeneralTitle
`public override TextObject GetGeneralTitle()`

**Purpose:** Reads and returns the general title value held by the this instance.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
var result = kingSelectionKingdomDecision.GetGeneralTitle();
```

### GetSupportTitle
`public override TextObject GetSupportTitle()`

**Purpose:** Reads and returns the support title value held by the this instance.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
var result = kingSelectionKingdomDecision.GetSupportTitle();
```

### GetChooseTitle
`public override TextObject GetChooseTitle()`

**Purpose:** Reads and returns the choose title value held by the this instance.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
var result = kingSelectionKingdomDecision.GetChooseTitle();
```

### GetSupportDescription
`public override TextObject GetSupportDescription()`

**Purpose:** Reads and returns the support description value held by the this instance.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
var result = kingSelectionKingdomDecision.GetSupportDescription();
```

### GetChooseDescription
`public override TextObject GetChooseDescription()`

**Purpose:** Reads and returns the choose description value held by the this instance.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
var result = kingSelectionKingdomDecision.GetChooseDescription();
```

### CalculateMeritOfOutcome
`public override float CalculateMeritOfOutcome(DecisionOutcome candidateOutcome)`

**Purpose:** Calculates the current value or result of merit of outcome.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
var result = kingSelectionKingdomDecision.CalculateMeritOfOutcome(candidateOutcome);
```

### CalculateMeritOfOutcomeForClan
`public float CalculateMeritOfOutcomeForClan(Clan clan, DecisionOutcome candidateOutcome)`

**Purpose:** Calculates the current value or result of merit of outcome for clan.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
var result = kingSelectionKingdomDecision.CalculateMeritOfOutcomeForClan(clan, candidateOutcome);
```

### DetermineInitialCandidates
`public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()`

**Purpose:** Determines the result of initial candidates based on the current state.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
var result = kingSelectionKingdomDecision.DetermineInitialCandidates();
```

### DetermineChooser
`public override Clan DetermineChooser()`

**Purpose:** Determines the result of chooser based on the current state.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
var result = kingSelectionKingdomDecision.DetermineChooser();
```

### DetermineSupport
`public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)`

**Purpose:** Determines the result of support based on the current state.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
var result = kingSelectionKingdomDecision.DetermineSupport(clan, possibleOutcome);
```

### DetermineSponsors
`public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Determines the result of sponsors based on the current state.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
kingSelectionKingdomDecision.DetermineSponsors(possibleOutcomes);
```

### ApplyChosenOutcome
`public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)`

**Purpose:** Applies the effect of chosen outcome to the this instance.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
kingSelectionKingdomDecision.ApplyChosenOutcome(chosenOutcome);
```

### GetSecondaryEffects
`public override TextObject GetSecondaryEffects()`

**Purpose:** Reads and returns the secondary effects value held by the this instance.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
var result = kingSelectionKingdomDecision.GetSecondaryEffects();
```

### ApplySecondaryEffects
`public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)`

**Purpose:** Applies the effect of secondary effects to the this instance.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
kingSelectionKingdomDecision.ApplySecondaryEffects(possibleOutcomes, chosenOutcome);
```

### GetChosenOutcomeText
`public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)`

**Purpose:** Reads and returns the chosen outcome text value held by the this instance.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
var result = kingSelectionKingdomDecision.GetChosenOutcomeText(chosenOutcome, supportStatus, false);
```

### GetQueriedDecisionOutcome
`public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Reads and returns the queried decision outcome value held by the this instance.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
var result = kingSelectionKingdomDecision.GetQueriedDecisionOutcome(possibleOutcomes);
```

### GetDecisionTitle
`public override TextObject GetDecisionTitle()`

**Purpose:** Reads and returns the decision title value held by the this instance.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
var result = kingSelectionKingdomDecision.GetDecisionTitle();
```

### GetDecisionDescription
`public override TextObject GetDecisionDescription()`

**Purpose:** Reads and returns the decision description value held by the this instance.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
var result = kingSelectionKingdomDecision.GetDecisionDescription();
```

### GetDecisionLink
`public override string GetDecisionLink()`

**Purpose:** Reads and returns the decision link value held by the this instance.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
var result = kingSelectionKingdomDecision.GetDecisionLink();
```

### GetDecisionImageIdentifier
`public override ImageIdentifier GetDecisionImageIdentifier()`

**Purpose:** Reads and returns the decision image identifier value held by the this instance.

```csharp
// Obtain an instance of KingSelectionKingdomDecision from the subsystem API first
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
var result = kingSelectionKingdomDecision.GetDecisionImageIdentifier();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingSelectionKingdomDecision kingSelectionKingdomDecision = ...;
kingSelectionKingdomDecision.IsAllowed();
```

## See Also

- [Area Index](../)