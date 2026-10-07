---
title: "GameState"
description: "游戏状态基类：地图、锻造、部队、王国等界面各自派生它，由 GameStateManager 压栈出栈并按激活/停用/初始化/收尾四段派发监听器回调。"
---

# GameState

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class GameState : MBObjectBase`
**Base:** `TaleWorlds.ObjectSystem.MBObjectBase`
**File:** `TaleWorlds.Core/GameState.cs`

## 概述

212 行，一个 `abstract` 基类，定义了游戏界面状态的生命周期契约。所有「打开某个界面」的 mod 需求最后都落在这里：`MapState` / `KingdomState` / `ClanState` / `PartyState` / `CraftingState` / `BarberState` / `EducationState` / `CharacterDeveloperState` / `GameOverState` / `VideoPlaybackState` / `BannerEditorState` / `CharacterCreationState` …… 全是它的派生类。

它的职责只有两件：**转发四段生命周期**，以及**管理一串 `IGameStateListener`**。真正的压栈 / 出栈 / 每帧 tick 在 [GameStateManager](../GameStateManager) 那边。

四个 `internal` 桥接方法（`HandleInitialize` / `HandleFinalize` / `HandleActivate` / `HandleDeactivate`）是给管理器调的入口——它们先调本类对应的 `protected virtual` 钩子，再遍历监听器调同名方法。

## 心智模型

把它想成**一张栈上的卡片**，卡片自己管两件事：卡片背面贴的钩子（`OnTick` / `OnActivate` / …），以及愿意跟着这张卡片一起走的订阅者（`IGameStateListener` 列表）。

生命周期顺序由管理器串起来：`CreateState<T>` → `HandleCreateState`（设 `GameStateManager`、广播给管理器级监听器）→ `PushState` → `HandleActivate`（`OnActivate` + 监听器 `OnActivate` + 执行 `StateActivateCommand`）→ 每帧 `OnTick`（**仅顶层状态**）→ `PopState` → `HandleDeactivate` → `HandleFinalize`。

五条真会咬人的边界：

1. **`OnTick` 只在栈顶跑。** `GameStateManager.OnTick` 取 `ActiveState`（即 `_gameStates` 最后一项）然后调它的 `OnTick` 或 `OnIdleTick`。**被压住的状态永远拿不到 tick。** 所以派生类里别做「累积时间」这类需要连续 tick 的逻辑——它一被压栈就停摆。

2. **`HandleFinalize` 把两个字段置 null。** 它在遍历完监听器之后执行 `this._listeners = null;` 与 `this.GameStateManager = null;`。**被弹掉的状态对象再调 `Listeners` 或 `Predecessor` 就是空引用。** 别把状态实例缓存起来跨弹栈使用。

3. **`NumberOfListenerActivations` 是静态计数器，用来做重入抑制。** `HandleActivate` 开头置 0，`OnActivate()` 执行完，如果 `IsActive` 仍为真、监听器列表非空、而计数器仍是 0，就说明**没有任何一个监听器在 `OnActivate` 里切了状态**——这时才遍历监听器广播。如果某个监听器在 `OnActivate` 里做了状态切换（计数器已被置位），**剩余监听器不会收到 `OnActivate`**。这是防止「栈在遍历中被改」的技巧，副作用是重入路径上部分监听器收不到激活回调。

4. **`Predecessor` 与 `IsActive` 都依赖 `GameStateManager` 非空。** `Predecessor` 直接 `this.GameStateManager.FindPredecessor(this)`，`IsActive` 写的是 `this.GameStateManager != null && this.GameStateManager.ActiveState == this`。**没被管理器持有的裸 `new` 出来的状态对象，读 `Predecessor` 直接炸，读 `IsActive` 安全返回 false。**

5. **`RegisterListener(null)` 会走进断言分支。** 传 null 时先调 `Debug.FailedAssert(...)`，然后继续 `_listeners.Contains(null)` / `Add(null)`——**断言不是 return**，行为取决于断言是否致命，别指望它拦住你。

## 关键成员

### 状态查询

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `IsActive` | `public bool IsActive { get; }` | `GameStateManager != null && GameStateManager.ActiveState == this`。**唯一能安全在裸对象上调的查询属性。** |
| `Predecessor` | `public GameState Predecessor { get; }` | 栈中上一个（`Level` 不大于自己且最靠后的那个）状态。`GameStateManager` 为 null 时**空引用**。 |
| `Listeners` | `public IReadOnlyCollection<IGameStateListener> Listeners { get; }` | `_listeners.AsReadOnly()` 的包装。**`HandleFinalize` 之后是 null。** |
| `IsMenuState` | `public virtual bool IsMenuState { get; }` | 标记本状态是否为菜单态，基类恒为 `false`。管理器据此决定输入处理。`CraftingState` 等覆写为 `true`。 |
| `IsMusicMenuState` | `public virtual bool IsMusicMenuState { get; }` | 音乐菜单标记，基类恒为 `false`。 |
| `Activated` | `public bool Activated { get; private set; }` | 由 `OnActivate` / `OnDeactivate` 的**基类实现**置位。**派生类若覆写这两个方法而不调 base，标志就不准。** |

### 生命周期钩子（protected virtual）

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `OnInitialize` | `protected virtual void OnInitialize()` | 状态被创建并交给管理器时调一次。基类空实现。 |
| `OnFinalize` | `protected virtual void OnFinalize()` | 状态被彻底弹出时调一次，**在监听器遍历之后**。基类空实现。 |
| `OnActivate` | `protected virtual void OnActivate()` | 压栈到栈顶时调。**基类实现把 `Activated` 置 true。** |
| `OnDeactivate` | `protected virtual void OnDeactivate()` | 从栈顶移开时调。**基类实现把 `Activated` 置 false。** |
| `OnTick` | `protected internal virtual void OnTick(float dt)` | 每帧调，**仅当本状态是栈顶且没有被用户禁用**。`MapState` 覆写了它。 |
| `OnIdleTick` | `protected internal virtual void OnIdleTick(float dt)` | 被用户禁用时的替代 tick。`GameStateManager.ActiveStateDisabledByUser` 为真时走这一条而不是 `OnTick`。 |

### 监听器管理

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `RegisterListener` | `public bool RegisterListener(IGameStateListener listener)` | 已存在则返回 `false`，否则追加并返回 `true`。**传 null 会先触发 `Debug.FailedAssert` 但不 return**，null 仍可能被加进列表。 |
| `UnregisterListener` | `public bool UnregisterListener(IGameStateListener listener)` | 转发 `_listeners.Remove(listener)`，返回是否真的删掉了。 |
| `GetListenerOfType<T>` | `public T GetListenerOfType<T>()` | 正序遍历返回第一个 `is T` 的监听器；**没有就返回 `default(T)`（引用类型为 null）**，不抛。 |
| `GameStateManager` | `public GameStateManager GameStateManager { get; internal set; }` | 所属管理器。**setter 是 `internal`**——外部程序集改不了，只能靠 `GameStateManager.CreateState<T>` 走 `HandleCreateState` 获得。**`HandleFinalize` 会置 null。** |

### 桥接与字段

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `HandleInitialize` | `internal void HandleInitialize()` | `OnInitialize()` + 遍历监听器 `OnInitialize()`。**`internal`，外部调不到。** |
| `HandleFinalize` | `internal void HandleFinalize()` | `OnFinalize()` + 遍历监听器，然后 **`_listeners = null`、`GameStateManager = null`**。 |
| `HandleActivate` | `internal void HandleActivate()` | 重入抑制 + `OnActivate()` + 可能遍历监听器 + 执行 `GameStateManager.StateActivateCommand`。 |
| `HandleDeactivate` | `internal void HandleDeactivate()` | `OnDeactivate()` + 遍历监听器 `OnDeactivate()`。**不做重入抑制。** |
| `.ctor` | `protected GameState()` | 只做 `this._listeners = new List<IGameStateListener>();`。**`protected`——外部只能通过派生类的构造器间接触发。** |
| `Level` | `public int Level;` | **公开可写字段**，栈层级。`GameStateManager` 用它决定前驱与批量弹出范围。默认 0。 |
| `NumberOfListenerActivations` | `public static int NumberOfListenerActivations;` | 静态计数器，重入抑制用。`HandleActivate` 开头归零。**跨所有状态共享，不要当自己的状态用。** |

## 怎么用

### 怎么拿到它

`GameState` 是 `public abstract class GameState : MBObjectBase`（`TaleWorlds.Core/GameState.cs:9`）——**抽象类**，而且**构造器是 `protected GameState()`（`:67`）**，外部连 `new` 都不行。它只做一件事 `new List<IGameStateListener>()`（`:68`）。

它是 UI / 逻辑状态栈的元素。用法是：

- 继承它，覆写 `protected virtual void OnInitialize()`（`:121`）、`OnActivate()`（`:172`）、`OnDeactivate()`（`:188`）、`OnTick(float dt)`（`:194`）、`OnIdleTick(float dt)`（`:199`）、`OnFinalize()`（`:138`）、以及继承自 [MBObjectBase](../../campaign-ext/MBObjectBase) 的 `GetName()`。
- **自己 `new` 出一个实例，再交给 [GameStateManager](../GameStateManager) 压栈**：`public void PushState(GameState gameState, int level = 0)`（`GameStateManager.cs:235`）和 `public void CleanAndPushState(GameState gameState, int level = 0)`（`GameStateManager.cs:259`）。两个方法都会先用 `Debug.FailedAssert("State should be changed from main thread", ...)` 检查线程（`GameStateManager.cs:239`）。

它自己也有两个**跨状态**的字段：`Predecessor`（`:13`）指向上一个状态，`IsActive`（`:23`）由 `Activated { get; private set; }`（`:169`）驱动——`OnActivate()`（`:172-175`）置 true，`OnDeactivate()`（`:188-191`）置 false。

对外部代码来说最有用的两个方法：`RegisterListener(IGameStateListener)`（`:73`）和 `UnregisterListener(...)`（`:88`），以及按类型找监听器的 `GetListenerOfType<T>()`（`:94`）。

### 典型用法

定义一个自己的状态，并监听它的进入 / 离开：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Library;

public class MyCraftingState : GameState
{
    protected override TextObject GetName() { return new TextObject("{=craft}锻造"); }   // MBObjectBase.cs:112

    protected override void OnInitialize()
    {
        base.OnInitialize();                    // GameState.cs:121
        Game.Current.GameStateManager.PopState();   // GameStateManager.cs:247，签名 PopState(int level = 0)
    }

    protected override void OnActivate()         // :172，会把 Activated 置 true
    {
        base.OnActivate();
    }

    protected internal override void OnTick(float dt)   // :194，注意是 protected internal
    {
        base.OnTick(dt);
    }
}

// 注册监听器：内部先查重，重复注册返回 false
bool ok = state.RegisterListener(myListener);     // :73
state.UnregisterListener(myListener);             // :88
MyListener found = state.GetListenerOfType<MyListener>();   // :94
```

### 最容易踩的坑

**重复 `RegisterListener` 以为它会叠加，实际上第二次直接返回 `false`；而 `null` 传进去只会断言不会抛异常。** `RegisterListener`（`:73-87`）的实现是：`if (listener == null) Debug.FailedAssert("Can not register null listener to game state.", ...);` 然后**没有 return，继续往下走**——接着 `this._listeners.Contains(listener)` 对 null 求值、`Add(null)`。也就是说传 null 时断言只打日志，**null 照样被加进监听器列表**，之后每次广播都会调到它并空引用。必须自己先判 null。

第二个坑是 `OnTick(float dt)` 与 `OnIdleTick(float dt)` 的可访问性：它们声明为 `protected internal virtual`（`:194`、`:199`），不是纯 `protected` 也不是 `public`。你的子类能覆写，但**同一程序集外的代码无法从外部调用它们**——tick 完全由 `GameStateManager` 驱动。相应地，`Activated`（`:169`）是 `{ get; private set; }` 且只由 `OnActivate` / `OnDeactivate` 改（`:175`、`:191`），**不要用它在 `OnTick` 里做每帧刷新**，它只在状态切换那一刻变。

## 真实示例

派生一个自定义状态（覆写钩子时务必调基类，否则 `Activated` 标志不准）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

// 读者侧演示组件，不是游戏 API；以下方法仅示意调用形状
public class TradeLedgerState : GameState
{
    private float _elapsed;

    public override bool IsMenuState
    {
        get { return true; }
    }

    public string LedgerText { get; private set; }

    public TradeLedgerState(string ledgerText)
    {
        this.LedgerText = ledgerText;
        this.Level = 2;
    }

    protected override void OnActivate()
    {
        base.OnActivate();
        _elapsed = 0f;
    }

    protected override void OnTick(float dt)
    {
        _elapsed += dt;
    }

    public float Elapsed
    {
        get { return _elapsed; }
    }
}
```

挂上它并压栈（注意 `PushState` 断言主线程）：

```csharp
GameStateManager manager = Game.Current.GameStateManager;
TradeLedgerState state = new TradeLedgerState("{=my_ledger}Trade Ledger");

manager.PushState(state, 2);
Debug.Print("active=" + state.IsActive + " level=" + state.Level, 0);

GameState below = state.Predecessor;
Debug.Print("predecessor=" + (below == null ? "null" : below.GetType().Name), 0);
```

注册监听器并按类型取回（拿不到时返回 null，不抛）：

```csharp
using TaleWorlds.Core;

// 读者侧演示组件，不是游戏 API；以下方法仅示意调用形状
public class LedgerRefreshWatcher : IGameStateListener
{
    public void OnActivate()
    {
    }

    public void OnDeactivate()
    {
    }

    public void OnInitialize()
    {
    }

    public void OnFinalize()
    {
    }
}

TradeLedgerState state = new TradeLedgerState("{=my_ledger}Trade Ledger");

LedgerRefreshWatcher watcher = new LedgerRefreshWatcher();
bool added = state.RegisterListener(watcher);
bool again = state.RegisterListener(watcher);

Debug.Print("added=" + added + " duplicateRejected=" + !again, 0);

LedgerRefreshWatcher found = state.GetListenerOfType<LedgerRefreshWatcher>();
Debug.Print("found=" + (found != null) + " listenerCount=" + state.Listeners.Count, 0);
```

查询某个类型的状态是否在栈里，以及切状态时被禁用的表现：

```csharp
GameStateManager manager = Game.Current.GameStateManager;

TradeLedgerState existing = manager.LastOrDefault<TradeLedgerState>();
if (existing == null)
{
    TradeLedgerState fresh = new TradeLedgerState("{=my_ledger}Trade Ledger");
    manager.CleanAndPushState(fresh, 0);
    Debug.Print("pushed, active=" + fresh.IsActive, 0);
}
else
{
    Debug.Print("already open, active=" + existing.IsActive
        + " disabledByUser=" + manager.ActiveStateDisabledByUser, 0);
}

GameState top = manager.ActiveState;
Debug.Print("top=" + (top == null ? "null" : top.GetType().Name), 0);
```

## 风险与边界

- **`abstract` 且基类成员基本没有抽象方法。** 六个钩子全是 `virtual` 空实现，`new` 一个具体子类连方法都不写也能编译。**这是「忘记覆写 OnTick」的根源——不报错，只是不动。**
- **`OnTick` 只在栈顶跑。** 被压住就停摆。别做累积计时类逻辑。
- **`HandleFinalize` 会把 `_listeners` 和 `GameStateManager` 都置 null。** 状态对象弹栈后不可再用。**不要缓存状态实例。**
- **`Predecessor` 会空引用。** `GameStateManager` 为 null（裸 new、或已被 finalize）时直接解引用。
- **`Listeners` 会是 null。** finalize 之后。**判空先于遍历。**
- **`GetListenerOfType<T>` 返回 null 而不是抛。** 同一类型注册多个时只返回正序第一个，**不是最近注册的**。
- **`RegisterListener(null)` 不断言返回。** `Debug.FailedAssert` 之后继续执行，null 可能进列表，后续遍历回调就炸。
- **`OnActivate` / `OnDeactivate` 覆写时必须调基类。** 基类实现负责维护 `Activated`。漏调则 `Activated` 永远不更新——**这是最容易忘的一条**。
- **监听器重入抑制。** 任一监听器在 `OnActivate` 里切了状态，后续监听器收不到 `OnActivate`。**依赖「所有人都会收到激活回调」的监听器会漏事件。**
- **`HandleDeactivate` 没有重入抑制。** 监听器回调里切状态不会阻止后续广播。
- **`GameStateManager` 的 setter 是 `internal`。** 外部程序集不能手动注入，只能通过 `GameStateManager.CreateState<T>`（它内部调 `HandleCreateState` 设置）。
- **`Level` 是公开可写字段。** 默认 0，直接改会影响管理器的前驱查找与批量弹出范围。
- **`NumberOfListenerActivations` 是全局静态。** 所有状态共享同一个计数器，**不要读它做业务判断**。
- **`IsMenuState` / `IsMusicMenuState` 靠覆写而非配置。** 基类恒 `false`，忘了覆写会让管理器用错输入处理路径。
- **构造函数是 `protected`。** 外部不能 `new GameState()`，必须派生。
- **`NumberOfListenerActivations` 与 `OnIdleTick` 的关系。** 用户禁用状态下走 `OnIdleTick`，**`OnTick` 不会被调**。两种 tick 的实现要各自完整。

## 依赖关系

- 栈管理者：[GameStateManager](../GameStateManager) 提供 `CreateState<T>` / `PushState` / `PopState` / `CleanAndPushState` / `ActiveState` / `ActiveStateDisabledByUser` / `LastOrDefault<T>` / `FindPredecessor`（internal）
- 监听契约：`TaleWorlds.Core.IGameStateListener`（四个方法：`OnActivate` / `OnDeactivate` / `OnInitialize` / `OnFinalize`）
- 基类形状：[MBObjectBase](../../campaign-ext/MBObjectBase) 提供 `StringId` 与 `MBObjectManager` 寻址（状态对象通常不真的用 id）
- 入口：[Game](../Game) 的 `GameStateManager` 属性，以及静态 `GameStateManager.Current`
- 命令行挂钩：`GameStateManager.StateActivateCommand` 在 `HandleActivate` 末尾被 `CommandLineFunctionality.CallFunction` 执行
- 典型派生（战局侧）：`TaleWorlds.CampaignSystem.GameState.MapState`（覆写 `OnTick` 与 `OnActivate`）、`KingdomState`、`ClanState`、`PartyState`、`GameOverState`
- 典型派生（菜单侧）：`TaleWorlds.CampaignSystem.GameState.CraftingState`（覆写 `IsMenuState` 为 `true`，持 `Crafting` 与 `ICraftingStateHandler`）、`BarberState`、`EducationState`、`CharacterDeveloperState`、`BannerEditorState`
- 消费方：`SandBox.GauntletUI` 下的界面类（如 `GauntletCraftingScreen`）实现 `IGameStateListener`，随状态激活与停用推屏与弹屏
- 模块地图：[module-map](../../../architecture/module-map)
- 桶首页：[core-extra API 分区](../)