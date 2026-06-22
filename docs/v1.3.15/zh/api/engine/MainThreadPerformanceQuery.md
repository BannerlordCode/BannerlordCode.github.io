<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MainThreadPerformanceQuery`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MainThreadPerformanceQuery

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`MainThreadPerformanceQuery` 是 `TaleWorlds.Engine` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `EngineFrameNo` | `public static int EngineFrameNo { get; }` |
| `EditModeEnabled` | `public static bool EditModeEnabled { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)