---
title: "DefaultItemValueModel"
description: "Auto-generated class reference for DefaultItemValueModel."
---
# DefaultItemValueModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DefaultItemValueModel : ItemValueModel`
**Base:** `ItemValueModel`
**File:** `TaleWorlds.Core/DefaultItemValueModel.cs`

## Overview

`DefaultItemValueModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultItemValueModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateValue
`public override int CalculateValue(ItemObject item)`

**Purpose:** Calculates the current value or result of value.

```csharp
// Obtain an instance of DefaultItemValueModel from the subsystem API first
DefaultItemValueModel defaultItemValueModel = ...;
var result = defaultItemValueModel.CalculateValue(item);
```

### GetIsTransferable
`public override bool GetIsTransferable(ItemObject item)`

**Purpose:** Reads and returns the is transferable value held by the this instance.

```csharp
// Obtain an instance of DefaultItemValueModel from the subsystem API first
DefaultItemValueModel defaultItemValueModel = ...;
var result = defaultItemValueModel.GetIsTransferable(item);
```

### GetEquipmentValueFromTier
`public override float GetEquipmentValueFromTier(float itemTierf)`

**Purpose:** Reads and returns the equipment value from tier value held by the this instance.

```csharp
// Obtain an instance of DefaultItemValueModel from the subsystem API first
DefaultItemValueModel defaultItemValueModel = ...;
var result = defaultItemValueModel.GetEquipmentValueFromTier(0);
```

### CalculateTier
`public override float CalculateTier(ItemObject item)`

**Purpose:** Calculates the current value or result of tier.

```csharp
// Obtain an instance of DefaultItemValueModel from the subsystem API first
DefaultItemValueModel defaultItemValueModel = ...;
var result = defaultItemValueModel.CalculateTier(item);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultItemValueModel>(new MyDefaultItemValueModel());
```

## See Also

- [Area Index](../)