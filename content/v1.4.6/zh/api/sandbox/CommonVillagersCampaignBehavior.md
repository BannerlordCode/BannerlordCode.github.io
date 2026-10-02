---
title: "CommonVillagersCampaignBehavior"
description: "CommonVillagersCampaignBehavior：SandBox 的 public 类，继承 CampaignBehaviorBase；公开成员 11 个（方法 7、属性 0、字段 4）。源文件 SandBox/CampaignBehaviors/CommonVillagersCampaignBehavior.cs。"
---
# CommonVillagersCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class CommonVillagersCampaignBehavior : CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/CommonVillagersCampaignBehavior.cs`

## 概述

CommonVillagersCampaignBehavior 位于 SandBox 模块，源文件 SandBox/CampaignBehaviors/CommonVillagersCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 CommonVillagersCampaignBehavior → CampaignBehaviorBase。public/protected 成员共 11 个：7 方法、4 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CommonVillagersCampaignBehavior 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.CampaignBehaviors），继承链 CommonVillagersCampaignBehavior → CampaignBehaviorBase。成员构成以方法为主（方法 7/11，属性 0/11），对外主要以操作入口暴露。继承链上的 CampaignBehaviorBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/CampaignBehaviors/CommonVillagersCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `OnSessionLaunched` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | 方法 |
| `OnSettlementOwnerChanged` | `public void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)` | 方法 |
| `AddDialogs` | `protected void AddDialogs(CampaignGameStarter campaignGameStarter)` | 方法 |
| `conversation_town_or_village_escort_complete_on_condition` | `public bool conversation_town_or_village_escort_complete_on_condition()` | 方法 |
| `conversation_town_or_village_escort_complete_on_consequence` | `public void conversation_town_or_village_escort_complete_on_consequence()` | 方法 |
| `VillagerSpawnPercentageMale` | `public const float VillagerSpawnPercentageMale` | 字段 |
| `VillagerSpawnPercentageFemale` | `public const float VillagerSpawnPercentageFemale` | 字段 |
| `VillagerSpawnPercentageLimited` | `public const float VillagerSpawnPercentageLimited` | 字段 |
| `VillageOtherPeopleSpawnPercentage` | `public const float VillageOtherPeopleSpawnPercentage` | 字段 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AlleyCampaignBehavior](../AlleyCampaignBehavior)
- [同命名空间 ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)
- [同命名空间 BarberCampaignBehavior](../BarberCampaignBehavior)
- [同命名空间 BoardGameCampaignBehavior](../BoardGameCampaignBehavior)
