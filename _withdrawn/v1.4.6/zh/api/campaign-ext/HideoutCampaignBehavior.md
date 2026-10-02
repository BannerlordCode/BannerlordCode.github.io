---
title: "HideoutCampaignBehavior"
description: "HideoutCampaignBehavior：TaleWorlds.CampaignSystem.CampaignBehaviors 的 public 类，继承 CampaignBehaviorBase、IHideoutCampaignBehavior；公开成员 10 个（方法 10、属性 0、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/HideoutCampaignBehavior.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HideoutCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class HideoutCampaignBehavior : CampaignBehaviorBase, IHideoutCampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/HideoutCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## 概述

HideoutCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/HideoutCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase、IHideoutCampaignBehavior，继承链为 HideoutCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 10 个：10 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HideoutCampaignBehavior 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`），命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors`，继承链 HideoutCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 10/10，属性 0/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/HideoutCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `OnNewGameCreated` | `public void OnNewGameCreated(CampaignGameStarter campaignGameStarter)` | 方法 |
| `OnGameLoaded` | `public void OnGameLoaded(CampaignGameStarter campaignGameStarter)` | 方法 |
| `HourlyTickSettlement` | `public void HourlyTickSettlement(Settlement settlement)` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `AddGameMenus` | `protected void AddGameMenus(CampaignGameStarter campaignGameStarter)` | 方法 |
| `GetInitialHideoutPopulation` | `public int GetInitialHideoutPopulation()` | 方法 |
| `hideout_wait_menu_on_condition` | `public bool hideout_wait_menu_on_condition(MenuCallbackArgs args)` | 方法 |
| `hideout_wait_menu_on_tick` | `public void hideout_wait_menu_on_tick(MenuCallbackArgs args, CampaignTime campaignTime)` | 方法 |
| `hideout_wait_menu_on_consequence` | `public void hideout_wait_menu_on_consequence(MenuCallbackArgs args)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 CampaignBehaviorBase](../../campaign/CampaignBehaviorBase/)
- [基类/接口 IHideoutCampaignBehavior](../IHideoutCampaignBehavior/)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior/)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)
