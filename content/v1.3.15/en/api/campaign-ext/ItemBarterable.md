---
title: "ItemBarterable"
description: "Auto-generated class reference for ItemBarterable."
---
# ItemBarterable

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem.Barterables
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemBarterable : Barterable`
**Base:** `Barterable`
**File:** `TaleWorlds.CampaignSystem/BarterSystem/Barterables/ItemBarterable.cs`

## Overview

`ItemBarterable` lives in `TaleWorlds.CampaignSystem.BarterSystem.Barterables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.BarterSystem.Barterables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringID` | `public override string StringID { get; }` |
| `ItemRosterElement` | `public ItemRosterElement ItemRosterElement { get; }` |
| `MaxAmount` | `public override int MaxAmount { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `ItemValue` | `public int ItemValue { get; }` |

## Key Methods

### GetUnitValueForFaction
`public override int GetUnitValueForFaction(IFaction faction)`

**Purpose:** Reads and returns the unit value for faction value held by the this instance.

```csharp
// Obtain an instance of ItemBarterable from the subsystem API first
ItemBarterable itemBarterable = ...;
var result = itemBarterable.GetUnitValueForFaction(faction);
```

### CheckBarterLink
`public override void CheckBarterLink(Barterable parentLinkedBarterable)`

**Purpose:** Verifies whether barter link holds true for the this instance.

```csharp
// Obtain an instance of ItemBarterable from the subsystem API first
ItemBarterable itemBarterable = ...;
itemBarterable.CheckBarterLink(parentLinkedBarterable);
```

### GetVisualIdentifier
`public override ImageIdentifier GetVisualIdentifier()`

**Purpose:** Reads and returns the visual identifier value held by the this instance.

```csharp
// Obtain an instance of ItemBarterable from the subsystem API first
ItemBarterable itemBarterable = ...;
var result = itemBarterable.GetVisualIdentifier();
```

### GetEncyclopediaLink
`public override string GetEncyclopediaLink()`

**Purpose:** Reads and returns the encyclopedia link value held by the this instance.

```csharp
// Obtain an instance of ItemBarterable from the subsystem API first
ItemBarterable itemBarterable = ...;
var result = itemBarterable.GetEncyclopediaLink();
```

### Apply
`public override void Apply()`

**Purpose:** Applies the this instance's effect to its target.

```csharp
// Obtain an instance of ItemBarterable from the subsystem API first
ItemBarterable itemBarterable = ...;
itemBarterable.Apply();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemBarterable itemBarterable = ...;
itemBarterable.GetUnitValueForFaction(faction);
```

## See Also

- [Area Index](../)