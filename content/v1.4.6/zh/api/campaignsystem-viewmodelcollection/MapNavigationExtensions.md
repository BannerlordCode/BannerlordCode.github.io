---
title: "MapNavigationExtensions"
description: "MapNavigationExtensions：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类；公开成员 24 个（方法 24、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/MapNavigationExtensions.cs。"
---
# MapNavigationExtensions

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public static class MapNavigationExtensions`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/MapNavigationExtensions.cs`

## 概述

MapNavigationExtensions 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/MapNavigationExtensions.cs。它是一个 public 类，继承链为 MapNavigationExtensions。public/protected 成员共 24 个：24 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapNavigationExtensions 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem），继承链 MapNavigationExtensions。成员构成以方法为主（方法 24/24，属性 0/24），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/MapNavigationExtensions.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetPermission` | `public static NavigationPermissionItem GetPermission(this INavigationHandler handler, MapNavigationItemType elementType)` | 方法 |
| `IsActive` | `public static bool IsActive(this INavigationHandler handler, MapNavigationItemType elementType)` | 方法 |
| `OpenQuests` | `public static void OpenQuests(this INavigationHandler handler)` | 方法 |
| `OpenQuests` | `public static void OpenQuests(this INavigationHandler handler, QuestBase quest)` | 方法 |
| `OpenQuests` | `public static void OpenQuests(this INavigationHandler handler, IssueBase issue)` | 方法 |
| `OpenQuests` | `public static void OpenQuests(this INavigationHandler handler, JournalLogEntry log)` | 方法 |
| `OpenInventory` | `public static void OpenInventory(this INavigationHandler handler)` | 方法 |
| `OpenParty` | `public static void OpenParty(this INavigationHandler handler)` | 方法 |
| `OpenCharacterDeveloper` | `public static void OpenCharacterDeveloper(this INavigationHandler handler)` | 方法 |
| `OpenCharacterDeveloper` | `public static void OpenCharacterDeveloper(this INavigationHandler handler, Hero hero)` | 方法 |
| `OpenKingdom` | `public static void OpenKingdom(this INavigationHandler handler)` | 方法 |
| `OpenKingdom` | `public static void OpenKingdom(this INavigationHandler handler, Army army)` | 方法 |
| `OpenKingdom` | `public static void OpenKingdom(this INavigationHandler handler, Settlement settlement)` | 方法 |
| `OpenKingdom` | `public static void OpenKingdom(this INavigationHandler handler, Clan clan)` | 方法 |
| `OpenKingdom` | `public static void OpenKingdom(this INavigationHandler handler, PolicyObject policy)` | 方法 |
| `OpenKingdom` | `public static void OpenKingdom(this INavigationHandler handler, IFaction faction)` | 方法 |
| `OpenKingdom` | `public static void OpenKingdom(this INavigationHandler handler, KingdomDecision decision)` | 方法 |
| `OpenClan` | `public static void OpenClan(this INavigationHandler handler)` | 方法 |
| `OpenClan` | `public static void OpenClan(this INavigationHandler handler, Hero hero)` | 方法 |
| `OpenClan` | `public static void OpenClan(this INavigationHandler handler, PartyBase party)` | 方法 |
| `OpenClan` | `public static void OpenClan(this INavigationHandler handler, Settlement settlement)` | 方法 |
| `OpenClan` | `public static void OpenClan(this INavigationHandler handler, Workshop workshop)` | 方法 |
| `OpenClan` | `public static void OpenClan(this INavigationHandler handler, Alley alley)` | 方法 |
| `OpenEscapeMenu` | `public static void OpenEscapeMenu(this INavigationHandler handler)` | 方法 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MapNavigationItemType](../MapNavigationItemType)
