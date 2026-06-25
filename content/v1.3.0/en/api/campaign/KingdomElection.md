---
title: "KingdomElection"
description: "Auto-generated class reference for KingdomElection."
---
# KingdomElection

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomElection`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Election/KingdomElection.cs`

## Overview

`KingdomElection` lives in `TaleWorlds.CampaignSystem.Election` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PossibleOutcomes` | `public MBReadOnlyList<DecisionOutcome> PossibleOutcomes { get; }` |
| `IsCancelled` | `public bool IsCancelled { get; }` |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter { get; }` |
| `IsPlayerChooser` | `public bool IsPlayerChooser { get; }` |

## Key Methods

### StartElection
`public void StartElection()`

**Purpose:** Starts the `election` flow or state machine.

```csharp
// Obtain an instance of KingdomElection from the subsystem API first
KingdomElection kingdomElection = ...;
kingdomElection.StartElection();
```

### StartElectionWithoutPlayer
`public void StartElectionWithoutPlayer()`

**Purpose:** Starts the `election without player` flow or state machine.

```csharp
// Obtain an instance of KingdomElection from the subsystem API first
KingdomElection kingdomElection = ...;
kingdomElection.StartElectionWithoutPlayer();
```

### GetLikelihoodForSponsor
`public float GetLikelihoodForSponsor(Clan sponsor)`

**Purpose:** Reads and returns the `likelihood for sponsor` value held by the current object.

```csharp
// Obtain an instance of KingdomElection from the subsystem API first
KingdomElection kingdomElection = ...;
var result = kingdomElection.GetLikelihoodForSponsor(sponsor);
```

### GetRelationChangeWithSponsor
`public int GetRelationChangeWithSponsor(Hero opposerOrSupporter, Supporter.SupportWeights supportWeight, bool isOpposingSides)`

**Purpose:** Reads and returns the `relation change with sponsor` value held by the current object.

```csharp
// Obtain an instance of KingdomElection from the subsystem API first
KingdomElection kingdomElection = ...;
var result = kingdomElection.GetRelationChangeWithSponsor(opposerOrSupporter, supportWeight, false);
```

### GetChosenOutcomeText
`public TextObject GetChosenOutcomeText()`

**Purpose:** Reads and returns the `chosen outcome text` value held by the current object.

```csharp
// Obtain an instance of KingdomElection from the subsystem API first
KingdomElection kingdomElection = ...;
var result = kingdomElection.GetChosenOutcomeText();
```

### DetermineOfficialSupport
`public void DetermineOfficialSupport()`

**Purpose:** Determines the result of `official support` based on the current state.

```csharp
// Obtain an instance of KingdomElection from the subsystem API first
KingdomElection kingdomElection = ...;
kingdomElection.DetermineOfficialSupport();
```

### GetInfluenceCostOfOutcome
`public int GetInfluenceCostOfOutcome(DecisionOutcome outcome, Clan supporter, Supporter.SupportWeights weight)`

**Purpose:** Reads and returns the `influence cost of outcome` value held by the current object.

```csharp
// Obtain an instance of KingdomElection from the subsystem API first
KingdomElection kingdomElection = ...;
var result = kingdomElection.GetInfluenceCostOfOutcome(outcome, supporter, weight);
```

### GetSecondaryEffects
`public TextObject GetSecondaryEffects()`

**Purpose:** Reads and returns the `secondary effects` value held by the current object.

```csharp
// Obtain an instance of KingdomElection from the subsystem API first
KingdomElection kingdomElection = ...;
var result = kingdomElection.GetSecondaryEffects();
```

### OnPlayerSupport
`public void OnPlayerSupport(DecisionOutcome decisionOutcome, Supporter.SupportWeights supportWeight)`

**Purpose:** Invoked when the `player support` event is raised.

```csharp
// Obtain an instance of KingdomElection from the subsystem API first
KingdomElection kingdomElection = ...;
kingdomElection.OnPlayerSupport(decisionOutcome, supportWeight);
```

### ApplySelection
`public void ApplySelection()`

**Purpose:** Applies the effect of `selection` to the current object.

```csharp
// Obtain an instance of KingdomElection from the subsystem API first
KingdomElection kingdomElection = ...;
kingdomElection.ApplySelection();
```

### GetSortedDecisionOutcomes
`public MBList<DecisionOutcome> GetSortedDecisionOutcomes()`

**Purpose:** Reads and returns the `sorted decision outcomes` value held by the current object.

```csharp
// Obtain an instance of KingdomElection from the subsystem API first
KingdomElection kingdomElection = ...;
var result = kingdomElection.GetSortedDecisionOutcomes();
```

### GetGeneralTitle
`public TextObject GetGeneralTitle()`

**Purpose:** Reads and returns the `general title` value held by the current object.

```csharp
// Obtain an instance of KingdomElection from the subsystem API first
KingdomElection kingdomElection = ...;
var result = kingdomElection.GetGeneralTitle();
```

### GetTitle
`public TextObject GetTitle()`

**Purpose:** Reads and returns the `title` value held by the current object.

```csharp
// Obtain an instance of KingdomElection from the subsystem API first
KingdomElection kingdomElection = ...;
var result = kingdomElection.GetTitle();
```

### GetDescription
`public TextObject GetDescription()`

**Purpose:** Reads and returns the `description` value held by the current object.

```csharp
// Obtain an instance of KingdomElection from the subsystem API first
KingdomElection kingdomElection = ...;
var result = kingdomElection.GetDescription();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomElection kingdomElection = ...;
kingdomElection.StartElection();
```

## See Also

- [Area Index](../)