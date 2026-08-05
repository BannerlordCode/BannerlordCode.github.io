---
title: "MissionTimer"
description: "基于 MissionTime 的一次性或可重置倒计时器，支持客户端/回放的服务器时钟偏差修正。"
---
# MissionTimer

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class MissionTimer`  
**Base:** 无  
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionTimer.cs`

## 一句话职责

`MissionTimer` 在当前 Mission 时钟上记录一个起点和持续时间，用于“过期了吗、还剩几秒、是否按周期重启”的场景逻辑；它不是 Campaign 时间，也不是独立于 Mission 的后台计时线程。

## 心智模型

`new MissionTimer(duration)` 立即读取 `MissionTime.Now`，因此它必须在活动 Mission 已建立、且当前线程处于 Mission 生命周期内时创建。每次 `GetRemainingTimeInSeconds` 都以 `MissionTime` 计算经过时间，并把负值钳为 `0`；`Check()` 只读检查，`Check(reset: true)` 在过期后把起点重置为现在。

普通单机/服务器计时使用本地 Mission 时钟。客户端或回放需要传 `synched: true` 才会应用 `MissionTimeTracker.GetLastSyncDifference()`；`CreateSynchedTimerClient` 由联机消息提供绝对起点时使用，不是普通 mod 的替代构造函数。

## 依赖关系

- **上游时钟：** [`Mission`](../../mission/Mission) 持有 [`MissionTimeTracker`](../MissionTimeTracker)，[`MissionTime.Now`](../MissionTime) 从该 tracker 读取当前 tick。
- **创建/持有：** MissionBehavior、MissionLogic 或专用 Mission component 在 Mission 生命周期内持有它；源码中的 `SneakIntoTheVillaMissionController` 和 `MultiplayerTimerComponent` 都是这种模式。
- **联机链：** `MissionNetworkComponent` 同步 tracker 的时间；客户端用 `CreateSynchedTimerClient` 后再读取同步剩余时间。
- **相关结果：** 到期后应由拥有该逻辑的 behavior 决定是否调用 [`Mission.EndMission`](../../mission/Mission)，不要把 timer 当作自动结束 Action。

## 何时用，何时不用

**适合使用：**

- 战斗中需要一个由 Mission tick 驱动的倒计时，例如潜行窗口、边界宽限期、回合或联机组件的结束计时。
- 需要每次过期后自动开始下一周期时使用 `Check(reset: true)`。
- 服务器创建 timer、客户端根据服务器起点显示剩余时间时使用同步工厂。

**不适合使用：**

- Campaign 每日时间、存档时间或现实世界的长期计时；使用 CampaignTime 或正式 Campaign 事件。
- 在 behavior 构造函数、模块加载阶段或 Mission 结束回调之后无条件 `new MissionTimer`；这些阶段可能没有 `Mission.Current`。
- 通过 `Set` 修改持续时间；`Set` 移动起点，`SetDuration` 才会改 duration。

## 成员与副作用

| 成员 | 用途、调用时机与副作用 |
|---|---|
| `MissionTimer(float duration)` | 以当前 `MissionTime.Now` 为起点；要求活动 Mission，负 duration 会让剩余时间立即为 0。 |
| `GetStartTime()` | 返回起点快照；适合向联机/UI 层报告，不会推进计时。 |
| `GetTimerDuration()` | 返回当前 duration；不会重新计算或重置起点。 |
| `GetRemainingTimeInSeconds(bool synched = false)` | 返回非负剩余秒数；同步参数只在客户端/回放路径应用 tracker 偏差。 |
| `Check(bool reset = false)` | 判断是否到期；`reset: true` 只有在已经到期时才把起点重置。 |
| `Reset()` | 把起点重置为当前 Mission 时间，保留原 duration。 |
| `Set(float timeInSeconds)` | 把起点设为“当前时间 + timeInSeconds”；它是起点偏移，不是“把剩余时间设成该值”。 |
| `SetDuration(float duration)` | 替换持续时间，保留已有起点；可能立即使 timer 过期或恢复可用。 |
| `CreateSynchedTimerClient(float startTimeInSeconds, float duration)` | 使用绝对 Mission 秒数构造客户端/回放 timer；不要传本地相对秒数。 |

## 真实 MissionBehavior 示例

计时器应在 `OnBehaviorInitialize` 等 Mission 已建立的生命周期回调中创建，而不是在字段初始化器或构造函数里依赖 `Mission.Current`：

```csharp
using TaleWorlds.MountAndBlade;

public sealed class WindowBehavior : MissionBehavior
{
    private MissionTimer _windowTimer;

    public override void OnBehaviorInitialize()
    {
        _windowTimer = new MissionTimer(5f);
    }

    public override void OnMissionTick(float dt)
    {
        if (_windowTimer.Check(reset: true))
        {
            // 每五秒进入一次由本 behavior 管理的周期逻辑。
        }
    }
}
```

联机组件的真实模式是服务器用 `new MissionTimer(duration)`，客户端用网络传来的 `startTimeInSeconds` 调用 `CreateSynchedTimerClient`，再以 `GetRemainingTimeInSeconds(synched: true)` 显示统一倒计时。

## 风险与崩溃边界

- 构造函数、`Set` 和同步剩余时间路径都会间接依赖 `Mission.Current`；在 Mission 外调用可能空引用崩溃。
- 在 Mission 构造阶段就创建 timer 可能早于 `Mission.Current` 设置；把创建推迟到 `OnBehaviorInitialize`、`OnCreated` 或已确认的运行回调。
- `Check(reset: true)` 在每次过期检查时会重启起点；如果要只触发一次，使用 `Check()` 并自行停用字段。
- `Set` 的正值会把起点推到未来，剩余时间可能大于 duration；把它当作“设置剩余时间”会产生延迟一轮的 bug。
- 客户端只在同步读取路径传 `synched: true`；否则看到的是本地时钟值，网络倒计时可能漂移。
- timer 过期不会自动调用 `EndMission`、发事件或修改 Campaign；必须由行为在正确的 Mission 阶段执行后续动作。

## 参见与双向导航

- ↑ 父级：[Mission-ext 模块索引](../)
- ↔ 同区：[MissionTime](../MissionTime) · [MissionTimeTracker](../MissionTimeTracker) · [BasicMissionTimer](../BasicMissionTimer)
- 宿主：[Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior) · [MissionLogic](../MissionLogic)
- 联机：[SynchronizeMissionTimeTracker](../../campaign-ext/SynchronizeMissionTimeTracker) · [MissionResult](../../core-extra/MissionResult)
- 规范：[Doc Contract](../../../architecture/doc-contract)
- 中文/English：[MissionTimer](../../../../en/api/mission-ext/MissionTimer)
