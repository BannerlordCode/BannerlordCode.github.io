---
title: "CommonTownsfolkCampaignBehavior"
description: "CommonTownsfolkCampaignBehavior: a public class in SandBox.CampaignBehaviors, inheriting CampaignBehaviorBase; 16 exposed members (8 methods, 0 properties, 8 fields). Canonical bucket sandbox. Source: SandBox/CampaignBehaviors/CommonTownsfolkCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CommonTownsfolkCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class CommonTownsfolkCampaignBehavior : CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/CommonTownsfolkCampaignBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CommonTownsfolkCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/CommonTownsfolkCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is CommonTownsfolkCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 16 public/protected members: 8 methods, 8 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CommonTownsfolkCampaignBehavior lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.CampaignBehaviors`, inheritance chain CommonTownsfolkCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 8/16, properties 0/16), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/CommonTownsfolkCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `GetActionSetSuffixAndMonsterForItem` | `public static string GetActionSetSuffixAndMonsterForItem(string itemId, int race, bool isFemale, out Monster monster)` | method |
| `Monster>GetRandomTownsManActionSetAndMonster` | `public static Tuple<string, Monster>GetRandomTownsManActionSetAndMonster(int race)` | method |
| `Monster>GetRandomTownsWomanActionSetAndMonster` | `public static Tuple<string, Monster>GetRandomTownsWomanActionSetAndMonster(int race)` | method |
| `CreateBroomsWoman` | `public static LocationCharacter CreateBroomsWoman(CultureObject culture, LocationCharacter.CharacterRelations relation)` | method |
| `CreateMaleBeggar` | `public static LocationCharacter CreateMaleBeggar(CultureObject culture, LocationCharacter.CharacterRelations relation)` | method |
| `CreateFemaleBeggar` | `public static LocationCharacter CreateFemaleBeggar(CultureObject culture, LocationCharacter.CharacterRelations relation)` | method |
| `TownsmanSpawnPercentageMale` | `public const float TownsmanSpawnPercentageMale` | field |
| `TownsmanSpawnPercentageFemale` | `public const float TownsmanSpawnPercentageFemale` | field |
| `TownsmanSpawnPercentageLimitedMale` | `public const float TownsmanSpawnPercentageLimitedMale` | field |
| `TownsmanSpawnPercentageLimitedFemale` | `public const float TownsmanSpawnPercentageLimitedFemale` | field |
| `TownOtherPeopleSpawnPercentage` | `public const float TownOtherPeopleSpawnPercentage` | field |
| `TownsmanSpawnPercentageTavernMale` | `public const float TownsmanSpawnPercentageTavernMale` | field |
| `TownsmanSpawnPercentageTavernFemale` | `public const float TownsmanSpawnPercentageTavernFemale` | field |
| `BeggarSpawnPercentage` | `public const float BeggarSpawnPercentage` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AlleyCampaignBehavior](../AlleyCampaignBehavior/)
- [same namespace ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior/)
- [same namespace BarberCampaignBehavior](../BarberCampaignBehavior/)
- [same namespace BoardGameCampaignBehavior](../BoardGameCampaignBehavior/)
