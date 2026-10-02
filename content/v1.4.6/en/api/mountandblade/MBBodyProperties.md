---
title: "MBBodyProperties"
description: "MBBodyProperties: a public class in TaleWorlds.MountAndBlade; 32 exposed members (30 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MBBodyProperties.cs."
---
# MBBodyProperties

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class MBBodyProperties`
**File:** `TaleWorlds.MountAndBlade/MBBodyProperties.cs`

## Overview

MBBodyProperties lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBBodyProperties.cs. It is a public class; the inheritance chain is MBBodyProperties. It exposes 32 public/protected members: 30 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBBodyProperties is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MBBodyProperties. The surface is method-led (methods 30/32, properties 1/32), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBBodyProperties.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetNumEditableDeformKeys` | `public static int GetNumEditableDeformKeys(int race, bool initialGender, int age)` | method |
| `GetParamsFromKey` | `public static void GetParamsFromKey(ref FaceGenerationParams faceGenerationParams, BodyProperties bodyProperties, bool earsAreHidden, bool mouthHidden)` | method |
| `GetParamsMax` | `public static void GetParamsMax(int race, int curGender, int curAge, ref int hairNum, ref int beardNum, ref int faceTextureNum, ref int mouthTextureNum, ref int faceTattooNum, ref int soundNum, ref int eyebrowNum, ref float scale)` | method |
| `GetZeroProbabilities` | `public static void GetZeroProbabilities(int race, int curGender, float curAge, ref float tattooZeroProbability)` | method |
| `ProduceNumericKeyWithParams` | `public static void ProduceNumericKeyWithParams(FaceGenerationParams faceGenerationParams, bool earsAreHidden, bool mouthIsHidden, ref BodyProperties bodyProperties)` | method |
| `TransformFaceKeysToDefaultFace` | `public static void TransformFaceKeysToDefaultFace(ref FaceGenerationParams faceGenerationParams)` | method |
| `ProduceNumericKeyWithDefaultValues` | `public static void ProduceNumericKeyWithDefaultValues(ref BodyProperties initialBodyProperties, bool earsAreHidden, bool mouthIsHidden, int race, int gender, int age)` | method |
| `GetRandomBodyProperties` | `public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tatooTags, float variationAmount)` | method |
| `GetDeformKeyData` | `public static DeformKeyData GetDeformKeyData(int keyNo, int race, int gender, int age)` | method |
| `GetFaceGenInstancesLength` | `public static int GetFaceGenInstancesLength(int race, int gender, int age)` | method |
| `EnforceConstraints` | `public static bool EnforceConstraints(ref FaceGenerationParams faceGenerationParams)` | method |
| `GetScaleFromKey` | `public static float GetScaleFromKey(int race, int gender, BodyProperties bodyProperties)` | method |
| `GetHairColorCount` | `public static int GetHairColorCount(int race, int curGender, int age)` | method |
| `List` | `public static List<uint>GetHairColorGradientPoints(int race, int curGender, int age)` | method |
| `GetTatooColorCount` | `public static int GetTatooColorCount(int race, int curGender, int age)` | method |
| `List` | `public static List<uint>GetTatooColorGradientPoints(int race, int curGender, int age)` | method |
| `GetSkinColorCount` | `public static int GetSkinColorCount(int race, int curGender, int age)` | method |
| `GetMaturityType` | `public static BodyMeshMaturityType GetMaturityType(float age)` | method |
| `FlushFaceCache` | `public static void FlushFaceCache()` | method |
| `string[]GetRaceIds` | `public static string[]GetRaceIds()` | method |
| `int[]GetHairIndicesByTag` | `public static int[]GetHairIndicesByTag(int race, int curGender, float age, string tag)` | method |
| `int[]GetFacialIndicesByTag` | `public static int[]GetFacialIndicesByTag(int race, int curGender, float age, string tag)` | method |
| `int[]GetTattooIndicesByTag` | `public static int[]GetTattooIndicesByTag(int race, int curGender, float age, string tag)` | method |
| `List` | `public static List<uint>GetSkinColorGradientPoints(int race, int curGender, int age)` | method |
| `List` | `public static List<bool>GetVoiceTypeUsableForPlayerData(int race, int curGender, float age, int voiceTypeCount)` | method |
| `SetHair` | `public static void SetHair(ref BodyProperties bodyProperties, int hair, int beard, int tattoo)` | method |
| `SetBody` | `public static void SetBody(ref BodyProperties bodyProperties, int build, int weight)` | method |
| `SetPigmentation` | `public static void SetPigmentation(ref BodyProperties bodyProperties, int skinColor, int hairColor, int eyeColor)` | method |
| `GenerateParentKey` | `public static void GenerateParentKey(BodyProperties childBodyProperties, int race, ref BodyProperties motherBodyProperties, ref BodyProperties fatherBodyProperties)` | method |
| `GetBodyPropertiesWithAge` | `public static BodyProperties GetBodyPropertiesWithAge(ref BodyProperties bodyProperties, float age)` | method |
| `GenerationType` | `public enum GenerationType` | property |
| `GenerationType` | `public enum GenerationType` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
