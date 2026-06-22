<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Module`
- [← 本领域 / 返回 core](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Module / Module

**Namespace**: TaleWorlds.MountAndBlade
**File**: `bannerlord-1.3.15/TaleWorlds.MountAndBlade/Module.cs`
**Purpose**: 单例类，管理模组加载、游戏状态和模块信息 / Singleton class managing module loading, game state, and module information

## 概述 / Overview

`Module` 是游戏的核心单例类，负责管理所有模组的加载、初始化和游戏状态。它在游戏启动时创建，是访问当前模组信息的主要入口。

`Module` is the core singleton class responsible for managing all module loading, initialization, and game state. It is created at game startup and is the main entry point for accessing current module information.

## 开发用例 / Developer Use Cases

### 用例 1: 获取当前模组并读取已加载 SubModule

**场景**: 在运行时枚举所有已加载的 SubModule，用于依赖检测或冲突报告。

```csharp
Module module = Module.CurrentModule;
MBReadOnlyList<MBSubModuleBase> subs = module.CollectSubModules();
foreach (var sub in subs) { /* 检查 */ }
```

**要点**: `CurrentModule` 是单例访问点；`CollectSubModules` 返回只读快照，不要假设顺序与 SubModule.xml 完全一致（受依赖排序影响）。

### 用例 2: 通过名称查找 SubModule 类型

**场景**: 反射式定位某个 SubModule 以调用其方法。

```csharp
Type t = module.GetSubModuleType("MyMod");
```

**要点**: 名称对应 `SubModule.xml` 中 `AssemblyName`；未找到返回 `null`。

### 用例 3: 访问全局文本与状态管理器

**场景**: 注册自定义本地化字符串或读取当前游戏状态。

```csharp
GameTextManager text = module.GlobalTextManager;
GameStateManager states = module.GlobalGameStateManager;
```

**要点**: `GlobalTextManager` 是注册 `GameText` 的入口；`GlobalGameStateManager` 在游戏未运行时也可访问（用于主菜单状态）。

### 用例 4: 判断多人/单人模式

**场景**: 行为分支需要按多人/单人走不同逻辑。

```csharp
if (module.MultiplayerRequested) { /* 多人逻辑 */ }
```

**要点**: `MultiplayerRequested` 在玩家选择多人模式后置位；判断当前是否真的在战斗中用 `Mission.Current != null`。

## 重要属性 / Important Properties

| Property | Type | Description |
|----------|------|-------------|
| CurrentModule | `static Module` | 当前模组实例，单例访问点 / Current module instance, singleton access point |
| GlobalGameStateManager | `GameStateManager` | 全局游戏状态管理器 / Global game state manager |
| GlobalTextManager | `GameTextManager` | 全局文本管理器 / Global text manager |
| LoadingFinished | `bool` | 加载是否完成 / Whether loading has finished |
| MultiplayerRequested | `bool` | 是否请求多人游戏 / Whether multiplayer is requested |

## 重要方法 / Important Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| GetInstance | `public static Module GetInstance()` | 获取 Module 单例 / Get Module singleton |
| CollectSubModules | `public MBReadOnlyList CollectSubModules()` | 获取所有已加载的 SubModule / Get all loaded SubModules |
| LoadSingleModule | `internal void LoadSingleModule(string modulePath)` | 加载单个模组 / Load a single module |
| Initialize | `internal void Initialize()` | 初始化模组系统 / Initialize module system |
| GetSubModuleType | `public Type GetSubModuleType(string name)` | 通过名称获取 SubModule 类型 / Get SubModule type by name |
| OnApplicationTick | `internal void OnApplicationTick(float dt)` | 游戏循环主 tick / Main game loop tick |

## 使用示例 / Usage Example

```csharp
// 获取当前模组
// Get current module
Module module = Module.CurrentModule;

// 获取所有 SubModule
// Get all SubModules
MBReadOnlyList<MBSubModuleBase> subModules = module.CollectSubModules();

// 检查是否多人游戏
// Check if multiplayer
if (module.MultiplayerRequested)
{
    // 处理多人游戏逻辑
    // Handle multiplayer logic
}

// 访问全局文本管理器
// Access global text manager
GameTextManager textManager = module.GlobalTextManager;

// 访问游戏状态管理器
// Access game state manager
GameStateManager stateManager = module.GlobalGameStateManager;
```

## 内部加载流程 / Internal Loading Flow

```
1. CreateModule() - 创建 Module 单例
2. Module.Initialize() - 初始化模块系统
3. LoadSubModules() - 加载所有 SubModule 的 DLL
4. AddSubModule() - 为每个 SubModuleInfo 创建 MBSubModuleBase 实例
5. InitializeSubModuleBases() - 调用所有 SubModule 的 OnSubModuleLoad()
6. OnNewModuleLoaded() - 调用所有 SubModule 的 OnNewModuleLoad()
7. SetInitialModuleScreenAsRootScreen() - 显示主界面
```

## 注意事项 / Notes

- `Module.CurrentModule` 是访问模组信息的主要入口
- `Module.CurrentModule` is the main entry point for accessing module information
- 不要尝试创建 Module 实例，它是一个单例
- Do not try to create a Module instance, it is a singleton
- SubModule 的加载顺序受 SubModule.xml 中声明顺序影响
- SubModule loading order is affected by declaration order in SubModule.xml
