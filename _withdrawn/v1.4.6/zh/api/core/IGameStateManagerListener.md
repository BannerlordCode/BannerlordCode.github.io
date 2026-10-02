---
title: "IGameStateManagerListener"
description: "IGameStateManagerListener：TaleWorlds.Core 的 public 接口；公开成员 5 个（方法 5、属性 0、字段 0）。源文件 TaleWorlds.Core/IGameStateManagerListener.cs。"
---
# IGameStateManagerListener

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IGameStateManagerListener`
**File:** `TaleWorlds.Core/IGameStateManagerListener.cs`

## 概述

IGameStateManagerListener 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/IGameStateManagerListener.cs。它是一个 public 接口，继承链为 IGameStateManagerListener。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IGameStateManagerListener 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 IGameStateManagerListener。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/IGameStateManagerListener.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnCreateState` | `void OnCreateState(GameState gameState);` | 方法 |
| `OnPushState` | `void OnPushState(GameState gameState, bool isTopGameState);` | 方法 |
| `OnPopState` | `void OnPopState(GameState gameState);` | 方法 |
| `OnCleanStates` | `void OnCleanStates();` | 方法 |
| `OnSavedGameLoadFinished` | `void OnSavedGameLoadFinished();` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
