---
title: "MapColorGradeManager"
description: "Auto-generated class reference for MapColorGradeManager."
---
# MapColorGradeManager

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapColorGradeManager : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/MapColorGradeManager.cs`

## Overview

`MapColorGradeManager` is a `ScriptComponentBehavior` attached to a **map scene entity** — not a mission behaviour, not an agent component. It picks the colour grade the world map is rendered with, based on where the map camera is, how high it is, what time it is, and whether it is raining. It ticks every frame: `GetTickRequirement()` returns `Tick` (`MapColorGradeManager.cs:51`), and `OnTick` reads `Scene.TimeOfDay`, refreshes `SeasonTimeFactor` from `MBMapScene.GetSeasonTimeFactor`, then calls `ApplyAtmosphere(false)` and `ApplyColorGrade(dt)` (`MapColorGradeManager.cs:57` through `MapColorGradeManager.cs:60`).

Nothing constructs it in managed code. The instance arrives with the map scene, and `MapScreen` discovers it the only way it can — by asking the scene for the entity carrying the component and then taking the script component off that entity (`MapScreen.cs:620`, `MapScreen.cs:623`), caching it in a private field (`MapScreen.cs:3043`) and driving it from the map tick (`MapScreen.cs:869`). So it exists only on campaign-map scenes; in a mission or a lobby there is no such entity and the lookup yields null.

Its data comes from two external sources during `OnInit`. `ReadColorGradesXml` merges the module XML document `soln_worldmap_color_grades` (`MapColorGradeManager.cs:132`) and builds a `byte -> texture name` map, seeding index `1` with `worldmap_colorgrade_stratosphere` and index `2` with `worldmap_colorgrade_night` (`MapColorGradeManager.cs:26`, `MapColorGradeManager.cs:27`). Then `MBMapScene.GetColorGradeGridData` fills the `byte[262144]` grid (`MapColorGradeManager.cs:29`, `MapColorGradeManager.cs:278`) from the named grid texture, `worldmap_colorgrade_grid` by default (`MapColorGradeManager.cs:272`).

## Mental Model

The grade is chosen by **overwriting the grid lookup in priority order**, and the order is the whole design. `ApplyColorGrade` first converts the map camera's world position into a 512×512 grid cell — `Floor(origin.x / terrainSize.X * 512f)` and the same for Y, each clamped to `0..512` — and reads `colorGradeGrid[num3 * 512 + num2]` (`MapColorGradeManager.cs:192`, `MapColorGradeManager.cs:193`, `MapColorGradeManager.cs:194`, `MapColorGradeManager.cs:196`). That is the *base* grade. Then three overrides follow, each able to discard the previous answer: altitude above `400f` forces grade `1`, the stratosphere (`MapColorGradeManager.cs:197`, `MapColorGradeManager.cs:199`); `TimeOfDay` outside `2f..22f` forces grade `2`, night (`MapColorGradeManager.cs:201`, `MapColorGradeManager.cs:203`); and rain below altitude `50f` forces grade `160` *and* sets the blend factor to `0.2f` (`MapColorGradeManager.cs:205`, `MapColorGradeManager.cs:207`, `MapColorGradeManager.cs:208`). Because night is tested after altitude, night wins over stratosphere, and rain wins over both. No XML entry is required for grade `160` — the mapping only guarantees 1 and 2.

The grid index arithmetic has an off-by-one at the boundary. `MBMath.ClampIndex(num2, 0, 512)` and the same for the row both permit `512` (`MapColorGradeManager.cs:194`, `MapColorGradeManager.cs:195`), but `colorGradeGrid` has 262144 elements, so the largest valid index is 262143 — and `512 * 512 + 512` is 262144. A camera whose clamped position lands on the maximum of both axes indexes one past the end of the array. The altitude and time overrides usually replace the read afterwards, but the read itself happens first (`MapColorGradeManager.cs:196`).

`terrainSize` starts at `(1f, 1f)` (`MapColorGradeManager.cs:293`) and is only filled in from `Scene.GetTerrainData` when `Scene.ContainsTerrain` (`MapColorGradeManager.cs:16`, `MapColorGradeManager.cs:23`, `MapColorGradeManager.cs:24`). On a scene without terrain the divisor stays `1f`, so the cell is effectively `Floor(origin)` — meaningless as a grid lookup but always clamped into range.

Two transition records, `primaryTransitionRecord` and `secondaryTransitionRecord` (`MapColorGradeManager.cs:284`, `MapColorGradeManager.cs:287`), hold the active `color1` / `color2` / `alpha` triple (`MapColorGradeManager.cs:324` through `MapColorGradeManager.cs:330`). A transition is only started when the selected grade differs from `lastColorGrade` (`MapColorGradeManager.cs:210`), so re-selecting the same grade every frame costs nothing. `transitionSpeedFactor = 1f` (`MapColorGradeManager.cs:299`) is the global multiplier on how fast those alphas advance — a `private const`, so 1.3.0 exposes no public knob for it.

The editor path is a genuinely separate implementation. `OnEditorTick` refreshes `TimeOfDay` from the scene only if it changed, recomputes `terrainSize` — and *resets it to `1f` when there is no terrain* (`MapColorGradeManager.cs:83`, `MapColorGradeManager.cs:84`) — advances `TimeOfDay` by `dt` and wraps at 24 when `AtmosphereSimulationEnabled` is set, and applies the colour grade only when `ColorGradeEnabled` (`MapColorGradeManager.cs:66` through `MapColorGradeManager.cs:98`). The runtime `OnTick` applies both unconditionally. Toggling `ColorGradeEnabled` off in the editor calls `Scene.SetColorGradeBlend("", "", -1f)` and resets `lastColorGrade` (`MapColorGradeManager.cs:109`, `MapColorGradeManager.cs:110`).

## How to use

**Getting it.** Ask the map scene for the entity carrying it, exactly as `MapScreen` does. This only works on the campaign map:

```csharp
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade.View.Scripts;

GameEntity holder = MapScene.GetFirstEntityWithScriptComponent<MapColorGradeManager>();
if (holder != null)
{
    MapColorGradeManager grades = holder.GetFirstScriptOfType<MapColorGradeManager>();
    grades.ApplyAtmosphere(false);
    grades.ApplyColorGrade(0f);   // dt == 0: retarget the blend without advancing it
}
```

To add a colour grade, extend the module XML rather than the C#. `ReadColorGradesXml` reads `<worldmap_color_grades>` containing `<color_grade_grid name=...>`, `<color_grade_default name=...>`, `<color_grade_night name=...>` and any number of `<color_grade name= value=...>` entries whose `value` must parse as a `byte` (`MapColorGradeManager.cs:143` through `MapColorGradeManager.cs:167`). An entry whose `value` is `256` or negative is silently skipped by the `byte.TryParse` guard.

## Key Methods

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of MapColorGradeManager from the subsystem API first
MapColorGradeManager mapColorGradeManager = ...;
var result = mapColorGradeManager.GetTickRequirement();
```

### ApplyAtmosphere
`public void ApplyAtmosphere(bool forceLoadTextures)`

**Purpose:** Applies the effect of atmosphere to the this instance.

```csharp
// Obtain an instance of MapColorGradeManager from the subsystem API first
MapColorGradeManager mapColorGradeManager = ...;
mapColorGradeManager.ApplyAtmosphere(false);
```

### ApplyColorGrade
`public void ApplyColorGrade(float dt)`

**Purpose:** Applies the effect of color grade to the this instance.

```csharp
// Obtain an instance of MapColorGradeManager from the subsystem API first
MapColorGradeManager mapColorGradeManager = ...;
mapColorGradeManager.ApplyColorGrade(0);
```

## See Also

- [MissionCameraFadeView — a `[DefaultView]` behaviour, contrast with this map-scene component](../MissionCameraFadeView)
- [MBGameManager — the campaign-side manager whose map screen owns this component](../MBGameManager)
- [MissionReinforcementsHelper — another static helper in this namespace with no instance](../MissionReinforcementsHelper)
- [Area Index](../)
