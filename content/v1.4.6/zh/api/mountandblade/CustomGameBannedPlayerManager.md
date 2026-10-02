---
title: "CustomGameBannedPlayerManager"
description: "CustomGameBannedPlayerManager：TaleWorlds.MountAndBlade 的 public 类；公开成员 2 个（方法 2、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/CustomGameBannedPlayerManager.cs。"
---
# CustomGameBannedPlayerManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class CustomGameBannedPlayerManager`
**File:** `TaleWorlds.MountAndBlade/CustomGameBannedPlayerManager.cs`

## 概述

CustomGameBannedPlayerManager 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/CustomGameBannedPlayerManager.cs。它是一个 public 类，继承链为 CustomGameBannedPlayerManager。public/protected 成员共 2 个：2 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomGameBannedPlayerManager 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 CustomGameBannedPlayerManager。成员构成以方法为主（方法 2/2，属性 0/2），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/CustomGameBannedPlayerManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddBannedPlayer` | `public static void AddBannedPlayer(PlayerId playerId, int banDueTime)` | 方法 |
| `IsUserBanned` | `public static bool IsUserBanned(PlayerId playerId)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
