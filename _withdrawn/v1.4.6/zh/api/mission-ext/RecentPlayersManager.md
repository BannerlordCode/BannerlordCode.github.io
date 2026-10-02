---
title: "RecentPlayersManager"
description: "RecentPlayersManager：TaleWorlds.MountAndBlade.Diamond 的 public 类；公开成员 10 个（方法 7、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/RecentPlayersManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RecentPlayersManager

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public static class RecentPlayersManager`
**File:** `TaleWorlds.MountAndBlade.Diamond/RecentPlayersManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

RecentPlayersManager 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/RecentPlayersManager.cs。它是一个 public 类，继承链为 RecentPlayersManager。public/protected 成员共 10 个：7 方法、1 属性、1 事件、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RecentPlayersManager 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 RecentPlayersManager。成员构成以方法为主（方法 7/10，属性 1/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/RecentPlayersManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public static MBReadOnlyList<RecentPlayerInfo>RecentPlayers` | 属性 |
| `Initialize` | `public static async void Initialize()` | 方法 |
| `Task` | `public static async Task<MBReadOnlyList<RecentPlayerInfo>>GetRecentPlayerInfos()` | 方法 |
| `PlayerId[]GetRecentPlayerIds` | `public static PlayerId[]GetRecentPlayerIds()` | 方法 |
| `AddOrUpdatePlayerEntry` | `public static void AddOrUpdatePlayerEntry(PlayerId playerId, string playerName, InteractionType interactionType, int forcedIndex)` | 方法 |
| `InteractionType>OnRecentPlayerInteraction;` | `public static event Action<PlayerId, InteractionType>OnRecentPlayerInteraction;` | 事件 |
| `TrimPlayers` | `public static void TrimPlayers()` | 方法 |
| `Serialize` | `public static void Serialize()` | 方法 |
| `IEnumerable` | `public static IEnumerable<PlayerId>GetPlayersOrdered()` | 方法 |
| `InteractionProcessType` | `public enum InteractionProcessType` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
