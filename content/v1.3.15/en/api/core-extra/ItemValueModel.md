---
title: "ItemValueModel"
description: "Auto-generated class reference for ItemValueModel."
---
# ItemValueModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class ItemValueModel : MBGameModel<ItemValueModel>`
**Base:** `MBGameModel<ItemValueModel>`
**File:** `TaleWorlds.Core/ItemValueModel.cs`

## Overview

`ItemValueModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ItemValueModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEquipmentValueFromTier
`public abstract float GetEquipmentValueFromTier(float itemTierf)`

**Purpose:** Reads and returns the equipment value from tier value held by the this instance.

```csharp
// Obtain an instance of ItemValueModel from the subsystem API first
ItemValueModel itemValueModel = ...;
var result = itemValueModel.GetEquipmentValueFromTier(0);
```

### CalculateTier
`public abstract float CalculateTier(ItemObject item)`

**Purpose:** Calculates the current value or result of tier.

```csharp
// Obtain an instance of ItemValueModel from the subsystem API first
ItemValueModel itemValueModel = ...;
var result = itemValueModel.CalculateTier(item);
```

### CalculateValue
`public abstract int CalculateValue(ItemObject item)`

**Purpose:** Calculates the current value or result of value.

```csharp
// Obtain an instance of ItemValueModel from the subsystem API first
ItemValueModel itemValueModel = ...;
var result = itemValueModel.CalculateValue(item);
```

### GetIsTransferable
`public abstract bool GetIsTransferable(ItemObject item)`

**Purpose:** Reads and returns the is transferable value held by the this instance.

```csharp
// Obtain an instance of ItemValueModel from the subsystem API first
ItemValueModel itemValueModel = ...;
var result = itemValueModel.GetIsTransferable(item);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ItemValueModel instance = ...;
```

## See Also

- [Area Index](../)