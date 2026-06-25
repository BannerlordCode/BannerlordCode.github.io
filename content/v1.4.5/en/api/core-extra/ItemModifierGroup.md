---
title: "ItemModifierGroup"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemModifierGroup`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ItemModifierGroup

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ItemModifierGroup : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/ItemModifierGroup.cs`

## Overview

`ItemModifierGroup` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NoModifierLootScore` | `public int NoModifierLootScore { get; }` |
| `NoModifierProductionScore` | `public int NoModifierProductionScore { get; }` |

## Key Methods

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### AddItemModifier
`public void AddItemModifier(ItemModifier itemModifier)`

**Purpose:** Adds `item modifier` to the current collection or state.

### GetRandomItemModifierLootScoreBased
`public ItemModifier GetRandomItemModifierLootScoreBased()`

**Purpose:** Gets the current value of `random item modifier loot score based`.

### GetRandomItemModifierProductionScoreBased
`public ItemModifier GetRandomItemModifierProductionScoreBased()`

**Purpose:** Gets the current value of `random item modifier production score based`.

### GetModifiersBasedOnQuality
`public List<ItemModifier> GetModifiersBasedOnQuality(ItemQuality quality)`

**Purpose:** Gets the current value of `modifiers based on quality`.

## Usage Example

```csharp
var value = new ItemModifierGroup();
value.Deserialize(objectManager, node);
```

## See Also

- [Complete Class Catalog](../catalog)