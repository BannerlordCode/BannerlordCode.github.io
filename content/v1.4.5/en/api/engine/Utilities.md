---
title: "Utilities"
description: "Auto-generated class reference for Utilities."
---
# Utilities

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class Utilities`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/Utilities.cs`

## Overview

`Utilities` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Dispose
`public void Dispose()`

**Purpose:** Releases unmanaged resources held by the current object.

```csharp
// Obtain an instance of Utilities from the subsystem API first
Utilities utilities = ...;
utilities.Dispose();
```

### ConstructMainThreadJob
`public static void ConstructMainThreadJob(Delegate function, params object parameters)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.ConstructMainThreadJob(function, parameters);
```

### ConstructMainThreadJob
`public static void ConstructMainThreadJob(Semaphore semaphore, Delegate function, params object parameters)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.ConstructMainThreadJob(semaphore, function, parameters);
```

### RunJobs
`public static void RunJobs()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.RunJobs();
```

### WaitJobs
`public static void WaitJobs()`

**Purpose:** Pauses the current flow until the `jobs` condition is met.

```csharp
// Static call; no instance required
Utilities.WaitJobs();
```

### OutputBenchmarkValuesToPerformanceReporter
`public static void OutputBenchmarkValuesToPerformanceReporter()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.OutputBenchmarkValuesToPerformanceReporter();
```

### SetLoadingScreenPercentage
`public static void SetLoadingScreenPercentage(float value)`

**Purpose:** Assigns a new value to `loading screen percentage` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetLoadingScreenPercentage(0);
```

### SetFixedDt
`public static void SetFixedDt(bool enabled, float dt)`

**Purpose:** Assigns a new value to `fixed dt` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetFixedDt(false, 0);
```

### SetBenchmarkStatus
`public static void SetBenchmarkStatus(int status, string def)`

**Purpose:** Assigns a new value to `benchmark status` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetBenchmarkStatus(0, "example");
```

### GetBenchmarkStatus
`public static int GetBenchmarkStatus()`

**Purpose:** Reads and returns the `benchmark status` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetBenchmarkStatus();
```

### GetApplicationMemoryStatistics
`public static string GetApplicationMemoryStatistics()`

**Purpose:** Reads and returns the `application memory statistics` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetApplicationMemoryStatistics();
```

### IsBenchmarkQuited
`public static bool IsBenchmarkQuited()`

**Purpose:** Determines whether the current object is in the `benchmark quited` state or condition.

```csharp
// Static call; no instance required
Utilities.IsBenchmarkQuited();
```

### GetNativeMemoryStatistics
`public static string GetNativeMemoryStatistics()`

**Purpose:** Reads and returns the `native memory statistics` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetNativeMemoryStatistics();
```

### CommandLineArgumentExists
`public static bool CommandLineArgumentExists(string str)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.CommandLineArgumentExists("example");
```

### GetConsoleHostMachine
`public static string GetConsoleHostMachine()`

**Purpose:** Reads and returns the `console host machine` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetConsoleHostMachine();
```

### ExportNavMeshFaceMarks
`public static string ExportNavMeshFaceMarks(string file_name)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.ExportNavMeshFaceMarks("example");
```

### TakeSSFromTop
`public static string TakeSSFromTop(string file_name)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.TakeSSFromTop("example");
```

### CheckIfAssetsAndSourcesAreSame
`public static void CheckIfAssetsAndSourcesAreSame()`

**Purpose:** Verifies whether `if assets and sources are same` holds true for the current object.

```csharp
// Static call; no instance required
Utilities.CheckIfAssetsAndSourcesAreSame();
```

### DisableCoreGame
`public static void DisableCoreGame()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.DisableCoreGame();
```

### GetApplicationMemory
`public static float GetApplicationMemory()`

**Purpose:** Reads and returns the `application memory` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetApplicationMemory();
```

### GatherCoreGameReferences
`public static void GatherCoreGameReferences(string scene_names)`

**Purpose:** Collects or aggregates `core game references` into the current object.

```csharp
// Static call; no instance required
Utilities.GatherCoreGameReferences("example");
```

### IsOnlyCoreContentEnabled
`public static bool IsOnlyCoreContentEnabled()`

**Purpose:** Determines whether the current object is in the `only core content enabled` state or condition.

```csharp
// Static call; no instance required
Utilities.IsOnlyCoreContentEnabled();
```

### FindMeshesWithoutLods
`public static void FindMeshesWithoutLods(string module_name)`

**Purpose:** Looks up the matching `meshes without lods` in the current collection or scope.

```csharp
// Static call; no instance required
Utilities.FindMeshesWithoutLods("example");
```

### SetDisableDumpGeneration
`public static void SetDisableDumpGeneration(bool value)`

**Purpose:** Assigns a new value to `disable dump generation` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetDisableDumpGeneration(false);
```

### SetPrintCallstackAtCrahses
`public static void SetPrintCallstackAtCrahses(bool value)`

**Purpose:** Assigns a new value to `print callstack at crahses` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetPrintCallstackAtCrahses(false);
```

### GetModulesNames
`public static string GetModulesNames()`

**Purpose:** Reads and returns the `modules names` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetModulesNames();
```

### GetFullFilePathOfScene
`public static string GetFullFilePathOfScene(string sceneName)`

**Purpose:** Reads and returns the `full file path of scene` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetFullFilePathOfScene("example");
```

### TryGetFullFilePathOfScene
`public static bool TryGetFullFilePathOfScene(string sceneName, out string fullPath)`

**Purpose:** Attempts to retrieve `get full file path of scene`, usually returning success through an out parameter.

```csharp
// Static call; no instance required
Utilities.TryGetFullFilePathOfScene("example", fullPath);
```

### TryGetUniqueIdentifiersForScene
`public static bool TryGetUniqueIdentifiersForScene(string sceneName, out UniqueSceneId identifiers)`

**Purpose:** Attempts to retrieve `get unique identifiers for scene`, usually returning success through an out parameter.

```csharp
// Static call; no instance required
Utilities.TryGetUniqueIdentifiersForScene("example", identifiers);
```

### TryGetUniqueIdentifiersForSceneFile
`public static bool TryGetUniqueIdentifiersForSceneFile(string xsceneFilePath, out UniqueSceneId identifiers)`

**Purpose:** Attempts to retrieve `get unique identifiers for scene file`, usually returning success through an out parameter.

```csharp
// Static call; no instance required
Utilities.TryGetUniqueIdentifiersForSceneFile("example", identifiers);
```

### PairSceneNameToModuleName
`public static void PairSceneNameToModuleName(string sceneName, string moduleName)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.PairSceneNameToModuleName("example", "example");
```

### GetSingleModuleScenesOfModule
`public static string GetSingleModuleScenesOfModule(string moduleName)`

**Purpose:** Reads and returns the `single module scenes of module` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetSingleModuleScenesOfModule("example");
```

### GetFullCommandLineString
`public static string GetFullCommandLineString()`

**Purpose:** Reads and returns the `full command line string` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetFullCommandLineString();
```

### SetScreenTextRenderingState
`public static void SetScreenTextRenderingState(bool state)`

**Purpose:** Assigns a new value to `screen text rendering state` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetScreenTextRenderingState(false);
```

### SetMessageLineRenderingState
`public static void SetMessageLineRenderingState(bool state)`

**Purpose:** Assigns a new value to `message line rendering state` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetMessageLineRenderingState(false);
```

### CheckIfTerrainShaderHeaderGenerationFinished
`public static bool CheckIfTerrainShaderHeaderGenerationFinished()`

**Purpose:** Verifies whether `if terrain shader header generation finished` holds true for the current object.

```csharp
// Static call; no instance required
Utilities.CheckIfTerrainShaderHeaderGenerationFinished();
```

### GenerateTerrainShaderHeaders
`public static void GenerateTerrainShaderHeaders(string targetPlatform, string targetConfig, string output_path)`

**Purpose:** Generates an instance, data, or representation of `terrain shader headers`.

```csharp
// Static call; no instance required
Utilities.GenerateTerrainShaderHeaders("example", "example", "example");
```

### CompileTerrainShadersDist
`public static void CompileTerrainShadersDist(string targetPlatform, string targetConfig, string output_path)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.CompileTerrainShadersDist("example", "example", "example");
```

### SetCrashOnAsserts
`public static void SetCrashOnAsserts(bool val)`

**Purpose:** Assigns a new value to `crash on asserts` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetCrashOnAsserts(false);
```

### SetCrashOnWarnings
`public static void SetCrashOnWarnings(bool val)`

**Purpose:** Assigns a new value to `crash on warnings` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetCrashOnWarnings(false);
```

### SetCreateDumpOnWarnings
`public static void SetCreateDumpOnWarnings(bool val)`

**Purpose:** Assigns a new value to `create dump on warnings` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetCreateDumpOnWarnings(false);
```

### ToggleRender
`public static void ToggleRender()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.ToggleRender();
```

### SetRenderAgents
`public static void SetRenderAgents(bool value)`

**Purpose:** Assigns a new value to `render agents` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetRenderAgents(false);
```

### CheckShaderCompilation
`public static bool CheckShaderCompilation()`

**Purpose:** Verifies whether `shader compilation` holds true for the current object.

```csharp
// Static call; no instance required
Utilities.CheckShaderCompilation();
```

### CompileAllShaders
`public static void CompileAllShaders(string targetPlatform)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.CompileAllShaders("example");
```

### GetExecutableWorkingDirectory
`public static string GetExecutableWorkingDirectory()`

**Purpose:** Reads and returns the `executable working directory` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetExecutableWorkingDirectory();
```

### SetDumpFolderPath
`public static void SetDumpFolderPath(string path)`

**Purpose:** Assigns a new value to `dump folder path` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetDumpFolderPath("example");
```

### CheckSceneForProblems
`public static void CheckSceneForProblems(string sceneName)`

**Purpose:** Verifies whether `scene for problems` holds true for the current object.

```csharp
// Static call; no instance required
Utilities.CheckSceneForProblems("example");
```

### SetCoreGameState
`public static void SetCoreGameState(int state)`

**Purpose:** Assigns a new value to `core game state` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetCoreGameState(0);
```

### GetCoreGameState
`public static int GetCoreGameState()`

**Purpose:** Reads and returns the `core game state` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetCoreGameState();
```

### ExecuteCommandLineCommand
`public static string ExecuteCommandLineCommand(string command)`

**Purpose:** Runs the operation or workflow associated with `command line command`.

```csharp
// Static call; no instance required
Utilities.ExecuteCommandLineCommand("example");
```

### QuitGame
`public static void QuitGame()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.QuitGame();
```

### ExitProcess
`public static void ExitProcess(int exitCode)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.ExitProcess(0);
```

### GetBasePath
`public static string GetBasePath()`

**Purpose:** Reads and returns the `base path` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetBasePath();
```

### GetVisualTestsValidatePath
`public static string GetVisualTestsValidatePath()`

**Purpose:** Reads and returns the `visual tests validate path` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetVisualTestsValidatePath();
```

### GetVisualTestsTestFilesPath
`public static string GetVisualTestsTestFilesPath()`

**Purpose:** Reads and returns the `visual tests test files path` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetVisualTestsTestFilesPath();
```

### GetAttachmentsPath
`public static string GetAttachmentsPath()`

**Purpose:** Reads and returns the `attachments path` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetAttachmentsPath();
```

### StartScenePerformanceReport
`public static void StartScenePerformanceReport(string folderPath)`

**Purpose:** Starts the `scene performance report` flow or state machine.

```csharp
// Static call; no instance required
Utilities.StartScenePerformanceReport("example");
```

### IsSceneReportFinished
`public static bool IsSceneReportFinished()`

**Purpose:** Determines whether the current object is in the `scene report finished` state or condition.

```csharp
// Static call; no instance required
Utilities.IsSceneReportFinished();
```

### GetFps
`public static float GetFps()`

**Purpose:** Reads and returns the `fps` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetFps();
```

### GetMainFps
`public static float GetMainFps()`

**Purpose:** Reads and returns the `main fps` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetMainFps();
```

### GetRendererFps
`public static float GetRendererFps()`

**Purpose:** Reads and returns the `renderer fps` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetRendererFps();
```

### EnableSingleGPUQueryPerFrame
`public static void EnableSingleGPUQueryPerFrame()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.EnableSingleGPUQueryPerFrame();
```

### ClearDecalAtlas
`public static void ClearDecalAtlas(DecalAtlasGroup atlasGroup)`

**Purpose:** Removes all `decal atlas` from the current object.

```csharp
// Static call; no instance required
Utilities.ClearDecalAtlas(atlasGroup);
```

### FlushManagedObjectsMemory
`public static void FlushManagedObjectsMemory()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.FlushManagedObjectsMemory();
```

### OnLoadingWindowEnabled
`public static void OnLoadingWindowEnabled()`

**Purpose:** Invoked when the `loading window enabled` event is raised.

```csharp
// Static call; no instance required
Utilities.OnLoadingWindowEnabled();
```

### DebugSetGlobalLoadingWindowState
`public static void DebugSetGlobalLoadingWindowState(bool newState)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.DebugSetGlobalLoadingWindowState(false);
```

### OnLoadingWindowDisabled
`public static void OnLoadingWindowDisabled()`

**Purpose:** Invoked when the `loading window disabled` event is raised.

```csharp
// Static call; no instance required
Utilities.OnLoadingWindowDisabled();
```

### DisableGlobalLoadingWindow
`public static void DisableGlobalLoadingWindow()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.DisableGlobalLoadingWindow();
```

### EnableGlobalLoadingWindow
`public static void EnableGlobalLoadingWindow()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.EnableGlobalLoadingWindow();
```

### EnableGlobalEditDataCacher
`public static void EnableGlobalEditDataCacher()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.EnableGlobalEditDataCacher();
```

### DoFullBakeAllLevelsAutomated
`public static void DoFullBakeAllLevelsAutomated(string module, string scene)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.DoFullBakeAllLevelsAutomated("example", "example");
```

### GetReturnCode
`public static int GetReturnCode()`

**Purpose:** Reads and returns the `return code` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetReturnCode();
```

### DisableGlobalEditDataCacher
`public static void DisableGlobalEditDataCacher()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.DisableGlobalEditDataCacher();
```

### DoFullBakeSingleLevelAutomated
`public static void DoFullBakeSingleLevelAutomated(string module, string scene)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.DoFullBakeSingleLevelAutomated("example", "example");
```

### DoLightOnlyBakeSingleLevelAutomated
`public static void DoLightOnlyBakeSingleLevelAutomated(string module, string scene)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.DoLightOnlyBakeSingleLevelAutomated("example", "example");
```

### DoLightOnlyBakeAllLevelsAutomated
`public static void DoLightOnlyBakeAllLevelsAutomated(string module, string scene)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.DoLightOnlyBakeAllLevelsAutomated("example", "example");
```

### DidAutomatedGIBakeFinished
`public static bool DidAutomatedGIBakeFinished()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.DidAutomatedGIBakeFinished();
```

### GetSelectedEntities
`public static void GetSelectedEntities(ref List<GameEntity> gameEntities)`

**Purpose:** Reads and returns the `selected entities` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetSelectedEntities(gameEntities);
```

### DeleteEntitiesInEditorScene
`public static void DeleteEntitiesInEditorScene(List<GameEntity> gameEntities)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.DeleteEntitiesInEditorScene(gameEntities);
```

### CreateSelectionInEditor
`public static void CreateSelectionInEditor(List<GameEntity> gameEntities, string name)`

**Purpose:** Constructs a new `selection in editor` entity and returns it to the caller.

```csharp
// Static call; no instance required
Utilities.CreateSelectionInEditor(gameEntities, "example");
```

### SelectEntities
`public static void SelectEntities(List<GameEntity> gameEntities)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.SelectEntities(gameEntities);
```

### GetEntitiesOfSelectionSet
`public static void GetEntitiesOfSelectionSet(string selectionSetName, ref List<GameEntity> gameEntities)`

**Purpose:** Reads and returns the `entities of selection set` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetEntitiesOfSelectionSet("example", gameEntities);
```

### AddCommandLineFunction
`public static void AddCommandLineFunction(string concatName)`

**Purpose:** Adds `command line function` to the current collection or state.

```csharp
// Static call; no instance required
Utilities.AddCommandLineFunction("example");
```

### GetNumberOfShaderCompilationsInProgress
`public static int GetNumberOfShaderCompilationsInProgress()`

**Purpose:** Reads and returns the `number of shader compilations in progress` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetNumberOfShaderCompilationsInProgress();
```

### IsDetailedSoundLogOn
`public static int IsDetailedSoundLogOn()`

**Purpose:** Determines whether the current object is in the `detailed sound log on` state or condition.

```csharp
// Static call; no instance required
Utilities.IsDetailedSoundLogOn();
```

### GetCurrentCpuMemoryUsageMB
`public static ulong GetCurrentCpuMemoryUsageMB()`

**Purpose:** Reads and returns the `current cpu memory usage m b` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetCurrentCpuMemoryUsageMB();
```

### GetGpuMemoryOfAllocationGroup
`public static ulong GetGpuMemoryOfAllocationGroup(string name)`

**Purpose:** Reads and returns the `gpu memory of allocation group` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetGpuMemoryOfAllocationGroup("example");
```

### GetGPUMemoryStats
`public static void GetGPUMemoryStats(ref float totalMemory, ref float renderTargetMemory, ref float depthTargetMemory, ref float srvMemory, ref float bufferMemory)`

**Purpose:** Reads and returns the `g p u memory stats` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetGPUMemoryStats(totalMemory, renderTargetMemory, depthTargetMemory, srvMemory, bufferMemory);
```

### GetDetailedGPUMemoryData
`public static void GetDetailedGPUMemoryData(ref int totalMemoryAllocated, ref int totalMemoryUsed, ref int emptyChunkTotalSize)`

**Purpose:** Reads and returns the `detailed g p u memory data` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetDetailedGPUMemoryData(totalMemoryAllocated, totalMemoryUsed, emptyChunkTotalSize);
```

### SetRenderMode
`public static void SetRenderMode(EngineRenderDisplayMode mode)`

**Purpose:** Assigns a new value to `render mode` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetRenderMode(mode);
```

### SetForceDrawEntityID
`public static void SetForceDrawEntityID(bool value)`

**Purpose:** Assigns a new value to `force draw entity i d` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetForceDrawEntityID(false);
```

### AddPerformanceReportToken
`public static void AddPerformanceReportToken(string performance_type, string name, float loading_time)`

**Purpose:** Adds `performance report token` to the current collection or state.

```csharp
// Static call; no instance required
Utilities.AddPerformanceReportToken("example", "example", 0);
```

### AddSceneObjectReport
`public static void AddSceneObjectReport(string scene_name, string report_name, float report_value)`

**Purpose:** Adds `scene object report` to the current collection or state.

```csharp
// Static call; no instance required
Utilities.AddSceneObjectReport("example", "example", 0);
```

### OutputPerformanceReports
`public static void OutputPerformanceReports()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.OutputPerformanceReports();
```

### TakeScreenshot
`public static void TakeScreenshot(PlatformFilePath path)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.TakeScreenshot(path);
```

### TakeScreenshot
`public static void TakeScreenshot(string path)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.TakeScreenshot("example");
```

### SetAllocationAlwaysValidScene
`public static void SetAllocationAlwaysValidScene(Scene scene)`

**Purpose:** Assigns a new value to `allocation always valid scene` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetAllocationAlwaysValidScene(scene);
```

### CheckResourceModifications
`public static void CheckResourceModifications()`

**Purpose:** Verifies whether `resource modifications` holds true for the current object.

```csharp
// Static call; no instance required
Utilities.CheckResourceModifications();
```

### SetGraphicsPreset
`public static void SetGraphicsPreset(int preset)`

**Purpose:** Assigns a new value to `graphics preset` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetGraphicsPreset(0);
```

### GetLocalOutputPath
`public static string GetLocalOutputPath()`

**Purpose:** Reads and returns the `local output path` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetLocalOutputPath();
```

### GetPCInfo
`public static string GetPCInfo()`

**Purpose:** Reads and returns the `p c info` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetPCInfo();
```

### GetGPUMemoryMB
`public static int GetGPUMemoryMB()`

**Purpose:** Reads and returns the `g p u memory m b` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetGPUMemoryMB();
```

### GetCurrentEstimatedGPUMemoryCostMB
`public static int GetCurrentEstimatedGPUMemoryCostMB()`

**Purpose:** Reads and returns the `current estimated g p u memory cost m b` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetCurrentEstimatedGPUMemoryCostMB();
```

### DumpGPUMemoryStatistics
`public static void DumpGPUMemoryStatistics(string filePath)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.DumpGPUMemoryStatistics("example");
```

### SaveDataAsTexture
`public static int SaveDataAsTexture(string path, int width, int height, float data)`

**Purpose:** Writes `data as texture` to persistent storage or a stream.

```csharp
// Static call; no instance required
Utilities.SaveDataAsTexture("example", 0, 0, 0);
```

### ClearOldResourcesAndObjects
`public static void ClearOldResourcesAndObjects()`

**Purpose:** Removes all `old resources and objects` from the current object.

```csharp
// Static call; no instance required
Utilities.ClearOldResourcesAndObjects();
```

### LoadVirtualTextureTileset
`public static void LoadVirtualTextureTileset(string name)`

**Purpose:** Reads `virtual texture tileset` from persistent storage or a stream.

```csharp
// Static call; no instance required
Utilities.LoadVirtualTextureTileset("example");
```

### GetDeltaTime
`public static float GetDeltaTime(int timerId)`

**Purpose:** Reads and returns the `delta time` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetDeltaTime(0);
```

### LoadSkyBoxes
`public static void LoadSkyBoxes()`

**Purpose:** Reads `sky boxes` from persistent storage or a stream.

```csharp
// Static call; no instance required
Utilities.LoadSkyBoxes();
```

### GetApplicationName
`public static string GetApplicationName()`

**Purpose:** Reads and returns the `application name` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetApplicationName();
```

### OpenConsoleStorePage
`public static void OpenConsoleStorePage(string productId)`

**Purpose:** Opens the resource or UI associated with `console store page`.

```csharp
// Static call; no instance required
Utilities.OpenConsoleStorePage("example");
```

### SetWindowTitle
`public static void SetWindowTitle(string title)`

**Purpose:** Assigns a new value to `window title` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetWindowTitle("example");
```

### ProcessWindowTitle
`public static string ProcessWindowTitle(string title)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.ProcessWindowTitle("example");
```

### GetCurrentProcessID
`public static uint GetCurrentProcessID()`

**Purpose:** Reads and returns the `current process i d` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetCurrentProcessID();
```

### DoDelayedexit
`public static void DoDelayedexit(int returnCode)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.DoDelayedexit(0);
```

### SetAssertionsAndWarningsSetExitCode
`public static void SetAssertionsAndWarningsSetExitCode(bool value)`

**Purpose:** Assigns a new value to `assertions and warnings set exit code` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetAssertionsAndWarningsSetExitCode(false);
```

### SetReportMode
`public static void SetReportMode(bool reportMode)`

**Purpose:** Assigns a new value to `report mode` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetReportMode(false);
```

### SetAssertionAtShaderCompile
`public static void SetAssertionAtShaderCompile(bool value)`

**Purpose:** Assigns a new value to `assertion at shader compile` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetAssertionAtShaderCompile(false);
```

### SetCrashReportCustomString
`public static void SetCrashReportCustomString(string customString)`

**Purpose:** Assigns a new value to `crash report custom string` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetCrashReportCustomString("example");
```

### SetCrashReportCustomStack
`public static void SetCrashReportCustomStack(string customStack)`

**Purpose:** Assigns a new value to `crash report custom stack` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetCrashReportCustomStack("example");
```

### GetSteamAppId
`public static int GetSteamAppId()`

**Purpose:** Reads and returns the `steam app id` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetSteamAppId();
```

### SetForceVsync
`public static void SetForceVsync(bool value)`

**Purpose:** Assigns a new value to `force vsync` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetForceVsync(false);
```

### LoadBannerlordConfigFile
`public static string LoadBannerlordConfigFile()`

**Purpose:** Reads `bannerlord config file` from persistent storage or a stream.

```csharp
// Static call; no instance required
Utilities.LoadBannerlordConfigFile();
```

### SaveConfigFile
`public static SaveResult SaveConfigFile(string configProperties)`

**Purpose:** Writes `config file` to persistent storage or a stream.

```csharp
// Static call; no instance required
Utilities.SaveConfigFile("example");
```

### OpenOnscreenKeyboard
`public static void OpenOnscreenKeyboard(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum)`

**Purpose:** Opens the resource or UI associated with `onscreen keyboard`.

```csharp
// Static call; no instance required
Utilities.OpenOnscreenKeyboard("example", "example", 0, 0);
```

### GetSystemLanguage
`public static string GetSystemLanguage()`

**Purpose:** Reads and returns the `system language` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetSystemLanguage();
```

### RegisterGPUAllocationGroup
`public static int RegisterGPUAllocationGroup(string name)`

**Purpose:** Registers `g p u allocation group` with the current system so it can later be observed or dispatched.

```csharp
// Static call; no instance required
Utilities.RegisterGPUAllocationGroup("example");
```

### GetMemoryUsageOfCategory
`public static int GetMemoryUsageOfCategory(int category)`

**Purpose:** Reads and returns the `memory usage of category` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetMemoryUsageOfCategory(0);
```

### GetDetailedXBOXMemoryInfo
`public static string GetDetailedXBOXMemoryInfo()`

**Purpose:** Reads and returns the `detailed x b o x memory info` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetDetailedXBOXMemoryInfo();
```

### SetFrameLimiterWithSleep
`public static void SetFrameLimiterWithSleep(bool value)`

**Purpose:** Assigns a new value to `frame limiter with sleep` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetFrameLimiterWithSleep(false);
```

### GetFrameLimiterWithSleep
`public static bool GetFrameLimiterWithSleep()`

**Purpose:** Reads and returns the `frame limiter with sleep` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetFrameLimiterWithSleep();
```

### GetPossibleCommandLineStartingWith
`public static string GetPossibleCommandLineStartingWith(string command, int index)`

**Purpose:** Reads and returns the `possible command line starting with` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetPossibleCommandLineStartingWith("example", 0);
```

### IsDevkit
`public static bool IsDevkit()`

**Purpose:** Determines whether the current object is in the `devkit` state or condition.

```csharp
// Static call; no instance required
Utilities.IsDevkit();
```

### IsLockhartPlatform
`public static bool IsLockhartPlatform()`

**Purpose:** Determines whether the current object is in the `lockhart platform` state or condition.

```csharp
// Static call; no instance required
Utilities.IsLockhartPlatform();
```

### GetVertexBufferChunkSystemMemoryUsage
`public static int GetVertexBufferChunkSystemMemoryUsage()`

**Purpose:** Reads and returns the `vertex buffer chunk system memory usage` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetVertexBufferChunkSystemMemoryUsage();
```

### GetBuildNumber
`public static int GetBuildNumber()`

**Purpose:** Reads and returns the `build number` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetBuildNumber();
```

### GetApplicationVersionWithBuildNumber
`public static ApplicationVersion GetApplicationVersionWithBuildNumber()`

**Purpose:** Reads and returns the `application version with build number` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetApplicationVersionWithBuildNumber();
```

### ParallelFor
`public static void ParallelFor(int startIndex, int endIndex, long curKey, int grainSize)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.ParallelFor(0, 0, 0, 0);
```

### ParallelForWithDt
`public static void ParallelForWithDt(int startIndex, int endIndex, long curKey, int grainSize)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.ParallelForWithDt(0, 0, 0, 0);
```

### ParallelForWithoutRenderThread
`public static void ParallelForWithoutRenderThread(int startIndex, int endIndex, long curKey, int grainSize)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.ParallelForWithoutRenderThread(0, 0, 0, 0);
```

### ParallelForWithoutRenderThreadDt
`public static void ParallelForWithoutRenderThreadDt(int startIndex, int endIndex, long curKey, int grainSize)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.ParallelForWithoutRenderThreadDt(0, 0, 0, 0);
```

### ClearShaderMemory
`public static void ClearShaderMemory()`

**Purpose:** Removes all `shader memory` from the current object.

```csharp
// Static call; no instance required
Utilities.ClearShaderMemory();
```

### RegisterMeshForGPUMorph
`public static void RegisterMeshForGPUMorph(string metaMeshName)`

**Purpose:** Registers `mesh for g p u morph` with the current system so it can later be observed or dispatched.

```csharp
// Static call; no instance required
Utilities.RegisterMeshForGPUMorph("example");
```

### GetMainThreadId
`public static ulong GetMainThreadId()`

**Purpose:** Reads and returns the `main thread id` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetMainThreadId();
```

### GetCurrentThreadId
`public static ulong GetCurrentThreadId()`

**Purpose:** Reads and returns the `current thread id` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetCurrentThreadId();
```

### SetWatchdogValue
`public static void SetWatchdogValue(string fileName, string groupName, string key, string value)`

**Purpose:** Assigns a new value to `watchdog value` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetWatchdogValue("example", "example", "example", "example");
```

### SetWatchdogAutoreport
`public static void SetWatchdogAutoreport(bool enabled)`

**Purpose:** Assigns a new value to `watchdog autoreport` and updates the object's internal state.

```csharp
// Static call; no instance required
Utilities.SetWatchdogAutoreport(false);
```

### DetachWatchdog
`public static void DetachWatchdog()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.DetachWatchdog();
```

### GetPlatformModulePaths
`public static string GetPlatformModulePaths()`

**Purpose:** Reads and returns the `platform module paths` value held by the current object.

```csharp
// Static call; no instance required
Utilities.GetPlatformModulePaths();
```

### IsAsyncPhysicsThread
`public static bool IsAsyncPhysicsThread()`

**Purpose:** Determines whether the current object is in the `async physics thread` state or condition.

```csharp
// Static call; no instance required
Utilities.IsAsyncPhysicsThread();
```

### StartLoadingStuckCheckState
`public static void StartLoadingStuckCheckState(float timeoutThresholdSeconds)`

**Purpose:** Starts the `loading stuck check state` flow or state machine.

```csharp
// Static call; no instance required
Utilities.StartLoadingStuckCheckState(0);
```

### EndLoadingStuckCheckState
`public static void EndLoadingStuckCheckState()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Utilities.EndLoadingStuckCheckState();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Utilities utilities = ...;
utilities.Dispose();
```

## See Also

- [Area Index](../)