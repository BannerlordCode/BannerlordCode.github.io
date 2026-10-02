---
title: "MBSubModuleBase"
description: "每个 mod 继承的基类：30 个空实现的生命周期回调，游戏按固定顺序反射调用它们，把加载、存档、任务、网络的挂钩点交给 mod。"
---
# MBSubModuleBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MBSubModuleBase`
**Base:** `System.Object`
**Source:** `TaleWorlds.MountAndBlade/MBSubModuleBase.cs`

## 概述

这是 mod 的「插件清单类」——每个 `SubModule.xml` 里声明的 `<SubModule>` 都会对应一个本类（或其派生类）的实例。它本身**没有任何实现**：30 个方法全是空的 `virtual`，存在的唯一意义是给游戏一个稳定的回调面。整个类 161 行、零字段、零属性。

它被 [Module](../Module) 反射实例化：`AddSubModule` 取 `subModuleInfo.SubModuleClassTypeName` 对应的 `Type`，找**无参构造**（`BindingFlags.Instance | Public | NonPublic | CreateInstance`），把程序集里所有 `ManagedObject` / `DotNetObject` 派生类型注册进 `Managed.AddTypes`，然后 `constructor.Invoke(new object[0])`。所以你的子类**必须有无参构造**，且不能是泛型/抽象。

回调面分五组：加载期（`OnSubModuleLoad` / `RegisterSubModuleTypes` / `OnNewModuleLoad`）、开局期（`OnBeforeGameStart` / `OnGameStart` / `BeginGameStart` / `OnCampaignStart` / `OnGameInitializationFinished` …）、存档期（`RegisterSubModuleObjects(bool isSavedCampaign)` / `AfterRegisterSubModuleObjects` / `OnNewGameCreated` / `OnGameLoaded`）、帧与网络（`OnApplicationTick` / `AfterAsyncTickTick` / `OnNetworkTick`）、任务与模块启停（`OnMissionBehaviorInitialize` / `OnInitialState` / `OnSubModuleActivated` / `OnSubModuleDeactivated`）。

## 心智模型

**这就是 mod 的启动顺序表**。典型的 30 步里你只会用到 5～8 个，但它们的先后关系是硬约束：

1. `OnSubModuleLoad()` —— 最早。程序集已加载、`Module` 还在建。这里适合读配置、准备静态缓存。**`Game.Current` 一定是 null**。
2. `OnBeforeGameStart(MBGameManager, List<string> disabledModules)` —— 引擎/模式加载前，能看到被禁用的模块名列表。
3. `OnGameStart(Game game, IGameStarter gameStarterObject)` —— 最常被覆写。`Game` 已就绪，`gameStarterObject` 是挂 Behavior 的入口。
4. `OnGameInitializationFinished(Game game)` / `OnAfterGameInitializationFinished(Game game, object starterObject)` —— `Campaign.Current` 在这里才保证可用。
5. `RegisterSubModuleObjects(bool isSavedCampaign)` —— 往 `Campaign.Current` 注册自己的数据。**这个回调对 mod 私有状态是最合适的落点之一**。
6. `OnApplicationTick(float dt)` —— 每帧，主线程。

**注意 `protected internal` 与 `public` 的混用**：一共 11 个回调声明为 `protected internal virtual`（`OnSubModuleLoad`、`OnSubModuleUnloaded`、`OnBeforeInitialModuleScreenSetAsRoot`、`RegisterSubModuleTypes`、`OnNewModuleLoad`、`OnBeforeGameStart`、`OnGameStart`、`OnApplicationTick`、`AfterAsyncTickTick`、`InitializeGameStarter`、`OnNetworkTick`），从外部程序集看它们是 `protected`，用 `protected override` 或 `public override` 覆写都行；剩下 19 个是纯 `public virtual`，必须 `public override` 覆写。写 `private override` 一定编译不过。

常见误用：**在 `OnSubModuleLoad` 里访问 `Game.Current` 或 `Campaign.Current`**——那时 GameManager 甚至还没建，必 NRE。第二个是**在 `OnGameStart` 里假定 `Campaign.Current` 非 null**——战役模式下这时可能还没建战役。第三个是**在 `OnApplicationTick` 里做重活**——这回调没有 dt 节流也没有异常保护，每帧都会跑。第四个是**忘了 `OnMissionBehaviorInitialize` 只在进入任务时触发**，不是开局触发。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `OnSubModuleLoad` | `protected internal virtual void OnSubModuleLoad()` | 程序集加载完成、`Module` 正在收集子模块时触发一次。**最早的钩子**，`Game.Current` / `Campaign.Current` 均为 null。适合读 mod 配置、建静态缓存。 |
| `OnSubModuleUnloaded` | `protected internal virtual void OnSubModuleUnloaded()` | 模块被卸载时触发。**唯一的解绑对称点**——把 `InformationManager` 之类静态事件上的订阅放这里。 |
| `OnBeforeInitialModuleScreenSetAsRoot` | `protected internal virtual void OnBeforeInitialModuleScreenSetAsRoot()` | 首个模块屏幕（主菜单）被设为根屏幕之前。 |
| `RegisterSubModuleTypes` | `protected internal virtual void RegisterSubModuleTypes()` | 往 `MBObjectManager` 注册自定义 `MBObjectBase` 派生类型。由 `Game.RegisterTypes` 在注册完 16 个核心类型之后调用。**自定义物品/角色/装备数据类型的唯一正路。** |
| `OnNewModuleLoad` | `protected internal virtual void OnNewModuleLoad()` | 新模块加入后触发（热插拔/模块切换场景）。 |
| `OnConfigChanged` | `public virtual void OnConfigChanged()` | 配置项变化时触发。适合把 mod 设置面板的改动同步到运行时。 |
| `OnBeforeGameStart` | `protected internal virtual void OnBeforeGameStart(MBGameManager mbGameManager, List<string> disabledModules)` | 正式开局前。参数含具体 `MBGameManager` 实例和被禁用的模块 id 列表，可用来做互斥检测。 |
| `OnGameStart` | `protected internal virtual void OnGameStart(Game game, IGameStarter gameStarterObject)` | **最常覆写的一个**。`Game` 已建但战役对象可能还没建。往 `gameStarterObject` 挂自定义 Behavior / Model。 |
| `OnApplicationTick` | `protected internal virtual void OnApplicationTick(float dt)` | 主线程每帧。**无异常保护、无节流**。只做 flag 检查和计数，逻辑交给 Behavior。 |
| `AfterAsyncTickTick` | `protected internal virtual void AfterAsyncTickTick(float dt)` | 异步 tick 完成后的回调。与 `OnApplicationTick` 配对使用，位置在它之后。 |
| `InitializeGameStarter` | `protected internal virtual void InitializeGameStarter(Game game, IGameStarter starterObject)` | 在 `IGameStarter` 上注册 Model/Behavior 的**专用钩子**。与 `OnGameStart` 里的写法等价，但语义更清晰。 |
| `OnGameLoaded` | `public virtual void OnGameLoaded(Game game, object initializerObject)` | 读档完成。`initializerObject` 可能是 `LoadCallbackInitializator`，**不保证已执行完**。 |
| `OnAfterGameLoaded` | `public virtual void OnAfterGameLoaded(Game game)` | 读档后的收尾。想安全访问 `Campaign.Current` 就放这里。 |
| `OnNewGameCreated` | `public virtual void OnNewGameCreated(Game game, object initializerObject)` | 全新建档完成（不是读档）。 |
| `BeginGameStart` | `public virtual void BeginGameStart(Game game)` | 真正开始开局，早于 `OnGameStart`。 |
| `OnCampaignStart` | `public virtual void OnCampaignStart(Game game, object starterObject)` | 战役层启动完成，`Campaign.Current` 在此时可用。 |
| `RegisterSubModuleObjects` | `public virtual void RegisterSubModuleObjects(bool isSavedCampaign)` | 往 Campaign 注册 mod 数据。`isSavedCampaign` 为真表示读档路径，可以据此跳过重复注册。 |
| `AfterRegisterSubModuleObjects` | `public virtual void AfterRegisterSubModuleObjects(bool isSavedCampaign)` | 注册完成后的收尾，可做跨对象交叉引用。 |
| `OnMultiplayerGameStart` | `public virtual void OnMultiplayerGameStart(Game game, object starterObject)` | 多人模式开局。单机 mod 一般不碰。 |
| `OnGameInitializationFinished` | `public virtual void OnGameInitializationFinished(Game game)` | 初始化完成。**要访问 `Campaign.Current` 就用这个或更晚的回调。** |
| `OnAfterGameInitializationFinished` | `public virtual void OnAfterGameInitializationFinished(Game game, object starterObject)` | 初始化完成后的最后一步。 |
| `DoLoading` | `public virtual bool DoLoading()` | 参与加载流程的推进。**返回 false 会让加载停住**。返回 true 表示「我这步没阻塞，继续」。 |
| `OnGameEnd` | `public virtual void OnGameEnd(Game game)` | 一局结束。**必须在 `Game.Destroy()` 之前释放资源**；此刻 `Game.Current` 还没被置 null，但 `EventManager` 等已被清。 |
| `OnMissionBehaviorInitialize` | `public virtual void OnMissionBehaviorInitialize(Mission mission)` | 每次任务初始化时触发一次（会多次）。给任务挂 Behavior 的地方。 |
| `OnBeforeMissionBehaviorInitialize` | `public virtual void OnBeforeMissionBehaviorInitialize(Mission mission)` | 任务 Behavior 挂载**之前**，早于上一条。 |
| `OnInitialState` | `public virtual void OnInitialState()` | 模块进入初始状态时触发。 |
| `OnNetworkTick` | `protected internal virtual void OnNetworkTick(float dt)` | 网络帧 tick。单人 mod 留空。 |
| `OnSubModuleActivated` | `public virtual void OnSubModuleActivated()` | 对应 [Module](../Module) 的 `ActivateModule(moduleId)`：本模块被重新激活。适合重建缓存。 |
| `OnSubModuleDeactivated` | `public virtual void OnSubModuleDeactivated()` | 对应 `DeactiveModule(moduleId)`：本模块被停用。**与 `OnSubModuleUnloaded` 不同**——这是模块级开关，不是程序集卸载。 |
| `InitializeSubModuleGameObjects` | `public virtual void InitializeSubModuleGameObjects(Game game)` | 由 [Game](../../core-extra/Game) 的 `InitializeDefaultGameObjects()` 末尾调用，建 mod 的默认对象。 |

## 真实示例

一个完整的 mod 子模块，覆写最有价值的几个钩子：

```csharp
public class MyModSubModule : MBSubModuleBase
{
    private bool _configLoaded;

    protected override void OnSubModuleLoad()
    {
        LoadMyConfig();
        _configLoaded = true;
    }

    protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        base.OnGameStart(game, gameStarterObject);
        gameStarterObject.AddModel(new MyMapModel());
    }

    protected override void InitializeGameStarter(Game game, IGameStarter starterObject)
    {
        base.InitializeGameStarter(game, starterObject);
        Campaign campaign = Campaign.Current;
        if (campaign != null)
        {
            campaign.AddBehavior(new MyLedgerBehavior());
        }
    }

    protected override void OnMissionBehaviorInitialize(Mission mission)
    {
        base.OnMissionBehaviorInitialize(mission);
        mission.AddMissionBehavior(new MyMissionOverlayBehavior());
    }

    public override void RegisterSubModuleObjects(bool isSavedCampaign)
    {
        base.RegisterSubModuleObjects(isSavedCampaign);
        if (Campaign.Current == null || isSavedCampaign)
        {
            return;
        }
        Campaign.Current.AddBehavior(new MyLedgerBehavior());
    }

    protected override void OnApplicationTick(float dt)
    {
        if (!_configLoaded)
        {
            return;
        }
        // 只做轻量 flag 检查，重活交给 Behavior
    }
}
```

注册自定义 `MBObjectBase` 类型（`RegisterSubModuleTypes` 是 mod 注册自定义物品/角色数据类型的正路，不要去改 `Game.RegisterTypes`）：

```csharp
protected override void RegisterSubModuleTypes()
{
    base.RegisterSubModuleTypes();
    // 由 Game.RegisterTypes 在注册完 16 个核心类型之后调用
    MBObjectManager.Instance.RegisterType<MyCustomItem>("MyItem", "MyItems", 900, true, false);
}
```

## 风险与边界

- **必须有无参构造。** `Module.AddSubModule` 用 `GetConstructor(Instance|Public|NonPublic|CreateInstance, ..., new Type[0], null)` 找，找不到就整个模块加载失败。
- **加载期顺序是硬约束。** `OnSubModuleLoad` 时 `Game.Current` 必然为 null；`OnGameStart` 时 `Campaign.Current` 可能仍为 null。要用 Campaign 就等到 `OnCampaignStart` / `OnGameInitializationFinished` / `RegisterSubModuleObjects`。
- **没有异常保护。** 任一回调抛异常会中断游戏的加载/开局流程，官方没有 try/catch 包裹这些调用。
- **`OnApplicationTick` 每帧执行且无 dt 节流。** 在里面做 LINQ、反射、分配都会直接影响帧率。把它当「检查 flag，需要时触发」用。
- **「回调只触发一次」是错的假设。** `OnMissionBehaviorInitialize` 每次进任务都会调；`OnApplicationTick` 每帧调；`OnGameStart` 在换局时会再调。任何「一次性的全局状态」都不能靠这些回调维护。
- **`OnGameLoaded` 的 `initializerObject` 未必已执行。** 它可能是 `LoadCallbackInitializator`，晚初始化回调还没跑。`Game.LoadSaveGame` 里是 `InitializeObjects()` 在 `BeginLoading` 之前。
- **`RegisterSubModuleObjects` 在读档路径也会调。** 不看 `isSavedCampaign` 就重复 `AddBehavior` 会导致同一 Behavior 注册两次。
- **`DeactiveModule` 只对非原生模块生效。** [Module](../Module) 的实现里有 `!moduleInfo.IsNative` 判断，对官方模块调用是静默 no-op。
- **`protected internal` 覆写要用 `protected` 或 `public`。** 写 `private override` 或 `internal override` 编译不过。
- **`OnSubModuleDeactivated` ≠ `OnSubModuleUnloaded`。** 前者由 `Module.DeactiveModule` 触发（模块开关），后者是程序集卸载。只在一个里清理资源会在另一个场景泄漏。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.MountAndBlade/MBSubModuleBase.cs` 逐行比对，**public/protected 表面完全一致**：30 个回调的方法名、参数、返回类型、可访问性修饰一个都没变。这是个非常稳定的扩展点。`bannerlord-1.4.5/` 本机未解出 C# 源码，未能核对。

## 依赖关系

- 反射调用方：[Module](../Module) 的 `AddSubModule` / `CollectSubModules` 负责实例化和分发
- `Game` 参数：[Game](../../core-extra/Game) 是 `OnGameStart` / `OnGameInitializationFinished` 类回调传入的对象
- 加载步骤机：[GameManagerBase](../../core-extra/GameManagerBase) 的 `DoLoadingForGameManager` 与 `OnGameEnd` 和本类的回调在同一阶段序列里
- 架构地图：[模块地图](../../../architecture/module-map)

- 上一级：[v1.4.6 内容根](../../../)
- 桶首页：[core API 分区](../)
