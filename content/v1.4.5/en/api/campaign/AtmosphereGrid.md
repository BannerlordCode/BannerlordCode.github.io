---
title: "AtmosphereGrid"
description: "The spatial interpolator for weather: reads the discrete AtmosphereState nodes of the map scene and returns distance-weighted, SmoothStep-attenuated temperature, humidity, and colour grade for any Vec3. Its only caller in the whole tree is DefaultMapWeatherModel."
---

# AtmosphereGrid

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AtmosphereGrid`
**Base:** none (derives directly from object)
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/AtmosphereGrid.cs`

## Overview

`AtmosphereGrid` is the **spatial interpolation layer of the weather system**. The map scene hands it a set of discrete [AtmosphereState](../../core-extra/AtmosphereState) nodes through `GetAtmosphereStates()`; each node carries a position, mean and variance for temperature and humidity, two falloff radii, and a colour-grade texture name. `AtmosphereGrid` answers one question: **given a world position `Vec3 pos`, which nodes contribute to the temperature, humidity, and grade here, and by how much?**

In the architecture it carries the **"continuisation" slot** — upstream supplies sample points, the weather model wants a continuous value at any point. The 1.4.5 implementation is **inverse-distance weighting with a SmoothStep falloff**:

```csharp
pos.z *= 0.3f;
list.Sort((x, y) => x.Position.Distance(pos).CompareTo(y.Position.Distance(pos)));
...
float num3 = 1f - MBMath.SmoothStep(
    atmosphereState2.distanceForMaxWeight,
    atmosphereState2.distanceForMinWeight,
    value);
```

Only nodes whose weight is at least 0.001 accumulate, and the result is normalised by the total weight. `ColorGradeTexture` is **not averaged** — it takes the texture name of the highest-weighted node (the first branch where `flag` is still true), which is the pragmatic compromise for an art asset that cannot be numerically blended.

The entire tree has exactly one caller: [DefaultMapWeatherModel](../DefaultMapWeatherModel) constructs one at `DefaultMapWeatherModel.cs:91`, calls `Initialize()`, and forwards every `GetInterpolatedAtmosphereState` request to `GetInterpolatedStateInfo` (`DefaultMapWeatherModel.cs:88-93`).

## Mental Model

Think of it as **a weighted averager over discrete atmosphere nodes**.

- **Two steps, and the order matters.** Call `Initialize()` first to copy the map scene's nodes into the private `states` list, then call `GetInterpolatedStateInfo(pos)` as often as you like. **Querying without `Initialize()` does not throw** — `states` is an empty list, the whole loop runs over nothing, and because `num2 == 0f` the normalisation is skipped, so you get back an **all-zero `AtmosphereState` whose `ColorGradeTexture` is `"color_grade_empire_harsh"`** (`AtmosphereGrid.cs:42` and `62`). That is silent failure, not an exception.
- **`pos.z` is rewritten in place.** `AtmosphereGrid.cs:36`'s `pos.z *= 0.3f;` mutates a **value-type copy** (`Vec3` is a struct), so the caller's vector is unaffected — but it also means vertical weighting has been flattened by roughly 3.3×. Compute real 3D distance yourself if you need it.
- **Every query is a full sort.** `GetInterpolatedStateInfo` allocates a fresh `List<AtmosphereStateSortData>`, copies every node into it, then `Sort`s. With many nodes and frequent calls this is a visible allocation hotspot. **It does not belong on a per-frame path**; the weather model's four-hour cadence is a sensible frequency.
- **`ColorGradeTexture` comes from the nearest valid node, never averaged.** The first node with a weight of at least 0.001 wins outright, and later nodes only accumulate the numeric fields. That is why you see `"color_grade_empire_harsh"` — it is the **fallback for matching nothing at all**.
- **`Initialize()` depends on `Campaign.Current` and a live map scene.** A null `Campaign.Current.MapSceneWrapper` throws. After the map scene changes (map mods, pre-campaign phases) **you must call `Initialize()` again**, because what is cached is the previous map's nodes.

### The whole data flow

```text
IMapScene.GetAtmosphereStates()
  -> AtmosphereGrid.Initialize()  copies the List into the private states field
  -> GetInterpolatedStateInfo(Vec3 pos)
       pos.z *= 0.3
       sorts every node by Distance(pos) ascending
       per node: weight = 1 - SmoothStep(distanceForMaxWeight, distanceForMinWeight, dist)
       only when weight >= 0.001:
         the first such node decides ColorGradeTexture
         the four numeric fields accumulate as weight * value
       when totalWeight > 0: every field is divided by totalWeight
  -> returns an AtmosphereState
  -> DefaultMapWeatherModel derives temperature, humidity, and ambient light from it
```

## Key members

| Member | Signature | What this member is actually for |
| --- | --- | --- |
| `Initialize()` | `public void Initialize()` | The only loading step. Runs `states = Campaign.Current.MapSceneWrapper.GetAtmosphereStates().ToList()` (`AtmosphereGrid.cs:21`). **Depends on `Campaign.Current` and a loaded map scene**; either being null throws. **Must be re-run after a map change**, otherwise interpolation keeps running against the previous map's nodes. |
| `GetInterpolatedStateInfo(Vec3 pos)` | `public AtmosphereState GetInterpolatedStateInfo(Vec3 pos)` | The only query entry point. Returns a **freshly constructed** `AtmosphereState` and never mutates or reuses a cached node. **Allocates a sort list and sorts the whole set on every call**; with an empty `states` it returns all zeros plus `"color_grade_empire_harsh"` instead of throwing. |

## Examples

The canonical official usage, shaped exactly after `DefaultMapWeatherModel.cs:88-93`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

public static AtmosphereState SampleAt(Vec3 worldPosition)
{
    if (Campaign.Current == null || Campaign.Current.MapSceneWrapper == null)
    {
        return null;
    }

    AtmosphereGrid grid = new AtmosphereGrid();
    grid.Initialize();

    AtmosphereState sampled = grid.GetInterpolatedStateInfo(worldPosition);
    Debug.Print("temp=" + sampled.TemperatureAverage + " humidity=" + sampled.HumidityAverage, 0);
    return sampled;
}
```

Do not construct one yourself when the weather model already owns a live instance — a second `new` means a second full sort per query:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

CampaignVec2 position = MobileParty.MainParty.Position;
AtmosphereState sampled = Campaign.Current.Models.MapWeatherModel.GetInterpolatedAtmosphereState(
    CampaignTime.Now, position.AsVec3());

if (sampled != null)
{
    Debug.Print("color grade = " + sampled.ColorGradeTexture, 0);
    Debug.Print("temp var = " + sampled.TemperatureVariance, 0);
}
```

Rebuild after a map transition. `Initialize()` is idempotent assignment, so rebuilding costs one `ToList()`:

```csharp
using TaleWorlds.CampaignSystem;

public static AtmosphereGrid RebuildForCurrentMap()
{
    if (Campaign.Current == null || Campaign.Current.MapSceneWrapper == null)
    {
        return null;
    }

    AtmosphereGrid grid = new AtmosphereGrid();
    grid.Initialize();
    return grid;
}
```

## Risks and crash boundaries

- **Forgetting `Initialize()` fails silently, not loudly.** `states` stays an empty list and queries return an object with `TemperatureAverage` and `HumidityAverage` at 0 and `ColorGradeTexture` set to `"color_grade_empire_harsh"`. Nothing downstream raises an error; the weather model just computes nonsense.
- **Depends on `Campaign.Current.MapSceneWrapper`.** Main menu, early module load, and pre-map phases make `Initialize()` throw immediately.
- **The cache goes stale across map changes.** `states` holds one map's nodes. After switching maps without re-initialising, old-map coordinates are used to weight new-map positions and the whole distribution is wrong.
- **`pos.z` is flattened to 0.3×.** `AtmosphereGrid.cs:36` multiplies in place. `Vec3` being a struct means the caller's variable is safe, but nodes become nearly equidistant vertically, so the result is largely insensitive to height.
- **Every query is O(n log n): a full sort, two passes, and a `List` allocation.** Putting it on a per-frame path measurably raises GC pressure. Four-hourly updates, as the official model does, are reasonable; do not tighten that on your own.
- **The weight threshold is a hard-coded 0.001.** `AtmosphereGrid.cs:48` reads `if (!((double)num3 < 0.001))` — logically "at least", but written awkwardly. Nodes below the threshold do not participate at all, including their `ColorGradeTexture`.
- **`ColorGradeTexture` is never blended.** It snaps to the nearest valid node, so boundaries between regions with very different grades hard-cut instead of cross-fading.
- **`states` is private with no clear API.** The only way to discard the cache is to drop the whole `AtmosphereGrid` instance.
- **The returned object is fresh each time.** Mutating it affects neither the cache nor the next query.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/AtmosphereGrid.cs` is a 72-line original-source file containing a private nested struct `AtmosphereStateSortData` (`Vec3 Position` plus `int InitialIndex`). Four things to check across versions: whether the `pos.z *= 0.3f` flattening is still there, whether the 0.001 weight threshold survives, whether `"color_grade_empire_harsh"` is still the fallback, and whether `ColorGradeTexture` still snaps to the nearest node rather than blending. A change in any of them shifts custom weather mod behaviour.

## Dependencies

- Sole caller: `new AtmosphereGrid()` plus `Initialize()` at `DefaultMapWeatherModel.cs:91`, after which `GetInterpolatedAtmosphereState` forwards to this type — see [DefaultMapWeatherModel](../DefaultMapWeatherModel)
- Data source: `IMapScene.GetAtmosphereStates()` (declared at `TaleWorlds.CampaignSystem.Map/IMapScene.cs:72`) reached through `Campaign.Current.MapSceneWrapper`; it is the only input `Initialize()` takes
- Element type: [AtmosphereState](../../core-extra/AtmosphereState) (defined in `TaleWorlds.Core/AtmosphereState.cs`) carries `Position`, `TemperatureAverage`, `TemperatureVariance`, `HumidityAverage`, `HumidityVariance`, `distanceForMaxWeight`, `distanceForMinWeight`, and `ColorGradeTexture`
- Weight function: `MBMath.SmoothStep` and `Vec3.Distance`, both from `TaleWorlds.Library`
- Public model entry point: [MapWeatherModel](../MapWeatherModel) exposes `GetInterpolatedAtmosphereState(CampaignTime, Vec3)`, and that is what a mod should call instead of constructing this type
- Private sort helper: the nested struct `AtmosphereStateSortData` is file-local and exists only to map a sorted position back to the original list index
- Bucket index: [campaign API section](../)
