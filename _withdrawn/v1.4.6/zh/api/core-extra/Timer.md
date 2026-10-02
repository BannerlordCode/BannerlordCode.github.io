---
title: "Timer"
description: "Timer：TaleWorlds.Core 的 public 类；公开成员 9 个（方法 5、属性 3、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/Timer.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Timer

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class Timer`
**File:** `TaleWorlds.Core/Timer.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

Timer 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/Timer.cs。它是一个 public 类，继承链为 Timer。public/protected 成员共 9 个：5 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Timer 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 Timer。成员构成以方法为主（方法 5/9，属性 3/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/Timer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StartTime` | `public float StartTime` | 属性 |
| `Duration` | `public float Duration` | 属性 |
| `Timer` | `public Timer(float gameTime, float duration, bool autoReset = true)` | 构造函数 |
| `Check` | `public virtual bool Check(float gameTime)` | 方法 |
| `ElapsedTime` | `public float ElapsedTime()` | 方法 |
| `PreviousDeltaTime` | `public float PreviousDeltaTime` | 属性 |
| `Reset` | `public void Reset(float gameTime)` | 方法 |
| `Reset` | `public void Reset(float gameTime, float newDuration)` | 方法 |
| `AdjustStartTime` | `public void AdjustStartTime(float deltaTime)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
