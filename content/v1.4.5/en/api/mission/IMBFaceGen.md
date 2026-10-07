---
title: "IMBFaceGen"
description: "The internal native bridge behind MBBodyProperties and FaceGen: body/face parameter randomisation, deform keys, colour gradients and race metadata. Twenty-six EngineMethods, almost all reachable publicly through MBBodyProperties."
---

# IMBFaceGen

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal interface IMBFaceGen`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IMBFaceGen.cs`

## Overview

`IMBFaceGen` is the managed-to-native seam for **everything about a character's body and face that the engine decides rather than your XML**. It is 86 lines with 26 `[EngineMethod]` bindings, and it falls into five jobs: producing and constraining `FaceGenerationParams`, turning `BodyProperties` into a numeric key and back, reporting the available ranges (deform keys, hair/beard/tattoo counts, colour gradient points), enumerating races, and flushing the face cache.

Unlike most bridges in this bucket, **almost all of it is publicly reachable**. The real wrapper is [`MBBodyProperties`](../../mission-ext/MBBodyProperties), a `public static class` (`MBBodyProperties.cs:8`) that forwards twenty of the twenty-six members. [`FaceGen`](../../core-extra/FaceGen) is the higher-level public facade (`public class FaceGen : IFaceGen`, `FaceGen.cs:7`) but it only calls the bridge once, for `GetRaceIds()` (`FaceGen.cs:20`); everything else it offers delegates onward to `MBBodyProperties` (`FaceGen.cs:67`, `:76`, `:88`, `:95`). So the mental model is: `IMBFaceGen` is native, `MBBodyProperties` is the direct public door, and `FaceGen` is the convenience layer above it.

## Mental Model

### What it is / which layer

- It is **the face/body generation engine**, which sits below character creation and below NPC randomisation. Both of those ask it the same question in different words: given a race, gender and age, what `BodyProperties` should this character have, and what deform keys are available to sculpt them.
- The central type is `BodyProperties` — a shared struct carrying build, weight, skin/hair/eye colour, and hair/beard/tattoo indices. The `FaceGenerationParams` type is the *editing* view of the same thing: you move params around, then `ProduceNumericKeyWithParams` collapses them back into `BodyProperties`. Two representations, one character.
- It is a **range-and-constraint system**, not a random-number source. The `GetParamsMax` family reports how many hairs, beards, face textures, mouth textures, tattoos, sounds and eyebrows exist for a given race/gender/age (`IMBFaceGen.cs:16`), and `EnforceConstraints` (`IMBFaceGen.cs:34`) is what pulls an edited set back inside those limits. Reading `GetRandomBodyProperties` as "give me a random float" misses the point: it takes explicit min/max `BodyProperties` bounds plus a `seed`, so it is a constrained sampler, and the `seed` makes it reproducible.

### The consequence that matters

**Three of the methods write through `ref`/`out` parameters rather than returning anything**, which changes how you must call them. `GetParamsMax` fills eight `ref` outputs plus a `ref float scale` (`IMBFaceGen.cs:16`); `GetParamsFromKey` fills two `ref` structs (`IMBFaceGen.cs:13`); `ProduceNumericKeyWithParams` writes the resulting `BodyProperties` back through a `ref` (`IMBFaceGen.cs:22`). The managed wrapper converts several of these into return values — `MBBodyProperties.GetParamsFromKey` takes `BodyProperties` by value from the caller and passes it by `ref` internally (`MBBodyProperties.cs:22-24`), and `GetDeformKeyData` returns a `DeformKeyData` the interface wrote through a `ref` (`MBBodyProperties.cs:59-62`). The practical rule: **through the public wrapper you get values back; through the bridge you must declare the variables yourself**, and an uninitialised local passed as `ref` is a very easy mistake to make from the inside and impossible to make from outside.

### When to use / when not

- **Use** for NPC randomisation with constraints (call `GetRandomBodyProperties` with bounds and a seed), for reading available ranges before building a character-creation UI (call `GetParamsMax`), and for converting between a character's stored `BodyProperties` and an editable `FaceGenerationParams` view.
- **Do NOT** call `FlushFaceCache` casually. It is `public static` on the wrapper (`FaceGen.cs:105`, forwarding to `MBBodyProperties.cs:133`) and it discards cached generated meshes; doing that per frame or per character spawn will cost you the point of the cache.
- **Do NOT** trust `EnforceConstraints`'s `bool` as "success". It returns whether constraints could be satisfied while mutating the params in place (`IMBFaceGen.cs:34`), so a `false` means your input was adjusted, not rejected.

## How to use

**How to obtain it.** You cannot reference the interface: it is `internal` (`IMBFaceGen.cs:7`), the `MBAPI` field is `internal static` (`MBAPI.cs:58`), and `TaleWorlds.MountAndBlade` grants `InternalsVisibleTo` only to `TaleWorlds.MountAndBlade.AutoGenerated`, `TaleWorlds.MountAndBlade.Multiplayer` and `TaleWorlds.Generator.Bannerlord` (`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:8-10`).

The door out is [`MBBodyProperties`](../../mission-ext/MBBodyProperties), `public static class` at `MBBodyProperties.cs:8`, which forwards `GetNumEditableDeformKeys`, `GetParamsFromKey`, `GetParamsMax`, `GetZeroProbabilities`, `ProduceNumericKeyWithParams`, `TransformFaceKeysToDefaultFace`, `ProduceNumericKeyWithDefaultValues`, `GetRandomBodyProperties`, `GetDeformKeyData`, `GetFaceGenInstancesLength`, `EnforceConstraints`, `GetScaleFromKey`, the colour-gradient family, `GetRaceIds` and the tag-index family. Above that, [`FaceGen`](../../core-extra/FaceGen) is the object-oriented entry most mod code should start from.

**A typical use.** Read the available ranges for a race so a character-creation UI knows how many options to draw, then sample a body inside bounds:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static class NpcAppearance
{
    public static void Describe(int race, int gender, float age)
    {
        // MBBodyProperties.GetParamsMax is public static and takes `ref` outputs
        // (MBBodyProperties.cs:27-29 -> IMBFaceGen.cs:16). Declare every local
        // first; the bridge writes into them in place.
        int hairNum = 0, beardNum = 0, faceTextureNum = 0, mouthTextureNum = 0;
        int faceTattooNum = 0, soundNum = 0, eyebrowNum = 0;
        float scale = 0f;

        MBBodyProperties.GetParamsMax(
            race, gender, age,
            ref hairNum, ref beardNum, ref faceTextureNum, ref mouthTextureNum,
            ref faceTattooNum, ref soundNum, ref eyebrowNum, ref scale);

        Debug.Print(
            "race " + race + ": " + hairNum + " hairs, " + faceTextureNum + " faces, scale " + scale,
            0);
    }
}
```

**What to watch out for.** The `ref`-heavy signatures are the trap, and the wrapper partly hides them. `GetParamsMax` alone takes nine `ref` parameters through the bridge (`IMBFaceGen.cs:16`), so calling it from inside the assembly with a fresh local you forget to initialise is undefined behaviour. From outside, the more common mistake is different: assuming `EnforceConstraints` validates. It does not reject — it **mutates and reports** (`IMBFaceGen.cs:34`), so read the params back after calling it and never assume your requested value survived.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `GetRandomBodyProperties` | `[EngineMethod("get_random_body_properties", false, null, false)] void GetRandomBodyProperties(int race, int gender, ref BodyProperties bodyPropertiesMin, ref BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tatooTags, float variationAmount, ref BodyProperties outBodyProperties)` | Samples a random `BodyProperties` **inside explicit min/max bounds**. Declared at `IMBFaceGen.cs:31`; forwarded by `MBBodyProperties.GetRandomBodyProperties` at `MBBodyProperties.cs:52`, which converts `isFemale` into the `gender` int (`:55`) and returns `outBodyProperties` (`:56`). The `seed` makes the result reproducible, which is what makes this usable for a save-stable character rather than a different face on every load. The three tag strings restrict which hair/beard/tattoo entries are eligible. |
| `ProduceNumericKeyWithParams` | `[EngineMethod("produce_numeric_key_with_params", false, null, false)] void ProduceNumericKeyWithParams(ref FaceGenerationParams faceGenerationParams, bool earsAreHidden, bool mouthIsHidden, ref BodyProperties bodyProperties)` | Collapses an edited `FaceGenerationParams` back into the numeric `BodyProperties` key a character stores. Declared at `IMBFaceGen.cs:22`; forwarded by `MBBodyProperties.ProduceNumericKeyWithParams` at `MBBodyProperties.cs:37`. **Write-back, not return**: the result lands in the `ref bodyProperties` you passed, so reading the old value afterwards is a bug. This is the save half of the round trip. |
| `GetParamsFromKey` | `[EngineMethod("get_params_from_key", false, null, false)] void GetParamsFromKey(ref FaceGenerationParams faceGenerationParams, ref BodyProperties bodyProperties, bool earsAreHidden, bool mouthHidden)` | The reverse: expands a stored `BodyProperties` key into an editable `FaceGenerationParams`. Declared at `IMBFaceGen.cs:13`; forwarded by `MBBodyProperties.GetParamsFromKey` at `MBBodyProperties.cs:22`, which takes `BodyProperties` **by value** from its own caller (`:22`) and passes it by `ref` internally (`:24`). The `earsAreHidden` / `mouthHidden` flags decide whether those meshes participate. This is the read half of the round trip. |
| `ProduceNumericKeyWithDefaultValues` | `[EngineMethod("produce_numeric_key_with_default_values", false, null, false)] void ProduceNumericKeyWithDefaultValues(ref BodyProperties initialBodyProperties, bool earsAreHidden, bool mouthIsHidden, int race, int gender, float age)` | Produces a key without any explicit params, deriving it from the race/gender/age you supply. Declared at `IMBFaceGen.cs:25`; forwarded by `MBBodyProperties.ProduceNumericKeyWithDefaultValues` at `MBBodyProperties.cs:47`. Unlike `ProduceNumericKeyWithParams` it needs no `FaceGenerationParams` at all, which makes it the cheap way to get "a plausible character of this race" when you do not care about the specifics. |
| `EnforceConstraints` | `[EngineMethod("enforce_constraints", false, null, false)] bool EnforceConstraints(ref FaceGenerationParams faceGenerationParams)` | Pulls an edited parameter set back inside the legal range for its race/gender/age, **mutating in place**. Declared at `IMBFaceGen.cs:34`; forwarded by `MBBodyProperties.EnforceConstraints` at `MBBodyProperties.cs:71`. **The `bool` reports whether constraints could be met, not acceptance** — a `false` means your values were adjusted, so re-read the params after calling it. |
| `GetParamsMax` | `[EngineMethod("get_params_max", false, null, false)] void GetParamsMax(int race, int curGender, float curAge, ref int hairNum, ref int beardNum, ref int faceTextureNum, ref int mouthTextureNum, ref int faceTattooNum, ref int soundNum, ref int eyebrowNum, ref float scale)` | Reports the available ranges for a race/gender/age: how many hairs, beards, face textures, mouth textures, face tattoos, sound records and eyebrows exist, plus the body scale. Declared at `IMBFaceGen.cs:16`; forwarded by `MBBodyProperties.GetParamsMax` at `MBBodyProperties.cs:27`. **Nine `ref` outputs** — the widest signature in the interface, and the reason a UI needs to declare all nine locals before calling. |
| `GetNumEditableDeformKeys` | `[EngineMethod("get_num_editable_deform_keys", false, null, false)] int GetNumEditableDeformKeys(int race, bool initialGender, float age)` | How many deform keys a character of this race/gender/age has available to be sculpted with. Declared at `IMBFaceGen.cs:10`; forwarded by `MBBodyProperties.GetNumEditableDeformKeys` at `MBBodyProperties.cs:17`, which takes `int age` publicly (`:17`) and converts to `float` for the bridge (`:19`). This count is the upper bound for `GetDeformKeyData`'s `keyNo`. |
| `GetDeformKeyData` | `[EngineMethod("get_deform_key_data", false, null, false)] void GetDeformKeyData(int keyNo, ref DeformKeyData deformKeyData, int race, int gender, float age)` | Fills in the definition of one deform key — its index, name and adjustable range. Declared at `IMBFaceGen.cs:37`; forwarded by `MBBodyProperties.GetDeformKeyData` at `MBBodyProperties.cs:59`, which declares a local `DeformKeyData`, passes it by `ref` (`:62`), and returns it by value (`:59`). `keyNo` is bounded by `GetNumEditableDeformKeys` (`IMBFaceGen.cs:10`), and nothing in the bridge validates it. |
| `GetFaceGenInstancesLength` | `[EngineMethod("get_face_gen_instances_length", false, null, false)] int GetFaceGenInstancesLength(int race, int gender, float age)` | How many distinct face-generation results exist for this race/gender/age — the size of the key space. Declared at `IMBFaceGen.cs:40`; forwarded by `MBBodyProperties.GetFaceGenInstancesLength` at `MBBodyProperties.cs:66`. Use it to tell "this character is one of N possible faces" rather than to index anything. |
| `GetRaceIds` | `[EngineMethod("get_race_ids", false, null, false)] string GetRaceIds()` | The engine's race ids, **semicolon-separated**. Declared at `IMBFaceGen.cs:76`; both wrappers split it — `FaceGen.cs:20` does `.Split(new char[1] { ';' })` into `_raceNamesArray`, and `MBBodyProperties.GetRaceIds` does the same and returns `string[]` (`MBBodyProperties.cs:136-138`). This is the one member `FaceGen` calls directly, and it is how the race list is discovered at all. |
| `GetHairIndicesByTag` / `GetFacialIndicesByTag` / `GetTattooIndicesByTag` | three `[EngineMethod("get_*_indices_by_tag", false, null, false)] string Get…IndicesByTag(int race, int curGender, float age, string tag)` | Resolve a tag (a mod- or module-authored label such as a culture or faction marker) to the **comma-separated** indices of matching entries. Declared at `IMBFaceGen.cs:79`, `:82`, `:85`; forwarded by `MBBodyProperties` at `MBBodyProperties.cs:141`, `:148` and beyond, each splitting on `','`. The comma split is the trap: an index list is not one number, and an empty result yields an array you must not index. |
| `GetHairColorCount` / `GetSkinColorCount` / `GetTatooColorCount` / `GetVoiceRecordsCount` | four `[EngineMethod("get_*_count", false, null, false)] int Get…Count(int race, int curGender, float age)` | The sizes of the per-race colour and voice tables. Declared at `IMBFaceGen.cs:49`, `:61`, `:55`, `:46`; forwarded by `MBBodyProperties` at `MBBodyProperties.cs:81`, `:121`, `:101`, `:66`. Each count is the array size you must pass to the matching `Get…GradientPoints` method. Note the **spelling**: the bridge declares `GetTatooColorCount` (one `t`) at `IMBFaceGen.cs:55` while its gradient sibling is `GetTattooColorGradientPoints` with two — and the wrapper preserves both spellings. |
| `GetHairColorGradientPoints` / `GetTatooColorGradientPoints` / `GetSkinColorGradientPoints` | three `[EngineMethod("get_*_gradient_points", false, null, false)] void Get…GradientPoints(int race, int curGender, float age, Vec3[] colors)` | Fills a caller-supplied `Vec3[]` with the gradient stops for a colour axis. Declared at `IMBFaceGen.cs:52`, `:58`, `:73`. **The array length is entirely your responsibility** and nothing validates it, so a too-small array is an out-of-bounds write. `MBBodyProperties` converts to `List<uint>` by allocating from the matching count and querying the count again (`MBBodyProperties.cs:86-91`, `:106-111`) — which is the pattern to copy if you ever need this directly. |
| `GetVoiceTypeUsableForPlayerData` | `[EngineMethod("get_voice_type_usable_for_player_data", false, null, false)] void GetVoiceTypeUsableForPlayerData(int race, int curGender, float age, bool[] aiArray)` | Fills a `bool[]` marking which voice types this race/gender/age may use for player data. Declared at `IMBFaceGen.cs:70`. Like the gradient members, the array length is caller-chosen and unvalidated. |
| `GetScaleFromKey` | `[EngineMethod("get_scale", false, null, false)] float GetScaleFromKey(int race, int gender, ref BodyProperties initialBodyProperties)` | The body scale implied by a given key. Declared at `IMBFaceGen.cs:43`; forwarded by `MBBodyProperties.GetScaleFromKey` at `MBBodyProperties.cs:76`, which takes `BodyProperties` by value publicly (`:76`) and passes it by `ref` (`:78`). Note the **C# name does not match the native symbol**: the method is `GetScaleFromKey`, the symbol is `get_scale`. |
| `GetZeroProbabilities` | `[EngineMethod("get_zero_probabilities", false, null, false)] void GetZeroProbabilities(int race, int curGender, float curAge, ref float tattooZeroProbability)` | Reports the probability that a generated character gets no tattoo at all. Declared at `IMBFaceGen.cs:19`; forwarded by `MBBodyProperties.GetZeroProbabilities` at `MBBodyProperties.cs:32`, and surfaced on the public facade as `FaceGen.GetTattooZeroProbability` (`FaceGen.cs:145`). Single `ref float` output — the narrowest of the `ref` family. |
| `GetMaturityType` | `[EngineMethod("get_maturity_type", false, null, false)] int GetMaturityType(float age)` | Which body-mesh maturity band an age falls into. Declared at `IMBFaceGen.cs:64`; the bridge returns `int` and `MBBodyProperties.GetMaturityType` casts it to the enum `BodyMeshMaturityType` (`MBBodyProperties.cs:126-128`), which the public facade re-exposes as `GetMaturityTypeWithAge` (`FaceGen.cs:100`). **The only member on this bridge whose return type is an enum in disguise.** |
| `TransformFaceKeysToDefaultFace` | `[EngineMethod("transform_face_keys_to_default_face", false, null, false)] void TransformFaceKeysToDefaultFace(ref FaceGenerationParams faceGenerationParams)` | Resets an edited parameter set to the neutral default face for its race, **in place**. Declared at `IMBFaceGen.cs:28`; forwarded by `MBBodyProperties.TransformFaceKeysToDefaultFace` at `MBBodyProperties.cs:42`. Useful as an undo when a character-creation UI wants to reset one field without discarding the rest. |
| `FlushFaceCache` | `[EngineMethod("flush_face_cache", false, null, false)] void FlushFaceCache()` | Discards the engine's cached generated face meshes. Declared at `IMBFaceGen.cs:67`; forwarded twice over — `MBBodyProperties.FlushFaceCache` (`MBBodyProperties.cs:131-133`), then `FaceGen.FlushFaceCache` (`FaceGen.cs:105-107`). **The most expensive call in this interface** and the only one that affects performance rather than correctness. Call it after regenerating many characters at once, never per character. |

Members a reader might expect and their verified status:

| Absent member | Status | Why it is absent |
| --- | --- | --- |
| A direct "apply this face to a live agent" method | **UNRESOLVED — absent in v1.4.5** | `IMBFaceGen.cs` declares 26 `EngineMethod` attributes, none of which touches a scene or an agent. Applying body properties is the `TaleWorlds.Core` character-creation layer's job; this bridge produces and validates the data only. |
| A struct-layout / validation return | **UNRESOLVED — absent in v1.4.5** | `EnforceConstraints` (`IMBFaceGen.cs:34`) is the only validation-shaped member and it mutates rather than reports a diagnostic. |
| `GetVoiceRecordsCount` naming consistency | **VERIFIED — asymmetric spelling** | `GetVoiceRecordsCount` (plural "Records") at `IMBFaceGen.cs:46` versus `GetTatooColorCount` (single "t") at `IMBFaceGen.cs:55` and `GetTattooIndicesByTag` (double "t") at `IMBFaceGen.cs:85`. The spellings are inconsistent in the source itself; the wrapper preserves them. |

## Examples

Sample a reproducible body inside bounds — the seed is what makes it save-stable:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static class NpcFace
{
    // MBBodyProperties.GetRandomBodyProperties is public static
    // (MBBodyProperties.cs:52) and returns the result rather than writing
    // through a ref. Fixed seed => the same character every time.
    public static BodyProperties MakeScout(int race, bool isFemale)
    {
        BodyProperties min = new BodyProperties();  // lower bound
        BodyProperties max = new BodyProperties();  // upper bound

        return MBBodyProperties.GetRandomBodyProperties(
            race,
            isFemale,
            min,
            max,
            hairCoverType: 0,
            seed: 12345,          // reproducible
            hairTags: "northern",
            beardTags: "",
            tattooTags: "",
            variationAmount: 0.5f);
    }
}
```

Read a stored key into an editable view, edit it, and write it back — the full round trip:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static class FaceEditor
{
    public static BodyProperties Adjust(BodyProperties stored, int race, float age)
    {
        // 1) Read: BodyProperties -> FaceGenerationParams
        FaceGenerationParams faceParams = new FaceGenerationParams();
        MBBodyProperties.GetParamsFromKey(
            ref faceParams,
            stored,
            earsAreHidden: false,
            mouthIsHidden: false);

        // 2) Constrain BEFORE editing, so your edit starts from a legal set.
        //    EnforceConstraints mutates in place (IMBFaceGen.cs:34); a false
        //    means values were adjusted, not rejected.
        bool constrained = MBBodyProperties.EnforceConstraints(ref faceParams);
        if (!constrained)
        {
            Debug.Print("params were adjusted to fit race bounds", 0);
        }

        // 3) Write: FaceGenerationParams -> BodyProperties.
        //    The result lands in the ref argument, so `stored` is now the
        //    new key — reading the old value here would be a bug.
        MBBodyProperties.ProduceNumericKeyWithParams(
            faceParams,
            earsAreHidden: false,
            mouthIsHidden: true,
            ref stored);

        return stored;
    }
}
```

Enumerate the tag-filtered option lists a character-creation UI needs, and never index an empty list:

```csharp
using TaleWorlds.MountAndBlade;

public static class OptionLists
{
    public static void Dump(int race, int gender, float age, string tag)
    {
        // Returns int[] already split on ',' by MBBodyProperties.cs:141.
        int[] hairs = MBBodyProperties.GetHairIndicesByTag(race, gender, age, tag);
        int[] facial = MBBodyProperties.GetFacialIndicesByTag(race, gender, age, tag);

        // An unmatched tag yields an empty array, not an error.
        if (hairs.Length > 0)
        {
            Debug.Print(tag + ": " + hairs.Length + " hair entries, first = " + hairs[0], 0);
        }
        if (facial.Length > 0)
        {
            Debug.Print(tag + ": " + facial.Length + " facial entries", 0);
        }
    }
}
```

And the cache flush, with the reason it is dangerous written next to it:

```csharp
using TaleWorlds.MountAndBlade;

public static class CacheMaintenance
{
    public static void AfterBulkRegeneration(int charactersChanged)
    {
        // FlushFaceCache discards the engine's cached generated faces
        // (IMBFaceGen.cs:67 -> MBBodyProperties.cs:133 -> FaceGen.cs:105-107).
        // Correct for a one-off bulk change; wrong per character, because you
        // throw away the cache you just built.
        if (charactersChanged > 100)
        {
            FaceGen.FlushFaceCache();
        }
    }
}
```

## Risks and crash boundaries

- **A mod cannot name the interface.** `internal interface` (`IMBFaceGen.cs:7`) plus `internal static MBAPI` field (`MBAPI.cs:58`) plus `InternalsVisibleTo` limited to three TaleWorlds assemblies (`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:8-10`). Compile-time failure.
- **Nearly everything is publicly reachable anyway.** Twenty of the twenty-six members are forwarded by [`MBBodyProperties`](../../mission-ext/MBBodyProperties) (`MBBodyProperties.cs:8`). "It's internal" is a weak predictor of usability on this bridge specifically.
- **`ref`/`out` signatures demand declared locals.** `GetParamsMax` alone has nine `ref` outputs (`IMBFaceGen.cs:16`), and `GetDeformKeyData` (`IMBFaceGen.cs:37`) writes a whole struct through a `ref`. Uninitialised locals passed to `ref` are undefined behaviour; the wrapper hides this by declaring the locals for you (`MBBodyProperties.cs:60-62`).
- **Caller-sized arrays are unvalidated.** `GetHairColorGradientPoints`, `GetTatooColorGradientPoints`, `GetSkinColorGradientPoints` (`IMBFaceGen.cs:52`, `:58`, `:73`) and `GetVoiceTypeUsableForPlayerData` (`IMBFaceGen.cs:70`) all write into a caller-allocated array with no length check. Size it from the matching `Get…Count` first, exactly as `MBBodyProperties.cs:86-91` does.
- **`EnforceConstraints` mutates.** It is not a validator; it edits your params and returns whether it could fit them (`IMBFaceGen.cs:34`). Re-read after calling.
- **`keyNo` is unbounded.** `GetDeformKeyData` (`IMBFaceGen.cs:37`) trusts the caller; the only bound is `GetNumEditableDeformKeys` (`IMBFaceGen.cs:10`) and nothing enforces it.
- **Comma and semicolon separated returns.** `GetRaceIds` is semicolon-separated (`IMBFaceGen.cs:76`); the three `Get…IndicesByTag` methods are comma-separated (`IMBFaceGen.cs:79`, `:82`, `:85`). The wrappers split both, but a mod reading the raw strings without splitting gets a single wrong value instead of an error.
- **`FlushFaceCache` is a performance trap.** It discards cached generated faces (`IMBFaceGen.cs:67`). Calling it per character negates the cache.
- **Not a save participant in the bridge itself.** No `[Serializable]` state. Note the distinction that matters: `BodyProperties` *is* saved as part of a character, but this interface holds nothing and is called during generation, not during load.

## Cross-Version Notes

The v1.4.5 file is 86 lines with 26 `[EngineMethod]` bindings. The same file name and namespace appear under the same `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/` layout in the `bannerlord-1.3.0` and `bannerlord-1.3.15` trees, and the face-generation surface is one of the most stable in the engine: the param/key round trip, the `GetParamsMax` range report and the `GetRandomBodyProperties` sampler have kept their shapes across these versions. The **native symbol strings** are the contract. What is most likely to drift is the *set* of per-race attributes — the colour and voice gradient members exist because each colour axis is data-driven, so adding an axis adds a `Get…Count` / `Get…GradientPoints` pair rather than changing existing ones. Also note two name oddities that are source-level, not version-level: `GetScaleFromKey` binds to `get_scale` (`IMBFaceGen.cs:42-43`) and `GetTatooColorCount` is spelled with one `t` (`IMBFaceGen.cs:55`). **VERIFIED MEASURED for v1.4.5** (86 lines, 26 members, complete `MBBodyProperties.cs` and `FaceGen.cs` call-site read); the sibling version trees were not read member-by-member for this page.

## Dependencies

- Primary managed caller: [`MBBodyProperties`](../../mission-ext/MBBodyProperties), a `public static class` (`MBBodyProperties.cs:8`) forwarding twenty of the twenty-six members — call sites at `MBBodyProperties.cs:19`, `:24`, `:29`, `:34`, `:39`, `:44`, `:49`, `:55`, `:62`, `:68`, `:73`, `:78`, `:83`, `:91`, `:103`, `:111`, `:123`, `:128`, `:133`, `:138`, `:143`, `:150`.
- Higher-level facade: [`FaceGen`](../../core-extra/FaceGen), `public class FaceGen : IFaceGen` (`FaceGen.cs:7`), which calls `GetRaceIds()` directly (`FaceGen.cs:20`) and delegates everything else to `MBBodyProperties` (`FaceGen.cs:67`, `:76`, `:88`, `:95`, `:105`, `:145`).
- Static holder: [`MBAPI`](../../mission-ext/MBAPI) — `internal static IMBFaceGen IMBFaceGen` at `MBAPI.cs:58`, assigned in `SetObjects` at `MBAPI.cs:106`.
- Binding marker: [`ScriptingInterfaceBase`](../ScriptingInterfaceBase), applied at `IMBFaceGen.cs:6`.
- Data contract: `BodyProperties`, `FaceGenerationParams` and `DeformKeyData` in `TaleWorlds.Core` — described here, not linked, because they have no pages in this slice.
- Consuming layer this feeds: character creation and agent initialisation, which read the produced `BodyProperties`.
- Bucket index: [mission API](../)