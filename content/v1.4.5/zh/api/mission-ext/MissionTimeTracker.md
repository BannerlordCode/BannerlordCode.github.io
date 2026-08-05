---
title: "MissionTimeTracker"
description: "Mission 内部的 tick 时钟与联机偏差记录器：由 Mission 推进，供 MissionTime 和同步计时器读取。"
---
# MissionTimeTracker

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class MissionTimeTracker`  
**Base:** 无  
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionTimeTracker.cs`

## 一句话职责

`MissionTimeTracker` 是 Mission 的**单调 tick 时钟**：它累加每帧经过的 Mission 秒数，并单独记录服务器时间与本地时间的偏差，供 [`MissionTime`](../MissionTime)、[`MissionTimer`](../MissionTimer) 和联机逻辑使用。

## 心智模型

`Mission` 构造时创建 tracker，Mission 每次 tick 先把 `dt` 转成每秒 `10,000,000` 个 tick，再累加到 `NumberOfTicks`。`DeltaTimeInTicks` 只是上一帧传入的增量。mod 通常只读 `Mission.Current.MissionTimeTracker`，不应自己调用 `Tick`，因为那会让整场 Mission 的时间前进两次。

网络同步不直接改本地时钟：服务器发送绝对 Mission 秒数，客户端调用 `UpdateSync(newValue)` 计算 `_lastSyncDifference`，`GetLastSyncDifference()` 再把该偏差转换回秒。`MissionTimer.GetRemainingTimeInSeconds(synched: true)` 会消费这个偏差；普通 `MissionTime.Now` 和非同步 timer 仍读取本地 `NumberOfTicks`。

## 依赖关系

- **拥有者：** [`Mission`](../../mission/Mission) 在构造时创建它，并在自己的 tick 流程中调用 `Tick(dt)`。
- **读取者：** [`MissionTime`](../MissionTime) 的 `Now` / `DeltaTime`、[`MissionTimer`](../MissionTimer) 的倒计时和各类 MissionBehavior。
- **同步上游：** `SynchronizeMissionTimeTracker` 网络消息由 `MissionNetworkComponent` 接收，再调用 `UpdateSync`。
- **边界：** 这是 Mission 层临时状态，不是 CampaignTime、存档字段，也不跨 Mission 保留；结束后应随 Mission 一起丢弃。

## 成员与调用时机

| 成员 | 用途与副作用 |
|---|---|
| `NumberOfTicks` | 当前 Mission 时钟的绝对 tick 数，只读；每次 `Tick` 累加。 |
| `DeltaTimeInTicks` | 最近一次 `Tick(seconds)` 转换出的增量，只读；不是总时间，也不是渲染帧的 realDt。 |
| `MissionTimeTracker()` | 从 0 tick 创建 tracker；通常由 `Mission` 使用，mod 不应替换 Mission 的实例。 |
| `MissionTimeTracker(MissionTime initialMapTime)` | 以给定 `MissionTime.NumberOfTicks` 初始化；适合引擎需要从既有时间起点建立 tracker 的路径。 |
| `Tick(float seconds)` | 写入增量并推进总 tick；由 `Mission` 每帧调用，mod 不应在 behavior tick 中重复调用。 |
| `UpdateSync(float newValue)` | 根据服务器/权威端绝对秒数计算偏差；不会改写 `NumberOfTicks`。 |
| `GetLastSyncDifference()` | 返回最近一次同步偏差的秒数；无同步时默认是 0。 |

## 真实读取示例

在 Mission 已运行的 behavior 中读取 tracker，不直接驱动它：

```csharp
using TaleWorlds.MountAndBlade;

public sealed class MissionClockReader : MissionBehavior
{
    public override void OnMissionTick(float dt)
    {
        Mission mission = Mission.Current;
        if (mission == null || mission.CurrentState != Mission.State.Continuing)
            return;

        MissionTimeTracker tracker = mission.MissionTimeTracker;
        long currentTicks = tracker.NumberOfTicks;
        float frameSeconds =
            tracker.DeltaTimeInTicks /
            (float)MissionTime.TimeTicksPerSecond;
        float networkOffset = tracker.GetLastSyncDifference();

        // currentTicks 是本地 Mission 时间；frameSeconds 是最近一帧增量。
    }
}
```

联机时 `MissionNetworkComponent` 会在收到 `SynchronizeMissionTimeTracker` 后调用 `UpdateSync`；客户端应让 `MissionTimer` 通过 `synched: true` 使用偏差，而不是把 `NumberOfTicks` 自己改成服务器值。

## 何时用，何时不用

**适合使用：**

- 读取 Mission 内部的单调 tick、计算本帧 Mission 秒数或诊断联机时钟偏差。
- 编写依赖 Mission 时间的 timer、回放或网络行为，并让现有 `MissionTime`/`MissionTimer` 消费 tracker。

**不适合使用：**

- 手动在 `OnMissionTick` 中调用 `Tick`；Mission 已经负责推进。
- 把 tracker 当作 Campaign 时间或存档进度；它只服务当前 Mission。
- 用 `UpdateSync` 直接纠正游戏逻辑；它只记录偏差，具体使用由同步 timer 决定。
- 在没有 `Mission.Current` 时访问静态 `MissionTime.Now` 或 tracker；先确认 Mission 生命周期。

## 版本注记

1.3.15 与 1.4.5 的公开成员和核心语义一致：两版都以每秒 `10,000,000` tick 累加，并通过 `_lastSyncDifference` 支持联机 timer 修正。1.4.5 页面以反编译源码和当前 `Mission` 调用点为准；不要依赖反编译文件中的 token 或行号。

## 风险与崩溃边界

- 在 Mission 创建前或销毁后访问 `Mission.Current.MissionTimeTracker` 会空引用；`MissionTime.Now` 也会间接访问同一句柄。
- 重复调用 `Tick` 会让 `MissionTime.Now`、所有 timer 和回放时间整体加速，导致提前结束、网络漂移或结果时序错误。
- `UpdateSync` 不会把本地 tracker 跳到服务器时间；把 `newValue` 当成增量而不是绝对秒数，会生成错误偏差。
- `DeltaTimeInTicks` 是最近一次 tracker tick 的值，不能在跨帧缓存后当作当前帧 delta；在 Mission 未 tick 时它可能仍是旧值。
- tracker 是短生命周期运行时对象，不要放入 Campaign singleton、保存对象或下一场 Mission 的静态集合。
- 客户端偏差修正只能用于显示/同步 timer 的读取路径；不要在客户端借此直接提交战斗胜负或 Campaign 变更。

## 参见与双向导航

- ↑ 父级：[Mission-ext 模块索引](../)
- ↔ 同区：[MissionTime](../MissionTime) · [MissionTimer](../MissionTimer) · [BasicMissionTimer](../BasicMissionTimer)
- 拥有者：[Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior)
- 同步：[SynchronizeMissionTimeTracker](../../campaign-ext/SynchronizeMissionTimeTracker)
- 相关结果：[MissionResult](../../core-extra/MissionResult)
- 规范：[Doc Contract](../../../architecture/doc-contract)
- 中文/English：[MissionTimeTracker](../../../../en/api/mission-ext/MissionTimeTracker)
