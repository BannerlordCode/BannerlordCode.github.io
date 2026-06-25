---
title: "MBBodyProperties"
description: "Auto-generated class reference for MBBodyProperties."
---
# MBBodyProperties

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBBodyProperties`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBBodyProperties.cs`

## Overview

`MBBodyProperties` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetNumEditableDeformKeys
`public static int GetNumEditableDeformKeys(int race, bool initialGender, int age)`

**Purpose:** Reads and returns the `num editable deform keys` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetNumEditableDeformKeys(0, false, 0);
```

### GetParamsFromKey
`public static void GetParamsFromKey(ref FaceGenerationParams faceGenerationParams, BodyProperties bodyProperties, bool earsAreHidden, bool mouthHidden)`

**Purpose:** Reads and returns the `params from key` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetParamsFromKey(faceGenerationParams, bodyProperties, false, false);
```

### GetParamsMax
`public static void GetParamsMax(int race, int curGender, int curAge, ref int hairNum, ref int beardNum, ref int faceTextureNum, ref int mouthTextureNum, ref int faceTattooNum, ref int soundNum, ref int eyebrowNum, ref float scale)`

**Purpose:** Reads and returns the `params max` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetParamsMax(0, 0, 0, hairNum, beardNum, faceTextureNum, mouthTextureNum, faceTattooNum, soundNum, eyebrowNum, scale);
```

### GetZeroProbabilities
`public static void GetZeroProbabilities(int race, int curGender, float curAge, ref float tattooZeroProbability)`

**Purpose:** Reads and returns the `zero probabilities` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetZeroProbabilities(0, 0, 0, tattooZeroProbability);
```

### ProduceNumericKeyWithParams
`public static void ProduceNumericKeyWithParams(FaceGenerationParams faceGenerationParams, bool earsAreHidden, bool mouthIsHidden, ref BodyProperties bodyProperties)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBBodyProperties.ProduceNumericKeyWithParams(faceGenerationParams, false, false, bodyProperties);
```

### TransformFaceKeysToDefaultFace
`public static void TransformFaceKeysToDefaultFace(ref FaceGenerationParams faceGenerationParams)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBBodyProperties.TransformFaceKeysToDefaultFace(faceGenerationParams);
```

### ProduceNumericKeyWithDefaultValues
`public static void ProduceNumericKeyWithDefaultValues(ref BodyProperties initialBodyProperties, bool earsAreHidden, bool mouthIsHidden, int race, int gender, int age)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBBodyProperties.ProduceNumericKeyWithDefaultValues(initialBodyProperties, false, false, 0, 0, 0);
```

### GetRandomBodyProperties
`public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tatooTags, float variationAmount)`

**Purpose:** Reads and returns the `random body properties` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetRandomBodyProperties(0, false, bodyPropertiesMin, bodyPropertiesMax, 0, 0, "example", "example", "example", 0);
```

### GetDeformKeyData
`public static DeformKeyData GetDeformKeyData(int keyNo, int race, int gender, int age)`

**Purpose:** Reads and returns the `deform key data` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetDeformKeyData(0, 0, 0, 0);
```

### GetFaceGenInstancesLength
`public static int GetFaceGenInstancesLength(int race, int gender, int age)`

**Purpose:** Reads and returns the `face gen instances length` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetFaceGenInstancesLength(0, 0, 0);
```

### EnforceConstraints
`public static bool EnforceConstraints(ref FaceGenerationParams faceGenerationParams)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBBodyProperties.EnforceConstraints(faceGenerationParams);
```

### GetScaleFromKey
`public static float GetScaleFromKey(int race, int gender, BodyProperties bodyProperties)`

**Purpose:** Reads and returns the `scale from key` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetScaleFromKey(0, 0, bodyProperties);
```

### GetHairColorCount
`public static int GetHairColorCount(int race, int curGender, int age)`

**Purpose:** Reads and returns the `hair color count` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetHairColorCount(0, 0, 0);
```

### GetHairColorGradientPoints
`public static List<uint> GetHairColorGradientPoints(int race, int curGender, int age)`

**Purpose:** Reads and returns the `hair color gradient points` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetHairColorGradientPoints(0, 0, 0);
```

### GetTatooColorCount
`public static int GetTatooColorCount(int race, int curGender, int age)`

**Purpose:** Reads and returns the `tatoo color count` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetTatooColorCount(0, 0, 0);
```

### GetTatooColorGradientPoints
`public static List<uint> GetTatooColorGradientPoints(int race, int curGender, int age)`

**Purpose:** Reads and returns the `tatoo color gradient points` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetTatooColorGradientPoints(0, 0, 0);
```

### GetSkinColorCount
`public static int GetSkinColorCount(int race, int curGender, int age)`

**Purpose:** Reads and returns the `skin color count` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetSkinColorCount(0, 0, 0);
```

### GetMaturityType
`public static BodyMeshMaturityType GetMaturityType(float age)`

**Purpose:** Reads and returns the `maturity type` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetMaturityType(0);
```

### FlushFaceCache
`public static void FlushFaceCache()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBBodyProperties.FlushFaceCache();
```

### GetRaceIds
`public static string GetRaceIds()`

**Purpose:** Reads and returns the `race ids` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetRaceIds();
```

### GetHairIndicesByTag
`public static int GetHairIndicesByTag(int race, int curGender, float age, string tag)`

**Purpose:** Reads and returns the `hair indices by tag` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetHairIndicesByTag(0, 0, 0, "example");
```

### GetFacialIndicesByTag
`public static int GetFacialIndicesByTag(int race, int curGender, float age, string tag)`

**Purpose:** Reads and returns the `facial indices by tag` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetFacialIndicesByTag(0, 0, 0, "example");
```

### GetTattooIndicesByTag
`public static int GetTattooIndicesByTag(int race, int curGender, float age, string tag)`

**Purpose:** Reads and returns the `tattoo indices by tag` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetTattooIndicesByTag(0, 0, 0, "example");
```

### GetSkinColorGradientPoints
`public static List<uint> GetSkinColorGradientPoints(int race, int curGender, int age)`

**Purpose:** Reads and returns the `skin color gradient points` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetSkinColorGradientPoints(0, 0, 0);
```

### GetVoiceTypeUsableForPlayerData
`public static List<bool> GetVoiceTypeUsableForPlayerData(int race, int curGender, float age, int voiceTypeCount)`

**Purpose:** Reads and returns the `voice type usable for player data` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetVoiceTypeUsableForPlayerData(0, 0, 0, 0);
```

### SetHair
`public static void SetHair(ref BodyProperties bodyProperties, int hair, int beard, int tattoo)`

**Purpose:** Assigns a new value to `hair` and updates the object's internal state.

```csharp
// Static call; no instance required
MBBodyProperties.SetHair(bodyProperties, 0, 0, 0);
```

### SetBody
`public static void SetBody(ref BodyProperties bodyProperties, int build, int weight)`

**Purpose:** Assigns a new value to `body` and updates the object's internal state.

```csharp
// Static call; no instance required
MBBodyProperties.SetBody(bodyProperties, 0, 0);
```

### SetPigmentation
`public static void SetPigmentation(ref BodyProperties bodyProperties, int skinColor, int hairColor, int eyeColor)`

**Purpose:** Assigns a new value to `pigmentation` and updates the object's internal state.

```csharp
// Static call; no instance required
MBBodyProperties.SetPigmentation(bodyProperties, 0, 0, 0);
```

### GenerateParentKey
`public static void GenerateParentKey(BodyProperties childBodyProperties, int race, ref BodyProperties motherBodyProperties, ref BodyProperties fatherBodyProperties)`

**Purpose:** Generates an instance, data, or representation of `parent key`.

```csharp
// Static call; no instance required
MBBodyProperties.GenerateParentKey(childBodyProperties, 0, motherBodyProperties, fatherBodyProperties);
```

### GetBodyPropertiesWithAge
`public static BodyProperties GetBodyPropertiesWithAge(ref BodyProperties bodyProperties, float age)`

**Purpose:** Reads and returns the `body properties with age` value held by the current object.

```csharp
// Static call; no instance required
MBBodyProperties.GetBodyPropertiesWithAge(bodyProperties, 0);
```

## Usage Example

```csharp
MBBodyProperties.GetNumEditableDeformKeys(0, false, 0);
```

## See Also

- [Area Index](../)