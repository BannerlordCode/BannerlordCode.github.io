---
title: "MissionNetwork"
description: "Mission 层联机行为的生命周期基类：注册 GameNetwork 消息处理器、接入 UDP handler，并在 Mission 移除时清理网络状态。"
---

# MissionNetwork

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class MissionNetwork : MissionLogic, IUdpNetworkHandler`  
**Base:** [`MissionLogic`](../MissionLogic)  
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionNetwork.cs`

## 一句话职责

它把一个 Mission 行为接入 GameNetwork 和 UDP 生命周期，使派生行为可以在任务创建、联机连接、消息收发和任务销毁之间正确注册与清理；它只管理当前 Mission 的网络行为，不负责 Campaign 状态或存档持久化。

## 心智模型

`MissionNetwork` 是 Mission 层的网络行为基类，不是全局网络服务，也不是可以直接实例化的消息总线。具体子类作为 `MissionBehavior` 加入当前 [`Mission`](../../mission/Mission) 后，Mission 生命周期会调用它的回调：`OnBehaviorInitialize` 把对象加入 `GameNetwork`，`OnAfterMissionCreated` 创建消息注册容器并调用 `AddRemoveMessageHandlers`，UDP 关闭时注销消息，`OnRemoveBehavior` 移除网络 handler。

因此，派生类负责描述“这个 Mission 行为要注册哪些消息以及在何种联机阶段响应什么事件”，而不是在任意静态方法中手动注册。回调顺序属于宿主生命周期；不要从 mod 代码主动重复调用 `OnAfterMissionCreated`、`OnBehaviorInitialize` 或 `OnRemoveBehavior`。

## 何时使用，何时不要使用

**适合使用：**

- 需要让一个 Mission 行为接收 GameNetwork 消息或 UDP 连接阶段回调。
- 需要在 Mission 内实现服务器、客户端或回放相关的短生命周期网络逻辑。
- 需要让已有的 [`MissionTimer`](../MissionTimer)、[`MissionTimeTracker`](../MissionTimeTracker) 或 Mission 对象同步逻辑依附于任务生命周期。

**不要这样使用：**

- 不要写 `new MissionNetwork()`；它是抽象基类，必须使用具体派生类型。
- 不要把它当作 Campaign 单例、存档对象或跨 Mission 的网络管理器。
- 不要在 Mission 外直接调用生命周期回调来“补注册”；这样可能造成重复 handler、重复消息处理或清理顺序错误。
- 不要在客户端把网络消息当作权威的 Campaign 状态变更；服务器权限和具体 Action/Model 边界仍由上层系统负责。

## 依赖关系

- **宿主上游：** [`Mission`](../../mission/Mission) 持有并驱动 `MissionNetwork` 派生行为；基类行为契约来自 [`MissionLogic`](../MissionLogic) 和 [`MissionBehavior`](../../mission/MissionBehavior)。
- **网络桥：** `GameNetwork.AddNetworkHandler` 和 `GameNetwork.RemoveNetworkHandler` 管理 UDP handler；`IUdpNetworkHandler` 的显式实现把网络层回调转发给受保护的虚方法。
- **消息注册：** `OnAfterMissionCreated` 使用 `GameNetwork.NetworkMessageHandlerRegistererContainer`，派生类通过 `AddRemoveMessageHandlers` 注册自己的消息处理器。
- **具体下游：** [`MultiplayerTimerComponent`](../MultiplayerTimerComponent) 继承此基类；[`MissionNetworkComponent`](../MissionNetworkComponent) 负责更大范围的 Mission 联机消息；[`MissionLobbyComponent`](../MissionLobbyComponent) 和多人回合组件消费这些行为提供的结果。
- **时间边界：** [`MissionTime`](../MissionTime) 和 [`MissionTimer`](../MissionTimer) 只表示当前 Mission 时间，不应被 `MissionNetwork` 持久化到 Campaign 存档。

## 关键成员与调用时机

| 成员 | 用途、副作用与调用时机 |
|---|---|
| `OnAfterMissionCreated()` | 创建消息注册容器，调用派生类的 `AddRemoveMessageHandlers`，然后注册消息；由 Mission 生命周期调用，不应由 mod 手动补调用。 |
| `OnBehaviorInitialize()` | 先执行基类初始化，再调用 `GameNetwork.AddNetworkHandler(this)`；派生类覆盖时必须保留 `base`。 |
| `OnRemoveBehavior()` | 从 `GameNetwork` 移除当前 handler，并继续基类清理；行为被 Mission 移除时调用。 |
| `AddRemoveMessageHandlers(...)` | 受保护扩展点；派生类在 Mission 创建后把自己的消息处理器加入注册容器。没有消息时保持空实现。 |
| `OnUdpNetworkHandlerTick()` | 受保护的 UDP tick 扩展点；适合处理当前 Mission 网络行为的周期工作，不应推进全局 Mission 时钟。 |
| `OnUdpNetworkHandlerClose()` | 受保护的 UDP 关闭扩展点；基类还会注销消息，派生类应清理自己的短生命周期状态。 |
| `HandleNewClientConnect(...)`、`HandleNewClientAfterSynchronized(...)` | 处理新客户端连接和完成同步后的阶段性回调；服务器端逻辑必须检查权限和当前 Mission 状态。 |
| `HandleEarlyPlayerDisconnect(...)`、`HandlePlayerDisconnect(...)` | 处理客户端断开阶段；不要继续访问已经被 Mission 移除的 Agent、Team 或 Mission 对象。 |
| `OnPlayerConnectedToServer(...)`、`OnPlayerDisconnectedFromServer(...)` | 面向派生类的连接通知；它们不是消息注册替代品，仍受 UDP/Mission 生命周期约束。 |

## 真实获取示例

游戏的多人 Mission 创建路径会加入具体的 `MultiplayerTimerComponent`，而不是实例化抽象的 `MissionNetwork`。在已经运行的 Mission behavior 中，可以通过真实的 Mission 行为查找路径取得它：

```csharp
using TaleWorlds.MountAndBlade;

public sealed class NetworkStateReader : MissionLogic
{
    private MultiplayerTimerComponent _timerComponent;

    public override void OnBehaviorInitialize()
    {
        base.OnBehaviorInitialize();
        _timerComponent = Mission.GetMissionBehavior<MultiplayerTimerComponent>();
    }
}
```

`MultiplayerTimerComponent` 的网络 handler 注册、消息清理和 Mission 移除由 `MissionNetwork` 基类完成；调用方只应使用具体组件公开的业务入口。

## 风险与崩溃边界

1. 覆盖 `OnBehaviorInitialize`、`OnAfterMissionCreated` 或 `OnRemoveBehavior` 时漏掉 `base`，会导致 handler 没有注册或没有移除，表现为消息不生效、重复响应或跨 Mission 残留。
2. 在 Mission 已结束后继续使用网络行为持有的 `Agent`、`Team`、`MissionObject` 或计时器，会触达已销毁对象；断开和移除回调必须清空短生命周期引用。
3. 同一个派生实例重复加入 Mission，或手动重复注册消息，会让一个网络包触发多次业务逻辑，可能重复推进状态、重复发事件或重复结束 Mission。
4. `MissionNetwork` 只提供 Mission 网络生命周期，不提供 Campaign 存档契约。需要持久化的数据应使用 Campaign behavior 的 `SyncData` 或 SaveSystem，而不是保存网络 handler。
5. 网络消息到达不代表客户端拥有权威写权限。客户端收到时间或状态快照后只能更新本地表现；Campaign 变更、战斗结果和存档状态必须回到正确的服务器或 Action 边界。

## 版本说明

本页以 v1.4.5 `MissionNetwork.cs` 和其多人 Mission 调用点为准。`IUdpNetworkHandler` 的显式回调转发和消息注销属于基类生命周期事实；跨版本使用时，应重新核对网络注册时机和派生类的 `AddRemoveMessageHandlers` 实现。

## 导航

- ↑ 父级：[Mission-ext 模块目录](../)
- ↔ 同区：[`MissionLogic`](../MissionLogic) · [`MissionNetworkComponent`](../MissionNetworkComponent) · [`MultiplayerTimerComponent`](../MultiplayerTimerComponent)
- 上游：[`Mission`](../../mission/Mission) · [`MissionBehavior`](../../mission/MissionBehavior)
- 下游：[`MissionLobbyComponent`](../MissionLobbyComponent) · [`MultiplayerWarmupComponent`](../MultiplayerWarmupComponent) · [`MultiplayerRoundController`](../MultiplayerRoundController)
- 相关时间：[`MissionTime`](../MissionTime) · [`MissionTimeTracker`](../MissionTimeTracker) · [`MissionTimer`](../MissionTimer)
- 中文/English：[MissionNetwork](../../../../en/api/mission-ext/MissionNetwork)
