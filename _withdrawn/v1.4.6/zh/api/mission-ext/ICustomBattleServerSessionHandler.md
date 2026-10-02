---
title: "ICustomBattleServerSessionHandler"
description: "ICustomBattleServerSessionHandler：TaleWorlds.MountAndBlade.Diamond 的 public 接口；公开成员 10 个（方法 10、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/ICustomBattleServerSessionHandler.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ICustomBattleServerSessionHandler

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public interface ICustomBattleServerSessionHandler`
**File:** `TaleWorlds.MountAndBlade.Diamond/ICustomBattleServerSessionHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ICustomBattleServerSessionHandler 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/ICustomBattleServerSessionHandler.cs。它是一个 public 接口，继承链为 ICustomBattleServerSessionHandler。public/protected 成员共 10 个：10 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ICustomBattleServerSessionHandler 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 ICustomBattleServerSessionHandler。成员构成以方法为主（方法 10/10，属性 0/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/ICustomBattleServerSessionHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnConnected` | `void OnConnected();` | 方法 |
| `OnCantConnect` | `void OnCantConnect();` | 方法 |
| `OnDisconnected` | `void OnDisconnected();` | 方法 |
| `OnStateChanged` | `void OnStateChanged(CustomBattleServer.State state);` | 方法 |
| `OnSuccessfulGameRegister` | `void OnSuccessfulGameRegister();` | 方法 |
| `Task` | `Task<PlayerJoinGameResponseDataFromHost[]>OnClientWantsToConnectCustomGame(PlayerJoinGameData[]playerJoinData);` | 方法 |
| `OnClientQuitFromCustomGame` | `void OnClientQuitFromCustomGame(PlayerId playerId);` | 方法 |
| `OnGameFinished` | `void OnGameFinished();` | 方法 |
| `OnChatFilterListsReceived` | `void OnChatFilterListsReceived(string[]profanityList, string[]allowList);` | 方法 |
| `OnPlayerKickRequested` | `void OnPlayerKickRequested(PlayerId playerID, bool isBanning);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
