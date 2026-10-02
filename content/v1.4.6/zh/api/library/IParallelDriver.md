---
title: "IParallelDriver"
description: "IParallelDriver：TaleWorlds.Library 的 public 接口；公开成员 6 个（方法 6、属性 0、字段 0）。源文件 TaleWorlds.Library/IParallelDriver.cs。"
---
# IParallelDriver

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public interface IParallelDriver`
**File:** `TaleWorlds.Library/IParallelDriver.cs`

## 概述

IParallelDriver 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/IParallelDriver.cs。它是一个 public 接口，继承链为 IParallelDriver。public/protected 成员共 6 个：6 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IParallelDriver 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 IParallelDriver。成员构成以方法为主（方法 6/6，属性 0/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/IParallelDriver.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `For` | `void For(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize);` | 方法 |
| `ForWithoutRenderThread` | `void ForWithoutRenderThread(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize);` | 方法 |
| `ForWithoutRenderThreadDt` | `void ForWithoutRenderThreadDt(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate body, int grainSize);` | 方法 |
| `For` | `void For(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate body, int grainSize);` | 方法 |
| `GetMainThreadId` | `ulong GetMainThreadId();` | 方法 |
| `GetCurrentThreadId` | `ulong GetCurrentThreadId();` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
