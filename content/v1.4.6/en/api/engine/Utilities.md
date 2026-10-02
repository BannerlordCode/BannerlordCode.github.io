---
title: "Utilities"
description: "Utilities: a public class in TaleWorlds.Engine; 159 exposed members (152 methods, 4 properties, 1 fields). Source: TaleWorlds.Engine/Utilities.cs."
---
# Utilities

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public static class Utilities`
**File:** `TaleWorlds.Engine/Utilities.cs`

## Overview

Utilities lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Utilities.cs. It is a public class; the inheritance chain is Utilities. It exposes 159 public/protected members: 152 methods, 4 properties, 1 fields, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Utilities is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain Utilities. The surface is method-led (methods 152/159, properties 4/159), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Utilities.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ConstructMainThreadJob` | `public static void ConstructMainThreadJob(Delegate function, params object[]parameters)` | method |
| `ConstructMainThreadJob` | `public static void ConstructMainThreadJob(Semaphore semaphore, Delegate function, params object[]parameters)` | method |
| `RunJobs` | `public static void RunJobs()` | method |
| `WaitJobs` | `public static void WaitJobs()` | method |
| `OutputBenchmarkValuesToPerformanceReporter` | `public static void OutputBenchmarkValuesToPerformanceReporter()` | method |
| `SetLoadingScreenPercentage` | `public static void SetLoadingScreenPercentage(float value)` | method |
| `SetFixedDt` | `public static void SetFixedDt(bool enabled, float dt)` | method |
| `SetBenchmarkStatus` | `public static void SetBenchmarkStatus(int status, string def)` | method |
| `GetBenchmarkStatus` | `public static int GetBenchmarkStatus()` | method |
| `GetApplicationMemoryStatistics` | `public static string GetApplicationMemoryStatistics()` | method |
| `IsBenchmarkQuited` | `public static bool IsBenchmarkQuited()` | method |
| `GetNativeMemoryStatistics` | `public static string GetNativeMemoryStatistics()` | method |
| `CommandLineArgumentExists` | `public static bool CommandLineArgumentExists(string str)` | method |
| `GetConsoleHostMachine` | `public static string GetConsoleHostMachine()` | method |
| `ExportNavMeshFaceMarks` | `public static string ExportNavMeshFaceMarks(string file_name)` | method |
| `TakeSSFromTop` | `public static string TakeSSFromTop(string file_name)` | method |
| `CheckIfAssetsAndSourcesAreSame` | `public static void CheckIfAssetsAndSourcesAreSame()` | method |
| `DisableCoreGame` | `public static void DisableCoreGame()` | method |
| `GetApplicationMemory` | `public static float GetApplicationMemory()` | method |
| `GatherCoreGameReferences` | `public static void GatherCoreGameReferences(string scene_names)` | method |
| `IsOnlyCoreContentEnabled` | `public static bool IsOnlyCoreContentEnabled()` | method |
| `FindMeshesWithoutLods` | `public static void FindMeshesWithoutLods(string module_name)` | method |
| `SetDisableDumpGeneration` | `public static void SetDisableDumpGeneration(bool value)` | method |
| `SetPrintCallstackAtCrahses` | `public static void SetPrintCallstackAtCrahses(bool value)` | method |
| `string[]GetModulesNames` | `public static string[]GetModulesNames()` | method |
| `GetFullFilePathOfScene` | `public static string GetFullFilePathOfScene(string sceneName)` | method |
| `TryGetFullFilePathOfScene` | `public static bool TryGetFullFilePathOfScene(string sceneName, out string fullPath)` | method |
| `TryGetUniqueIdentifiersForScene` | `public static bool TryGetUniqueIdentifiersForScene(string sceneName, out UniqueSceneId identifiers)` | method |
| `TryGetUniqueIdentifiersForSceneFile` | `public static bool TryGetUniqueIdentifiersForSceneFile(string xsceneFilePath, out UniqueSceneId identifiers)` | method |
| `PairSceneNameToModuleName` | `public static void PairSceneNameToModuleName(string sceneName, string moduleName)` | method |
| `string[]GetSingleModuleScenesOfModule` | `public static string[]GetSingleModuleScenesOfModule(string moduleName)` | method |
| `GetFullCommandLineString` | `public static string GetFullCommandLineString()` | method |
| `SetScreenTextRenderingState` | `public static void SetScreenTextRenderingState(bool state)` | method |
| `SetMessageLineRenderingState` | `public static void SetMessageLineRenderingState(bool state)` | method |
| `CheckIfTerrainShaderHeaderGenerationFinished` | `public static bool CheckIfTerrainShaderHeaderGenerationFinished()` | method |
| `GenerateTerrainShaderHeaders` | `public static void GenerateTerrainShaderHeaders(string targetPlatform, string targetConfig, string output_path)` | method |
| `CompileTerrainShadersDist` | `public static void CompileTerrainShadersDist(string targetPlatform, string targetConfig, string output_path)` | method |
| `SetCrashOnAsserts` | `public static void SetCrashOnAsserts(bool val)` | method |
| `SetCrashOnWarnings` | `public static void SetCrashOnWarnings(bool val)` | method |
| `SetCreateDumpOnWarnings` | `public static void SetCreateDumpOnWarnings(bool val)` | method |
| `ToggleRender` | `public static void ToggleRender()` | method |
| `SetRenderAgents` | `public static void SetRenderAgents(bool value)` | method |
| `CheckShaderCompilation` | `public static bool CheckShaderCompilation()` | method |
| `CompileAllShaders` | `public static void CompileAllShaders(string targetPlatform)` | method |
| `GetExecutableWorkingDirectory` | `public static string GetExecutableWorkingDirectory()` | method |
| `SetDumpFolderPath` | `public static void SetDumpFolderPath(string path)` | method |
| `CheckSceneForProblems` | `public static void CheckSceneForProblems(string sceneName)` | method |
| `SetCoreGameState` | `public static void SetCoreGameState(int state)` | method |
| `GetCoreGameState` | `public static int GetCoreGameState()` | method |
| `ExecuteCommandLineCommand` | `public static string ExecuteCommandLineCommand(string command)` | method |
| `QuitGame` | `public static void QuitGame()` | method |
| `ExitProcess` | `public static void ExitProcess(int exitCode)` | method |
| `GetBasePath` | `public static string GetBasePath()` | method |
| `GetVisualTestsValidatePath` | `public static string GetVisualTestsValidatePath()` | method |
| `GetVisualTestsTestFilesPath` | `public static string GetVisualTestsTestFilesPath()` | method |
| `GetAttachmentsPath` | `public static string GetAttachmentsPath()` | method |
| `StartScenePerformanceReport` | `public static void StartScenePerformanceReport(string folderPath)` | method |
| `IsSceneReportFinished` | `public static bool IsSceneReportFinished()` | method |
| `GetFps` | `public static float GetFps()` | method |
| `GetMainFps` | `public static float GetMainFps()` | method |
| `GetRendererFps` | `public static float GetRendererFps()` | method |
| `EnableSingleGPUQueryPerFrame` | `public static void EnableSingleGPUQueryPerFrame()` | method |
| `ClearDecalAtlas` | `public static void ClearDecalAtlas(DecalAtlasGroup atlasGroup)` | method |
| `FlushManagedObjectsMemory` | `public static void FlushManagedObjectsMemory()` | method |
| `OnLoadingWindowEnabled` | `public static void OnLoadingWindowEnabled()` | method |
| `DebugSetGlobalLoadingWindowState` | `public static void DebugSetGlobalLoadingWindowState(bool newState)` | method |
| `OnLoadingWindowDisabled` | `public static void OnLoadingWindowDisabled()` | method |
| `DisableGlobalLoadingWindow` | `public static void DisableGlobalLoadingWindow()` | method |
| `EnableGlobalLoadingWindow` | `public static void EnableGlobalLoadingWindow()` | method |
| `EnableGlobalEditDataCacher` | `public static void EnableGlobalEditDataCacher()` | method |
| `DoFullBakeAllLevelsAutomated` | `public static void DoFullBakeAllLevelsAutomated(string module, string scene)` | method |
| `GetReturnCode` | `public static int GetReturnCode()` | method |
| `DisableGlobalEditDataCacher` | `public static void DisableGlobalEditDataCacher()` | method |
| `DoFullBakeSingleLevelAutomated` | `public static void DoFullBakeSingleLevelAutomated(string module, string scene)` | method |
| `DoLightOnlyBakeSingleLevelAutomated` | `public static void DoLightOnlyBakeSingleLevelAutomated(string module, string scene)` | method |
| `DoLightOnlyBakeAllLevelsAutomated` | `public static void DoLightOnlyBakeAllLevelsAutomated(string module, string scene)` | method |
| `DidAutomatedGIBakeFinished` | `public static bool DidAutomatedGIBakeFinished()` | method |
| `GetSelectedEntities` | `public static void GetSelectedEntities(ref List<GameEntity>gameEntities)` | method |
| `DeleteEntitiesInEditorScene` | `public static void DeleteEntitiesInEditorScene(List<GameEntity>gameEntities)` | method |
| `CreateSelectionInEditor` | `public static void CreateSelectionInEditor(List<GameEntity>gameEntities, string name)` | method |
| `SelectEntities` | `public static void SelectEntities(List<GameEntity>gameEntities)` | method |
| `GetEntitiesOfSelectionSet` | `public static void GetEntitiesOfSelectionSet(string selectionSetName, ref List<GameEntity>gameEntities)` | method |
| `AddCommandLineFunction` | `public static void AddCommandLineFunction(string concatName)` | method |
| `GetNumberOfShaderCompilationsInProgress` | `public static int GetNumberOfShaderCompilationsInProgress()` | method |
| `IsDetailedSoundLogOn` | `public static int IsDetailedSoundLogOn()` | method |
| `GetCurrentCpuMemoryUsageMB` | `public static ulong GetCurrentCpuMemoryUsageMB()` | method |
| `GetGpuMemoryOfAllocationGroup` | `public static ulong GetGpuMemoryOfAllocationGroup(string name)` | method |
| `GetGPUMemoryStats` | `public static void GetGPUMemoryStats(ref float totalMemory, ref float renderTargetMemory, ref float depthTargetMemory, ref float srvMemory, ref float bufferMemory)` | method |
| `GetDetailedGPUMemoryData` | `public static void GetDetailedGPUMemoryData(ref int totalMemoryAllocated, ref int totalMemoryUsed, ref int emptyChunkTotalSize)` | method |
| `SetRenderMode` | `public static void SetRenderMode(Utilities.EngineRenderDisplayMode mode)` | method |
| `SetForceDrawEntityID` | `public static void SetForceDrawEntityID(bool value)` | method |
| `AddPerformanceReportToken` | `public static void AddPerformanceReportToken(string performance_type, string name, float loading_time)` | method |
| `AddSceneObjectReport` | `public static void AddSceneObjectReport(string scene_name, string report_name, float report_value)` | method |
| `OutputPerformanceReports` | `public static void OutputPerformanceReports()` | method |
| `EngineFrameNo` | `public static int EngineFrameNo` | property |
| `EditModeEnabled` | `public static bool EditModeEnabled` | property |
| `TakeScreenshot` | `public static void TakeScreenshot(PlatformFilePath path)` | method |
| `TakeScreenshot` | `public static void TakeScreenshot(string path)` | method |
| `SetAllocationAlwaysValidScene` | `public static void SetAllocationAlwaysValidScene(Scene scene)` | method |
| `CheckResourceModifications` | `public static void CheckResourceModifications()` | method |
| `SetGraphicsPreset` | `public static void SetGraphicsPreset(int preset)` | method |
| `GetLocalOutputPath` | `public static string GetLocalOutputPath()` | method |
| `GetPCInfo` | `public static string GetPCInfo()` | method |
| `GetGPUMemoryMB` | `public static int GetGPUMemoryMB()` | method |
| `GetCurrentEstimatedGPUMemoryCostMB` | `public static int GetCurrentEstimatedGPUMemoryCostMB()` | method |
| `DumpGPUMemoryStatistics` | `public static void DumpGPUMemoryStatistics(string filePath)` | method |
| `SaveDataAsTexture` | `public static int SaveDataAsTexture(string path, int width, int height, float[]data)` | method |
| `ClearOldResourcesAndObjects` | `public static void ClearOldResourcesAndObjects()` | method |
| `LoadVirtualTextureTileset` | `public static void LoadVirtualTextureTileset(string name)` | method |
| `GetDeltaTime` | `public static float GetDeltaTime(int timerId)` | method |
| `LoadSkyBoxes` | `public static void LoadSkyBoxes()` | method |
| `GetApplicationName` | `public static string GetApplicationName()` | method |
| `OpenConsoleStorePage` | `public static void OpenConsoleStorePage(string productId)` | method |
| `SetWindowTitle` | `public static void SetWindowTitle(string title)` | method |
| `ProcessWindowTitle` | `public static string ProcessWindowTitle(string title)` | method |
| `GetCurrentProcessID` | `public static uint GetCurrentProcessID()` | method |
| `DoDelayedexit` | `public static void DoDelayedexit(int returnCode)` | method |
| `SetAssertionsAndWarningsSetExitCode` | `public static void SetAssertionsAndWarningsSetExitCode(bool value)` | method |
| `SetReportMode` | `public static void SetReportMode(bool reportMode)` | method |
| `SetAssertionAtShaderCompile` | `public static void SetAssertionAtShaderCompile(bool value)` | method |
| `SetCrashReportCustomString` | `public static void SetCrashReportCustomString(string customString)` | method |
| `SetCrashReportCustomStack` | `public static void SetCrashReportCustomStack(string customStack)` | method |
| `GetSteamAppId` | `public static int GetSteamAppId()` | method |
| `SetForceVsync` | `public static void SetForceVsync(bool value)` | method |
| `LoadBannerlordConfigFile` | `public static string LoadBannerlordConfigFile()` | method |
| `SaveConfigFile` | `public static SaveResult SaveConfigFile(string configProperties)` | method |
| `OpenOnscreenKeyboard` | `public static void OpenOnscreenKeyboard(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum)` | method |
| `GetSystemLanguage` | `public static string GetSystemLanguage()` | method |
| `RegisterGPUAllocationGroup` | `public static int RegisterGPUAllocationGroup(string name)` | method |
| `GetMemoryUsageOfCategory` | `public static int GetMemoryUsageOfCategory(int category)` | method |
| `GetDetailedXBOXMemoryInfo` | `public static string GetDetailedXBOXMemoryInfo()` | method |
| `SetFrameLimiterWithSleep` | `public static void SetFrameLimiterWithSleep(bool value)` | method |
| `GetFrameLimiterWithSleep` | `public static bool GetFrameLimiterWithSleep()` | method |
| `GetPossibleCommandLineStartingWith` | `public static string GetPossibleCommandLineStartingWith(string command, int index)` | method |
| `IsDevkit` | `public static bool IsDevkit()` | method |
| `IsLockhartPlatform` | `public static bool IsLockhartPlatform()` | method |
| `GetVertexBufferChunkSystemMemoryUsage` | `public static int GetVertexBufferChunkSystemMemoryUsage()` | method |
| `GetBuildNumber` | `public static int GetBuildNumber()` | method |
| `GetApplicationVersionWithBuildNumber` | `public static ApplicationVersion GetApplicationVersionWithBuildNumber()` | method |
| `ParallelFor` | `public static void ParallelFor(int startIndex, int endIndex, long curKey, int grainSize)` | method |
| `ParallelForWithDt` | `public static void ParallelForWithDt(int startIndex, int endIndex, long curKey, int grainSize)` | method |
| `ParallelForWithoutRenderThread` | `public static void ParallelForWithoutRenderThread(int startIndex, int endIndex, long curKey, int grainSize)` | method |
| `ParallelForWithoutRenderThreadDt` | `public static void ParallelForWithoutRenderThreadDt(int startIndex, int endIndex, long curKey, int grainSize)` | method |
| `ClearShaderMemory` | `public static void ClearShaderMemory()` | method |
| `RegisterMeshForGPUMorph` | `public static void RegisterMeshForGPUMorph(string metaMeshName)` | method |
| `GetMainThreadId` | `public static ulong GetMainThreadId()` | method |
| `GetCurrentThreadId` | `public static ulong GetCurrentThreadId()` | method |
| `SetWatchdogValue` | `public static void SetWatchdogValue(string fileName, string groupName, string key, string value)` | method |
| `SetWatchdogAutoreport` | `public static void SetWatchdogAutoreport(bool enabled)` | method |
| `DetachWatchdog` | `public static void DetachWatchdog()` | method |
| `GetPlatformModulePaths` | `public static string GetPlatformModulePaths()` | method |
| `IsAsyncPhysicsThread` | `public static bool IsAsyncPhysicsThread()` | method |
| `StartLoadingStuckCheckState` | `public static void StartLoadingStuckCheckState(float timeoutThresholdSeconds)` | method |
| `EndLoadingStuckCheckState` | `public static void EndLoadingStuckCheckState()` | method |
| `renderingActive` | `public static bool renderingActive` | field |
| `EngineRenderDisplayMode` | `public enum EngineRenderDisplayMode` | property |
| `IDisposable` | `public class MainThreadPerformanceQuery : IDisposable` | property |
| `EngineRenderDisplayMode` | `public enum EngineRenderDisplayMode` | nested type |
| `IDisposable` | `public class MainThreadPerformanceQuery : IDisposable` | nested type |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
