---
title: "LobbyGameStatePlayerBasedCustomServer"
description: "LobbyGameStatePlayerBasedCustomServer：TaleWorlds.MountAndBlade 的 public 类，继承 LobbyGameState；公开成员 3 个（方法 3、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyGameStatePlayerBasedCustomServer.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LobbyGameStatePlayerBasedCustomServer

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public sealed class LobbyGameStatePlayerBasedCustomServer : LobbyGameState`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyGameStatePlayerBasedCustomServer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

LobbyGameStatePlayerBasedCustomServer 位于 TaleWorlds.MountAndBlade.Multiplayer 模块，源文件 TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyGameStatePlayerBasedCustomServer.cs。它是一个 public 类（sealed），实现/继承 LobbyGameState，继承链为 LobbyGameStatePlayerBasedCustomServer → LobbyGameState → GameState → MBObjectBase。public/protected 成员共 3 个：3 方法。 反编译器把该类型拆到了 2 个源文件，签名已合并。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LobbyGameStatePlayerBasedCustomServer 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 LobbyGameStatePlayerBasedCustomServer → LobbyGameState → GameState → MBObjectBase。成员构成以方法为主（方法 3/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyGameStatePlayerBasedCustomServer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetStartingParameters` | `public void SetStartingParameters(LobbyGameClientHandler lobbyGameClientHandler)` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `StartMultiplayer` | `protected override void StartMultiplayer()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 LobbyGameState](../LobbyGameState/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
