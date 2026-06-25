---
title: "DefaultItemCategorySelector"
description: "Auto-generated class reference for DefaultItemCategorySelector."
---
# DefaultItemCategorySelector

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DefaultItemCategorySelector : ItemCategorySelector`
**Base:** `ItemCategorySelector`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/DefaultItemCategorySelector.cs`

## Overview

`DefaultItemCategorySelector` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetItemCategoryForItem
`public override ItemCategory GetItemCategoryForItem(ItemObject itemObject)`

**Purpose:** **Purpose:** Reads and returns the item category for item value held by the this instance.

```csharp
// Obtain an instance of DefaultItemCategorySelector from the subsystem API first
DefaultItemCategorySelector defaultItemCategorySelector = ...;
var result = defaultItemCategorySelector.GetItemCategoryForItem(itemObject);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DefaultItemCategorySelector defaultItemCategorySelector = ...;
defaultItemCategorySelector.GetItemCategoryForItem(itemObject);
```

## See Also

- [Area Index](../)