---
title: "MBHaltonColorGenerator"
description: "MBHaltonColorGenerator：TaleWorlds.Core 的 public 类；公开成员 9 个（方法 5、属性 2、字段 1）。源文件 TaleWorlds.Core/MBHaltonColorGenerator.cs。"
---
# MBHaltonColorGenerator

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class MBHaltonColorGenerator`
**File:** `TaleWorlds.Core/MBHaltonColorGenerator.cs`

## 概述

MBHaltonColorGenerator 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/MBHaltonColorGenerator.cs。它是一个 public 类，继承链为 MBHaltonColorGenerator。public/protected 成员共 9 个：5 方法、2 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBHaltonColorGenerator 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 MBHaltonColorGenerator。成员构成以方法为主（方法 5/9，属性 2/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/MBHaltonColorGenerator.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Base` | `public int Base` | 属性 |
| `Offset` | `public float Offset` | 属性 |
| `MBHaltonColorGenerator` | `public MBHaltonColorGenerator()` | 构造函数 |
| `SetBase` | `public void SetBase()` | 方法 |
| `SetBase` | `public void SetBase(int baseValue)` | 方法 |
| `SetOffset` | `public void SetOffset(float offset)` | 方法 |
| `SetRandomOffset` | `public void SetRandomOffset()` | 方法 |
| `GetColor` | `public Color GetColor(int index, int maxIndex)` | 方法 |
| `DefaultBase` | `public const int DefaultBase` | 字段 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
