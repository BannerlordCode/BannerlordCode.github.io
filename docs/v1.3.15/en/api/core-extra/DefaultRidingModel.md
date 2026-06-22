<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultRidingModel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultRidingModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DefaultRidingModel : RidingModel`
**Base:** `RidingModel`
**File:** `TaleWorlds.Core/DefaultRidingModel.cs`

## Overview

`DefaultRidingModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultRidingModel>(new MyDefaultRidingModel())` to change how it computes.

## Key Methods

### CalculateAcceleration
```csharp
public override float CalculateAcceleration(in EquipmentElement mountElement, in EquipmentElement harnessElement, int ridingSkill)
```

## Usage Example

```csharp
// Typical usage of DefaultRidingModel (Model)
Game.Current.ReplaceModel<DefaultRidingModel>(new MyDefaultRidingModel());
```

## See Also

- [Complete Class Catalog](../catalog)