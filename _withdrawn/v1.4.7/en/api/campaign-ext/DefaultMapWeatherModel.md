---
title: "DefaultMapWeatherModel"
description: "DefaultMapWeatherModel — class in TaleWorlds.CampaignSystem.GameComponents. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# DefaultMapWeatherModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultMapWeatherModel : MapWeatherModel`  
**Base:** `MapWeatherModel`  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapWeatherModel.cs`

## Overview

`DefaultMapWeatherModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends MapWeatherModel, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (11): `WeatherUpdatePeriod`, `WeatherUpdateFrequency`, `GetInterpolatedAtmosphereState`, `GetAtmosphereModel`, `InitializeCaches`, `UpdateWeatherForPosition`, ….
- **Extension points** (11): `WeatherUpdatePeriod`, `WeatherUpdateFrequency`, `GetInterpolatedAtmosphereState`, `GetAtmosphereModel`, `InitializeCaches`, `UpdateWeatherForPosition`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetAtmosphereModel` | method (override) | Overrides the base member. Takes 1 argument: `CampaignVec2 position`. Returns `AtmosphereInfo`. Read path: prefer it over reaching for the backing store. |
| `GetInterpolatedAtmosphereState` | method (override) | Overrides the base member. Takes 2 arguments: `CampaignTime timeOfYear`, `Vec3 pos`. Returns `AtmosphereState`. Read path: prefer it over reaching for the backing store. |
| `GetSeasonTimeFactorOfCampaignTime` | method (override) | Overrides the base member. Takes 4 arguments: `CampaignTime ct`, `out float timeFactorForSnow`, `out float timeFactorForRain`, `bool snapCampaignTimeToWeatherPeriod`. Read path: prefer it over reaching for the backing store. |
| `GetSnowAndRainDataForPosition` | method (override) | Overrides the base member. Takes 4 arguments: `Vec2 position`, `CampaignTime ct`, `out float snowValue`, `out float rainValue`. Read path: prefer it over reaching for the backing store. |
| `GetWeatherEffectOnTerrainForPosition` | method (override) | Overrides the base member. Takes 1 argument: `Vec2 pos`. Returns `MapWeatherModel.WeatherEventEffectOnTerrain`. Read path: prefer it over reaching for the backing store. |
| `GetWeatherEventInPosition` | method (override) | Overrides the base member. Takes 1 argument: `Vec2 pos`. Returns `MapWeatherModel.WeatherEvent`. Read path: prefer it over reaching for the backing store. |
| `GetWindForPosition` | method (override) | Overrides the base member. Takes 1 argument: `CampaignVec2 position`. Returns `Vec2`. Read path: prefer it over reaching for the backing store. |
| `InitializeCaches` | method (override) | Overrides the base member. Takes no arguments. |
| `UpdateWeatherForPosition` | method (override) | Overrides the base member. Takes 2 arguments: `CampaignVec2 position`, `CampaignTime ct`. Returns `MapWeatherModel.WeatherEvent`. Called from the owner’s update loop — do not assume a frame boundary. |
| `WeatherUpdateFrequency` | property (override) | Overrides the base member `CampaignTime` property. Read it for current state; a declared setter writes that state in place. |
| `WeatherUpdatePeriod` | property (override) | Overrides the base member `CampaignTime` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
var data = new DefaultMapWeatherModel
{
    WeatherUpdatePeriod = default,
    WeatherUpdateFrequency = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 11 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/GameComponents/DefaultMapWeatherModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
