---
title: "FactoredNumber"
description: "FactoredNumber：TaleWorlds.MountAndBlade 的 public 结构体；公开成员 10 个（方法 5、属性 4、字段 0）。源文件 TaleWorlds.MountAndBlade/FactoredNumber.cs。"
---
# FactoredNumber

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct FactoredNumber`
**File:** `TaleWorlds.MountAndBlade/FactoredNumber.cs`

## 概述

FactoredNumber 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/FactoredNumber.cs。它是一个 public 结构体，继承链为 FactoredNumber。public/protected 成员共 10 个：5 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FactoredNumber 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 FactoredNumber。成员构成以方法为主（方法 5/10，属性 4/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/FactoredNumber.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ResultNumber` | `public float ResultNumber` | 属性 |
| `BaseNumber` | `public float BaseNumber` | 属性 |
| `LimitMinValue` | `public float LimitMinValue` | 属性 |
| `LimitMaxValue` | `public float LimitMaxValue` | 属性 |
| `FactoredNumber` | `public FactoredNumber(float baseNumber = 0f)` | 构造函数 |
| `Add` | `public void Add(float value)` | 方法 |
| `AddFactor` | `public void AddFactor(float value)` | 方法 |
| `LimitMin` | `public void LimitMin(float minValue)` | 方法 |
| `LimitMax` | `public void LimitMax(float maxValue)` | 方法 |
| `Clamp` | `public void Clamp(float minValue, float maxValue)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
