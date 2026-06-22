<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleApplyWeatherEffectsModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleApplyWeatherEffectsModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleApplyWeatherEffectsModel : ApplyWeatherEffectsModel`
**Base:** `ApplyWeatherEffectsModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleApplyWeatherEffectsModel.cs`

## Overview

`CustomBattleApplyWeatherEffectsModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<CustomBattleApplyWeatherEffectsModel>(new MyCustomBattleApplyWeatherEffectsModel())` to change how it computes.

## Key Methods

### ApplyWeatherEffects
```csharp
public override void ApplyWeatherEffects()
```

## Usage Example

```csharp
// Typical usage of CustomBattleApplyWeatherEffectsModel (Model)
Game.Current.ReplaceModel<CustomBattleApplyWeatherEffectsModel>(new MyCustomBattleApplyWeatherEffectsModel());
```

## See Also

- [Complete Class Catalog](../catalog)