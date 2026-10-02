---
title: SDK 分层概览（v1.4.6）
description: "v1.4.6 的五层依赖模型：Foundation / Campaign / Mission / UI / Save 各层负责什么、入口类是哪个、按什么顺序读，以及每层的生命周期与存档边界。"
---
# SDK 分层概览（v1.4.6）

> 本文是「缺大局观」的解药：先给一张自上而下的依赖地图，再告诉你每一层的**入口类**和**阅读顺序**。读完后你不必再面对 A–Z 的类名墙。
>
> 所有类型归属均按 `bannerlord-1.4.6/` 源码核实。1.4.6 有几处与旧版文档不同，文末「与旧版文档的差异」单列。

## 一句话定位

Bannerlord 的托管代码不是平铺的类，而是一组**分层、依赖向下**的程序集。mod 代码挂在最上面，可以触及任意层；但只有理解「谁依赖谁、谁拥有数据」，才知道从哪一层下手，以及为什么某一层的对象不能塞进另一层。

```
        UI 层     ScreenSystem / GauntletUI / ViewModel
             │  依赖
             ▼
      Mission 层  TaleWorlds.MountAndBlade（Mission / Agent / Behavior）
             │  依赖
             ▼
      Campaign 层 TaleWorlds.CampaignSystem
             │  依赖
             ▼
    Foundation 层 Core / Library / Localization / ObjectSystem / ModuleManager
             │
             ▼
        Native 引擎（TaleWorlds.Native.dll）
```

Save 层是横切的：`TaleWorlds.SaveSystem` 不属于上面任何一层，它给 Foundation 与 Campaign 提供持久化。

## 每层的职责、入口类与风险

| 层 | 模块目录 | 它拥有什么 | 入口类（1.4.6 核实） | 这一层的典型风险 |
| --- | --- | --- | --- | --- |
| Foundation | `TaleWorlds.Core` | 一局游戏的根与核心数据类型 | `Game`、`GameState`、`GameType`、`IGameStarter` | `Game` 在 `OnGameEnd` 之后就被 `Destroy()`；静态缓存持有引用会指向已销毁对象 |
| Foundation | `TaleWorlds.Library` | 数学、集合、日志、`ViewModel` 基类 | `ViewModel`、`InformationManager` | `InformationManager` 面向主线程 UI；后台线程弹消息会出问题 |
| Foundation | `TaleWorlds.ObjectSystem` | 对象注册表与跨存档引用 | `MBObjectManager`、`MBGUID` | 类型没注册就 `CreateObjectTypeList` / `GetObject` 会抛 `MBTypeNotRegisteredException` |
| Foundation | `TaleWorlds.ModuleManager` | 模块清单与加载顺序 | `ModuleInfo`、`SubModuleInfo`、`ModuleHelper` | 依赖声明错了会导致模块在错误的阶段加载 |
| Campaign | `TaleWorlds.CampaignSystem` | 长期世界状态：英雄、家族、聚落、部队 | `Campaign`、`CampaignBehaviorBase`、`CampaignEvents`、`GameModels` | 行为在每日 tick 中被调用；在这里做重活会让地图卡顿 |
| Mission | `TaleWorlds.MountAndBlade` | 单场战斗的短寿命状态 | `Mission`、`Agent`、`MissionBehavior`、`MissionLogic` | 把 `Agent` 缓存到战役层 → 战斗结束后悬空引用 |
| UI | `TaleWorlds.ScreenSystem` / `TaleWorlds.GauntletUI` | 屏幕栈与界面投影 | `ScreenManager`、`ScreenBase`、`ScreenLayer`、`GauntletMovie`、`GauntletLayer` | 屏幕栈是有序的：`PopScreen` 之后拿不到已弹出的屏幕实例 |
| Save | `TaleWorlds.SaveSystem` | 对象图 ↔ `.sav` 的映射 | `SaveManager`、`ISaveDriver`、`SaveContext` | 存了没注册的字段类型，读档时静默丢失或抛异常 |

## 为什么分层必须隔离

- **持久化与运行时隔离**：`Campaign` 持有可跨存档保存的世界状态，`Mission` 只是单场战斗的容器。把 `Agent` 当战役对象保存、或把 `Hero` 当场景对象缓存，都会在读档或场景切换时崩溃。属于某一层的数据必须留在那一层的拥有者里。
- **UI 与逻辑隔离**：`ViewModel` 只把数据投影到屏幕，不持有规则；规则在 `CampaignBehaviorBase` / `MissionBehavior`，状态在 `Campaign` / `Mission`。UI 层不能反过来决定一场战斗何时结束。
- **平台与引擎隔离**：`Localization`、`Core`、`ObjectSystem` 提供与具体场景无关的基础类型，所以被所有人依赖，却不依赖任何人。战役 mod 与战斗 mod 因此可以复用同一套对象系统而互不耦合。

> 新手记住一句话：绝大多数 mod 只碰最上面的三层——**Campaign（世界规则）、Mission（单场战斗）、UI（界面）**；要持久化时再下探 **SaveSystem**；只有做底层类型或本地化时才触及 **Foundation**。

## 按顺序读

1. **模块入口**：搞清「我的代码什么时候被调用」——`MBSubModuleBase`（在 `TaleWorlds.MountAndBlade`）。这 30 个生命周期回调不是平均重要的，先看这四个：
   | 回调 | 什么时候该在里面做什么 |
   | --- | --- |
   | `InitializeGameStarter(Game game, IGameStarter starterObject)` | 注册战役行为与模型的官方时机：`((CampaignGameStarter)starterObject).AddBehavior(...)` |
   | `OnGameStart(Game game, IGameStarter gameStarterObject)` | 战役 mod 的主入口：拿 `Campaign.Current`、读取配置、准备运行时状态 |
   | `OnGameLoaded(Game game, object initializerObject)` / `OnNewGameCreated(Game game, object initializerObject)` | 读档后 / 新档创建后补齐运行时状态（存档字段这时已就绪） |
   | `OnMissionBehaviorInitialize(Mission mission)` | 战斗行为注入点，等价于把 `MissionBehavior` 塞进这场战斗 |
   | `OnSubModuleLoad()` | 只做纯静态初始化，不要碰 `Game` 或 `Campaign` |
2. **会话根**：`Game`。理解一局游戏从 `CreateGame` / `LoadSaveGame` 到 `Destroy` 的边界。
3. **世界规则**：`Campaign` + `CampaignBehaviorBase`。行为构造时 `RegisterEvents()`、`SyncData(IDataStore)` 两步是必做的。
4. **单场战斗**：`Mission` → `Agent` → `MissionBehavior`。
5. **界面**：`ViewModel`（`TaleWorlds.Library`）+ `ScreenManager`（`TaleWorlds.ScreenSystem`）+ `GauntletMovie` / `GauntletLayer`。
6. **持久化**：`SaveManager` 与 `[SaveableField]` / `[SaveableProperty]`。
7. **本地化**：`TextObject` 与 `MBTextManager`。

## 三个最小可运行骨架

```csharp
// 1) 模块入口：在官方做法相同的时机挂上战役行为
//    OnGameStart 在基类里是 protected internal virtual，跨程序集重写必须写 protected override。
public sealed class MyModSubModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter starterObject)
    {
        CampaignGameStarter starter = starterObject as CampaignGameStarter;
        if (starter == null) return;                  // 菜单/编辑器阶段没有战役 starter
        starter.AddBehavior(new MyCampaignBehavior());
    }

    protected override void OnGameStart(Game game, IGameStarter starterObject)
    {
        Campaign campaign = Campaign.Current;
        if (campaign == null) return;                 // 非战役场景 campaign 为 null
        _campaign = campaign;
    }

    private Campaign _campaign;
}

// 2) 战役行为：注册事件 + 声明存档字段（字段名要和存档 key 一致）
public sealed class MyCampaignBehavior : CampaignBehaviorBase
{
    public MyCampaignBehavior() : base("MyModBehavior") { }

    public override void RegisterEvents()
    {
        // 1.4.6 的 IMbEvent 订阅口是 AddNonSerializedListener(owner, action)
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, DailyTick);
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData<bool>("_myFlag", ref _myFlag);
    }

    private bool _myFlag;
    private void DailyTick() { /* 每日 tick；不要在这里做重活 */ }
}

// 3) 战斗行为：只活在这一场战斗里，状态别外泄到 Campaign
public sealed class MyMissionBehavior : MissionBehavior
{
    public override void OnBehaviorInitialize() { }

    public override void OnAgentCreated(Agent agent)
    {
        if (agent.IsMainAgent)
        {
            MainAgentReady = true;
        }
    }

    public bool MainAgentReady { get; private set; }
}
```

## 跨版本提示（v1.4.6 相对 1.4.5 / 1.3.15）

- 这些入口类型的**可见成员集合在 1.4.6 与 1.3.15 之间基本一致**，1.4.6 相对 1.4.5 只是反编译产物分布不同导致的计数差异。逐类数字与统计口径见 [版本差异](../version-delta)。
- `MBSubModuleBase`、`Module` 属于 `TaleWorlds.MountAndBlade`；`ScreenManager` / `ScreenBase` / `ScreenLayer` 属于 `TaleWorlds.ScreenSystem`；`MBObjectManager` 属于 `TaleWorlds.ObjectSystem`；`ViewModel` 属于 `TaleWorlds.Library`。**这些是 1.4.6 源码核实的结果，与部分旧版文档写的程序集归属不一致。**

## 风险与边界

- **生命周期顺序**：`OnSubModuleLoad` 早于 `Game` 存在；`Campaign.Current` 在非战役场景（菜单、编辑器、纯战斗）为 null。
- **线程亲和**：`InformationManager`、屏幕栈、输入查询都在主线程；`AchievementManager.GetStat` 这类返回 `Task<int>` 的接口要在自己的 async 流程里 await，不要假设同步。
- **存档兼容**：自定义字段必须走 `SyncData`；直接改实体字段不会进档，读档后回到旧值。
- **反编译口径**：1.4.6 源码树是导出产物，`.2` 之类同名重复文件与 `EmbeddedAttribute` / `IsReadOnlyAttribute` 是生成噪声，不是新 API。

## 导航

- [↑ 上一级 / Up](../) — 架构总览
- ↔ 兄弟：[模块地图](../module-map) · [版本差异](../version-delta) · [English](../../../en/architecture/sdk-overview/)
- ↑↑ 版本首页：[zh](../../) · [en](../../../en/)
- ↔ 跨版本：[逐类 API 对比](../../../../versions/)