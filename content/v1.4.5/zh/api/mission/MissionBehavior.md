---
title: "MissionBehavior"
description: "Mount & Blade 场景中的行为挂载基类：由 Mission 持有并按生命周期、Agent、Team 与 tick 回调驱动。"
---

# MissionBehavior

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class MissionBehavior : IMissionBehavior`  
**Base:** `IMissionBehavior`  
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionBehavior.cs`

## 一句话职责

`MissionBehavior` 是一场 `Mission` 的可插拔运行时行为：Mission 负责创建、持有和遍历它，派生类在正确的生命周期回调中观察或改变场上 `Agent`、`Team`、`Formation` 和场景状态。

## 心智模型

它不是可以随意调用的服务对象，也不是 Campaign 行为。它是挂在**当前场景推演**上的生命周期订阅者。Mission 工厂先创建行为，再由 `Mission.AddMissionBehavior` 写入 `Mission` 反向引用、依据 `BehaviorType` 分类，最后调用 `OnCreated`。行为在 Mission 结束或被显式移除前都可能收到回调。

因此，派生类应把短命的场上状态放在自身字段中，把 `Mission` 当作由宿主管理的上下文：加入后才能使用 `Mission`，移除后 `Mission` 会被置为 `null`。不要把行为当作可跨场景复用的单例，也不要在构造函数里假定 `Mission` 已存在。

## 何时用，何时不用

**适合使用：**

- 监听 `OnAgentCreated`、`OnAgentRemoved`、命中回调、队伍变化或部署完成等场上事件。
- 在 `OnPreMissionTick`、`OnMissionTick` 或 `OnFixedMissionTick` 中运行与场景同步的短逻辑。
- 在 `OnEndMissionInternal` / `OnRemoveBehavior` 中释放事件订阅、计时器和对原生对象的引用。

**不适合使用：**

- 要判定胜负、生成 `MissionResult` 或处理撤退/投降时；继承 [`MissionLogic`](../mission-ext/MissionLogic) 并实现对应契约。
- 要改变 Campaign 大地图实体时；回到 Campaign 行为和对应 Action，不要在 Mission tick 中直接改存档状态。
- 要监听 Mission 之外的全局生命周期时；不要用 `Mission.Current` 代替正确的 SubModule 或 Campaign 事件入口。

## `BehaviorType` 契约

`BehaviorType` 是抽象属性，必须由每个派生类实现。1.4.5 的枚举只有两个值：

| 值 | Mission 的处理 | 适用场景 |
|---|---|---|
| `MissionBehaviorType.Logic` | Mission 同时把行为转成 `MissionLogic` 放入 `MissionLogics` | 规则、胜负、结果、撤退/投降流程；通常由 `MissionLogic` 自动返回此值 |
| `MissionBehaviorType.Other` | Mission 放入普通行为集合 | 监听器、表现、统计、镜头或不参与结果判定的辅助逻辑 |

返回 `Logic` 却不继承 `MissionLogic` 会让 `as MissionLogic` 得到空值，破坏 Mission 的 Logic 集合。反过来，`MissionLogic` 已经固定返回 `MissionBehaviorType.Logic`，不要覆盖成 `Other`。

## 生命周期与回调分组

### 创建与启动

- `OnAfterMissionCreated`：Mission 创建后的扩展点，适合需要 Mission 已经存在但尚未进入运行循环的初始化。
- `OnBehaviorInitialize`：行为被 Mission 初始化时调用，适合注册由 Mission 或引擎维护的监听器。
- `OnCreated`：`AddMissionBehavior` 把行为加入集合并设置 `Mission` 后立即调用；动态添加行为时也会走这里。
- `EarlyStart`、`AfterStart`：场景进入启动阶段时的两个启动点。需要场景实体或队伍已准备好时，使用派生类实际要求的那个阶段，而不是在构造函数抢跑。

### 帧、Agent 与战斗事件

- `OnPreMissionTick`、`OnPreDisplayMissionTick`、`OnMissionTick`、`OnFixedMissionTick`：分别用于不同 tick 阶段；只在相应 Mission 生命周期内运行。每帧逻辑应有明确的时间预算。
- `OnAgentCreated`、`OnAgentBuild`、`OnAgentTeamChanged`、`OnAgentControllerSetToPlayer`：Agent 建立、装备/外观准备、队伍和控制权变化。
- `OnEarlyAgentRemoved`、`OnAgentRemoved`、`OnAgentDeleted`：移除流程的不同阶段。需要记录死亡原因时通常在 `OnAgentRemoved` 读取参数；不要把已移除 Agent 留到下一场 Mission。
- `OnMissileHit`、`OnMeleeHit`、`OnAgentHit`、`OnScoreHit`、`OnRegisterBlow`：命中与碰撞观察点。它们可能高频触发，不应在其中做昂贵的 Campaign 操作。

### Team、Formation 与场景交互

`OnAddTeam` / `AfterAddTeam`、`OnTeamDeployed`、`OnBattleSideDeployed`、`OnDeploymentFinished` / `OnAfterDeploymentFinished` 处理队伍和部署阶段；`OnAssignPlayerAsSergeantOfFormation` 处理编队角色变化。`OnFocusGained`、`OnObjectUsed`、`OnEntityRemoved`、`OnClearScene` 则连接交互对象与场景实体。它们的参数是当前 Mission 的对象，生命周期仍由 Mission 和 Agent 管理。

### 结束与移除

- `OnEndMissionInternal` 是公开的内部结束入口，基类会继续调用受保护的 `OnEndMission`。重写时要保留 `base.OnEndMissionInternal()`，除非明确知道自己接管了这一链路。
- `OnRemoveBehavior` 在 `Mission.RemoveMissionBehavior` 中先于集合移除调用；适合解除订阅和清理字段。
- 移除完成后，`Mission` 属性被设为 `null`。清理代码不能再通过该属性访问场景、Agent 或 Team。

## 关键成员与调用时机

| 成员 | 用途与边界 |
|---|---|
| `Mission` | 加入 Mission 后由宿主内部设置；是读取 `Agents`、`Teams`、`PlayerTeam` 等上下文的入口。移除后必为 `null`。 |
| `BehaviorType` | 决定行为进入普通集合还是 `MissionLogics`。它不是运行时开关，不能随 Mission 状态改变。 |
| `DebugInput` | 访问调试输入上下文；只应用于调试或开发期行为，不要把它当作玩家输入层的长期依赖。 |
| `OnAgentRemoved(...)` | 读取 `AgentState`、击杀者和 `KillingBlow` 的时机。回调结束后不要缓存 `affectedAgent` 作为跨帧对象。 |
| `GetCompassTargets()` | 默认返回 `null`；只有确实提供罗盘目标的行为才返回列表。不要把空列表误当作“由其他行为提供”。 |
| `OnMissionStateActivated` / `OnMissionStateDeactivated` / `OnMissionStateFinalized` | 连接 MissionState 的外层激活、停用和最终化；订阅必须在停用或移除时对称清理。 |

## 依赖关系

- **宿主与上游：** [`Mission`](./Mission) 通过 `MissionState.OpenNew` 获取行为工厂结果，并调用 `AddMissionBehavior`；[`Campaign`](../campaign/Campaign) 或 SandBox 的任务入口决定何时打开 Mission。
- **场上对象：** [`Agent`](./Agent) 会触发创建、命中、移除回调；[`Team`](../mission-ext/Team) 和 [`Formation`](./Formation) 提供部署、阵营与编队上下文。
- **规则下游：** [`MissionLogic`](../mission-ext/MissionLogic) 是 Logic 行为的专门化；它参与 `MissionLogics` 的结果检查、撤退和结束流程。
- **模块入口：** [`MBSubModuleBase`](../core/MBSubModuleBase) 是 mod 进入游戏生命周期的上游入口，但它不替代 Mission 内的行为注册。

## 风险与崩溃边界

1. **错误的 `BehaviorType`：** 普通行为返回 `Logic`、或 `MissionLogic` 被当成 `Other`，会导致 Logic 集合缺失、空转换或结果回调永远不触发。
2. **错误阶段访问对象：** 构造函数、启动前或 `OnRemoveBehavior` 之后访问 `Mission`、`Agent`、`Team`，可能得到空引用或已释放的引擎对象。
3. **Agent 死亡后持有引用：** `OnAgentRemoved` 适合立即读取状态并转成自己的数据；不要把 `Agent` 放进长期缓存，后续的删除/清理会使旧引用失效。
4. **结束回调重复清理：** `OnEndMissionInternal`、`OnRemoveBehavior` 和外部事件可能在相邻阶段都触发。清理应幂等，不能在第二次执行时注销不存在的句柄。
5. **tick 中修改错误层：** Mission tick 不是 Campaign 存档事务。把大地图对象直接改在高频回调中会造成状态不同步、坏档或下一场 Mission 读到旧引用。

## 真实注册示例

下面的结构对应 `SandBoxMissions.OpenBattleMission(MissionInitializerRecord rec)` 的真实工厂模式：`rec` 是该入口收到的 `MissionInitializerRecord`，行为由 `InitializeMissionBehaviorsDelegate` 返回，随后由引擎加入 Mission。

```csharp
using TaleWorlds.MountAndBlade;

public sealed class EnemyRemovalCounter : MissionBehavior
{
    private int _enemyKills;

    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

    public override void OnAgentRemoved(
        Agent affectedAgent,
        Agent affectorAgent,
        AgentState agentState,
        KillingBlow blow)
    {
        if (agentState == AgentState.Killed &&
            Mission.PlayerTeam != null &&
            affectedAgent.Team != null &&
            affectedAgent.Team.IsEnemyOf(Mission.PlayerTeam))
        {
            _enemyKills++;
        }
    }
}

public static Mission OpenBattleWithCounter(MissionInitializerRecord rec)
{
    return MissionState.OpenNew(
        "Battle",
        rec,
        (Mission mission) => new MissionBehavior[]
        {
            new EnemyRemovalCounter(),
            new BattleEndLogic()
        },
        true,
        true);
}
```

动态挂载也是真实使用方式：StoryMode 的 `AchievementsCampaignBehavior.OnMissionStarted(IMission obj)` 创建 `AchievementMissionLogic`，然后调用 `Mission.Current.AddMissionBehavior(...)`。这种方式适用于已有 Mission 已打开、但 mod 只在事件发生后才需要加入监听器的场景。

## 参见与双向导航

- ↑ 父级（模块索引）：[Mission 模块首页](./)
- ↔ 同级：[Mission](./Mission) · [Agent](./Agent) · [Formation](./Formation)
- ↓ 专门化子类：[MissionLogic](../mission-ext/MissionLogic)
- 上游入口：[Campaign](../campaign/Campaign) · [MBSubModuleBase](../core/MBSubModuleBase)
- 文档规范：[Doc Contract](../../architecture/doc-contract)
