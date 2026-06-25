---
title: "NoAttackBarterable"
description: "Auto-generated class reference for NoAttackBarterable."
---
# NoAttackBarterable

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem.Barterables
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NoAttackBarterable : Barterable`
**Base:** `Barterable`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem.Barterables/NoAttackBarterable.cs`

## Overview

`NoAttackBarterable` lives in `TaleWorlds.CampaignSystem.BarterSystem.Barterables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.BarterSystem.Barterables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public override TextObject Name { get; }` |

## Key Methods

### Apply
`public override void Apply()`

**Purpose:** Applies the this instance's effect to its target.

```csharp
// Obtain an instance of NoAttackBarterable from the subsystem API first
NoAttackBarterable noAttackBarterable = ...;
noAttackBarterable.Apply();
```

### GetUnitValueForFaction
`public override int GetUnitValueForFaction(IFaction faction)`

**Purpose:** Reads and returns the unit value for faction value held by the this instance.

```csharp
// Obtain an instance of NoAttackBarterable from the subsystem API first
NoAttackBarterable noAttackBarterable = ...;
var result = noAttackBarterable.GetUnitValueForFaction(faction);
```

### GetVisualIdentifier
`public override ImageIdentifier GetVisualIdentifier()`

**Purpose:** Reads and returns the visual identifier value held by the this instance.

```csharp
// Obtain an instance of NoAttackBarterable from the subsystem API first
NoAttackBarterable noAttackBarterable = ...;
var result = noAttackBarterable.GetVisualIdentifier();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NoAttackBarterable noAttackBarterable = ...;
noAttackBarterable.Apply();
```

## See Also

- [Area Index](../)