---
title: "GameState"
description: "GameState：TaleWorlds.Core 的 public 类，继承 MBObjectBase；公开成员 17 个（方法 9、属性 7、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/GameState.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameState

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class GameState : MBObjectBase`
**File:** `TaleWorlds.Core/GameState.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

GameState 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/GameState.cs。它是一个 public 类（abstract），实现/继承 MBObjectBase，继承链为 GameState → MBObjectBase。public/protected 成员共 17 个：9 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameState 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 GameState → MBObjectBase。成员构成以方法为主（方法 9/17，属性 7/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/GameState.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Predecessor` | `public GameState Predecessor` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `IReadOnlyCollection` | `public IReadOnlyCollection<IGameStateListener>Listeners` | 属性 |
| `GameStateManager` | `public GameStateManager GameStateManager` | 属性 |
| `IsMusicMenuState` | `public virtual bool IsMusicMenuState` | 属性 |
| `IsMenuState` | `public virtual bool IsMenuState` | 属性 |
| `GameState` | `protected GameState()` | 构造函数 |
| `RegisterListener` | `public bool RegisterListener(IGameStateListener listener)` | 方法 |
| `UnregisterListener` | `public bool UnregisterListener(IGameStateListener listener)` | 方法 |
| `GetListenerOfType` | `public T GetListenerOfType<T>()` | 方法 |
| `OnInitialize` | `protected virtual void OnInitialize()` | 方法 |
| `OnFinalize` | `protected virtual void OnFinalize()` | 方法 |
| `Activated` | `public bool Activated` | 属性 |
| `OnActivate` | `protected virtual void OnActivate()` | 方法 |
| `OnDeactivate` | `protected virtual void OnDeactivate()` | 方法 |
| `OnTick` | `protected internal virtual void OnTick(float dt)` | 方法 |
| `OnIdleTick` | `protected internal virtual void OnIdleTick(float dt)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBObjectBase](../../campaign-ext/MBObjectBase/)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
