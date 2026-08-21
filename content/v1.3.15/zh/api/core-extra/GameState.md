---
title: "GameState"
description: 'Bannerlord 的「游戏界面/阶段」抽象基类：菜单、战役、战场、对话等每个顶层界面都是一个 GameState，由 GameStateManager 统一压栈、激活与回收。'
---
# GameState

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameState : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/GameState.cs`

## 一句话职责

它代表游戏当前正停在「哪一个顶层界面/阶段」上——主菜单、战役地图、某场战斗、一段对话——你通常要继承它来插入自己的全屏界面，并通过 `GameStateManager` 把它推入、激活或弹出。

## 心智模型

`GameState` 位于 `TaleWorlds.Core`，属于 UI/流程（状态机）层，而非 Foundation 或玩法层。它本身**不直接**做渲染或逻辑，而是提供一个生命周期骨架：由 `GameStateManager` 持有并驱动，按 `Initialize → Activate → Tick → Deactivate → Finalize` 的顺序调用对应的 `OnXxx` 虚方法。你写的子类只需重写这些虚方法：

- `OnInitialize()`：状态首次创建时（一次）。
- `OnActivate()` / `OnDeactivate()`：成为/不再是 `ActiveState` 时。
- `OnTick(float dt)` / `OnIdleTick(float dt)`：每帧 / 空闲帧更新（`protected internal`，由管理器在游戏循环里调用）。
- `OnFinalize()`：被回收前清理。

实例由谁创建/持有：`GameStateManager.CreateState<T>()` 用无参构造 new 出来，再 `PushState` 压栈；栈顶即 `ActiveState`。多个 `GameState` 可分层叠加（`Level` 字段控制层级），例如战役地图上叠一个对话状态。监听者通过 `RegisterListener(IGameStateListener)` 挂上去，在同样的生命周期节点收到回调，常用于 MVVM 视图模型（ViewModel）与状态同步。

生命周期注意：`HandleActivate/HandleDeactivate/HandleInitialize/HandleFinalize` 是 `internal`，由管理器调用，你只重写 `OnXxx`，不要自己调 `HandleXxx`。

## 何时用 / 何时不要用

- **用**：要做一个占用整个游戏阶段的全屏自定义界面（自定义菜单、过场、特殊小游戏），需要被菜单系统纳入、可随时被其它状态压在上方或替换。
- **不要用**：只想在现有界面上弹个提示/选项——用 `InformationManager`（或 `InquiryData`）而非新开 `GameState`；只想改战役/战场里的某块逻辑——去对应的 CampaignBehavior / MissionLogic，不要另起状态；纯数据对象——它继承自 `MBObjectBase` 且带生命周期，不适合当普通 DTO。

## 依赖图
- [本区域目录](../)
- [GameStateManager —— 创建、压栈、激活、回收 GameState 的总管](../GameStateManager)
- [IGameStateListener —— 挂到状态上监听生命周期的接口](../IGameStateListener)
- [Game —— 通过 Game.GameStateManager 拿到管理器](../Game)
- [InformationManager —— 轻量弹窗的替代方案](../InformationManager)
- [Hero —— 战役层玩法对象，常在状态中被操作](../../campaign/Hero)
- [SDK 总览：各层职责与边界](../../../architecture/sdk-overview)
- [崩溃边界：状态切换与未清理监听器的陷阱](../../../architecture/crash-boundaries)

## 风险段

- **跨阶段持有已销毁状态**：`HandleFinalize` 会把 `_listeners` 置 `null`、`GameStateManager` 置 `null`。任何缓存了某 `GameState` 引用的模块，在状态被 `CleanStates`/`PopState` 后继续访问它，会拿到空引用或访问已卸载的视图模型，典型崩溃点是 `GameStateManager.FindPredecessor` 返回空后再 `.Xxx`。
- **监听器泄漏**：`RegisterListener` 后若不在 `OnFinalize`/`OnDeactivate` 里 `UnregisterListener`，且 `GameState` 被反复创建，监听器列表只增不减，可能重复触发回调甚至持有大对象导致内存增长。注意 `HandleFinalize` 虽然会清空 `_listeners`，但你注册的外部对象若还反向引用着状态，GC 不一定能回收。
- **时序错误**：不要直接在构造函数里假设 `GameStateManager` 已赋值——它在 `CreateState` 之后由管理器 `internal set`；需要管理器的逻辑放进 `OnInitialize` 之后。`IsActive` 在 `HandleActivate` 真正把它设为 `ActiveState` 之后才为 `true`。
- **线程**：所有 `OnXxx`/`Tick` 都在游戏主线程调用，不要在后台线程操作 `GameState` 或其监听者。

## 成员说明

### 属性（只读为主）
- `GameState Predecessor`：通过 `GameStateManager.FindPredecessor(this)` 找到被本状态压在下面的那个状态；没有则返回空。
- `bool IsActive`：本状态是否就是 `GameStateManager.ActiveState`。
- `IReadOnlyCollection<IGameStateListener> Listeners`：当前已注册的监听者（只读视图）。
- `GameStateManager GameStateManager { get; internal set; }`：驱动本状态的管理器；`Finalize` 后被置空。
- `bool IsMenuState` / `bool IsMusicMenuState`（`virtual`）：标记这是否为「菜单类」状态，子类可重写以影响音乐/输入策略。
- `bool Activated { get; private set; }`：`OnActivate` 后置 `true`、`OnDeactivate` 后置 `false`，由基类维护。

### 生命周期钩子（重写用）
- `protected virtual void OnInitialize()` / `OnFinalize()` / `OnActivate()` / `OnDeactivate()`：分别在某状态创建、销毁、成为活动、失去活动时调用，是放你自己的初始化/清理代码的地方。
- `protected internal virtual void OnTick(float dt)` / `OnIdleTick(float dt)`：每帧更新与空闲更新；基类为空实现，按需重写。

### 监听器管理（有 side-effect）
- `bool RegisterListener(IGameStateListener listener)`：把一个监听者加入列表；`null` 会触发 `Debug.FailedAssert`，已存在则返回 `false`（不重复添加）。
- `bool UnregisterListener(IGameStateListener listener)`：移除监听者，成功返回 `true`。
- `T GetListenerOfType<T>()`：在已注册监听者里按类型取出第一个匹配项，找不到返回 `default(T)`。

### 其它
- `int Level`：状态在栈中的层级，用于 `PushState(state, level)` 决定叠加位置。
- `static int NumberOfListenerActivations`：模块级计数器，记录监听器被激活的次数（引擎内部用于去重，别依赖它做业务逻辑）。

## 最小真实示例

示例 1：定义一个自己的状态，并通过管理器创建并推入。

```csharp
public class MyCustomState : GameState
{
    protected override void OnActivate()
    {
        base.OnActivate();
        InformationManager.DisplayMessage(new InformationMessage("我的自定义界面已激活"));
    }
}

// 在合适的初始化点：
MyCustomState state = Game.Current.GameStateManager.CreateState<MyCustomState>();
Game.Current.GameStateManager.PushState(state);
```

示例 2：监听某状态的激活/销毁，做视图模型同步。

```csharp
public class MyListener : IGameStateListener
{
    public void OnActivate() { }
    public void OnDeactivate() { }
    public void OnInitialize() { }
    public void OnFinalize() { }
}

GameState current = Game.Current.GameStateManager.ActiveState;
if (current.RegisterListener(new MyListener()))
{
    // 记得在状态结束时 UnregisterListener，避免泄漏
}
```

## 导航

- ↑ Parent（本区域目录）：[../](../)
- ↔ Sibling：[GameStateManager](../GameStateManager)、[IGameStateListener](../IGameStateListener)、[Game](../Game)、[InformationManager](../InformationManager)
- 相关：[Hero（战役玩法）](../../campaign/Hero)、[崩溃边界](../../../architecture/crash-boundaries)
