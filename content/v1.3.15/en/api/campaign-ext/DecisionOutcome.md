---
title: "DecisionOutcome"
description: "Auto-generated class reference for DecisionOutcome."
---
# DecisionOutcome

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DecisionOutcome`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Election/DecisionOutcome.cs`

## Overview

`DecisionOutcome` lives in `TaleWorlds.CampaignSystem.Election` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Support` | `public float Support { get; }` |
| `Merit` | `public float Merit { get; set; }` |
| `SponsorClan` | `public Clan SponsorClan { get; set; }` |
| `InitialSupport` | `public float InitialSupport { get; set; }` |
| `Likelihood` | `public float Likelihood { get; set; }` |
| `TotalSupportPoints` | `public float TotalSupportPoints { get; set; }` |
| `WinChance` | `public float WinChance { get; set; }` |

## Key Methods

### GetDecisionTitle
`public abstract TextObject GetDecisionTitle()`

**Purpose:** Reads and returns the `decision title` value held by the current object.

```csharp
// Obtain an instance of DecisionOutcome from the subsystem API first
DecisionOutcome decisionOutcome = ...;
var result = decisionOutcome.GetDecisionTitle();
```

### GetDecisionDescription
`public abstract TextObject GetDecisionDescription()`

**Purpose:** Reads and returns the `decision description` value held by the current object.

```csharp
// Obtain an instance of DecisionOutcome from the subsystem API first
DecisionOutcome decisionOutcome = ...;
var result = decisionOutcome.GetDecisionDescription();
```

### GetDecisionLink
`public abstract string GetDecisionLink()`

**Purpose:** Reads and returns the `decision link` value held by the current object.

```csharp
// Obtain an instance of DecisionOutcome from the subsystem API first
DecisionOutcome decisionOutcome = ...;
var result = decisionOutcome.GetDecisionLink();
```

### GetDecisionImageIdentifier
`public abstract ImageIdentifier GetDecisionImageIdentifier()`

**Purpose:** Reads and returns the `decision image identifier` value held by the current object.

```csharp
// Obtain an instance of DecisionOutcome from the subsystem API first
DecisionOutcome decisionOutcome = ...;
var result = decisionOutcome.GetDecisionImageIdentifier();
```

### AddSupport
`public void AddSupport(Supporter supporter)`

**Purpose:** Adds `support` to the current collection or state.

```csharp
// Obtain an instance of DecisionOutcome from the subsystem API first
DecisionOutcome decisionOutcome = ...;
decisionOutcome.AddSupport(supporter);
```

### ResetSupport
`public void ResetSupport(Supporter supporter)`

**Purpose:** Returns `support` to its default or initial condition.

```csharp
// Obtain an instance of DecisionOutcome from the subsystem API first
DecisionOutcome decisionOutcome = ...;
decisionOutcome.ResetSupport(supporter);
```

### SetSponsor
`public void SetSponsor(Clan sponsorClan)`

**Purpose:** Assigns a new value to `sponsor` and updates the object's internal state.

```csharp
// Obtain an instance of DecisionOutcome from the subsystem API first
DecisionOutcome decisionOutcome = ...;
decisionOutcome.SetSponsor(sponsorClan);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
DecisionOutcome instance = ...;
```

## See Also

- [Area Index](../)