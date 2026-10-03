---
title: "AtmosphereInfo"
description: "The aggregate atmosphere struct: thirteen fields forming one complete atmospheric description, bound to native's rglAtmosphere_info by DefineAsEngineStruct. It chains ten SerializeTo/DeserializeFrom calls in a fixed order (field order is the save format), uses IsValid to separate 'no atmosphere' from 'all-zero atmosphere', and marks its two strings as fixed-length 64-byte unmanaged fields."
---

# AtmosphereInfo

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct AtmosphereInfo`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/AtmosphereInfo.cs`

## Overview

`AtmosphereInfo` is **the aggregate package for one scene's atmospheric description**. It bundles ten sub-structs — `SunInfo` (sun), `RainInfo` (rain), `SnowInfo` (snow), `AmbientInfo` (ambient light), `FogInfo` (fog), `SkyInformation` (sky), `NauticalInformation` (water), `TimeInformation` (time), `AreaInfo` (climate), `PostProInfo` (post-processing) — together with `Seed`, two name strings, and `InterpolatedAtmosphereName`. It is the return type of the [MapWeatherModel](../../campaign/MapWeatherModel) abstraction and the type of `MissionInitializerRecord.AtmosphereOnCampaign`.

The role it plays is **"pack the campaign layer's weather computation into a single order sheet for the renderer"**. It is the managed mirror of native's `rglAtmosphere_info`, bound by `DefineAsEngineStruct` (`TaleWorlds.Engine/Properties/AssemblyInfo.cs:9`) — **note the `rgl` prefix on the bound name, which says it maps onto the engine's low-level atmosphere subsystem rather than being ordinary managed data exchange.**

## Mental Model

Treat it as **an atmospheric configuration sheet handed to the renderer**, not as a weather state object. It has no lifecycle, no events, and no query methods — **it is a serialisable data document**.

**The centre of the mental model is its three boundaries.**

**Boundary one: the serialisation order is fixed by this type, by hand.** `DeserializeFrom` (`:177-189`) and `SerializeTo` (`:191-203`) each chain the ten sub-structs in the *same* order:

```
SunInfo → RainInfo → SnowInfo → AmbientInfo → FogInfo → SkyInfo
       → NauticalInfo → TimeInfo → AreaInfo → PostProInfo
```

**Note that `Seed`, `AtmosphereName` and `InterpolatedAtmosphereName` are not on that chain** — they take no part in save/load. So **the atmosphere stored in a save carries neither seed nor name**, and after loading those fields are `default`. Also, **there is not a single conditional between the ten calls** — every sub-struct's `SerializeTo` runs unconditionally. **Field order *is* the save format, and it is maintained by two separate hand-written methods** — adding a sub-struct means editing both.

**Boundary two: `IsValid` looks only at the name.** `:169` is `public bool IsValid => !string.IsNullOrEmpty(AtmosphereName);`. **So an "all-zero atmosphere" — every float at 0 — is still `IsValid == true`**, as long as the name is non-empty. `GetInvalidAtmosphereInfo()` (`:171-175`) produces an instance with `AtmosphereName = ""` — **that is the only shape the game itself treats as "no atmosphere"**. The actual use of that test is `MissionInitializerRecord.cs:87`'s `bool isValid = AtmosphereOnCampaign.IsValid;`, which decides whether to serialise at all.

**Boundary three: the two strings are fixed-length unmanaged fields.** `:141` and `:164`:

```csharp
[MarshalAs(UnmanagedType.ByValTStr, SizeConst = 64)]
public string AtmosphereName;

[MarshalAs(UnmanagedType.ByValTStr, SizeConst = 64)]
public string InterpolatedAtmosphereName;
```

**On the native side they are 64-byte fixed buffers, not pointers.** Two consequences follow: **a name longer than 64 characters is truncated on its way to native**, and **on the .NET side they remain variable-length managed strings** — so the two sides disagree about the capacity of the same field.

**The fourth anchor is that the two producers look nothing alike.** One is `DefaultMapWeatherModel.GetAtmosphereModel` (fills every field across a twenty-line object initialiser); the other is `BannerlordMissions.CreateAtmosphereInfoForMission` (`:83-107`), which **fills exactly two fields**:

```csharp
return new AtmosphereInfo
{
    AtmosphereName = value2,
    TimeInfo = new TimeInformation
    {
        Season = value
    }
};
```

The other eight sub-structs stay `default`. **That tells you the real floor: filling in `AtmosphereName` alone is enough for `IsValid` to be true and for the engine to accept the sheet.**

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `AtmosphereName` | `[MarshalAs(UnmanagedType.ByValTStr, SizeConst = 64)] public string AtmosphereName;` | The atmosphere definition name (shaped like `TOD_12_00_SemiCloudy`). **On the native side it is a 64-byte fixed buffer, so an over-long name is truncated.** **It is the sole criterion for `IsValid`** — every other field being zero changes nothing. |
| `IsValid` | `public bool IsValid => !string.IsNullOrEmpty(AtmosphereName);` | The only existence test. **It looks at the name and at no numeric value.** `MissionInitializerRecord.cs:87` uses it to decide whether to serialise this atmosphere. |
| `GetInvalidAtmosphereInfo` | `public static AtmosphereInfo GetInvalidAtmosphereInfo()` | A static factory whose body is the single statement `return new AtmosphereInfo { AtmosphereName = "" };`. **This is the only representation of "no atmosphere"**, and it is the field initialiser of `MissionInitializerRecord.AtmosphereOnCampaign` (called at `MissionInitializerRecord.cs:51` and again at `:68`). |
| `Seed` | `public uint Seed;` | The atmosphere random seed, assigned `(uint)CampaignTime.Now.ToSeconds` at `DefaultMapWeatherModel.cs:132`. **It takes no part in `SerializeTo` / `DeserializeFrom`,** so it is absent from saves. |
| `SunInfo` / `RainInfo` / `SnowInfo` / `AmbientInfo` / `FogInfo` / `SkyInfo` / `NauticalInfo` / `TimeInfo` / `AreaInfo` / `PostProInfo` | ten public fields | The ten sub-structs, **all value-typed fields, not one of them a pointer**. [AmbientInformation](../AmbientInformation) and [AreaInformation](../AreaInformation) have their own pages in this bucket; the other eight live alongside in `TaleWorlds.Library`. **They are read and written in that fixed order.** |
| `InterpolatedAtmosphereName` | `[MarshalAs(UnmanagedType.ByValTStr, SizeConst = 64)] public string InterpolatedAtmosphereName;` | The blended name used while transitioning between two atmosphere definitions. **Also a fixed 64-byte field.** It has **zero managed-side readers and zero managed-side writers** — it only means something to native. |
| `DeserializeFrom` | `public void DeserializeFrom(IReader reader)` | Calls the ten sub-structs' `DeserializeFrom` in the order above, **unconditionally and without any branching**. **It excludes `Seed` and both names.** |
| `SerializeTo` | `public void SerializeTo(IWriter writer)` | The symmetric writer. Outside the `if (AtmosphereOnCampaign.IsValid)` guard at `MissionInitializerRecord.cs:87-91`, there is no other guard anywhere. |
| (assembly attribute) `DefineAsEngineStruct` | `[assembly: DefineAsEngineStruct(typeof(AtmosphereInfo), "rglAtmosphere_info", false, null, null)]`, at `TaleWorlds.Engine/Properties/AssemblyInfo.cs:9` | Binds it to native's **`rglAtmosphere_info`** — **the `rgl` prefix says this is the engine's low-level subsystem**, not an ordinary managed data-exchange struct. `false` means it is not a flag set. |

## Real Example

**Stated plainly: this type has two real producers in 1.4.5, and they look nothing alike.** First the simpler one, `BannerlordMissions.cs:98-106`, which fills two fields:

```csharp
public static AtmosphereInfo CreateAtmosphereInfoForMission(string seasonId, int timeOfDay)
{
    // The dictionary lookups are quoted from BannerlordMissions, lines 84-97.
    Dictionary<string, int> seasons = new Dictionary<string, int>
    {
        { "spring", 0 }, { "summer", 1 }, { "fall", 2 }, { "winter", 3 }
    };
    Dictionary<int, string> times = new Dictionary<int, string>
    {
        { 6, "TOD_06_00_SemiCloudy" }, { 12, "TOD_12_00_SemiCloudy" },
        { 15, "TOD_04_00_SemiCloudy" }, { 18, "TOD_03_00_SemiCloudy" },
        { 22, "TOD_01_00_SemiCloudy" }
    };

    seasons.TryGetValue(seasonId, out int season);
    times.TryGetValue(timeOfDay, out string atmosphereName);

    // Eight of the ten sub-structs stay at default here, and IsValid is already
    // true because AtmosphereName is non-empty. That is the real minimum.
    AtmosphereInfo info = new AtmosphereInfo
    {
        AtmosphereName = atmosphereName,
        TimeInfo = new TimeInformation { Season = season }
    };

    Debug.Print("valid = " + info.IsValid, 0);
    return info;
}
```

Deciding whether a given atmosphere belongs in the save — following the shape of `MissionInitializerRecord.cs:87-91`:

```csharp
public static void WriteAtmosphere(IWriter writer, AtmosphereInfo atmosphere)
{
    // IsValid only checks AtmosphereName. An all-zero atmosphere with a name is
    // still valid, so this is not a numeric sanity check.
    if (atmosphere.IsValid)
    {
        atmosphere.SerializeTo(writer);
    }
    else
    {
        writer.WriteBool(false);
    }
}

public static bool IsNoAtmosphere(MissionInitializerRecord record)
{
    // GetInvalidAtmosphereInfo() produces AtmosphereName == "", which is the
    // ONLY shape the game itself treats as "no atmosphere".
    return !record.AtmosphereOnCampaign.IsValid;
}
```

## Risks and Boundaries

- **`IsValid` looks only at `AtmosphereName`.** The other nine fields being zero changes nothing. **An "all-zero atmosphere" is a perfectly valid atmosphere** — do not use `IsValid` as a numeric sanity check.
- **`GetInvalidAtmosphereInfo()` is the only invalid shape.** It sets nothing but `AtmosphereName = ""`. **Any other way of constructing an "empty atmosphere" yields something `IsValid` calls valid.**
- **The two strings are fixed 64-byte fields natively.** `[MarshalAs(UnmanagedType.ByValTStr, SizeConst = 64)]` means **an over-long name is truncated on its way to the engine**, with no error raised on the managed side.
- **`Seed` and both names take no part in saving.** Neither appears on the ten-call chain inside `SerializeTo` / `DeserializeFrom`. **After a load, `Seed` is 0 and `AtmosphereName` is null**, so calling `IsValid` immediately after loading returns false.
- **The serialisation order is maintained by two hand-written methods independently.** `DeserializeFrom` (`:177-189`) and `SerializeTo` (`:191-203`) **must agree on order but nothing enforces it.** **Adding a sub-struct to only one side desynchronises the save, and loading raises no error.**
- **The ten sub-structs serialise unconditionally.** There is no "this block does not need writing" branch anywhere. **Even eight `default` sub-structs are still written out one by one.**
- **`InterpolatedAtmosphereName` is unused on the managed side.** It only means something to native. **Never base a managed-side decision on it.**
- **It is a value type and not a small one.** Thirteen fields is substantial, and the difference between passing by value and by `ref` is visible at `DefaultMapWeatherModel.cs:124`, where the code takes `AtmosphereState gridInfo` and passes it into `GetTemperature` by `ref`. **With a struct this size that is a meaningful performance decision.**
- **The two producers differ by an order of magnitude.** `DefaultMapWeatherModel` fills everything; `BannerlordMissions` fills two fields. **Never assume an `AtmosphereInfo` someone else built is "complete".**
- **It is a mirror of a native struct.** `TaleWorlds.Engine/Properties/AssemblyInfo.cs:9`. Managed code fills and the engine reads, and **the managed layer validates none of the numbers.**

## Cross-Version Notes

`AtmosphereInfo.cs` is 72 lines in 1.4.5 with 13 fields and 5 members, in original-source form. **Three things genuinely deserve checking when migrating across versions**: the native binding name `"rglAtmosphere_info"` (`TaleWorlds.Engine/Properties/AssemblyInfo.cs:9`) — it maps onto the engine's low-level subsystem, so **an engine revamp is the likeliest thing to change it**; the **order of the ten sub-structs** inside `DeserializeFrom` / `SerializeTo` (change it and old saves desynchronise, silently); and both `MarshalAs` `SizeConst = 64` values (**changing those is a native ABI change and must move in lockstep with the engine**). Also note that post-1.4.x versions introduced a parallel `AtmosphereInfoV2` struct — **if the target version's `MapWeatherModel.GetAtmosphereModel` returns a different type, this page's field table and serialisation order are void**, and that is the first thing to confirm when migrating.

## Dependencies

- The ten sub-structs: [AmbientInformation](../AmbientInformation) and [AreaInformation](../AreaInformation) (each with its own page in this bucket), plus `SunInformation` / `RainInformation` / `SnowInformation` / `FogInformation` / `SkyInformation` / `NauticalInformation` / `TimeInformation` / `PostProcessInformation`, all in `TaleWorlds.Library`
- Native binding: `TaleWorlds.Engine/Properties/AssemblyInfo.cs:9`'s `DefineAsEngineStruct(..., "rglAtmosphere_info", ...)`
- Abstract producer: [MapWeatherModel](../../campaign/MapWeatherModel)'s `GetAtmosphereModel(CampaignVec2)` returns this type
- Concrete implementations: `TaleWorlds.CampaignSystem.GameComponents/DefaultMapWeatherModel.cs:115-190` (fills every field) and `TaleWorlds.MountAndBlade/BannerlordMissions.cs:83-107` (fills two)
- Landing site: `MissionInitializerRecord.AtmosphereOnCampaign` (`MissionInitializerRecord.cs:51`), assigned by `../../campaign/MenuHelper.cs:350/385` when the mission menu opens
- Climate data source: [AtmosphereState](../AtmosphereState), interpolated by `AtmosphereGrid.GetInterpolatedStateInfo` and fed into `AreaInfo`
- Serialisation interfaces: `TaleWorlds.Library`'s `IReader` / `IWriter`, consumed by each sub-struct's own `DeserializeFrom` / `SerializeTo`
- Bucket index: [core-extra API section](../)