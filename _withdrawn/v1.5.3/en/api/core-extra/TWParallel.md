---
title: "TWParallel"
description: "Auto-generated class reference for TWParallel."
---
# TWParallel

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class TWParallel `
**Base:** System.Object
**Source:** TaleWorlds.Library/TWParallel.cs

## Overview

Auto-generated stub for `TWParallel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### InitializeAndSetImplementation
`public static void InitializeAndSetImplementation(IParallelDriver parallelDriver)`

### For
`public static void For(int fromInclusive,int toExclusive,TWParallel.ParallelForAuxPredicate body,int grainSize = 16)`

### ForWithoutRenderThread
`public static void ForWithoutRenderThread(int fromInclusive,int toExclusive,TWParallel.ParallelForAuxPredicate body,int grainSize = 16)`

### ForWithoutRenderThreadDt
`public static void ForWithoutRenderThreadDt(int fromInclusive,int toExclusive,float deltaTime,TWParallel.ParallelForWithDtAuxPredicate body,int grainSize = 16)`

### AssertIsMainThread
`public static void AssertIsMainThread()`

### IsMainThread
`public static bool IsMainThread()`

### ParallelForAuxPredicate
`public delegate void ParallelForAuxPredicate(int localStartIndex,int localEndIndex)`

### ParallelForWithDtAuxPredicate
`public delegate void ParallelForWithDtAuxPredicate(int localStartIndex,int localEndIndex,float dt)`

## See Also

- [Section index](../)
