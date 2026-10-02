---
title: "GameManagerComponent"
description: "GameManagerComponent：TaleWorlds.Core 的 public 类，继承 IEntityComponent；公开成员 9 个（方法 8、属性 1、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/GameManagerComponent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameManagerComponent

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class GameManagerComponent : IEntityComponent`
**File:** `TaleWorlds.Core/GameManagerComponent.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

GameManagerComponent 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/GameManagerComponent.cs。它是一个 public 类（abstract），实现/继承 IEntityComponent，继承链为 GameManagerComponent → IEntityComponent。public/protected 成员共 9 个：8 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameManagerComponent 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 GameManagerComponent → IEntityComponent。成员构成以方法为主（方法 8/9，属性 1/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/GameManagerComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameManager` | `public GameManagerBase GameManager` | 属性 |
| `OnInitialize` | `protected virtual void OnInitialize()` | 方法 |
| `OnFinalize` | `protected virtual void OnFinalize()` | 方法 |
| `OnTick` | `protected internal virtual void OnTick()` | 方法 |
| `OnPlayerDisconnect` | `protected internal virtual void OnPlayerDisconnect(VirtualPlayer peer)` | 方法 |
| `OnEarlyPlayerConnect` | `protected internal virtual void OnEarlyPlayerConnect(VirtualPlayer peer)` | 方法 |
| `OnPlayerConnect` | `protected internal virtual void OnPlayerConnect(VirtualPlayer peer)` | 方法 |
| `OnGameNetworkBegin` | `protected internal virtual void OnGameNetworkBegin()` | 方法 |
| `OnGameNetworkEnd` | `protected internal virtual void OnGameNetworkEnd()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IEntityComponent](../IEntityComponent/)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
