---
title: "GameHandler"
description: "GameHandler：TaleWorlds.Core 的 public 类，继承 IEntityComponent；公开成员 12 个（方法 12、属性 0、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/GameHandler.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameHandler

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class GameHandler : IEntityComponent`
**File:** `TaleWorlds.Core/GameHandler.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

GameHandler 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/GameHandler.cs。它是一个 public 类（abstract），实现/继承 IEntityComponent，继承链为 GameHandler → IEntityComponent。public/protected 成员共 12 个：12 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameHandler 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 GameHandler → IEntityComponent。成员构成以方法为主（方法 12/12，属性 0/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/GameHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInitialize` | `protected virtual void OnInitialize()` | 方法 |
| `OnFinalize` | `protected virtual void OnFinalize()` | 方法 |
| `OnTick` | `protected internal virtual void OnTick(float dt)` | 方法 |
| `OnGameStart` | `protected internal virtual void OnGameStart()` | 方法 |
| `OnGameEnd` | `protected internal virtual void OnGameEnd()` | 方法 |
| `OnGameNetworkBegin` | `protected internal virtual void OnGameNetworkBegin()` | 方法 |
| `OnGameNetworkEnd` | `protected internal virtual void OnGameNetworkEnd()` | 方法 |
| `OnEarlyPlayerConnect` | `protected internal virtual void OnEarlyPlayerConnect(VirtualPlayer peer)` | 方法 |
| `OnPlayerConnect` | `protected internal virtual void OnPlayerConnect(VirtualPlayer peer)` | 方法 |
| `OnPlayerDisconnect` | `protected internal virtual void OnPlayerDisconnect(VirtualPlayer peer)` | 方法 |
| `OnBeforeSave` | `public abstract void OnBeforeSave();` | 方法 |
| `OnAfterSave` | `public abstract void OnAfterSave();` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IEntityComponent](../IEntityComponent/)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
