---
title: "MBBodyProperties"
description: "Auto-generated class reference for MBBodyProperties."
---
# MBBodyProperties

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBBodyProperties `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MBBodyProperties.cs

## Overview

Auto-generated stub for `MBBodyProperties`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetNumEditableDeformKeys
`public static int GetNumEditableDeformKeys(int race,bool initialGender,int age)`

### GetParamsFromKey
`public static void GetParamsFromKey(ref FaceGenerationParams faceGenerationParams,BodyProperties bodyProperties,bool earsAreHidden,bool mouthHidden)`

### GetParamsMax
`public static void GetParamsMax(int race,int curGender,int curAge,ref int hairNum,ref int beardNum,ref int faceTextureNum,ref int mouthTextureNum,ref int faceTattooNum,ref int soundNum,ref int eyebrowNum,ref float scale)`

### GetZeroProbabilities
`public static void GetZeroProbabilities(int race,int curGender,float curAge,ref float tattooZeroProbability)`

### ProduceNumericKeyWithParams
`public static void ProduceNumericKeyWithParams(FaceGenerationParams faceGenerationParams,bool earsAreHidden,bool mouthIsHidden,ref BodyProperties bodyProperties)`

### TransformFaceKeysToDefaultFace
`public static void TransformFaceKeysToDefaultFace(ref FaceGenerationParams faceGenerationParams)`

### ProduceNumericKeyWithDefaultValues
`public static void ProduceNumericKeyWithDefaultValues(ref BodyProperties initialBodyProperties,bool earsAreHidden,bool mouthIsHidden,int race,int gender,int age)`

### GetRandomBodyProperties
`public static BodyProperties GetRandomBodyProperties(int race,bool isFemale,BodyProperties bodyPropertiesMin,BodyProperties bodyPropertiesMax,int hairCoverType,int seed,string hairTags,string beardTags,string tatooTags,float variationAmount)`

### GetDeformKeyData
`public static DeformKeyData GetDeformKeyData(int keyNo,int race,int gender,int age)`

### GetFaceGenInstancesLength
`public static int GetFaceGenInstancesLength(int race,int gender,int age)`

### EnforceConstraints
`public static bool EnforceConstraints(ref FaceGenerationParams faceGenerationParams)`

### GetScaleFromKey
`public static float GetScaleFromKey(int race,int gender,BodyProperties bodyProperties)`

### GetHairColorCount
`public static int GetHairColorCount(int race,int curGender,int age)`

### GetHairColorGradientPoints
`public static List<uint> GetHairColorGradientPoints(int race,int curGender,int age)`

### GetTatooColorCount
`public static int GetTatooColorCount(int race,int curGender,int age)`

### GetTatooColorGradientPoints
`public static List<uint> GetTatooColorGradientPoints(int race,int curGender,int age)`

### GetSkinColorCount
`public static int GetSkinColorCount(int race,int curGender,int age)`

### GetMaturityType
`public static BodyMeshMaturityType GetMaturityType(float age)`

### FlushFaceCache
`public static void FlushFaceCache()`

### GetRaceIds
`public static string[] GetRaceIds()`

### GetHairIndicesByTag
`public static int[] GetHairIndicesByTag(int race,int curGender,float age,string tag)`

### GetFacialIndicesByTag
`public static int[] GetFacialIndicesByTag(int race,int curGender,float age,string tag)`

### GetTattooIndicesByTag
`public static int[] GetTattooIndicesByTag(int race,int curGender,float age,string tag)`

### GetSkinColorGradientPoints
`public static List<uint> GetSkinColorGradientPoints(int race,int curGender,int age)`

### GetVoiceTypeUsableForPlayerData
`public static List<bool> GetVoiceTypeUsableForPlayerData(int race,int curGender,float age,int voiceTypeCount)`

### SetHair
`public static void SetHair(ref BodyProperties bodyProperties,int hair,int beard,int tattoo)`

### SetBody
`public static void SetBody(ref BodyProperties bodyProperties,int build,int weight)`

### SetPigmentation
`public static void SetPigmentation(ref BodyProperties bodyProperties,int skinColor,int hairColor,int eyeColor)`

### GenerateParentKey
`public static void GenerateParentKey(BodyProperties childBodyProperties,int race,ref BodyProperties motherBodyProperties,ref BodyProperties fatherBodyProperties)`

### GetBodyPropertiesWithAge
`public static BodyProperties GetBodyPropertiesWithAge(ref BodyProperties bodyProperties,float age)`

## See Also

- [Section index](../)
