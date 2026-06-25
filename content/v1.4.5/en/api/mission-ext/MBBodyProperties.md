---
title: "MBBodyProperties"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBBodyProperties`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBBodyProperties

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBBodyProperties`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBBodyProperties.cs`

## Overview

`MBBodyProperties` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetNumEditableDeformKeys
`public static int GetNumEditableDeformKeys(int race, bool initialGender, int age)`

**Purpose:** Gets the current value of `num editable deform keys`.

### GetParamsFromKey
`public static void GetParamsFromKey(ref FaceGenerationParams faceGenerationParams, BodyProperties bodyProperties, bool earsAreHidden, bool mouthHidden)`

**Purpose:** Gets the current value of `params from key`.

### GetParamsMax
`public static void GetParamsMax(int race, int curGender, int curAge, ref int hairNum, ref int beardNum, ref int faceTextureNum, ref int mouthTextureNum, ref int faceTattooNum, ref int soundNum, ref int eyebrowNum, ref float scale)`

**Purpose:** Gets the current value of `params max`.

### GetZeroProbabilities
`public static void GetZeroProbabilities(int race, int curGender, float curAge, ref float tattooZeroProbability)`

**Purpose:** Gets the current value of `zero probabilities`.

### ProduceNumericKeyWithParams
`public static void ProduceNumericKeyWithParams(FaceGenerationParams faceGenerationParams, bool earsAreHidden, bool mouthIsHidden, ref BodyProperties bodyProperties)`

**Purpose:** Handles logic related to `produce numeric key with params`.

### TransformFaceKeysToDefaultFace
`public static void TransformFaceKeysToDefaultFace(ref FaceGenerationParams faceGenerationParams)`

**Purpose:** Handles logic related to `transform face keys to default face`.

### ProduceNumericKeyWithDefaultValues
`public static void ProduceNumericKeyWithDefaultValues(ref BodyProperties initialBodyProperties, bool earsAreHidden, bool mouthIsHidden, int race, int gender, int age)`

**Purpose:** Handles logic related to `produce numeric key with default values`.

### GetRandomBodyProperties
`public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tatooTags, float variationAmount)`

**Purpose:** Gets the current value of `random body properties`.

### GetDeformKeyData
`public static DeformKeyData GetDeformKeyData(int keyNo, int race, int gender, int age)`

**Purpose:** Gets the current value of `deform key data`.

### GetFaceGenInstancesLength
`public static int GetFaceGenInstancesLength(int race, int gender, int age)`

**Purpose:** Gets the current value of `face gen instances length`.

### EnforceConstraints
`public static bool EnforceConstraints(ref FaceGenerationParams faceGenerationParams)`

**Purpose:** Handles logic related to `enforce constraints`.

### GetScaleFromKey
`public static float GetScaleFromKey(int race, int gender, BodyProperties bodyProperties)`

**Purpose:** Gets the current value of `scale from key`.

### GetHairColorCount
`public static int GetHairColorCount(int race, int curGender, int age)`

**Purpose:** Gets the current value of `hair color count`.

### GetHairColorGradientPoints
`public static List<uint> GetHairColorGradientPoints(int race, int curGender, int age)`

**Purpose:** Gets the current value of `hair color gradient points`.

### GetTatooColorCount
`public static int GetTatooColorCount(int race, int curGender, int age)`

**Purpose:** Gets the current value of `tatoo color count`.

### GetTatooColorGradientPoints
`public static List<uint> GetTatooColorGradientPoints(int race, int curGender, int age)`

**Purpose:** Gets the current value of `tatoo color gradient points`.

### GetSkinColorCount
`public static int GetSkinColorCount(int race, int curGender, int age)`

**Purpose:** Gets the current value of `skin color count`.

### GetMaturityType
`public static BodyMeshMaturityType GetMaturityType(float age)`

**Purpose:** Gets the current value of `maturity type`.

### FlushFaceCache
`public static void FlushFaceCache()`

**Purpose:** Handles logic related to `flush face cache`.

### GetRaceIds
`public static string GetRaceIds()`

**Purpose:** Gets the current value of `race ids`.

### GetHairIndicesByTag
`public static int GetHairIndicesByTag(int race, int curGender, float age, string tag)`

**Purpose:** Gets the current value of `hair indices by tag`.

### GetFacialIndicesByTag
`public static int GetFacialIndicesByTag(int race, int curGender, float age, string tag)`

**Purpose:** Gets the current value of `facial indices by tag`.

### GetTattooIndicesByTag
`public static int GetTattooIndicesByTag(int race, int curGender, float age, string tag)`

**Purpose:** Gets the current value of `tattoo indices by tag`.

### GetSkinColorGradientPoints
`public static List<uint> GetSkinColorGradientPoints(int race, int curGender, int age)`

**Purpose:** Gets the current value of `skin color gradient points`.

### GetVoiceTypeUsableForPlayerData
`public static List<bool> GetVoiceTypeUsableForPlayerData(int race, int curGender, float age, int voiceTypeCount)`

**Purpose:** Gets the current value of `voice type usable for player data`.

### SetHair
`public static void SetHair(ref BodyProperties bodyProperties, int hair, int beard, int tattoo)`

**Purpose:** Sets the value or state of `hair`.

### SetBody
`public static void SetBody(ref BodyProperties bodyProperties, int build, int weight)`

**Purpose:** Sets the value or state of `body`.

### SetPigmentation
`public static void SetPigmentation(ref BodyProperties bodyProperties, int skinColor, int hairColor, int eyeColor)`

**Purpose:** Sets the value or state of `pigmentation`.

### GenerateParentKey
`public static void GenerateParentKey(BodyProperties childBodyProperties, int race, ref BodyProperties motherBodyProperties, ref BodyProperties fatherBodyProperties)`

**Purpose:** Handles logic related to `generate parent key`.

### GetBodyPropertiesWithAge
`public static BodyProperties GetBodyPropertiesWithAge(ref BodyProperties bodyProperties, float age)`

**Purpose:** Gets the current value of `body properties with age`.

## Usage Example

```csharp
MBBodyProperties.GetNumEditableDeformKeys(0, false, 0);
```

## See Also

- [Complete Class Catalog](../catalog)