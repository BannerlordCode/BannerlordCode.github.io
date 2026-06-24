<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Utilities`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Utilities

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class Utilities`
**Base:** 无
**File:** `TaleWorlds.Engine/Utilities.cs`

## 概述

`Utilities` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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

### IsOnlyCoreContentEnabled
`public static bool IsOnlyCoreContentEnabled()`

**用途 / Purpose:** 处理 `is only core content enabled` 相关逻辑。

### FindMeshesWithoutLods
`public static void FindMeshesWithoutLods(string module_name)`

**用途 / Purpose:** 处理 `find meshes without lods` 相关逻辑。

### SetDisableDumpGeneration
`public static void SetDisableDumpGeneration(bool value)`

**用途 / Purpose:** 设置 `disable dump generation` 的值或状态。

### SetPrintCallstackAtCrahses
`public static void SetPrintCallstackAtCrahses(bool value)`

**用途 / Purpose:** 设置 `print callstack at crahses` 的值或状态。

### GetModulesNames
`public static string GetModulesNames()`

**用途 / Purpose:** 获取 `modules names` 的当前值。

### GetFullFilePathOfScene
`public static string GetFullFilePathOfScene(string sceneName)`

**用途 / Purpose:** 获取 `full file path of scene` 的当前值。

### TryGetFullFilePathOfScene
`public static bool TryGetFullFilePathOfScene(string sceneName, out string fullPath)`

**用途 / Purpose:** 尝试获取 `get full file path of scene`，通常以 out 参数返回结果。

### TryGetUniqueIdentifiersForScene
`public static bool TryGetUniqueIdentifiersForScene(string sceneName, out UniqueSceneId identifiers)`

**用途 / Purpose:** 尝试获取 `get unique identifiers for scene`，通常以 out 参数返回结果。

### TryGetUniqueIdentifiersForSceneFile
`public static bool TryGetUniqueIdentifiersForSceneFile(string xsceneFilePath, out UniqueSceneId identifiers)`

**用途 / Purpose:** 尝试获取 `get unique identifiers for scene file`，通常以 out 参数返回结果。

### PairSceneNameToModuleName
`public static void PairSceneNameToModuleName(string sceneName, string moduleName)`

**用途 / Purpose:** 处理 `pair scene name to module name` 相关逻辑。

### GetSingleModuleScenesOfModule
`public static string GetSingleModuleScenesOfModule(string moduleName)`

**用途 / Purpose:** 获取 `single module scenes of module` 的当前值。

### GetFullCommandLineString
`public static string GetFullCommandLineString()`

**用途 / Purpose:** 获取 `full command line string` 的当前值。

### SetScreenTextRenderingState
`public static void SetScreenTextRenderingState(bool state)`

**用途 / Purpose:** 设置 `screen text rendering state` 的值或状态。

### SetMessageLineRenderingState
`public static void SetMessageLineRenderingState(bool state)`

**用途 / Purpose:** 设置 `message line rendering state` 的值或状态。

### CheckIfTerrainShaderHeaderGenerationFinished
`public static bool CheckIfTerrainShaderHeaderGenerationFinished()`

**用途 / Purpose:** 处理 `check if terrain shader header generation finished` 相关逻辑。

### GenerateTerrainShaderHeaders
`public static void GenerateTerrainShaderHeaders(string targetPlatform, string targetConfig, string output_path)`

**用途 / Purpose:** 处理 `generate terrain shader headers` 相关逻辑。

### CompileTerrainShadersDist
`public static void CompileTerrainShadersDist(string targetPlatform, string targetConfig, string output_path)`

**用途 / Purpose:** 处理 `compile terrain shaders dist` 相关逻辑。

### SetCrashOnAsserts
`public static void SetCrashOnAsserts(bool val)`

**用途 / Purpose:** 设置 `crash on asserts` 的值或状态。

### SetCrashOnWarnings
`public static void SetCrashOnWarnings(bool val)`

**用途 / Purpose:** 设置 `crash on warnings` 的值或状态。

### SetCreateDumpOnWarnings
`public static void SetCreateDumpOnWarnings(bool val)`

**用途 / Purpose:** 设置 `create dump on warnings` 的值或状态。

### ToggleRender
`public static void ToggleRender()`

**用途 / Purpose:** 处理 `toggle render` 相关逻辑。

### SetRenderAgents
`public static void SetRenderAgents(bool value)`

**用途 / Purpose:** 设置 `render agents` 的值或状态。

### CheckShaderCompilation
`public static bool CheckShaderCompilation()`

**用途 / Purpose:** 处理 `check shader compilation` 相关逻辑。

### CompileAllShaders
`public static void CompileAllShaders(string targetPlatform)`

**用途 / Purpose:** 处理 `compile all shaders` 相关逻辑。

### GetExecutableWorkingDirectory
`public static string GetExecutableWorkingDirectory()`

**用途 / Purpose:** 获取 `executable working directory` 的当前值。

### SetDumpFolderPath
`public static void SetDumpFolderPath(string path)`

**用途 / Purpose:** 设置 `dump folder path` 的值或状态。

### CheckSceneForProblems
`public static void CheckSceneForProblems(string sceneName)`

**用途 / Purpose:** 处理 `check scene for problems` 相关逻辑。

### SetCoreGameState
`public static void SetCoreGameState(int state)`

**用途 / Purpose:** 设置 `core game state` 的值或状态。

### GetCoreGameState
`public static int GetCoreGameState()`

**用途 / Purpose:** 获取 `core game state` 的当前值。

### ExecuteCommandLineCommand
`public static string ExecuteCommandLineCommand(string command)`

**用途 / Purpose:** 执行 `command line command` 操作或流程。

### QuitGame
`public static void QuitGame()`

**用途 / Purpose:** 处理 `quit game` 相关逻辑。

### ExitProcess
`public static void ExitProcess(int exitCode)`

**用途 / Purpose:** 处理 `exit process` 相关逻辑。

### GetBasePath
`public static string GetBasePath()`

**用途 / Purpose:** 获取 `base path` 的当前值。

### GetVisualTestsValidatePath
`public static string GetVisualTestsValidatePath()`

**用途 / Purpose:** 获取 `visual tests validate path` 的当前值。

### GetVisualTestsTestFilesPath
`public static string GetVisualTestsTestFilesPath()`

**用途 / Purpose:** 获取 `visual tests test files path` 的当前值。

### GetAttachmentsPath
`public static string GetAttachmentsPath()`

**用途 / Purpose:** 获取 `attachments path` 的当前值。

### StartScenePerformanceReport
`public static void StartScenePerformanceReport(string folderPath)`

**用途 / Purpose:** 处理 `start scene performance report` 相关逻辑。

### IsSceneReportFinished
`public static bool IsSceneReportFinished()`

**用途 / Purpose:** 处理 `is scene report finished` 相关逻辑。

### GetFps
`public static float GetFps()`

**用途 / Purpose:** 获取 `fps` 的当前值。

### GetMainFps
`public static float GetMainFps()`

**用途 / Purpose:** 获取 `main fps` 的当前值。

### GetRendererFps
`public static float GetRendererFps()`

**用途 / Purpose:** 获取 `renderer fps` 的当前值。

### EnableSingleGPUQueryPerFrame
`public static void EnableSingleGPUQueryPerFrame()`

**用途 / Purpose:** 处理 `enable single g p u query per frame` 相关逻辑。

### ClearDecalAtlas
`public static void ClearDecalAtlas(DecalAtlasGroup atlasGroup)`

**用途 / Purpose:** 处理 `clear decal atlas` 相关逻辑。

### FlushManagedObjectsMemory
`public static void FlushManagedObjectsMemory()`

**用途 / Purpose:** 处理 `flush managed objects memory` 相关逻辑。

### OnLoadingWindowEnabled
`public static void OnLoadingWindowEnabled()`

**用途 / Purpose:** 当 `loading window enabled` 事件触发时调用此方法。

### DebugSetGlobalLoadingWindowState
`public static void DebugSetGlobalLoadingWindowState(bool newState)`

**用途 / Purpose:** 处理 `debug set global loading window state` 相关逻辑。

### OnLoadingWindowDisabled
`public static void OnLoadingWindowDisabled()`

**用途 / Purpose:** 当 `loading window disabled` 事件触发时调用此方法。

### DisableGlobalLoadingWindow
`public static void DisableGlobalLoadingWindow()`

**用途 / Purpose:** 处理 `disable global loading window` 相关逻辑。

### EnableGlobalLoadingWindow
`public static void EnableGlobalLoadingWindow()`

**用途 / Purpose:** 处理 `enable global loading window` 相关逻辑。

### EnableGlobalEditDataCacher
`public static void EnableGlobalEditDataCacher()`

**用途 / Purpose:** 处理 `enable global edit data cacher` 相关逻辑。

### DoFullBakeAllLevelsAutomated
`public static void DoFullBakeAllLevelsAutomated(string module, string scene)`

**用途 / Purpose:** 处理 `do full bake all levels automated` 相关逻辑。

### GetReturnCode
`public static int GetReturnCode()`

**用途 / Purpose:** 获取 `return code` 的当前值。

### DisableGlobalEditDataCacher
`public static void DisableGlobalEditDataCacher()`

**用途 / Purpose:** 处理 `disable global edit data cacher` 相关逻辑。

### DoFullBakeSingleLevelAutomated
`public static void DoFullBakeSingleLevelAutomated(string module, string scene)`

**用途 / Purpose:** 处理 `do full bake single level automated` 相关逻辑。

### DoLightOnlyBakeSingleLevelAutomated
`public static void DoLightOnlyBakeSingleLevelAutomated(string module, string scene)`

**用途 / Purpose:** 处理 `do light only bake single level automated` 相关逻辑。

### DoLightOnlyBakeAllLevelsAutomated
`public static void DoLightOnlyBakeAllLevelsAutomated(string module, string scene)`

**用途 / Purpose:** 处理 `do light only bake all levels automated` 相关逻辑。

### DidAutomatedGIBakeFinished
`public static bool DidAutomatedGIBakeFinished()`

**用途 / Purpose:** 处理 `did automated g i bake finished` 相关逻辑。

### GetSelectedEntities
`public static void GetSelectedEntities(ref List<GameEntity> gameEntities)`

**用途 / Purpose:** 获取 `selected entities` 的当前值。

### DeleteEntitiesInEditorScene
`public static void DeleteEntitiesInEditorScene(List<GameEntity> gameEntities)`

**用途 / Purpose:** 处理 `delete entities in editor scene` 相关逻辑。

### CreateSelectionInEditor
`public static void CreateSelectionInEditor(List<GameEntity> gameEntities, string name)`

**用途 / Purpose:** 创建一个 `selection in editor` 实例或对象。

### SelectEntities
`public static void SelectEntities(List<GameEntity> gameEntities)`

**用途 / Purpose:** 处理 `select entities` 相关逻辑。

### GetEntitiesOfSelectionSet
`public static void GetEntitiesOfSelectionSet(string selectionSetName, ref List<GameEntity> gameEntities)`

**用途 / Purpose:** 获取 `entities of selection set` 的当前值。

### AddCommandLineFunction
`public static void AddCommandLineFunction(string concatName)`

**用途 / Purpose:** 向当前集合/状态中添加 `command line function`。

### GetNumberOfShaderCompilationsInProgress
`public static int GetNumberOfShaderCompilationsInProgress()`

**用途 / Purpose:** 获取 `number of shader compilations in progress` 的当前值。

### IsDetailedSoundLogOn
`public static int IsDetailedSoundLogOn()`

**用途 / Purpose:** 处理 `is detailed sound log on` 相关逻辑。

### GetCurrentCpuMemoryUsageMB
`public static ulong GetCurrentCpuMemoryUsageMB()`

**用途 / Purpose:** 获取 `current cpu memory usage m b` 的当前值。

### GetGpuMemoryOfAllocationGroup
`public static ulong GetGpuMemoryOfAllocationGroup(string name)`

**用途 / Purpose:** 获取 `gpu memory of allocation group` 的当前值。

### GetGPUMemoryStats
`public static void GetGPUMemoryStats(ref float totalMemory, ref float renderTargetMemory, ref float depthTargetMemory, ref float srvMemory, ref float bufferMemory)`

**用途 / Purpose:** 获取 `g p u memory stats` 的当前值。

### GetDetailedGPUMemoryData
`public static void GetDetailedGPUMemoryData(ref int totalMemoryAllocated, ref int totalMemoryUsed, ref int emptyChunkTotalSize)`

**用途 / Purpose:** 获取 `detailed g p u memory data` 的当前值。

### SetRenderMode
`public static void SetRenderMode(Utilities.EngineRenderDisplayMode mode)`

**用途 / Purpose:** 设置 `render mode` 的值或状态。

### SetForceDrawEntityID
`public static void SetForceDrawEntityID(bool value)`

**用途 / Purpose:** 设置 `force draw entity i d` 的值或状态。

### AddPerformanceReportToken
`public static void AddPerformanceReportToken(string performance_type, string name, float loading_time)`

**用途 / Purpose:** 向当前集合/状态中添加 `performance report token`。

### AddSceneObjectReport
`public static void AddSceneObjectReport(string scene_name, string report_name, float report_value)`

**用途 / Purpose:** 向当前集合/状态中添加 `scene object report`。

### OutputPerformanceReports
`public static void OutputPerformanceReports()`

**用途 / Purpose:** 处理 `output performance reports` 相关逻辑。

### TakeScreenshot
`public static void TakeScreenshot(PlatformFilePath path)`

**用途 / Purpose:** 处理 `take screenshot` 相关逻辑。

### TakeScreenshot
`public static void TakeScreenshot(string path)`

**用途 / Purpose:** 处理 `take screenshot` 相关逻辑。

### SetAllocationAlwaysValidScene
`public static void SetAllocationAlwaysValidScene(Scene scene)`

**用途 / Purpose:** 设置 `allocation always valid scene` 的值或状态。

### CheckResourceModifications
`public static void CheckResourceModifications()`

**用途 / Purpose:** 处理 `check resource modifications` 相关逻辑。

### SetGraphicsPreset
`public static void SetGraphicsPreset(int preset)`

**用途 / Purpose:** 设置 `graphics preset` 的值或状态。

### GetLocalOutputPath
`public static string GetLocalOutputPath()`

**用途 / Purpose:** 获取 `local output path` 的当前值。

### GetPCInfo
`public static string GetPCInfo()`

**用途 / Purpose:** 获取 `p c info` 的当前值。

### GetGPUMemoryMB
`public static int GetGPUMemoryMB()`

**用途 / Purpose:** 获取 `g p u memory m b` 的当前值。

### GetCurrentEstimatedGPUMemoryCostMB
`public static int GetCurrentEstimatedGPUMemoryCostMB()`

**用途 / Purpose:** 获取 `current estimated g p u memory cost m b` 的当前值。

### DumpGPUMemoryStatistics
`public static void DumpGPUMemoryStatistics(string filePath)`

**用途 / Purpose:** 处理 `dump g p u memory statistics` 相关逻辑。

### SaveDataAsTexture
`public static int SaveDataAsTexture(string path, int width, int height, float data)`

**用途 / Purpose:** 保存 `data as texture` 数据。

### ClearOldResourcesAndObjects
`public static void ClearOldResourcesAndObjects()`

**用途 / Purpose:** 处理 `clear old resources and objects` 相关逻辑。

### LoadVirtualTextureTileset
`public static void LoadVirtualTextureTileset(string name)`

**用途 / Purpose:** 加载 `virtual texture tileset` 数据。

### GetDeltaTime
`public static float GetDeltaTime(int timerId)`

**用途 / Purpose:** 获取 `delta time` 的当前值。

### LoadSkyBoxes
`public static void LoadSkyBoxes()`

**用途 / Purpose:** 加载 `sky boxes` 数据。

### GetApplicationName
`public static string GetApplicationName()`

**用途 / Purpose:** 获取 `application name` 的当前值。

### OpenNavalDlcPurchasePage
`public static void OpenNavalDlcPurchasePage()`

**用途 / Purpose:** 处理 `open naval dlc purchase page` 相关逻辑。

### SetWindowTitle
`public static void SetWindowTitle(string title)`

**用途 / Purpose:** 设置 `window title` 的值或状态。

### ProcessWindowTitle
`public static string ProcessWindowTitle(string title)`

**用途 / Purpose:** 处理 `process window title` 相关逻辑。

### GetCurrentProcessID
`public static uint GetCurrentProcessID()`

**用途 / Purpose:** 获取 `current process i d` 的当前值。

### DoDelayedexit
`public static void DoDelayedexit(int returnCode)`

**用途 / Purpose:** 处理 `do delayedexit` 相关逻辑。

### SetAssertionsAndWarningsSetExitCode
`public static void SetAssertionsAndWarningsSetExitCode(bool value)`

**用途 / Purpose:** 设置 `assertions and warnings set exit code` 的值或状态。

### SetReportMode
`public static void SetReportMode(bool reportMode)`

**用途 / Purpose:** 设置 `report mode` 的值或状态。

### SetAssertionAtShaderCompile
`public static void SetAssertionAtShaderCompile(bool value)`

**用途 / Purpose:** 设置 `assertion at shader compile` 的值或状态。

### SetCrashReportCustomString
`public static void SetCrashReportCustomString(string customString)`

**用途 / Purpose:** 设置 `crash report custom string` 的值或状态。

### SetCrashReportCustomStack
`public static void SetCrashReportCustomStack(string customStack)`

**用途 / Purpose:** 设置 `crash report custom stack` 的值或状态。

### GetSteamAppId
`public static int GetSteamAppId()`

**用途 / Purpose:** 获取 `steam app id` 的当前值。

### SetForceVsync
`public static void SetForceVsync(bool value)`

**用途 / Purpose:** 设置 `force vsync` 的值或状态。

### LoadBannerlordConfigFile
`public static string LoadBannerlordConfigFile()`

**用途 / Purpose:** 加载 `bannerlord config file` 数据。

### SaveConfigFile
`public static SaveResult SaveConfigFile(string configProperties)`

**用途 / Purpose:** 保存 `config file` 数据。

### OpenOnscreenKeyboard
`public static void OpenOnscreenKeyboard(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum)`

**用途 / Purpose:** 处理 `open onscreen keyboard` 相关逻辑。

### GetSystemLanguage
`public static string GetSystemLanguage()`

**用途 / Purpose:** 获取 `system language` 的当前值。

### RegisterGPUAllocationGroup
`public static int RegisterGPUAllocationGroup(string name)`

**用途 / Purpose:** 处理 `register g p u allocation group` 相关逻辑。

### GetMemoryUsageOfCategory
`public static int GetMemoryUsageOfCategory(int category)`

**用途 / Purpose:** 获取 `memory usage of category` 的当前值。

### GetDetailedXBOXMemoryInfo
`public static string GetDetailedXBOXMemoryInfo()`

**用途 / Purpose:** 获取 `detailed x b o x memory info` 的当前值。

### SetFrameLimiterWithSleep
`public static void SetFrameLimiterWithSleep(bool value)`

**用途 / Purpose:** 设置 `frame limiter with sleep` 的值或状态。

### GetFrameLimiterWithSleep
`public static bool GetFrameLimiterWithSleep()`

**用途 / Purpose:** 获取 `frame limiter with sleep` 的当前值。

### GetVertexBufferChunkSystemMemoryUsage
`public static int GetVertexBufferChunkSystemMemoryUsage()`

**用途 / Purpose:** 获取 `vertex buffer chunk system memory usage` 的当前值。

### GetBuildNumber
`public static int GetBuildNumber()`

**用途 / Purpose:** 获取 `build number` 的当前值。

### GetApplicationVersionWithBuildNumber
`public static ApplicationVersion GetApplicationVersionWithBuildNumber()`

**用途 / Purpose:** 获取 `application version with build number` 的当前值。

### ParallelFor
`public static void ParallelFor(int startIndex, int endIndex, long curKey, int grainSize)`

**用途 / Purpose:** 处理 `parallel for` 相关逻辑。

### ClearShaderMemory
`public static void ClearShaderMemory()`

**用途 / Purpose:** 处理 `clear shader memory` 相关逻辑。

### RegisterMeshForGPUMorph
`public static void RegisterMeshForGPUMorph(string metaMeshName)`

**用途 / Purpose:** 处理 `register mesh for g p u morph` 相关逻辑。

### ParallelForWithDt
`public static void ParallelForWithDt(int startIndex, int endIndex, long curKey, int grainSize)`

**用途 / Purpose:** 处理 `parallel for with dt` 相关逻辑。

### GetMainThreadId
`public static ulong GetMainThreadId()`

**用途 / Purpose:** 获取 `main thread id` 的当前值。

### GetCurrentThreadId
`public static ulong GetCurrentThreadId()`

**用途 / Purpose:** 获取 `current thread id` 的当前值。

### SetWatchdogValue
`public static void SetWatchdogValue(string fileName, string groupName, string key, string value)`

**用途 / Purpose:** 设置 `watchdog value` 的值或状态。

### SetWatchdogAutoreport
`public static void SetWatchdogAutoreport(bool enabled)`

**用途 / Purpose:** 设置 `watchdog autoreport` 的值或状态。

### DetachWatchdog
`public static void DetachWatchdog()`

**用途 / Purpose:** 处理 `detach watchdog` 相关逻辑。

### GetPlatformModulePaths
`public static string GetPlatformModulePaths()`

**用途 / Purpose:** 获取 `platform module paths` 的当前值。

### IsAsyncPhysicsThread
`public static bool IsAsyncPhysicsThread()`

**用途 / Purpose:** 处理 `is async physics thread` 相关逻辑。

### Dispose
`public void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

## 使用示例

```csharp
Utilities.ConstructMainThreadJob(function, parameters);
```

## 参见

- [完整类目录](../catalog)