---
title: "SafePassageBarterable"
description: "Auto-generated class reference for SafePassageBarterable."
---
# SafePassageBarterable

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem.Barterables
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SafePassageBarterable : Barterable`
**Base:** `Barterable`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem.Barterables/SafePassageBarterable.cs`

## Overview

`SafePassageBarterable` lives in `TaleWorlds.CampaignSystem.BarterSystem.Barterables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.BarterSystem.Barterables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public override TextObject Name { get; }` |

## Key Methods

### GetUnitValueForFaction
`public override int GetUnitValueForFaction(IFaction faction)`

**Purpose:** Reads and returns the `unit value for faction` value held by the current object.

```csharp
// Obtain an instance of SafePassageBarterable from the subsystem API first
SafePassageBarterable safePassageBarterable = ...;
var result = safePassageBarterable.GetUnitValueForFaction(faction);
```

### GetPlayerStrengthRatioInEncounter
`public float GetPlayerStrengthRatioInEncounter()`

**Purpose:** Reads and returns the `player strength ratio in encounter` value held by the current object.

```csharp
// Obtain an instance of SafePassageBarterable from the subsystem API first
SafePassageBarterable safePassageBarterable = ...;
var result = safePassageBarterable.GetPlayerStrengthRatioInEncounter();
```

### IsCompatible
`public override bool IsCompatible(Barterable barterable)`

**Purpose:** Determines whether the current object is in the `compatible` state or condition.

```csharp
// Obtain an instance of SafePassageBarterable from the subsystem API first
SafePassageBarterable safePassageBarterable = ...;
var result = safePassageBarterable.IsCompatible(barterable);
```

### GetVisualIdentifier
`public override ImageIdentifier GetVisualIdentifier()`

**Purpose:** Reads and returns the `visual identifier` value held by the current object.

```csharp
// Obtain an instance of SafePassageBarterable from the subsystem API first
SafePassageBarterable safePassageBarterable = ...;
var result = safePassageBarterable.GetVisualIdentifier();
```

### Apply
`public override void Apply()`

**Purpose:** Applies the current object's effect to its target.

```csharp
// Obtain an instance of SafePassageBarterable from the subsystem API first
SafePassageBarterable safePassageBarterable = ...;
safePassageBarterable.Apply();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SafePassageBarterable safePassageBarterable = ...;
safePassageBarterable.GetUnitValueForFaction(faction);
```

## See Also

- [Area Index](../)