---
title: "MissionState"
description: "任务状态机：打开 / 关闭一场任务，维护 MissionState.Current 与 CurrentMission，并在 Tick 里驱动战斗逻辑、结束判定与回放录制。打开任务的唯一官方入口是 OpenNew。"
---
# MissionState

**命名空间：** `TaleWorlds.MountAndBlade`
**模块：** `TaleWorlds.MountAndBlade`
**类型：** `public class MissionState : GameState`
**基类：** `TaleWorlds.Core.GameState`
**源文件：** `bannerlord-1.4.7/TaleWorlds.MountAndBlade/MissionState.cs`（声明见第 13 行）

## 概述

`MissionState` 是 [GameState](../../core-extra/Game) 体系里的「任务状态」节点。它继承 `GameState`（游戏状态机的基类），负责把一次任务完整地走完：打开场景 → 创建 [Mission(../Mission) → 每帧驱动它 → 处理结束 → 清理 → 把控制权还给上一个状态。

它是打开任务的**唯一官方入口**：`MissionState.OpenNew(missionName, rec, handler, addDefaultMissionBehaviors, needsMemoryCleanup)` 返回新建的 `Mission`。反过来，当前任务通过静态 `MissionState.Current` 与实例属性 `CurrentMission` 读取。

还有两个静态开关值得记住：`RecordMission`（是否录制回放）和 `IsRecordingActive()`。录制开启时任务状态会额外收集数据写进回放文件——调试时关掉它可以显著减少开销。

## 心智模型

把 `MissionState` 想成**「战斗这一段的导演」**：它自己不实现战斗逻辑，它做的是「什么时候开始演、什么时候收工、收工后清理现场」。

正确的心智模型有三条：

1. **打开任务的正确姿势是 `OpenNew`，不是 `new Mission`。** `Mission` 是 `sealed` 的，构造函数由引擎内部使用。`OpenNew` 会串起场景加载、任务创建、默认行为初始化、以及 `needsMemoryCleanup` 的内存清理标记——绕过它会得到一个没有默认 Behavior 的残缺任务。
2. **`Current` 与 `CurrentMission` 的可用性不同。** `MissionState.Current` 在状态机切入任务状态后存在；`CurrentMission` 在任务对象创建完成后才非空。在 `OnActivate()` 里读 `CurrentMission` 通常还是 null。
3. **结束有延迟**。`BeginDelayedDisconnectFromMission()` 说明结束不是同步的——任务结束会经过一个「延迟断开」的过渡（用于播结算动画 / 淡出）。这段时间里 `Mission.Current` 可能仍存在但已不可交互。

第一个 tick 也有专门标记：`FirstMissionTickAfterLoading`。读档后进入任务的第一帧与正常进入不同（例如对象已完整反序列化，AI 的缓存可能需要刷新），需要区分逻辑的地方看这个标志。

## 何时使用 / 何时不要使用

- **使用**：打开一场任务（`OpenNew`）——这是唯一入口。
- **使用**：判断「当前是否在任务中」并取任务对象（`MissionState.Current?.CurrentMission`）。
- **使用**：任务结束后把控制权交回（例如触发战役层的事件 / 结算 UI）。
- **使用**：调试回放录制（`RecordMission`）。
- **不要**：不要在 `OnActivate()` / `OnInitialize()` 里访问 `CurrentMission`——那时还没创建。
- **不要**：不要用 `MissionState` 保存战斗状态——它不参与存档。
- **不要**：不要从任务状态里直接写 `Campaign` 世界状态而不走战役层的事件 / 动作，跨层写入会让地图与战斗脱节。

## 成员说明

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `IMissionSystemHandler Handler { get; set; }` | 任务系统处理器。`Mission` 通过它与外部系统（战役、联机）交互。**可写**——替换它等于接管任务与外部的通信。 |
| `static MissionState Current { get; private set; }` | 当前任务状态。**不在任务中时为 null**。 |
| `Mission CurrentMission { get; private set; }` | 当前任务对象。`OnActivate()` 阶段仍为 null，要等 `OpenNew` 走完。 |
| `string MissionName { get; private set; }` | 任务名（场景名 / 任务标识）。加载与调试用。 |
| `bool FirstMissionTickAfterLoading { get; private set; }` | **读档后进入任务的第一帧为 true**。需要区分「读档进入」与「正常进入」的逻辑看它。 |
| `bool Paused { get; set; }` | 任务是否暂停。可写。 |
| `void BeginDelayedDisconnectFromMission()` | **启动延迟断开流程**。任务结束不是同步的——这段时间里场景还在但已不可交互。剧情收尾、播结算动画时用它。 |
| `static bool RecordMission` | 是否录制回放。调试时关掉能显著降低开销。 |
| `public float MissionReplayStartTime` / `MissionEndTime` | 回放的时间标记。录制模式下有效。 |
| `static Mission OpenNew(string missionName, MissionInitializerRecord rec, InitializeMissionBehaviorsDelegate handler, bool addDefaultMissionBehaviors = true, bool needsMemoryCleanup = true)` | **打开任务的唯一官方入口**。返回新建的 `Mission`。`addDefaultMissionBehaviors = true` 会装上默认战斗行为（不加会得到残缺任务）；`needsMemoryCleanup = true` 让任务结束后做内存清理。 |
| `protected Mission HandleOpenNew(string missionName, MissionInitializerRecord rec, InitializeMissionBehaviorsDelegate handler, bool addDefaultMissionBehaviors, bool needsMemoryCleanup)` | `OpenNew` 的内部实现。**覆写它会接管整个打开流程**——除非真的需要，否则不要动。 |
| `protected override void OnInitialize()` | 状态初始化。此刻 `CurrentMission` 仍为 null。 |
| `protected override void OnFinalize()` | 状态终结。**释放长生命周期引用的位置**。 |
| `protected override void OnActivate()` / `OnDeactivate()` | 状态激活 / 停用。`OnActivate` 时任务尚未创建。 |
| `protected override void OnTick(float realDt)` | **主 tick**。驱动战斗逻辑与结束判定。 |
| `protected override void OnIdleTick(float dt)` | 非活跃时的 tick（窗口失焦等）。**不要在这里跑游戏逻辑**。 |
| `static bool IsRecordingActive()` | 当前是否正在录制回放。 |

## 示例

### 示例 1：打开一场任务

`OpenNew` 是唯一入口；不要自己 `new Mission`。

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

MissionInitializerRecord record = new MissionInitializerRecord("army_encounter");

Mission mission = MissionState.OpenNew(
    missionName: "army_encounter",
    rec: record,
    handler: InitializeMissionBehaviors,
    addDefaultMissionBehaviors: true,   // 不加会得到残缺任务
    needsMemoryCleanup: true);          // 结束后清理内存

if (mission != null)
{
    // 任务已创建并装好默认行为，可以注册自己的行为
    mission.AddMissionBehavior(new MyMissionBehavior());
}

// InitializeMissionBehaviorsDelegate 的实现：用任务自身的真实 API 配置初始规模
private static void InitializeMissionBehaviors(Mission mission)
{
    if (mission != null)
    {
        // SetInitialAgentCountForSide(BattleSideEnum, int) 设定开局的每侧人数
        mission.SetInitialAgentCountForSide(BattleSideEnum.Attacker, 30);
        mission.SetInitialAgentCountForSide(BattleSideEnum.Defender, 30);
    }
}
```

### 示例 2：判断是否在任务中

`MissionState.Current` 与 `CurrentMission` 的可用性不同，要分两步判。

```csharp
using TaleWorlds.MountAndBlade;

MissionState state = MissionState.Current;
if (state == null)
{
    return;   // 不在任务中
}

Mission mission = state.CurrentMission;
if (mission == null)
{
    return;   // 状态已切入，任务对象还没建好
}

// 读档进入的第一帧需要特殊处理时
if (state.FirstMissionTickAfterLoading)
{
    // 刷新依赖世界数据的缓存
}
```

### 示例 3：关闭回放录制以加速调试

录制会持续收集数据，调试战斗逻辑时关掉它能明显减少开销。

```csharp
using TaleWorlds.MountAndBlade;

protected override void OnGameInitializationFinished(Game game)
{
    base.OnGameInitializationFinished(game);

    // 调试战斗时关闭录制
    if (MyConfig.DisableMissionRecording)
    {
        MissionState.RecordMission = false;
    }
}
```

## 风险与边界

- **`CurrentMission` 的 null 窗口**。`OnActivate()` / `OnInitialize()` 阶段它仍为 null。只有在 `OpenNew` 返回之后才保证非空。
- **延迟断开的中间态**。`BeginDelayedDisconnectFromMission()` 之后的一段时间里，场景还在、`Mission.Current` 可能还在，但已经不可交互。此时写世界会无效或抛异常。
- **结束流程中不要改世界**。与 [Mission(../Mission) 的 `MissionIsEnding` 同步——两者描述的是同一段过渡。
- **`FirstMissionTickAfterLoading` 的差异**。读档进入的任务，其对象状态来自存档而不是新建；依赖「新建时会发生的事」的初始化不会被执行。
- **`RecordMission` 是静态开关**。它是进程级的，多个 mod 同时改它会互相干扰。
- **`HandleOpenNew` 覆写代价高**。它是 `OpenNew` 的全部实现。覆写会接管场景加载、任务创建、默认行为初始化——除非你确实要换掉整条链路，否则不要动。
- **`OnIdleTick` 不是游戏 tick**。窗口失焦时它仍然跑。在这里执行游戏逻辑会让玩家在切出去时损失资源。
- **不参与存档**。`MissionState` 不写盘。跨任务持久化的状态必须放在战役层。
- **单线程 + 场景加载**。`OpenNew` 会触发场景加载与原生资源分配，只能在主线程、状态机允许的时刻调用。

## 依赖关系

- 上游 / 提供者：
  - [Game](../../core-extra/Game) 的 `GameStateManager` 负责把本状态切入 / 切出。
  - [Module](../../core/Module) 的 `GlobalGameStateManager` 在模块层提供同一套状态机制。
- 相互 / 下游：
  - [Mission(../Mission) 由本类通过 `OpenNew` 创建并驱动。
  - [MissionBehavior(../MissionBehavior) 是挂在 `Mission` 上的战斗扩展点，由本类的 tick 转发。
  - [Agent(../Agent) 是任务内的可操作单位。
  - [MBSubModuleBase](../../core/MBSubModuleBase) 的 `OnBeforeMissionBehaviorInitialize` / `OnMissionBehaviorInitialize` 在本类打开任务时被触发。
  - [Campaign](../../campaign/Campaign) 通过 `CampaignMissionManager` 调度从战役进入任务。

## 参见

- ↑ 父级：[mission 索引](../)
- ↔ 相关：[Mission](../Mission) · [MissionBehavior](../MissionBehavior) · [Agent](../Agent) · [Game](../../core-extra/Game) · [MBSubModuleBase](../../core/MBSubModuleBase) · [Campaign](../../campaign/Campaign)