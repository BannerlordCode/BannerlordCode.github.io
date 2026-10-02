---
title: "FaceGen"
description: "FaceGen: a public class in TaleWorlds.MountAndBlade, inheriting IFaceGen; 17 exposed members (17 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/FaceGen.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FaceGen

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FaceGen : IFaceGen`
**File:** `TaleWorlds.MountAndBlade/FaceGen.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

FaceGen lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/FaceGen.cs. It is a public class, implementing/inheriting IFaceGen; the inheritance chain is FaceGen → IFaceGen. It exposes 17 public/protected members: 17 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FaceGen lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain FaceGen → IFaceGen. The surface is method-led (methods 17/17, properties 0/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/FaceGen.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateInstance` | `public static void CreateInstance()` | method |
| `GetMonster` | `public Monster GetMonster(string monsterID)` | method |
| `GetMonsterWithSuffix` | `public Monster GetMonsterWithSuffix(int race, string suffix)` | method |
| `GetBaseMonsterFromRace` | `public Monster GetBaseMonsterFromRace(int race)` | method |
| `GetRandomBodyProperties` | `public BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tattooTags, float variationAmount)` | method |
| `GetBodyPropertiesWithAge` | `public BodyProperties GetBodyPropertiesWithAge(ref BodyProperties bodyProperties, float age)` | method |
| `GetParamsFromBody` | `public void GetParamsFromBody(ref FaceGenerationParams faceGenerationParams, BodyProperties bodyProperties, bool earsAreHidden, bool mouthIsHidden)` | method |
| `GetMaturityTypeWithAge` | `public BodyMeshMaturityType GetMaturityTypeWithAge(float age)` | method |
| `FlushFaceCache` | `public static void FlushFaceCache()` | method |
| `GetRaceCount` | `public int GetRaceCount()` | method |
| `GetRaceOrDefault` | `public int GetRaceOrDefault(string raceId)` | method |
| `GetBaseMonsterNameFromRace` | `public string GetBaseMonsterNameFromRace(int race)` | method |
| `string[]GetRaceNames` | `public string[]GetRaceNames()` | method |
| `int[]GetHairIndicesByTag` | `public int[]GetHairIndicesByTag(int race, int curGender, float age, string tag)` | method |
| `int[]GetFacialIndicesByTag` | `public int[]GetFacialIndicesByTag(int race, int curGender, float age, string tag)` | method |
| `int[]GetTattooIndicesByTag` | `public int[]GetTattooIndicesByTag(int race, int curGender, float age, string tag)` | method |
| `GetTattooZeroProbability` | `public float GetTattooZeroProbability(int race, int curGender, float age)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IFaceGen](../../core-extra/IFaceGen/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
