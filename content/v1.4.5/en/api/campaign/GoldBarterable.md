---
title: "GoldBarterable"
description: "Auto-generated class reference for GoldBarterable."
---
# GoldBarterable

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem.Barterables
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GoldBarterable : Barterable`
**Base:** `Barterable`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem.Barterables/GoldBarterable.cs`

## Overview

`GoldBarterable` lives in `TaleWorlds.CampaignSystem.BarterSystem.Barterables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.BarterSystem.Barterables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetUnitValueForFaction
`public override int GetUnitValueForFaction(IFaction faction)`

**Purpose:** Reads and returns the unit value for faction value held by the this instance.

```csharp
// Obtain an instance of GoldBarterable from the subsystem API first
GoldBarterable goldBarterable = ...;
var result = goldBarterable.GetUnitValueForFaction(faction);
```

### GetVisualIdentifier
`public override ImageIdentifier GetVisualIdentifier()`

**Purpose:** Reads and returns the visual identifier value held by the this instance.

```csharp
// Obtain an instance of GoldBarterable from the subsystem API first
GoldBarterable goldBarterable = ...;
var result = goldBarterable.GetVisualIdentifier();
```

### GetEncyclopediaLink
`public override string GetEncyclopediaLink()`

**Purpose:** Reads and returns the encyclopedia link value held by the this instance.

```csharp
// Obtain an instance of GoldBarterable from the subsystem API first
GoldBarterable goldBarterable = ...;
var result = goldBarterable.GetEncyclopediaLink();
```

### Apply
`public override void Apply()`

**Purpose:** Applies the this instance's effect to its target.

```csharp
// Obtain an instance of GoldBarterable from the subsystem API first
GoldBarterable goldBarterable = ...;
goldBarterable.Apply();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GoldBarterable goldBarterable = ...;
goldBarterable.GetUnitValueForFaction(faction);
```

## See Also

- [Area Index](../)