---
title: "UsableMissionObject"
description: "Mission 场景交互基类：负责焦点、Agent 使用、AI 移动、组件回调与可同步的可用状态。"
---
# UsableMissionObject

**命名空间：** `TaleWorlds.MountAndBlade`  
**模块：** `TaleWorlds.MountAndBlade`  
**类型：** `public abstract class UsableMissionObject : SynchedMissionObject, IFocusable, IUsable, IVisible`  
**基类：** [`SynchedMissionObject`](../SynchedMissionObject)  
**源码文件：** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UsableMissionObject.cs`

## 一句话职责

这是 Mission 场景中的交互层：它在 [`SynchedMissionObject`](../SynchedMissionObject) 之上持有当前使用者、正在接近或防守的 AI、焦点/使用回调，以及可同步的交互开关。

## 心智模型

`UsableMissionObject` 是场景组件，不是战役服务，也不是独立的 UI 控件。引擎会从场景实体或 Mission 的运行时对象路径创建它的派生类。`OnInit` 会收集子实体、创建 `GameEntityWithWorldPosition`，并把 `LockUserFrames` 默认设为 `!IsInstantUse`。之后由 Mission 或交互视图驱动获得焦点、开始使用、停止使用，以及 AI 进入/离开驻点的回调。

它的状态分成两组：`UserAgent`、`MovingAgent`、`DefendingAgents` 表示当前有哪些 Agent 在交互；`IsDeactivated` 与 `IsDisabledForPlayers` 决定是否允许新的交互。`SetDisabled*` 会改变对象是否位于 `Mission.ActiveMissionObjects` 中，并可改变可见性或物理状态，但不等于移除实体。派生类应挂在真实场景实体上，让宿主调用生命周期方法；不要用 `new` 创建脱离场景的对象，也不要手动调用 `OnUse` 冒充一次合法交互。

当你要实现门、工作台、站立点、拾取物或机器部件，并且交互由 Agent 表示、可能需要多人同步时使用它。Mission 全局协调应放到 [`MissionBehavior`](../../mission/MissionBehavior)，战役状态应通过 Campaign 的 Action 修改；不要把可存档数据放进这个场景对象。

## 依赖关系

对象通过 [`MissionObject`](../MissionObject) 进入 Mission：`OnPreInit` 分配 [`MissionObjectId`](../MissionObjectId) 并注册对象；[`Mission`](../../mission/Mission) 持有 `MissionObjects` 与 `ActiveMissionObjects`。交互焦点和 Agent 生命周期来自 Mission 交互层及 [`Agent`](../../mission/Agent)；可选行为委托给 [`UsableMissionObjectComponent`](../UsableMissionObjectComponent)。多人状态则通过 [`SynchedMissionObject`](../SynchedMissionObject) 及其网络快照契约传递。

## 交互状态与时机

- `UserAgent` 是当前使用对象的 Agent；引用变化时 `PreviousUserAgent` 会被更新。它们只在 Mission 和实体仍存活时有效。
- `IsDeactivated` 会阻止交互；在权威侧改为 `true` 时，还会停止当前使用者、正在接近的 Agent 和防守 Agent。`IsDisabledForPlayers` 会阻止非 AI 玩家，但它的条件仍允许 AI 继续进入后续判断。
- `IsDisabledForAgent(Agent agent)` 会在对象已停用、Agent 骑乘、对象禁用玩家且 Agent 非 AI，或 Agent 未通过 `IsAbleToUseMachine()` 时返回 `true`。
- `IsInstantUse` 表示是否即时使用；`LockUserFrames` 与 `LockUserPositions` 决定使用期间客户端把 Agent 修正到哪个目标。`OnInit` 会把 `LockUserFrames` 设为 `!IsInstantUse`。
- `MovingAgent` 与 `DefendingAgents` 保存 AI 驻点状态。基类支持一个正在移动的 Agent；其他编排可以重写 `GetMovingAgentCount`、`GetMovingAgentWithIndex`、`AddMovingAgent` 与 `RemoveMovingAgent`。读取或添加防守列表前先调用 `InitializeDefendingAgents`。
- `GameEntityWithWorldPosition` 在 `OnInit` 中刷新，也可用 `RefreshGameEntityWithWorldPosition` 重建。默认的 `GetUserFrameForAgent` 使用这个包装器；子实体布局改变时应重写该方法，或在改变后刷新包装器。
- `IsVisible` 修改排除父级可见性的实体状态。`DescriptionMessage`、`ActionMessage` 与 `GetDescriptionText(WeakGameEntity)` 提供交互文字，但不会单独让对象变得可用。

## 使用流程

正常流程由宿主驱动：

1. 交互系统调用 `OnFocusGain` 或 `OnFocusLose`；基类会把事件转发给每个 [`UsableMissionObjectComponent`](../UsableMissionObjectComponent)。
2. 交互被接受后，权威侧执行 `OnUse`。它会处理冲突使用者，移除正在接近该对象的 AI；对象不是即时使用时，还会停止其他正在接近的 Agent；接着调用组件的 `OnUse`、设置 `UserAgent`，并由服务器或 recorder 广播 `UseObject`。客户端或 replay 不修改权威状态，而是依据锁定帧或位置修正 Agent。
3. `OnUseStopped` 把成功标志转发给组件，然后清空 `UserAgent`。`OnAIMoveToUse` 与 `OnMoveToStopped` 维护 detachment manager 和移动 Agent；`OnAIDefendBegin` 与 `OnAIDefendEnd` 维护防守列表及 detachment manager。
4. `GetTickRequirement` 在有人使用或接近时请求普通 tick 与并行 tick；有 Agent 防守时请求普通 tick；组件报告 `IsOnTickRequired()` 时也请求普通 tick。`OnTick` 会 tick 组件、在实体帧改变后修正使用者位置，并清理已经失活的移动 Agent。
5. `OnEndMission` 清空使用者、移动 Agent 与防守引用。`OnRemoved` 先执行 [`MissionObject`](../MissionObject) 的移除路径，再调用每个组件的 `OnRemoved`。

同步边界是明确的。`SetIsDeactivatedSynched` 与 `SetIsDisabledForPlayersSynched` 只在服务器/recorder 权威侧发送对应消息，然后更新本地状态。`WriteToNetwork` 先写基类快照，再写两个开关和可选的使用者 Agent index；`OnAfterReadFromNetwork` 先让基类应用状态，再通过 `Mission.MissionNetworkHelper` 解析 Agent index。

## 真实获取与检查示例

下面从当前 Mission 中查询已经注册的对象，适合放在 Mission behavior 或其他 Mission 阶段回调中；它不会创建脱离场景的对象。

```csharp
using TaleWorlds.MountAndBlade;

public static bool TryFindUsableForMainAgent(out UsableMissionObject result)
{
    result = null;
    Mission mission = Mission.Current;
    Agent agent = Agent.Main;
    if (mission == null || agent == null)
    {
        return false;
    }

    foreach (MissionObject missionObject in mission.ActiveMissionObjects)
    {
        if (missionObject is UsableMissionObject usable &&
            !usable.IsDisabledForAgent(agent))
        {
            result = usable;
            return true;
        }
    }

    return false;
}
```

## 真实派生对象模式

把派生类型通过正常的 Mission 场景配置挂到场景实体上。重写交互钩子时保留基类记账；如果结果必须到达客户端，使用同步 setter。

```csharp
using TaleWorlds.Engine;
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade;

public sealed class ModGateUsableObject : UsableMissionObject
{
    public ModGateUsableObject() : base(isInstantUse: false)
    {
    }

    public override TextObject GetDescriptionText(WeakGameEntity gameEntity)
    {
        return new TextObject("{=mod_gate_use}Open the gate");
    }

    public override void OnUse(Agent userAgent, sbyte agentBoneIndex)
    {
        base.OnUse(userAgent, agentBoneIndex);
        SetIsDeactivatedSynched(true);
    }
}
```

## 风险与边界

- `DefendingAgents` 直到调用 `InitializeDefendingAgents` 才会创建；`GetDefendingAgentCount`、`AddDefendingAgent` 与 `IsAgentDefending` 都假定列表已经初始化。
- 直接赋值 `IsDeactivated` 或 `IsDisabledForPlayers` 只改变本地状态，不会广播对应网络消息。多人模式下应在权威侧使用 `*Synched` setter。
- `MissionObject` 可以被禁用而不被移除。不要在 `OnEndMission` 或 `OnRemoved` 之后继续持有 Agent、`GameEntityWithWorldPosition` 或 `GameEntity` 引用。
- `SetDisabled*`、`SetEnabled*`、`SetCustomLocalFrame` 和交互回调都要求有效 Mission 与原生实体。在模块加载阶段或实体移除后的延迟回调中调用，可能访问失效的引擎状态。
- 只要宿主请求 tick，组件的 `OnTick` 就可能每帧执行。组件只有在确实有工作时才应让 `IsOnTickRequired` 返回 `true`，并在宿主消失前移除组件。
- `OnAfterReadFromNetwork` 与 `WriteToNetwork` 是继承契约。重写时漏掉 `base` 会丢失变换、禁用或交互状态。客户端的位置锁定只是表现修正，不是提交游戏规则的权限。
- 这个类型不负责持久化战役数据。持久后果应由相应 Campaign behavior 和 Action 写入；Mission 交互状态应保持临时性。

## 参见与双向导航

- ↑ 父级：[Mission-ext 模块索引](../)
- ↔ 继承链：[MissionObject](../MissionObject) · [SynchedMissionObject](../SynchedMissionObject)
- ↔ 扩展点：[UsableMissionObjectComponent](../UsableMissionObjectComponent)
- 宿主与 Agent 生命周期：[Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior) · [Agent](../../mission/Agent)
- 相关机器宿主：[UsableMachine](../UsableMachine)
- 身份：[MissionObjectId](../MissionObjectId)
- English/中文：[UsableMissionObject](../../../../en/api/mission-ext/UsableMissionObject)
