---
title: "DefaultItemValueModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultItemValueModel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `calculate value`.

### GetEquipmentValueFromTier
`public override float GetEquipmentValueFromTier(float itemTierf)`

**Purpose:** Gets the current value of `equipment value from tier`.

### CalculateTier
`public override float CalculateTier(ItemObject item)`

**Purpose:** Handles logic related to `calculate tier`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultItemValueModel>(new MyDefaultItemValueModel());
```

## See Also

- [Complete Class Catalog](../catalog)