<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ApplyWeatherEffectsModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ApplyWeatherEffectsModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ApplyWeatherEffectsModel : MBGameModel<ApplyWeatherEffectsModel>`
**Base:** `MBGameModel<ApplyWeatherEffectsModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/ApplyWeatherEffectsModel.cs`

## Overview

`ApplyWeatherEffectsModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<ApplyWeatherEffectsModel>(new MyApplyWeatherEffectsModel())` to change how it computes.

## Key Methods

### ApplyWeatherEffects
```csharp
public abstract void ApplyWeatherEffects()
```

## Usage Example

```csharp
// Typical usage of ApplyWeatherEffectsModel (Model)
Game.Current.ReplaceModel<ApplyWeatherEffectsModel>(new MyApplyWeatherEffectsModel());
```

## See Also

- [Complete Class Catalog](../catalog)