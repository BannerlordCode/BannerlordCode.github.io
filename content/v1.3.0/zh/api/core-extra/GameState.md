---
title: "GameState"
description: "Bannerlord 状态栈里每一个全屏界面的抽象基类：GameState 会拿到 Initialize、Activate、Deactivate、Finalize 四个回调以及每帧 tick，拥有自己的 IGameStateListener 列表，并暴露 Level 作为它在 GameStateManager 里的排序键。"
---
# GameState

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameState : MBObjectBase`
**Base:** `MBObjectBase`
**Source:** `TaleWorlds.Core/GameState.cs`

## 概述

`GameState` 就是 Bannerlord 里一个全屏状态实际是什么：主菜单、地图界面、角色创建阶段、视频播放、编辑器、加载覆盖层。它是一个继承 `MBObjectBase` 的抽象类，只通过 `GameStateManager.CreateState<T>()` 实例化，并由它的管理器驱动四个生命周期回调——`OnInitialize`、`OnActivate`、`OnDeactivate`、`OnFinalize`——外加每帧的 `OnTick`，以及在"停用活动状态"请求挂起时使用的 `OnIdleTick`。它还维护自己的一份 `IGameStateListener` 列表，与管理器级别的监听器列表分开，这正是状态能在不知道谁压入自己的情况下响应压栈的方式。`Level` 是一个 public int **字段**而不是属性，它是管理器插入时使用的排序键。

## 心智模型

把它理解成**"一个界面，生命周期由管理器驱动，外加一个决定叠放顺序的排序键"**。正常流程里你绝不自己 `new` 一个 `GameState`——你调 `manager.CreateState<T>()`（它会设置 `GameStateManager` 并触发 `OnCreateState`），然后 `PushState`。

**真实调用顺序，直接摘自 `GameStateManager.OnPushState` / `OnPopState`：**

1. `CreateState<T>()` → `HandleCreateState` 设置 `state.GameStateManager = this`，触发 `IGameStateManagerListener.OnCreateState`。**此时 `OnInitialize` 还没跑。**
2. `PushState(state, level)` → 按 `Level` 插入。
3. 若栈顶改变：旧栈顶 `HandleDeactivate()` → 监听器 `OnDeactivate`；然后管理器监听器 `OnPushState`；然后新栈顶 `HandleInitialize()`（→ `OnInitialize`，再逐个 `IGameStateListener.OnInitialize`）；然后新栈顶 `HandleActivate()`（→ `OnActivate`，再逐个监听器的 `OnActivate`）。
4. 在它是栈顶的每一帧：`manager.OnTick(dt)` → `OnTick(dt)`——若存在 disable 请求则改为 `OnIdleTick(dt)`。
5. `PopState(level)` → `HandleDeactivate()`、`HandleFinalize()`、从列表移除，然后新暴露出来的栈顶得到 `HandleActivate()`。

**三个坑：**

- **`OnInitialize` 只在状态成为栈顶时**才触发，创建时并不会。单独 `CreateState<T>()` 不会在状态上跑任何东西。如果你在字段初始化器或构造函数里构建状态，那时你还拿不到 `GameStateManager`，因为它是 `HandleCreateState` 赋值的。
- **`HandleFinalize()` 会把你自己的内部状态置空。** 它跑完之后 `this._listeners = null`、`this.GameStateManager = null`。此后任何 `IsActive` 读取都会解引用一个空管理器并抛异常。把已收尾的状态当作死对象；管理器在它之后立刻把它移出列表。
- **同一个状态的 `OnActivate` 可能运行多次。** 每次栈顶变化的压栈都会重新激活，包括从一个更高层弹栈之后的重新激活。`Activated` 在基类 `OnActivate` 里置 `true`、在 `OnDeactivate` 里置 `false`；如果你重写了其中一个却忘了调 `base.OnActivate()` / `base.OnDeactivate()`，`Activated` 就会一直是陈旧值。

## 何时该用 / 何时不该用

**该用 `GameState` 的场景：**
- 你要添加一个真正参与栈的全屏界面——设置界面、自定义加载覆盖层、类似编辑器的视图。
- 你需要按激活阶段管理资源：在 `OnActivate` 里构建昂贵资源，在 `OnDeactivate` 里释放。
- 你需要这个状态收到 `GameStateManager` 监听器的 `OnPushState` / `OnPopState` / `OnCleanStates` 扇出。

**不该用 `GameState` 的场景：**
- 你想要战役内覆盖层，比如地图小窗或通知栏。那属于 `GauntletLayer` / `ScreenBase` / `IGauntletMapEventVisualHandler`，不是状态栈成员。
- 你想要响应式的战役逻辑。`CampaignBehaviorBase` 给你 `RegisterEvents` / `SyncData`；`GameState` 两者都没有。
- 你想要任务作用域的东西。那是 `MissionBehavior`。
- 你的类型需要构造函数参数——`CreateState<T>()` 要求 `new()`；带 `params object[]` 的重载仍然走 `Activator.CreateInstance(typeof(T), parameters)`，所以无参那个重载可用时依然需要公共无参构造函数。

## 依赖关系

- [GameStateManager](../GameStateManager/) — 创建、叠放并 tick 这个对象；持有指回它的 `GameStateManager` 反向引用。
- [IGameStateListener](../IGameStateListener/) — 状态向自己那份监听器扇出的四个回调。
- [IGameStateManagerOwner](../IGameStateManagerOwner/) — 当本状态成为活动状态时由管理器接收 `OnStateChanged`。
- [GameStateManagerType](../GameStateManagerType/) — 拥有你的管理器决定你在 `Global` 栈还是 `Game` 栈里。
- [Module](../../core/Module/) — 拥有全局管理器并压入 `InitialState`、`EditorState`、`VideoPlaybackState`。
- [MBObjectManagerExtensions](../MBObjectManagerExtensions/) — 本类所继承的 `MBObjectBase` 所参与的对象注册扩展入口。

## 主要成员

### 生命周期重写

#### `protected virtual void OnInitialize()`
由 `internal HandleInitialize()` 调用，每次本状态转为栈顶时一次。**约定：**它运行时 `GameStateManager` 已经被赋值（在 `CreateState` 阶段就赋好了）。状态自身的 `OnInitialize` 在其监听器的 `IGameStateListener.OnInitialize` **之前**运行，所以监听器可以假定基类状态已初始化完毕。

#### `protected virtual void OnActivate()`
由 `internal HandleActivate()` 调用。**约定：**永远要调 `base.OnActivate()`——那才是把 public `Activated` 标志置为 `true` 的地方。紧接其后，如果状态处于活动、有监听器、且 `OnActivate` 里没有压入新状态，基类就会为每个监听器调用 `IGameStateListener.OnActivate()`。如果你在 `OnActivate` 里压入状态，`IsActive` 变成 false，监听器扇出被跳过——监听器于是**永远不会被激活**。

#### `protected virtual void OnDeactivate()`
由 `internal HandleDeactivate()` 调用，在弹栈时的 `HandleFinalize()` 之前、在管理器激活新栈顶之前。**约定：**永远要调 `base.OnDeactivate()` 来清除 `Activated`。

#### `protected virtual void OnFinalize()`
由 `HandleFinalize()` 调用，紧接在状态被管理器列表丢弃之前。它返回之后，基类把 `_listeners` 与 `GameStateManager` 置空。这是你释放非托管或引擎资源的最后机会。

#### `protected internal virtual void OnTick(float dt)` / `protected internal virtual void OnIdleTick(float dt)`
`OnTick` 是常规每帧路径，只在本状态位于栈顶期间由 `GameStateManager.OnTick` 驱动。`OnIdleTick` 是 `ActiveStateDisabledByUser` 为 true 时的替代路径——实现其中一个即可，永远不要假设两个都会跑。两者都声明为 `protected internal virtual`，所以重写可以写 `protected` 或 `protected internal`。

### 只读表面

#### `public bool IsActive { get; }`
`GameStateManager != null && GameStateManager.ActiveState == this`。它透传到管理器，所以**收尾之后**是 false（管理器为 null）而不是抛异常——null 检查就写在这个属性里。

#### `public GameState Predecessor { get; }`
即 `GameStateManager.FindPredecessor(this)`，也就是管理器列表里比本状态低一位的元素；当本状态位于栈底时为 `null`。已收尾（管理器为 null）时调用会抛异常，因为 `FindPredecessor` 没有加保护。

#### `public bool Activated { get; private set; }`
只由基类 `OnActivate` / `OnDeactivate` 设置。setter 是私有的——请重写虚方法，不要试图赋值。

#### `public virtual bool IsMenuState { get; }` / `public virtual bool IsMusicMenuState { get; }`
基类都返回 `false`，它们是**给框架查询用的重写点**，不是给你自己状态用的。当你的状态是一个完整菜单时，从 `IsMenuState` 返回 `true`——别处有代码会按它分支。基类上没有 setter，所以重写时只提供只读属性（`public override bool IsMenuState { get { return true; } }`）。

#### `public IReadOnlyCollection<IGameStateListener> Listeners { get; }`
状态自身监听器列表的只读视图，`AsReadOnly()`，每次访问重建。收尾之后为 `null`。

#### `public GameStateManager GameStateManager { get; internal set; }`
由 `GameStateManager.HandleCreateState` 赋值。setter 是 `internal`，所以 mod 无法把状态在管理器之间搬来搬去。

#### `public int Level;`
一个 **public 字段**，不是属性，管理器按它排序。在 `PushState` 之前赋值；之后再改不会让存活栈重新排序。

### 监听器

#### `public bool RegisterListener(IGameStateListener listener)`
添加监听器，已存在则返回 `false`。**约定：**传入 `null` 会触发 `Debug.FailedAssert("Can not register null listener to game state.")`，然后**仍然**把 `null` 追加进列表——断言不是守卫，所以之后的 `foreach` 会抛异常。请自己检查 null。

#### `public bool UnregisterListener(IGameStateListener listener)`
即 `List.Remove`，返回是否真的移除了东西。

#### `public T GetListenerOfType<T>()`
按注册顺序返回第一个是 `T` 的 `IGameStateListener`，无匹配则 `default(T)`。

## 使用示例

### 示例 1 —— 一个最小的全屏状态

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.ScreenSystem;

namespace MyMod
{
    public class MyOverlayState : GameState
    {
        private ScreenBase _cached;

        public MyOverlayState()
        {
            // 此处 GameStateManager 还是 null：它由 CreateState<T>() 赋值。
            this.Level = 10;
        }

        protected override void OnActivate()
        {
            base.OnActivate();               // 把 Activated 置为 true
            _cached = MyViewModelCache.Get();
            MBDebug.Print("overlay activated at level " + this.Level);
        }

        protected override void OnDeactivate()
        {
            base.OnDeactivate();             // 把 Activated 置为 false
            _cached = null;
        }

        protected override void OnFinalize()
        {
            // 最后机会：紧接着 GameStateManager 与 Listeners 就被置空。
            MBDebug.Print("overlay finalized");
        }

        protected internal override void OnTick(float dt)
        {
            // 只在本状态位于栈顶期间运行。
            if (this.IsActive)
            {
                _cached.Tick(dt);
            }
        }
    }

    public static class MyOverlay
    {
        public static void Show()
        {
            MyOverlayState state = GameStateManager.Current.CreateState<MyOverlayState>();
            GameStateManager.Current.PushState(state, state.Level);
        }
    }
}
```

### 示例 2 —— 用状态自带的监听器响应压栈与弹栈

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;

namespace MyMod
{
    public class MyStateWatcher : IGameStateListener
    {
        public void OnActivate() { MBDebug.Print("state activated"); }
        public void OnDeactivate() { MBDebug.Print("state deactivated"); }
        public void OnInitialize() { MBDebug.Print("state initialized"); }
        public void OnFinalize() { MBDebug.Print("state finalized"); }
    }

    public static class MyOverlay
    {
        public static void Show()
        {
            MyOverlayState state = GameStateManager.Current.CreateState<MyOverlayState>();
            bool added = state.RegisterListener(new MyStateWatcher());
            MBDebug.Print("listener added = " + added);
            GameStateManager.Current.PushState(state, state.Level);
        }
    }
}
```

## 风险与崩溃边界

- **存档序列化。** `GameState` 继承 `MBObjectBase`，这带来了身份注册，但没有自动的存档集成。**`GameState` 不是可保存的战役对象**——它持有的任何东西要跨重载存活，都应放进 `CampaignBehaviorBase.SyncData(IDataStore)` 或通过 `SaveableTypeDefiner` 注册的 `MBObjectManager` 类型。`InitialState`、`CharacterCreationState` 这类状态之所以每次加载都重建，正是因为整个栈不会被保存。
- **跨域依赖。** `GameState.cs` 引用了 `TaleWorlds.Library`（`Debug.FailedAssert`）与 `TaleWorlds.ObjectSystem`（`MBObjectBase`），但你真正会去继承的那些具体状态横跨 `TaleWorlds.MountAndBlade`、`TaleWorlds.ScreenSystem` 和 `TaleWorlds.CampaignSystem`。继承一个具体状态会把它的整个依赖闭包都拖进来。把子类留在"已经引用了所需一切"的那个程序集里。
- **加载顺序。** `GameStateManager` 是在 `CreateState<T>()` 时赋值的，不是在构造函数里。任何字段初始化器或构造函数体里读取 `this.GameStateManager` 或 `this.Predecessor` 都会看到 `null`。在构造函数里设置 `Level`（它是普通字段），但把其余解析工作放到 `OnInitialize` 或 `OnActivate`。
- **ID 稳定性。** `Level` 是唯一的身份，由调用方指定且无唯一性检查。两个 mod 用同一个 level 压栈就是在争抢栈顶。这里没有名字、没有 id、没有去重；如果你需要身份，请自己维护一张实例到键的映射。
- **在 `OnActivate` 里压栈。** 基类会在 `OnActivate()` 返回后检查 `IsActive`；如果你的重写压入了另一个状态，`IsActive` 为 false，`IGameStateListener.OnActivate()` 扇出被跳过。于是即便状态曾短暂活动过，监听器也从未收到 `OnActivate`。请入队而不是内联压栈。
- **`RegisterListener(null)`。** `Debug.FailedAssert` 不会 return；`null` 会被追加，之后每次扇出的 `foreach` 都抛异常。请自己挡住这个参数。
- **收尾之后读取。** `Predecessor` 在没有对 `GameStateManager`（已被 `HandleFinalize` 置空）做 null 检查的情况下调用 `GameStateManager.FindPredecessor(this)`，因此会抛 `NullReferenceException`。`IsActive` 是安全的；`Predecessor`、`Listeners`、`GameStateManager` 不是。

## 跨版本提示

- **v1.3.0：** `GameState` 是 `public abstract class GameState : MBObjectBase`，构造函数为 `protected GameState()`。完整虚接口是 `OnInitialize`、`OnFinalize`、`OnActivate`、`OnDeactivate`、`OnTick(float)`、`OnIdleTick(float)`，外加 `IsMusicMenuState` 与 `IsMenuState`。`Level` 是 public 字段。`HandleInitialize` / `HandleFinalize` / `HandleActivate` / `HandleDeactivate` 都是 `internal`，所以 mod 无法手动驱动生命周期。
- **一个值得知道的怪癖：** `GameState.NumberOfListenerActivations` 是一个 `public static int`，被当作单帧守卫使用，使监听器扇出每次激活最多跑一次。它是 public 的，因此 mod 代码既可读也可写，而写它会抑制监听器激活。
- **v1.3.15 / v1.4.5：** 生命周期与那些 `internal` handle 方法未变。后续版本新增了具体状态类型和少量额外虚方法，但这里没有任何一个被改过修饰符；`OnTick` / `OnIdleTick` 仍是 `protected internal virtual`。

## 参见

- ↑ 上级目录：[Core-extra API 索引](../)
- ↔ 同级：[GameStateManager](../GameStateManager/) — 创建、叠放并 tick 本对象
- ↔ 同级：[IGameStateListener](../IGameStateListener/) · [IGameStateManagerOwner](../IGameStateManagerOwner/)
- ↖ 创建方：[Module](../../core/Module/)
- ↪ 响应式替代方案：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase/)
- ↑ 架构：[SDK 总览](../../../architecture/sdk-overview/)