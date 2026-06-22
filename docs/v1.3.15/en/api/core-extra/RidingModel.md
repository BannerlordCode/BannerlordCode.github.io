<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RidingModel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RidingModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class RidingModel : MBGameModel<RidingModel>`
**Base:** `MBGameModel<RidingModel>`
**File:** `TaleWorlds.Core/RidingModel.cs`

## Overview

`RidingModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<RidingModel>(new MyRidingModel())` to change how it computes.

## Key Methods

### CalculateAcceleration
```csharp
public abstract float CalculateAcceleration(in EquipmentElement mountElement, in EquipmentElement harnessElement, int ridingSkill)
```

## Usage Example

```csharp
// Typical usage of RidingModel (Model)
Game.Current.ReplaceModel<RidingModel>(new MyRidingModel());
```

## See Also

- [Complete Class Catalog](../catalog)