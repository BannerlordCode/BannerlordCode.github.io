---
title: "MissionNetworkComponent"
description: "v1.4.5 中负责注册 Mission 网络消息、同步 Agent 与 MissionObject，并处理玩家加入、断开和 Mission 清理的网络行为。"
---
# MissionNetworkComponent

**命名空间：** `TaleWorlds.MountAndBlade`  
**模块：** `TaleWorlds.MountAndBlade`  
**类型：** `public sealed class MissionNetworkComponent : MissionNetwork`  
**基类：** [`MissionNetwork`](../MissionNetwork)  
**源码：** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionNetworkComponent.cs`

## 一句话职责

`MissionNetworkComponent` 是默认的多人游戏 `Mission` 行为：注册当前任务的网络消息，在客户端应用服务端快照，为新加入的 Peer 发送权威任务状态，并在断线和任务结束时释放 Peer、Agent 与任务引用。

## 心智模型

它是 Mission 层的网络协调器，不是挂在 [`Agent`](../../mission/Agent)、`GameEntity` 或 `MissionObject` 上的组件。它是由当前 [`Mission`](../../mission/Mission) 持有的、继承 [`MissionNetwork`](../MissionNetwork) 的 sealed 具体行为。只有当 `GameNetwork.IsSessionActive` 或 `GameNetwork.IsReplay` 为 true 时，`MissionState` 才会把它加入默认行为列表。Mission 初始化期间，基类调用 `AddRemoveMessageHandlers`，把对应处理器注册进 `GameNetwork`，之后再把本行为加入 UDP 网络处理器列表。

这个类有两个方向完全不同的职责：

- 在客户端或回放中，它消费 `CreateAgent`、`CreateMissionObject`、`RemoveMissionObject`、`SynchronizeMissionObject`、队伍与阵型、武器状态、导弹状态等服务端消息，让本地 Mission 镜像权威状态。
- 在服务端，它接收 `RequestUseObject`、`ApplyOrder`、`ApplySiegeWeaponOrder`、阵型选择、丢弃武器、作为 Bot 出场等客户端请求。服务端任务系统处理请求后，再广播结果。

所以服务端才是权威。客户端对本地 Agent、Team 或 MissionObject 的调用，不会因为存在这个行为就自动变成多人游戏事实。mod 应当观察本组件的同步事件，或者使用所属 Mission 的公开 API；不要调用私有数据包处理器，不要伪造游戏内部消息，也不要调用 `OnClientSynchronized` 来假装某个 Peer 已经完成加载。

## 何时使用，何时不要使用

**适合使用：**

- 多人 Mission 行为需要等待本地客户端收到初始任务快照。
- 某个系统需要通过 `OnClientSynchronizedEvent` 观察所有 Peer 的同步完成。
- 需要理解后加入玩家为何会得到当前的 Agent、运行时 MissionObject、队伍、阵型、生成武器或导弹状态。
- 排查 Mission 清理、重连、客户端请求和服务端广播之间的边界。

**不要使用：**

- 查找 Agent 或实体组件。正确入口是 `Mission.GetMissionBehavior<MissionNetworkComponent>()`，不是 `agent.GetComponent<MissionNetworkComponent>()`。
- 添加普通 Mission 功能。应添加独立的 [`MissionBehavior`](../../mission/MissionBehavior) 或 [`MissionLogic`](../MissionLogic)；如果它需要网络就绪边界，再订阅公开同步事件。
- 保存 Campaign 或存档数据。本类只负责当前 Mission 的网络生命周期；持久状态属于 Campaign 行为的 `SyncData` 和 SaveSystem 契约。
- 把客户端请求当成修改权威状态的许可。应使用受支持的请求路径，并让服务端任务逻辑决定结果。
- 在任务结束后继续持有 `Agent`、`MissionPeer`、`Team`、`Formation` 或 `MissionObject`。本类会在断线和最终化阶段主动清理这些关系。

## 依赖图

**上游：**

- [`MissionState`](../../campaign-ext/MissionState) 在网络会话或回放中创建默认实例，并在 Mission 最终化时移除它。
- [`Mission`](../../mission/Mission) 持有本行为、`MissionBehaviors`、`MissionObjects`、`AllAgents`、`Teams` 和任务时间追踪器。
- [`MissionNetwork`](../MissionNetwork) 把本行为注册成 `GameNetwork`/UDP 处理器，并提供连接阶段回调。
- [`GameNetwork`](../GameNetwork) 决定客户端、服务端、录制器和回放分支，并承载 `GameNetworkMessage` 流量。
- [`NetworkCommunicator`](../NetworkCommunicator) 与 [`MissionPeer`](../MissionPeer) 表示 Peer，以及其控制的 Agent、队伍、文化和重连状态。

**由本行为同步或清理的状态：**

- [`Agent`](../../mission/Agent)、[`Team`](../Team) 和 [`Formation`](../../mission/Formation) 的任务状态。
- [`MissionObject`](../MissionObject)、[`MissionObjectId`](../MissionObjectId) 和 [`SynchedMissionObject`](../SynchedMissionObject) 的状态。
- `SynchronizeMissionTimeTracker` 携带的任务时间，以及生成的武器和导弹。

**下游消费者：**

- [`MissionLobbyComponent`](../MissionLobbyComponent)、[`MissionGauntletTeamSelection`](../MissionGauntletTeamSelection)、[`MissionScoreboardComponent`](../MissionScoreboardComponent) 和 [`MultiplayerTeamSelectComponent`](../MultiplayerTeamSelectComponent) 都从当前 Mission 获取本行为。
- 这些消费者使用 `OnMyClientSynchronized`，把 UI 或玩家选队操作延迟到本地客户端快照就绪之后。
- `VoiceChatHandler` 和其他多人组件使用 `OnClientSynchronizedEvent` 执行 Peer 级别的同步后工作。

## 生命周期与权威边界

关键顺序由 Mission 和 `MissionNetwork` 基类拥有：

1. `MissionState.AddDefaultMissionBehaviorsTo` 仅在网络会话或回放中添加 `new MissionNetworkComponent()`。
2. `MissionNetwork.OnAfterMissionCreated` 创建消息注册容器，调用本类的 `AddRemoveMessageHandlers`，然后注册处理器。客户端/回放分支注册服务端到客户端的状态消息；服务端分支注册客户端请求消息。
3. `OnBehaviorInitialize` 调用基类，基类执行 `GameNetwork.AddNetworkHandler(this)`，然后本类获取游戏的 `ChatBox` 处理器。
4. 新客户端完成加载后，早期回调创建它的 `MissionPeer`，并为重连 Peer 保留组件状态；晚期回调发送完整快照：任务时间、队伍和关系、阵型、Agent、生成的 MissionObject、同步 MissionObject 记录、导弹、选兵状态，以及 `ExistingObjectsEnd` 标记。
5. 网络层在 Peer 同步阶段完成后调用 `OnClientSynchronized`。它先为该 Peer 触发 `OnClientSynchronizedEvent`，当 `networkPeer.IsMine` 为 true 时再触发 `OnMyClientSynchronized`。
6. 服务端或录制器的 `OnMissionTick` 大约每两秒广播一次 Mission 时间，并 tick 每个 Peer 的任务代表对象；服务端还会在未禁用挂机踢出时更新不活跃状态。
7. `OnClearScene` 在服务端或录制器广播 `ClearMission`。`OnAddTeam` 广播队伍并将事件加入 Mission 记录；客户端在条件满足时还会建立观战队伍。
8. 断线回调移除 Agent 视觉效果，在服务端玩家路径杀死受控 Agent，清理 Agent 所属的 `MissionPeer` 关系，并释放受控 Formation 的玩家所有者。
9. `OnEndMission` 清空每个 `MissionPeer.ControlledAgent`，清空每个 Agent 的 `MissionPeer`，再进入基类的 Mission 网络清理。随后 `MissionState` 移除本行为，基类负责从 `GameNetwork` 移除网络处理器。

## 运行时 MissionObject 同步

网络行为不会在 mod 调用构造函数时随意创建一个客户端副本。权威创建路径是 [`Mission.CreateMissionObjectFromPrefab`](../../mission/Mission)：服务端或录制器实例化 prefab，运行脚本初始化前回调，初始化脚本组件，记录根节点和子节点的 `MissionObjectId`，广播 `CreateMissionObject`，并保存动态实体信息供后加入 Peer 使用。

客户端收到消息后，会在当前 Mission 场景中实例化同一个 prefab，为根节点和子节点设置相同 ID，再让 Mission 对象生命周期注册这些脚本。服务端移除运行时 MissionObject 时，`Mission.OnMissionObjectRemoved` 会回收运行时 ID，删除动态实体记录并广播 `RemoveMissionObject`；客户端处理器再移除消息中 `MissionObjectId` 对应的实体。

因此 `MissionObjectId`、场景注册和网络所有权必须一起理解。客户端自行创建并使用本地 ID 的对象不是同步对象；服务端绕开 Mission 移除路径也会让其他 Peer 留下过期实体。

## 真实获取与订阅路径

源码确认的获取方式是从当前 Mission 取得本行为。多人组件在自己的 Mission 生命周期中这样做，并在移除时解除事件订阅：

```csharp
public sealed class NetworkReadyMissionLogic : MissionLogic
{
    private MissionNetworkComponent _missionNetwork;

    public override void OnBehaviorInitialize()
    {
        base.OnBehaviorInitialize();
        _missionNetwork = Mission.GetMissionBehavior<MissionNetworkComponent>();

        if (GameNetwork.IsClient && _missionNetwork != null)
        {
            _missionNetwork.OnMyClientSynchronized += OnMyClientSynchronized;
        }
    }

    public override void OnRemoveBehavior()
    {
        if (_missionNetwork != null)
        {
            _missionNetwork.OnMyClientSynchronized -= OnMyClientSynchronized;
        }

        base.OnRemoveBehavior();
    }

    private void OnMyClientSynchronized()
    {
        Mission mission = Mission.Current;
        if (mission == null || mission.MissionEnded)
        {
            return;
        }

        // 在这里读取 Mission 所属的队伍、Agent 或 MissionObject。
    }
}
```

这与源码中的 `MissionLobbyComponent` 和多人 UI 模式一致：通过 `Mission.GetMissionBehavior<T>()` 获取，行为存在后订阅，在移除阶段解除订阅。这个事件表示本地 Peer 已完成本组件的同步回调，不代表所有自定义资源或 UI 视图都已经准备完成。

如果要在服务端创建运行时对象，应使用会完成注册和广播的 Mission API，而不是自行构造 `MissionObject`：

```csharp
public MissionObject SpawnAuthoritativeMissionObject(
    string prefabId,
    MatrixFrame frame)
{
    if (!GameNetwork.IsServerOrRecorder || Mission.Current == null)
    {
        return null;
    }

    return Mission.Current.CreateMissionObjectFromPrefab(
        prefabId,
        frame,
        hasCustomRestOffset: false,
        restOffset: 0f,
        actionAppliedBeforeScriptInitialization: entity =>
            entity.SetVisibilityExcludeParents(true));
}
```

`prefabId` 必须是任务模块实际可用的 prefab 标识。这个示例的重点是权威入口和获取路径：`Mission.Current` 负责创建、分配 ID、初始化脚本并发出网络消息。不要在客户端调用它后，期待返回值自动复制到其他 Peer。

## 关键成员与调用时机

### OnMyClientSynchronized

`public event Action OnMyClientSynchronized`

只有当 `OnClientSynchronized` 收到 `IsMine` 为 true 的 communicator 时才触发。它是客户端专属工作的正确边界，例如打开选队界面或请求文化选择。多人消费者会在 Mission 移除或最终化回调中解除订阅；保留旧订阅可能在 Mission View 已销毁后调用 UI 代码。

### OnClientSynchronizedEvent

`public event Action<NetworkCommunicator> OnClientSynchronizedEvent`

对传入 `OnClientSynchronized` 的每个 Peer 触发，包括远程 Peer。需要区分不同 `NetworkCommunicator` 时使用它。`VoiceChatHandler` 是源码中的真实消费者。它不是底层同步协议的替代品，mod 不应自行触发它。

### AddRemoveMessageHandlers

`protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)`

按权威分支注册内置消息处理器。客户端/回放处理 Agent、MissionObject、武器、攻城器械、阵型、导弹和 Mission 时间的服务端状态；服务端接收对象使用、命令、阵型选择、武器操作和 Bot 出场请求。它由 `MissionNetwork.OnAfterMissionCreated` 调用，是框架生命周期钩子，不是这个 sealed 类的公开扩展点。

### OnBehaviorInitialize

`public override void OnBehaviorInitialize()`

调用 `MissionNetwork.OnBehaviorInitialize`，由基类把行为加入 `GameNetwork`，然后缓存全局 `ChatBox` 处理器。它在行为加入 Mission 后的初始化阶段执行。替代性的网络行为必须保留基类调用；调用者不应手动调用此方法来强行注册。

### OnPlayerDisconnectedFromServer

`public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

通过 `MultiplayerMissionAgentVisualSpawnComponent` 移除断开 Peer 的 Agent 视觉效果，并重置 `MissionPeer.HasSpawnedAgentVisuals`。这是服务端连接生命周期回调，不代表该 Peer 的 Agent 或 Formation 引用此刻都可以继续使用；后续断线回调还会做额外清理。

### HandleEarlyNewClientAfterLoadingFinished

`protected override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

当 Peer 不是服务端 Peer 时，从现有和已断开 Peer 同步组件状态；随后添加 `MissionPeer` 组件，必要时为重连 Peer 恢复原生队伍，并记录 `JoinTime`。它在晚期快照发送前建立 Peer 身份。

### HandleLateNewClientAfterLoadingFinished

`protected override void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

为非服务端 Peer 按固定顺序发送已有 Mission 状态。顺序包括 `ExistingObjectsBegin`、Mission 时间、队伍、队伍关系、阵型、Agent、生成的 MissionObject、同步 MissionObject 记录、导弹、选兵状态、原生已有对象数据和 `ExistingObjectsEnd`。在网络层调用 `OnClientSynchronized` 前，不要把这个 Peer 当作完全同步。

### HandleEarlyPlayerDisconnect

`protected override void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer)`

移除 Peer 的 Agent 视觉效果，并在服务端或录制器分支广播 `RemoveAgentVisualsForPeer`。它发生在之后的玩家断线清理之前，所以 UI 或 Agent 引用不应再假定旧视觉条目仍然存在。

### HandlePlayerDisconnect

`protected override void HandlePlayerDisconnect(NetworkCommunicator networkPeer)`

服务端玩家断线时，使用合成的致命 `Blow` 杀死其受控 Agent，清理所有 Agent 上匹配的 `MissionPeer` 和所属 Peer 关系，并清空受控 Formation 的 `PlayerOwner`。这是为了让玩家离开与任务状态一致，不是供 mod 调用来杀死 Agent 的通用方法。

### OnRemoveBehavior

`public override void OnRemoveBehavior()`

保留基类回调。`MissionNetwork` 基类会把行为从 `GameNetwork` 移除，UDP 处理器随后注销消息。它是 Mission 行为的终止边界，不是发送新 Mission 消息的最后机会。

### OnAddTeam

`public override void OnAddTeam(Team team)`

服务端或录制器广播队伍索引、阵营、颜色、旗帜代码和玩家角色标志，并把事件加入 Mission 记录。客户端在条件满足时建立观战队伍。需要改变队伍权威状态时，应使用游戏已有的队伍或命令系统，让本行为负责传播结果。

### OnClearScene

`public override void OnClearScene()`

服务端或录制器向所有 Peer 广播 `ClearMission`。它不会为 mod 重新加载任意场景或重新填充 MissionObject；场景和 Mission 生命周期仍由 [`Mission`](../../mission/Mission) 所有。

### OnMissionTick

`public override void OnMissionTick(float dt)`

服务端或录制器累积 `dt`，达到约两秒的同步周期时广播当前 Mission 时间；同时 tick 每个 Peer 的 `MissionRepresentativeBase`。服务端还会在启用挂机踢出时更新不活跃状态。这是高频 Mission 钩子，不应在这里执行昂贵的全局扫描或 Campaign 持久化。

### OnEndMission

`protected override void OnEndMission()`

服务端清空每个 `MissionPeer.ControlledAgent`，并清空每个 Agent 的 `MissionPeer`，然后调用基类清理。即使托管对象看起来仍可访问，Mission 结束后继续访问这些引用也已经越过有效生命周期。

### OnPeerSelectedTeam

`public void OnPeerSelectedTeam(MissionPeer missionPeer)`

在 Peer 选队后向它发送 Agent 视觉效果。它由多人选队流程调用，并依赖有效网络 Peer 和已选择的队伍。它不是选择队伍的替代品，也不是通用的重新同步方法。

### OnClientSynchronized

`public void OnClientSynchronized(NetworkCommunicator networkPeer)`

触发 `OnClientSynchronizedEvent`，并在本地 Peer 上触发 `OnMyClientSynchronized`。多人网络组件会在 Peer 同步协议完成后调用它。手动调用会让 UI 或语音聊天消费者在 Agent、MissionObject 和 Mission 状态实际抵达之前提前运行。

## 风险与崩溃边界

- **错误的持有层：** `MissionNetworkComponent` 是 `MissionBehavior`。`agent.GetComponent<MissionNetworkComponent>()` 查询的是错误层级，不能取得有用的网络行为。应从当前 `Mission` 获取，并在关闭默认行为时处理返回值为空。
- **权威倒置：** 客户端本地修改不会更新服务端权威的 Agent、Team、MissionObject 或战斗状态。客户端请求必须走支持的请求路径，服务端还要检查 Peer、Mission、对象 ID 和游戏阶段。
- **伪造或复用 ID：** 运行时 MissionObject 通过 `MissionObjectId` 和动态实体记录注册。自行构造对象或复用 ID 会绕过注册和后加入快照路径，导致其他 Peer 缺对象、更新错对象或留下旧实体。
- **后加入顺序：** 新 Peer 会收到多部分快照。在 `HandleLateNewClientAfterLoadingFinished` 阶段不要认为它已同步；应等待同步事件。UI 如果太晚订阅一次性事件，还需要在自己的生命周期中处理已经同步的竞争窗口。
- **断线生命周期：** `HandleEarlyPlayerDisconnect`、`HandlePlayerDisconnect`、`OnPlayerDisconnectedFromServer` 和 `OnEndMission` 分别负责不同清理阶段。跨过这些边界继续使用 Agent、MissionPeer 或 Formation 引用，可能触发移除后访问或原生对象访问失败。
- **缺少基类清理：** 替代性的 `MissionNetwork` 行为如果省略 `base.OnBehaviorInitialize()` 或 `base.OnRemoveBehavior()`，可能导致消息不注册、重复注册，或者 Mission 结束后仍挂在网络处理器上。本类是 sealed，不能通过继承扩展。
- **错误阶段 tick：** `OnMissionTick` 只在 Mission 生命周期有效时运行。不能把它当作修改 Campaign、在 `OnEndMission` 后驱动 UI，或访问已移除 MissionObject 的场所。
- **回放与录制分支：** `GameNetwork.IsClientOrReplay`、`GameNetwork.IsServer` 和 `GameNetwork.IsServerOrRecorder` 会选择不同逻辑。假设每个回调都有服务端 Peer，或假设回放可以接受实时客户端请求，都会偏离源码契约。
- **伪造消息：** 内置处理器是私有的，并包含所有权和验证假设。不要用反射或手写内部消息绕过它们；确实需要自定义网络契约时，应写独立的 `MissionNetwork` 行为并注册自己的协议。

## 版本注记

本页依据 v1.4.5 的 `MissionNetworkComponent.cs`、`MissionNetwork.cs`、`MissionState.cs`、`Mission.cs` 和多人模块调用点撰写。消息集合和连接阶段回调都可能随版本变化；移植多人 mod 时必须重新核对权威分支与 Mission 最终化路径。

## 参见与双向导航

- ↑ 父级：[Mission-ext 模块索引](../)
- ↔ 同区网络基类：[MissionNetwork](../MissionNetwork) · [GameNetwork](../GameNetwork) · [NetworkCommunicator](../NetworkCommunicator)
- Mission 宿主与生命周期：[Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior) · [MissionLogic](../MissionLogic) · [MissionState](../../campaign-ext/MissionState)
- Mission 实体：[Agent](../../mission/Agent) · [Team](../Team) · [Formation](../../mission/Formation) · [MissionObject](../MissionObject) · [MissionObjectId](../MissionObjectId) · [SynchedMissionObject](../SynchedMissionObject)
- 消费者：[MissionLobbyComponent](../MissionLobbyComponent) · [MissionGauntletTeamSelection](../MissionGauntletTeamSelection) · [MissionScoreboardComponent](../MissionScoreboardComponent) · [MultiplayerTeamSelectComponent](../MultiplayerTeamSelectComponent)
- 架构边界：[崩溃边界](../../../architecture/crash-boundary) · [文档契约](../../../architecture/doc-contract)
- English/中文：[MissionNetworkComponent](../../../../en/api/mission-ext/MissionNetworkComponent)
