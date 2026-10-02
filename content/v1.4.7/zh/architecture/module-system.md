---
title: "模块系统 — Module 与 MBSubModuleBase 加载流程"
description: "v1.4.7 里 Module 如何枚举子模块、SubModule 的 29 个生命周期回调各自在什么阶段触发，以及一个模组应该覆写哪几个。"
---
# 模块系统 — Module 与 MBSubModuleBase 加载流程

## 心智模型

游戏启动时只有一个真正的入口：`Module`。它是个 `sealed class`，由引擎侧创建，
随后扫描磁盘，把找到的每个模块的 `MBSubModuleBase` 子类实例化并**按加载顺序**回调。
你的模组就是其中一个 `MBSubModuleBase` 子类。

两条时间轴必须分开记：

- **`Module`（宿主）**：只有一个，负责枚举、创建、驱动。模组代码不继承它，也不该碰它。
- **`MBSubModuleBase`（你继承的）**：每个模组一个实例，29 个回调覆盖从加载到卸载的完整生命周期。

## Module 的真实表面

摘自 `TaleWorlds.MountAndBlade/Module.cs` 的 public 成员（节选）：

| 成员 | 类型 | 作用 |
| --- | --- | --- |
| `Module.CurrentModule` | `static Module` | 全局唯一宿主实例 |
| `Module.GlobalGameStateManager` | `GameStateManager` | 顶层状态机，界面栈挂在它下面 |
| `Module.StartupInfo` | `GameStartupInfo` | 启动参数，决定加载哪些模块 |
| `Module.CollectSubModules()` | `MBReadOnlyList<MBSubModuleBase>` | 已注册的子模块列表 |
| `Module.CheckIfSubmoduleCanBeLoadable(SubModuleInfo)` | `bool` | 判定某个模块能否在当前启动参数下加载 |
| `Module.ActivateModule(string)` / `DeactiveModule(string)` | `void` | 创意工坊式的模块开关 |
| `Module.GetSubModuleType(string)` | `Type` | 按名字取子模块类型 |
| `Module.GetInitialStateOptions()` | `IEnumerable<InitialStateOption>` | 命令行/启动选项 |

注意 `Module` 里绝大多数方法带 `internal`，**只有上面这一小撮是给你用的**。
如果你的代码里出现了对 `Module` 私有成员的依赖，它一定会在别的游戏版本上炸。

## 你的 SubModule：按阶段选回调

`MBSubModuleBase` 的 29 个 `virtual` 回调（全部来自 `MBSubModuleBase.cs`）按阶段分组。
**只需要覆写你真正用到的那两三个**，其余保持默认。

### 阶段 A — 加载期

| 回调 | 什么时候 | 典型用途 |
| --- | --- | --- |
| `OnSubModuleLoad()` | 模块刚被读入，别的模块可能还没加载 | 注册类型、读自己的配置。**不要在这里访问 `Campaign.Current`。** |
| `RegisterSubModuleTypes()` | 同上，稍后 | 把自定义类型塞进引擎的类型表 |
| `OnNewModuleLoad()` | 所有模块都加载完 | 可以安全访问别的子模块了 |

### 阶段 B — 启动期

| 回调 | 什么时候 | 典型用途 |
| --- | --- | --- |
| `OnBeforeGameStart(MBGameManager, List<string> disabledModules)` | 游戏开始前 | 判断哪些模块被禁用，相应关闭自己的功能 |
| `OnGameStart(Game, IGameStarter)` | 拿到游戏实例 | 拿到 `IGameStarter` 并交给下层去注册 |
| `InitializeGameStarter(Game, IGameStarter)` | 更早，战役/界面都还没建 | **战役模组在这里调 `starter.AddBehavior(new MyBehavior())`** |
| `DoLoading(Game)` | 返回 `bool` | 返回 `true` 表示自己负责加载下一阶段 |
| `BeginGameStart(Game)` | 加载完成 | 真正的重活放这里 |

### 阶段 C — 战役期

| 回调 | 典型用途 |
| --- | --- |
| `OnCampaignStart(Game, object starterObject)` | 战役刚起来，此时 `Campaign.Current` 可用 |
| `RegisterSubModuleObjects(bool isSavedCampaign)` | 注册需要存档的对象 |
| `OnGameLoaded(Game, object)` / `OnNewGameCreated(Game, object)` | 区分读档与新档 |
| `OnAfterGameLoaded(Game)` / `OnGameInitializationFinished(Game)` | 一切就绪后的收尾 |

### 阶段 D — 每帧与战斗

| 回调 | 频率 | 注意 |
| --- | --- | --- |
| `OnApplicationTick(float dt)` | 每帧 | 最容易写出性能问题的回调。**只在必要时用**，并自己做节流 |
| `AfterAsyncTickTick(float dt)` | 每帧（异步阶段） | 需要在主 tick 之后做事时才用 |
| `OnMissionBehaviorInitialize(Mission)` / `OnBeforeMissionBehaviorInitialize(Mission)` | 每场战斗 | 这里才是给 `mission.AddMissionBehavior` 的地方 |
| `OnNetworkTick(float dt)` | 网络帧 | 单机模组不用管 |

### 阶段 E — 收尾

| 回调 | 用途 |
| --- | --- |
| `OnGameEnd(Game)` | 战斗或战役结束 |
| `OnSubModuleUnloaded()` | 模块卸载，清理静态状态 |
| `OnSubModuleActivated()` / `OnSubModuleDeactivated()` | 模块开关切换 |

## 一个可用的最小 SubModule

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    // Campaign 行为单独成类，实现 ICampaignBehavior
    public class MyCampaignBehavior : CampaignBehaviorBase
    {
        public override void RegisterEvents(CampaignEvents campaignEvents)
        {
            // 只监听，不直接改状态；改动走 CampaignEvents 派发出的 Action
            // MBCampaignEvent.AddHandler takes a CampaignEventDelegate:
            // void (MBCampaignEvent campaignEvent, params object[] delegateParams)
            campaignEvents.HourlyTickEvent.AddHandler(OnHourlyTick);
        }

        private static void OnHourlyTick(MBCampaignEvent campaignEvent, params object[] delegateParams)
        {
            // 需要改钱/关系/部队时，这里发一个自定义 CampaignEvent，
            // 由自己的 Behavior 或游戏内置 Action 去应用
        }

        public override void SyncData(IDataStore dataStore)
        {
            // 存自己的字段：dataStore.IsLoading() 时读取，否则写入
            dataStore.SyncData("myModEnabled", ref myModEnabled);
        }

        private bool myModEnabled = true;
    }

    public class MySubModule : MBSubModuleBase
    {
        // 战役模组在 InitializeGameStarter 注册，这是官方推荐的位置
        public override void InitializeGameStarter(Game game, IGameStarter starterObject)
        {
            base.InitializeGameStarter(game, starterObject);
            CampaignGameStarter campaignStarter =
                (CampaignGameStarter)starterObject;
            campaignStarter.AddBehavior(new MyCampaignBehavior());
        }

        // 只有需要每帧逻辑时才覆写，否则删掉
        public override void OnApplicationTick(float dt)
        {
        }
    }
}
```

`CampaignGameStarter.AddBehavior` 在**读档和开新档时都会被调用**，所以在这里注册的行为不需要
你自己判断场景 —— 这正是推荐它的原因。想区分场景，在行为里读 `Campaign.Current.GameMode`，
或者覆写 `OnGameLoaded` / `OnNewGameCreated`。

## 三个常见坑

1. **在 `OnSubModuleLoad()` 里访问 `Campaign.Current`。** 此时战役层还没建，会空引用。要访问战役，
   至少等到 `OnCampaignStart` 或 `InitializeGameStarter`。
2. **每帧回调里做重活。** `OnApplicationTick` 对所有已加载模块都跑。里面做反射、查数据库或者遍历
   全村庄，会直接体现为帧率下降。先自测，再决定要不要节流。
3. **在 `SyncData` 里做校验。** `SyncData` 在读档时序不稳定（对象可能还没建好）。要做迁移或校验，
   放到 `OnAfterGameLoaded`。

## 参见

- ↔ [SDK 总览](../sdk-overview) · [架构总览](../)
- ↘ [存档系统](../save-system) —— `SyncData` 之外还想存更多字段时看这篇
- ↘ [界面栈](../ui-stack) —— 战役期挂界面的正确位置
- ↑ [Core](../../api/core/) · [Campaign-Ext](../../api/campaign-ext/) · [ModuleManager](../../api/modulemanager/)