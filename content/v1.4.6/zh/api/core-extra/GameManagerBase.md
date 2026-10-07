---
title: "GameManagerBase"
description: "一局游戏的驱动骨架：组件容器 + 七步加载状态机，把 Tick 和网络事件广播给所有 GameManagerComponent 与 Game。"
---
# GameManagerBase

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class GameManagerBase`
**Base:** `System.Object`
**Source:** `TaleWorlds.Core/GameManagerBase.cs`

## 概述

它是「一局游戏」这个概念的驱动骨架，也是 mod 最主要的继承入口之一（1.4.6 里官方 `MBGameManager : GameManagerBase`）。职责有两块：**组件容器**和**分步加载状态机**。

组件容器是 `EntitySystem<GameManagerComponent>`。用 `AddComponent<T>()` / `AddComponent(Type)` 注册，`GetComponent<T>()` 取单个，`GetComponents<T>()` 取全部，`RemoveComponent` 移除。加载状态机则是一个七步的 `switch`，从 `PreInitializeZerothStep` 一路走到 `LoadingIsOver`：每次外部调无参 `DoLoadingForGameManager()`，它就按当前 `_stepNo` 调一次 protected 的 `DoLoadingForGameManager(step, out nextStep)` 虚方法，只有当 `nextStep` 恰好等于期望的下一个枚举值才推进 `_stepNo`；走到 `FinishLoadingFifthStep` 返回 `nextStep == None` 时返回 `true`，表示加载完毕。

`Game` 属性是它和 [Game](../Game) 的双向绑定：`Game` 的私有构造器写 `gameManager.Game = this`，而这个 setter 在赋非 null 值时会调 `Initialize()`。

## 心智模型

**继承线**：`GameManagerBase`（抽象，组件 + 加载步骤）← `MBGameManager`（引擎侧的进一步抽象）← 具体的 `GameManager`（战役、编辑器等）。你在 mod 里通常是继承 `MBGameManager` 而不是直接继承这里，但理解本类的语义有助于知道哪些回调什么时候跑。

**组件模型**：`EntitySystem<GameManagerComponent>` 按类型索引，所以每种组件类型只能有一个。`AddComponent` 会顺手把 `component.GameManager = this` 写上。

**七步加载的真实流程**（`_stepNo` 初值在构造器里设为 `PreInitializeZerothStep`）：

| 当前 `_stepNo` | 期望的 `nextStep` | 推进到 |
| --- | --- | --- |
| `PreInitializeZerothStep` | `FirstInitializeFirstStep` | `FirstInitializeFirstStep` |
| `FirstInitializeFirstStep` | `WaitSecondStep` | `WaitSecondStep` |
| `WaitSecondStep` | `SecondInitializeThirdState` | `SecondInitializeThirdState` |
| `SecondInitializeThirdState` | `PostInitializeFourthState` | `PostInitializeFourthState` |
| `PostInitializeFourthState` | `FinishLoadingFifthStep` | `FinishLoadingFifthStep` |
| `FinishLoadingFifthStep` | `None` | `LoadingIsOver`，并返回 `true` |
| `LoadingIsOver` | — | 直接返回 `true` |

**这个协议的坑非常隐蔽**：你返回的 `nextStep` 必须和枚举里的期望值**完全一致**，哪怕逻辑上「其实可以跳步」。返回 `GameManagerLoadingSteps.None` 来表示「我这一步没活干」会让状态机**卡死**——它既不推进也不报错，加载条永远转。基类的默认实现正是 `nextStep = None`，所以**不重写就一定会卡**。

**事件广播**：`OnTick(float dt)`、`OnGameNetworkBegin/End`、`OnPlayerConnect(VirtualPlayer)`、`OnPlayerDisconnect` 都是「先遍历所有组件，再转发给 `Game`」。`OnPlayerConnect` 分两轮：第一轮组件 `OnEarlyPlayerConnect` + `Game.OnEarlyPlayerConnect`，第二轮组件 `OnPlayerConnect` + `Game.OnPlayerConnect`。

常见误用：不重写 `DoLoadingForGameManager(step, out nextStep)` 导致加载卡死；重写时抛异常导致整个加载链断掉；`Game` 属性为 null 时读 `CheatMode`（`Game.CheatMode` 转发到 `GameManager.CheatMode`，`GameManager` 为 null 就 NRE）；以为 `Current` 指向自己的实例（构造器里就写了 `GameManagerBase.Current = this`，**后构造的会顶掉前面的**）。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Current` | `public static GameManagerBase Current { get; private set; }` | 最近构造出来的实例。**在构造器里赋值**，所以「谁最后 new 谁就是 Current」。`OnGameEnd` 结束时置 null。没有公开 setter。 |
| `Game` | `public Game Game { get; internal set; }` | 本管理器驱动的 [Game](../Game)。setter 是 `internal`：赋 null 时同时把 `_initialized` 置 false；赋非 null 时保存引用**并立刻调 `Initialize()`**。外部程序集只能读不能写。 |
| `Initialize` | `public void Initialize()` | 幂等标志位设置：`_initialized` 为 false 时置 true。**它本身什么都不做**，真正的初始化在派生类里。 |
| `Components` | `public IEnumerable<GameManagerComponent> Components { get; }` | 组件的只读枚举，顺序不保证。遍历期间增删组件不安全。 |
| `AddComponent` | `public GameManagerComponent AddComponent(Type componentType)` | 按 `Type` 反射创建组件、塞进实体系统，并写 `component.GameManager = this`。返回新建实例。 |
| `AddComponent` | `public T AddComponent<T>() where T : GameManagerComponent, new()` | 泛型版，委托给上面那个。要求公开无参构造。 |
| `GetComponent` | `public GameManagerComponent GetComponent(Type componentType)` | 按 `Type` 取单个组件，**没有注册就返回 null**。 |
| `GetComponent` | `public T GetComponent<T>() where T : GameManagerComponent` | 泛型取单个，返回 null 表示未注册。 |
| `GetComponents` | `public IEnumerable<T> GetComponents<T>() where T : GameManagerComponent` | 取所有指定类型的组件，返回空序列（不抛）。 |
| `RemoveComponent` | `public void RemoveComponent<T>() where T : GameManagerComponent` | 取一个再删。没注册时传 null 进去，`EntitySystem.RemoveComponent(null)` 的行为取决于实现。 |
| `RemoveComponent` | `public void RemoveComponent(GameManagerComponent component)` | 按实例移除。 |
| `OnTick` | `public void OnTick(float dt)` | 帧驱动：先遍历组件调 `OnTick()`（**无参**），再在 `Game != null` 时 `Game.OnTick(dt)`（internal，外部看不到）。 |
| `OnGameNetworkBegin` | `public void OnGameNetworkBegin()` | 组件 `OnGameNetworkBegin()` + `Game.OnGameNetworkBegin()`。 |
| `OnGameNetworkEnd` | `public void OnGameNetworkEnd()` | 组件 `OnGameNetworkEnd()` + `Game.OnGameNetworkEnd()`。 |
| `OnPlayerConnect` | `public void OnPlayerConnect(VirtualPlayer peer)` | 两轮广播：先所有组件 + `Game` 的 `OnEarlyPlayerConnect`，再所有组件 + `Game` 的 `OnPlayerConnect`。做「早期同步」（如玩家名/队伍色）用第一轮。 |
| `OnPlayerDisconnect` | `public void OnPlayerDisconnect(VirtualPlayer peer)` | 单轮：组件 `OnPlayerDisconnect(peer)` + `Game.OnPlayerDisconnect(peer)`。 |
| `OnGameEnd` | `public virtual void OnGameEnd(Game game)` | 虚方法，默认实现是 `Current = null` + `Game = null`。**派生类重写时必须调 `base.OnGameEnd(game)`**，否则静态 `Current` 会指向已销毁的实例。 |
| `DoLoadingForGameManager` | `public bool DoLoadingForGameManager()` | 无参状态机驱动。返回 `true` 表示加载已完成（`LoadingIsOver` 或本次推进到了它）。**必须由引擎每帧调用**，mod 不要手动调。 |
| `DoLoadingForGameManager` | `protected virtual void DoLoadingForGameManager(GameManagerLoadingSteps gameManagerLoadingStep, out GameManagerLoadingSteps nextStep)` | 七个步骤的扩展点。`nextStep` **必须**赋成状态机期望的下一个枚举值，否则卡死。基类默认 `nextStep = None`，不重写必然卡。 |
| `OnLoadFinished` | `public virtual void OnLoadFinished()` | 加载流程收尾钩子，基类空实现。 |
| `InitializeGameStarter` | `public virtual void InitializeGameStarter(Game game, IGameStarter starterObject)` | 在 `IGameStarter` 上挂 mod 的 model/behavior。基类空实现。**这是 mod 挂载自定义 Behavior 的标准位置之一。** |
| `OnGameStart` | `public abstract void OnGameStart(Game game, IGameStarter gameStarter)` | 抽象。`OnGameLoaded` / `OnNewGameCreated` 都已过去，准备开局。 |
| `BeginGameStart` | `public abstract void BeginGameStart(Game game)` | 抽象。真正开始开局，比 `OnGameStart` 更早。 |
| `OnNewCampaignStart` | `public abstract void OnNewCampaignStart(Game game, object starterObject)` | 抽象。新战役（不是读档）启动完成。 |
| `OnAfterCampaignStart` | `public abstract void OnAfterCampaignStart(Game game)` | 抽象。战役启动后的收尾。 |
| `RegisterSubModuleObjects` | `public abstract void RegisterSubModuleObjects(bool isSavedCampaign)` | 抽象。注册 Campaign 侧对象。`isSavedCampaign` 为真表示读档。 |
| `AfterRegisterSubModuleObjects` | `public abstract void AfterRegisterSubModuleObjects(bool isSavedCampaign)` | 抽象。注册之后、开工之前。 |
| `OnGameInitializationFinished` | `public abstract void OnGameInitializationFinished(Game game)` | 抽象。 |
| `OnNewGameCreated` | `public abstract void OnNewGameCreated(Game game, object initializerObject)` | 抽象。全新建档完成。 |
| `OnGameLoaded` | `public abstract void OnGameLoaded(Game game, object initializerObject)` | 抽象。读档完成，`initializerObject` 可能是 `LoadCallbackInitializator`。 |
| `OnAfterGameLoaded` | `public abstract void OnAfterGameLoaded(Game game)` | 抽象。 |
| `OnAfterGameInitializationFinished` | `public abstract void OnAfterGameInitializationFinished(Game game, object initializerObject)` | 抽象。 |
| `RegisterSubModuleTypes` | `public abstract void RegisterSubModuleTypes()` | 抽象。向 `MBObjectManager` 注册自己的 `MBObjectBase` 派生类型。由 `Game.RegisterTypes` 在核心类型之后调用。 |
| `InitializeSubModuleGameObjects` | `public virtual void InitializeSubModuleGameObjects(Game game)` | 虚方法，空实现。[Game](../Game) 的 `InitializeDefaultGameObjects()` 末尾会调它。 |
| `ApplicationTime` | `public abstract float ApplicationTime { get; }` | 抽象。累计运行时间（秒），`Game.ApplicationTime` 转发到它。 |
| `CheatMode` | `public abstract bool CheatMode { get; }` | 抽象。作弊模式开关，**不要拿它当发布版的调试门控**。 |
| `IsDevelopmentMode` | `public abstract bool IsDevelopmentMode { get; }` | 抽象。开发模式标志。 |
| `IsEditModeOn` | `public abstract bool IsEditModeOn { get; }` | 抽象。编辑器模式。 |
| `UnitSpawnPrioritization` | `public abstract UnitSpawnPrioritizations UnitSpawnPrioritization { get; }` | 抽象。单位刷出优先级。 |

## 怎么用

### 怎么拿到它

`GameManagerBase` 是 `TaleWorlds.Core/GameManagerBase.cs:7` 的 `public abstract class GameManagerBase`，335 行、41 个公开成员——**它是模组必须派生并实现的那一层**。

**构造器是 `protected GameManagerBase()`（`:46`）**，而且它第一句就是 `GameManagerBase.Current = this;`（`:47`）——**静态单例是在构造器里写入的**，所以只要你 new 出来，`Current` 就是你。剩下两句建 `_entitySystem = new EntitySystem<GameManagerComponent>()`（`:48`）并把 `_stepNo` 置 `GameManagerLoadingSteps.PreInitializeZerothStep`（`:49`）。

**16 个抽象成员必须全部实现**：11 个方法 `OnGameStart(Game, IGameStarter)`（`:262`）、`BeginGameStart(Game)`（`:265`）、`OnNewCampaignStart(Game, object)`（`:268`）、`OnAfterCampaignStart(Game)`（`:271`）、`RegisterSubModuleObjects(bool)`（`:274`）、`AfterRegisterSubModuleObjects(bool)`（`:277`）、`OnGameInitializationFinished(Game)`（`:280`）、`OnNewGameCreated(Game, object)`（`:283`）、`OnGameLoaded(Game, object)`（`:286`）、`OnAfterGameLoaded(Game)`（`:289`）、`OnAfterGameInitializationFinished(Game, object)`（`:292`）、`RegisterSubModuleTypes()`（`:295`），加上 5 个抽象属性 `ApplicationTime`（`:304`）、`CheatMode`（`:308`）、`IsDevelopmentMode`（`:312`）、`IsEditModeOn`（`:316`）、`UnitSpawnPrioritization`（`:320`）。

组件系统是它的第二条扩展线：`AddComponent<T>() where T : GameManagerComponent, new()`（`:72`）、`GetComponent<T>()`（`:84`，找不到返回 null）、`GetComponents<T>()`（`:90`）、`RemoveComponent<T>()`（`:96`）、以及只读的 `Components`（`:55`）。

### 典型用法

```csharp
using TaleWorlds.Core;

public class MyGameManager : GameManagerBase          // GameManagerBase.cs:7
{
    public override void RegisterSubModuleTypes() { }           // :295
    public override void RegisterSubModuleObjects(bool isSavedCampaign) { }   // :274
    public override void AfterRegisterSubModuleObjects(bool isSavedCampaign) { }
    public override void OnGameStart(Game game, IGameStarter gameStarter) { }   // :262
    public override void BeginGameStart(Game game) { }
    public override void OnNewCampaignStart(Game game, object starterObject) { }
    public override void OnAfterCampaignStart(Game game) { }
    public override void OnGameInitializationFinished(Game game) { }
    public override void OnNewGameCreated(Game game, object initializerObject) { }
    public override void OnGameLoaded(Game game, object initializerObject) { }
    public override void OnAfterGameLoaded(Game game) { }
    public override void OnAfterGameInitializationFinished(Game game, object initializerObject) { }

    public override float ApplicationTime => 0f;                 // :304
    public override bool CheatMode => false;                     // :308
    public override bool IsDevelopmentMode => false;             // :312
    public override bool IsEditModeOn => false;                  // :316
    public override UnitSpawnPrioritizations UnitSpawnPrioritization
        => UnitSpawnPrioritizations.Default;                     // :320
}

// 全局读
GameManagerBase.Current;                  // :12，构造器里写入（:47）
GameManagerBase.Current.Initialize();     // :37

// 组件
GameManagerComponent c = GameManagerBase.Current.AddComponent<MyComponent>();   // :72
MyComponent got = GameManagerBase.Current.GetComponent<MyComponent>();          // :84，找不到是 null
```

### 最容易踩的坑

**把 `CheatMode` / `IsDevelopmentMode` 当成发布门控。** 它们是抽象属性（`:308`、`:312`），要**你自己实现**——返回值完全取决于你的 mod，不是引擎环境决定的诊断信号。于是「`if (GameManagerBase.Current.IsDevelopmentMode)` 才跑调试代码」在别的 mod 写出的 manager 里可能是 `false`，你的调试分支永远不进；反过来你为了方便返回 `true`，发布版就会带上调试逻辑。**这五个属性的正确实现是常量**，把它们当环境查询用是误用。

第二个坑是 `Initialize()`（`:37-42`）看起来像个正常的幂等初始化，但它只是 `if (!this._initialized) { this._initialized = true; }`——**没有任何实际工作**，也不设默认值。你若以为「调了 Initialize 一切就绪了」，后面读 `Game`（`:17`）拿到的是 null。

第三，`OnTick(float dt)`（`:109`）的广播顺序是：先遍历 `_entitySystem.Components` 逐个 `OnTick()`（`:110-113`），**再** `if (this.Game != null) this.Game.OnTick(dt);`（`:114-117`）。所以组件 tick 里 `Game.Current` 已经是本局对象；但 `GameManagerBase.Current` 在**换局时会指向新的 manager**（因为 `Current = this` 在构造器里，`:47`），缓存它的代码在换局后拿到的是新实例，而旧实例的组件还在被旧局 tick。

## 真实示例

派生一个管理器：实现全部抽象成员，组件在 `BeginGameStart` 里挂：

```csharp
public class MyGameManager : MBGameManager
{
    private MyInventoryComponent _inventory;

    public MyInventoryComponent Inventory => GetComponent<MyInventoryComponent>();

    public override void RegisterSubModuleTypes()
    {
        base.RegisterSubModuleTypes();
    }

    public override void BeginGameStart(Game game)
    {
        base.BeginGameStart(game);
        _inventory = AddComponent<MyInventoryComponent>();
    }

    public override void OnGameStart(Game game, IGameStarter gameStarter)
    {
        base.OnGameStart(game, gameStarter);
        Campaign campaign = Campaign.Current;
        campaign.AddBehavior(new MyInventoryBehavior());
    }

    public override void OnGameEnd(Game game)
    {
        base.OnGameEnd(game);
    }

    public override float ApplicationTime => (float)(DateTime.Now - _startTime).TotalSeconds;
    public override bool CheatMode => false;
    public override bool IsDevelopmentMode => false;
    public override bool IsEditModeOn => false;
    public override UnitSpawnPrioritizations UnitSpawnPrioritization => UnitSpawnPrioritizations.Default;
}
```

七步加载状态机的正确重写形状（**`nextStep` 必须逐级对应**）：

```csharp
protected override void DoLoadingForGameManager(
    GameManagerLoadingSteps gameManagerLoadingStep,
    out GameManagerLoadingSteps nextStep)
{
    if (gameManagerLoadingStep == GameManagerLoadingSteps.PreInitializeZerothStep)
    {
        LoadMyModAssets();
        nextStep = GameManagerLoadingSteps.FirstInitializeFirstStep;
        return;
    }
    if (gameManagerLoadingStep == GameManagerLoadingSteps.WaitSecondStep)
    {
        nextStep = GameManagerLoadingSteps.SecondInitializeThirdState;
        return;
    }
    if (gameManagerLoadingStep == GameManagerLoadingSteps.FinishLoadingFifthStep)
    {
        nextStep = GameManagerLoadingSteps.None;
        return;
    }
    // 其余步骤也要给出期望值，缺一个就卡
    nextStep = StepAfter(gameManagerLoadingStep);
}
```

取用组件（`GetComponent` 不存在时返回 null，必须判空）：

```csharp
GameManagerBase manager = GameManagerBase.Current;
MyInventoryComponent inventory = manager.GetComponent<MyInventoryComponent>();
if (inventory != null)
{
    inventory.Refill();
}
foreach (MyInventoryComponent c in manager.GetComponents<MyInventoryComponent>())
{
    c.Persist();
}

// 读者侧演示组件，不是游戏 API；以下方法仅示意调用形状
public class MyInventoryComponent
{
    public void Refill() { }
    public void Persist() { }
}
```

## 风险与边界

- **加载状态机不重写就卡死。** 基类 `DoLoadingForGameManager(step, out next)` 默认 `nextStep = None`，而 `PreInitializeZerothStep` 期望的是 `FirstInitializeFirstStep`。不重写 = 加载条永转，且**不抛异常、不打日志**。
- **`nextStep` 必须是精确的下一个枚举值。** 想「合并两步」也不行——状态机是等值比较，不等就一直重复调同一步。
- **重写里抛异常 = 整局起不来。** 这七步在加载线程上串行执行，没有 per-step 的错误隔离。
- **`Current` 是「最后构造者」。** 构造器里就写 `GameManagerBase.Current = this`，编辑器/战役/自定义战斗多套管理器共存时会互相覆盖。
- **`OnGameEnd` 重写必须调 base。** 默认实现负责 `Current = null` 与 `Game = null`；漏掉 base 会让静态 `Current` 指向已销毁实例。
- **`Game` 属性 setter 是 internal。** 外部程序集改不了它，只能读。为 null 时读 `CheatMode` 之类会 NRE（[Game](../Game) 的转发属性不做判空）。
- **`OnTick` 会广播给已销毁的组件。** `RemoveComponent` 不会通知组件做任何清理，组件里的状态要自己管。
- **网络回调是 public，别在单机逻辑里假设它不会被调。** `OnPlayerConnect` 分两轮广播（Early / 普通），顺序错了会导致早期同步缺失。
- **抽象成员一个都不能漏。** `RegisterSubModuleTypes` 漏实现会编译报错（好），但如果误写成空实现，mod 的 `MBObjectBase` 类型就没进 `MBObjectManager`，运行期表现为「对象找不到」。
- **`RemoveComponent<T>()` 在未注册时传 null。** 先 `GetComponent` 判空再删。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Core/GameManagerBase.cs` 逐行比对，**public 表面完全一致**：`Current`、`Game`、`Initialize`、`Components`、两个 `AddComponent`、两个 `GetComponent`、`GetComponents`、两个 `RemoveComponent`、`OnTick`、四个网络回调、`OnGameEnd`、两个 `DoLoadingForGameManager`、`OnLoadFinished`、`InitializeGameStarter`、12 个抽象成员、`InitializeSubModuleGameObjects` 与 5 个抽象属性。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/GameManagerBase.cs`（275 行）与 `bannerlord-1.4.6/TaleWorlds.Core/GameManagerBase.cs`（335 行）逐成员比对 public/protected 表面。**三版 public/protected/abstract 表面完全一致（各 34 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 275 行、1.4.6 是 335 行。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 被持有者：[Game](../Game) 在构造/`BeginLoading` 时写 `gameManager.Game = this`
- 状态栈：[GameStateManager](../GameStateManager) 的 `OnTick` 由 `Game` 驱动，间接来自本类的 `OnTick`
- 反射回调链：[MBSubModuleBase](../../core/MBSubModuleBase) 的 `OnGameStart` / `RegisterSubModuleTypes` 等回调最终落到本类的抽象成员上

- 上一级：[v1.4.6 内容根](../../../)
