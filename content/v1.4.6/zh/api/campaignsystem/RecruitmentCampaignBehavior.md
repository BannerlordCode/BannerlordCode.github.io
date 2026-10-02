---
title: "RecruitmentCampaignBehavior"
description: "RecruitmentCampaignBehavior：TaleWorlds.CampaignSystem 的 public 类，继承 CampaignBehaviorBase；公开成员 13 个（方法 7、属性 3、字段 0）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/RecruitmentCampaignBehavior.cs。"
---
# RecruitmentCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class RecruitmentCampaignBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/RecruitmentCampaignBehavior.cs`

## 概述

RecruitmentCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/RecruitmentCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 RecruitmentCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 13 个：7 方法、3 属性、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RecruitmentCampaignBehavior 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 RecruitmentCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 7/13，属性 3/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/RecruitmentCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `GetMercenaryData` | `public RecruitmentCampaignBehavior.TownMercenaryData GetMercenaryData(Town town)` | 方法 |
| `HourlyTickParty` | `public void HourlyTickParty(MobileParty mobileParty)` | 方法 |
| `OnBeforeSettlementEntered` | `public void OnBeforeSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)` | 方法 |
| `AddGameMenus` | `protected void AddGameMenus(CampaignGameStarter campaignGameSystemStarter)` | 方法 |
| `AddDialogs` | `protected void AddDialogs(CampaignGameStarter campaignGameStarter)` | 方法 |
| `SaveableTypeDefiner` | `public class RecruitmentCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | 属性 |
| `TownMercenaryData` | `public class TownMercenaryData` | 属性 |
| `RecruitingDetail` | `public enum RecruitingDetail` | 属性 |
| `SaveableTypeDefiner` | `public class RecruitmentCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | 嵌套类型 |
| `TownMercenaryData` | `public class TownMercenaryData` | 嵌套类型 |
| `RecruitingDetail` | `public enum RecruitingDetail` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
