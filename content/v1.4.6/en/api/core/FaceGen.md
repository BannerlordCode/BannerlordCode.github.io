---
title: "FaceGen"
description: "FaceGen: a public class in TaleWorlds.Core; 23 exposed members (19 methods, 0 properties, 4 fields). Source: TaleWorlds.Core/FaceGen.cs."
---
# FaceGen

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public static class FaceGen`
**File:** `TaleWorlds.Core/FaceGen.cs`

## Overview

FaceGen lives in the TaleWorlds.Core module, source file TaleWorlds.Core/FaceGen.cs. It is a public class; the inheritance chain is FaceGen. It exposes 23 public/protected members: 19 methods, 4 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FaceGen is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain FaceGen. The surface is method-led (methods 19/23, properties 0/23), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/FaceGen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetInstance` | `public static void SetInstance(IFaceGen faceGen)` | method |
| `GetRandomBodyProperties` | `public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tatooTags, float variationAmount)` | method |
| `GetRaceCount` | `public static int GetRaceCount()` | method |
| `GetRaceOrDefault` | `public static int GetRaceOrDefault(string raceId)` | method |
| `GetBaseMonsterNameFromRace` | `public static string GetBaseMonsterNameFromRace(int race)` | method |
| `string[]GetRaceNames` | `public static string[]GetRaceNames()` | method |
| `GetMonster` | `public static Monster GetMonster(string monsterID)` | method |
| `GetMonsterWithSuffix` | `public static Monster GetMonsterWithSuffix(int race, string suffix)` | method |
| `GetBaseMonsterFromRace` | `public static Monster GetBaseMonsterFromRace(int race)` | method |
| `GenerateParentKey` | `public static void GenerateParentKey(BodyProperties childBodyProperties, int race, ref BodyProperties motherBodyProperties, ref BodyProperties fatherBodyProperties)` | method |
| `SetHair` | `public static void SetHair(ref BodyProperties bodyProperties, int hair, int beard, int tattoo)` | method |
| `SetBody` | `public static void SetBody(ref BodyProperties bodyProperties, int build, int weight)` | method |
| `SetPigmentation` | `public static void SetPigmentation(ref BodyProperties bodyProperties, int skinColor, int hairColor, int eyeColor)` | method |
| `GetBodyPropertiesWithAge` | `public static BodyProperties GetBodyPropertiesWithAge(ref BodyProperties originalBodyProperties, float age)` | method |
| `GetMaturityTypeWithAge` | `public static BodyMeshMaturityType GetMaturityTypeWithAge(float age)` | method |
| `int[]GetHairIndicesByTag` | `public static int[]GetHairIndicesByTag(int race, int curGender, float age, string tag)` | method |
| `int[]GetFacialIndicesByTag` | `public static int[]GetFacialIndicesByTag(int race, int curGender, float age, string tag)` | method |
| `int[]GetTattooIndicesByTag` | `public static int[]GetTattooIndicesByTag(int race, int curGender, float age, string tag)` | method |
| `GetTattooZeroProbability` | `public static float GetTattooZeroProbability(int race, int curGender, float age)` | method |
| `MonsterSuffixSettlement` | `public const string MonsterSuffixSettlement` | field |
| `MonsterSuffixSettlementSlow` | `public const string MonsterSuffixSettlementSlow` | field |
| `MonsterSuffixSettlementFast` | `public const string MonsterSuffixSettlementFast` | field |
| `MonsterSuffixChild` | `public const string MonsterSuffixChild` | field |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
