---
title: "AmbientInformation"
description: "The ambient-light slice of the atmosphere model: an environment brightness multiplier, an ambient fog colour, a Mie scatter strength, and a Rayleigh constant. It is a native engine struct bound by DefineAsEngineStruct, so managed code can only fill it in object initialisers and let AtmosphereInfo carry it through the save channel."
---

# AmbientInformation

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct AmbientInformation`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/AmbientInformation.cs`

## Overview

`AmbientInformation` is **the ambient-light block of the atmospheric scattering model**: the overall environment brightness multiplier, the ambient fog colour, the Mie scatter strength for the sun's halo, and the Rayleigh constant describing sky scatter. Four fields — one float, one `Vec3`, two floats — packed together, becoming the `AmbientInfo` member of [AtmosphereInfo](../AtmosphereInfo).

The role it plays is **"hand the lighting parameters the engine computed over to the renderer"**, and **almost all of that ring lives outside managed code**. `TaleWorlds.Engine/Properties/AssemblyInfo.cs:13` carries `[assembly: DefineAsEngineStruct(typeof(AmbientInformation), "ambient_information", false, null, null)]` — it is **a managed mirror of a natively-defined struct**, and the four field values are written by native. Managed code can do exactly two things: assign them in an object initialiser (which is precisely how `DefaultMapWeatherModel.cs:153-158` uses it), and be carried to and from the save channel as part of [AtmosphereInfo](../AtmosphereInfo).

## Mental Model

Treat it as **a finished lighting recipe**, not as a weather-state object. It has no `IsValid` flag, no lifecycle hooks, and no query methods at all — **it is a pure numeric payload, used and discarded**.

To decide when to touch it, ask one question: **am I trying to hand the engine a hand-built atmosphere?** The answer is essentially "don't" — the official path is for `MapWeatherModel` to compute a whole [AtmosphereInfo](../AtmosphereInfo), hand it to `MissionInitializerRecord.AtmosphereOnCampaign`, and let native read it. If you assemble an `AmbientInformation` yourself, **no validation anywhere will tell you whether your numbers fall in a sane range**.

**The centre of the mental model is "who computes each of the four fields".** That is reverse-engineered from the only real consumer, `DefaultMapWeatherModel.GetAtmosphereModel` (`TaleWorlds.CampaignSystem.GameComponents/DefaultMapWeatherModel.cs:153-158`):

```csharp
AmbientInfo =
{
    EnvironmentMultiplier = TaleWorlds.Library.MathF.Max(modifiedEnvironmentMultiplier * 0.5f, 0.001f),
    AmbientColor = GetAmbientFogColor(modifiedEnvironmentMultiplier),
    MieScatterStrength = GetMieScatterStrength(environmentMultiplier),
    RayleighConstant = GetRayleighConstant(environmentMultiplier)
}
```

Three things to notice. **First, `EnvironmentMultiplier` is clamped at a 0.001f floor**, because it subsequently feeds `MathF.Pow(modifiedEnvironmentMultiplier, 1.5f)` at `:122` and a non-positive base breaks that. **Second, `MieScatterStrength` and `RayleighConstant` are fed the *unmodified* `environmentMultiplier`, while `AmbientColor` is fed the *modified* one** — a single construction mixing two different input sources, and the easiest asymmetry to miss when reading. **Third, `AmbientColor` is a `Vec3` while the other three are `float`s** — the colour carries no alpha.

**The second anchor is that its serialisation order is decided by `AtmosphereInfo`, not by itself.** `AmbientInformation` has only two methods, `DeserializeFrom` (`:13-19`) and `SerializeTo` (`:21-27`), and the order of the four fields is **hard-coded**: `float, Vec3, float, float`. That means **the binary layout is part of the save format**. Adding a field does nothing on its own — **you must edit both `DeserializeFrom` and `SerializeTo`**, and those two are **hand-written and never synchronise automatically**. Editing only one side desynchronises the save data.

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `EnvironmentMultiplier` | `public float EnvironmentMultiplier;` | The environment brightness multiplier. **The official construction clamps it with `MathF.Max(x * 0.5f, 0.001f)`** (`DefaultMapWeatherModel.cs:154`) because it participates in `MathF.Pow(..., 1.5f)` at `:122`. Writing 0 or a negative value by hand is not caught on the managed side, but native then divides by it and raises it to a fractional power. |
| `AmbientColor` | `public Vec3 AmbientColor;` | The ambient fog colour. **It is the only field fed the *modified* brightness** (`:155` passes `modifiedEnvironmentMultiplier`), whereas the two below get the unmodified `environmentMultiplier`. It is a `Vec3` with no alpha channel. |
| `MieScatterStrength` | `public float MieScatterStrength;` | Mie scatter strength, controlling the halo around the sun. Produced by `GetMieScatterStrength(environmentMultiplier)` (`:156`), **using the unmodified brightness**. Purely a rendering parameter with no managed-side reader. |
| `RayleighConstant` | `public float RayleighConstant;` | The Rayleigh scattering constant describing the wavelength dependence of sky scatter. Produced by `GetRayleighConstant(environmentMultiplier)` (`:157`), again from the unmodified brightness. Purely a rendering parameter with no managed-side reader. |
| `DeserializeFrom` | `public void DeserializeFrom(IReader reader)` | Reads the four fields in a **hard-coded order**: `reader.ReadFloat()` → `EnvironmentMultiplier`, `reader.ReadVec3()` → `AmbientColor`, `reader.ReadFloat()` → `MieScatterStrength`, `reader.ReadFloat()` → `RayleighConstant`. **It reads no length prefix or type tag**, so the binary layout is decided entirely by this method. |
| `SerializeTo` | `public void SerializeTo(IWriter writer)` | The strictly symmetric writer: `WriteFloat` / `WriteVec3` / `WriteFloat` / `WriteFloat`. **Both methods must be edited when you add a field**, or the save data desynchronises. |
| (assembly attribute) `DefineAsEngineStruct` | `[assembly: DefineAsEngineStruct(typeof(AmbientInformation), "ambient_information", false, null, null)]`, at `TaleWorlds.Engine/Properties/AssemblyInfo.cs:13` | Binds it to the native `ambient_information` struct; `false` means it is not a flag set, and there is no debugger abbreviation. **This is the fastest way to answer "who writes these numbers?"** — carrying this attribute means the engine fills them. |
| (only use site) `AmbientInfo` | `AtmosphereInfo.AmbientInfo`, at `AtmosphereInfo.cs:18` | Its single landing point inside the atmosphere struct. `AtmosphereInfo.DeserializeFrom` / `SerializeTo` (`:177-203`) call this type's two methods at a fixed position, **which makes it the only managed caller**. |

## Real Example

**Stated plainly: the snippet below is this type's only real usage**, which is "fill the four fields in an object initialiser inside an `AtmosphereInfo`". It follows `DefaultMapWeatherModel.cs:153-158`; note that those three `GetXxx(...)` methods are **private** on that class (`:471`, `:476`, `:481`), so the method below has to live inside a `MapWeatherModel` subclass:

```csharp
public class MyWeatherModel : MapWeatherModel
{
    public override AtmosphereInfo GetAtmosphereModel(CampaignVec2 position)
    {
        return BuildAtmosphere();
    }
}

private AtmosphereInfo BuildAtmosphere()
{
    float environmentMultiplier = GetEnvironmentMultiplier(sunPosition);
    float modified = MathF.Max(MathF.Pow(environmentMultiplier, 1.5f), 0.001f);

    AtmosphereInfo atmosphere = new AtmosphereInfo
    {
        Seed = (uint)CampaignTime.Now.ToSeconds,
        AtmosphereName = "TOD_12_00_SemiCloudy",
        AmbientInfo =
        {
            // Keep the same clamp the game uses: EnvironmentMultiplier later goes
            // through MathF.Pow(..., 1.5f), so a zero or negative base breaks it.
            EnvironmentMultiplier = MathF.Max(modified * 0.5f, 0.001f),
            AmbientColor = new Vec3(0.42f, 0.44f, 0.48f),
            MieScatterStrength = GetMieScatterStrength(environmentMultiplier),
            RayleighConstant = GetRayleighConstant(environmentMultiplier)
        }
    };

    // IsValid is false when AtmosphereName is empty, which is how a caller tells
    // "no atmosphere" from "a zeroed one".
    Debug.Print("valid = " + atmosphere.IsValid, 0);
}
```

Reproducing its save round-trip, which is the most direct way to understand "field order *is* the format":

```csharp
public static class AmbientRoundTrip
{
    public static void Write(IWriter writer, AmbientInformation value)
    {
        // Field order is hard-coded and IS the binary layout. Changing it
        // corrupts every existing save.
        writer.WriteFloat(value.EnvironmentMultiplier);
        writer.WriteVec3(value.AmbientColor);
        writer.WriteFloat(value.MieScatterStrength);
        writer.WriteFloat(value.RayleighConstant);
    }

    public static void Read(IReader reader, out AmbientInformation value)
    {
        value.EnvironmentMultiplier = reader.ReadFloat();
        value.AmbientColor = reader.ReadVec3();
        value.MieScatterStrength = reader.ReadFloat();
        value.RayleighConstant = reader.ReadFloat();
    }
}
```

## Risks and Boundaries

- **It is a mirror of a native engine struct.** `TaleWorlds.Engine/Properties/AssemblyInfo.cs:13`'s `DefineAsEngineStruct` is the hard evidence. **Managed code only fills it; the values are consumed by the engine**, so changing a field on the managed side only edits an input you are about to hand to native.
- **There is no validity checking whatsoever.** No `IsValid` (that belongs to [AtmosphereInfo](../AtmosphereInfo)), no assertions, no range clamping. **Writing `EnvironmentMultiplier` as 0 or negative is not caught**, and native then uses it in `MathF.Pow(x, 1.5f)` and subsequent multiplies.
- **One construction mixes two brightness sources.** `AmbientColor` uses `modifiedEnvironmentMultiplier` while `MieScatterStrength` and `RayleighConstant` use `environmentMultiplier` (`DefaultMapWeatherModel.cs:155-157`). If you copy this code and unify the two into one variable, the rendering will differ from vanilla.
- **`AmbientColor` is a `Vec3`, not an alpha-carrying colour.** It is the only non-scalar of the four.
- **Field order *is* the save format.** `DeserializeFrom` / `SerializeTo` are hand-written and **do not synchronise each other**. Adding a field means editing both; editing one side alone desynchronises the save data, and **loading does not raise an error — the numbers simply come out wrong**.
- **There is no constructor.** It is a `public struct` with an implicit parameterless constructor, so all four fields default to 0. `new AmbientInformation()` yields "all-zero ambient", **which is not the same as "no ambient"** — for that you want `AtmosphereInfo.GetInvalidAtmosphereInfo()`, which produces `AtmosphereName = ""`.
- **Zero managed-side readers.** Apart from the field declaration at `AtmosphereInfo.cs:18`, nothing in the tree reads these four fields. **The only way to check whether your values are right is to look at native's rendering result.**
- **Do not mutate it after a mission has started.** These fields reach the engine through `MissionInitializerRecord.AtmosphereOnCampaign`, which `MenuHelper.cs:350/385` sets while opening the mission menu. Changing your local copy at runtime does nothing.
- **`SerializeTo` / `DeserializeFrom` are invoked on your behalf by `AtmosphereInfo`.** You do not need — and cannot usefully — call them directly for saving; the path is fixed: `AtmosphereInfo.SerializeTo` → `AmbientInfo.SerializeTo`.

## Cross-Version Notes

`AmbientInformation.cs` is 28 lines in 1.4.5 with 4 fields and 2 methods, in original-source form; the 1.3.x / 1.4.6 counterparts are decompiled output. **What genuinely matters across versions is the native contract**: the bound name `"ambient_information"` in `TaleWorlds.Engine/Properties/AssemblyInfo.cs:13`, and the **order of the four fields** inside `DeserializeFrom` / `SerializeTo`. A change to either makes old saves decode into garbage, and **the managed layer will not raise any error**. Also note that post-1.4.5 versions introduced parallel atmosphere structs in the `AtmosphereInfoV2` line — **if the target version swaps its `AtmosphereInfo`, `AmbientInformation` very likely changed shape too**, and that is the first thing to confirm when migrating.

## Dependencies

- Only managed consumer: [AtmosphereInfo](../AtmosphereInfo)'s `AmbientInfo` field (`AtmosphereInfo.cs:18`), read and written by its `SerializeTo` / `DeserializeFrom` (`:177-203`)
- Native binding: `TaleWorlds.Engine/Properties/AssemblyInfo.cs:13`'s `DefineAsEngineStruct(..., "ambient_information", ...)`
- Producer of the numbers: `TaleWorlds.CampaignSystem.GameComponents/DefaultMapWeatherModel.cs:153-158`'s `GetAtmosphereModel`, the only real construction site in the tree
- Serialisation interfaces: `IReader.ReadFloat()` / `ReadVec3()` and `IWriter.WriteFloat()` / `WriteVec3()` in `TaleWorlds.Library`
- Carrier: [Vec3](../Vec3) for the colour
- Weather-model abstraction: [MapWeatherModel](../../campaign/MapWeatherModel)'s `GetAtmosphereModel(CampaignVec2)` produces the whole `AtmosphereInfo`
- Landing site: `MissionInitializerRecord.AtmosphereOnCampaign`, assigned by `../../campaign/MenuHelper.cs:350/385` when the mission menu opens
- Sibling structs: [AreaInformation](../AreaInformation) (temperature and humidity), plus `FogInformation`, `SkyInformation` and eight others sitting alongside it in `AtmosphereInfo`
- Bucket index: [core-extra API section](../)