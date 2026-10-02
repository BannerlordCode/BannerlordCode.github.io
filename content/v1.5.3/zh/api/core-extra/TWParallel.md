---
title: "TWParallel"
description: "TWParallel 的自动生成类参考。"
---
# TWParallel

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class TWParallel `
**Base:** System.Object
**Source:** TaleWorlds.Library/TWParallel.cs

## 概述

`TWParallel` 的自动生成类参考页面。声明来自 `TaleWorlds.Library/TWParallel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### InitializeAndSetImplementation
`public static void InitializeAndSetImplementation(IParallelDriver parallelDriver) `

### For
`public static void For(int fromInclusive,int toExclusive,TWParallel.ParallelForAuxPredicate body,int grainSize = 16) `
`public static void For(int fromInclusive,int toExclusive,float deltaTime,TWParallel.ParallelForWithDtAuxPredicate body,int grainSize = 16) `

### ForWithoutRenderThread
`public static void ForWithoutRenderThread(int fromInclusive,int toExclusive,TWParallel.ParallelForAuxPredicate body,int grainSize = 16) `

### ForWithoutRenderThreadDt
`public static void ForWithoutRenderThreadDt(int fromInclusive,int toExclusive,float deltaTime,TWParallel.ParallelForWithDtAuxPredicate body,int grainSize = 16) `

### AssertIsMainThread
`public static void AssertIsMainThread() `

### IsMainThread
`public static bool IsMainThread() `

### ParallelForAuxPredicate
`public delegate void ParallelForAuxPredicate(int localStartIndex,int localEndIndex)`

### ParallelForWithDtAuxPredicate
`public delegate void ParallelForWithDtAuxPredicate(int localStartIndex,int localEndIndex,float dt)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
