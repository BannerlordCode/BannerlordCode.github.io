# Utilities / Utilities

**Namespace**: TaleWorlds.Engine
**File**: `bannerlord-1.3.15/TaleWorlds.Engine/Utilities.cs`
**Purpose**: Static utility class providing application-level functionality and system information / 静态工具类，提供应用程序级功能和系统信息

## Overview / 概述

`Utilities` is a static utility class in TaleWorlds.Engine providing extensive static methods for accessing application information, performance metrics, rendering settings, file path management, and more. It has 1100+ lines of code, and all methods call native implementation via `EngineApplicationInterface.IUtil`.

`Utilities` 是 TaleWorlds.Engine 中的一个静态工具类，提供大量静态方法用于访问应用程序信息、性能指标、渲染设置、文件路径管理等。它有 1100+ 行代码，所有方法都通过 `EngineApplicationInterface.IUtil` 调用原生实现。

## Performance Monitoring Methods / 性能监控方法

| Method | Signature | Description |
|--------|-----------|-------------|
| GetFps | `public static float GetFps()` | Get frames per second / 获取帧率 |
| GetMainFps | `public static float GetMainFps()` | Get main thread FPS / 获取主线程帧率 |
| GetRendererFps | `public static float GetRendererFps()` | Get renderer FPS / 获取渲染器帧率 |
| GetDeltaTime | `public static float GetDeltaTime(int timerId)` | Get delta time for specific timer / 获取指定计时器的增量时间 |
| GetApplicationMemory | `public static float GetApplicationMemory()` | Get application memory usage / 获取应用程序内存使用 |
| GetApplicationMemoryStatistics | `public static string GetApplicationMemoryStatistics()` | Get application memory statistics / 获取应用程序内存统计 |
| GetNativeMemoryStatistics | `public static string GetNativeMemoryStatistics()` | Get native memory statistics / 获取原生内存统计 |
| GetCurrentCpuMemoryUsageMB | `public static ulong GetCurrentCpuMemoryUsageMB()` | Get current CPU memory usage / 获取当前 CPU 内存使用 |
| GetGPUMemoryMB | `public static int GetGPUMemoryMB()` | Get GPU memory / 获取 GPU 内存 |
| GetGpuMemoryOfAllocationGroup | `public static ulong GetGpuMemoryOfAllocationGroup(string name)` | Get GPU memory of allocation group / 获取分配组的 GPU 内存 |
| GetGPUMemoryStats | `public static void GetGPUMemoryStats(ref float totalMemory, ref float renderTargetMemory, ref float depthTargetMemory, ref float srvMemory, ref float bufferMemory)` | Get GPU memory stats / 获取 GPU 内存统计 |

## Path and File Methods / 路径和文件方法

| Method | Signature | Description |
|--------|-----------|-------------|
| GetBasePath | `public static string GetBasePath()` | Get base path / 获取基础路径 |
| GetExecutableWorkingDirectory | `public static string GetExecutableWorkingDirectory()` | Get executable working directory / 获取可执行文件工作目录 |
| GetFullFilePathOfScene | `public static string GetFullFilePathOfScene(string sceneName)` | Get full file path of scene / 获取场景文件的完整路径 |
| GetLocalOutputPath | `public static string GetLocalOutputPath()` | Get local output path / 获取本地输出路径 |
| GetAttachmentsPath | `public static string GetAttachmentsPath()` | Get attachments path / 获取附件路径 |
| GetModulesNames | `public static string[] GetModulesNames()` | Get all module names / 获取所有模块名称 |
| GetSingleModuleScenesOfModule | `public static string[] GetSingleModuleScenesOfModule(string moduleName)` | Get scenes of a module / 获取模块的场景列表 |
| SetDumpFolderPath | `public static void SetDumpFolderPath(string path)` | Set dump folder path / 设置转储文件夹路径 |

## Parallel Processing Methods / 并行处理方法

| Method | Signature | Description |
|--------|-----------|-------------|
| ParallelFor | `public static void ParallelFor(int startIndex, int endIndex, long curKey, int grainSize)` | Execute for loop in parallel / 并行执行 for 循环 |
| ParallelForWithoutRenderThread | `public static void ParallelForWithoutRenderThread(int startIndex, int endIndex, long curKey, int grainSize)` | Execute parallel without render thread / 在渲染线程外并行执行 |
| ParallelForWithDt | `public static void ParallelForWithDt(int startIndex, int endIndex, long curKey, int grainSize)` | Execute parallel with delta time / 带时间增量并行执行 |
| GetMainThreadId | `public static ulong GetMainThreadId()` | Get main thread ID / 获取主线程 ID |
| GetCurrentThreadId | `public static ulong GetCurrentThreadId()` | Get current thread ID / 获取当前线程 ID |
| IsAsyncPhysicsThread | `public static bool IsAsyncPhysicsThread()` | Check if async physics thread / 检查是否是异步物理线程 |

## Main Thread Job Methods / 主线程作业方法

| Method | Signature | Description |
|--------|-----------|-------------|
| ConstructMainThreadJob | `public static void ConstructMainThreadJob(Delegate function, params object[] parameters)` | Construct main thread job / 构造主线程作业 |
| ConstructMainThreadJob | `public static void ConstructMainThreadJob(Semaphore semaphore, Delegate function, params object[] parameters)` | Construct main thread job with semaphore / 带信号量构造主线程作业 |
| RunJobs | `public static void RunJobs()` | Run all main thread jobs / 执行所有主线程作业 |
| WaitJobs | `public static void WaitJobs()` | Wait for all jobs to complete / 等待所有作业完成 |

## Rendering Control Methods / 渲染控制方法

| Method | Signature | Description |
|--------|-----------|-------------|
| ToggleRender | `public static void ToggleRender()` | Toggle render state / 切换渲染状态 |
| SetRenderAgents | `public static void SetRenderAgents(bool value)` | Set render agents / 设置是否渲染 Agent |
| SetRenderMode | `public static void SetRenderMode(Utilities.EngineRenderDisplayMode mode)` | Set render mode / 设置渲染模式 |
| SetForceDrawEntityID | `public static void SetForceDrawEntityID(bool value)` | Set force draw entity ID / 设置强制绘制实体 ID |
| SetForceVsync | `public static void SetForceVsync(bool value)` | Set force VSync / 设置强制垂直同步 |
| EnableSingleGPUQueryPerFrame | `public static void EnableSingleGPUQueryPerFrame()` | Enable single GPU query per frame / 启用单 GPU 每帧查询 |

## Shader Related Methods / 着色器相关方法

| Method | Signature | Description |
|--------|-----------|-------------|
| CheckShaderCompilation | `public static bool CheckShaderCompilation()` | Check shader compilation / 检查着色器编译状态 |
| CompileAllShaders | `public static void CompileAllShaders(string targetPlatform)` | Compile all shaders / 编译所有着色器 |
| ClearShaderMemory | `public static void ClearShaderMemory()` | Clear shader memory / 清除着色器内存 |
| GetNumberOfShaderCompilationsInProgress | `public static int GetNumberOfShaderCompilationsInProgress()` | Get number of shader compilations in progress / 获取正在编译的着色器数量 |

## Screenshot Methods / 截图方法

| Method | Signature | Description |
|--------|-----------|-------------|
| TakeScreenshot | `public static void TakeScreenshot(string path)` | Take screenshot / 拍摄截图 |
| TakeScreenshot | `public static void TakeScreenshot(PlatformFilePath path)` | Take screenshot with platform path / 拍摄截图（平台路径） |
| TakeSSFromTop | `public static string TakeSSFromTop(string file_name)` | Take screenshot from top / 从顶部拍摄截图 |

## System Information Methods / 系统信息方法

| Method | Signature | Description |
|--------|-----------|-------------|
| GetSystemLanguage | `public static string GetSystemLanguage()` | Get system language / 获取系统语言 |
| GetPCInfo | `public static string GetPCInfo()` | Get PC info / 获取 PC 信息 |
| GetApplicationName | `public static string GetApplicationName()` | Get application name / 获取应用程序名称 |
| GetSteamAppId | `public static int GetSteamAppId()` | Get Steam App ID / 获取 Steam App ID |
| GetBuildNumber | `public static int GetBuildNumber()` | Get build number / 获取构建号 |
| GetCurrentProcessID | `public static uint GetCurrentProcessID()` | Get current process ID / 获取当前进程 ID |
| CommandLineArgumentExists | `public static bool CommandLineArgumentExists(string str)` | Check if command line argument exists / 检查命令行参数是否存在 |
| GetFullCommandLineString | `public static string GetFullCommandLineString()` | Get full command line string / 获取完整命令行字符串 |

## Editor Methods / 编辑器方法

| Method | Signature | Description |
|--------|-----------|-------------|
| GetSelectedEntities | `public static void GetSelectedEntities(ref List<GameEntity> gameEntities)` | Get selected entities / 获取选中的实体 |
| SelectEntities | `public static void SelectEntities(List<GameEntity> gameEntities)` | Select entities / 选中实体 |
| DeleteEntitiesInEditorScene | `public static void DeleteEntitiesInEditorScene(List<GameEntity> gameEntities)` | Delete entities in editor scene / 删除编辑器场景中的实体 |
| CreateSelectionInEditor | `public static void CreateSelectionInEditor(List<GameEntity> gameEntities, string name)` | Create selection in editor / 在编辑器中创建选择集 |

## Game State Methods / 游戏状态方法

| Method | Signature | Description |
|--------|-----------|-------------|
| QuitGame | `public static void QuitGame()` | Quit game / 退出游戏 |
| ExitProcess | `public static void ExitProcess(int exitCode)` | Exit process / 退出进程 |
| DisableCoreGame | `public static void DisableCoreGame()` | Disable core game / 禁用核心游戏 |
| SetCoreGameState | `public static void SetCoreGameState(int state)` | Set core game state / 设置核心游戏状态 |
| GetCoreGameState | `public static int GetCoreGameState()` | Get core game state / 获取核心游戏状态 |
| IsOnlyCoreContentEnabled | `public static bool IsOnlyCoreContentEnabled()` | Check if only core content enabled / 检查是否仅启用核心内容 |

## Important Properties / 重要属性

| Property | Type | Description |
|----------|------|-------------|
| EngineFrameNo | `int` | Get current engine frame number / 获取当前引擎帧号 |
| EditModeEnabled | `bool` | Check if edit mode is enabled / 检查编辑器模式是否启用 |
| renderingActive | `bool` | Whether rendering is active / 渲染是否活跃 |

## Important Enums / 重要枚举

| Enum | Description |
|------|-------------|
| EngineRenderDisplayMode | Engine render display mode enum with 40+ debug render modes (ShowAlbedo, ShowNormals, ShowDepth, etc.) / 渲染显示模式枚举，包含 40+ 种渲染调试模式（如 ShowAlbedo, ShowNormals, ShowDepth 等） |

## Usage Example / 使用示例

```csharp
// Get performance info
// 获取性能信息
float fps = Utilities.GetFps();
float memory = Utilities.GetApplicationMemory();

// Get paths
// 获取路径
string basePath = Utilities.GetBasePath();
string scenePath = Utilities.GetFullFilePathOfScene("battle_scene");

// Take screenshot
// 截图
Utilities.TakeScreenshot("screenshot.png");

// Parallel processing
// 并行处理
Utilities.ParallelFor(0, 100, 0, 10, (int i) => {
    // Work to be done in parallel
    // 并行执行的工作
});
```

## Notes / 注意事项

- Utilities is a static class and all methods are static methods
- Utilities 是一个静态类，所有方法都是静态方法
- All methods call native implementation via `EngineApplicationInterface.IUtil`
- 所有方法都通过 `EngineApplicationInterface.IUtil` 调用原生实现
- Some methods (like ParallelFor) accept delegate parameters for parallel execution
- 某些方法（如 ParallelFor）接受委托参数用于并行执行
- The render mode enum EngineRenderDisplayMode contains many debug visualization options
- 渲染模式枚举 EngineRenderDisplayMode 包含大量调试可视化选项
