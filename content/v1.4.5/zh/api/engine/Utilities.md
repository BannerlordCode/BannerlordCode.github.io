---
title: "Utilities"
description: "Utilities 的自动生成类参考。"
---
# Utilities

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class Utilities`
**Base:** 无
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/Utilities.cs`

## 概述

`Utilities` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Dispose
`public void Dispose()`

**用途 / Purpose:** **用途 / Purpose:** 释放当前对象占用的非托管资源。

```csharp
// 先通过子系统 API 拿到 Utilities 实例
Utilities utilities = ...;
utilities.Dispose();
```

### ConstructMainThreadJob
`public static void ConstructMainThreadJob(Delegate function, params object parameters)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ConstructMainThreadJob 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.ConstructMainThreadJob(function, parameters);
```

### ConstructMainThreadJob
`public static void ConstructMainThreadJob(Semaphore semaphore, Delegate function, params object parameters)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ConstructMainThreadJob 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.ConstructMainThreadJob(semaphore, function, parameters);
```

### RunJobs
`public static void RunJobs()`

**用途 / Purpose:** **用途 / Purpose:** 调用 RunJobs 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.RunJobs();
```

### WaitJobs
`public static void WaitJobs()`

**用途 / Purpose:** **用途 / Purpose:** 暂停当前流程，直到jobs条件满足。

```csharp
// 静态调用，不需要实例
Utilities.WaitJobs();
```

### OutputBenchmarkValuesToPerformanceReporter
`public static void OutputBenchmarkValuesToPerformanceReporter()`

**用途 / Purpose:** **用途 / Purpose:** 调用 OutputBenchmarkValuesToPerformanceReporter 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.OutputBenchmarkValuesToPerformanceReporter();
```

### SetLoadingScreenPercentage
`public static void SetLoadingScreenPercentage(float value)`

**用途 / Purpose:** **用途 / Purpose:** 为 loading screen percentage 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetLoadingScreenPercentage(0);
```

### SetFixedDt
`public static void SetFixedDt(bool enabled, float dt)`

**用途 / Purpose:** **用途 / Purpose:** 为 fixed dt 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetFixedDt(false, 0);
```

### SetBenchmarkStatus
`public static void SetBenchmarkStatus(int status, string def)`

**用途 / Purpose:** **用途 / Purpose:** 为 benchmark status 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetBenchmarkStatus(0, "example");
```

### GetBenchmarkStatus
`public static int GetBenchmarkStatus()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 benchmark status 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetBenchmarkStatus();
```

### GetApplicationMemoryStatistics
`public static string GetApplicationMemoryStatistics()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 application memory statistics 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetApplicationMemoryStatistics();
```

### IsBenchmarkQuited
`public static bool IsBenchmarkQuited()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 benchmark quited 状态或条件。

```csharp
// 静态调用，不需要实例
Utilities.IsBenchmarkQuited();
```

### GetNativeMemoryStatistics
`public static string GetNativeMemoryStatistics()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 native memory statistics 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetNativeMemoryStatistics();
```

### CommandLineArgumentExists
`public static bool CommandLineArgumentExists(string str)`

**用途 / Purpose:** **用途 / Purpose:** 调用 CommandLineArgumentExists 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.CommandLineArgumentExists("example");
```

### GetConsoleHostMachine
`public static string GetConsoleHostMachine()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 console host machine 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetConsoleHostMachine();
```

### ExportNavMeshFaceMarks
`public static string ExportNavMeshFaceMarks(string file_name)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ExportNavMeshFaceMarks 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.ExportNavMeshFaceMarks("example");
```

### TakeSSFromTop
`public static string TakeSSFromTop(string file_name)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TakeSSFromTop 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.TakeSSFromTop("example");
```

### CheckIfAssetsAndSourcesAreSame
`public static void CheckIfAssetsAndSourcesAreSame()`

**用途 / Purpose:** **用途 / Purpose:** 检查if assets and sources are same在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
Utilities.CheckIfAssetsAndSourcesAreSame();
```

### DisableCoreGame
`public static void DisableCoreGame()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DisableCoreGame 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.DisableCoreGame();
```

### GetApplicationMemory
`public static float GetApplicationMemory()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 application memory 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetApplicationMemory();
```

### GatherCoreGameReferences
`public static void GatherCoreGameReferences(string scene_names)`

**用途 / Purpose:** **用途 / Purpose:** 收集或汇总core game references到当前对象。

```csharp
// 静态调用，不需要实例
Utilities.GatherCoreGameReferences("example");
```

### IsOnlyCoreContentEnabled
`public static bool IsOnlyCoreContentEnabled()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 only core content enabled 状态或条件。

```csharp
// 静态调用，不需要实例
Utilities.IsOnlyCoreContentEnabled();
```

### FindMeshesWithoutLods
`public static void FindMeshesWithoutLods(string module_name)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的meshes without lods。

```csharp
// 静态调用，不需要实例
Utilities.FindMeshesWithoutLods("example");
```

### SetDisableDumpGeneration
`public static void SetDisableDumpGeneration(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 disable dump generation 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetDisableDumpGeneration(false);
```

### SetPrintCallstackAtCrahses
`public static void SetPrintCallstackAtCrahses(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 print callstack at crahses 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetPrintCallstackAtCrahses(false);
```

### GetModulesNames
`public static string GetModulesNames()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 modules names 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetModulesNames();
```

### GetFullFilePathOfScene
`public static string GetFullFilePathOfScene(string sceneName)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 full file path of scene 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetFullFilePathOfScene("example");
```

### TryGetFullFilePathOfScene
`public static bool TryGetFullFilePathOfScene(string sceneName, out string fullPath)`

**用途 / Purpose:** **用途 / Purpose:** 尝试获取 get full file path of scene 的值，通常通过 out 参数返回是否成功。

```csharp
// 静态调用，不需要实例
Utilities.TryGetFullFilePathOfScene("example", fullPath);
```

### TryGetUniqueIdentifiersForScene
`public static bool TryGetUniqueIdentifiersForScene(string sceneName, out UniqueSceneId identifiers)`

**用途 / Purpose:** **用途 / Purpose:** 尝试获取 get unique identifiers for scene 的值，通常通过 out 参数返回是否成功。

```csharp
// 静态调用，不需要实例
Utilities.TryGetUniqueIdentifiersForScene("example", identifiers);
```

### TryGetUniqueIdentifiersForSceneFile
`public static bool TryGetUniqueIdentifiersForSceneFile(string xsceneFilePath, out UniqueSceneId identifiers)`

**用途 / Purpose:** **用途 / Purpose:** 尝试获取 get unique identifiers for scene file 的值，通常通过 out 参数返回是否成功。

```csharp
// 静态调用，不需要实例
Utilities.TryGetUniqueIdentifiersForSceneFile("example", identifiers);
```

### PairSceneNameToModuleName
`public static void PairSceneNameToModuleName(string sceneName, string moduleName)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PairSceneNameToModuleName 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.PairSceneNameToModuleName("example", "example");
```

### GetSingleModuleScenesOfModule
`public static string GetSingleModuleScenesOfModule(string moduleName)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 single module scenes of module 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetSingleModuleScenesOfModule("example");
```

### GetFullCommandLineString
`public static string GetFullCommandLineString()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 full command line string 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetFullCommandLineString();
```

### SetScreenTextRenderingState
`public static void SetScreenTextRenderingState(bool state)`

**用途 / Purpose:** **用途 / Purpose:** 为 screen text rendering state 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetScreenTextRenderingState(false);
```

### SetMessageLineRenderingState
`public static void SetMessageLineRenderingState(bool state)`

**用途 / Purpose:** **用途 / Purpose:** 为 message line rendering state 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetMessageLineRenderingState(false);
```

### CheckIfTerrainShaderHeaderGenerationFinished
`public static bool CheckIfTerrainShaderHeaderGenerationFinished()`

**用途 / Purpose:** **用途 / Purpose:** 检查if terrain shader header generation finished在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
Utilities.CheckIfTerrainShaderHeaderGenerationFinished();
```

### GenerateTerrainShaderHeaders
`public static void GenerateTerrainShaderHeaders(string targetPlatform, string targetConfig, string output_path)`

**用途 / Purpose:** **用途 / Purpose:** 生成terrain shader headers的实例、数据或表示。

```csharp
// 静态调用，不需要实例
Utilities.GenerateTerrainShaderHeaders("example", "example", "example");
```

### CompileTerrainShadersDist
`public static void CompileTerrainShadersDist(string targetPlatform, string targetConfig, string output_path)`

**用途 / Purpose:** **用途 / Purpose:** 调用 CompileTerrainShadersDist 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.CompileTerrainShadersDist("example", "example", "example");
```

### SetCrashOnAsserts
`public static void SetCrashOnAsserts(bool val)`

**用途 / Purpose:** **用途 / Purpose:** 为 crash on asserts 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetCrashOnAsserts(false);
```

### SetCrashOnWarnings
`public static void SetCrashOnWarnings(bool val)`

**用途 / Purpose:** **用途 / Purpose:** 为 crash on warnings 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetCrashOnWarnings(false);
```

### SetCreateDumpOnWarnings
`public static void SetCreateDumpOnWarnings(bool val)`

**用途 / Purpose:** **用途 / Purpose:** 为 create dump on warnings 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetCreateDumpOnWarnings(false);
```

### ToggleRender
`public static void ToggleRender()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ToggleRender 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.ToggleRender();
```

### SetRenderAgents
`public static void SetRenderAgents(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 render agents 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetRenderAgents(false);
```

### CheckShaderCompilation
`public static bool CheckShaderCompilation()`

**用途 / Purpose:** **用途 / Purpose:** 检查shader compilation在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
Utilities.CheckShaderCompilation();
```

### CompileAllShaders
`public static void CompileAllShaders(string targetPlatform)`

**用途 / Purpose:** **用途 / Purpose:** 调用 CompileAllShaders 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.CompileAllShaders("example");
```

### GetExecutableWorkingDirectory
`public static string GetExecutableWorkingDirectory()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 executable working directory 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetExecutableWorkingDirectory();
```

### SetDumpFolderPath
`public static void SetDumpFolderPath(string path)`

**用途 / Purpose:** **用途 / Purpose:** 为 dump folder path 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetDumpFolderPath("example");
```

### CheckSceneForProblems
`public static void CheckSceneForProblems(string sceneName)`

**用途 / Purpose:** **用途 / Purpose:** 检查scene for problems在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
Utilities.CheckSceneForProblems("example");
```

### SetCoreGameState
`public static void SetCoreGameState(int state)`

**用途 / Purpose:** **用途 / Purpose:** 为 core game state 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetCoreGameState(0);
```

### GetCoreGameState
`public static int GetCoreGameState()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 core game state 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetCoreGameState();
```

### ExecuteCommandLineCommand
`public static string ExecuteCommandLineCommand(string command)`

**用途 / Purpose:** **用途 / Purpose:** 执行 command line command 对应的操作或工作流。

```csharp
// 静态调用，不需要实例
Utilities.ExecuteCommandLineCommand("example");
```

### QuitGame
`public static void QuitGame()`

**用途 / Purpose:** **用途 / Purpose:** 调用 QuitGame 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.QuitGame();
```

### ExitProcess
`public static void ExitProcess(int exitCode)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ExitProcess 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.ExitProcess(0);
```

### GetBasePath
`public static string GetBasePath()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 base path 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetBasePath();
```

### GetVisualTestsValidatePath
`public static string GetVisualTestsValidatePath()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 visual tests validate path 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetVisualTestsValidatePath();
```

### GetVisualTestsTestFilesPath
`public static string GetVisualTestsTestFilesPath()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 visual tests test files path 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetVisualTestsTestFilesPath();
```

### GetAttachmentsPath
`public static string GetAttachmentsPath()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 attachments path 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetAttachmentsPath();
```

### StartScenePerformanceReport
`public static void StartScenePerformanceReport(string folderPath)`

**用途 / Purpose:** **用途 / Purpose:** 启动scene performance report流程或状态机。

```csharp
// 静态调用，不需要实例
Utilities.StartScenePerformanceReport("example");
```

### IsSceneReportFinished
`public static bool IsSceneReportFinished()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 scene report finished 状态或条件。

```csharp
// 静态调用，不需要实例
Utilities.IsSceneReportFinished();
```

### GetFps
`public static float GetFps()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 fps 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetFps();
```

### GetMainFps
`public static float GetMainFps()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 main fps 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetMainFps();
```

### GetRendererFps
`public static float GetRendererFps()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 renderer fps 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetRendererFps();
```

### EnableSingleGPUQueryPerFrame
`public static void EnableSingleGPUQueryPerFrame()`

**用途 / Purpose:** **用途 / Purpose:** 调用 EnableSingleGPUQueryPerFrame 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.EnableSingleGPUQueryPerFrame();
```

### ClearDecalAtlas
`public static void ClearDecalAtlas(DecalAtlasGroup atlasGroup)`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的decal atlas。

```csharp
// 静态调用，不需要实例
Utilities.ClearDecalAtlas(atlasGroup);
```

### FlushManagedObjectsMemory
`public static void FlushManagedObjectsMemory()`

**用途 / Purpose:** **用途 / Purpose:** 调用 FlushManagedObjectsMemory 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.FlushManagedObjectsMemory();
```

### OnLoadingWindowEnabled
`public static void OnLoadingWindowEnabled()`

**用途 / Purpose:** **用途 / Purpose:** 在 loading window enabled 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
Utilities.OnLoadingWindowEnabled();
```

### DebugSetGlobalLoadingWindowState
`public static void DebugSetGlobalLoadingWindowState(bool newState)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DebugSetGlobalLoadingWindowState 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.DebugSetGlobalLoadingWindowState(false);
```

### OnLoadingWindowDisabled
`public static void OnLoadingWindowDisabled()`

**用途 / Purpose:** **用途 / Purpose:** 在 loading window disabled 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
Utilities.OnLoadingWindowDisabled();
```

### DisableGlobalLoadingWindow
`public static void DisableGlobalLoadingWindow()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DisableGlobalLoadingWindow 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.DisableGlobalLoadingWindow();
```

### EnableGlobalLoadingWindow
`public static void EnableGlobalLoadingWindow()`

**用途 / Purpose:** **用途 / Purpose:** 调用 EnableGlobalLoadingWindow 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.EnableGlobalLoadingWindow();
```

### EnableGlobalEditDataCacher
`public static void EnableGlobalEditDataCacher()`

**用途 / Purpose:** **用途 / Purpose:** 调用 EnableGlobalEditDataCacher 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.EnableGlobalEditDataCacher();
```

### DoFullBakeAllLevelsAutomated
`public static void DoFullBakeAllLevelsAutomated(string module, string scene)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DoFullBakeAllLevelsAutomated 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.DoFullBakeAllLevelsAutomated("example", "example");
```

### GetReturnCode
`public static int GetReturnCode()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 return code 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetReturnCode();
```

### DisableGlobalEditDataCacher
`public static void DisableGlobalEditDataCacher()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DisableGlobalEditDataCacher 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.DisableGlobalEditDataCacher();
```

### DoFullBakeSingleLevelAutomated
`public static void DoFullBakeSingleLevelAutomated(string module, string scene)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DoFullBakeSingleLevelAutomated 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.DoFullBakeSingleLevelAutomated("example", "example");
```

### DoLightOnlyBakeSingleLevelAutomated
`public static void DoLightOnlyBakeSingleLevelAutomated(string module, string scene)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DoLightOnlyBakeSingleLevelAutomated 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.DoLightOnlyBakeSingleLevelAutomated("example", "example");
```

### DoLightOnlyBakeAllLevelsAutomated
`public static void DoLightOnlyBakeAllLevelsAutomated(string module, string scene)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DoLightOnlyBakeAllLevelsAutomated 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.DoLightOnlyBakeAllLevelsAutomated("example", "example");
```

### DidAutomatedGIBakeFinished
`public static bool DidAutomatedGIBakeFinished()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DidAutomatedGIBakeFinished 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.DidAutomatedGIBakeFinished();
```

### GetSelectedEntities
`public static void GetSelectedEntities(ref List<GameEntity> gameEntities)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 selected entities 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetSelectedEntities(gameEntities);
```

### DeleteEntitiesInEditorScene
`public static void DeleteEntitiesInEditorScene(List<GameEntity> gameEntities)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DeleteEntitiesInEditorScene 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.DeleteEntitiesInEditorScene(gameEntities);
```

### CreateSelectionInEditor
`public static void CreateSelectionInEditor(List<GameEntity> gameEntities, string name)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 selection in editor 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Utilities.CreateSelectionInEditor(gameEntities, "example");
```

### SelectEntities
`public static void SelectEntities(List<GameEntity> gameEntities)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SelectEntities 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.SelectEntities(gameEntities);
```

### GetEntitiesOfSelectionSet
`public static void GetEntitiesOfSelectionSet(string selectionSetName, ref List<GameEntity> gameEntities)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 entities of selection set 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetEntitiesOfSelectionSet("example", gameEntities);
```

### AddCommandLineFunction
`public static void AddCommandLineFunction(string concatName)`

**用途 / Purpose:** **用途 / Purpose:** 将 command line function 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
Utilities.AddCommandLineFunction("example");
```

### GetNumberOfShaderCompilationsInProgress
`public static int GetNumberOfShaderCompilationsInProgress()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 number of shader compilations in progress 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetNumberOfShaderCompilationsInProgress();
```

### IsDetailedSoundLogOn
`public static int IsDetailedSoundLogOn()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 detailed sound log on 状态或条件。

```csharp
// 静态调用，不需要实例
Utilities.IsDetailedSoundLogOn();
```

### GetCurrentCpuMemoryUsageMB
`public static ulong GetCurrentCpuMemoryUsageMB()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 current cpu memory usage m b 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetCurrentCpuMemoryUsageMB();
```

### GetGpuMemoryOfAllocationGroup
`public static ulong GetGpuMemoryOfAllocationGroup(string name)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 gpu memory of allocation group 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetGpuMemoryOfAllocationGroup("example");
```

### GetGPUMemoryStats
`public static void GetGPUMemoryStats(ref float totalMemory, ref float renderTargetMemory, ref float depthTargetMemory, ref float srvMemory, ref float bufferMemory)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 g p u memory stats 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetGPUMemoryStats(totalMemory, renderTargetMemory, depthTargetMemory, srvMemory, bufferMemory);
```

### GetDetailedGPUMemoryData
`public static void GetDetailedGPUMemoryData(ref int totalMemoryAllocated, ref int totalMemoryUsed, ref int emptyChunkTotalSize)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 detailed g p u memory data 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetDetailedGPUMemoryData(totalMemoryAllocated, totalMemoryUsed, emptyChunkTotalSize);
```

### SetRenderMode
`public static void SetRenderMode(EngineRenderDisplayMode mode)`

**用途 / Purpose:** **用途 / Purpose:** 为 render mode 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetRenderMode(mode);
```

### SetForceDrawEntityID
`public static void SetForceDrawEntityID(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 force draw entity i d 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetForceDrawEntityID(false);
```

### AddPerformanceReportToken
`public static void AddPerformanceReportToken(string performance_type, string name, float loading_time)`

**用途 / Purpose:** **用途 / Purpose:** 将 performance report token 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
Utilities.AddPerformanceReportToken("example", "example", 0);
```

### AddSceneObjectReport
`public static void AddSceneObjectReport(string scene_name, string report_name, float report_value)`

**用途 / Purpose:** **用途 / Purpose:** 将 scene object report 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
Utilities.AddSceneObjectReport("example", "example", 0);
```

### OutputPerformanceReports
`public static void OutputPerformanceReports()`

**用途 / Purpose:** **用途 / Purpose:** 调用 OutputPerformanceReports 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.OutputPerformanceReports();
```

### TakeScreenshot
`public static void TakeScreenshot(PlatformFilePath path)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TakeScreenshot 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.TakeScreenshot(path);
```

### TakeScreenshot
`public static void TakeScreenshot(string path)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TakeScreenshot 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.TakeScreenshot("example");
```

### SetAllocationAlwaysValidScene
`public static void SetAllocationAlwaysValidScene(Scene scene)`

**用途 / Purpose:** **用途 / Purpose:** 为 allocation always valid scene 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetAllocationAlwaysValidScene(scene);
```

### CheckResourceModifications
`public static void CheckResourceModifications()`

**用途 / Purpose:** **用途 / Purpose:** 检查resource modifications在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
Utilities.CheckResourceModifications();
```

### SetGraphicsPreset
`public static void SetGraphicsPreset(int preset)`

**用途 / Purpose:** **用途 / Purpose:** 为 graphics preset 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetGraphicsPreset(0);
```

### GetLocalOutputPath
`public static string GetLocalOutputPath()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 local output path 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetLocalOutputPath();
```

### GetPCInfo
`public static string GetPCInfo()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 p c info 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetPCInfo();
```

### GetGPUMemoryMB
`public static int GetGPUMemoryMB()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 g p u memory m b 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetGPUMemoryMB();
```

### GetCurrentEstimatedGPUMemoryCostMB
`public static int GetCurrentEstimatedGPUMemoryCostMB()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 current estimated g p u memory cost m b 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetCurrentEstimatedGPUMemoryCostMB();
```

### DumpGPUMemoryStatistics
`public static void DumpGPUMemoryStatistics(string filePath)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DumpGPUMemoryStatistics 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.DumpGPUMemoryStatistics("example");
```

### SaveDataAsTexture
`public static int SaveDataAsTexture(string path, int width, int height, float data)`

**用途 / Purpose:** **用途 / Purpose:** 将 data as texture 写入持久化存储或流中。

```csharp
// 静态调用，不需要实例
Utilities.SaveDataAsTexture("example", 0, 0, 0);
```

### ClearOldResourcesAndObjects
`public static void ClearOldResourcesAndObjects()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的old resources and objects。

```csharp
// 静态调用，不需要实例
Utilities.ClearOldResourcesAndObjects();
```

### LoadVirtualTextureTileset
`public static void LoadVirtualTextureTileset(string name)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 virtual texture tileset。

```csharp
// 静态调用，不需要实例
Utilities.LoadVirtualTextureTileset("example");
```

### GetDeltaTime
`public static float GetDeltaTime(int timerId)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 delta time 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetDeltaTime(0);
```

### LoadSkyBoxes
`public static void LoadSkyBoxes()`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 sky boxes。

```csharp
// 静态调用，不需要实例
Utilities.LoadSkyBoxes();
```

### GetApplicationName
`public static string GetApplicationName()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 application name 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetApplicationName();
```

### OpenConsoleStorePage
`public static void OpenConsoleStorePage(string productId)`

**用途 / Purpose:** **用途 / Purpose:** 打开console store page对应的资源或界面。

```csharp
// 静态调用，不需要实例
Utilities.OpenConsoleStorePage("example");
```

### SetWindowTitle
`public static void SetWindowTitle(string title)`

**用途 / Purpose:** **用途 / Purpose:** 为 window title 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetWindowTitle("example");
```

### ProcessWindowTitle
`public static string ProcessWindowTitle(string title)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ProcessWindowTitle 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.ProcessWindowTitle("example");
```

### GetCurrentProcessID
`public static uint GetCurrentProcessID()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 current process i d 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetCurrentProcessID();
```

### DoDelayedexit
`public static void DoDelayedexit(int returnCode)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DoDelayedexit 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.DoDelayedexit(0);
```

### SetAssertionsAndWarningsSetExitCode
`public static void SetAssertionsAndWarningsSetExitCode(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 assertions and warnings set exit code 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetAssertionsAndWarningsSetExitCode(false);
```

### SetReportMode
`public static void SetReportMode(bool reportMode)`

**用途 / Purpose:** **用途 / Purpose:** 为 report mode 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetReportMode(false);
```

### SetAssertionAtShaderCompile
`public static void SetAssertionAtShaderCompile(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 assertion at shader compile 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetAssertionAtShaderCompile(false);
```

### SetCrashReportCustomString
`public static void SetCrashReportCustomString(string customString)`

**用途 / Purpose:** **用途 / Purpose:** 为 crash report custom string 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetCrashReportCustomString("example");
```

### SetCrashReportCustomStack
`public static void SetCrashReportCustomStack(string customStack)`

**用途 / Purpose:** **用途 / Purpose:** 为 crash report custom stack 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetCrashReportCustomStack("example");
```

### GetSteamAppId
`public static int GetSteamAppId()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 steam app id 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetSteamAppId();
```

### SetForceVsync
`public static void SetForceVsync(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 force vsync 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetForceVsync(false);
```

### LoadBannerlordConfigFile
`public static string LoadBannerlordConfigFile()`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 bannerlord config file。

```csharp
// 静态调用，不需要实例
Utilities.LoadBannerlordConfigFile();
```

### SaveConfigFile
`public static SaveResult SaveConfigFile(string configProperties)`

**用途 / Purpose:** **用途 / Purpose:** 将 config file 写入持久化存储或流中。

```csharp
// 静态调用，不需要实例
Utilities.SaveConfigFile("example");
```

### OpenOnscreenKeyboard
`public static void OpenOnscreenKeyboard(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum)`

**用途 / Purpose:** **用途 / Purpose:** 打开onscreen keyboard对应的资源或界面。

```csharp
// 静态调用，不需要实例
Utilities.OpenOnscreenKeyboard("example", "example", 0, 0);
```

### GetSystemLanguage
`public static string GetSystemLanguage()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 system language 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetSystemLanguage();
```

### RegisterGPUAllocationGroup
`public static int RegisterGPUAllocationGroup(string name)`

**用途 / Purpose:** **用途 / Purpose:** 将g p u allocation group注册到当前系统，以便后续监听或分发。

```csharp
// 静态调用，不需要实例
Utilities.RegisterGPUAllocationGroup("example");
```

### GetMemoryUsageOfCategory
`public static int GetMemoryUsageOfCategory(int category)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 memory usage of category 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetMemoryUsageOfCategory(0);
```

### GetDetailedXBOXMemoryInfo
`public static string GetDetailedXBOXMemoryInfo()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 detailed x b o x memory info 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetDetailedXBOXMemoryInfo();
```

### SetFrameLimiterWithSleep
`public static void SetFrameLimiterWithSleep(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 frame limiter with sleep 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetFrameLimiterWithSleep(false);
```

### GetFrameLimiterWithSleep
`public static bool GetFrameLimiterWithSleep()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 frame limiter with sleep 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetFrameLimiterWithSleep();
```

### GetPossibleCommandLineStartingWith
`public static string GetPossibleCommandLineStartingWith(string command, int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 possible command line starting with 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetPossibleCommandLineStartingWith("example", 0);
```

### IsDevkit
`public static bool IsDevkit()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 devkit 状态或条件。

```csharp
// 静态调用，不需要实例
Utilities.IsDevkit();
```

### IsLockhartPlatform
`public static bool IsLockhartPlatform()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 lockhart platform 状态或条件。

```csharp
// 静态调用，不需要实例
Utilities.IsLockhartPlatform();
```

### GetVertexBufferChunkSystemMemoryUsage
`public static int GetVertexBufferChunkSystemMemoryUsage()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 vertex buffer chunk system memory usage 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetVertexBufferChunkSystemMemoryUsage();
```

### GetBuildNumber
`public static int GetBuildNumber()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 build number 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetBuildNumber();
```

### GetApplicationVersionWithBuildNumber
`public static ApplicationVersion GetApplicationVersionWithBuildNumber()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 application version with build number 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetApplicationVersionWithBuildNumber();
```

### ParallelFor
`public static void ParallelFor(int startIndex, int endIndex, long curKey, int grainSize)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ParallelFor 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.ParallelFor(0, 0, 0, 0);
```

### ParallelForWithDt
`public static void ParallelForWithDt(int startIndex, int endIndex, long curKey, int grainSize)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ParallelForWithDt 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.ParallelForWithDt(0, 0, 0, 0);
```

### ParallelForWithoutRenderThread
`public static void ParallelForWithoutRenderThread(int startIndex, int endIndex, long curKey, int grainSize)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ParallelForWithoutRenderThread 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.ParallelForWithoutRenderThread(0, 0, 0, 0);
```

### ParallelForWithoutRenderThreadDt
`public static void ParallelForWithoutRenderThreadDt(int startIndex, int endIndex, long curKey, int grainSize)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ParallelForWithoutRenderThreadDt 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.ParallelForWithoutRenderThreadDt(0, 0, 0, 0);
```

### ClearShaderMemory
`public static void ClearShaderMemory()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的shader memory。

```csharp
// 静态调用，不需要实例
Utilities.ClearShaderMemory();
```

### RegisterMeshForGPUMorph
`public static void RegisterMeshForGPUMorph(string metaMeshName)`

**用途 / Purpose:** **用途 / Purpose:** 将mesh for g p u morph注册到当前系统，以便后续监听或分发。

```csharp
// 静态调用，不需要实例
Utilities.RegisterMeshForGPUMorph("example");
```

### GetMainThreadId
`public static ulong GetMainThreadId()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 main thread id 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetMainThreadId();
```

### GetCurrentThreadId
`public static ulong GetCurrentThreadId()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 current thread id 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetCurrentThreadId();
```

### SetWatchdogValue
`public static void SetWatchdogValue(string fileName, string groupName, string key, string value)`

**用途 / Purpose:** **用途 / Purpose:** 为 watchdog value 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetWatchdogValue("example", "example", "example", "example");
```

### SetWatchdogAutoreport
`public static void SetWatchdogAutoreport(bool enabled)`

**用途 / Purpose:** **用途 / Purpose:** 为 watchdog autoreport 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Utilities.SetWatchdogAutoreport(false);
```

### DetachWatchdog
`public static void DetachWatchdog()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DetachWatchdog 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.DetachWatchdog();
```

### GetPlatformModulePaths
`public static string GetPlatformModulePaths()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 platform module paths 的结果。

```csharp
// 静态调用，不需要实例
Utilities.GetPlatformModulePaths();
```

### IsAsyncPhysicsThread
`public static bool IsAsyncPhysicsThread()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 async physics thread 状态或条件。

```csharp
// 静态调用，不需要实例
Utilities.IsAsyncPhysicsThread();
```

### StartLoadingStuckCheckState
`public static void StartLoadingStuckCheckState(float timeoutThresholdSeconds)`

**用途 / Purpose:** **用途 / Purpose:** 启动loading stuck check state流程或状态机。

```csharp
// 静态调用，不需要实例
Utilities.StartLoadingStuckCheckState(0);
```

### EndLoadingStuckCheckState
`public static void EndLoadingStuckCheckState()`

**用途 / Purpose:** **用途 / Purpose:** 调用 EndLoadingStuckCheckState 对应的操作。

```csharp
// 静态调用，不需要实例
Utilities.EndLoadingStuckCheckState();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Utilities utilities = ...;
utilities.Dispose();
```

## 参见

- [本区域目录](../)