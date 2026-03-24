# MBSubModuleBase / MBSubModuleBase

**Namespace**: TaleWorlds.MountAndBlade
**File**: `bannerlord-1.3.0/TaleWorlds.MountAndBlade/MBSubModuleBase.cs`
**Version**: v1.3.0

## 概述 / Overview

`MBSubModuleBase` 是每个模组的主入口点。当你在 `SubModule.xml` 中声明一个 SubModule 时，必须创建一个继承自 `MBSubModuleBase` 的类来响应游戏事件。

`MBSubModuleBase` is the main entry point for every mod. When you declare a SubModule in `SubModule.xml`, you must create a class inheriting from `MBSubModuleBase` to respond to game events.

## 与 v1.3.15 的差异 / Differences from v1.3.15

- v1.3.0 版本的 MBSubModuleBase 比 v1.3.15 更为精简
- v1.3.0 has a more streamlined MBSubModuleBase compared to v1.3.15
- 缺少 v1.3.15 中新增的一些生命周期钩子方法
- Missing some newer lifecycle hook methods added in v1.3.15
- 方法数量较少（约 26 个虚方法 vs v1.3.15 的更多方法）
- Fewer methods (about 26 virtual methods vs v1.3.15)

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

## 关键方法 / Key Methods

| Method | Description |
|--------|-------------|
| OnSubModuleLoad | 模组加载后调用，用于初始化 / Called after module loads, use for initialization |
| OnGameStart | 游戏开始时调用，可在此添加 GameStarter / Called when game starts, add GameStarter here |
| OnCampaignStart | 战役模式开始时调用 / Called when campaign mode starts |
| OnMissionBehaviorInitialize | 任务行为初始化，可添加 MissionBehavior / Mission behavior init, add MissionBehavior here |
| OnApplicationTick | 每帧调用，用于游戏循环逻辑 / Called every frame, use for game loop logic |
| RegisterSubModuleObjects | 注册自定义对象到 MBObjectManager / Register custom objects to MBObjectManager |
| OnGameLoaded | 存档加载完成后调用 / Called after save file is loaded |

## 代码示例 / Code Example

```csharp
// MySubModule.cs
using TaleWorlds.MountAndBlade;
using TaleWorlds.Core;

namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        protected override void OnSubModuleLoad()
        {
            base.OnSubModuleLoad();
            // Do initialization setup
        }

        protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
        {
            base.OnGameStart(game, gameStarterObject);
            // Add custom GameStarter
            gameStarterObject.AddModel(new MyGameModel());
        }

        protected override void OnApplicationTick(float dt)
        {
            base.OnApplicationTick(dt);
            // Game loop logic
        }
    }
}
```

## 注意事项 / Notes

- 所有虚方法都有默认空实现，可以选择重写需要的
- All virtual methods have default empty implementations, override only what you need
- `OnApplicationTick` 不要执行耗时操作，否则会影响游戏帧率
- `OnApplicationTick` should not perform heavy operations or game FPS will suffer
