---
title: "NativeParallelDriver"
description: "NativeParallelDriver 的自动生成类参考。"
---
# NativeParallelDriver

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class NativeParallelDriver : IParallelDriver `
**Base:** IParallelDriver
**Source:** TaleWorlds.Engine/NativeParallelDriver.cs

## 概述

`NativeParallelDriver` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/NativeParallelDriver.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### For
`public void For(int fromInclusive,int toExclusive,TWParallel.ParallelForAuxPredicate loopBody,int grainSize) `
`public void For(int fromInclusive,int toExclusive,float deltaTime,TWParallel.ParallelForWithDtAuxPredicate loopBody,int grainSize) `

### ForWithoutRenderThread
`public void ForWithoutRenderThread(int fromInclusive,int toExclusive,TWParallel.ParallelForAuxPredicate loopBody,int grainSize) `

### ForWithoutRenderThreadDt
`public void ForWithoutRenderThreadDt(int fromInclusive,int toExclusive,float deltaTime,TWParallel.ParallelForWithDtAuxPredicate loopBody,int grainSize) `

### GetMainThreadId
`public ulong GetMainThreadId() `

### GetCurrentThreadId
`public ulong GetCurrentThreadId() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
