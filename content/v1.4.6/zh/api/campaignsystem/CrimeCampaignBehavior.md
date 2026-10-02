---
title: "CrimeCampaignBehavior"
description: "CrimeCampaignBehavior：TaleWorlds.CampaignSystem 的 public 类，继承 CampaignBehaviorBase；公开成员 19 个（方法 19、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/CrimeCampaignBehavior.cs。"
---
# CrimeCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CrimeCampaignBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CrimeCampaignBehavior.cs`

## 概述

CrimeCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/CrimeCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 CrimeCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 19 个：19 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CrimeCampaignBehavior 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 CrimeCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 19/19，属性 0/19），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/CrimeCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `game_menu_town_criminal_on_init` | `public static void game_menu_town_criminal_on_init(MenuCallbackArgs args)` | 方法 |
| `town_inside_criminal_on_init` | `public static void town_inside_criminal_on_init(MenuCallbackArgs args)` | 方法 |
| `town_discuss_criminal_surrender_on_init` | `public static void town_discuss_criminal_surrender_on_init(MenuCallbackArgs args)` | 方法 |
| `criminal_inside_menu_pay_by_punishment_on_condition` | `public static bool criminal_inside_menu_pay_by_punishment_on_condition(MenuCallbackArgs args)` | 方法 |
| `criminal_inside_menu_pay_by_punishment_on_consequence` | `public static void criminal_inside_menu_pay_by_punishment_on_consequence(MenuCallbackArgs args)` | 方法 |
| `criminal_inside_menu_give_money_on_condition` | `public static bool criminal_inside_menu_give_money_on_condition(MenuCallbackArgs args)` | 方法 |
| `criminal_inside_menu_give_money_on_consequence` | `public static void criminal_inside_menu_give_money_on_consequence(MenuCallbackArgs args)` | 方法 |
| `criminal_inside_menu_give_influence_on_condition` | `public static bool criminal_inside_menu_give_influence_on_condition(MenuCallbackArgs args)` | 方法 |
| `criminal_inside_menu_give_influence_on_consequence` | `public static void criminal_inside_menu_give_influence_on_consequence(MenuCallbackArgs args)` | 方法 |
| `criminal_inside_menu_give_punishment_and_money_on_condition` | `public static bool criminal_inside_menu_give_punishment_and_money_on_condition(MenuCallbackArgs args)` | 方法 |
| `criminal_inside_menu_give_punishment_and_money_on_consequence` | `public static void criminal_inside_menu_give_punishment_and_money_on_consequence(MenuCallbackArgs args)` | 方法 |
| `criminal_inside_menu_give_your_life_on_condition` | `public static bool criminal_inside_menu_give_your_life_on_condition(MenuCallbackArgs args)` | 方法 |
| `criminal_inside_menu_give_your_life_on_consequence` | `public static void criminal_inside_menu_give_your_life_on_consequence(MenuCallbackArgs args)` | 方法 |
| `criminal_inside_menu_ignore_charges_on_condition` | `public static bool criminal_inside_menu_ignore_charges_on_condition(MenuCallbackArgs args)` | 方法 |
| `criminal_inside_menu_ignore_charges_on_consequence` | `public static void criminal_inside_menu_ignore_charges_on_consequence(MenuCallbackArgs args)` | 方法 |
| `town_discuss_criminal_surrender_back_on_consequence` | `public static void town_discuss_criminal_surrender_back_on_consequence(MenuCallbackArgs args)` | 方法 |
| `town_discuss_criminal_surrender_on_condition` | `public static bool town_discuss_criminal_surrender_on_condition(MenuCallbackArgs args)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
