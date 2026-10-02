---
title: "IBattleServerSessionHandler"
description: "IBattleServerSessionHandler：TaleWorlds.MountAndBlade.Diamond 的 public 接口；公开成员 8 个（方法 8、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/IBattleServerSessionHandler.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IBattleServerSessionHandler

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public interface IBattleServerSessionHandler`
**File:** `TaleWorlds.MountAndBlade.Diamond/IBattleServerSessionHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

IBattleServerSessionHandler 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/IBattleServerSessionHandler.cs。它是一个 public 接口，继承链为 IBattleServerSessionHandler。public/protected 成员共 8 个：8 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IBattleServerSessionHandler 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 IBattleServerSessionHandler。成员构成以方法为主（方法 8/8，属性 0/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/IBattleServerSessionHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnConnected` | `void OnConnected();` | 方法 |
| `OnCantConnect` | `void OnCantConnect();` | 方法 |
| `OnDisconnected` | `void OnDisconnected();` | 方法 |
| `OnNewPlayer` | `void OnNewPlayer(BattlePeer peer);` | 方法 |
| `OnStartGame` | `void OnStartGame(string sceneName, string gameType, string faction1, string faction2, int minRequiredPlayerCountToStartBattle, int battleSize, string[]profanityList, string[]allowList);` | 方法 |
| `OnPlayerFledBattle` | `void OnPlayerFledBattle(BattlePeer peer, out BattleResult battleResult, bool isQuitFromBattle);` | 方法 |
| `OnEndMission` | `void OnEndMission();` | 方法 |
| `OnStopServer` | `void OnStopServer();` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
