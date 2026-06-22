<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultItemValueModel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultItemValueModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DefaultItemValueModel : ItemValueModel`
**Base:** `ItemValueModel`
**File:** `TaleWorlds.Core/DefaultItemValueModel.cs`

## Overview

`DefaultItemValueModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultItemValueModel>(new MyDefaultItemValueModel())` to change how it computes.

## Key Methods

### CalculateValue
```csharp
public override int CalculateValue(ItemObject item)
```

### GetIsTransferable
```csharp
public override bool GetIsTransferable(ItemObject item)
```

### GetEquipmentValueFromTier
```csharp
public override float GetEquipmentValueFromTier(float itemTierf)
```

### CalculateTier
```csharp
public override float CalculateTier(ItemObject item)
```

## Usage Example

```csharp
// Typical usage of DefaultItemValueModel (Model)
Game.Current.ReplaceModel<DefaultItemValueModel>(new MyDefaultItemValueModel());
```

## See Also

- [Complete Class Catalog](../catalog)