<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBSubModuleBase`
- [← 本领域 / 返回 core](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSubModuleBase / MBSubModuleBase

**Namespace**: TaleWorlds.MountAndBlade
**File**: `bannerlord-1.3.15/TaleWorlds.MountAndBlade/MBSubModuleBase.cs`
**Purpose**: 所有模组的基类，定义模组生命周期钩子 / Base class for all modules, defines module lifecycle hooks

## 概述 / Overview

`MBSubModuleBase` 是每个模组的主入口点。当你在 `SubModule.xml` 中声明一个 SubModule 时，必须创建一个继承自 `MBSubModuleBase` 的类来响应游戏事件。

`MBSubModuleBase` is the main entry point for every mod. When you declare a SubModule in `SubModule.xml`, you must create a class inheriting from `MBSubModuleBase` to respond to game events.

## 生命周期 / Lifecycle

游戏启动时调用顺序:

1. `OnSubModuleLoad()` - DLL 加载后调用
2. `OnNewModuleLoad()` - 新模组加载时调用
3. `OnBeforeInitialModuleScreenSetAsRoot()` - 主菜单显示前调用
4. `OnInitialState()` - 初始界面显示时调用
5. `OnGameStart(Game, IGameStarter)` - 游戏开始时调用
6. `OnCampaignStart(Game, object)` - 战役开始时调用
7. `OnMissionBehaviorInitialize(Mission)` - 任务行为初始化时调用
8. `OnApplicationTick(float)` - 每帧调用（游戏循环中）

Game startup call order:

1. `OnSubModuleLoad()` - Called after DLL is loaded
2. `OnNewModuleLoad()` - Called when new module loads
3. `OnBeforeInitialModuleScreenSetAsRoot()` - Before main menu displays
4. `OnInitialState()` - When initial screen shows
5. `OnGameStart(Game, IGameStarter)` - When game starts
6. `OnCampaignStart(Game, object)` - When campaign begins
7. `OnMissionBehaviorInitialize(Mission)` - When mission behaviors initialize
8. `OnApplicationTick(float)` - Called every frame (in game loop)

## 开发用例 / Developer Use Cases

### 用例 1: 实现 OnSubModuleLoad 注册初始化逻辑

**场景**: 模组 DLL 加载后立刻执行一次性初始化（注册 Harmony 补丁、读取配置）。

```csharp
protected override void OnSubModuleLoad()
{
    base.OnSubModuleLoad();
    // Harmony 补丁、配置读取等一次性初始化
}
```

**要点**: `OnSubModuleLoad` 在所有 SubModule 加载阶段调用，此时 `Game.Current` 尚未创建；不要在此访问战役/任务对象；Harmony 补丁应在此挂载。

### 用例 2: 在 OnGameStart 注册 CampaignBehavior

**场景**: 游戏开始时把自定义战役行为注入 `Campaign`。

```csharp
protected override void OnGameStart(Game game, IGameStarter starter)
{
    base.OnGameStart(game, starter);
    if (game.GameType is CampaignGameType)
    {
        starter.AddModel(new MyCampaignBehavior());
    }
}
```

**要点**: 必须判断 `game.GameType` 是 `CampaignGameType`，否则自定义战役行为会注入到错误的游戏类型（如自定义战斗）；`IGameStarter.AddModel` 是注册行为/模型的标准入口。

### 用例 3: 在 OnMissionBehaviorInitialize 添加 MissionBehavior

**场景**: 任务初始化时挂载自定义战斗行为。

```csharp
public override void OnMissionBehaviorInitialize(Mission mission)
{
    base.OnMissionBehaviorInitialize(mission);
    mission.AddMissionBehavior(new MyMissionBehavior());
}
```

**要点**: 此回调在每个任务创建时触发；用 `mission.MissionName` 过滤特定任务类型；此时 Agent 尚未生成，仅适合注册行为。

### 用例 4: 用 RegisterSubModuleObjects 注册可保存对象

**场景**: 自定义 `MBObjectBase` 子类需要从 XML 加载并存档。

```csharp
public override void RegisterSubModuleObjects(bool isSavedCampaign)
{
    base.RegisterSubModuleObjects(isSavedCampaign);
    Game.Current.ObjectManager.RegisterType<MyCustomObject>(
        "MyCustomObject", "MyCustomObjects", 500, autoCreateInstance: true);
}
```

**要点**: `RegisterType` 在对象管理器中登记类型，使其能从 XML 加载；`typeId` 必须在全局唯一（建议 > 1000 避免与官方冲突）。

## 重要方法 / Important Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| OnSubModuleLoad | `protected internal virtual void OnSubModuleLoad()` | 模组加载后调用，用于初始化 / Called after module loads, use for initialization |
| OnGameStart | `protected internal virtual void OnGameStart(Game game, IGameStarter gameStarterObject)` | 游戏开始时调用，可在此添加 GameStarter / Called when game starts, add GameStarter here |
| OnCampaignStart | `public virtual void OnCampaignStart(Game game, object starterObject)` | 战役模式开始时调用 / Called when campaign mode starts |
| OnMissionBehaviorInitialize | `public virtual void OnMissionBehaviorInitialize(Mission mission)` | 任务行为初始化，可添加 MissionBehavior / Mission behavior init, add MissionBehavior here |
| OnApplicationTick | `protected internal virtual void OnApplicationTick(float dt)` | 每帧调用，用于游戏循环逻辑 / Called every frame, use for game loop logic |
| RegisterSubModuleObjects | `public virtual void RegisterSubModuleObjects(bool isSavedCampaign)` | 注册自定义对象到 MBObjectManager / Register custom objects to MBObjectManager |
| OnGameLoaded | `public virtual void OnGameLoaded(Game game, object initializerObject)` | 存档加载完成后调用 / Called after save file is loaded |

## 使用示例 / Usage Example

```csharp
// MySubModule.cs
using TaleWorlds.MountAndBlade;
using TaleWorlds.Core;

namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        // 模组加载时调用
        // Called when module loads
        protected override void OnSubModuleLoad()
        {
            base.OnSubModuleLoad();
            // 进行初始化设置
            // Do initialization setup
        }

        // 游戏开始时调用 - 在这里可以添加游戏系统
        // Called when game starts - add game systems here
        protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
        {
            base.OnGameStart(game, gameStarterObject);
            // 添加自定义 GameStarter
            // Add custom GameStarter
            gameStarterObject.AddModel(new MyGameModel());
        }

        // 每帧调用
        // Called every frame
        protected override void OnApplicationTick(float dt)
        {
            base.OnApplicationTick(dt);
            // 游戏循环逻辑
            // Game loop logic
        }
    }
}
```

## SubModule.xml 配置 / SubModule.xml Configuration

```xml
<?xml version="1.0" encoding="utf-8"?>
<Module>
    <ModuleState>
        <AssemblyName>MyMod</AssemblyName>
        <ModuleClassType>MyMod.MySubModule</ModuleClassType>
    </ModuleState>
</Module>
```

## 注意事项 / Notes

- 所有虚方法都有默认空实现，可以选择重写需要的
- All virtual methods have default empty implementations, override only what you need
- `OnApplicationTick` 不要执行耗时操作，否则会影响游戏帧率
- `OnApplicationTick` should not perform heavy operations or game FPS will suffer
- 使用 `RegisterSubModuleObjects` 来注册需要在存档中保存的自定义对象
- Use `RegisterSubModuleObjects` to register custom objects that need to be saved
