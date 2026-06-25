---
title: "ItemCategorySelector"
description: "Auto-generated class reference for ItemCategorySelector."
---
# ItemCategorySelector

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class ItemCategorySelector : MBGameModel<ItemCategorySelector>`
**Base:** `MBGameModel<ItemCategorySelector>`
**File:** `TaleWorlds.Core/ItemCategorySelector.cs`

## Overview

`ItemCategorySelector` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetItemCategoryForItem
`public abstract ItemCategory GetItemCategoryForItem(ItemObject itemObject)`

**Purpose:** **Purpose:** Reads and returns the item category for item value held by the this instance.

```csharp
// Obtain an instance of ItemCategorySelector from the subsystem API first
ItemCategorySelector itemCategorySelector = ...;
var result = itemCategorySelector.GetItemCategoryForItem(itemObject);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ItemCategorySelector instance = ...;
```

## See Also

- [Area Index](../)