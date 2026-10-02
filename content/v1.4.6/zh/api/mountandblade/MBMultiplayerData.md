---
title: "MBMultiplayerData"
description: "MBMultiplayerData：TaleWorlds.MountAndBlade 的 public 类；公开成员 12 个（方法 9、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade/MBMultiplayerData.cs。"
---
# MBMultiplayerData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MBMultiplayerData`
**File:** `TaleWorlds.MountAndBlade/MBMultiplayerData.cs`

## 概述

MBMultiplayerData 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MBMultiplayerData.cs。它是一个 public 类，继承链为 MBMultiplayerData。public/protected 成员共 12 个：9 方法、1 属性、1 事件、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBMultiplayerData 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MBMultiplayerData。成员构成以方法为主（方法 9/12，属性 1/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MBMultiplayerData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ServerId` | `public static Guid ServerId` | 属性 |
| `GetServerId` | `public static string GetServerId()` | 方法 |
| `GetServerName` | `public static string GetServerName()` | 方法 |
| `GetGameModule` | `public static string GetGameModule()` | 方法 |
| `GetGameType` | `public static string GetGameType()` | 方法 |
| `GetMap` | `public static string GetMap()` | 方法 |
| `GetCurrentPlayerCount` | `public static int GetCurrentPlayerCount()` | 方法 |
| `GetPlayerCountLimit` | `public static int GetPlayerCountLimit()` | 方法 |
| `GameServerInfoReceived;` | `public static event MBMultiplayerData.GameServerInfoReceivedDelegate GameServerInfoReceived;` | 事件 |
| `UpdateGameServerInfo` | `public static void UpdateGameServerInfo(string id, string gameServer, string gameModule, string gameType, string map, int currentPlayerCount, int maxPlayerCount, string address, int port)` | 方法 |
| `GameServerInfoReceivedDelegate` | `public delegate void GameServerInfoReceivedDelegate(CustomBattleId id, string gameServer, string gameModule, string gameType, string map, int currentPlayerCount, int maxPlayerCount, string address, int port);` | 方法 |
| `GameServerInfoReceivedDelegate` | `public delegate void GameServerInfoReceivedDelegate(CustomBattleId id, string gameServer, string gameModule, string gameType, string map, int currentPlayerCount, int maxPlayerCount, string address, int port)` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
