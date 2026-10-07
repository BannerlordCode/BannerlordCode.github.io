---
title: "DefaultMapWeatherModel"
description: "Auto-generated class reference for DefaultMapWeatherModel."
---
# DefaultMapWeatherModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapWeatherModel : MapWeatherModel`
**Base:** `MapWeatherModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapWeatherModel.cs`

## Overview

`DefaultMapWeatherModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMapWeatherModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultMapWeatherModel` is the shipped answer, not the extension point. The abstract `MapWeatherModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `MapWeatherModel` is declared `MBGameModel<MapWeatherModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/MapWeatherModel.cs:8`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<MapWeatherModel>(new DefaultMapWeatherModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:268`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public class MyMapWeatherModel : MapWeatherModel
{
    // Nine of the eleven members on the base are abstract, so delegating is the whole job.
    // Vec3 comes from TaleWorlds.Library and AtmosphereState from TaleWorlds.Core.
    private readonly DefaultMapWeatherModel _stock = new DefaultMapWeatherModel();

    public override AtmosphereState GetInterpolatedAtmosphereState(CampaignTime timeOfYear, Vec3 pos)
    {
        return _stock.GetInterpolatedAtmosphereState(timeOfYear, pos);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<MapWeatherModel>(new MyMapWeatherModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultMapWeatherModel>(new DefaultMapWeatherModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultMapWeatherModel` is an `MBGameModel<MapWeatherModel>`, not an `MBGameModel<DefaultMapWeatherModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:674`, `GetGameModel<MapWeatherModel>()`), so nothing would ever look up a type you invented.

## Key Properties

| Name | Signature |
|------|-----------|
| `WeatherUpdatePeriod` | `public override CampaignTime WeatherUpdatePeriod { get; }` |
| `WeatherUpdateFrequency` | `public override CampaignTime WeatherUpdateFrequency { get; }` |
| `Angle` | `public float Angle { get; }` |
| `Altitude` | `public float Altitude { get; }` |

## Key Methods

### GetInterpolatedAtmosphereState
`public override AtmosphereState GetInterpolatedAtmosphereState(CampaignTime timeOfYear, Vec3 pos)`

**Purpose:** Reads and returns the interpolated atmosphere state value held by the this instance.

```csharp
// Obtain an instance of DefaultMapWeatherModel from the subsystem API first
DefaultMapWeatherModel defaultMapWeatherModel = ...;
var result = defaultMapWeatherModel.GetInterpolatedAtmosphereState(timeOfYear, pos);
```

### GetAtmosphereModel
`public override AtmosphereInfo GetAtmosphereModel(CampaignVec2 position)`

**Purpose:** Reads and returns the atmosphere model value held by the this instance.

```csharp
// Obtain an instance of DefaultMapWeatherModel from the subsystem API first
DefaultMapWeatherModel defaultMapWeatherModel = ...;
var result = defaultMapWeatherModel.GetAtmosphereModel(position);
```

### InitializeCaches
`public override void InitializeCaches()`

**Purpose:** Prepares the resources, state, or bindings required by caches.

```csharp
// Obtain an instance of DefaultMapWeatherModel from the subsystem API first
DefaultMapWeatherModel defaultMapWeatherModel = ...;
defaultMapWeatherModel.InitializeCaches();
```

### UpdateWeatherForPosition
`public override MapWeatherModel.WeatherEvent UpdateWeatherForPosition(CampaignVec2 position, CampaignTime ct)`

**Purpose:** Recalculates and stores the latest representation of weather for position.

```csharp
// Obtain an instance of DefaultMapWeatherModel from the subsystem API first
DefaultMapWeatherModel defaultMapWeatherModel = ...;
var result = defaultMapWeatherModel.UpdateWeatherForPosition(position, ct);
```

### GetSnowAndRainDataForPosition
`public override void GetSnowAndRainDataForPosition(Vec2 position, CampaignTime ct, out float snowValue, out float rainValue)`

**Purpose:** Reads and returns the snow and rain data for position value held by the this instance.

```csharp
// Obtain an instance of DefaultMapWeatherModel from the subsystem API first
DefaultMapWeatherModel defaultMapWeatherModel = ...;
defaultMapWeatherModel.GetSnowAndRainDataForPosition(position, ct, snowValue, rainValue);
```

### GetWeatherEventInPosition
`public override MapWeatherModel.WeatherEvent GetWeatherEventInPosition(Vec2 pos)`

**Purpose:** Reads and returns the weather event in position value held by the this instance.

```csharp
// Obtain an instance of DefaultMapWeatherModel from the subsystem API first
DefaultMapWeatherModel defaultMapWeatherModel = ...;
var result = defaultMapWeatherModel.GetWeatherEventInPosition(pos);
```

### GetWeatherEffectOnTerrainForPosition
`public override MapWeatherModel.WeatherEventEffectOnTerrain GetWeatherEffectOnTerrainForPosition(Vec2 pos)`

**Purpose:** Reads and returns the weather effect on terrain for position value held by the this instance.

```csharp
// Obtain an instance of DefaultMapWeatherModel from the subsystem API first
DefaultMapWeatherModel defaultMapWeatherModel = ...;
var result = defaultMapWeatherModel.GetWeatherEffectOnTerrainForPosition(pos);
```

### GetSeasonTimeFactorOfCampaignTime
`public override void GetSeasonTimeFactorOfCampaignTime(CampaignTime ct, out float timeFactorForSnow, out float timeFactorForRain, bool snapCampaignTimeToWeatherPeriod = true)`

**Purpose:** Reads and returns the season time factor of campaign time value held by the this instance.

```csharp
// Obtain an instance of DefaultMapWeatherModel from the subsystem API first
DefaultMapWeatherModel defaultMapWeatherModel = ...;
defaultMapWeatherModel.GetSeasonTimeFactorOfCampaignTime(ct, timeFactorForSnow, timeFactorForRain, false);
```

### GetWindForPosition
`public override Vec2 GetWindForPosition(CampaignVec2 position)`

**Purpose:** Reads and returns the wind for position value held by the this instance.

```csharp
// Obtain an instance of DefaultMapWeatherModel from the subsystem API first
DefaultMapWeatherModel defaultMapWeatherModel = ...;
var result = defaultMapWeatherModel.GetWindForPosition(position);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultMapWeatherModel` for it at `SandBoxManager.cs:268`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyMapWeatherModel : MapWeatherModel, so it is already an MBGameModel<MapWeatherModel>
        gameStarter.AddModel<MapWeatherModel>(new MyMapWeatherModel());
    }
}
```

## See Also

- [Area Index](../)