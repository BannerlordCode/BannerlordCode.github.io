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

## 怎么用

### 怎么拿到它

`MBSubModuleBase` 是 `TaleWorlds.MountAndBlade/MBSubModuleBase.cs:8` 的 `public abstract class MBSubModuleBase`，162 行、31 个公开成员。**这是整个模组 API 的入口类型**——每个模组的 `SubModule.cs` 都继承它。

**构造器是隐式无参的，实例由 [Module](../Module) 反射创建。** 宿主侧是 `public MBReadOnlyList<MBSubModuleBase> CollectSubModules()`（`Module.cs:97`，内部遍历 `moduleInfo.SubModules`），然后 `Module.cs:548`、`:565` 那两处 `foreach (MBSubModuleBase mbsubModuleBase in this.CollectSubModules())` 反射回调每一个。**所以你永远不 new 它，也拿不到一个稳定的引用。**

**可见性分成两派，这是这一页最容易漏掉的事**：

- `protected internal virtual`：`OnSubModuleLoad()`（`:11`）、`OnSubModuleUnloaded()`（`:16`）、`OnBeforeInitialModuleScreenSetAsRoot()`（`:21`）、`RegisterSubModuleTypes()`（`:26`）、`OnNewModuleLoad()`（`:31`）、`OnBeforeGameStart(MBGameManager, List<string>)`（`:41`）、`OnGameStart(Game, IGameStarter)`（`:46`）、`OnApplicationTick(float)`（`:51`）、`AfterAsyncTickTick(float)`（`:56`）、`InitializeGameStarter(Game, IGameStarter)`（`:61`）
- 纯 `public virtual`：`OnConfigChanged()`（`:36`）、`OnGameLoaded(Game, object)`（`:66`）、`OnAfterGameLoaded(Game)`（`:71`）、`OnNewGameCreated(Game, object)`（`:76`）、`BeginGameStart(Game)`（`:81`）、`OnCampaignStart(Game, object)`（`:86`）、`RegisterSubModuleObjects(bool)`（`:91`）、`AfterRegisterSubModuleObjects(bool)`（`:96`）、`OnGameInitializationFinished(Game)`（`:108`）、`DoLoading(Game)`（`:118`）、`OnGameEnd(Game)`（`:122`）、`OnMissionBehaviorInitialize(Mission)`（`:127`）……

还有一个 `public virtual bool DoLoading(Game game)`（`:118`），**基类实现 `return true;`**——你可以覆写它来做「本帧是否还在加载」的判定。

### 典型用法

```csharp
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public class MySubModule : MBSubModuleBase           // MBSubModuleBase.cs:8
{
    public override void OnSubModuleLoad() { }                   // :11，模块 DLL 加载时，最早
    public override void RegisterSubModuleTypes() { }             // :26，登记 MBObjectBase 类型
    public override void OnNewGameCreated(Game game, object initializerObject) { }   // :76

    public override void OnGameStart(Game game, IGameStarter gameStarterObject)      // :46
    {
        // 此时 Campaign 可能还没建立；只做与战役无关的初始化
    }

    public override void RegisterSubModuleObjects(bool isSavedCampaign) { }          // :91
    public override void OnGameInitializationFinished(Game game) { }                 // :108

    public override bool DoLoading(Game game) { return true; }      // :118，基类就是 true
    public override void OnGameEnd(Game game) { }                   // :122
}
```

### 最容易踩的坑

**在 `OnSubModuleLoad()`（`:11`）里读 `Game.Current` 或 `Campaign.Current`。** 这是最早的钩子，`Module` 还没建出任何 `Game`——所以那两处都是 null 空引用。同理 `OnNewModuleLoad()`（`:31`）也不行。`Game.Current` 要等 [Game](../../core-extra/Game) 的 `CreateGame`，`Campaign.Current` 要等 `SetLoadingParameters`（`Campaign.cs:1873`）。

**但反过来，最常见的真实事故是在 `OnGameStart(Game game, IGameStarter gameStarterObject)`（`:46`）里读 `Campaign.Current`。** 这个钩子由 `GameType` 驱动，时机早于战役初始化完成——此时读到的 `Campaign.Current` 要么是 null，要么是一个还没跑完 `OnInitialize()` 的半成品（`Campaign.OnInitialize()` 在 `Campaign.cs:1889` 起才建 `CampaignEvents`、`GameMenuManager`、各子系统）。后果是你在 `Campaign.MenuManager` 上拿到 null 而报错点完全看不出是时机问题。**战役相关的东西一律放到 `OnCampaignStart(Game, object)`（`:86`）或之后的钩子。**

第二个坑是 `protected internal` 那一派。外部程序集继承时能覆写它们，但**不能从外部代码直接调用**——引擎侧才是调用方。所以你没法在 mod 里手动触发一次 `OnSubModuleLoad()` 来「重跑初始化」，只能等引擎在正确的时机调。

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

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.MountAndBlade/MBSubModuleBase.cs` 逐行比对，**public/protected 表面完全一致**：30 个回调的方法名、参数、返回类型、可访问性修饰一个都没变。这是个非常稳定的扩展点。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBSubModuleBase.cs`（129 行）与 `bannerlord-1.4.6/TaleWorlds.MountAndBlade/MBSubModuleBase.cs`（162 行）逐成员比对 public/protected 表面。**三版 public/protected 表面完全一致（各 30 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 与 1.4.6 都是 30 个回调，这是个跨三个版本都没动过的扩展点。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 反射调用方：[Module](../Module) 的 `AddSubModule` / `CollectSubModules` 负责实例化和分发
- `Game` 参数：[Game](../../core-extra/Game) 是 `OnGameStart` / `OnGameInitializationFinished` 类回调传入的对象
- 加载步骤机：[GameManagerBase](../../core-extra/GameManagerBase) 的 `DoLoadingForGameManager` 与 `OnGameEnd` 和本类的回调在同一阶段序列里
- 架构地图：[模块地图](../../../architecture/module-map)

- 上一级：[v1.4.6 内容根](../../../)
- 桶首页：[core API 分区](../)

## 导航

- 同桶：[`../Module`](../Module)
- 父索引：[`../_index`](../_index)
