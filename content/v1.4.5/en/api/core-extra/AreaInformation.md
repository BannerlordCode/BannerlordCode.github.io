---
title: "AreaInformation"
description: "The regional climate slice of the atmosphere model: two floats, temperature and humidity. It is a native engine struct bound by DefineAsEngineStruct, used only as AtmosphereInfo.AreaInfo. Both values actually originate from an AtmosphereState grid interpolation, not from a direct measurement."
---

# AreaInformation

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct AreaInformation`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/AreaInformation.cs`

## Overview

`AreaInformation` is the **regional climate block** of the atmosphere parameters: two floats, a temperature and a humidity. Twenty lines of code, two fields, two methods — one of the smallest structs in this bucket. It travels as the `AreaInfo` member of [AtmosphereInfo](../AtmosphereInfo) and is bound to native by `[assembly: DefineAsEngineStruct(typeof(AreaInformation), "area_information", false, null, null)]` at `TaleWorlds.Engine/Properties/AssemblyInfo.cs:18`.

The role it plays is **"hand the engine the climate value computed for a map position"**. Like [AmbientInformation](../AmbientInformation) it is a struct defined by the engine and filled by managed code; what sets it apart is that its two numbers have a **clearly traceable origin** — they are not rendering parameters but **climate readings interpolated from the map's weather grid**.

## Mental Model

Treat it as **the felt-climate reading at one position**, not as "the weather state". It has no flag, no hook, and no query method — **it is a two-field pure payload**.

**The centre of the mental model is that these two numbers are interpolated, not measured.** The only real producer is `DefaultMapWeatherModel.GetAtmosphereModel` (`TaleWorlds.CampaignSystem.GameComponents/DefaultMapWeatherModel.cs:186-190`):

```csharp
AreaInfo =
{
    Temperature = temperature,
    Humidity = humidity
}
```

and those two locals come from `:124-125`:

```csharp
AtmosphereState gridInfo = GetInterpolatedAtmosphereState(CampaignTime.Now, position.AsVec3());
float temperature = GetTemperature(ref gridInfo, timeFactorForSnow);
float humidity = GetHumidity(ref gridInfo, timeFactorForSnow);
```

The chain is: **[AtmosphereState](../AtmosphereState) grid interpolation → seasonal offset → written into `AreaInfo`**. `GetTemperature` (`:643-652`) is `gridInfo.TemperatureAverage + gridInfo.TemperatureVariance * ((seasonFactor - 0.5f) * -2f)`; `GetHumidity` (`:655-664`) has the same shape but takes `(seasonFactor - 0.5f) * 2f` — **note the opposite sign**. That sign flip is how "hot in summer" and "wet in winter" can both hold: the two quantities sit half a year out of phase. Both functions open with `if (gridInfo == null) return 0f;`, so a missing grid yields 0 rather than an exception.

Three practical conclusions follow. First, **humidity is clamped to 0..100 while temperature is not.** `GetHumidity`'s return is wrapped in `MBMath.ClampFloat(..., 0f, 100f)`, whereas `GetTemperature` is a bare addition. **So you may write 150 into `AreaInformation.Humidity` and the concept of a range is respected upstream, but there is no such notion for `Temperature`.** Second, **it has no validity flag whatsoever.** `AreaInformation` has no `IsValid` (that belongs to [AtmosphereInfo](../AtmosphereInfo)), so "0 degrees and 0 humidity" is equally likely to be a genuine polar reading or the fallback for a missing grid, and **the managed layer cannot tell them apart**. Third, **it is a completely different thing from [AtmosphereState](../AtmosphereState).** The former is "a finished reading at a point", the latter is "a sample on the grid, together with its influence radius".

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `Temperature` | `public float Temperature;` | The regional temperature, produced by `GetTemperature` (`DefaultMapWeatherModel.cs:643-652`) as the grid average plus a seasonal offset. **The return value is not clamped.** A plain data field with no managed-side reader. |
| `Humidity` | `public float Humidity;` | The regional humidity, produced by `GetHumidity` (`:655-664`). Structurally identical to temperature but with the season factor negated (`(seasonFactor - 0.5f) * 2f`), **and its return value is clamped by `MBMath.ClampFloat(..., 0f, 100f)`.** |
| `DeserializeFrom` | `public void DeserializeFrom(IReader reader)` | Reads the two floats in a hard-coded order: `Temperature = reader.ReadFloat(); Humidity = reader.ReadFloat();`. **There is no length prefix or type tag**, so the relative order of these two floats *is* the save format. |
| `SerializeTo` | `public void SerializeTo(IWriter writer)` | The symmetric writer: `writer.WriteFloat(Temperature); writer.WriteFloat(Humidity);`. **Both methods must be edited when adding a field**, or the save data desynchronises. |
| (assembly attribute) `DefineAsEngineStruct` | `[assembly: DefineAsEngineStruct(typeof(AreaInformation), "area_information", false, null, null)]`, at `TaleWorlds.Engine/Properties/AssemblyInfo.cs:18` | Binds it to the native `area_information` struct; `false` means it is not a flag set. **This is the way to tell "who reads these numbers?"** — carrying the attribute means the engine consumes them. |
| (only use site) `AreaInfo` | `AtmosphereInfo.AreaInfo`, at `AtmosphereInfo.cs:28` | Its single landing point. `AtmosphereInfo.DeserializeFrom` (`:55`) and `SerializeTo` (`:69`) call this type's two methods at a fixed position — **making it the only managed caller**. |

## Real Example

**Stated plainly: the snippet below is this type's only real usage**, which is filling the two fields in an object initialiser inside an `AtmosphereInfo`. The full chain follows `DefaultMapWeatherModel.cs:124-190`:

```csharp
public class MyWeatherModel : MapWeatherModel
{
    public override AtmosphereInfo GetAtmosphereModel(CampaignVec2 position)
    {
        // 1. Interpolate the weather grid at this position (see AtmosphereState).
        AtmosphereState gridInfo = GetInterpolatedAtmosphereState(CampaignTime.Now, position.AsVec3());

        // 2. Apply the seasonal offset. Both getters null-guard and return 0f.
        float temperature = GetTemperature(ref gridInfo, timeFactorForSnow);
        float humidity = GetHumidity(ref gridInfo, timeFactorForSnow);

        return new AtmosphereInfo
        {
            Seed = (uint)CampaignTime.Now.ToSeconds,
            AtmosphereName = "TOD_12_00_SemiCloudy",
            AreaInfo =
            {
                Temperature = temperature,
                Humidity = humidity
            }
        };
    }
}
```

Reproducing its save round-trip and making "the order of two floats *is* the format" explicit:

```csharp
public static class AreaRoundTrip
{
    // Humidity is the only one the game clamps, and it does so at the producer
    // (DefaultMapWeatherModel, line 663), not here.
    public const float HumidityMax = 100f;

    public static void Write(IWriter writer, AreaInformation value)
    {
        // Field order is hard-coded and IS the binary layout. Temperature first.
        writer.WriteFloat(value.Temperature);
        writer.WriteFloat(value.Humidity);
    }

    public static void Read(IReader reader, out AreaInformation value)
    {
        value.Temperature = reader.ReadFloat();
        value.Humidity = reader.ReadFloat();
    }

    public static bool IsPlausible(AreaInformation value)
    {
        // No such helper exists on the struct itself -- IsValid belongs to
        // AtmosphereInfo, and it only checks AtmosphereName.
        return value.Humidity >= 0f && value.Humidity <= HumidityMax;
    }
}
```

## Risks and Boundaries

- **It is a mirror of a native engine struct.** `TaleWorlds.Engine/Properties/AssemblyInfo.cs:18` is the hard evidence. Managed code fills; the engine reads.
- **The two fields are not symmetric in meaning.** Humidity has a 0..100 dimension and is clamped at the producer; temperature has **neither a clamp nor a defined dimension**. **Do not write temperature by analogy with humidity** — there is no range contract and no downstream validation for it.
- **Zero is ambiguous.** `GetTemperature` / `GetHumidity` return `0f` when the grid is null (`:645-648`, `:657-660`), and a genuine "0 degrees, 0 humidity" is also 0. **The managed layer cannot distinguish the two**, because this struct carries no validity flag.
- **Field order *is* the save format.** `DeserializeFrom` and `SerializeTo` are hand-written and **do not keep each other in sync**. Adding a field means editing both; editing one alone does not raise an error, it just makes loaded values come out wrong.
- **No constructor, no defaults, no initialisation.** The implicit `public struct` constructor leaves both fields at 0. `new AreaInformation()` is **byte-for-byte identical in memory** to "deserialized with both values zero".
- **Do not confuse it with [AtmosphereState](../AtmosphereState).** One is a finished reading, the other is a grid sample carrying `distanceForMaxWeight` / `distanceForMinWeight`. **Their temperature/humidity fields look similar but mean different things**: `TemperatureAverage` + `TemperatureVariance` versus one already-computed `Temperature`.
- **It does not drive rendering.** Unlike `AmbientInformation`'s `MieScatterStrength` and friends, `Temperature` / `Humidity` have **no managed-side rendering consumer at all** — their destination is native.
- **Mutating your local copy has no effect.** As with `AmbientInformation`, these values only reach the engine through `MissionInitializerRecord.AtmosphereOnCampaign` at mission initialisation.
- **Zero managed-side readers.** Apart from the field declaration at `AtmosphereInfo.cs:28`, nothing in the tree reads these two floats. **The only way to check that you filled them correctly is to observe the engine.**
- **`SerializeTo` / `DeserializeFrom` are invoked for you by `AtmosphereInfo`.** Do not try to call them directly to save anything.

## Cross-Version Notes

`AreaInformation.cs` is 20 lines in 1.4.5 with 2 fields and 2 methods, in original-source form; the 1.3.x / 1.4.6 counterparts are decompiled output. **Three things genuinely deserve checking when migrating across versions**: the native binding name `"area_information"` (`TaleWorlds.Engine/Properties/AssemblyInfo.cs:18`); the **relative order of the two floats** inside `DeserializeFrom` / `SerializeTo` (change it and old saves desynchronise, with no error reported on the managed side); and the relationship between the season-factor signs in `GetTemperature` and `GetHumidity` — **those two signs are precisely what makes "hot in summer" and "wet in winter" both true, and flipping one without the other inverts the climate entirely.** Also note that post-1.4.5 versions introduced parallel atmosphere structs; if the target version swaps its `AtmosphereInfo`, this struct most likely changed shape too.

## Dependencies

- Only managed consumer: [AtmosphereInfo](../AtmosphereInfo)'s `AreaInfo` field (`AtmosphereInfo.cs:28`), invoked at fixed positions by its `DeserializeFrom` (`:55`) and `SerializeTo` (`:69`)
- Native binding: `TaleWorlds.Engine/Properties/AssemblyInfo.cs:18`'s `DefineAsEngineStruct(..., "area_information", ...)`
- Producer of the numbers: `TaleWorlds.CampaignSystem.GameComponents/DefaultMapWeatherModel.cs:186-190`, the only real construction site in the tree
- Upstream data: [AtmosphereState](../AtmosphereState)'s `TemperatureAverage` / `TemperatureVariance` / `HumidityAverage` / `HumidityVariance`, interpolated by `AtmosphereGrid.GetInterpolatedStateInfo`
- Weather-model abstraction: [MapWeatherModel](../../campaign/MapWeatherModel)'s `GetAtmosphereModel(CampaignVec2)` and `GetInterpolatedAtmosphereState(...)`
- Serialisation interfaces: `IReader.ReadFloat()` and `IWriter.WriteFloat()` in `TaleWorlds.Library`
- Clamping helper: `MBMath.ClampFloat`, as used at `DefaultMapWeatherModel` line 663
- Sibling structs: [AmbientInformation](../AmbientInformation), `FogInformation`, `SkyInformation`, and the others sitting alongside it in `AtmosphereInfo`
- Bucket index: [core-extra API section](../)