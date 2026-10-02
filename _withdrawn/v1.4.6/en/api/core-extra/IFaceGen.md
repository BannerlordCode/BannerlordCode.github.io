---
title: "IFaceGen"
description: "IFaceGen: a public interface in TaleWorlds.Core; 18 exposed members (18 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/IFaceGen.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IFaceGen

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IFaceGen`
**File:** `TaleWorlds.Core/IFaceGen.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

IFaceGen lives in the TaleWorlds.Core module, source file TaleWorlds.Core/IFaceGen.cs. It is a public interface; the inheritance chain is IFaceGen. It exposes 18 public/protected members: 18 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IFaceGen lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain IFaceGen. The surface is method-led (methods 18/18, properties 0/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/IFaceGen.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetRandomBodyProperties` | `BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tatooTags, float variationAmount);` | method |
| `GenerateParentBody` | `void GenerateParentBody(BodyProperties childBodyProperties, int race, ref BodyProperties motherBodyProperties, ref BodyProperties fatherBodyProperties);` | method |
| `SetBody` | `void SetBody(ref BodyProperties bodyProperties, int build, int weight);` | method |
| `SetHair` | `void SetHair(ref BodyProperties bodyProperties, int hair, int beard, int tattoo);` | method |
| `SetPigmentation` | `void SetPigmentation(ref BodyProperties bodyProperties, int skinColor, int hairColor, int eyeColor);` | method |
| `GetBodyPropertiesWithAge` | `BodyProperties GetBodyPropertiesWithAge(ref BodyProperties bodyProperties, float age);` | method |
| `GetMaturityTypeWithAge` | `BodyMeshMaturityType GetMaturityTypeWithAge(float age);` | method |
| `GetRaceCount` | `int GetRaceCount();` | method |
| `GetRaceOrDefault` | `int GetRaceOrDefault(string raceId);` | method |
| `GetBaseMonsterNameFromRace` | `string GetBaseMonsterNameFromRace(int race);` | method |
| `string[]GetRaceNames` | `string[]GetRaceNames();` | method |
| `GetMonster` | `Monster GetMonster(string monsterID);` | method |
| `GetMonsterWithSuffix` | `Monster GetMonsterWithSuffix(int race, string suffix);` | method |
| `GetBaseMonsterFromRace` | `Monster GetBaseMonsterFromRace(int race);` | method |
| `int[]GetHairIndicesByTag` | `int[]GetHairIndicesByTag(int race, int curGender, float age, string tag);` | method |
| `int[]GetFacialIndicesByTag` | `int[]GetFacialIndicesByTag(int race, int curGender, float age, string tag);` | method |
| `int[]GetTattooIndicesByTag` | `int[]GetTattooIndicesByTag(int race, int curGender, float age, string tag);` | method |
| `GetTattooZeroProbability` | `float GetTattooZeroProbability(int race, int curGender, float age);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
