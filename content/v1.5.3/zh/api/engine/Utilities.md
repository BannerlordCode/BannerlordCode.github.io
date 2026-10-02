---
title: "Utilities"
description: "Utilities 的自动生成类参考。"
---
# Utilities

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class Utilities `
**Base:** System.Object
**Source:** TaleWorlds.Engine/Utilities.cs

## 概述

`Utilities` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/Utilities.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### ConstructMainThreadJob
`public static void ConstructMainThreadJob(Delegate function,params object[] parameters) `
`public static void ConstructMainThreadJob(Semaphore semaphore,Delegate function,params object[] parameters) `

### RunJobs
`public static void RunJobs() `

### WaitJobs
`public static void WaitJobs() `

### OutputBenchmarkValuesToPerformanceReporter
`public static void OutputBenchmarkValuesToPerformanceReporter() `

### SetLoadingScreenPercentage
`public static void SetLoadingScreenPercentage(float value) `

### SetFixedDt
`public static void SetFixedDt(bool enabled,float dt) `

### SetBenchmarkStatus
`public static void SetBenchmarkStatus(int status,string def) `

### GetBenchmarkStatus
`public static int GetBenchmarkStatus() `

### GetApplicationMemoryStatistics
`public static string GetApplicationMemoryStatistics() `

### IsBenchmarkQuited
`public static bool IsBenchmarkQuited() `

### GetNativeMemoryStatistics
`public static string GetNativeMemoryStatistics() `

### CommandLineArgumentExists
`public static bool CommandLineArgumentExists(string str) `

### GetConsoleHostMachine
`public static string GetConsoleHostMachine() `

### ExportNavMeshFaceMarks
`public static string ExportNavMeshFaceMarks(string file_name) `

### TakeSSFromTop
`public static string TakeSSFromTop(string file_name) `

### CheckIfAssetsAndSourcesAreSame
`public static void CheckIfAssetsAndSourcesAreSame() `

### DisableCoreGame
`public static void DisableCoreGame() `

### GetApplicationMemory
`public static float GetApplicationMemory() `

### GatherCoreGameReferences
`public static void GatherCoreGameReferences(string scene_names) `

### IsOnlyCoreContentEnabled
`public static bool IsOnlyCoreContentEnabled() `

### FindMeshesWithoutLods
`public static void FindMeshesWithoutLods(string module_name) `

### SetDisableDumpGeneration
`public static void SetDisableDumpGeneration(bool value) `

### SetPrintCallstackAtCrahses
`public static void SetPrintCallstackAtCrahses(bool value) `

### GetModulesNames
`public static string[] GetModulesNames() `

### GetFullFilePathOfScene
`public static string GetFullFilePathOfScene(string sceneName) `

### TryGetFullFilePathOfScene
`public static bool TryGetFullFilePathOfScene(string sceneName,out string fullPath) `

### TryGetUniqueIdentifiersForScene
`public static bool TryGetUniqueIdentifiersForScene(string sceneName,out UniqueSceneId identifiers) `

### TryGetUniqueIdentifiersForSceneFile
`public static bool TryGetUniqueIdentifiersForSceneFile(string xsceneFilePath,out UniqueSceneId identifiers) `

### PairSceneNameToModuleName
`public static void PairSceneNameToModuleName(string sceneName,string moduleName) `

### GetSingleModuleScenesOfModule
`public static string[] GetSingleModuleScenesOfModule(string moduleName) `

### GetFullCommandLineString
`public static string GetFullCommandLineString() `

### SetScreenTextRenderingState
`public static void SetScreenTextRenderingState(bool state) `

### SetMessageLineRenderingState
`public static void SetMessageLineRenderingState(bool state) `

### CheckIfTerrainShaderHeaderGenerationFinished
`public static bool CheckIfTerrainShaderHeaderGenerationFinished() `

### GenerateTerrainShaderHeaders
`public static void GenerateTerrainShaderHeaders(string targetPlatform,string targetConfig,string output_path) `

### CompileTerrainShadersDist
`public static void CompileTerrainShadersDist(string targetPlatform,string targetConfig,string output_path) `

### SetCrashOnAsserts
`public static void SetCrashOnAsserts(bool val) `

### SetCrashOnWarnings
`public static void SetCrashOnWarnings(bool val) `

### SetCreateDumpOnWarnings
`public static void SetCreateDumpOnWarnings(bool val) `

### ToggleRender
`public static void ToggleRender() `

### SetRenderAgents
`public static void SetRenderAgents(bool value) `

### CheckShaderCompilation
`public static bool CheckShaderCompilation() `

### CompileAllShaders
`public static void CompileAllShaders(string targetPlatform) `

### GetExecutableWorkingDirectory
`public static string GetExecutableWorkingDirectory() `

### SetDumpFolderPath
`public static void SetDumpFolderPath(string path) `

### CheckSceneForProblems
`public static void CheckSceneForProblems(string sceneName) `

### SetCoreGameState
`public static void SetCoreGameState(int state) `

### GetCoreGameState
`public static int GetCoreGameState() `

### ExecuteCommandLineCommand
`public static string ExecuteCommandLineCommand(string command) `

### QuitGame
`public static void QuitGame() `

### ExitProcess
`public static void ExitProcess(int exitCode) `

### GetBasePath
`public static string GetBasePath() `

### GetVisualTestsValidatePath
`public static string GetVisualTestsValidatePath() `

### GetVisualTestsTestFilesPath
`public static string GetVisualTestsTestFilesPath() `

### GetAttachmentsPath
`public static string GetAttachmentsPath() `

### StartScenePerformanceReport
`public static void StartScenePerformanceReport(string folderPath) `

### IsSceneReportFinished
`public static bool IsSceneReportFinished() `

### GetFps
`public static float GetFps() `

### GetMainFps
`public static float GetMainFps() `

### GetRendererFps
`public static float GetRendererFps() `

### EnableSingleGPUQueryPerFrame
`public static void EnableSingleGPUQueryPerFrame() `

### ClearDecalAtlas
`public static void ClearDecalAtlas(DecalAtlasGroup atlasGroup) `

### FlushManagedObjectsMemory
`public static void FlushManagedObjectsMemory() `

### OnLoadingWindowEnabled
`public static void OnLoadingWindowEnabled() `

### DebugSetGlobalLoadingWindowState
`public static void DebugSetGlobalLoadingWindowState(bool newState) `

### OnLoadingWindowDisabled
`public static void OnLoadingWindowDisabled() `

### DisableGlobalLoadingWindow
`public static void DisableGlobalLoadingWindow() `

### EnableGlobalLoadingWindow
`public static void EnableGlobalLoadingWindow() `

### EnableGlobalEditDataCacher
`public static void EnableGlobalEditDataCacher() `

### DoFullBakeAllLevelsAutomated
`public static void DoFullBakeAllLevelsAutomated(string module,string scene) `

### GetReturnCode
`public static int GetReturnCode() `

### GetUniqueAssertCount
`public static int GetUniqueAssertCount() `

### GetUniqueWarningCount
`public static int GetUniqueWarningCount() `

### DisableGlobalEditDataCacher
`public static void DisableGlobalEditDataCacher() `

### DoFullBakeSingleLevelAutomated
`public static void DoFullBakeSingleLevelAutomated(string module,string scene) `

### DoLightOnlyBakeSingleLevelAutomated
`public static void DoLightOnlyBakeSingleLevelAutomated(string module,string scene) `

### DoLightOnlyBakeAllLevelsAutomated
`public static void DoLightOnlyBakeAllLevelsAutomated(string module,string scene) `

### DidAutomatedGIBakeFinished
`public static bool DidAutomatedGIBakeFinished() `

### GetSelectedEntities
`public static void GetSelectedEntities(ref List<GameEntity> gameEntities) `

### DeleteEntitiesInEditorScene
`public static void DeleteEntitiesInEditorScene(List<GameEntity> gameEntities) `

### CreateSelectionInEditor
`public static void CreateSelectionInEditor(List<GameEntity> gameEntities,string name) `

### SelectEntities
`public static void SelectEntities(List<GameEntity> gameEntities) `

### GetEntitiesOfSelectionSet
`public static void GetEntitiesOfSelectionSet(string selectionSetName,ref List<GameEntity> gameEntities) `

### AddCommandLineFunction
`public static void AddCommandLineFunction(string concatName) `

### GetNumberOfShaderCompilationsInProgress
`public static int GetNumberOfShaderCompilationsInProgress() `

### IsDetailedSoundLogOn
`public static int IsDetailedSoundLogOn() `

### GetCurrentCpuMemoryUsageMB
`public static ulong GetCurrentCpuMemoryUsageMB() `

### GetGpuMemoryOfAllocationGroup
`public static ulong GetGpuMemoryOfAllocationGroup(string name) `

### GetGPUMemoryStats
`public static void GetGPUMemoryStats(ref float totalMemory,ref float renderTargetMemory,ref float depthTargetMemory,ref float srvMemory,ref float bufferMemory) `

### GetDetailedGPUMemoryData
`public static void GetDetailedGPUMemoryData(ref int totalMemoryAllocated,ref int totalMemoryUsed,ref int emptyChunkTotalSize) `

### SetRenderMode
`public static void SetRenderMode(Utilities.EngineRenderDisplayMode mode) `

### SetForceDrawEntityID
`public static void SetForceDrawEntityID(bool value) `

### AddPerformanceReportToken
`public static void AddPerformanceReportToken(string performance_type,string name,float loading_time) `

### AddSceneObjectReport
`public static void AddSceneObjectReport(string scene_name,string report_name,float report_value) `

### OutputPerformanceReports
`public static void OutputPerformanceReports() `

### TakeScreenshot
`public static void TakeScreenshot(PlatformFilePath path) `
`public static void TakeScreenshot(string path) `

### TakeScreenshotAsPng
`public static void TakeScreenshotAsPng(string path) `

### SetAllocationAlwaysValidScene
`public static void SetAllocationAlwaysValidScene(Scene scene) `

### CheckResourceModifications
`public static void CheckResourceModifications() `

### SetGraphicsPreset
`public static void SetGraphicsPreset(int preset) `

### GetLocalOutputPath
`public static string GetLocalOutputPath() `

### GetPCInfo
`public static string GetPCInfo() `

### GetGPUMemoryMB
`public static int GetGPUMemoryMB() `

### GetCurrentEstimatedGPUMemoryCostMB
`public static int GetCurrentEstimatedGPUMemoryCostMB() `

### DumpGPUMemoryStatistics
`public static void DumpGPUMemoryStatistics(string filePath) `

### SaveDataAsTexture
`public static int SaveDataAsTexture(string path,int width,int height,float[] data) `

### ClearOldResourcesAndObjects
`public static void ClearOldResourcesAndObjects() `

### LoadVirtualTextureTileset
`public static void LoadVirtualTextureTileset(string name) `

### GetDeltaTime
`public static float GetDeltaTime(int timerId) `

### LoadSkyBoxes
`public static void LoadSkyBoxes() `

### GetApplicationName
`public static string GetApplicationName() `

### OpenConsoleStorePage
`public static void OpenConsoleStorePage(string productId) `

### SetWindowTitle
`public static void SetWindowTitle(string title) `

### ProcessWindowTitle
`public static string ProcessWindowTitle(string title) `

### GetCurrentProcessID
`public static uint GetCurrentProcessID() `

### DoDelayedexit
`public static void DoDelayedexit(int returnCode) `

### SetAssertionsAndWarningsSetExitCode
`public static void SetAssertionsAndWarningsSetExitCode(bool value) `

### SetReportMode
`public static void SetReportMode(bool reportMode) `

### SetAssertionAtShaderCompile
`public static void SetAssertionAtShaderCompile(bool value) `

### SetCrashReportCustomString
`public static void SetCrashReportCustomString(string customString) `

### SetCrashReportCustomStack
`public static void SetCrashReportCustomStack(string customStack) `

### GetSteamAppId
`public static int GetSteamAppId() `

### SetForceVsync
`public static void SetForceVsync(bool value) `

### LoadBannerlordConfigFile
`public static string LoadBannerlordConfigFile() `

### SaveConfigFile
`public static SaveResult SaveConfigFile(string configProperties) `

### OpenOnscreenKeyboard
`public static void OpenOnscreenKeyboard(string initialText,string descriptionText,int maxLength,int keyboardTypeEnum) `

### GetSystemLanguage
`public static string GetSystemLanguage() `

### RegisterGPUAllocationGroup
`public static int RegisterGPUAllocationGroup(string name) `

### GetMemoryUsageOfCategory
`public static int GetMemoryUsageOfCategory(int category) `

### GetDetailedXBOXMemoryInfo
`public static string GetDetailedXBOXMemoryInfo() `

### SetFrameLimiterWithSleep
`public static void SetFrameLimiterWithSleep(bool value) `

### GetFrameLimiterWithSleep
`public static bool GetFrameLimiterWithSleep() `

### GetPossibleCommandLineStartingWith
`public static string GetPossibleCommandLineStartingWith(string command,int index) `

### IsDevkit
`public static bool IsDevkit() `

### IsLockhartPlatform
`public static bool IsLockhartPlatform() `

### GetVertexBufferChunkSystemMemoryUsage
`public static int GetVertexBufferChunkSystemMemoryUsage() `

### GetBuildNumber
`public static int GetBuildNumber() `

### GetApplicationVersionWithBuildNumber
`public static ApplicationVersion GetApplicationVersionWithBuildNumber() `

### ParallelFor
`public static void ParallelFor(int startIndex,int endIndex,long curKey,int grainSize) `

### ParallelForWithDt
`public static void ParallelForWithDt(int startIndex,int endIndex,long curKey,int grainSize) `

### ParallelForWithoutRenderThread
`public static void ParallelForWithoutRenderThread(int startIndex,int endIndex,long curKey,int grainSize) `

### ParallelForWithoutRenderThreadDt
`public static void ParallelForWithoutRenderThreadDt(int startIndex,int endIndex,long curKey,int grainSize) `

### ClearShaderMemory
`public static void ClearShaderMemory() `

### RegisterMeshForGPUMorph
`public static void RegisterMeshForGPUMorph(string metaMeshName) `

### GetMainThreadId
`public static ulong GetMainThreadId() `

### GetCurrentThreadId
`public static ulong GetCurrentThreadId() `

### SetWatchdogValue
`public static void SetWatchdogValue(string fileName,string groupName,string key,string value) `

### SetWatchdogAutoreport
`public static void SetWatchdogAutoreport(bool enabled) `

### DetachWatchdog
`public static void DetachWatchdog() `

### GetPlatformModulePaths
`public static string GetPlatformModulePaths() `

### IsAsyncPhysicsThread
`public static bool IsAsyncPhysicsThread() `

### StartLoadingStuckCheckState
`public static void StartLoadingStuckCheckState(float timeoutThresholdSeconds) `

### EndLoadingStuckCheckState
`public static void EndLoadingStuckCheckState() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
