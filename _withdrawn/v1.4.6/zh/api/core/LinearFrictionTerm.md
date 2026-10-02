---
title: "LinearFrictionTerm"
description: "LinearFrictionTerm：TaleWorlds.Core 的 public 结构体；公开成员 8 个（方法 4、属性 3、字段 0）。源文件 TaleWorlds.Core/LinearFrictionTerm.cs。"
---
# LinearFrictionTerm

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public struct LinearFrictionTerm`
**File:** `TaleWorlds.Core/LinearFrictionTerm.cs`

## 概述

LinearFrictionTerm 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/LinearFrictionTerm.cs。它是一个 public 结构体，继承链为 LinearFrictionTerm。public/protected 成员共 8 个：4 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LinearFrictionTerm 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 LinearFrictionTerm。成员构成以方法为主（方法 4/8，属性 3/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/LinearFrictionTerm.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Invalid` | `public static LinearFrictionTerm Invalid` | 属性 |
| `One` | `public static LinearFrictionTerm One` | 属性 |
| `IsValid` | `public bool IsValid` | 属性 |
| `LinearFrictionTerm` | `public LinearFrictionTerm(float right, float left, float forward, float backward, float up, float down)` | 构造函数 |
| `/` | `public static LinearFrictionTerm operator /(LinearFrictionTerm o, float f)` | 运算符 |
| `*` | `public static LinearFrictionTerm operator *(LinearFrictionTerm o, float f)` | 运算符 |
| `ElementWiseProduct` | `public LinearFrictionTerm ElementWiseProduct(LinearFrictionTerm o)` | 方法 |
| `NearlyEquals` | `public bool NearlyEquals(in LinearFrictionTerm o, float epsilon = 1E-05f)` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
