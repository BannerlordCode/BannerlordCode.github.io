---
title: "MultiplayerGlobalMutedPlayersManager"
description: "MultiplayerGlobalMutedPlayersManager：TaleWorlds.MountAndBlade 的 public 类；公开成员 5 个（方法 4、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MultiplayerGlobalMutedPlayersManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerGlobalMutedPlayersManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class MultiplayerGlobalMutedPlayersManager`
**File:** `TaleWorlds.MountAndBlade/MultiplayerGlobalMutedPlayersManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MultiplayerGlobalMutedPlayersManager 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MultiplayerGlobalMutedPlayersManager.cs。它是一个 public 类，继承链为 MultiplayerGlobalMutedPlayersManager。public/protected 成员共 5 个：4 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerGlobalMutedPlayersManager 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MultiplayerGlobalMutedPlayersManager。成员构成以方法为主（方法 4/5，属性 1/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MultiplayerGlobalMutedPlayersManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public static List<PlayerId>MutedPlayers` | 属性 |
| `MutePlayer` | `public static void MutePlayer(PlayerId playerId)` | 方法 |
| `UnmutePlayer` | `public static void UnmutePlayer(PlayerId playerId)` | 方法 |
| `IsUserMuted` | `public static bool IsUserMuted(PlayerId playerId)` | 方法 |
| `ClearMutedPlayers` | `public static void ClearMutedPlayers()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
