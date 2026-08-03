---
title: "Agent"
description: "Mission 中一个实时单位的 native-backed 表示：身份、队伍、编队、状态、生命和战斗控制。"
---
# Agent

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public sealed class Agent : DotNetObject, IAgent, IFocusable, IUsable, IFormationUnit, ITrackableBase`  
**Base:** `DotNetObject`  
**Source:** `TaleWorlds.MountAndBlade/Agent.cs`

## 一句话职责

它把场景中的一个人、坐骑或其他可控制单位连接到 Mission、Team、Formation、角色模板和原生战斗对象，并在创建、战斗、受伤、死亡、撤退到删除的短生命周期内维护这些关联。

## 心智模型

`Agent` 是 **单场景、native-backed 的战斗实体**，不是 `Hero` 或 `CharacterObject` 本身。

- Mission 的创建路径产生 Agent，随后通过 `Mission.Agents`/`AllAgents` 和 `OnAgentCreated` 暴露它；模组不应 `new Agent()`。
- `Character`/`Origin` 描述它来自哪个角色或队伍，`Team`/`Formation` 描述它当前在战场上的组织位置，`State`/`IsActive()` 描述它当前是否仍在活动。
- `Agent.Main` 是 `Mission.Current?.MainAgent` 的便捷入口。它只在有当前 Mission 和玩家 Agent 时有效。
- 受致命伤、撤退或被引擎移除后，Agent 会先从 Team 的活动集合中停用，再触发 behavior 的 removal 回调，最后经过 `OnRemove`/`OnDelete` 清理。不要跨 Mission 保存对象引用。

## 如何获取 Agent

```csharp
Mission mission = Mission.Current;
if (mission == null)
{
    return;
}

Agent main = mission.MainAgent;
Agent sameMain = Agent.Main;
Agent firstActive = mission.Agents.FirstOrDefault(agent => agent.IsActive());
if (main == null || main != sameMain || firstActive == null)
{
    return;
}

Team team = firstActive.Team;
Formation formation = firstActive.Formation;
```

新建单位应由 `Mission` 的 spawn/agent origin 流程完成；直接构造 `Agent` 会缺少 native 指针、装备、Team 和 Formation 绑定。

## 关键成员

| 成员 | 用途与时机 | 边界 |
|---|---|---|
| `Main`、`IsMainAgent` | 找玩家控制的当前 Agent | Mission 外为 `null`；主角被移除后会失效 |
| `Mission` | 取得该 Agent 所属的场景 | Mission teardown 后不可当作长期依赖 |
| `Team`、`Formation` | 找到当前阵营和编队 | Agent 被移除或换队时会变化；可能为 `null` |
| `Character`、`Origin` | 读取角色模板或 spawn 来源 | 它们不是 Mission 状态的替代物；保存时应保存稳定 ID/战役对象 |
| `State`、`IsActive()` | 判断 Active、Killed、Routed、Unconscious、Deleted 等阶段 | State 不是“仍可安全调用所有 native 方法”的保证 |
| `Health`、`HealthLimit` | 读取生命或在确认的 Mission 阶段进行战斗内调整 | 直接改生命不会替代战役层伤亡/存档流程 |
| `Position`、`Frame`、`MovementVelocity` | 读取实时位置和移动状态 | 结束或删除后的 native 对象上读取可能崩溃 |
| `Equipment`、`SpawnEquipment` | 读取当前/初始装备 | 装备可能在构建、换武器、掉落过程中改变 |
| `IsHuman`、`IsMount`、`IsHero` | 过滤单位类型 | `IsHero` 依赖 `Character`，不能把所有 Agent 当 Hero |
| `KillCount` | 读取或记录 Mission 内击杀计数 | 不等同于 Campaign 战果；结果写回需依赖 Mission 结果流程 |

## Agent 状态与死亡时序

`Mission.OnAgentRemoved` 的 1.4.5 实现顺序是：设置 `affectedAgent.State`，对攻击者增加击杀数，调用 `affectedAgent.Team.DeactivateAgent`，通知所有 `MissionBehavior.OnEarlyAgentRemoved` 和 `OnAgentRemoved`，从活动列表移除，再调用 `affectedAgent.OnRemove`。之后 `OnAgentDeleted` 会把对象从 Mission 的全部集合中移除并清理。

因此，死亡处理应放在 [`MissionBehavior.OnAgentRemoved`](../MissionBehavior/) 或其子类中：

```csharp
public sealed class AgentRemovalRecorder : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

    public override void OnAgentRemoved(
        Agent affectedAgent,
        Agent affectorAgent,
        AgentState agentState,
        KillingBlow blow)
    {
        bool killed = agentState == AgentState.Killed;
        int agentIndex = affectedAgent.Index;
        bool wasHero = affectedAgent.IsHero;
        BattleSideEnum side = affectedAgent.Team?.Side ?? BattleSideEnum.None;
        bool playerCausedIt = affectorAgent?.IsMainAgent ?? false;

        RecordRemoval(agentIndex, side, wasHero, killed, playerCausedIt);
    }

    private void RecordRemoval(
        int agentIndex,
        BattleSideEnum side,
        bool wasHero,
        bool killed,
        bool playerCausedIt)
    {
        // Store value data in a Mission-scoped record; do not store Agent.
    }
}
```

在回调中可以抽取 `Index`、`IsHero`、`Team.Side` 等值，但不要在 Mission 结束后用 `affectedAgent` 追踪角色，也不要把它当作战役 `Hero` 写入存档。

## 常用控制方法

| 方法 | 正确用途 | 风险 |
|---|---|---|
| `IsActive()` | 在 tick 或查询中排除非活动单位 | 通过检查后仍可能在同一帧被移除；短操作内使用 |
| `SetTargetPosition(ref WorldPosition)` | 为 AI/控制逻辑设置目标位置 | 必须使用当前 Scene 的有效 WorldPosition |
| `SetLookDirection(Vec3)` | 调整观察方向 | 只在 Agent 已构建且 Mission 仍运行时调用 |
| `TelegraphAttackToAgent(Agent)` | 让一个 Agent 对另一个目标显示攻击预告 | 目标必须属于当前有效 Mission |
| `SetWeaponAmountInSlot`、`WieldNextWeapon` | 调整战斗中的弹药/持 weapon 状态 | 不要把临时战斗装备写成存档装备 |
| `Die(Blow, KillInfo)` | 通过引擎的 Blow 流程让 Agent 死亡 | 会进入完整伤亡回调；不要在 `OnAgentRemoved` 里对同一对象重入调用 |
| `MakeVoice`、`SetActionChannel` | 播放语音或设置动画 action | 需要有效 native Agent 和当前 Mission 时间 |

## 何时用 / 何时不用

**适合：** 在 Mission tick 中读取位置/状态、给当前有效 Agent 下达即时战斗控制、在 `OnAgentCreated`/`OnAgentRemoved` 建立短期索引，以及在 Team/Formation 中筛选活动单位。

**不适合：** 把 Agent 当作 `Hero` 的持久对象、跨场景缓存 Agent、在战役层直接依赖 `Health` 计算永久伤亡、或用 Agent 字段替代 `*Action.Apply` 与战役事件。

## 依赖图

- 上游：[`Mission`](../Mission/) 创建、持有和移除 Agent；[`MissionBehavior`](../MissionBehavior/) 广播生命周期。
- 组织：[`Team`](../Team/) 管理阵营活动集合；[`Formation`](../Formation/) 管理编队成员和指令。
- 下游：`MissionLogic` 可用 `OnAgentRemoved` 收集结束条件；Campaign/SandBox behavior 把 Mission 结果写回战役。
- 关联模型：`CharacterObject`/`BasicCharacterObject` 提供角色模板；真正跨场景保存的身份应回到 Campaign 对象或存档系统。

## 风险与 teardown

1. **空 Mission：** `Agent.Main`、`Mission` 和 `Team` 在菜单、加载或结束阶段都可能为空。
2. **死亡后引用：** `OnAgentRemoved` 中 Agent 已被 Team 停用；`OnAgentDeleted` 后它不再属于 Mission 的全部集合。不要异步访问。
3. **队伍/编队变化：** `Team` 和 `Formation` 不是永久归属，换队、拆分、撤退和清理都会改变它们。
4. **native 句柄：** Position、Frame、Equipment 和控制方法最终触达原生对象；`IsActive()` 只能缩小窗口，不能跨帧保证对象仍有效。
5. **战役一致性：** 直接设置战斗属性不等于安全地修改 Hero、Party 或伤亡存档；战役写回要放在 Mission 结果和正确 Action 时序之后。

## 跨版本提示

- 1.3.15 与 1.4.5 都提供 `Agent.Main`、`Mission.Current`、`Team`、`Formation`、`State` 和 `IsActive()` 这条常用访问路径。
- 1.4.5 源码把 `OnAgentRemoved`、`OnRemove`、`OnDelete` 的边界展示得更清楚；1.3.15 代码也应遵守相同的短寿命引用规则。

## 导航

- [↑ Mission API 模块](./)
- [↔ Mission](../Mission/)
- [↔ MissionBehavior](../MissionBehavior/)
- [所属 Team](../Team/) · [所属 Formation](../Formation/)
- [MissionLogic](../../mission-ext/MissionLogic/)
- [战役层 Campaign](../../campaign/Campaign/)
