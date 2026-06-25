---
title: "MainThreadPerformanceQuery"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MainThreadPerformanceQuery`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MainThreadPerformanceQuery

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** `public class MainThreadPerformanceQuery : IDisposable`
**Base:** `IDisposable`
**领域:** engine

## 概述

`MainThreadPerformanceQuery` 位于 `TaleWorlds.Engine`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `EngineFrameNo` | `public static int EngineFrameNo { get; }` |
| `EditModeEnabled` | `public static bool EditModeEnabled { get; }` |

## 主要方法

### ConstructMainThreadJob
`public static void ConstructMainThreadJob(Delegate function, params object parameters)`

**用途 / Purpose:** 处理 `construct main thread job` 相关逻辑。

### ConstructMainThreadJob
`public static void ConstructMainThreadJob(Semaphore semaphore, Delegate function, params object parameters)`

**用途 / Purpose:** 处理 `construct main thread job` 相关逻辑。

### RunJobs
`public static void RunJobs()`

**用途 / Purpose:** 处理 `run jobs` 相关逻辑。

### WaitJobs
`public static void WaitJobs()`

**用途 / Purpose:** 处理 `wait jobs` 相关逻辑。

### OutputBenchmarkValuesToPerformanceReporter
`public static void OutputBenchmarkValuesToPerformanceReporter()`

**用途 / Purpose:** 处理 `output benchmark values to performance reporter` 相关逻辑。

### SetLoadingScreenPercentage
`public static void SetLoadingScreenPercentage(float value)`

**用途 / Purpose:** 设置 `loading screen percentage` 的值或状态。

### SetFixedDt
`public static void SetFixedDt(bool enabled, float dt)`

**用途 / Purpose:** 设置 `fixed dt` 的值或状态。

### SetBenchmarkStatus
`public static void SetBenchmarkStatus(int status, string def)`

**用途 / Purpose:** 设置 `benchmark status` 的值或状态。

### GetBenchmarkStatus
`public static int GetBenchmarkStatus()`

**用途 / Purpose:** 获取 `benchmark status` 的当前值。

### GetApplicationMemoryStatistics
`public static string GetApplicationMemoryStatistics()`

**用途 / Purpose:** 获取 `application memory statistics` 的当前值。

### IsBenchmarkQuited
`public static bool IsBenchmarkQuited()`

**用途 / Purpose:** 处理 `is benchmark quited` 相关逻辑。

### GetNativeMemoryStatistics
`public static string GetNativeMemoryStatistics()`

**用途 / Purpose:** 获取 `native memory statistics` 的当前值。

### CommandLineArgumentExists
`public static bool CommandLineArgumentExists(string str)`

**用途 / Purpose:** 处理 `command line argument exists` 相关逻辑。

### GetConsoleHostMachine
`public static string GetConsoleHostMachine()`

**用途 / Purpose:** 获取 `console host machine` 的当前值。

### ExportNavMeshFaceMarks
`public static string ExportNavMeshFaceMarks(string file_name)`

**用途 / Purpose:** 处理 `export nav mesh face marks` 相关逻辑。

### TakeSSFromTop
`public static string TakeSSFromTop(string file_name)`

**用途 / Purpose:** 处理 `take s s from top` 相关逻辑。

### CheckIfAssetsAndSourcesAreSame
`public static void CheckIfAssetsAndSourcesAreSame()`

**用途 / Purpose:** 处理 `check if assets and sources are same` 相关逻辑。

### DisableCoreGame
`public static void DisableCoreGame()`

**用途 / Purpose:** 处理 `disable core game` 相关逻辑。

### GetApplicationMemory
`public static float GetApplicationMemory()`

**用途 / Purpose:** 获取 `application memory` 的当前值。

### GatherCoreGameReferences
`public static void GatherCoreGameReferences(string scene_names)`

**用途 / Purpose:** 处理 `gather core game references` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MainThreadPerformanceQuery.ConstructMainThreadJob(function, parameters);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
