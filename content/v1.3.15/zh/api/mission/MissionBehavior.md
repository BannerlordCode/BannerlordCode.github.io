---
title: "MissionBehavior"
description: "场景级扩展基类：接收 Agent、Team、tick、交互、模式切换和 Mission 清理回调。"
---
# MissionBehavior

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class MissionBehavior : IMissionBehavior`  
**Base:** `IMissionBehavior`  
**Source:** `TaleWorlds.MountAndBlade/MissionBehavior.cs`

## 一句话职责

它是挂在一个 Mission 上的临时插件契约，让模组在场景生命周期、Agent 事件、队伍变化和每帧更新中接入引擎，并在 Mission 结束或行为移除时提供明确的解绑与清理边界。

## 心智模型

`MissionBehavior` 是 **当前场景的回调订阅者**，不是战役行为的替代品。

- 行为实例通常由 `MissionState.OpenNew` 的 `InitializeMissionBehaviorsDelegate` 返回；Mission 随后调用 `AddMissionBehavior`，设置内部 `Mission` 引用并调用 `OnCreated`。
- Mission 初始化阶段依次通知 `OnBehaviorInitialize`、`EarlyStart`、`AfterStart`；持续运行阶段按帧通知 tick；结束阶段通知 `OnEndMissionInternal`，移除时调用 `OnRemoveBehavior`。
- 每个子类必须实现 `BehaviorType`。返回 `MissionBehaviorType.Logic` 的子类应该是 `MissionLogic`，因为 Mission 会把它放入 `MissionLogics`。
- 这是场景寿命对象：一个 Mission 结束后，行为不应继续持有 Agent、Team、Formation、Scene 或 native-backed UI 引用。

战役层的 [`CampaignBehaviorBase`](../../campaign-ext/CampaignBehaviorBase/) 适合地图级和存档级状态；需要对 Mission 结束做裁决时使用 [`MissionLogic`](../../mission-ext/MissionLogic/)。

## 真实注册方式

源码中的 `SandBoxMissions.OpenTownCenterMission` 通过 `MissionState.OpenNew` 返回 behavior 集合，而不是使用 `MissionGameStarter`：

```csharp
Mission mission = MissionState.OpenNew(
    "TownCenter",
    SandBoxMissions.CreateSandBoxMissionInitializerRecord(
        scene,
        "",
        doNotUseLoadingScreen: false,
        (DecalAtlasGroup)3),
    (Mission currentMission) => new MissionBehavior[]
    {
        new CampaignMissionComponent(),
        new BasicLeaveMissionLogic(),
        new MyMissionBehavior()
    },
    addDefaultMissionBehaviors: true,
    needsMemoryCleanup: true);
```

在已经创建的场景中，公开的运行时入口是 `Mission.AddMissionBehavior`：

```csharp
Mission mission = Mission.Current;
if (mission != null && mission.CurrentState == Mission.State.Continuing)
{
    mission.AddMissionBehavior(new MyMissionBehavior());
}
```

检查过的 1.4.5 与 1.3.15 `TaleWorlds.MountAndBlade` 源码都没有 `MissionGameStarter` 类型。不要用它作为 Mission 注册示例；`CampaignGameStarter` 只属于 Campaign 启动流程。运行时添加只调用 `OnCreated`，不会补跑已经过去的 `OnBehaviorInitialize`、`EarlyStart` 和 `AfterStart`。

## 生命周期回调

| 回调 | 调用时机 | 适合做什么 |
|---|---|---|
| `OnAfterMissionCreated` | Mission 创建、正式初始化前 | 读取创建阶段信息；不要依赖已经完成的 Scene 初始化 |
| `OnCreated` | `AddMissionBehavior` 把 behavior 绑定到 Mission 后 | 记录已绑定状态；复杂初始化放在后续初始化回调 |
| `OnBehaviorInitialize` | Mission 对 behavior 做统一初始化时 | 取得 Mission 内可用的系统并订阅本场景事件 |
| `EarlyStart`、`AfterStart` | 初始化中段、初始化完成后 | 分别处理需要早于/晚于其他 behavior 的启动工作 |
| `OnPreMissionTick`、`OnMissionTick`、`OnFixedMissionTick` | 每帧前、每帧、固定步长 | 只做场景实时逻辑，并限制成本 |
| `OnAgentCreated`、`OnAgentBuild` | Agent 创建和构建阶段 | 建立短期索引、调整场景表现；区分“对象存在”和“已完成构建” |
| `OnEarlyAgentRemoved`、`OnAgentRemoved`、`OnAgentDeleted` | Agent 被停用、移除、最终删除的不同阶段 | 读取死亡/撤退信息并清理索引；不要把 removed Agent 当作永久对象 |
| `OnAddTeam`、`AfterAddTeam` | Team 加入 Mission 前后 | 为新队伍建立场景级配置 |
| `OnMissionModeChange`、`OnDeploymentFinished` | 模式或部署阶段改变 | 只在对应阶段下达指令或启用逻辑 |
| `OnEndMissionInternal`、`OnRemoveBehavior` | Mission 结束或 behavior 被拔除 | 解绑事件、清空缓存、停止外部回调 |

`OnEndMissionInternal` 的基类实现会调用受保护的 `OnEndMission`。自定义清理要保证重复调用安全，因为动态移除和整体 teardown 都可能触及同一批引用。

## Agent 死亡与 `OnAgentRemoved`

`Mission` 的源码顺序是：先设置 Agent 状态、停用其 Team 活动成员资格，再通知 `OnEarlyAgentRemoved` 和 `OnAgentRemoved`，然后从活动列表移除并调用 `Agent.OnRemove`。因此回调应保存值，不应把对象引用带出 Mission：

```csharp
public sealed class KillNoticeBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

    public override void OnAgentRemoved(
        Agent affectedAgent,
        Agent affectorAgent,
        AgentState agentState,
        KillingBlow blow)
    {
        bool wasPlayer = affectedAgent.IsMainAgent;
        BattleSideEnum side = affectedAgent.Team?.Side ?? BattleSideEnum.None;
        bool wasKilled = agentState == AgentState.Killed;

        if (wasPlayer && wasKilled)
        {
            InformationManager.DisplayMessage(
                new InformationMessage("The player agent was removed from the mission."));
        }

        RecordRemoval(side, affectedAgent.IsHero, affectorAgent?.IsMainAgent ?? false);
    }

    private void RecordRemoval(BattleSideEnum side, bool wasHero, bool causedByPlayer)
    {
        // Store IDs/counters in a mission-scoped record, not the Agent reference.
    }
}
```

`affectedAgent.Team` is still useful for immediate classification, but the Team has already removed the Agent from its active list. `OnAgentDeleted` is later and is the boundary for dropping any remaining per-Agent cache.

## 何时用 / 何时不用

**适合：** 场景内提示、Agent 创建/死亡处理、战斗 tick、可用物交互、Team/Formation 监听、镜头或 Mission UI 的短期联动。

**不适合：** 保存 Campaign 状态、跨场景缓存 Hero/Party、替代 `*Action.Apply` 修改战役世界、或在 Agent 死亡回调里立刻重排存档对象。前者应使用 Campaign behavior/Action，后者应记录结果并在合适的战役阶段写回。

## 关键成员

| 成员 | 语义与时机 |
|---|---|
| `Mission` | 由 Mission 内部绑定；构造函数和注册前可能为 `null`，移除后一定失效 |
| `BehaviorType` | 必须由子类返回 `Logic`、`Other` 或引擎支持的其他分类；Logic 应继承 `MissionLogic` |
| `OnMissionTick(float dt)` | 每帧调用；先检查 `Mission`、`CurrentState` 和对象活动状态，避免在结束阶段访问旧对象 |
| `OnAgentHit`、`OnScoreHit`、`OnMissileHit`、`OnMeleeHit` | 命中/伤害事件；区分受击者、攻击者和 blow 数据，不要把命中视为死亡 |
| `OnAgentRemoved` | Agent 从活动集合移除前后的死亡/撤退通知；应即时抽取所需字段 |
| `OnObjectUsed`、`OnObjectStoppedBeingUsed` | 场景交互入口；对象可能在同一 Mission 内被禁用或销毁 |
| `OnMissionModeChange` | 进入 Deployment、Battle 等模式时接收变化；不要假设所有 Mission 都有同样的模式序列 |
| `OnRemoveBehavior` | 动态移除或 Mission teardown 的清理点；解绑事件并让方法可重复调用 |

## 风险与依赖

- [`Mission`](../Mission/) 持有 behavior，并决定所有回调何时有效。
- [`MissionLogic`](../../mission-ext/MissionLogic/) 共享本类的 Agent/tick 生命周期，但额外参与结束裁决。
- [`Agent`](../Agent/)、[`Team`](../Team/)、[`Formation`](../Formation/) 都是 Mission-scoped；行为必须在 `OnEndMissionInternal`/`OnRemoveBehavior` 清空它们的缓存。
- [`CampaignBehaviorBase`](../../campaign-ext/CampaignBehaviorBase/) 和 [`Campaign`](../../campaign/Campaign/) 属于更长寿命的 Campaign 层，不应被 Mission 行为的临时引用反向持有。

最危险的错误是：在 `Mission.Current == null` 时 tick；在 `OnAgentRemoved` 之后继续访问 Agent 的 native 状态；在 `OnRemoveBehavior` 后继续接收外部事件；或把 Mission 层对象写进存档。它们会导致空引用、无效 native handle、重复回调和坏档。

## 跨版本提示

- 1.3.15 和 1.4.5 的核心回调名称与注册路径一致；以 `MissionState.OpenNew`/`Mission.AddMissionBehavior` 为兼容入口。
- 反编译源码中的网络、View 和 SandBox behavior 可以扩展回调，但不改变本类的 Mission-scoped 生命周期。

## 导航

- [↑ Mission API 模块](./)
- [↔ Mission](../Mission/)
- [↔ Agent](../Agent/) · [Team](../Team/) · [Formation](../Formation/)
- [↓ MissionLogic](../../mission-ext/MissionLogic/)
- [Campaign behavior 对照](../../campaign-ext/CampaignBehaviorBase/)
