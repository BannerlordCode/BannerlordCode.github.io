---
title: "PermaMuteList"
description: "PermaMuteList：TaleWorlds.MountAndBlade.Diamond 的 public 类；公开成员 8 个（方法 6、属性 2、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/PermaMuteList.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PermaMuteList

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public static class PermaMuteList`
**File:** `TaleWorlds.MountAndBlade.Diamond/PermaMuteList.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

PermaMuteList 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/PermaMuteList.cs。它是一个 public 类，继承链为 PermaMuteList。public/protected 成员共 8 个：6 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PermaMuteList 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 PermaMuteList。成员构成以方法为主（方法 6/8，属性 2/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/PermaMuteList.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HasMutedPlayersLoaded` | `public static bool HasMutedPlayersLoaded` | 属性 |
| `string>>MutedPlayers` | `public static IReadOnlyList<ValueTuple<string, string>>MutedPlayers` | 属性 |
| `SetPermanentMuteAvailableCallback` | `public static void SetPermanentMuteAvailableCallback(Func<bool>getPermanentMuteAvailable)` | 方法 |
| `LoadMutedPlayers` | `public static async Task LoadMutedPlayers(PlayerId currentPlayerId)` | 方法 |
| `SaveMutedPlayers` | `public static async void SaveMutedPlayers()` | 方法 |
| `IsPlayerMuted` | `public static bool IsPlayerMuted(PlayerId player)` | 方法 |
| `MutePlayer` | `public static void MutePlayer(PlayerId player, string name)` | 方法 |
| `RemoveMutedPlayer` | `public static void RemoveMutedPlayer(PlayerId player)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
