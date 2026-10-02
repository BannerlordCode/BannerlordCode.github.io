---
title: "Utilities"
description: "Utilities：TaleWorlds.Engine 的 public 类；公开成员 159 个（方法 152、属性 4、字段 1）。canonical 桶 engine。源文件 TaleWorlds.Engine/Utilities.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Utilities

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public static class Utilities`
**File:** `TaleWorlds.Engine/Utilities.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

Utilities 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/Utilities.cs。它是一个 public 类，继承链为 Utilities。public/protected 成员共 159 个：152 方法、4 属性、1 字段、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Utilities 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 Utilities。成员构成以方法为主（方法 152/159，属性 4/159），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/Utilities.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ConstructMainThreadJob` | `public static void ConstructMainThreadJob(Delegate function, params object[]parameters)` | 方法 |
| `ConstructMainThreadJob` | `public static void ConstructMainThreadJob(Semaphore semaphore, Delegate function, params object[]parameters)` | 方法 |
| `RunJobs` | `public static void RunJobs()` | 方法 |
| `WaitJobs` | `public static void WaitJobs()` | 方法 |
| `OutputBenchmarkValuesToPerformanceReporter` | `public static void OutputBenchmarkValuesToPerformanceReporter()` | 方法 |
| `SetLoadingScreenPercentage` | `public static void SetLoadingScreenPercentage(float value)` | 方法 |
| `SetFixedDt` | `public static void SetFixedDt(bool enabled, float dt)` | 方法 |
| `SetBenchmarkStatus` | `public static void SetBenchmarkStatus(int status, string def)` | 方法 |
| `GetBenchmarkStatus` | `public static int GetBenchmarkStatus()` | 方法 |
| `GetApplicationMemoryStatistics` | `public static string GetApplicationMemoryStatistics()` | 方法 |
| `IsBenchmarkQuited` | `public static bool IsBenchmarkQuited()` | 方法 |
| `GetNativeMemoryStatistics` | `public static string GetNativeMemoryStatistics()` | 方法 |
| `CommandLineArgumentExists` | `public static bool CommandLineArgumentExists(string str)` | 方法 |
| `GetConsoleHostMachine` | `public static string GetConsoleHostMachine()` | 方法 |
| `ExportNavMeshFaceMarks` | `public static string ExportNavMeshFaceMarks(string file_name)` | 方法 |
| `TakeSSFromTop` | `public static string TakeSSFromTop(string file_name)` | 方法 |
| `CheckIfAssetsAndSourcesAreSame` | `public static void CheckIfAssetsAndSourcesAreSame()` | 方法 |
| `DisableCoreGame` | `public static void DisableCoreGame()` | 方法 |
| `GetApplicationMemory` | `public static float GetApplicationMemory()` | 方法 |
| `GatherCoreGameReferences` | `public static void GatherCoreGameReferences(string scene_names)` | 方法 |
| `IsOnlyCoreContentEnabled` | `public static bool IsOnlyCoreContentEnabled()` | 方法 |
| `FindMeshesWithoutLods` | `public static void FindMeshesWithoutLods(string module_name)` | 方法 |
| `SetDisableDumpGeneration` | `public static void SetDisableDumpGeneration(bool value)` | 方法 |
| `SetPrintCallstackAtCrahses` | `public static void SetPrintCallstackAtCrahses(bool value)` | 方法 |
| `string[]GetModulesNames` | `public static string[]GetModulesNames()` | 方法 |
| `GetFullFilePathOfScene` | `public static string GetFullFilePathOfScene(string sceneName)` | 方法 |
| `TryGetFullFilePathOfScene` | `public static bool TryGetFullFilePathOfScene(string sceneName, out string fullPath)` | 方法 |
| `TryGetUniqueIdentifiersForScene` | `public static bool TryGetUniqueIdentifiersForScene(string sceneName, out UniqueSceneId identifiers)` | 方法 |
| `TryGetUniqueIdentifiersForSceneFile` | `public static bool TryGetUniqueIdentifiersForSceneFile(string xsceneFilePath, out UniqueSceneId identifiers)` | 方法 |
| `PairSceneNameToModuleName` | `public static void PairSceneNameToModuleName(string sceneName, string moduleName)` | 方法 |
| `string[]GetSingleModuleScenesOfModule` | `public static string[]GetSingleModuleScenesOfModule(string moduleName)` | 方法 |
| `GetFullCommandLineString` | `public static string GetFullCommandLineString()` | 方法 |
| `SetScreenTextRenderingState` | `public static void SetScreenTextRenderingState(bool state)` | 方法 |
| `SetMessageLineRenderingState` | `public static void SetMessageLineRenderingState(bool state)` | 方法 |
| `CheckIfTerrainShaderHeaderGenerationFinished` | `public static bool CheckIfTerrainShaderHeaderGenerationFinished()` | 方法 |
| `GenerateTerrainShaderHeaders` | `public static void GenerateTerrainShaderHeaders(string targetPlatform, string targetConfig, string output_path)` | 方法 |
| `CompileTerrainShadersDist` | `public static void CompileTerrainShadersDist(string targetPlatform, string targetConfig, string output_path)` | 方法 |
| `SetCrashOnAsserts` | `public static void SetCrashOnAsserts(bool val)` | 方法 |
| `SetCrashOnWarnings` | `public static void SetCrashOnWarnings(bool val)` | 方法 |
| `SetCreateDumpOnWarnings` | `public static void SetCreateDumpOnWarnings(bool val)` | 方法 |
| `ToggleRender` | `public static void ToggleRender()` | 方法 |
| `SetRenderAgents` | `public static void SetRenderAgents(bool value)` | 方法 |
| `CheckShaderCompilation` | `public static bool CheckShaderCompilation()` | 方法 |
| `CompileAllShaders` | `public static void CompileAllShaders(string targetPlatform)` | 方法 |
| `GetExecutableWorkingDirectory` | `public static string GetExecutableWorkingDirectory()` | 方法 |
| `SetDumpFolderPath` | `public static void SetDumpFolderPath(string path)` | 方法 |
| `CheckSceneForProblems` | `public static void CheckSceneForProblems(string sceneName)` | 方法 |
| `SetCoreGameState` | `public static void SetCoreGameState(int state)` | 方法 |
| `GetCoreGameState` | `public static int GetCoreGameState()` | 方法 |
| `ExecuteCommandLineCommand` | `public static string ExecuteCommandLineCommand(string command)` | 方法 |
| `QuitGame` | `public static void QuitGame()` | 方法 |
| `ExitProcess` | `public static void ExitProcess(int exitCode)` | 方法 |
| `GetBasePath` | `public static string GetBasePath()` | 方法 |
| `GetVisualTestsValidatePath` | `public static string GetVisualTestsValidatePath()` | 方法 |
| `GetVisualTestsTestFilesPath` | `public static string GetVisualTestsTestFilesPath()` | 方法 |
| `GetAttachmentsPath` | `public static string GetAttachmentsPath()` | 方法 |
| `StartScenePerformanceReport` | `public static void StartScenePerformanceReport(string folderPath)` | 方法 |
| `IsSceneReportFinished` | `public static bool IsSceneReportFinished()` | 方法 |
| `GetFps` | `public static float GetFps()` | 方法 |
| `GetMainFps` | `public static float GetMainFps()` | 方法 |
| `GetRendererFps` | `public static float GetRendererFps()` | 方法 |
| `EnableSingleGPUQueryPerFrame` | `public static void EnableSingleGPUQueryPerFrame()` | 方法 |
| `ClearDecalAtlas` | `public static void ClearDecalAtlas(DecalAtlasGroup atlasGroup)` | 方法 |
| `FlushManagedObjectsMemory` | `public static void FlushManagedObjectsMemory()` | 方法 |
| `OnLoadingWindowEnabled` | `public static void OnLoadingWindowEnabled()` | 方法 |
| `DebugSetGlobalLoadingWindowState` | `public static void DebugSetGlobalLoadingWindowState(bool newState)` | 方法 |
| `OnLoadingWindowDisabled` | `public static void OnLoadingWindowDisabled()` | 方法 |
| `DisableGlobalLoadingWindow` | `public static void DisableGlobalLoadingWindow()` | 方法 |
| `EnableGlobalLoadingWindow` | `public static void EnableGlobalLoadingWindow()` | 方法 |
| `EnableGlobalEditDataCacher` | `public static void EnableGlobalEditDataCacher()` | 方法 |
| `DoFullBakeAllLevelsAutomated` | `public static void DoFullBakeAllLevelsAutomated(string module, string scene)` | 方法 |
| `GetReturnCode` | `public static int GetReturnCode()` | 方法 |
| `DisableGlobalEditDataCacher` | `public static void DisableGlobalEditDataCacher()` | 方法 |
| `DoFullBakeSingleLevelAutomated` | `public static void DoFullBakeSingleLevelAutomated(string module, string scene)` | 方法 |
| `DoLightOnlyBakeSingleLevelAutomated` | `public static void DoLightOnlyBakeSingleLevelAutomated(string module, string scene)` | 方法 |
| `DoLightOnlyBakeAllLevelsAutomated` | `public static void DoLightOnlyBakeAllLevelsAutomated(string module, string scene)` | 方法 |
| `DidAutomatedGIBakeFinished` | `public static bool DidAutomatedGIBakeFinished()` | 方法 |
| `GetSelectedEntities` | `public static void GetSelectedEntities(ref List<GameEntity>gameEntities)` | 方法 |
| `DeleteEntitiesInEditorScene` | `public static void DeleteEntitiesInEditorScene(List<GameEntity>gameEntities)` | 方法 |
| `CreateSelectionInEditor` | `public static void CreateSelectionInEditor(List<GameEntity>gameEntities, string name)` | 方法 |
| `SelectEntities` | `public static void SelectEntities(List<GameEntity>gameEntities)` | 方法 |
| `GetEntitiesOfSelectionSet` | `public static void GetEntitiesOfSelectionSet(string selectionSetName, ref List<GameEntity>gameEntities)` | 方法 |
| `AddCommandLineFunction` | `public static void AddCommandLineFunction(string concatName)` | 方法 |
| `GetNumberOfShaderCompilationsInProgress` | `public static int GetNumberOfShaderCompilationsInProgress()` | 方法 |
| `IsDetailedSoundLogOn` | `public static int IsDetailedSoundLogOn()` | 方法 |
| `GetCurrentCpuMemoryUsageMB` | `public static ulong GetCurrentCpuMemoryUsageMB()` | 方法 |
| `GetGpuMemoryOfAllocationGroup` | `public static ulong GetGpuMemoryOfAllocationGroup(string name)` | 方法 |
| `GetGPUMemoryStats` | `public static void GetGPUMemoryStats(ref float totalMemory, ref float renderTargetMemory, ref float depthTargetMemory, ref float srvMemory, ref float bufferMemory)` | 方法 |
| `GetDetailedGPUMemoryData` | `public static void GetDetailedGPUMemoryData(ref int totalMemoryAllocated, ref int totalMemoryUsed, ref int emptyChunkTotalSize)` | 方法 |
| `SetRenderMode` | `public static void SetRenderMode(Utilities.EngineRenderDisplayMode mode)` | 方法 |
| `SetForceDrawEntityID` | `public static void SetForceDrawEntityID(bool value)` | 方法 |
| `AddPerformanceReportToken` | `public static void AddPerformanceReportToken(string performance_type, string name, float loading_time)` | 方法 |
| `AddSceneObjectReport` | `public static void AddSceneObjectReport(string scene_name, string report_name, float report_value)` | 方法 |
| `OutputPerformanceReports` | `public static void OutputPerformanceReports()` | 方法 |
| `EngineFrameNo` | `public static int EngineFrameNo` | 属性 |
| `EditModeEnabled` | `public static bool EditModeEnabled` | 属性 |
| `TakeScreenshot` | `public static void TakeScreenshot(PlatformFilePath path)` | 方法 |
| `TakeScreenshot` | `public static void TakeScreenshot(string path)` | 方法 |
| `SetAllocationAlwaysValidScene` | `public static void SetAllocationAlwaysValidScene(Scene scene)` | 方法 |
| `CheckResourceModifications` | `public static void CheckResourceModifications()` | 方法 |
| `SetGraphicsPreset` | `public static void SetGraphicsPreset(int preset)` | 方法 |
| `GetLocalOutputPath` | `public static string GetLocalOutputPath()` | 方法 |
| `GetPCInfo` | `public static string GetPCInfo()` | 方法 |
| `GetGPUMemoryMB` | `public static int GetGPUMemoryMB()` | 方法 |
| `GetCurrentEstimatedGPUMemoryCostMB` | `public static int GetCurrentEstimatedGPUMemoryCostMB()` | 方法 |
| `DumpGPUMemoryStatistics` | `public static void DumpGPUMemoryStatistics(string filePath)` | 方法 |
| `SaveDataAsTexture` | `public static int SaveDataAsTexture(string path, int width, int height, float[]data)` | 方法 |
| `ClearOldResourcesAndObjects` | `public static void ClearOldResourcesAndObjects()` | 方法 |
| `LoadVirtualTextureTileset` | `public static void LoadVirtualTextureTileset(string name)` | 方法 |
| `GetDeltaTime` | `public static float GetDeltaTime(int timerId)` | 方法 |
| `LoadSkyBoxes` | `public static void LoadSkyBoxes()` | 方法 |
| `GetApplicationName` | `public static string GetApplicationName()` | 方法 |
| `OpenConsoleStorePage` | `public static void OpenConsoleStorePage(string productId)` | 方法 |
| `SetWindowTitle` | `public static void SetWindowTitle(string title)` | 方法 |
| `ProcessWindowTitle` | `public static string ProcessWindowTitle(string title)` | 方法 |
| `GetCurrentProcessID` | `public static uint GetCurrentProcessID()` | 方法 |
| `DoDelayedexit` | `public static void DoDelayedexit(int returnCode)` | 方法 |
| `SetAssertionsAndWarningsSetExitCode` | `public static void SetAssertionsAndWarningsSetExitCode(bool value)` | 方法 |
| `SetReportMode` | `public static void SetReportMode(bool reportMode)` | 方法 |
| `SetAssertionAtShaderCompile` | `public static void SetAssertionAtShaderCompile(bool value)` | 方法 |
| `SetCrashReportCustomString` | `public static void SetCrashReportCustomString(string customString)` | 方法 |
| `SetCrashReportCustomStack` | `public static void SetCrashReportCustomStack(string customStack)` | 方法 |
| `GetSteamAppId` | `public static int GetSteamAppId()` | 方法 |
| `SetForceVsync` | `public static void SetForceVsync(bool value)` | 方法 |
| `LoadBannerlordConfigFile` | `public static string LoadBannerlordConfigFile()` | 方法 |
| `SaveConfigFile` | `public static SaveResult SaveConfigFile(string configProperties)` | 方法 |
| `OpenOnscreenKeyboard` | `public static void OpenOnscreenKeyboard(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum)` | 方法 |
| `GetSystemLanguage` | `public static string GetSystemLanguage()` | 方法 |
| `RegisterGPUAllocationGroup` | `public static int RegisterGPUAllocationGroup(string name)` | 方法 |
| `GetMemoryUsageOfCategory` | `public static int GetMemoryUsageOfCategory(int category)` | 方法 |
| `GetDetailedXBOXMemoryInfo` | `public static string GetDetailedXBOXMemoryInfo()` | 方法 |
| `SetFrameLimiterWithSleep` | `public static void SetFrameLimiterWithSleep(bool value)` | 方法 |
| `GetFrameLimiterWithSleep` | `public static bool GetFrameLimiterWithSleep()` | 方法 |
| `GetPossibleCommandLineStartingWith` | `public static string GetPossibleCommandLineStartingWith(string command, int index)` | 方法 |
| `IsDevkit` | `public static bool IsDevkit()` | 方法 |
| `IsLockhartPlatform` | `public static bool IsLockhartPlatform()` | 方法 |
| `GetVertexBufferChunkSystemMemoryUsage` | `public static int GetVertexBufferChunkSystemMemoryUsage()` | 方法 |
| `GetBuildNumber` | `public static int GetBuildNumber()` | 方法 |
| `GetApplicationVersionWithBuildNumber` | `public static ApplicationVersion GetApplicationVersionWithBuildNumber()` | 方法 |
| `ParallelFor` | `public static void ParallelFor(int startIndex, int endIndex, long curKey, int grainSize)` | 方法 |
| `ParallelForWithDt` | `public static void ParallelForWithDt(int startIndex, int endIndex, long curKey, int grainSize)` | 方法 |
| `ParallelForWithoutRenderThread` | `public static void ParallelForWithoutRenderThread(int startIndex, int endIndex, long curKey, int grainSize)` | 方法 |
| `ParallelForWithoutRenderThreadDt` | `public static void ParallelForWithoutRenderThreadDt(int startIndex, int endIndex, long curKey, int grainSize)` | 方法 |
| `ClearShaderMemory` | `public static void ClearShaderMemory()` | 方法 |
| `RegisterMeshForGPUMorph` | `public static void RegisterMeshForGPUMorph(string metaMeshName)` | 方法 |
| `GetMainThreadId` | `public static ulong GetMainThreadId()` | 方法 |
| `GetCurrentThreadId` | `public static ulong GetCurrentThreadId()` | 方法 |
| `SetWatchdogValue` | `public static void SetWatchdogValue(string fileName, string groupName, string key, string value)` | 方法 |
| `SetWatchdogAutoreport` | `public static void SetWatchdogAutoreport(bool enabled)` | 方法 |
| `DetachWatchdog` | `public static void DetachWatchdog()` | 方法 |
| `GetPlatformModulePaths` | `public static string GetPlatformModulePaths()` | 方法 |
| `IsAsyncPhysicsThread` | `public static bool IsAsyncPhysicsThread()` | 方法 |
| `StartLoadingStuckCheckState` | `public static void StartLoadingStuckCheckState(float timeoutThresholdSeconds)` | 方法 |
| `EndLoadingStuckCheckState` | `public static void EndLoadingStuckCheckState()` | 方法 |
| `renderingActive` | `public static bool renderingActive` | 字段 |
| `EngineRenderDisplayMode` | `public enum EngineRenderDisplayMode` | 属性 |
| `IDisposable` | `public class MainThreadPerformanceQuery : IDisposable` | 属性 |
| `EngineRenderDisplayMode` | `public enum EngineRenderDisplayMode` | 嵌套类型 |
| `IDisposable` | `public class MainThreadPerformanceQuery : IDisposable` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)
