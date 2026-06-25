---
title: "ItemModifierGroup"
description: "Auto-generated class reference for ItemModifierGroup."
---
# ItemModifierGroup

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ItemModifierGroup : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ItemModifierGroup.cs`

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

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of ItemModifierGroup from the subsystem API first
ItemModifierGroup itemModifierGroup = ...;
itemModifierGroup.Deserialize(objectManager, node);
```

### AddItemModifier
`public void AddItemModifier(ItemModifier itemModifier)`

**Purpose:** Adds item modifier to the current collection or state.

```csharp
// Obtain an instance of ItemModifierGroup from the subsystem API first
ItemModifierGroup itemModifierGroup = ...;
itemModifierGroup.AddItemModifier(itemModifier);
```

### GetRandomItemModifierLootScoreBased
`public ItemModifier GetRandomItemModifierLootScoreBased()`

**Purpose:** Reads and returns the random item modifier loot score based value held by the this instance.

```csharp
// Obtain an instance of ItemModifierGroup from the subsystem API first
ItemModifierGroup itemModifierGroup = ...;
var result = itemModifierGroup.GetRandomItemModifierLootScoreBased();
```

### GetRandomItemModifierProductionScoreBased
`public ItemModifier GetRandomItemModifierProductionScoreBased()`

**Purpose:** Reads and returns the random item modifier production score based value held by the this instance.

```csharp
// Obtain an instance of ItemModifierGroup from the subsystem API first
ItemModifierGroup itemModifierGroup = ...;
var result = itemModifierGroup.GetRandomItemModifierProductionScoreBased();
```

### GetModifiersBasedOnQuality
`public List<ItemModifier> GetModifiersBasedOnQuality(ItemQuality quality)`

**Purpose:** Reads and returns the modifiers based on quality value held by the this instance.

```csharp
// Obtain an instance of ItemModifierGroup from the subsystem API first
ItemModifierGroup itemModifierGroup = ...;
var result = itemModifierGroup.GetModifiersBasedOnQuality(quality);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemModifierGroup itemModifierGroup = ...;
itemModifierGroup.Deserialize(objectManager, node);
```

## See Also

- [Area Index](../)