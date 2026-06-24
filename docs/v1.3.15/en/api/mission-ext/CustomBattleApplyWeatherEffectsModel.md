<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleApplyWeatherEffectsModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleApplyWeatherEffectsModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleApplyWeatherEffectsModel : ApplyWeatherEffectsModel`
**Base:** `ApplyWeatherEffectsModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleApplyWeatherEffectsModel.cs`

## Overview

`CustomBattleApplyWeatherEffectsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CustomBattleApplyWeatherEffectsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ApplyWeatherEffects
`public override void ApplyWeatherEffects()`

**Purpose:** Applies `weather effects` to the current object.

## Usage Example

```csharp
Game.Current.ReplaceModel<CustomBattleApplyWeatherEffectsModel>(new MyCustomBattleApplyWeatherEffectsModel());
```

## See Also

- [Complete Class Catalog](../catalog)