# Module / Module

**Namespace**: TaleWorlds.MountAndBlade
**File**: `bannerlord-1.3.15/TaleWorlds.MountAndBlade/Module.cs`
**Purpose**: Singleton class managing module loading, game state, and module information / 单例类，管理模组加载、游戏状态和模块信息

## Overview / 概述

`Module` is the core singleton class responsible for managing all module loading, initialization, and game state. It is created at game startup and is the main entry point for accessing current module information.

`Module` 是游戏的核心单例类，负责管理所有模组的加载、初始化和游戏状态。它在游戏启动时创建，是访问当前模组信息的主要入口。

## Important Properties / 重要属性

| Property | Type | Description |
|----------|------|-------------|
| CurrentModule | `static Module` | Current module instance, singleton access point / 当前模组实例，单例访问点 |
| GlobalGameStateManager | `GameStateManager` | Global game state manager / 全局游戏状态管理器 |
| GlobalTextManager | `GameTextManager` | Global text manager / 全局文本管理器 |
| LoadingFinished | `bool` | Whether loading has finished / 加载是否完成 |
| MultiplayerRequested | `bool` | Whether multiplayer is requested / 是否请求多人游戏 |

## Important Methods / 重要方法

| Method | Signature | Description |
|--------|-----------|-------------|
| GetInstance | `public static Module GetInstance()` | Get Module singleton / 获取 Module 单例 |
| CollectSubModules | `public MBReadOnlyList CollectSubModules()` | Get all loaded SubModules / 获取所有已加载的 SubModule |
| LoadSingleModule | `internal void LoadSingleModule(string modulePath)` | Load a single module / 加载单个模组 |
| Initialize | `internal void Initialize()` | Initialize module system / 初始化模组系统 |
| GetSubModuleType | `public Type GetSubModuleType(string name)` | Get SubModule type by name / 通过名称获取 SubModule 类型 |
| OnApplicationTick | `internal void OnApplicationTick(float dt)` | Main game loop tick / 游戏循环主 tick |

## Usage Example / 使用示例

```csharp
// Get current module
// 获取当前模组
Module module = Module.CurrentModule;

// Get all SubModules
// 获取所有 SubModule
MBReadOnlyList<MBSubModuleBase> subModules = module.CollectSubModules();

// Check if multiplayer
// 检查是否多人游戏
if (module.MultiplayerRequested)
{
    // Handle multiplayer logic
    // 处理多人游戏逻辑
}

// Access global text manager
// 访问全局文本管理器
GameTextManager textManager = module.GlobalTextManager;

// Access game state manager
// 访问游戏状态管理器
GameStateManager stateManager = module.GlobalGameStateManager;
```

## Internal Loading Flow / 内部加载流程

```
1. CreateModule() - Create Module singleton / 创建 Module 单例
2. Module.Initialize() - Initialize module system / 初始化模块系统
3. LoadSubModules() - Load all SubModule DLLs / 加载所有 SubModule 的 DLL
4. AddSubModule() - Create MBSubModuleBase instance for each SubModuleInfo / 为每个 SubModuleInfo 创建 MBSubModuleBase 实例
5. InitializeSubModuleBases() - Call OnSubModuleLoad() for all SubModules / 调用所有 SubModule 的 OnSubModuleLoad()
6. OnNewModuleLoaded() - Call OnNewModuleLoad() for all SubModules / 调用所有 SubModule 的 OnNewModuleLoad()
7. SetInitialModuleScreenAsRootScreen() - Show main screen / 显示主界面
```

## Notes / 注意事项

- `Module.CurrentModule` is the main entry point for accessing module information
- `Module.CurrentModule` 是访问模组信息的主要入口
- Do not try to create a Module instance, it is a singleton
- 不要尝试创建 Module 实例，它是一个单例
- SubModule loading order is affected by declaration order in SubModule.xml
- SubModule 的加载顺序受 SubModule.xml 中声明顺序影响
