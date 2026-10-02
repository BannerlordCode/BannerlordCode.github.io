---
title: "BattleResult"
description: "BattleResult：TaleWorlds.MountAndBlade.Diamond 的 public 类；公开成员 12 个（方法 6、属性 5、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/BattleResult.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleResult

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class BattleResult`
**File:** `TaleWorlds.MountAndBlade.Diamond/BattleResult.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BattleResult 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/BattleResult.cs。它是一个 public 类，继承链为 BattleResult。public/protected 成员共 12 个：6 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BattleResult 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 BattleResult。成员构成以方法为主（方法 6/12，属性 5/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/BattleResult.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BattleResult` | `public BattleResult()` | 构造函数 |
| `AddOrUpdatePlayerEntry` | `public void AddOrUpdatePlayerEntry(PlayerId playerId, int teamNo, string gameMode, Guid party, int overriddenInitialPlayTime = -1)` | 方法 |
| `TryGetPlayerEntry` | `public bool TryGetPlayerEntry(PlayerId playerId, out BattlePlayerEntry battlePlayerEntry)` | 方法 |
| `HandlePlayerDisconnect` | `public void HandlePlayerDisconnect(PlayerId playerId)` | 方法 |
| `DebugPrint` | `public void DebugPrint()` | 方法 |
| `SetBattleFinished` | `public void SetBattleFinished(int winnerTeamNo, bool isPremadeGame, PremadeGameType premadeGameType)` | 方法 |
| `SetBattleCancelled` | `public void SetBattleCancelled()` | 方法 |
| `IsCancelled` | `public bool IsCancelled` | 属性 |
| `WinnerTeamNo` | `public int WinnerTeamNo` | 属性 |
| `IsPremadeGame` | `public bool IsPremadeGame` | 属性 |
| `PremadeGameType` | `public PremadeGameType PremadeGameType` | 属性 |
| `BattlePlayerEntry>PlayerEntries` | `public Dictionary<string, BattlePlayerEntry>PlayerEntries` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
