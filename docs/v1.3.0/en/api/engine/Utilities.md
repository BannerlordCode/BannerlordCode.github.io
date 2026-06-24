<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Utilities`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Utilities

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class Utilities`
**Base:** none
**File:** `TaleWorlds.Engine/Utilities.cs`

## Overview

`Utilities` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

### IsOnlyCoreContentEnabled
`public static bool IsOnlyCoreContentEnabled()`

**Purpose:** Handles logic related to `is only core content enabled`.

### FindMeshesWithoutLods
`public static void FindMeshesWithoutLods(string module_name)`

**Purpose:** Handles logic related to `find meshes without lods`.

### SetDisableDumpGeneration
`public static void SetDisableDumpGeneration(bool value)`

**Purpose:** Sets the value or state of `disable dump generation`.

### SetPrintCallstackAtCrahses
`public static void SetPrintCallstackAtCrahses(bool value)`

**Purpose:** Sets the value or state of `print callstack at crahses`.

### GetModulesNames
`public static string GetModulesNames()`

**Purpose:** Gets the current value of `modules names`.

### GetFullFilePathOfScene
`public static string GetFullFilePathOfScene(string sceneName)`

**Purpose:** Gets the current value of `full file path of scene`.

### TryGetFullFilePathOfScene
`public static bool TryGetFullFilePathOfScene(string sceneName, out string fullPath)`

**Purpose:** Attempts to get `get full file path of scene`, usually returning the result in an out parameter.

### TryGetUniqueIdentifiersForScene
`public static bool TryGetUniqueIdentifiersForScene(string sceneName, out UniqueSceneId identifiers)`

**Purpose:** Attempts to get `get unique identifiers for scene`, usually returning the result in an out parameter.

### TryGetUniqueIdentifiersForSceneFile
`public static bool TryGetUniqueIdentifiersForSceneFile(string xsceneFilePath, out UniqueSceneId identifiers)`

**Purpose:** Attempts to get `get unique identifiers for scene file`, usually returning the result in an out parameter.

### PairSceneNameToModuleName
`public static void PairSceneNameToModuleName(string sceneName, string moduleName)`

**Purpose:** Handles logic related to `pair scene name to module name`.

### GetSingleModuleScenesOfModule
`public static string GetSingleModuleScenesOfModule(string moduleName)`

**Purpose:** Gets the current value of `single module scenes of module`.

### GetFullCommandLineString
`public static string GetFullCommandLineString()`

**Purpose:** Gets the current value of `full command line string`.

### SetScreenTextRenderingState
`public static void SetScreenTextRenderingState(bool state)`

**Purpose:** Sets the value or state of `screen text rendering state`.

### SetMessageLineRenderingState
`public static void SetMessageLineRenderingState(bool state)`

**Purpose:** Sets the value or state of `message line rendering state`.

### CheckIfTerrainShaderHeaderGenerationFinished
`public static bool CheckIfTerrainShaderHeaderGenerationFinished()`

**Purpose:** Handles logic related to `check if terrain shader header generation finished`.

### GenerateTerrainShaderHeaders
`public static void GenerateTerrainShaderHeaders(string targetPlatform, string targetConfig, string output_path)`

**Purpose:** Handles logic related to `generate terrain shader headers`.

### CompileTerrainShadersDist
`public static void CompileTerrainShadersDist(string targetPlatform, string targetConfig, string output_path)`

**Purpose:** Handles logic related to `compile terrain shaders dist`.

### SetCrashOnAsserts
`public static void SetCrashOnAsserts(bool val)`

**Purpose:** Sets the value or state of `crash on asserts`.

### SetCrashOnWarnings
`public static void SetCrashOnWarnings(bool val)`

**Purpose:** Sets the value or state of `crash on warnings`.

### SetCreateDumpOnWarnings
`public static void SetCreateDumpOnWarnings(bool val)`

**Purpose:** Sets the value or state of `create dump on warnings`.

### ToggleRender
`public static void ToggleRender()`

**Purpose:** Handles logic related to `toggle render`.

### SetRenderAgents
`public static void SetRenderAgents(bool value)`

**Purpose:** Sets the value or state of `render agents`.

### CheckShaderCompilation
`public static bool CheckShaderCompilation()`

**Purpose:** Handles logic related to `check shader compilation`.

### CompileAllShaders
`public static void CompileAllShaders(string targetPlatform)`

**Purpose:** Handles logic related to `compile all shaders`.

### GetExecutableWorkingDirectory
`public static string GetExecutableWorkingDirectory()`

**Purpose:** Gets the current value of `executable working directory`.

### SetDumpFolderPath
`public static void SetDumpFolderPath(string path)`

**Purpose:** Sets the value or state of `dump folder path`.

### CheckSceneForProblems
`public static void CheckSceneForProblems(string sceneName)`

**Purpose:** Handles logic related to `check scene for problems`.

### SetCoreGameState
`public static void SetCoreGameState(int state)`

**Purpose:** Sets the value or state of `core game state`.

### GetCoreGameState
`public static int GetCoreGameState()`

**Purpose:** Gets the current value of `core game state`.

### ExecuteCommandLineCommand
`public static string ExecuteCommandLineCommand(string command)`

**Purpose:** Executes the `command line command` operation or workflow.

### QuitGame
`public static void QuitGame()`

**Purpose:** Handles logic related to `quit game`.

### ExitProcess
`public static void ExitProcess(int exitCode)`

**Purpose:** Handles logic related to `exit process`.

### GetBasePath
`public static string GetBasePath()`

**Purpose:** Gets the current value of `base path`.

### GetVisualTestsValidatePath
`public static string GetVisualTestsValidatePath()`

**Purpose:** Gets the current value of `visual tests validate path`.

### GetVisualTestsTestFilesPath
`public static string GetVisualTestsTestFilesPath()`

**Purpose:** Gets the current value of `visual tests test files path`.

### GetAttachmentsPath
`public static string GetAttachmentsPath()`

**Purpose:** Gets the current value of `attachments path`.

### StartScenePerformanceReport
`public static void StartScenePerformanceReport(string folderPath)`

**Purpose:** Handles logic related to `start scene performance report`.

### IsSceneReportFinished
`public static bool IsSceneReportFinished()`

**Purpose:** Handles logic related to `is scene report finished`.

### GetFps
`public static float GetFps()`

**Purpose:** Gets the current value of `fps`.

### GetMainFps
`public static float GetMainFps()`

**Purpose:** Gets the current value of `main fps`.

### GetRendererFps
`public static float GetRendererFps()`

**Purpose:** Gets the current value of `renderer fps`.

### EnableSingleGPUQueryPerFrame
`public static void EnableSingleGPUQueryPerFrame()`

**Purpose:** Handles logic related to `enable single g p u query per frame`.

### ClearDecalAtlas
`public static void ClearDecalAtlas(DecalAtlasGroup atlasGroup)`

**Purpose:** Handles logic related to `clear decal atlas`.

### FlushManagedObjectsMemory
`public static void FlushManagedObjectsMemory()`

**Purpose:** Handles logic related to `flush managed objects memory`.

### OnLoadingWindowEnabled
`public static void OnLoadingWindowEnabled()`

**Purpose:** Called when the `loading window enabled` event is raised.

### DebugSetGlobalLoadingWindowState
`public static void DebugSetGlobalLoadingWindowState(bool newState)`

**Purpose:** Handles logic related to `debug set global loading window state`.

### OnLoadingWindowDisabled
`public static void OnLoadingWindowDisabled()`

**Purpose:** Called when the `loading window disabled` event is raised.

### DisableGlobalLoadingWindow
`public static void DisableGlobalLoadingWindow()`

**Purpose:** Handles logic related to `disable global loading window`.

### EnableGlobalLoadingWindow
`public static void EnableGlobalLoadingWindow()`

**Purpose:** Handles logic related to `enable global loading window`.

### EnableGlobalEditDataCacher
`public static void EnableGlobalEditDataCacher()`

**Purpose:** Handles logic related to `enable global edit data cacher`.

### DoFullBakeAllLevelsAutomated
`public static void DoFullBakeAllLevelsAutomated(string module, string scene)`

**Purpose:** Handles logic related to `do full bake all levels automated`.

### GetReturnCode
`public static int GetReturnCode()`

**Purpose:** Gets the current value of `return code`.

### DisableGlobalEditDataCacher
`public static void DisableGlobalEditDataCacher()`

**Purpose:** Handles logic related to `disable global edit data cacher`.

### DoFullBakeSingleLevelAutomated
`public static void DoFullBakeSingleLevelAutomated(string module, string scene)`

**Purpose:** Handles logic related to `do full bake single level automated`.

### DoLightOnlyBakeSingleLevelAutomated
`public static void DoLightOnlyBakeSingleLevelAutomated(string module, string scene)`

**Purpose:** Handles logic related to `do light only bake single level automated`.

### DoLightOnlyBakeAllLevelsAutomated
`public static void DoLightOnlyBakeAllLevelsAutomated(string module, string scene)`

**Purpose:** Handles logic related to `do light only bake all levels automated`.

### DidAutomatedGIBakeFinished
`public static bool DidAutomatedGIBakeFinished()`

**Purpose:** Handles logic related to `did automated g i bake finished`.

### GetSelectedEntities
`public static void GetSelectedEntities(ref List<GameEntity> gameEntities)`

**Purpose:** Gets the current value of `selected entities`.

### DeleteEntitiesInEditorScene
`public static void DeleteEntitiesInEditorScene(List<GameEntity> gameEntities)`

**Purpose:** Handles logic related to `delete entities in editor scene`.

### CreateSelectionInEditor
`public static void CreateSelectionInEditor(List<GameEntity> gameEntities, string name)`

**Purpose:** Creates a new `selection in editor` instance or object.

### SelectEntities
`public static void SelectEntities(List<GameEntity> gameEntities)`

**Purpose:** Handles logic related to `select entities`.

### GetEntitiesOfSelectionSet
`public static void GetEntitiesOfSelectionSet(string selectionSetName, ref List<GameEntity> gameEntities)`

**Purpose:** Gets the current value of `entities of selection set`.

### AddCommandLineFunction
`public static void AddCommandLineFunction(string concatName)`

**Purpose:** Adds `command line function` to the current collection or state.

### GetNumberOfShaderCompilationsInProgress
`public static int GetNumberOfShaderCompilationsInProgress()`

**Purpose:** Gets the current value of `number of shader compilations in progress`.

### IsDetailedSoundLogOn
`public static int IsDetailedSoundLogOn()`

**Purpose:** Handles logic related to `is detailed sound log on`.

### GetCurrentCpuMemoryUsageMB
`public static ulong GetCurrentCpuMemoryUsageMB()`

**Purpose:** Gets the current value of `current cpu memory usage m b`.

### GetGpuMemoryOfAllocationGroup
`public static ulong GetGpuMemoryOfAllocationGroup(string name)`

**Purpose:** Gets the current value of `gpu memory of allocation group`.

### GetGPUMemoryStats
`public static void GetGPUMemoryStats(ref float totalMemory, ref float renderTargetMemory, ref float depthTargetMemory, ref float srvMemory, ref float bufferMemory)`

**Purpose:** Gets the current value of `g p u memory stats`.

### GetDetailedGPUMemoryData
`public static void GetDetailedGPUMemoryData(ref int totalMemoryAllocated, ref int totalMemoryUsed, ref int emptyChunkTotalSize)`

**Purpose:** Gets the current value of `detailed g p u memory data`.

### SetRenderMode
`public static void SetRenderMode(Utilities.EngineRenderDisplayMode mode)`

**Purpose:** Sets the value or state of `render mode`.

### SetForceDrawEntityID
`public static void SetForceDrawEntityID(bool value)`

**Purpose:** Sets the value or state of `force draw entity i d`.

### AddPerformanceReportToken
`public static void AddPerformanceReportToken(string performance_type, string name, float loading_time)`

**Purpose:** Adds `performance report token` to the current collection or state.

### AddSceneObjectReport
`public static void AddSceneObjectReport(string scene_name, string report_name, float report_value)`

**Purpose:** Adds `scene object report` to the current collection or state.

### OutputPerformanceReports
`public static void OutputPerformanceReports()`

**Purpose:** Handles logic related to `output performance reports`.

### TakeScreenshot
`public static void TakeScreenshot(PlatformFilePath path)`

**Purpose:** Handles logic related to `take screenshot`.

### TakeScreenshot
`public static void TakeScreenshot(string path)`

**Purpose:** Handles logic related to `take screenshot`.

### SetAllocationAlwaysValidScene
`public static void SetAllocationAlwaysValidScene(Scene scene)`

**Purpose:** Sets the value or state of `allocation always valid scene`.

### CheckResourceModifications
`public static void CheckResourceModifications()`

**Purpose:** Handles logic related to `check resource modifications`.

### SetGraphicsPreset
`public static void SetGraphicsPreset(int preset)`

**Purpose:** Sets the value or state of `graphics preset`.

### GetLocalOutputPath
`public static string GetLocalOutputPath()`

**Purpose:** Gets the current value of `local output path`.

### GetPCInfo
`public static string GetPCInfo()`

**Purpose:** Gets the current value of `p c info`.

### GetGPUMemoryMB
`public static int GetGPUMemoryMB()`

**Purpose:** Gets the current value of `g p u memory m b`.

### GetCurrentEstimatedGPUMemoryCostMB
`public static int GetCurrentEstimatedGPUMemoryCostMB()`

**Purpose:** Gets the current value of `current estimated g p u memory cost m b`.

### DumpGPUMemoryStatistics
`public static void DumpGPUMemoryStatistics(string filePath)`

**Purpose:** Handles logic related to `dump g p u memory statistics`.

### SaveDataAsTexture
`public static int SaveDataAsTexture(string path, int width, int height, float data)`

**Purpose:** Saves `data as texture` data.

### ClearOldResourcesAndObjects
`public static void ClearOldResourcesAndObjects()`

**Purpose:** Handles logic related to `clear old resources and objects`.

### LoadVirtualTextureTileset
`public static void LoadVirtualTextureTileset(string name)`

**Purpose:** Loads `virtual texture tileset` data.

### GetDeltaTime
`public static float GetDeltaTime(int timerId)`

**Purpose:** Gets the current value of `delta time`.

### LoadSkyBoxes
`public static void LoadSkyBoxes()`

**Purpose:** Loads `sky boxes` data.

### GetApplicationName
`public static string GetApplicationName()`

**Purpose:** Gets the current value of `application name`.

### OpenNavalDlcPurchasePage
`public static void OpenNavalDlcPurchasePage()`

**Purpose:** Handles logic related to `open naval dlc purchase page`.

### SetWindowTitle
`public static void SetWindowTitle(string title)`

**Purpose:** Sets the value or state of `window title`.

### ProcessWindowTitle
`public static string ProcessWindowTitle(string title)`

**Purpose:** Handles logic related to `process window title`.

### GetCurrentProcessID
`public static uint GetCurrentProcessID()`

**Purpose:** Gets the current value of `current process i d`.

### DoDelayedexit
`public static void DoDelayedexit(int returnCode)`

**Purpose:** Handles logic related to `do delayedexit`.

### SetAssertionsAndWarningsSetExitCode
`public static void SetAssertionsAndWarningsSetExitCode(bool value)`

**Purpose:** Sets the value or state of `assertions and warnings set exit code`.

### SetReportMode
`public static void SetReportMode(bool reportMode)`

**Purpose:** Sets the value or state of `report mode`.

### SetAssertionAtShaderCompile
`public static void SetAssertionAtShaderCompile(bool value)`

**Purpose:** Sets the value or state of `assertion at shader compile`.

### SetCrashReportCustomString
`public static void SetCrashReportCustomString(string customString)`

**Purpose:** Sets the value or state of `crash report custom string`.

### SetCrashReportCustomStack
`public static void SetCrashReportCustomStack(string customStack)`

**Purpose:** Sets the value or state of `crash report custom stack`.

### GetSteamAppId
`public static int GetSteamAppId()`

**Purpose:** Gets the current value of `steam app id`.

### SetForceVsync
`public static void SetForceVsync(bool value)`

**Purpose:** Sets the value or state of `force vsync`.

### LoadBannerlordConfigFile
`public static string LoadBannerlordConfigFile()`

**Purpose:** Loads `bannerlord config file` data.

### SaveConfigFile
`public static SaveResult SaveConfigFile(string configProperties)`

**Purpose:** Saves `config file` data.

### OpenOnscreenKeyboard
`public static void OpenOnscreenKeyboard(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum)`

**Purpose:** Handles logic related to `open onscreen keyboard`.

### GetSystemLanguage
`public static string GetSystemLanguage()`

**Purpose:** Gets the current value of `system language`.

### RegisterGPUAllocationGroup
`public static int RegisterGPUAllocationGroup(string name)`

**Purpose:** Handles logic related to `register g p u allocation group`.

### GetMemoryUsageOfCategory
`public static int GetMemoryUsageOfCategory(int category)`

**Purpose:** Gets the current value of `memory usage of category`.

### GetDetailedXBOXMemoryInfo
`public static string GetDetailedXBOXMemoryInfo()`

**Purpose:** Gets the current value of `detailed x b o x memory info`.

### SetFrameLimiterWithSleep
`public static void SetFrameLimiterWithSleep(bool value)`

**Purpose:** Sets the value or state of `frame limiter with sleep`.

### GetFrameLimiterWithSleep
`public static bool GetFrameLimiterWithSleep()`

**Purpose:** Gets the current value of `frame limiter with sleep`.

### GetVertexBufferChunkSystemMemoryUsage
`public static int GetVertexBufferChunkSystemMemoryUsage()`

**Purpose:** Gets the current value of `vertex buffer chunk system memory usage`.

### GetBuildNumber
`public static int GetBuildNumber()`

**Purpose:** Gets the current value of `build number`.

### GetApplicationVersionWithBuildNumber
`public static ApplicationVersion GetApplicationVersionWithBuildNumber()`

**Purpose:** Gets the current value of `application version with build number`.

### ParallelFor
`public static void ParallelFor(int startIndex, int endIndex, long curKey, int grainSize)`

**Purpose:** Handles logic related to `parallel for`.

### ClearShaderMemory
`public static void ClearShaderMemory()`

**Purpose:** Handles logic related to `clear shader memory`.

### RegisterMeshForGPUMorph
`public static void RegisterMeshForGPUMorph(string metaMeshName)`

**Purpose:** Handles logic related to `register mesh for g p u morph`.

### ParallelForWithDt
`public static void ParallelForWithDt(int startIndex, int endIndex, long curKey, int grainSize)`

**Purpose:** Handles logic related to `parallel for with dt`.

### GetMainThreadId
`public static ulong GetMainThreadId()`

**Purpose:** Gets the current value of `main thread id`.

### GetCurrentThreadId
`public static ulong GetCurrentThreadId()`

**Purpose:** Gets the current value of `current thread id`.

### SetWatchdogValue
`public static void SetWatchdogValue(string fileName, string groupName, string key, string value)`

**Purpose:** Sets the value or state of `watchdog value`.

### SetWatchdogAutoreport
`public static void SetWatchdogAutoreport(bool enabled)`

**Purpose:** Sets the value or state of `watchdog autoreport`.

### DetachWatchdog
`public static void DetachWatchdog()`

**Purpose:** Handles logic related to `detach watchdog`.

### GetPlatformModulePaths
`public static string GetPlatformModulePaths()`

**Purpose:** Gets the current value of `platform module paths`.

### IsAsyncPhysicsThread
`public static bool IsAsyncPhysicsThread()`

**Purpose:** Handles logic related to `is async physics thread`.

### Dispose
`public void Dispose()`

**Purpose:** Handles logic related to `dispose`.

## Usage Example

```csharp
Utilities.ConstructMainThreadJob(function, parameters);
```

## See Also

- [Complete Class Catalog](../catalog)