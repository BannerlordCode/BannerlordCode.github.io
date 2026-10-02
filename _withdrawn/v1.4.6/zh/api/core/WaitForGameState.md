---
title: "WaitForGameState"
description: "WaitForGameState：TaleWorlds.Core 的 public 类，继承 CoroutineState；公开成员 2 个（方法 0、属性 1、字段 0）。源文件 TaleWorlds.Core/WaitForGameState.cs。"
---
# WaitForGameState

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class WaitForGameState : CoroutineState`
**File:** `TaleWorlds.Core/WaitForGameState.cs`

## 概述

WaitForGameState 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/WaitForGameState.cs。它是一个 public 类，实现/继承 CoroutineState，继承链为 WaitForGameState → CoroutineState。public/protected 成员共 2 个：1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WaitForGameState 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 WaitForGameState → CoroutineState。成员构成以属性为主（属性 1/2，方法 0/2），对外主要以状态读取接口暴露。继承链上的 CoroutineState 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/WaitForGameState.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WaitForGameState` | `public WaitForGameState(Type stateType)` | 构造函数 |
| `IsFinished` | `protected override bool IsFinished` | 属性 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
