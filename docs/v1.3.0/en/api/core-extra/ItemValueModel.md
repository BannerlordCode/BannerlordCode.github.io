<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemValueModel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `equipment value from tier`.

### CalculateTier
`public abstract float CalculateTier(ItemObject item)`

**Purpose:** Handles logic related to `calculate tier`.

### CalculateValue
`public abstract int CalculateValue(ItemObject item)`

**Purpose:** Handles logic related to `calculate value`.

## Usage Example

```csharp
var implementation = new CustomItemValueModel();
```

## See Also

- [Complete Class Catalog](../catalog)