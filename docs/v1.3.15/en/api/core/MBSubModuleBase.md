# MBSubModuleBase / MBSubModuleBase

**Namespace**: TaleWorlds.MountAndBlade
**File**: `bannerlord-1.3.15/TaleWorlds.MountAndBlade/MBSubModuleBase.cs`
**Purpose**: Base class for all modules, defines module lifecycle hooks / 所有模组的基类，定义模组生命周期钩子

## Overview / 概述

`MBSubModuleBase` is the main entry point for every mod. When you declare a SubModule in `SubModule.xml`, you must create a class inheriting from `MBSubModuleBase` to respond to game events.

`MBSubModuleBase` 是每个模组的主入口点。当你在 `SubModule.xml` 中声明一个 SubModule 时，必须创建一个继承自 `MBSubModuleBase` 的类来响应游戏事件。

## Lifecycle / 生命周期

Game startup call order:

1. `OnSubModuleLoad()` - Called after DLL is loaded
2. `OnNewModuleLoad()` - Called when new module loads
3. `OnBeforeInitialModuleScreenSetAsRoot()` - Before main menu displays
4. `OnInitialState()` - When initial screen shows
5. `OnGameStart(Game, IGameStarter)` - When game starts
6. `OnCampaignStart(Game, object)` - When campaign begins
7. `OnMissionBehaviorInitialize(Mission)` - When mission behaviors initialize
8. `OnApplicationTick(float)` - Called every frame (in game loop)

游戏启动时调用顺序:

1. `OnSubModuleLoad()` - DLL 加载后调用
2. `OnNewModuleLoad()` - 新模组加载时调用
3. `OnBeforeInitialModuleScreenSetAsRoot()` - 主菜单显示前调用
4. `OnInitialState()` - 初始界面显示时调用
5. `OnGameStart(Game, IGameStarter)` - 游戏开始时调用
6. `OnCampaignStart(Game, object)` - 战役开始时调用
7. `OnMissionBehaviorInitialize(Mission)` - 任务行为初始化时调用
8. `OnApplicationTick(float)` - 每帧调用（游戏循环中）

## Important Methods / 重要方法

| Method | Signature | Description |
|--------|-----------|-------------|
| OnSubModuleLoad | `protected internal virtual void OnSubModuleLoad()` | Called after module loads, use for initialization / 模组加载后调用，用于初始化 |
| OnGameStart | `protected internal virtual void OnGameStart(Game game, IGameStarter gameStarterObject)` | Called when game starts, add GameStarter here / 游戏开始时调用，可在此添加 GameStarter |
| OnCampaignStart | `public virtual void OnCampaignStart(Game game, object starterObject)` | Called when campaign mode starts / 战役模式开始时调用 |
| OnMissionBehaviorInitialize | `public virtual void OnMissionBehaviorInitialize(Mission mission)` | Mission behavior init, add MissionBehavior here / 任务行为初始化，可添加 MissionBehavior |
| OnApplicationTick | `protected internal virtual void OnApplicationTick(float dt)` | Called every frame, use for game loop logic / 每帧调用，用于游戏循环逻辑 |
| RegisterSubModuleObjects | `public virtual void RegisterSubModuleObjects(bool isSavedCampaign)` | Register custom objects to MBObjectManager / 注册自定义对象到 MBObjectManager |
| OnGameLoaded | `public virtual void OnGameLoaded(Game game, object initializerObject)` | Called after save file is loaded / 存档加载完成后调用 |

## Usage Example / 使用示例

```csharp
// MySubModule.cs
using TaleWorlds.MountAndBlade;
using TaleWorlds.Core;

namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        // Called when module loads
        // 模组加载时调用
        protected override void OnSubModuleLoad()
        {
            base.OnSubModuleLoad();
            // Do initialization setup
            // 进行初始化设置
        }

        // Called when game starts - add game systems here
        // 游戏开始时调用 - 在这里可以添加游戏系统
        protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
        {
            base.OnGameStart(game, gameStarterObject);
            // Add custom GameStarter
            // 添加自定义 GameStarter
            gameStarterObject.AddModel(new MyGameModel());
        }

        // Called every frame
        // 每帧调用
        protected override void OnApplicationTick(float dt)
        {
            base.OnApplicationTick(dt);
            // Game loop logic
            // 游戏循环逻辑
        }
    }
}
```

## SubModule.xml Configuration / SubModule.xml 配置

```xml
<?xml version="1.0" encoding="utf-8"?>
<Module>
    <ModuleState>
        <AssemblyName>MyMod</AssemblyName>
        <ModuleClassType>MyMod.MySubModule</ModuleClassType>
    </ModuleState>
</Module>
```

## Notes / 注意事项

- All virtual methods have default empty implementations, override only what you need
- 所有虚方法都有默认空实现，可以选择重写需要的
- `OnApplicationTick` should not perform heavy operations or game FPS will suffer
- `OnApplicationTick` 不要执行耗时操作，否则会影响游戏帧率
- Use `RegisterSubModuleObjects` to register custom objects that need to be saved
- 使用 `RegisterSubModuleObjects` 来注册需要在存档中保存的自定义对象
