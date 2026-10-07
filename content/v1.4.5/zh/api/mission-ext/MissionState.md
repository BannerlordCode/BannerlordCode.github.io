---
title: "MissionState"
description: "把 Mission 挂进 GameStateManager 的驱动器：负责加载窗口、行为装配、每帧 tick 调度与场景回放跳转，OpenNew 是进入战斗的唯一入口。"
---

# MissionState

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionState : GameState`
**Base:** `TaleWorlds.Core.GameState`
**File:** `TaleWorlds.MountAndBlade/MissionState.cs`

## 概述

`MissionState` 是一个 [GameState](../../core-extra/GameState/)——它是游戏状态栈的一层，负责把一个 [Mission](../../mission/Mission/) 推入 `GameStateManager` 并在栈顶期间**每帧驱动它**。356 行里做五件事：开任务时通过 `OpenNew` 造出 `Mission` 并把行为列表装好（`HandleOpenNew`）；加载窗口期间按 `Mission.CurrentState` 分派到 `TickLoading` 或 `TickMission`；加载完成时走 `FinishMissionLoading` 打一路进度条；支持 `MissionReplayStartTime` / `MissionEndTime` 两个跳转标记；任务 `State.Over` 时把自己从状态栈弹掉。

它也是**所有默认 mission behavior 的装配点**：`AddDefaultMissionBehaviorsTo`（`:316`）里那四句 `MissionNetworkComponent`（联机时）/ `RecordMissionLogic`（录制时）/ `BasicMissionHandler` / `CasualtyHandler` / `AgentCommonAILogic` 就是从这里加进去的。

## 心智模型

把它当成**「Mission 的宿主进程与帧循环」**，四个推论：

第一，**`OpenNew` 是唯一入口，且它同时做了三件以前任其一会出错的事**：`Game.Current.GameStateManager.CreateState<MissionState>()`（`new()` 要求无参构造，你不能自己带参 new）、`missionState.HandleOpenNew(...)`（造 Mission、跑行为工厂 delegate）、`PushState(missionState)`。**顺序是固定的**——先造 state、再装行为、最后推栈。推栈之后 `OnInitialize` 才被调用，`Current = this` 与 `FirstMissionTickAfterLoading = true` 都在那时设上。

第二，**默认行为和你的行为是两次装配，会被二次遍历**。`HandleOpenNew` 先跑调用方的 `handler(CurrentMission)` delegate 拿到行为列表（会过滤掉 null），可选地 `AddDefaultMissionBehaviorsTo` 把默认行为**前置**（`list.Concat(behaviors)`），然后对每个行为调 `OnAfterMissionCreated()`，最后 `AddBehaviorsToMission` 按类型分成三组（`MissionLogic` / 其它 / `MissionNetwork`）分别交给 `Mission.InitializeStartingBehaviors`。若 `Handler != null`（[IMissionSystemHandler](../../mission-ext/IMissionSystemHandler) 类型的 handler），还会再给它一次追加行为的机会。

第三，**行为列表是「Logic / Other / Network」三分桶，不是单一列表**。`AddBehaviorsToMission` 里 `!(behavior is MissionNetwork)` 与 `!(behavior is MissionLogic)` 两条过滤把 `MissionNetwork` 单独摘出来。写自定义 `MissionBehavior` 时要知道它落在哪个桶会影响其 tick 相位。

第四，**回放跳转只在 `MissionReplayStartTime != 0f` 时发生一次**，且发生在 `TickMission` 之前：`CurrentMission.SkipForwardMissionReplay(MissionReplayStartTime, 0.033f)` 后立刻把标记清零。同理 `MissionEndTime` 是一道「到点自动 `EndMission()`」的闸。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Current` | `public static MissionState Current { get; private set; }` | 全局当前任务状态。`OnInitialize` 里 `Current = this`、`OnFinalize` 里 `Current = null`。全树只有 `Modules.SandBox/Sandbox/EditorSceneMissionManager.cs` 用它设过 `MissionReplayStartTime` / `MissionEndTime`。**任务外为 null**。 |
| `CurrentMission` | `public Mission CurrentMission { get; private set; }` | 本状态持有的任务实例。`private set`，只在 `CreateMission` 里被 `new Mission(rec, this, needsMemoryCleanup)` 赋值，`OnFinalize` 置 null。所有 tick 逻辑都围着它转。 |
| `Handler` | `public IMissionSystemHandler Handler { get; set; }` | 可选的外部钩子处理器。`OnTick` 里它决定「能不能 tick」——`Handler.RenderIsReady()` 为 false 时整个 `TickMission` 被跳过（渲染没准备好时不让逻辑跑）。它还提供 `BeforeMissionTick` / `AfterMissionTick` / `OnAddBehaviors` / `OnMissionAfterStarting` / `OnMissionLoadingFinished` 五个回调点。**setter 是 public 且无校验**。 |
| `MissionName` | `public string MissionName { get; private set; }` | `OpenNew` 传进来的任务名字符串，会打印到 debug log。纯标识用，不是类型判别。 |
| `FirstMissionTickAfterLoading` | `public bool FirstMissionTickAfterLoading { get; private set; }` | 加载后的第一个 tick 标记。`TickMission` 里用它触发**客户端向服务器发 `FinishedLoading` 确认**并 `SyncRelevantGameOptionsToServer()`，随后在函数末尾置 false。整个确认流程只跑一次。 |
| `Paused` | `public bool Paused { get; set; }` | 暂停闸。在 `TickMission` 里 `if (Paused || MBCommon.IsPaused) num = 0f;`——**注意它把 dt 归零而不是提前 return**，所以 tick 仍然发生，只是时间不前进。 |
| `OpenNew` | `public static Mission OpenNew(string missionName, MissionInitializerRecord rec, InitializeMissionBehaviorsDelegate handler, bool addDefaultMissionBehaviors = true, bool needsMemoryCleanup = true)` | 唯一的开任务入口，返回已创建并已推栈的 `Mission`。它还会在非联机场景下设 `MBCommon.CurrentGameType`（录制时是 `SingleRecord`）、并调 `Game.Current.OnMissionIsStarting(missionName, rec)`。`addDefaultMissionBehaviors` 传 false 就**没有** `BasicMissionHandler` / `CasualtyHandler` / `AgentCommonAILogic`。 |
| `BeginDelayedDisconnectFromMission` | `public void BeginDelayedDisconnectFromMission()` | 置 `_isDelayedDisconnecting = true`；下一次 `OnTick` 且任务处于 `State.Continuing` 时调 `BannerlordNetwork.EndMultiplayerLobbyMission()`。这是联机大厅里「退出但先跑完当前 tick」的延迟退场机制。 |

## 死成员与陷阱

本页 6 个私有状态字段被报成「调用点 0」，实测 5 个都有活跃引用，1 个复核不出引用按规则不下结论。

| 成员 | 声明位置 | override | 调用点 | 判定 | 说明 |
|---|---|---:|---:|---|---|
| `_missionInitializing` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionState.cs:15 | 0 | 4 次（4 行） | MEASURED | 任务初始化标志：:224/:229 读、:242 置 true、:335 置 false。清单报 0 是口径盲区。 |
| `FirstMissionTickAfterLoading` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionState.cs:37 | 0 | 3 次（3 行） | MEASURED | 加载后首个任务 tick 的标志：:45 置 true、:208 置 false、:135 判断。清单报 0 是口径盲区。 |
| `_tickCountBeforeLoad` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionState.cs:17 | 0 | 2 次（2 行） | MEASURED | :223 自增、:224 参与加载期判断。清单报 0 是口径盲区。 |
| `_missionTickCount` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionState.cs:27 | 0 | 2 次（2 行） | MEASURED | :209 自增、:215 参与 `TickLoading` 的分支判断。清单报 0 是口径盲区。 |
| `_isDelayedDisconnecting` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionState.cs:25 | 0 | 2 次（2 行） | MEASURED | :81 判断是否延迟断连、:354 置 true。清单报 0 是口径盲区。 |
| `MissionFastForwardSpeedMultiplier` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionState.cs:13 | — | — | UNSUPPORTED | `private const int = 10`。**未能复核出引用，按规则不下结论**。 |

## 真实示例

按官方方式开一个自定义任务——`InitializeMissionBehaviorsDelegate` 的入参就是刚建好的 `Mission`：

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;

public static Mission OpenMyMission()
{
    string sceneName = "my_battle_scene";
    MissionInitializerRecord record = new MissionInitializerRecord(sceneName)
    {
        TerrainType = 0,
        SceneUpgradeLevel = 0,
    };
    return MissionState.OpenNew("MyMission", record, OpenBehaviors, true, true);
}

private static IEnumerable<MissionBehavior> OpenBehaviors(Mission mission)
{
    return new MissionBehavior[]
    {
        new AgentCommonAILogic(),
        new BattleSpawnLogic(BattleSpawnLogic.BattleTag),
    };
}
```

省略默认行为（此时必须自己补齐 `BasicMissionHandler` 与 `CasualtyHandler`，否则士气与伤亡结算失效）：

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;

Mission mission = MissionState.OpenNew("LeanMission", new MissionInitializerRecord("my_battle_scene"), OpenBehaviors, false, true);
Debug.Print("default behaviors skipped, current behavior count = " + mission.MissionBehaviors.Count, 0);
```

在任务里读全局状态并按需暂停——注意 `Current` / `CurrentMission` 都可能为 null：

```csharp
using TaleWorlds.MountAndBlade;

MissionState state = MissionState.Current;
if (state == null || state.CurrentMission == null)
{
    return;
}
Debug.Print("mission=" + state.MissionName + " first tick after load=" + state.FirstMissionTickAfterLoading, 0);
state.Paused = true;
```

联机大厅里请求延迟退场：

```csharp
using TaleWorlds.MountAndBlade;

MissionState state = MissionState.Current;
if (state != null && state.CurrentMission != null)
{
    state.BeginDelayedDisconnectFromMission();
    Debug.Print("disconnect will happen on the next mission tick", 0);
}
```

在 `MissionBehavior` 里检查加载确认是否已发过（这个标记只对客户端有意义）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class LoadWatcherLogic : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        base.OnMissionTick(dt);
        MissionState state = MissionState.Current;
        if (state != null && state.FirstMissionTickAfterLoading)
        {
            Debug.Print("still in the first tick after loading, server confirmation not sent yet", 0);
        }
    }
}
```

## 风险与边界

- **`OpenNew` 会自己造 state。** `GameStateManager.CreateState<T>()` 要求 `new()`，所以 `MissionState` 的无参构造是硬约束。想传参就得改用 `CreateState<T>(params object[])`，而官方 `OpenNew` 没走那条路。
- **不能只 new 不推栈。** `HandleOpenNew` 是 `protected`，外部调不到；即使能调到，不 `PushState` 就不会 `OnInitialize`，`Current` 也不会被设上。
- **`Paused` 归零 dt 而不是跳过 tick。** 所有 `OnMissionTick` 仍然会被调用一次，只是 `dt` 为 0。把 `dt == 0` 当「暂停了别做事」是错的——那是 mod 自己的判断，不是引擎的。
- **`Handler` 存在时会 gate 掉整个 tick。** `Handler.RenderIsReady()` 为 false 时 `TickMission` 完全不执行，表现为「行为不响应」。
- **`FirstMissionTickAfterLoading` 只在 `TickMission` 末尾清零**，而 `TickMission` 的前半段有 `return` 早退路径（`CurrentMission.ClearSceneTimerElapsedTime < 0f` 等分支不会跳过末尾）。但如果任务始终停在 `State.NewlyCreated` / `Initializing`，这个标记会一直为 true。
- **默认行为的缺失是静默的。** `addDefaultMissionBehaviors: false` 不会有任何警告，只会在后续表现为士气不动、伤亡不结算、AI 没有 `CommonAIComponent`。
- **`MissionState` 是 GameState，会出现在状态栈里。** 它 `OnFinalize` 时先调 `CurrentMission.OnMissionStateFinalize(...)` 再置 null——**在 finalize 钩子里访问 `CurrentMission` 是安全的，在钩子之后就不安全了**。
- **`Handler` 的 setter 无校验**，可在任务运行中被换成任意实现。
- **延迟退场只在 `State.Continuing` 生效。** 若任务此刻不在该状态，`_isDelayedDisconnecting` 会一直挂着，等下一次符合条件的 tick。

## 依赖关系

- 基类链：继承 [GameState](../../core-extra/GameState/)（`TaleWorlds.Core` 程序集），四个 `protected override` 钩子 `OnInitialize` / `OnFinalize` / `OnActivate` / `OnDeactivate` / `OnIdleTick` / `OnTick` 全部来自基类
- 状态栈：[GameStateManager](../../core-extra/GameStateManager/) 的 `CreateState<T>()` / `PushState(GameState, int)` / `PopState(int)` / `CleanStates()` 是本类唯一的出入口
- 被驱动的对象：[Mission](../../mission/Mission/) 的 `CurrentState`、`Tick`、`OnTick`、`IdleTick`、`Initialize`、`AfterStart`、`EndMission`、`MissionBehaviors`、`InitializeStartingBehaviors`、`AddMissionBehavior`
- 默认行为：[AgentCommonAILogic](../AgentCommonAILogic/)、`BasicMissionHandler`、`CasualtyHandler`、`RecordMissionLogic`、`MissionNetworkComponent` 全部由 `AddDefaultMissionBehaviorsTo` 一并加入
- 外部钩子：`IMissionSystemHandler` 提供 `RenderIsReady` / `BeforeMissionTick` / `AfterMissionTick` / `OnAddBehaviors` / `OnMissionAfterStarting` / `OnMissionLoadingFinished`
- 加载上下文：[MissionInitializerRecord](../../core-extra/MissionInitializerRecord)（`TaleWorlds.Core` 里的 `struct`，主构造器只收场景名，其余是公开**字段**）描述场景名、地形类型、场景升级等级；`LoadingWindow.EnableGlobalLoadingWindow()` 与 `Utilities.SetLoadingScreenPercentage` 驱动加载画面
- 联机侧：`BannerlordNetwork.EndMultiplayerLobbyMission()`、`GameNetwork.GetNetworkComponent<BaseNetworkComponentData>().CurrentBattleIndex`、`FinishedLoading` 消息
- 桶首页：[mission-ext API 分区](../)
