---
title: "RevenueVillage"
description: "Auto-generated class reference for RevenueVillage."
---
# RevenueVillage

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RevenueVillage`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/RevenueFarmingIssueBehavior.cs`

## Overview

`RevenueVillage` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetDone
`public void SetDone()`

**Purpose:** Assigns a new value to done and updates the object's internal state.

```csharp
// Obtain an instance of RevenueVillage from the subsystem API first
RevenueVillage revenueVillage = ...;
revenueVillage.SetDone();
```

### SetAdditionalProgress
`public void SetAdditionalProgress(float progress)`

**Purpose:** Assigns a new value to additional progress and updates the object's internal state.

```csharp
// Obtain an instance of RevenueVillage from the subsystem API first
RevenueVillage revenueVillage = ...;
revenueVillage.SetAdditionalProgress(0);
```

### GetIsCompleted
`public bool GetIsCompleted()`

**Purpose:** Reads and returns the is completed value held by the this instance.

```csharp
// Obtain an instance of RevenueVillage from the subsystem API first
RevenueVillage revenueVillage = ...;
var result = revenueVillage.GetIsCompleted();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RevenueVillage revenueVillage = ...;
revenueVillage.SetDone();
```

## See Also

- [Area Index](../)