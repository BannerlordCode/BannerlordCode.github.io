---
title: "GameState — 屏幕与 Mission 生命周期节点"
description: "基于 v1.4.5 源码说明 GameState 的初始化、激活、停用、终结、listener 生命周期、tick 边界，以及通过 GameStateManager 安全使用的方式。"
---
# GameState

**Namespace:** TaleWorlds.Core  
**Module:** TaleWorlds.Core  
**Type:** `public abstract class GameState : MBObjectBase`  
**Base:** `MBObjectBase`  
**Source path:** `bin/TaleWorlds.Core/TaleWorlds.Core/GameState.cs`

## 概述

它是状态栈中单个条目的基类：自己不决定何时入栈，也不保存战役世界数据，而是在 manager 选择它成为 active、idle、deactivated 或 finalized 时，把这些阶段稳定地交给派生类和 listener。理解它的重点不是背签名，而是知道哪个阶段仍能安全访问 manager、listener 和对应运行时对象。

## 一句话职责

为运行中游戏的一层栈状态提供生命周期回调和 listener 分发，例如地图、菜单、锻造、lobby 或 mission 状态。

## 心智模型

把一个状态理解为由 [GameStateManager](../GameStateManager) 持有的前台层。状态被创建并不等于已激活：`CreateState<T>()` 只把它接到 manager，`PushState` 才把它插入按 level 排序的状态栈，只有栈顶状态收到 active tick。状态本身提供可覆写的生命周期钩子，什么时候调用由 manager 决定。

v1.4.5 的生命周期顺序是：

1. `HandleInitialize()` 先调用 `OnInitialize()`，再调用每个 [IGameStateListener](../IGameStateListener).`OnInitialize()`。
2. `HandleActivate()` 只有在 `GameStateManager.ActiveState == this` 时继续；它调用 `OnActivate()`，再在本次激活中调用 listener `OnActivate()`，最后执行可选的 `GameStateManager.StateActivateCommand`。
3. active 期间 manager 调用 `OnTick(dt)`；如果 active state 被用户请求禁用，则改调 `OnIdleTick(dt)`。
4. 另一层成为 active 时，`HandleDeactivate()` 调用 `OnDeactivate()` 和 listener `OnDeactivate()`。
5. 从栈中移除时，`HandleFinalize()` 调用 `OnFinalize()` 和 listener `OnFinalize()`，然后清空 listener 列表并清掉 `GameStateManager` 引用。

终结后的对象就是旧引用：listener 集合已置空，manager 链接也已断开。

## 何时使用 / 何时不要使用

当你实现真实的屏幕、mission、lobby 或 game-mode 层，并且它需要进入引擎状态栈时，才使用派生状态。读取它时主要为了判断某个状态是否位于栈顶、前驱是谁，或 state-scoped listener 何时触发。

不要把 state 当成长寿命服务容器或存档对象。不要手动调用 `OnInitialize`、`OnActivate`、`OnDeactivate`、`OnFinalize`；manager 会按正确顺序调用内部 `Handle*`。如果要改变战役世界状态，请使用对应 [Actions](../../campaign-ext/StartBattleAction) 或战役系统，而不是在 state 回调里直接改字段。

## 依赖与调用链

| 关系 | 源码确认的含义 |
|------|----------------|
| 上游 | [GameStateManager](../GameStateManager) 创建、压栈、激活、停用、tick 和终结状态。 |
| Listeners | [IGameStateListener](../IGameStateListener) 在 state hook 之后收到 initialize/activate/deactivate/finalize。 |
| Manager listeners | [IGameStateManagerListener](../IGameStateManagerListener) 观察 manager 层的 create/push/pop/clean。 |
| Mission 入口 | [MissionState](../../campaign-ext/MissionState) 是派生 state；`MissionState.OpenNew` 使用 `Game.Current.GameStateManager.CreateState<MissionState>()` 后再 `PushState`。 |
| Mission 运行时 | [Mission](../../mission/Mission) 通过 `MissionState` 收到 `OnMissionStateActivate`、`OnMissionStateDeactivate`、`OnMissionStateFinalize`。 |
| 存档 | [SaveManager](../../save-system/SaveManager) 持久化战役数据，不保存临时 active-state 对象。 |

## 崩溃、生命周期、线程与存档风险

- 注册 null listener 会触发 `Debug.FailedAssert`；只注册真实 listener，并在拥有它的 UI 对象结束前注销。
- `HandleFinalize()` 之后继续持有 state 很危险，因为 `_listeners` 与 `GameStateManager` 都被置空。需要时从 `Game.Current.GameStateManager.ActiveState` 或 `LastOrDefault<T>()` 重新获取。
- `IsActive` 是栈顶判断，不是初始化判断。创建但未 push 的 state 有 manager，但不是 active。
- `OnTick` 只给 active state；如果 `ActiveStateDisabledByUser` 为 true，则走 `OnIdleTick`。不要把模拟逻辑随意放进屏幕 state，除非你理解这个暂停边界。
- state 对象不是战役存档记录。mod 持久数据应写在 [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase).`SyncData`，不要放在临时 state 字段里。

## 关键公开成员

| 成员 | 用途、副作用与时机 |
|------|--------------------|
| `Predecessor` | 向所属 manager 查询当前 state 下方的前驱；只有 `GameStateManager` 仍连接时才安全。 |
| `IsActive` | 仅当本实例是 manager 的 `ActiveState` 时为 true；无副作用。 |
| `Listeners` | state listener 的只读视图；finalize 后内部列表被置空，不再有效。 |
| `GameStateManager` | 由 `CreateState`/`HandleCreateState` 内部设置，finalize 时清空。 |
| `IsMusicMenuState`, `IsMenuState` | 特化 state 使用的虚拟标志，默认 false。 |
| `Activated` | base `OnActivate()` 设为 true，base `OnDeactivate()` 设为 false；覆写时除非有意改变契约，否则应调用 `base`。 |
| `RegisterListener` | 添加 [IGameStateListener](../IGameStateListener)，重复注册返回 false。 |
| `UnregisterListener` | 移除 listener，并返回是否确实存在。 |
| `GetListenerOfType<T>()` | 在线性 listener 列表中查找指定类型，找不到返回默认值。 |
| `OnTick(float dt)` | active 帧工作入口；由 manager 调用，mod 代码不要直接调。 |
| `OnIdleTick(float dt)` | active state 被禁用/暂停时的帧工作入口。 |

## 真实 C# 示例

### 读取当前 MissionState，但不长期缓存

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public sealed class ActiveMissionStateProbe
{
    public MissionState GetActiveMissionState()
    {
        GameStateManager manager = Game.Current.GameStateManager;
        return manager.ActiveState as MissionState;
    }

    public bool IsMissionStateActive(GameState state)
    {
        return state is MissionState && state.IsActive;
    }
}
```

重点是从 `Game.Current.GameStateManager` 重新获取；不要把返回的 state 缓存到 mission 结束之后。

### 把 listener 绑定在 state 生命周期内

```csharp
using TaleWorlds.Core;

public sealed class StateLifecycleLogger : IGameStateListener
{
    public void Attach(GameState state)
    {
        state.RegisterListener(this);
    }

    public void Detach(GameState state)
    {
        state.UnregisterListener(this);
    }

    public void OnInitialize() { }
    public void OnActivate() { }
    public void OnDeactivate() { }
    public void OnFinalize() { }
}
```

只在 live state 上注册，并在你的拥有者消失前注销。state finalize 之后 listener 列表已经不存在。

## 导航

**Parent**

- [Core-extra API index](../)
- [崩溃边界](../../../architecture/crash-boundary)

**Sibling**

- [GameStateManager](../GameStateManager)
- [IGameStateListener](../IGameStateListener)
- [IGameStateManagerListener](../IGameStateManagerListener)
- [WaitForGameState](../WaitForGameState)

**Related / Children**

- [MissionState](../../campaign-ext/MissionState)
- [Mission](../../mission/Mission)
- [Game](../../core/Game)
- [SaveManager](../../save-system/SaveManager)
