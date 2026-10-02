---
title: "CommonTownsfolkCampaignBehavior"
description: "CommonTownsfolkCampaignBehavior：SandBox 的 public 类，继承 CampaignBehaviorBase；公开成员 16 个（方法 8、属性 0、字段 8）。源文件 SandBox/CampaignBehaviors/CommonTownsfolkCampaignBehavior.cs。"
---
# CommonTownsfolkCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class CommonTownsfolkCampaignBehavior : CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/CommonTownsfolkCampaignBehavior.cs`

## 概述

CommonTownsfolkCampaignBehavior 位于 SandBox 模块，源文件 SandBox/CampaignBehaviors/CommonTownsfolkCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 CommonTownsfolkCampaignBehavior → CampaignBehaviorBase。public/protected 成员共 16 个：8 方法、8 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CommonTownsfolkCampaignBehavior 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.CampaignBehaviors），继承链 CommonTownsfolkCampaignBehavior → CampaignBehaviorBase。成员构成以方法为主（方法 8/16，属性 0/16），对外主要以操作入口暴露。继承链上的 CampaignBehaviorBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/CampaignBehaviors/CommonTownsfolkCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `GetActionSetSuffixAndMonsterForItem` | `public static string GetActionSetSuffixAndMonsterForItem(string itemId, int race, bool isFemale, out Monster monster)` | 方法 |
| `Monster>GetRandomTownsManActionSetAndMonster` | `public static Tuple<string, Monster>GetRandomTownsManActionSetAndMonster(int race)` | 方法 |
| `Monster>GetRandomTownsWomanActionSetAndMonster` | `public static Tuple<string, Monster>GetRandomTownsWomanActionSetAndMonster(int race)` | 方法 |
| `CreateBroomsWoman` | `public static LocationCharacter CreateBroomsWoman(CultureObject culture, LocationCharacter.CharacterRelations relation)` | 方法 |
| `CreateMaleBeggar` | `public static LocationCharacter CreateMaleBeggar(CultureObject culture, LocationCharacter.CharacterRelations relation)` | 方法 |
| `CreateFemaleBeggar` | `public static LocationCharacter CreateFemaleBeggar(CultureObject culture, LocationCharacter.CharacterRelations relation)` | 方法 |
| `TownsmanSpawnPercentageMale` | `public const float TownsmanSpawnPercentageMale` | 字段 |
| `TownsmanSpawnPercentageFemale` | `public const float TownsmanSpawnPercentageFemale` | 字段 |
| `TownsmanSpawnPercentageLimitedMale` | `public const float TownsmanSpawnPercentageLimitedMale` | 字段 |
| `TownsmanSpawnPercentageLimitedFemale` | `public const float TownsmanSpawnPercentageLimitedFemale` | 字段 |
| `TownOtherPeopleSpawnPercentage` | `public const float TownOtherPeopleSpawnPercentage` | 字段 |
| `TownsmanSpawnPercentageTavernMale` | `public const float TownsmanSpawnPercentageTavernMale` | 字段 |
| `TownsmanSpawnPercentageTavernFemale` | `public const float TownsmanSpawnPercentageTavernFemale` | 字段 |
| `BeggarSpawnPercentage` | `public const float BeggarSpawnPercentage` | 字段 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AlleyCampaignBehavior](../AlleyCampaignBehavior)
- [同命名空间 ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)
- [同命名空间 BarberCampaignBehavior](../BarberCampaignBehavior)
- [同命名空间 BoardGameCampaignBehavior](../BoardGameCampaignBehavior)
