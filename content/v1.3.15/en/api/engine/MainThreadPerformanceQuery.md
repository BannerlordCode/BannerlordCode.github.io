---
title: "MainThreadPerformanceQuery"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MainThreadPerformanceQuery`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MainThreadPerformanceQuery

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class MainThreadPerformanceQuery : IDisposable`
**Base:** `IDisposable`
**Area:** engine

## Overview

`MainThreadPerformanceQuery` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EngineFrameNo` | `public static int EngineFrameNo { get; }` |
| `EditModeEnabled` | `public static bool EditModeEnabled { get; }` |

## Key Methods

### ConstructMainThreadJob
`public static void ConstructMainThreadJob(Delegate function, params object parameters)`

**Purpose:** Handles logic related to `construct main thread job`.

### ConstructMainThreadJob
`public static void ConstructMainThreadJob(Semaphore semaphore, Delegate function, params object parameters)`

**Purpose:** Handles logic related to `construct main thread job`.

### RunJobs
`public static void RunJobs()`

**Purpose:** Handles logic related to `run jobs`.

### WaitJobs
`public static void WaitJobs()`

**Purpose:** Handles logic related to `wait jobs`.

### OutputBenchmarkValuesToPerformanceReporter
`public static void OutputBenchmarkValuesToPerformanceReporter()`

**Purpose:** Handles logic related to `output benchmark values to performance reporter`.

### SetLoadingScreenPercentage
`public static void SetLoadingScreenPercentage(float value)`

**Purpose:** Sets the value or state of `loading screen percentage`.

### SetFixedDt
`public static void SetFixedDt(bool enabled, float dt)`

**Purpose:** Sets the value or state of `fixed dt`.

### SetBenchmarkStatus
`public static void SetBenchmarkStatus(int status, string def)`

**Purpose:** Sets the value or state of `benchmark status`.

### GetBenchmarkStatus
`public static int GetBenchmarkStatus()`

**Purpose:** Gets the current value of `benchmark status`.

### GetApplicationMemoryStatistics
`public static string GetApplicationMemoryStatistics()`

**Purpose:** Gets the current value of `application memory statistics`.

### IsBenchmarkQuited
`public static bool IsBenchmarkQuited()`

**Purpose:** Handles logic related to `is benchmark quited`.

### GetNativeMemoryStatistics
`public static string GetNativeMemoryStatistics()`

**Purpose:** Gets the current value of `native memory statistics`.

### CommandLineArgumentExists
`public static bool CommandLineArgumentExists(string str)`

**Purpose:** Handles logic related to `command line argument exists`.

### GetConsoleHostMachine
`public static string GetConsoleHostMachine()`

**Purpose:** Gets the current value of `console host machine`.

### ExportNavMeshFaceMarks
`public static string ExportNavMeshFaceMarks(string file_name)`

**Purpose:** Handles logic related to `export nav mesh face marks`.

### TakeSSFromTop
`public static string TakeSSFromTop(string file_name)`

**Purpose:** Handles logic related to `take s s from top`.

### CheckIfAssetsAndSourcesAreSame
`public static void CheckIfAssetsAndSourcesAreSame()`

**Purpose:** Handles logic related to `check if assets and sources are same`.

### DisableCoreGame
`public static void DisableCoreGame()`

**Purpose:** Handles logic related to `disable core game`.

### GetApplicationMemory
`public static float GetApplicationMemory()`

**Purpose:** Gets the current value of `application memory`.

### GatherCoreGameReferences
`public static void GatherCoreGameReferences(string scene_names)`

**Purpose:** Handles logic related to `gather core game references`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MainThreadPerformanceQuery.ConstructMainThreadJob(function, parameters);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
