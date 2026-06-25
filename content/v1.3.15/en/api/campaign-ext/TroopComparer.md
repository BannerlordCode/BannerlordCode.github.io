---
title: "TroopComparer"
description: "Auto-generated class reference for TroopComparer."
---
# TroopComparer

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TroopComparer : IComparer<TroopRosterElement>`
**Base:** `IComparer<TroopRosterElement>`
**File:** `TaleWorlds.CampaignSystem/Party/PartyScreenLogic.cs`

## Overview

`TroopComparer` lives in `TaleWorlds.CampaignSystem.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetIsAscending
`public void SetIsAscending(bool isAscending)`

**Purpose:** Assigns a new value to is ascending and updates the object's internal state.

```csharp
// Obtain an instance of TroopComparer from the subsystem API first
TroopComparer troopComparer = ...;
troopComparer.SetIsAscending(false);
```

### Compare
`public int Compare(TroopRosterElement x, TroopRosterElement y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of TroopComparer from the subsystem API first
TroopComparer troopComparer = ...;
var result = troopComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
TroopComparer instance = ...;
```

## See Also

- [Area Index](../)