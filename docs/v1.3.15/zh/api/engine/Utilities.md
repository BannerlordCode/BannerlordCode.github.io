# Utilities / Utilities

**Namespace**: TaleWorlds.Engine
**File**: `bannerlord-1.3.15/TaleWorlds.Engine/Utilities.cs`
**Purpose**: 静态工具类，提供应用程序级功能和系统信息 / Static utility class providing application-level functionality and system information

## 概述 / Overview

`Utilities` 是 TaleWorlds.Engine 中的一个静态工具类，提供大量静态方法用于访问应用程序信息、性能指标、渲染设置、文件路径管理等。它有 1100+ 行代码，所有方法都通过 `EngineApplicationInterface.IUtil` 调用原生实现。

`Utilities` is a static utility class in TaleWorlds.Engine providing extensive static methods for accessing application information, performance metrics, rendering settings, file path management, and more. It has 1100+ lines of code, and all methods call native implementation via `EngineApplicationInterface.IUtil`.

## 性能监控方法 / Performance Monitoring Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| GetFps | `public static float GetFps()` | 获取帧率 / Get frames per second |
| GetMainFps | `public static float GetMainFps()` | 获取主线程帧率 / Get main thread FPS |
| GetRendererFps | `public static float GetRendererFps()` | 获取渲染器帧率 / Get renderer FPS |
| GetDeltaTime | `public static float GetDeltaTime(int timerId)` | 获取指定计时器的增量时间 / Get delta time for specific timer |
| GetApplicationMemory | `public static float GetApplicationMemory()` | 获取应用程序内存使用 / Get application memory usage |
| GetApplicationMemoryStatistics | `public static string GetApplicationMemoryStatistics()` | 获取应用程序内存统计 / Get application memory statistics |
| GetNativeMemoryStatistics | `public static string GetNativeMemoryStatistics()` | 获取原生内存统计 / Get native memory statistics |
| GetCurrentCpuMemoryUsageMB | `public static ulong GetCurrentCpuMemoryUsageMB()` | 获取当前 CPU 内存使用 / Get current CPU memory usage |
| GetGPUMemoryMB | `public static int GetGPUMemoryMB()` | 获取 GPU 内存 / Get GPU memory |
| GetGpuMemoryOfAllocationGroup | `public static ulong GetGpuMemoryOfAllocationGroup(string name)` | 获取分配组的 GPU 内存 / Get GPU memory of allocation group |
| GetGPUMemoryStats | `public static void GetGPUMemoryStats(ref float totalMemory, ref float renderTargetMemory, ref float depthTargetMemory, ref float srvMemory, ref float bufferMemory)` | 获取 GPU 内存统计 / Get GPU memory stats |

## 路径和文件方法 / Path and File Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| GetBasePath | `public static string GetBasePath()` | 获取基础路径 / Get base path |
| GetExecutableWorkingDirectory | `public static string GetExecutableWorkingDirectory()` | 获取可执行文件工作目录 / Get executable working directory |
| GetFullFilePathOfScene | `public static string GetFullFilePathOfScene(string sceneName)` | 获取场景文件的完整路径 / Get full file path of scene |
| GetLocalOutputPath | `public static string GetLocalOutputPath()` | 获取本地输出路径 / Get local output path |
| GetAttachmentsPath | `public static string GetAttachmentsPath()` | 获取附件路径 / Get attachments path |
| GetModulesNames | `public static string[] GetModulesNames()` | 获取所有模块名称 / Get all module names |
| GetSingleModuleScenesOfModule | `public static string[] GetSingleModuleScenesOfModule(string moduleName)` | 获取模块的场景列表 / Get scenes of a module |
| SetDumpFolderPath | `public static void SetDumpFolderPath(string path)` | 设置转储文件夹路径 / Set dump folder path |

## 并行处理方法 / Parallel Processing Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| ParallelFor | `public static void ParallelFor(int startIndex, int endIndex, long curKey, int grainSize)` | 并行执行 for 循环 / Execute for loop in parallel |
| ParallelForWithoutRenderThread | `public static void ParallelForWithoutRenderThread(int startIndex, int endIndex, long curKey, int grainSize)` | 在渲染线程外并行执行 / Execute parallel without render thread |
| ParallelForWithDt | `public static void ParallelForWithDt(int startIndex, int endIndex, long curKey, int grainSize)` | 带时间增量并行执行 / Execute parallel with delta time |
| GetMainThreadId | `public static ulong GetMainThreadId()` | 获取主线程 ID / Get main thread ID |
| GetCurrentThreadId | `public static ulong GetCurrentThreadId()` | 获取当前线程 ID / Get current thread ID |
| IsAsyncPhysicsThread | `public static bool IsAsyncPhysicsThread()` | 检查是否是异步物理线程 / Check if async physics thread |

## 主线程作业方法 / Main Thread Job Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| ConstructMainThreadJob | `public static void ConstructMainThreadJob(Delegate function, params object[] parameters)` | 构造主线程作业 / Construct main thread job |
| ConstructMainThreadJob | `public static void ConstructMainThreadJob(Semaphore semaphore, Delegate function, params object[] parameters)` | 带信号量构造主线程作业 / Construct main thread job with semaphore |
| RunJobs | `public static void RunJobs()` | 执行所有主线程作业 / Run all main thread jobs |
| WaitJobs | `public static void WaitJobs()` | 等待所有作业完成 / Wait for all jobs to complete |

## 渲染控制方法 / Rendering Control Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| ToggleRender | `public static void ToggleRender()` | 切换渲染状态 / Toggle render state |
| SetRenderAgents | `public static void SetRenderAgents(bool value)` | 设置是否渲染 Agent / Set render agents |
| SetRenderMode | `public static void SetRenderMode(Utilities.EngineRenderDisplayMode mode)` | 设置渲染模式 / Set render mode |
| SetForceDrawEntityID | `public static void SetForceDrawEntityID(bool value)` | 设置强制绘制实体 ID / Set force draw entity ID |
| SetForceVsync | `public static void SetForceVsync(bool value)` | 设置强制垂直同步 / Set force VSync |
| EnableSingleGPUQueryPerFrame | `public static void EnableSingleGPUQueryPerFrame()` | 启用单 GPU 每帧查询 / Enable single GPU query per frame |

## 着色器相关方法 / Shader Related Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| CheckShaderCompilation | `public static bool CheckShaderCompilation()` | 检查着色器编译状态 / Check shader compilation |
| CompileAllShaders | `public static void CompileAllShaders(string targetPlatform)` | 编译所有着色器 / Compile all shaders |
| ClearShaderMemory | `public static void ClearShaderMemory()` | 清除着色器内存 / Clear shader memory |
| GetNumberOfShaderCompilationsInProgress | `public static int GetNumberOfShaderCompilationsInProgress()` | 获取正在编译的着色器数量 / Get number of shader compilations in progress |

## 截图方法 / Screenshot Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| TakeScreenshot | `public static void TakeScreenshot(string path)` | 拍摄截图 / Take screenshot |
| TakeScreenshot | `public static void TakeScreenshot(PlatformFilePath path)` | 拍摄截图（平台路径）/ Take screenshot with platform path |
| TakeSSFromTop | `public static string TakeSSFromTop(string file_name)` | 从顶部拍摄截图 / Take screenshot from top |

## 系统信息方法 / System Information Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| GetSystemLanguage | `public static string GetSystemLanguage()` | 获取系统语言 / Get system language |
| GetPCInfo | `public static string GetPCInfo()` | 获取 PC 信息 / Get PC info |
| GetApplicationName | `public static string GetApplicationName()` | 获取应用程序名称 / Get application name |
| GetSteamAppId | `public static int GetSteamAppId()` | 获取 Steam App ID / Get Steam App ID |
| GetBuildNumber | `public static int GetBuildNumber()` | 获取构建号 / Get build number |
| GetCurrentProcessID | `public static uint GetCurrentProcessID()` | 获取当前进程 ID / Get current process ID |
| CommandLineArgumentExists | `public static bool CommandLineArgumentExists(string str)` | 检查命令行参数是否存在 / Check if command line argument exists |
| GetFullCommandLineString | `public static string GetFullCommandLineString()` | 获取完整命令行字符串 / Get full command line string |

## 编辑器方法 / Editor Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| GetSelectedEntities | `public static void GetSelectedEntities(ref List<GameEntity> gameEntities)` | 获取选中的实体 / Get selected entities |
| SelectEntities | `public static void SelectEntities(List<GameEntity> gameEntities)` | 选中实体 / Select entities |
| DeleteEntitiesInEditorScene | `public static void DeleteEntitiesInEditorScene(List<GameEntity> gameEntities)` | 删除编辑器场景中的实体 / Delete entities in editor scene |
| CreateSelectionInEditor | `public static void CreateSelectionInEditor(List<GameEntity> gameEntities, string name)` | 在编辑器中创建选择集 / Create selection in editor |

## 游戏状态方法 / Game State Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| QuitGame | `public static void QuitGame()` | 退出游戏 / Quit game |
| ExitProcess | `public static void ExitProcess(int exitCode)` | 退出进程 / Exit process |
| DisableCoreGame | `public static void DisableCoreGame()` | 禁用核心游戏 / Disable core game |
| SetCoreGameState | `public static void SetCoreGameState(int state)` | 设置核心游戏状态 / Set core game state |
| GetCoreGameState | `public static int GetCoreGameState()` | 获取核心游戏状态 / Get core game state |
| IsOnlyCoreContentEnabled | `public static bool IsOnlyCoreContentEnabled()` | 检查是否仅启用核心内容 / Check if only core content enabled |

## 重要属性 / Important Properties

| Property | Type | Description |
|----------|------|-------------|
| EngineFrameNo | `int` | 获取当前引擎帧号 / Get current engine frame number |
| EditModeEnabled | `bool` | 检查编辑器模式是否启用 / Check if edit mode is enabled |
| renderingActive | `bool` | 渲染是否活跃 / Whether rendering is active |

## 重要枚举 / Important Enums

| Enum | Description |
|------|-------------|
| EngineRenderDisplayMode | 渲染显示模式枚举，包含 40+ 种渲染调试模式（如 ShowAlbedo, ShowNormals, ShowDepth 等）/ Engine render display mode enum with 40+ debug render modes |

## 使用示例 / Usage Example

```csharp
// 获取性能信息
// Get performance info
float fps = Utilities.GetFps();
float memory = Utilities.GetApplicationMemory();

// 获取路径
// Get paths
string basePath = Utilities.GetBasePath();
string scenePath = Utilities.GetFullFilePathOfScene("battle_scene");

// 截图
// Take screenshot
Utilities.TakeScreenshot("screenshot.png");

// 并行处理
// Parallel processing
Utilities.ParallelFor(0, 100, 0, 10, (int i) => {
    // 并行执行的工作
    // Work to be done in parallel
});
```

## 注意事项 / Notes

- Utilities 是一个静态类，所有方法都是静态方法
- Utilities is a static class and all methods are static methods
- 所有方法都通过 `EngineApplicationInterface.IUtil` 调用原生实现
- All methods call native implementation via `EngineApplicationInterface.IUtil`
- 某些方法（如 ParallelFor）接受委托参数用于并行执行
- Some methods (like ParallelFor) accept delegate parameters for parallel execution
- 渲染模式枚举 EngineRenderDisplayMode 包含大量调试可视化选项
- The render mode enum EngineRenderDisplayMode contains many debug visualization options
