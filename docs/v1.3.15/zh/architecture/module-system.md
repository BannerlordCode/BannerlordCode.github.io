---
title: 模块系统详解 / Module System
description: MBSubModuleBase生命周期、模块加载机制、SubModule配置详解
---

# 模块系统详解 / Module System

**Namespace**: TaleWorlds.MountAndBlade
**Depends On**: TaleWorlds.ModuleManager, TaleWorlds.Core

## 概述 / Overview

Bannerlord的模块系统是整个游戏架构的核心。每个Mod都是一个`SubModule`，通过继承`MBSubModuleBase`来实现游戏启动时加载、自定义逻辑注册等功能。

The module system is the core of Bannerlord's architecture. Every mod is a `SubModule` that extends `MBSubModuleBase` to integrate with the game's lifecycle.

## MBSubModuleBase 生命周期 / Lifecycle

`MBSubModuleBase` 定义了完整的生命周期钩子：

```csharp
public abstract class MBSubModuleBase
{
    // === 初始化阶段 / Initialization Phase ===
    
    // 模块加载时调用（所有SubModule都会调用）
    protected internal virtual void OnSubModuleLoad() { }
    
    // 新模块加载时调用（仅DLC/动态加载）
    protected internal virtual void OnNewModuleLoad() { }
    
    // 注册SubModule类型
    protected internal virtual void RegisterSubModuleTypes() { }
    
    // === UI阶段 / UI Phase ===
    
    // 初始模块屏幕设为根之前
    protected internal virtual void OnBeforeInitialModuleScreenSetAsRoot() { }
    
    // 初始状态
    public virtual void OnInitialState() { }
    
    // === 游戏开始阶段 / Game Start Phase ===
    
    // 游戏开始前（可禁用模块）
    protected internal virtual void OnBeforeGameStart(
        MBGameManager mbGameManager, 
        List<string> disabledModules) { }
    
    // 游戏开始
    protected internal virtual void OnGameStart(
        Game game, 
        IGameStarter gameStarterObject) { }
    
    // 初始化游戏启动器
    protected internal virtual void InitializeGameStarter(
        Game game, 
        IGameStarter starterObject) { }
    
    // === 存档加载阶段 / Save Load Phase ===
    
    // 存档加载完成
    public virtual void OnGameLoaded(Game game, object initializerObject) { }
    
    // 存档加载后
    public virtual void OnAfterGameLoaded(Game game) { }
    
    // 新游戏创建
    public virtual void OnNewGameCreated(Game game, object initializerObject) { }
    
    // === 每帧更新阶段 / Per-Frame Update Phase ===
    
    // 每帧调用
    protected internal virtual void OnApplicationTick(float dt) { }
    
    // 异步tick之后
    protected internal virtual void AfterAsyncTickTick(float dt) { }
    
    // 网络tick
    protected internal virtual void OnNetworkTick(float dt) { }
    
    // === 战役阶段 / Campaign Phase ===
    
    // 战役开始
    public virtual void OnCampaignStart(Game game, object starterObject) { }
    
    // 注册SubModule对象
    public virtual void RegisterSubModuleObjects(bool isSavedCampaign) { }
    
    // 注册完成后
    public virtual void AfterRegisterSubModuleObjects(bool isSavedCampaign) { }
    
    // === 任务阶段 / Mission Phase ===
    
    // 任务行为初始化前
    public virtual void OnBeforeMissionBehaviorInitialize(Mission mission) { }
    
    // 任务行为初始化
    public virtual void OnMissionBehaviorInitialize(Mission mission) { }
    
    // === 游戏结束阶段 / Game End Phase ===
    
    // 游戏结束
    public virtual void OnGameEnd(Game game) { }
    
    // === 卸载阶段 / Unload Phase ===
    
    // SubModule卸载
    protected internal virtual void OnSubModuleUnloaded() { }
    
    // === 激活/停用阶段 / Activate/Deactivate Phase ===
    
    // SubModule激活
    public virtual void OnSubModuleActivated() { }
    
    // SubModule停用
    public virtual void OnSubModuleDeactivated() { }
    
    // === 配置变更 / Config Change ===
    
    // 配置变更
    public virtual void OnConfigChanged() { }
}
```

## 生命周期流程图 / Lifecycle Flowchart

```
游戏启动 (Game Launch)
    │
    ├─► Module.Initialize()
    │       │
    │       ├─► ModuleHelper.InitializeModules()
    │       │       │
    │       │       └─► 加载所有ModuleInfo (从SubModule.xml)
    │       │
    │       ├─► LoadSubModules()
    │       │       │
    │       │       ├─► 加载DLL assemblies
    │       │       └─► 创建MBSubModuleBase实例
    │       │
    │       └─► InitializeSubModuleBases()
    │               │
    │               └─► 调用所有SubModule.OnSubModuleLoad()
    │
    ├─► SetInitialModuleScreenAsRoot()
    │       │
    │       ├─► 调用所有SubModule.OnBeforeInitialModuleScreenSetAsRoot()
    │       │
    │       └─► 显示初始屏幕 (Logo → 主菜单)
    │
    └─► 进入主循环 (Main Loop)
            │
            ├─► OnApplicationTick(dt) ← 每帧调用
            ├─► OnNetworkTick(dt) ← 网络同步
            │
            └─► 用户选择 "开始游戏" / "继续游戏"
                    │
                    ├─► OnBeforeGameStart() ← 可禁用模块
                    │
                    ├─► OnGameStart()
                    │       │
                    │       └─► InitializeGameStarter()
                    │
                    ├─► [新游戏] OnNewGameCreated()
                    │       │
                    │       └─► RegisterSubModuleObjects(false)
                    │
                    └─► [读档] OnGameLoaded()
                            │
                            └─► RegisterSubModuleObjects(true)
```

## SubModule 注册示例 / Example

```csharp
// 我的Mod/MyMod.cs
namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        protected override void OnSubModuleLoad()
        {
            base.OnSubModuleLoad();
            Debug.Print("MyMod loaded!", 0, Debug.DebugColor.Green, 17592186044416UL);
        }

        protected override void OnGameStart(
            Game game, 
            IGameStarter gameStarterObject)
        {
            base.OnGameStart(game, gameStarterObject);
            // 注册自定义游戏逻辑
        }

        public override void OnGameLoaded(Game game, object initializerObject)
        {
            base.OnGameLoaded(game, initializerObject);
            // 读取存档数据
        }
    }
}
```

## Module.cs 加载流程 / Module Loading Flow

`Module.cs` 是游戏的中央协调器：

```csharp
// 模块初始化 (line 229)
internal void Initialize()
{
    // 1. 并行初始化
    TWParallel.InitializeAndSetImplementation(new NativeParallelDriver());
    
    // 2. 设置存档驱动
    MBSaveLoad.SetSaveDriver(new AsyncFileSaveDriver());
    
    // 3. 处理命令行参数
    ProcessApplicationArguments();
    
    // 4. 初始化所有模块
    ModuleHelper.InitializeModules(Utilities.GetModulesNames(), null);
    
    // 5. 加载SubModules
    LoadSubModules(ModuleHelper.GetModules(null), false);
    
    // 6. 查找任务
    FindMissions();
    
    // 7. 初始化存档系统定义上下文
    SaveManager.InitializeGlobalDefinitionContext();
}

// 加载SubModules (line 1063)
private void LoadSubModules(List<ModuleInfo> modules, bool loadNewModules)
{
    foreach (ModuleInfo moduleInfo in modules)
    {
        // 加载XML资源配置
        XmlResource.GetMbprojxmls(moduleInfo.Id);
        XmlResource.GetXmlListAndApply(moduleInfo.Id);
    }
    
    foreach (ModuleInfo moduleInfo in modules)
    {
        foreach (SubModuleInfo subModuleInfo in moduleInfo.SubModules)
        {
            // 检查是否可加载 (平台标签等)
            if (CheckIfSubmoduleCanBeLoadable(subModuleInfo))
            {
                // 加载DLL
                string dllPath = Path.Combine(moduleInfo.FolderPath, "bin", dllName);
                Assembly assembly = AssemblyLoader.LoadFrom(dllPath);
                
                // 创建SubModule实例
                AddSubModule(subModuleInfo, assembly);
            }
        }
    }
}
```

## ModuleInfo 和依赖管理 / Dependency Management

`ModuleInfo` 解析 SubModule.xml 来获取模块信息：

```csharp
public class ModuleInfo
{
    public string Id { get; }           // 模块唯一ID
    public string Name { get; }         // 显示名称
    public ApplicationVersion Version { get; }  // 版本
    public bool IsOfficial { get; }     // 是否官方模块
    public bool IsNative { get; }       // 是否Native模块
    public List<DependedModule> DependedModules { get; }  // 依赖列表
    public List<SubModuleInfo> SubModules { get; }       // SubModule列表
}
```

### 依赖解析 / Dependency Resolution

```csharp
// ModuleHelper.GetSortedModules() 使用拓扑排序
public static List<ModuleInfo> GetSortedModules(string[] moduleIDs)
{
    List<ModuleInfo> modules = GetModuleInfos(moduleIDs);
    // 拓扑排序确保依赖在被依赖之前加载
    IList<ModuleInfo> sorted = MBMath.TopologySort(modules, 
        (module) => GetDependentModulesOf(modules, module));
    return sorted.ToList();
}
```

## SubModule.xml 配置 / Configuration

```xml
<?xml version="1.0" encoding="utf-8"?>
<Module>
    <Name value="MyMod" />
    <Id value="MyMod" />
    <Version value="v1.0.0" />
    <RequiredBaseVersion value="e1.3.15" />
    <SubModules>
        <SubModule>
            <Name value="MyMod" />
            <DLLName value="MyMod.dll" />
            <SubModuleClassType value="MyMod.MySubModule" />
            <Assemblies>
                <Assembly value="MyMod.dll" />
            </Assemblies>
            <Tags>
                <!-- 平台标签 -->
                <Tag name="ExclusivePlatform" value="WindowsSteam" />
                <!-- 或排除平台 -->
                <Tag name="RejectedPlatform" value="Orbis" />
            </Tags>
        </SubModule>
    </SubModules>
    <DependedModules>
        <DependedModule Id="Native" IsOptional="false" />
        <DependedModule Id="SandboxCore" IsOptional="false" />
    </DependedModules>
</Module>
```

## 官方模块列表 / Official Modules

```csharp
// ModuleHelper.GetOfficialModuleIds()
{
    "Native",        // 基础引擎
    "Multiplayer",   // 多人模式
    "SandBoxCore",   // 沙盒核心
    "Sandbox",       // 沙盒模式
    "CustomBattle",  // 自定义战斗
    "StoryMode",     // 故事模式
    "NavalDLC",     // 海军DLC
    "BirthAndDeath", // 出生与死亡
    "FastMode"       // 快速模式
}
```

## 关键类 / Key Classes

| 类 / Class | 职责 / Responsibility |
|-----------|----------------------|
| `Module` | 游戏主模块，协调器 |
| `ModuleHelper` | 模块查找、排序、依赖解析 |
| `ModuleInfo` | 单个模块的元数据 |
| `SubModuleInfo` | SubModule配置信息 |
| `MBSubModuleBase` | 所有SubModule的基类 |
| `DotNetObject` | 可序列化对象的基类 |
| `Managed` | 类型注册管理 |

---

## MBSubModuleBase Lifecycle

`MBSubModuleBase` defines complete lifecycle hooks:

```csharp
public abstract class MBSubModuleBase
{
    // Called when module is loaded (all SubModules)
    protected internal virtual void OnSubModuleLoad() { }
    
    // Called when new module loads (DLC/dynamic loading only)
    protected internal virtual void OnNewModuleLoad() { }
    
    // Called before initial module screen becomes root
    protected internal virtual void OnBeforeInitialModuleScreenSetAsRoot() { }
    
    // Called before game starts (can disable modules)
    protected internal virtual void OnBeforeGameStart(
        MBGameManager mbGameManager, 
        List<string> disabledModules) { }
    
    // Called when game starts
    protected internal virtual void OnGameStart(
        Game game, 
        IGameStarter gameStarterObject) { }
    
    // Called every frame
    protected internal virtual void OnApplicationTick(float dt) { }
    
    // Called when game loads from save
    public virtual void OnGameLoaded(Game game, object initializerObject) { }
    
    // Called when game ends
    public virtual void OnGameEnd(Game game) { }
    
    // Called when module unloads
    protected internal virtual void OnSubModuleUnloaded() { }
}
```

## Loading Sequence

```
Game Launch
    │
    ├─► Module.Initialize()
    │       ├─► ModuleHelper.InitializeModules()
    │       └─► LoadSubModules() → OnSubModuleLoad()
    │
    ├─► SetInitialModuleScreenAsRoot() → OnBeforeInitialModuleScreenSetAsRoot()
    │
    └─► Main Loop → OnApplicationTick()
            │
            └─► Game Start → OnGameStart()
                    ├─► [New Game] OnNewGameCreated() → RegisterSubModuleObjects(false)
                    └─► [Load] OnGameLoaded() → RegisterSubModuleObjects(true)
```

## SubModule Registration Example

```csharp
// MyMod.cs
namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        protected override void OnSubModuleLoad()
        {
            base.OnSubModuleLoad();
            Debug.Print("MyMod loaded!");
        }

        protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
        {
            base.OnGameStart(game, gameStarterObject);
            // Register custom game logic
        }
    }
}
```

## Key Classes

| Class | Responsibility |
|-------|----------------|
| `Module` | Central game coordinator |
| `ModuleHelper` | Module lookup, sorting, dependency resolution |
| `ModuleInfo` | Single module's metadata |
| `SubModuleInfo` | SubModule configuration |
| `MBSubModuleBase` | Base class for all SubModules |

