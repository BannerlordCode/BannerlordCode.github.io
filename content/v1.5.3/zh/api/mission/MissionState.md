---
title: "MissionState"
description: "GameState 层的任务宿主：创建 Mission、压入状态栈、按阶段驱动它的 Tick，并在结束时把 Mission.Current 置空。任务侧生命周期的唯一入口。"
---

# MissionState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade（MISSION 层）
**Type:** `public class MissionState : GameState`
**Base:** `GameState`（TaleWorlds.Core）
**Source:** `bannerlord-1.5.3/TaleWorlds.MountAndBlade/MissionState.cs`

## 概述

`MissionState` 是把「一个任务」接进游戏状态机的那一层。它持有 `CurrentMission` 与 `MissionName`，实现 `GameState` 的生命周期回调（`OnInitialize` / `OnActivate` / `OnTick` / `OnIdleTick` / `OnFinalize`），并在每个阶段把控制权转交给 `Mission`。开任务的唯一正规入口是静态方法 `MissionState.OpenNew(...)`：它创建状态、构造任务、压栈。

## 心智模型

```
MissionState.OpenNew(missionName, rec, handler, addDefaultMissionBehaviors, needsMemoryCleanup)
  ├─ Game.Current.OnMissionIsStarting(missionName, rec)     // 通知战役层
  ├─ GameStateManager.CreateState<MissionState>()
  ├─ missionState.HandleOpenNew(...)                        // 私有：new Mission + 初始化行为
  ├─ GameStateManager.PushState(missionState, 0)
  └─ return mission
```

之后由状态机驱动：

- `OnActivate()` → `CurrentMission.OnMissionStateActivate()`；
- `OnTick(realDt)` → 任务处于 `NewlyCreated`/`Initializing` 时走 `TickLoading(realDt)`，处于 `Continuing` 或已 `MissionEnded` 时走正常 tick（必要时 `SkipForwardMissionReplay`）；
- `OnIdleTick(dt)` → 仅在 `Continuing` 时 `CurrentMission.IdleTick(dt)`；
- `OnDeactivate()` / `OnFinalize()` → `OnMissionStateDeactivate()` / `OnMissionStateFinalize(NeedsMemoryCleanup)`，并把 `CurrentMission` 与 `MissionState.Current` 置 null。

**读档特判**：`FirstMissionTickAfterLoading` 为真时，加载后的第一帧会走特殊分支（内存清理 / 跳过回放），做初始化时不要在这一帧假设场景已完全就绪。

**常见误用与坑**

1. **`MissionState.Current` 在任务外为 null**。`OnFinalize` 明确置空。跨任务缓存它等于缓存一个已销毁的状态。
2. **在 `OnTick` 里操作 `CurrentMission` 而不判 `CurrentState`**：加载阶段的 `CurrentMission` 已经存在，但场景尚未生成完。
3. **误以为任务期间战役 tick 还在跑**：任务压栈后，`MapState` 不再是活动状态，战役的每日/每小时 tick 停摆。任务里的时间推进靠 `MissionTimeTracker`，不靠 `CampaignTime`。
4. **重复 `OpenNew`**：每次调用都创建一个新状态并压栈。若上一个任务没弹栈，栈会失衡。用 `PopState` / `ReplaceState` 而不是重复 push。

## 成员与调用时机

- `static MissionState Current`：当前活动状态，任务外为 null。
- `Mission CurrentMission`：当前任务，任务结束后被置 null。
- `string MissionName`：任务场景名（XML 里的 mission id）。
- `bool FirstMissionTickAfterLoading`：读档后第一帧为真。
- `bool Paused`：任务是否暂停（影响 `OnIdleTick` / `OnTick` 分支）。
- `IMissionSystemHandler Handler`：任务系统回调。
- `static Mission OpenNew(string missionName, MissionInitializerRecord rec, InitializeMissionBehaviorsDelegate handler, bool addDefaultMissionBehaviors = true, bool needsMemoryCleanup = true)`：**开任务的主入口**。`handler` 用来注入你的 `MissionBehavior` / `MissionLogic`；`addDefaultMissionBehaviors` 决定是否附加官方默认行为；`needsMemoryCleanup` 决定结束后是否强制清理 GPU 资源。
- `protected Mission HandleOpenNew(...)`：内部构造与初始化，不要直接调。
- `void BeginDelayedDisconnectFromMission()`：延迟断开（联机大厅）。联机流程专用，单机不要碰。
- `protected override void OnTick(float realDt)` / `OnIdleTick(float dt)` / `OnActivate()` / `OnDeactivate()` / `OnFinalize()` / `OnInitialize()`：生命周期钩子，由状态机调用。
- `protected static bool IsRecordingActive()`：是否处于回放录制模式。
- `static bool RecordMission`：录制开关（调试用）。
- `float MissionReplayStartTime` / `float MissionEndTime`：回放时间锚点。

## 真实示例

```csharp
// 打开一个自定义任务并注入自己的行为（返回类型是真实 API MissionState.OpenNew）
public static Mission MyOpenMission(string missionName)
{
    // 唯一的构造函数是 MissionInitializerRecord(string name)，其余是公开字段
    MissionInitializerRecord record = new MissionInitializerRecord(missionName);
    record.SceneName = missionName;

    Mission mission = MissionState.OpenNew(missionName, record,
        delegate (Mission m)
        {
            m.AddMissionBehavior(new MyMissionBehavior());
            m.AddMissionBehavior(new MyMissionViewModelBridge());
        },
        true,   // addDefaultMissionBehaviors
        true);  // needsMemoryCleanup

    return mission;
}

// 任务内读状态：永远先判 Current 与 CurrentState
public override void OnPreMissionTick(float dt)
{
    MissionState state = MissionState.Current;
    if (state == null || state.CurrentMission == null) return;
    if (state.CurrentMission.CurrentState != Mission.State.Continuing) return;

    Debug.Print("mission time = " + state.CurrentMission.CurrentTime);
}
```

## 风险与边界

- **状态栈纪律**：`OpenNew` 会压栈。正确的关闭路径是弹出本状态（或替换为 `MapState`），而不是只调 `Mission.EndMission()`——后者只结束任务逻辑，不负责状态栈。
- **加载帧不可用于初始化**：读档后的第一帧（`FirstMissionTickAfterLoading`）会做内存清理与回放跳转，把初始化放在之后的帧或 `MissionBehavior` 的就绪回调里。
- **录制模式改变时序**：`RecordMission` 为真时输入被录制/回放，基于真实时间或文件系统的逻辑会错乱。发布 mod 时不要打开它。
- **任务期间战役数据只读**：任务里能读 `Campaign.Current`（世界状态在），但战役 tick 不推进，别指望任务里的等待会被战役时间消耗掉。
- **内存清理**：`needsMemoryCleanup = false` 会跳过强制 GPU 清理，长期跑可能导致显存增长；反之对长会话有卡顿开销。按场景类型选。

## 依赖关系

- [Mission](../Mission) — 被本状态创建并驱动的任务实例
- [ScreenBase](../../gui/ScreenBase) — 任务期间压在顶层的界面，其激活/失活与本状态的栈位置联动
- [Campaign](../../campaign/Campaign) — 战役层；`Game.Current.OnMissionIsStarting` 会通知它，任务结算结果也回写给它