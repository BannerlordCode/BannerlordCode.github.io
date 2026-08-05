---
title: "AgentNavigator"
description: "Sandbox 战役 Agent 导航器：管理 Mission 目标、行为组选择，以及 Agent 身上的临时视觉状态。"
---
# AgentNavigator

**Namespace:** `SandBox`
<br>**Module:** `SandBox`
<br>**Type:** `public sealed class AgentNavigator`
<br>**Base:** none
<br>**File:** `Modules.SandBox/SandBox/Sandbox/AgentNavigator.cs`

## 一句话职责

`AgentNavigator` 协调一个战役 `Agent` 的 Sandbox 导航状态：管理目标切换，选择并 tick [`AgentBehaviorGroup`](../../campaign-ext/AgentBehaviorGroup)，还管理 Agent 身上的临时场景 prefab 和特殊物品。

## 心智模型

这是绑定到一个存活 `Agent` 的 Mission 内控制器，不是全局寻路服务、Campaign 实体或存档对象。[`CampaignMissionComponent`](../../campaign-ext/CampaignMissionComponent) 会在战役 Agent 创建时添加 [`CampaignAgentComponent`](../../campaign-ext/CampaignAgentComponent)。之后 Sandbox Mission 代码通过 `CampaignAgentComponent.CreateAgentNavigator()` 或 `LocationCharacter` 重载创建导航器，此时 Agent 已经拥有有效的 [`Mission`](../../mission/Mission)。组件持有导航器引用，导航器持有该 Agent 的目标和行为组列表。

导航器有两条协作路径。`SetTargetFrame` 驱动 Agent 向一个 `WorldPosition` 移动；`SetTarget` 把 Agent 接入 [`UsableMachine`](../../mission-ext/UsableMachine) 并运行该机器的 AI 行为。与此同时，行为组会竞争激活权并 tick 自己的活动行为。`CampaignAgentComponent.OnTick` 只有在 Agent 受 AI 控制且 Mission 允许 AI tick 时才会调用 `Tick`。对话 Agent 走对话 tick 路径，而不是普通行为组 tick。

它的嵌套 `NavigationState` 是一个很小的运行时状态机：

- `NoTarget`：没有活动的脚本目标。
- `GoToTarget`：正在前往 `TargetPosition`。
- `AtTargetPosition`：已经到达目标帧，且没有保留原生目标帧。
- `UseMachine`：已经接入一个可使用机器。

Agent 和 Mission 销毁时，这个对象也随之失效。目标、行为组、prefab 可见性和特殊物品状态都不是 Campaign 存档数据。

## 何时用，何时不用

**适合使用：**

- 活动 Sandbox Mission Agent 需要脚本目标、可使用机器目标或 Campaign 行为组时。
- Mission 行为需要读取 Agent 当前活动导航行为，或临时改变地点角色的视觉 prefab 时。
- 需要接入 Sandbox 已有的行为组调度，例如 `DailyBehaviorGroup`、`AlarmedBehaviorGroup` 或脚本化的 `FollowAgentBehavior` 时。

**不适合使用：**

- 要计算 Campaign 队伍路线、地图寻路或持久世界状态时；应使用对应 Campaign Model 或 Action。
- 只需要 Mission 范围的生命周期或 tick 回调时；继承 [`MissionBehavior`](../../mission/MissionBehavior)。
- Agent 不是带有 `CampaignAgentComponent` 和 `AgentNavigator` 的战役/Sandbox Agent 时；普通战斗 Agent 不一定有这两个对象。
- 要创建 Agent 时；由 Mission spawn 流程创建 Agent，在该流程初始化完成后再取得组件和导航器。
- 需要多人同步契约时；导航器修改的是实时 Mission 状态，应交给同步 MissionObject 或网络所有者处理复制。

## 依赖关系

**上游：**

- [`CampaignMissionComponent`](../../campaign-ext/CampaignMissionComponent) 在 `OnAgentCreated` 流程中挂载 `CampaignAgentComponent`。
- [`MissionAgentHandler`](../../campaign-ext/MissionAgentHandler) 在生成并配置地点角色 Agent 后创建导航器。
- [`Agent`](../../mission/Agent) 提供实时实体、Mission、装备、移动状态和原生场景句柄。
- [`LocationCharacter`](../../campaign/LocationCharacter) 可为地点角色构造器提供特殊目标标签、骨骼 prefab、特殊物品和 [`Alley`](../../campaign/Alley)。

**下游：**

- [`AgentBehaviorGroup`](../../campaign-ext/AgentBehaviorGroup) 持有竞争中的行为；`RefreshBehaviorGroups` 选择最高的正分组。
- [`FollowAgentBehavior`](../../campaign-ext/FollowAgentBehavior) 和 [`ScriptBehavior`](../../campaign-ext/ScriptBehavior) 使用导航器的行为组与目标契约。
- [`UsableMachine`](../../mission-ext/UsableMachine) 在 `SetTarget` 进入或离开 `UseMachine` 时接收或移除所有者 Agent。
- [`MissionConversationLogic`](../../campaign-ext/MissionConversationLogic) 决定 `Tick` 是否使用对话 tick。
- 原生 `Scene`、`GameEntity`、`WorldPosition`、同步 prefab 组件和 Agent 装备由对应运行时方法直接修改。

## 真实获取与调用路径

Sandbox 的真实持有路径是先取组件。`CampaignMissionComponent` 在 Agent 创建时安装组件，Mission 逻辑再从组件获取导航器。Mission 行为应复用已有导航器；只有在所属 Sandbox 流程明确尚未创建时才创建一个：

```csharp
using SandBox;
using SandBox.Missions.AgentBehaviors;
using TaleWorlds.MountAndBlade;

public override void OnAgentCreated(Agent agent)
{
    base.OnAgentCreated(agent);

    CampaignAgentComponent component =
        agent.GetComponent<CampaignAgentComponent>();
    AgentNavigator navigator = component?.AgentNavigator;
    if (navigator == null)
    {
        return;
    }

    DailyBehaviorGroup daily =
        navigator.GetBehaviorGroup<DailyBehaviorGroup>();
    if (daily != null)
    {
        FollowAgentBehavior follow =
            daily.GetBehavior<FollowAgentBehavior>()
            ?? daily.AddBehavior<FollowAgentBehavior>();
        daily.SetScriptedBehavior<FollowAgentBehavior>();
        follow.SetTargetAgent(Agent.Main);
    }
}
```

这对应游戏中 `MissionAgentHandler` 和 Campaign Mission 行为的调用方式。回调执行时两个 Agent 都必须有效；跟随行为会持有实时 Agent 目标，目标 Agent 被移除时必须清理。

## 公开状态与身份

- `OwnerAgent` 是导航器控制的只读 Agent，只对该 Agent 当前 Mission 有效。
- `TargetUsableMachine` 是当前机器目标；当状态不是 `UseMachine` 时为 `null`。
- `TargetPosition`、`TargetDirection` 和 `TargetEntity` 描述当前脚本目标；清理后可能是无效值或 `null`。
- `MemberOfAlley` 保存地点角色的 alley 上下文。`SetCommonArea` 还会把 `SpecialTargetTag` 更新为 alley 标签或空字符串。
- `SpecialTargetTag` 可写。改变它会调用当前活动行为的 `OnSpecialTargetChanged()`，因此不是单纯的元数据。
- `_agentState` 暴露嵌套 [`NavigationState`](../../campaign-ext/NavigationState) 状态。应把它当作状态机观察值，不要直接改写。
- `CharacterHasVisiblePrefabs` 表示地点角色的 prefab 映射非空且当前被标记为可见。

两个公开构造器是宿主创建路径。`AgentNavigator(Agent)` 创建空的地点上下文；`AgentNavigator(Agent, LocationCharacter)` 复制地点角色的视觉、特殊物品、alley 和目标标签数据，然后显示配置的物品并装备特殊物品。mod 通常应通过 `CampaignAgentComponent.CreateAgentNavigator()` 或 `CreateAgentNavigator(LocationCharacter)` 取得它，而不是直接 `new`。

## 目标与生命周期方法

### `SetTarget(UsableMachine usableMachine, bool isInitialTarget = false, AIScriptedFrameFlags customFlags = 0)`

替换机器目标。传入 `null` 时，从旧机器的 detachment 移除 Agent，关闭脚本移动，清除目标帧和实体，并回到 `NoTarget`。传入机器时，会先移除旧目标，检查 `IsStandingPointAvailableForAgent`，创建机器 AI 行为，接入所有者并进入 `UseMachine`。`isInitialTarget` 允许重新初始化同一个机器；`customFlags` 会转发给 detachment。

只有在机器、站位、所有者 Agent 和 Mission 场景都存活时调用。这个方法会改变机器占用和 Agent 移动，不是只写一个字段。

### `SetTargetFrame(WorldPosition position, float rotation, float rangeThreshold = 1f, float rotationThreshold = -10f, AIScriptedFrameFlags flags = 0, bool disableClearTargetWhenTargetIsReached = false)`

清除非 `NoTarget` 状态，保存目标位置、方向和阈值；如果目标已经到达则立即标记为 `NoTarget`，否则调用 `Agent.SetScriptedPositionAndDirection` 并进入 `GoToTarget`。之后 `Tick` 会在到达时切换到 `AtTargetPosition`；除非最后一个参数为 `true`，否则还会清除原生目标帧。

位置必须属于当前 Mission 场景。旋转阈值实际通过目标方向与 Agent 移动方向的点积比较，因此虽然参数名包含 `rotation`，它不是角度值。

### `ClearTarget()`

`SetTarget(null, isInitialTarget: false, customFlags: 0)` 的便捷包装。它释放机器 detachment 并清除脚本移动。目标 Agent 或机器即将被移除时应先调用；不要在原生对象已经释放后把它当作 Mission teardown 替代品。

### `Tick(float dt, bool isSimulation = false)`

执行行为组选择与 tick，处理对话 Agent tick，运行可使用机器 AI 行为或移动目标；在模拟模式下还会通过机器行为把使用者传送到机器。正常情况下由 `CampaignAgentComponent.OnTick` 驱动，不应由 UI 或 Campaign 行为自行伪造帧循环。

### `OnStopUsingGameObject()` 与 `OnAgentRemoved(Agent agent)`

`OnStopUsingGameObject` 清除机器行为、机器目标和导航状态。`OnAgentRemoved` 把被移除 Agent 的通知转发给所有行为组，让行为释放目标引用。这些是生命周期回调，不要在 Mission 仍拥有对象时仅为强制改状态而手动调用。

### `GetDistanceToTarget(UsableMachine target)` 与 `IsTargetReached()`

当参数和当前使用中的对象都非空时，`GetDistanceToTarget` 返回所有者到当前机器 user frame 的距离；否则返回 `100000f` 哨兵值。`IsTargetReached` 检查目标位置/方向有效、距离平方小于 `_rangeThreshold` 平方，并且移动方向点积超过 `_rotationScoreThreshold`。

## 行为组方法

行为组是导航器的扩展边界。它们是使用当前导航器和 Mission 构造的 Mission 内对象，不是 Campaign 行为或存档定义。

- `AddBehaviorGroup<T>()` 返回已有的 `T` 类型行为组；没有时按预期的 `(AgentNavigator, Mission)` 构造器创建并保存。
- `GetBehaviorGroup<T>()` 返回第一个可赋值为 `T` 的行为组，没有则为 `null`。
- `GetBehavior<T>()` 搜索全部行为组，返回运行时类型恰好为 `T` 的行为，没有则为 `null`；不要假定它会匹配派生类型。
- `HasBehaviorGroup<T>()` 报告是否存在匹配的行为组。
- `RemoveBehaviorGroup<T>()` 移除全部匹配的已保存行为组，不会保留被移除组的活动状态。
- `RefreshBehaviorGroups(bool isSimulation)` 为所有组评分；存在正分胜者时停用当前集合并激活得分最高者。`Tick` 在模拟模式立即刷新，否则由超过一秒的计时器触发。
- `GetActiveBehavior()` 返回第一个活动组的活动行为，没有则为 `null`。
- `GetActiveBehaviorGroup()` 返回第一个活动组，没有则为 `null`。
- `ForceThink(float inSeconds)` 要求所有行为组在给定时间后重新考虑。

对于脚本行为，应先配置行为组，再调用它自己的 `SetScriptedBehavior<T>()` 契约，正如上面的真实获取示例。不要在另一个回调枚举行为组时删除行为组；应在明确的 Mission 回调中修改。

## 可见性、装备与感知方法

- `SetPrefabVisibility(sbyte realBoneIndex, string prefabName, bool isVisible)` 在骨骼上创建或复用同步 prefab 组件并切换可见性，修改 Agent 的原生视觉状态。
- `GetPrefabVisibility(sbyte realBoneIndex, string prefabName)` 报告追踪中的同步组件是否存在且可见。
- `SetItemsVisibility(bool isVisible)` 应用地点角色的骨骼/prefab 映射，并更新 `CharacterHasVisiblePrefabs`。
- `HoldAndHideRecentlyUsedMeshes()` 隐藏当前可见的全部已追踪同步 prefab，并记录它们以便恢复。
- `RecoverRecentlyUsedMeshes()` 只恢复记录中的 prefab 可见性，然后清空恢复列表。
- `SetSpecialItem()` 在存在地点角色特殊物品时装备并尝试挥舞它；会复用已有匹配槽或空槽，没有槽时可能丢弃装备槽 3 的物品。
- `IsCarryingSomething()` 当所有者持有主手/副手物品，或任一追踪同步 prefab 可见时返回 `true`。
- `CanSeeAgent(Agent otherAgent)` 只有在目标 Agent 距离小于 30 米、处于所有者前方视野测试内且没有被 Mission 场景射线遮挡时才返回 `true`。
- `SetCommonArea(Alley alley)` 更新 alley，并把 `SpecialTargetTag` 与其标签同步。

这些方法应在 Mission 所属线程、Agent 视觉和场景句柄初始化之后运行。可见性不是 Campaign 物品变化，但 `SetSpecialItem` 确实会改变实时装备和动画状态。

## 风险与崩溃边界

- `AgentNavigator` 假定 Agent 和 Mission 仍然有效。`CanSeeAgent` 在读取目标位置前不检查 `otherAgent`，并访问 `Mission.Current.Scene`；移除后的延迟回调可能在托管或原生层失败。
- `CampaignAgentComponent.OnTick` 以 `AllowAiTicking` 和 `IsAIControlled` 为门禁。Mission 暂停或结束时手动调用 `Tick` 可能重复驱动行为，或访问已经释放的场景状态。
- `SetTarget` 会改变机器 detachment 成员。对已移除的机器重复使用，或在 Agent 死亡时仍保留目标，可能破坏占用状态并触发原生错误。
- `FollowAgentBehavior` 等行为可能持有实时 Agent 引用。应在 `OnAgentRemoved` 或 Mission teardown 中清理；`Agent` 引用不是可持久化的 `Hero` 或 `CharacterObject` 引用。
- `SetPrefabVisibility`、`HoldAndHideRecentlyUsedMeshes` 和 `RecoverRecentlyUsedMeshes` 操作原生同步组件。视觉对象释放后不要调用，也不要把它们当作存档或自动网络同步。
- `SetSpecialItem` 可能丢弃并装备武器。在战斗中重复调用，或在 `LocationCharacter.SpecialItem` 尚未初始化时调用，会改变装备和动画；它不是无副作用的刷新。
- `AddBehaviorGroup<T>` 依赖行为组的预期构造器。无法使用导航器和 Mission 构造的自定义行为组会返回 `null`；添加行为前必须检查。
- 导航器没有 `SyncData` 契约。Campaign 状态应存入 Campaign 行为，并按需要使用 Action/Model；下一次 Mission 启动时重新创建导航状态。

## 参见与双向导航

- ↑ 父级：[Gameplay 模块索引](../)
- ↔ 宿主组件：[CampaignAgentComponent](../../campaign-ext/CampaignAgentComponent) · [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent)
- Agent 与 Mission：[Agent](../../mission/Agent) · [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior)
- 行为契约：[AgentBehaviorGroup](../../campaign-ext/AgentBehaviorGroup) · [FollowAgentBehavior](../../campaign-ext/FollowAgentBehavior) · [ScriptBehavior](../../campaign-ext/ScriptBehavior)
- 目标与对话：[UsableMachine](../../mission-ext/UsableMachine) · [MissionConversationLogic](../../campaign-ext/MissionConversationLogic) · [NavigationState](../../campaign-ext/NavigationState)
- 文档契约：[Doc Contract](../../../architecture/doc-contract)
- 中文/English：[AgentNavigator](../../../../en/api/gameplay/AgentNavigator)
