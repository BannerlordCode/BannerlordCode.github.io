<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MainThreadPerformanceQuery`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MainThreadPerformanceQuery

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `MainThreadPerformanceQuery` is a class in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `EngineFrameNo` | `public static int EngineFrameNo { get; }` |
| `EditModeEnabled` | `public static bool EditModeEnabled { get; }` |


## Key Methods

### ConstructMainThreadJob

```csharp
public static void ConstructMainThreadJob(Delegate function, params object parameters)
```

### ConstructMainThreadJob

```csharp
public static void ConstructMainThreadJob(Semaphore semaphore, Delegate function, params object parameters)
```

### RunJobs

```csharp
public static void RunJobs()
```

### WaitJobs

```csharp
public static void WaitJobs()
```

### OutputBenchmarkValuesToPerformanceReporter

```csharp
public static void OutputBenchmarkValuesToPerformanceReporter()
```

### SetLoadingScreenPercentage

```csharp
public static void SetLoadingScreenPercentage(float value)
```

### SetFixedDt

```csharp
public static void SetFixedDt(bool enabled, float dt)
```

### SetBenchmarkStatus

```csharp
public static void SetBenchmarkStatus(int status, string def)
```

### GetBenchmarkStatus

```csharp
public static int GetBenchmarkStatus()
```

### GetApplicationMemoryStatistics

```csharp
public static string GetApplicationMemoryStatistics()
```

### IsBenchmarkQuited

```csharp
public static bool IsBenchmarkQuited()
```

### GetNativeMemoryStatistics

```csharp
public static string GetNativeMemoryStatistics()
```

### CommandLineArgumentExists

```csharp
public static bool CommandLineArgumentExists(string str)
```

### GetConsoleHostMachine

```csharp
public static string GetConsoleHostMachine()
```

### ExportNavMeshFaceMarks

```csharp
public static string ExportNavMeshFaceMarks(string file_name)
```

### TakeSSFromTop

```csharp
public static string TakeSSFromTop(string file_name)
```

### CheckIfAssetsAndSourcesAreSame

```csharp
public static void CheckIfAssetsAndSourcesAreSame()
```

### DisableCoreGame

```csharp
public static void DisableCoreGame()
```

### GetApplicationMemory

```csharp
public static float GetApplicationMemory()
```

### GatherCoreGameReferences

```csharp
public static void GatherCoreGameReferences(string scene_names)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)