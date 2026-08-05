---
title: "MultiplayerTimerComponent"
description: "以 MissionTimer 封装多人 Mission 的服务器倒计时与客户端同步读取；用于热身、回合、大厅和比赛阶段计时。"
---

# MultiplayerTimerComponent

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class MultiplayerTimerComponent : MissionNetwork`  
**Base:** [`MissionNetwork`](../MissionNetwork)  
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerTimerComponent.cs`

## 一句话职责

它把 [`MissionTimer`](../MissionTimer) 包装成一个可从当前 Mission 查找的多人行为，让服务器建立倒计时、客户端从服务器绝对起点重建倒计时，并让回合或大厅逻辑读取剩余时间。

## 心智模型

这是一个 Mission 级共享组件，不是 Agent 组件，也不是 Campaign 状态。多人 Mission 创建路径把一个实例加入 Mission；其他行为通过 `Mission.GetMissionBehavior<MultiplayerTimerComponent>()` 取得同一个实例。服务器调用 `StartTimerAsServer(duration)`，它以当前 `MissionTime.Now` 建立本地 `MissionTimer`。客户端收到状态消息中的绝对 Mission 起点后调用 `StartTimerAsClient(startTime, duration)`，再通过 `GetRemainingTime(true)` 应用 `MissionTimeTracker` 的同步偏差。

组件只保存当前 timer 和 `IsTimerRunning`。它不会自动广播状态、自动推进 Mission、自动结束 Mission，也不会在 `CheckIfTimerPassed()` 返回 true 后自动重置。阶段转换由 [`MultiplayerWarmupComponent`](../MultiplayerWarmupComponent)、[`MultiplayerRoundController`](../MultiplayerRoundController) 或 [`MissionLobbyComponent`](../MissionLobbyComponent) 等拥有者负责。

## 何时使用，何时不要使用

**适合使用：**

- 热身、回合准备、回合限时、比赛大厅或赛后等待等多人 Mission 阶段计时。
- 服务器拥有权威起点，客户端需要显示与服务器一致的剩余时间。
- 多个 Mission 行为需要读取同一个阶段 timer，而不是各自创建互相漂移的 timer。

**不要这样使用：**

- 不要用 `Agent.GetComponent<MultiplayerTimerComponent>()` 查找；它是 Mission behavior，应从 `Mission.GetMissionBehavior<T>()` 获取。
- 不要把 `StartTimerAsClient` 的 `startTime` 当成本地相对延迟；它必须是服务器发送的绝对 Mission 秒数。
- 不要在每一帧重复调用 `StartTimerAsServer` 或 `StartTimerAsClient`，否则倒计时会不断回到起点。
- 不要在 Campaign、存档或 Mission 销毁后保存这个组件；长期时间应使用 Campaign 时间和存档契约。
- 不要把 `CheckIfTimerPassed()` 当作自动 Action；到期后的状态转换必须在正确的服务器 Mission 阶段执行。

## 依赖关系

- **宿主：** [`Mission`](../../mission/Mission) 持有组件；[`MissionNetwork`](../MissionNetwork) 负责网络 handler 的注册、连接生命周期和移除清理。
- **计时核心：** [`MissionTimer`](../MissionTimer) 保存起点和 duration；[`MissionTime`](../MissionTime) 与 [`MissionTimeTracker`](../MissionTimeTracker) 提供当前 Mission 时钟和同步偏差。
- **服务器消费者：** `MultiplayerWarmupComponent`、`MultiplayerRoundController` 和 `MissionLobbyComponent` 调用 `StartTimerAsServer`、`GetRemainingTime(false)` 或 `CheckIfTimerPassed`。
- **客户端消费者：** `MultiplayerWarmupComponent`、`MultiplayerRoundComponent` 和 `MissionLobbyComponent` 使用消息中的 `StateStartTimeInSeconds` 调用 `StartTimerAsClient`，随后读取同步剩余时间。
- **传输边界：** [`MissionNetworkComponent`](../MissionNetworkComponent) 处理 Mission 网络消息；`SynchronizeMissionTimeTracker` 只同步时钟偏差，不能替代组件的阶段起点消息。

## 成员与调用时机

| 成员 | 用途、副作用与调用时机 |
|---|---|
| `IsTimerRunning` | 表示组件是否已经通过服务器或客户端入口建立 timer；读取 timer 起点前应先确认它为 true。 |
| `StartTimerAsServer(float duration)` | 以当前本地 `MissionTime.Now` 创建 `MissionTimer` 并设置运行状态；应在服务器阶段转换时调用一次。它本身不发送网络消息。 |
| `StartTimerAsClient(float startTime, float duration)` | 用绝对 Mission 秒数创建同步客户端 timer 并设置运行状态；`startTime` 应来自服务器状态消息。 |
| `GetRemainingTime(bool isSynched)` | 未运行时返回 `0`；运行时读取非负剩余秒数。传 `true` 时走客户端/回放同步偏差路径，并把结果限制在 duration 内。 |
| `CheckIfTimerPassed()` | 运行中调用内部 `MissionTimer.Check()` 判断是否到期；不运行时返回 `false`，不会重置 timer，也不会触发任何事件。 |
| `GetCurrentTimerStartTime()` | 返回内部 `MissionTimer` 的起点快照，供大厅等逻辑编码进状态消息；未先启动 timer 时内部引用为空，调用可能抛出空引用异常。 |

## 真实获取与服务器示例

以下模式对应源码中的 `MultiplayerWarmupComponent`、多人回合控制器和 Mission lobby：

```csharp
using TaleWorlds.MountAndBlade;

public sealed class RoundTimerReader : MissionLogic
{
    private MultiplayerTimerComponent _timerComponent;

    public override void OnBehaviorInitialize()
    {
        base.OnBehaviorInitialize();
        _timerComponent = Mission.GetMissionBehavior<MultiplayerTimerComponent>();
    }

    public override void OnPreDisplayMissionTick(float dt)
    {
        if (GameNetwork.IsServer && _timerComponent.IsTimerRunning &&
            _timerComponent.CheckIfTimerPassed())
        {
            // 在这里执行当前服务器拥有的阶段转换。
        }
    }
}
```

服务器在阶段开始时调用 `StartTimerAsServer`；客户端对应的真实路径是读取 `WarmupStateChange` 或 `MissionStateChange` 的 `StateStartTimeInSeconds`，再调用 `StartTimerAsClient(stateStartTimeInSeconds, duration)`。客户端显示剩余时间时应使用 `GetRemainingTime(isSynched: true)`。

## 风险与崩溃边界

1. 组件没有默认的 `_missionTimer`。`GetCurrentTimerStartTime()` 在任何 `StartTimerAsServer` 或 `StartTimerAsClient` 之前调用会触达空引用；发送状态消息前必须确认 timer 已启动。
2. `StartTimerAsServer` 和 `StartTimerAsClient` 都会替换内部 timer。把它们放入每帧 tick 或重复的状态同步回调，会让倒计时反复重启。
3. 客户端传入本地相对秒数而非服务器绝对 Mission 秒数，会使起点错误；传输消息中的时间还必须与 `MissionTimeTracker` 的同步语义保持一致。
4. `GetRemainingTime(false)` 在客户端读取的是本地时钟；网络倒计时显示若漏传 `true` 会漂移。反过来，服务器阶段判断不应依赖客户端显示值。
5. `CheckIfTimerPassed()` 只是布尔检查，不会广播、发事件、调用 `EndMission` 或修改 Campaign。到期后的 Action、Mission 结束和奖励结算必须由权威端在正确阶段执行。
6. Mission 被移除后，持有组件的其他 behavior 仍继续访问它，会把短生命周期状态带到下一场 Mission；应在 `OnRemoveBehavior` 或上层生命周期中停止引用。

## 版本说明

本页以 v1.4.5 `MultiplayerTimerComponent.cs` 以及 warmup、round、lobby 调用点为准。`MissionTimer` 的同步参数名和 `StateStartTimeInSeconds` 的绝对时间语义属于当前源码契约；移植到其他版本时应重新核对消息字段和 timer 同步实现。

## 导航

- ↑ 父级：[Mission-ext 模块目录](../)
- ↔ 同区：[`MissionNetwork`](../MissionNetwork) · [`MissionTimer`](../MissionTimer) · [`MissionTime`](../MissionTime) · [`MissionTimeTracker`](../MissionTimeTracker)
- 宿主：[`Mission`](../../mission/Mission) · [`MissionLogic`](../MissionLogic)
- 服务器消费者：[`MultiplayerWarmupComponent`](../MultiplayerWarmupComponent) · [`MultiplayerRoundController`](../MultiplayerRoundController) · [`MissionLobbyComponent`](../MissionLobbyComponent)
- 客户端消费者：[`MultiplayerRoundComponent`](../MultiplayerRoundComponent) · [`MissionNetworkComponent`](../MissionNetworkComponent)
- 传输相关：[`SynchronizeMissionTimeTracker`](../../campaign-ext/SynchronizeMissionTimeTracker)
- 中文/English：[MultiplayerTimerComponent](../../../../en/api/mission-ext/MultiplayerTimerComponent)
