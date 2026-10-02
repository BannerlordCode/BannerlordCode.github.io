---
title: "WaitForGameState"
description: "WaitForGameState：TaleWorlds.Core 的 public 类，继承 CoroutineState；公开成员 2 个（方法 0、属性 1、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/WaitForGameState.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WaitForGameState

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class WaitForGameState : CoroutineState`
**File:** `TaleWorlds.Core/WaitForGameState.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

WaitForGameState 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/WaitForGameState.cs。它是一个 public 类，实现/继承 CoroutineState，继承链为 WaitForGameState → CoroutineState。public/protected 成员共 2 个：1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WaitForGameState 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 WaitForGameState → CoroutineState。成员构成以属性为主（属性 1/2，方法 0/2），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/WaitForGameState.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WaitForGameState` | `public WaitForGameState(Type stateType)` | 构造函数 |
| `IsFinished` | `protected override bool IsFinished` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 CoroutineState](../../network/CoroutineState/)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
