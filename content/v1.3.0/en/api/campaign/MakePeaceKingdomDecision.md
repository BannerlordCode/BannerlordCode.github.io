---
title: "MakePeaceKingdomDecision"
description: "Auto-generated class reference for MakePeaceKingdomDecision."
---
# MakePeaceKingdomDecision

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MakePeaceKingdomDecision : KingdomDecision`
**Base:** `KingdomDecision`
**File:** `TaleWorlds.CampaignSystem/Election/MakePeaceKingdomDecision.cs`

## Overview

`MakePeaceKingdomDecision` lives in `TaleWorlds.CampaignSystem.Election` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsAllowed
`public override bool IsAllowed()`

**Purpose:** **Purpose:** Determines whether the this instance is in the allowed state or condition.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.IsAllowed();
```

### GetProposalInfluenceCost
`public override int GetProposalInfluenceCost()`

**Purpose:** **Purpose:** Reads and returns the proposal influence cost value held by the this instance.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetProposalInfluenceCost();
```

### GetGeneralTitle
`public override TextObject GetGeneralTitle()`

**Purpose:** **Purpose:** Reads and returns the general title value held by the this instance.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetGeneralTitle();
```

### GetSupportTitle
`public override TextObject GetSupportTitle()`

**Purpose:** **Purpose:** Reads and returns the support title value held by the this instance.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetSupportTitle();
```

### GetChooseTitle
`public override TextObject GetChooseTitle()`

**Purpose:** **Purpose:** Reads and returns the choose title value held by the this instance.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetChooseTitle();
```

### GetSupportDescription
`public override TextObject GetSupportDescription()`

**Purpose:** **Purpose:** Reads and returns the support description value held by the this instance.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetSupportDescription();
```

### GetChooseDescription
`public override TextObject GetChooseDescription()`

**Purpose:** **Purpose:** Reads and returns the choose description value held by the this instance.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetChooseDescription();
```

### DetermineInitialCandidates
`public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()`

**Purpose:** **Purpose:** Determines the result of initial candidates based on the current state.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.DetermineInitialCandidates();
```

### DetermineChooser
`public override Clan DetermineChooser()`

**Purpose:** **Purpose:** Determines the result of chooser based on the current state.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.DetermineChooser();
```

### DetermineSponsors
`public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** **Purpose:** Determines the result of sponsors based on the current state.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
makePeaceKingdomDecision.DetermineSponsors(possibleOutcomes);
```

### ApplyChosenOutcome
`public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)`

**Purpose:** **Purpose:** Applies the effect of chosen outcome to the this instance.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
makePeaceKingdomDecision.ApplyChosenOutcome(chosenOutcome);
```

### OnShowDecision
`public override bool OnShowDecision()`

**Purpose:** **Purpose:** Invoked when the show decision event is raised.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.OnShowDecision();
```

### GetSecondaryEffects
`public override TextObject GetSecondaryEffects()`

**Purpose:** **Purpose:** Reads and returns the secondary effects value held by the this instance.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetSecondaryEffects();
```

### ApplySecondaryEffects
`public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)`

**Purpose:** **Purpose:** Applies the effect of secondary effects to the this instance.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
makePeaceKingdomDecision.ApplySecondaryEffects(possibleOutcomes, chosenOutcome);
```

### GetChosenOutcomeText
`public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)`

**Purpose:** **Purpose:** Reads and returns the chosen outcome text value held by the this instance.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetChosenOutcomeText(chosenOutcome, supportStatus, false);
```

### GetQueriedDecisionOutcome
`public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** **Purpose:** Reads and returns the queried decision outcome value held by the this instance.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetQueriedDecisionOutcome(possibleOutcomes);
```

### CalculateSupport
`public float CalculateSupport(Clan clan)`

**Purpose:** **Purpose:** Calculates the current value or result of support.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.CalculateSupport(clan);
```

### DetermineSupport
`public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)`

**Purpose:** **Purpose:** Determines the result of support based on the current state.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.DetermineSupport(clan, possibleOutcome);
```

### GetDecisionTitle
`public override TextObject GetDecisionTitle()`

**Purpose:** **Purpose:** Reads and returns the decision title value held by the this instance.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetDecisionTitle();
```

### GetDecisionDescription
`public override TextObject GetDecisionDescription()`

**Purpose:** **Purpose:** Reads and returns the decision description value held by the this instance.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetDecisionDescription();
```

### GetDecisionLink
`public override string GetDecisionLink()`

**Purpose:** **Purpose:** Reads and returns the decision link value held by the this instance.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetDecisionLink();
```

### GetDecisionImageIdentifier
`public override ImageIdentifier GetDecisionImageIdentifier()`

**Purpose:** **Purpose:** Reads and returns the decision image identifier value held by the this instance.

```csharp
// Obtain an instance of MakePeaceKingdomDecision from the subsystem API first
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetDecisionImageIdentifier();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
makePeaceKingdomDecision.IsAllowed();
```

## See Also

- [Area Index](../)