---
title: "TWParallel"
description: "TWParallel：TaleWorlds.Library 的 public 类；公开成员 13 个（方法 11、属性 0、字段 0）。源文件 TaleWorlds.Library/TWParallel.cs。"
---
# TWParallel

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class TWParallel`
**File:** `TaleWorlds.Library/TWParallel.cs`

## 概述

TWParallel 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/TWParallel.cs。它是一个 public 类，继承链为 TWParallel。public/protected 成员共 13 个：11 方法、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TWParallel 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 TWParallel。成员构成以方法为主（方法 11/13，属性 0/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/TWParallel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InitializeAndSetImplementation` | `public static void InitializeAndSetImplementation(IParallelDriver parallelDriver)` | 方法 |
| `ForEach` | `public static ParallelLoopResult ForEach<TSource>(IEnumerable<TSource>source, Action<TSource>body)` | 方法 |
| `ForEach` | `public static void ForEach<TSource>(IList<TSource>source, Action<TSource>body)` | 方法 |
| `For` | `public static void For(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize = 16)` | 方法 |
| `ForWithoutRenderThread` | `public static void ForWithoutRenderThread(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize = 16)` | 方法 |
| `ForWithoutRenderThreadDt` | `public static void ForWithoutRenderThreadDt(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate body, int grainSize = 16)` | 方法 |
| `For` | `public static void For(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate body, int grainSize = 16)` | 方法 |
| `AssertIsMainThread` | `public static void AssertIsMainThread()` | 方法 |
| `IsMainThread` | `public static bool IsMainThread()` | 方法 |
| `ParallelForAuxPredicate` | `public delegate void ParallelForAuxPredicate(int localStartIndex, int localEndIndex);` | 方法 |
| `ParallelForWithDtAuxPredicate` | `public delegate void ParallelForWithDtAuxPredicate(int localStartIndex, int localEndIndex, float dt);` | 方法 |
| `ParallelForAuxPredicate` | `public delegate void ParallelForAuxPredicate(int localStartIndex, int localEndIndex)` | 嵌套类型 |
| `ParallelForWithDtAuxPredicate` | `public delegate void ParallelForWithDtAuxPredicate(int localStartIndex, int localEndIndex, float dt)` | 嵌套类型 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
