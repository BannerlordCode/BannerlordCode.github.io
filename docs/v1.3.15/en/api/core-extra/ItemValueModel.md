<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemValueModel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemValueModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class ItemValueModel : MBGameModel<ItemValueModel>`
**Base:** `MBGameModel<ItemValueModel>`
**File:** `TaleWorlds.Core/ItemValueModel.cs`

## Overview

`ItemValueModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<ItemValueModel>(new MyItemValueModel())` to change how it computes.

## Key Methods

### GetEquipmentValueFromTier
```csharp
public abstract float GetEquipmentValueFromTier(float itemTierf)
```

### CalculateTier
```csharp
public abstract float CalculateTier(ItemObject item)
```

### CalculateValue
```csharp
public abstract int CalculateValue(ItemObject item)
```

### GetIsTransferable
```csharp
public abstract bool GetIsTransferable(ItemObject item)
```

## Usage Example

```csharp
// Typical usage of ItemValueModel (Model)
Game.Current.ReplaceModel<ItemValueModel>(new MyItemValueModel());
```

## See Also

- [Complete Class Catalog](../catalog)