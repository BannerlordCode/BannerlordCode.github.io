---
title: "DefaultParallelDriver"
description: "DefaultParallelDriver 的自动生成类参考。"
---
# DefaultParallelDriver

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public sealed class DefaultParallelDriver : IParallelDriver `
**Base:** IParallelDriver
**Source:** TaleWorlds.Library/DefaultParallelDriver.cs

## 概述

`DefaultParallelDriver` 的自动生成类参考页面。声明来自 `TaleWorlds.Library/DefaultParallelDriver.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### For
`public void For(int fromInclusive,int toExclusive,TWParallel.ParallelForAuxPredicate body,int grainSize) `
`public void For(int fromInclusive,int toExclusive,float deltaTime,TWParallel.ParallelForWithDtAuxPredicate body,int grainSize) `

### ForWithoutRenderThread
`public void ForWithoutRenderThread(int fromInclusive,int toExclusive,TWParallel.ParallelForAuxPredicate body,int grainSize) `

### ForWithoutRenderThreadDt
`public void ForWithoutRenderThreadDt(int fromInclusive,int toExclusive,float deltaTime,TWParallel.ParallelForWithDtAuxPredicate body,int grainSize) `

### GetMainThreadId
`public ulong GetMainThreadId() `

### GetCurrentThreadId
`public ulong GetCurrentThreadId() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
