---
title: "CaravansCampaignBehavior"
description: "CaravansCampaignBehavior：TaleWorlds.CampaignSystem 的 public 类，继承 CampaignBehaviorBase；公开成员 13 个（方法 9、属性 2、字段 0）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/CaravansCampaignBehavior.cs。"
---
# CaravansCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CaravansCampaignBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CaravansCampaignBehavior.cs`

## 概述

CaravansCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/CaravansCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 CaravansCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 13 个：9 方法、2 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CaravansCampaignBehavior 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 CaravansCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 9/13，属性 2/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/CaravansCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TradeAgreementsCampaignBehavior` | `public ITradeAgreementsCampaignBehavior TradeAgreementsCampaignBehavior` | 属性 |
| `CaravansCampaignBehavior` | `public CaravansCampaignBehavior()` | 构造函数 |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `OnSessionLaunched` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | 方法 |
| `SpawnCaravan` | `public void SpawnCaravan(Hero hero, bool initialSpawn = false)` | 方法 |
| `DailyTick` | `public void DailyTick()` | 方法 |
| `HourlyTickParty` | `public void HourlyTickParty(MobileParty mobileParty)` | 方法 |
| `OnSettlementEntered` | `public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)` | 方法 |
| `OnSettlementLeft` | `public void OnSettlementLeft(MobileParty mobileParty, Settlement settlement)` | 方法 |
| `AddDialogs` | `protected void AddDialogs(CampaignGameStarter starter)` | 方法 |
| `SaveableTypeDefiner` | `public class CaravansCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | 属性 |
| `SaveableTypeDefiner` | `public class CaravansCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
