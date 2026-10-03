---
title: "AtmosphereState"
description: "One sample point on the map weather grid: a position, temperature mean and variance, humidity mean and variance, plus two lowercase-named distance weights (distanceForMaxWeight / distanceForMinWeight) and a colour-grade texture name. It is not AtmosphereInfo -- the campaign layer interpolates it into that; this type takes no part in serialisation itself."
---

# AtmosphereState

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class AtmosphereState`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/AtmosphereState.cs`

## Overview

`AtmosphereState` is **one sample point on the map's weather grid**. It records a position (`Position`), that spot's temperature mean and variance (`TemperatureAverage` / `TemperatureVariance`), humidity mean and variance (`HumidityAverage` / `HumidityVariance`), a colour-grade texture name (`ColorGradeTexture`), and **two lowercase-named distance weights** (`distanceForMaxWeight` / `distanceForMinWeight`).

The role it plays is **"the input to campaign-side climate interpolation"** — mind the direction: it is **the source that gets interpolated**, not the result. `AtmosphereGrid.GetInterpolatedStateInfo` reads a whole set of `AtmosphereState`, weights them by distance, averages them, and produces **another `AtmosphereState`**, which `DefaultMapWeatherModel` then turns into [AreaInformation](../AreaInformation) for [AtmosphereInfo](../AtmosphereInfo). So this type is **the first link** in that chain.

## Mental Model

Treat it as **a climate sampling column pinned to the map**, not as "the current weather". It is an ordinary class (not a struct), every one of its fields is a `public` mutable field, and it has **no getters or setters, no properties, and no lifecycle hooks** — 36 lines, nine fields, two constructors.

**The centre of the mental model is the weighted interpolation formed by two variances and two distance weights.** That is the whole of `AtmosphereGrid.GetInterpolatedStateInfo` (`AtmosphereGrid.cs:24-70`):

1. It copies every sample plus its original index into a list;
2. **`pos.z *= 0.3f;`** — **height is flattened to 30%**, so this grid is almost insensitive to the vertical axis and a high-altitude point computes the same climate as a low one;
3. It sorts by `Position.Distance(pos)` ascending (**re-sorted on every query, O(n log n)**);
4. For each sample it computes `num3 = 1f - MBMath.SmoothStep(distanceForMaxWeight, distanceForMinWeight, distance)`;
5. **Anything with weight `< 0.001` is skipped outright** — which is the entire practical job of `distanceForMinWeight`: a sample that is out of reach contributes nothing;
6. It accumulates the four numbers weighted, and records the `ColorGradeTexture` of **the first sample that was admitted**;
7. Finally it **divides by the total weight** to normalise.

**Note one asymmetry you can only see by reading the code**: all four numeric values get normalised (`/= num2`), **but `ColorGradeTexture` does not** — it is the string of "the first sample whose weight reached 0.001" (`:53`'s `if (flag) { colorGradeTexture = atmosphereState2.ColorGradeTexture; }` together with `flag = false`). **So the colour grade is "the nearest valid sample's texture", while temperature and humidity are "the weighted average of every valid sample".** That is the single most worth-remembering fact on this page.

**The second anchor is where the six defaults come from.** The field declarations (`:115-117`) are:

```csharp
public float distanceForMaxWeight = 1f;
public float distanceForMinWeight = 1f;
public string ColorGradeTexture = "";
```

**And the six-parameter constructor (`:127-133`) writes only the four numbers and the texture name — it never touches those two distance weights.** So **any `AtmosphereState` built through the constructor has both distance weights at 1f**. The weight formula is `1f - SmoothStep(distanceForMaxWeight, distanceForMinWeight, distance)` — and when both arguments are 1f, `SmoothStep` degenerates over the interval `[1,1]`, so **the sample contributes either a constant weight for every distance or none at all**. That is why `Campaign.Current.DefaultWeatherNodeDimension` (the config knob that sets node spacing) has to line up with these two fields.

**The third anchor is naming.** `distanceForMaxWeight` and `distanceForMinWeight` are **the only public fields in the type that begin with a lowercase letter**, violating the C# naming convention — that is not a typo, it is how the source is written. Renaming them breaks external code.

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `Position` | `public Vec3 Position = Vec3.Zero;` | The sample's map coordinates. **During interpolation `pos.z` is multiplied by 0.3** (`AtmosphereGrid.cs:33`), so height counts for only 30% of the distance. It is `Vec3.Zero` rather than `null`, so a bare-constructed object sits at the origin rather than being unset. |
| `TemperatureAverage` / `TemperatureVariance` | `public float TemperatureAverage;` / `public float TemperatureVariance;` | The point's temperature mean and **seasonal swing amplitude**. The consumer, `DefaultMapWeatherModel.GetTemperature` (`:643-652`), computes `average + variance * ((seasonFactor - 0.5f) * -2f)`. **The "variance" here is a seasonal amplitude, not a statistical variance.** |
| `HumidityAverage` / `HumidityVariance` | `public float HumidityAverage;` / `public float HumidityVariance;` | Humidity mean and amplitude. `GetHumidity` (`:655-664`) uses `average + variance * ((seasonFactor - 0.5f) * 2f)` — **the season factor has the opposite sign to temperature's** — and **clamps the result with `MBMath.ClampFloat(..., 0f, 100f)`, while temperature has no clamp at all.** |
| `distanceForMaxWeight` | `public float distanceForMaxWeight = 1f;` | The distance at which the weight reaches its maximum, the first argument of `1f - SmoothStep(max, min, distance)`. **Lowercase opening, against convention**; **the six-parameter constructor never writes it, so it stays 1f.** |
| `distanceForMinWeight` | `public float distanceForMinWeight = 1f;` | The distance at which the weight falls to its minimum. `AtmosphereGrid.cs:50` uses it to discard samples below `0.001`. **Also lowercase, also left untouched by the constructor.** |
| `ColorGradeTexture` | `public string ColorGradeTexture = "";` | The colour-grade texture name, empty string by default. **It is not part of the weighted average** — `AtmosphereGrid` takes "the first contributing sample's value", guarded by the `flag` so it is taken once. Separately, `AtmosphereGrid.cs:53` contains `string colorGradeTexture = (atmosphereState.ColorGradeTexture = "color_grade_empire_harsh");` — **so the fallback for an empty grid is a hard-coded imperial look.** |
| `AtmosphereState()` | `public AtmosphereState() { }` | The parameterless constructor, **whose body is completely empty** (`:123-127`). Five floats are 0, `Position` is `Vec3.Zero`, the two distance weights are 1f, and `ColorGradeTexture` is `""` — all from field initialisers. **`AtmosphereGrid.cs:38/49` uses precisely this as its interpolation accumulator.** |
| `AtmosphereState(Vec3, float, float, float, float, string)` | `public AtmosphereState(Vec3 position, float tempAv, float tempVar, float humAv, float humVar, string colorGradeTexture)` | The six-parameter constructor. **It writes those six and leaves `distanceForMaxWeight` / `distanceForMinWeight` at their field-initializer value of 1f.** This is the only construction path in use, via the instances returned by `Campaign.Current.MapSceneWrapper.GetAtmosphereStates()`. |

## Real Example

Interpolating an `AtmosphereState` — **this is the type's only real consumption pattern** (structure taken from `AtmosphereGrid.cs:24-70`):

```csharp
public static class MyAtmosphereSampler
{
    // Reproduces the weighting in AtmosphereGrid.GetInterpolatedStateInfo:
    // height is flattened to 30%, weights come from SmoothStep, and anything
    // below 0.001 is dropped.
    public static AtmosphereState SampleAt(List<AtmosphereState> grid, Vec3 position)
    {
        AtmosphereState result = new AtmosphereState();
        result.ColorGradeTexture = "color_grade_empire_harsh";

        position.z *= 0.3f;
        float totalWeight = 0f;
        bool tookFirstTexture = false;

        foreach (AtmosphereState state in grid)
        {
            float distance = state.Position.Distance(position);
            float weight = 1f - MBMath.SmoothStep(
                state.distanceForMaxWeight, state.distanceForMinWeight, distance);

            if (weight < 0.001f)
            {
                continue;
            }

            // The texture is NOT averaged -- it is taken from the first
            // contributing sample and then left alone.
            if (!tookFirstTexture)
            {
                result.ColorGradeTexture = state.ColorGradeTexture;
                tookFirstTexture = true;
            }

            result.TemperatureAverage += state.TemperatureAverage * weight;
            result.HumidityAverage += state.HumidityAverage * weight;
            totalWeight += weight;
        }

        if (totalWeight > 0f)
        {
            result.TemperatureAverage /= totalWeight;
            result.HumidityAverage /= totalWeight;
        }

        return result;
    }
}
```

Seeing, at construction time, that the six-argument constructor leaves the distance weights alone:

```csharp
public static void ExplainDefaults()
{
    AtmosphereState built = new AtmosphereState(
        Vec3.Zero, 18f, 12f, 40f, 25f, "color_grade_battania");

    // These two are 1f because the six-arg constructor never writes them.
    Debug.Print("maxWeight = " + built.distanceForMaxWeight, 0);
    Debug.Print("minWeight = " + built.distanceForMinWeight, 0);

    // With max == min == 1f, SmoothStep degenerates: the weight is either a
    // constant or zero, never a gradient. This is why the node dimension
    // Campaign.Current.DefaultWeatherNodeDimension has to line up with them.
    float constantWeight = 1f - MBMath.SmoothStep(1f, 1f, 0.5f);
    Debug.Print("weight at 0.5 with max==min==1 : " + constantWeight, 0);

    // The parameterless constructor is what AtmosphereGrid uses as an accumulator.
    AtmosphereState blank = new AtmosphereState();
    Debug.Print("blank texture = '" + blank.ColorGradeTexture + "'", 0);
}
```

## Risks and Boundaries

- **It is the source of interpolation, not its result.** `AtmosphereGrid` reads a set of them, weights them, and produces another one. **Holding an `AtmosphereState` does not mean it is "the current weather"** — it is one grid sample.
- **The texture is not part of the weighted average.** `AtmosphereGrid` takes the `ColorGradeTexture` of the first sample with weight ≥ 0.001, while all four numbers get normalised. **"Nearest sample's texture" and "weighted-average temperature" follow two entirely different selection rules.**
- **The six-parameter constructor does not set the two distance weights.** They stay at their field-initializer value of 1f, and when `max == min` the `SmoothStep` degenerates. **This is the easiest thing to get wrong when authoring custom weather nodes.**
- **`pos.z *= 0.3f` is hard-coded.** `AtmosphereGrid.cs:33`. **This climate grid is nearly insensitive to altitude** — a high-altitude point computes the same climate as a low one, and there is no configuration knob to change it.
- **Every query re-sorts.** `GetInterpolatedStateInfo` calls `list.Sort(...)` (`:34`) on every invocation. **That is O(n log n) per query**, and `DefaultMapWeatherModel.GetAtmosphereModel` calls it each time a mission menu opens. **Do not call it in a per-frame loop.**
- **Every field is public and mutable.** No getters or setters, no properties, no immutability guarantee. **External code can change `Position` or the weights at will; the interpolation result shifts accordingly and no assertion objects.**
- **Two fields start with a lowercase letter.** `distanceForMaxWeight` and `distanceForMinWeight` break the naming convention but **are genuinely public fields**. **Renaming them breaks external code.**
- **The fallback texture is hard-coded.** For an empty grid, `AtmosphereGrid.cs:53` sets `"color_grade_empire_harsh"` — **an imperial look, not the player's culture**. That is what you get after a load if the grid fails to populate.
- **`ColorGradeTexture` defaults to an empty string, not null.** And **the parameterless constructor never writes it** (it relies on the field initialiser), so you get `""`. **Testing with `== null` will not work.**
- **It takes no part in serialisation.** Nothing in the tree registers it with `SaveableTypeDefiner` and it has no `AutoGenerated*` callbacks. **Changing it cannot corrupt a save, but after a load `Campaign.Current.MapSceneWrapper.GetAtmosphereStates()` supplies fresh instances.**
- **It is not [AtmosphereInfo](../AtmosphereInfo) and not [AreaInformation](../AreaInformation).** The three have similar names and similar field names (`TemperatureAverage` versus `Temperature`), but **"grid sample point", "post-interpolation reading", and "sheet handed to the engine" are three entirely different things.**

## Cross-Version Notes

`AtmosphereState.cs` is 36 lines in 1.4.5 with 9 fields and 2 constructors, in original-source form (a `public class`, not a struct). **Three things genuinely deserve checking when migrating across versions.** Whether it is **still a class** — if some version turns it into a `struct`, the performance profile of the accumulator code (`AtmosphereGrid.cs:38/49` allocating a fresh `new AtmosphereState()` and then accumulating field by field) changes substantially, and so does the `ref`-passing style in `DefaultMapWeatherModel`. The **default values of the two distance weights**, which are implicitly coupled to `Campaign.DefaultWeatherNodeDimension`. And the **hard-coded `pos.z *= 0.3f` coefficient**. Note that post-1.4.x versions moved the whole weather grid onto a new node system driven by `Campaign.DefaultWeatherNodeDimension`, changing both the sample count and the spacing algorithm — **so the answer to "how dense is this grid" is not portable across versions.**

## Dependencies

- Only consumer: `TaleWorlds.CampaignSystem/AtmosphereGrid.cs`'s `GetInterpolatedStateInfo(Vec3)` (`:24`), which reads the whole table, interpolates, and produces a new `AtmosphereState`
- Data source: `Campaign.Current.MapSceneWrapper.GetAtmosphereStates()` (`AtmosphereGrid.cs:20`), which returns instances built through the six-parameter constructor
- Abstract interface: [MapWeatherModel](../../campaign/MapWeatherModel)'s `abstract AtmosphereState GetInterpolatedAtmosphereState(CampaignTime, Vec3)`
- Concrete implementation: `TaleWorlds.CampaignSystem.GameComponents/DefaultMapWeatherModel.cs:87-94`, which caches the `AtmosphereGrid` and forwards the call
- Downstream conversion: `DefaultMapWeatherModel.cs:124-125` feeds the interpolated result into `GetTemperature` / `GetHumidity`, producing the two fields of [AreaInformation](../AreaInformation)
- Grid spacing config: `Campaign.DefaultWeatherNodeDimension`, implicitly coupled to the defaults of the two `distanceForXxxWeight` fields
- Interpolation maths: `MBMath.SmoothStep` and `Vec3.Distance`
- Bucket index: [core-extra API section](../)