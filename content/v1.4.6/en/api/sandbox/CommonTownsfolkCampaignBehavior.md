---
title: "CommonTownsfolkCampaignBehavior"
description: "CommonTownsfolkCampaignBehavior: a public class in SandBox, inheriting CampaignBehaviorBase; 16 exposed members (8 methods, 0 properties, 8 fields). Source: SandBox/CampaignBehaviors/CommonTownsfolkCampaignBehavior.cs."
---
# CommonTownsfolkCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class CommonTownsfolkCampaignBehavior : CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/CommonTownsfolkCampaignBehavior.cs`

## Overview

CommonTownsfolkCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/CommonTownsfolkCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is CommonTownsfolkCampaignBehavior → CampaignBehaviorBase. It exposes 16 public/protected members: 8 methods, 8 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CommonTownsfolkCampaignBehavior is a top-level type in SandBox, namespace differing from (SandBox.CampaignBehaviors) the module directory; inheritance chain CommonTownsfolkCampaignBehavior → CampaignBehaviorBase. The surface is method-led (methods 8/16, properties 0/16), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/CommonTownsfolkCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlleyCampaignBehavior](../AlleyCampaignBehavior)
- [same namespace ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)
- [same namespace BarberCampaignBehavior](../BarberCampaignBehavior)
- [same namespace BoardGameCampaignBehavior](../BoardGameCampaignBehavior)
