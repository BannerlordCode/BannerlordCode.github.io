---
title: "GameStateManager — 按 level 排序的状态栈持有者"
description: "基于 v1.4.5 源码说明 GameStateManager 的创建、CreateState、PushState、PopState、CleanStates、level 栈语义、tick 路由、listener 与主线程风险。"
---
# GameStateManager

**Namespace:** TaleWorlds.Core  
**Module:** TaleWorlds.Core  
**Type:** `public class GameStateManager`  
**Base:** none  
**Source path:** `bin/TaleWorlds.Core/TaleWorlds.Core/GameStateManager.cs`

## 概述

它是 Game/Global 两套状态流的栈管理器：负责把创建出的 state 接入 owner，按 level 排列它们，在 active 顶层变化时触发停用、初始化、激活和终结，并把 tick 路由给当前可运行的 state。对 mod 来说，最重要的安全边界是主线程切栈、正确 level、以及不要在 clean/pop 后继续使用旧 state 引用。

## 一句话职责

持有当前游戏状态栈，把 tick 分发给 active 栈顶，并按顺序完成 push、pop、clean 引发的生命周期切换。

## 心智模型

这是一个带 level 的小型栈机。`ActiveState` 永远是内部列表最后一个元素。插入代码读取 state 自己的公开 `Level` 字段，并把它插到最后一个 `state.Level <= gameState.Level` 的状态后面。公开 `PushState(gameState, level)` 参数会进入队列，但在这里可见的 v1.4.5 源码路径中，`OnPushState` 没有把该参数写回 `gameState.Level`；依赖排序前应先设置或确认 state level。也就是说高 level 或同 level 更靠上；如果压入较低 level 状态，它可能被插到已有高 level 覆盖层下面，因此不会成为 active。

创建与入栈是两步：

- `CreateState<T>()` 或 `CreateState<T>(params object[])` 构造对象、设置它的 `GameStateManager`，并用 `OnCreateState` 通知 manager listeners。
- `PushState` 改变栈；如果 active 栈顶变化，就停用旧 active，初始化并激活新 active，然后调用 owner 的 `OnStateChanged`。排序代码实际读取 `gameState.Level`。
- `PopState(level)` 移除最后一个精确匹配该 level 的 state。
- `CleanStates(level)` 移除所有 level 大于等于 `level` 的 state。
- `CleanAndPushState` 先清掉 incoming state level 以上的 state，再 push 新 state。

`PushState` 与 `PopState` 都有主线程断言。任务会进队列，但 `DoGameStateJobs()` 会立即清空队列。

## 何时使用 / 何时不要使用

打开真实 state 或在游戏代码里读取 active state 时，使用 `Game.Current.GameStateManager`。跟随引擎/全局 UI 代码时才使用 `GameStateManager.Current`，因为它可能在 module global manager 和当前 game manager 之间切换。

不要为 gameplay 随意 `new GameStateManager`。不要 push 半初始化的 `MissionState`；真实 mission 入口是 [MissionState](../../campaign-ext/MissionState).`OpenNew`，源码里先创建 `MissionState`，再完成 mission setup，最后 push。也不要用不存在的 level 调 `PopState`；源码先 `FindLastIndex`，随后直接按该 index 取值。

## 依赖与调用链

| 关系 | 源码确认的含义 |
|------|----------------|
| 持有的 states | [GameState](../GameState) 的 initialize/activate/deactivate/finalize 与 tick 都由 manager 调用。 |
| Owner | [Game](../../core/Game) 和 module 级 owner 通过 [IGameStateManagerOwner](../IGameStateManagerOwner) 接收 `OnStateChanged` 与 `OnStateStackEmpty`。 |
| Manager listeners | [IGameStateManagerListener](../IGameStateManagerListener) 接收 create/push/pop/clean 通知。 |
| Mission 打开 | [MissionState](../../campaign-ext/MissionState).`OpenNew` 使用 `Game.Current.GameStateManager.CreateState<MissionState>()`，初始化 mission 后再 `PushState`。 |
| 战役菜单 | [EncounterGameMenuModel](../../campaign/EncounterGameMenuModel) 的 siege 调用点会先检查 `Game.Current.GameStateManager.ActiveState != null` 再刷新 menu context。 |
| 存档 | [SaveManager](../../save-system/SaveManager) 恢复战役对象；`OnSavedGameLoadFinished()` 只转发 manager listener 通知，不自行重建栈。 |

## 崩溃、生命周期、线程与旧引用风险

- `PushState` 与 `PopState` 必须在主线程调用；否则源码触发 `Debug.FailedAssert("State should be changed from main thread")`。
- `PopState(level)` 假设存在精确 level 的 state。传错 level 会走到无效 index 路径。
- `CleanStates(level)` 会 finalize 并移除所有大于等于阈值的 state。任何持有这些 state 或 listener 的对象都必须重新获取。
- `Current` setter 会先对旧 `_current` 调 `CleanStates()`，再替换静态 manager。切换 current manager 是全局转换，不是便宜的指针赋值。
- 如果 `ActiveStateDisabledByUser` 中有活着的弱引用请求，`OnTick(dt)` 会调 active state 的 `OnIdleTick(dt)`，而不是 `OnTick(dt)`。
- state 经过 `HandleFinalize()` 后会清空 listener 列表和 manager 链接，旧引用不再安全。

## 关键公开成员

| 成员 | 用途、副作用与时机 |
|------|--------------------|
| `Current` | 静态 active manager。设置它会先清空旧 current manager 的 states。 |
| `CurrentType` | 标识 `Game` 或 `Global`，构造时设置。 |
| `Owner` | 接收 state-stack-empty 和 state-changed 回调。 |
| `GameStates` | 所有栈内 states 的只读视图，不只是 active。 |
| `ActiveState` | 内部列表最后一个 state；空栈时为 null。 |
| `RegisterListener` / `UnregisterListener` | 管理 [IGameStateManagerListener](../IGameStateManagerListener)，重复注册会被拒绝。 |
| `RegisterActiveStateDisableRequest` | 添加弱引用请求；只要存在活请求，active tick 就变成 idle tick。 |
| `OnSavedGameLoadFinished` | 把 save-load-finished 转发给 manager listeners；不自行重建栈。 |
| `LastOrDefault<T>()` | 查找栈内最后一个指定类型 state，适合重新获取而不是缓存。 |
| `CreateState<T>()` | 构造、接 manager、通知 listener；init/activate 要等 push。 |
| `PushState(GameState, int)` | 主线程栈变更；若 active 顶层变化，会初始化并激活新 state。此 v1.4.5 源码中插入比较的是 `gameState.Level`。 |
| `PopState(int)` | 主线程移除精确 level 的最后一个 state，并 finalize 它。 |
| `CleanAndPushState(GameState, int)` | 清理 incoming level 以上的 states，然后 push。 |
| `CleanStates(int)` | finalize 并移除所有 level 大于等于阈值的 states。 |
| `OnTick(float dt)` | 将时间分发给 active state 的 `OnTick` 或 `OnIdleTick`。 |

## 真实 C# 示例

### 通过公开入口打开 Mission

公开入口会隐藏受保护的 setup 方法，并按源码确认的顺序完成 manager 切换。下面的 initializer record 是为调用者要打开的 scene 构造的真实 `MissionInitializerRecord`：

```csharp
using System;
using TaleWorlds.MountAndBlade;

public Mission OpenCustomBattle(string scene)
{
    MissionInitializerRecord record = new MissionInitializerRecord(scene)
    {
        PlayingInCampaignMode = false
    };

    return MissionState.OpenNew(
        "CustomBattle",
        record,
        mission => Array.Empty<MissionBehavior>());
}
```

`MissionState.OpenNew` 内部会调用 `Game.Current.GameStateManager.CreateState<MissionState>()`，完成 mission setup 后再 `PushState`。mod 代码应使用这个公开重载或 TaleWorlds 提供的 mission helper；不要调用受保护的 setup 方法，也不要 push 一个没有 `CurrentMission` 的新 `MissionState`。

### 行动前重新获取 active state

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public sealed class MissionStackGuard
{
    public bool TryGetCurrentMission(out Mission mission)
    {
        GameStateManager manager = Game.Current.GameStateManager;
        MissionState missionState = manager.ActiveState as MissionState;
        mission = missionState?.CurrentMission;
        return mission != null;
    }
}
```

这样可以避开 `CleanStates`、mission 结束或 manager 替换后的旧引用。

## 导航

**Parent**

- [Core-extra API index](../)
- [崩溃边界](../../../architecture/crash-boundary)

**Sibling**

- [GameState](../GameState)
- [GameStateManagerType](../GameStateManagerType)
- [IGameStateManagerOwner](../IGameStateManagerOwner)
- [IGameStateManagerListener](../IGameStateManagerListener)

**Related / Children**

- [MissionState](../../campaign-ext/MissionState)
- [Mission](../../mission/Mission)
- [Game](../../core/Game)
- [EncounterGameMenuModel](../../campaign/EncounterGameMenuModel)
- [SaveManager](../../save-system/SaveManager)
