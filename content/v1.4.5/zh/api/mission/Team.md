---
title: "Team"
description: "Mission 中一个战斗阵营的运行时容器：活动 Agent、Formation、阵营关系、指令控制器和 Team AI。"
---
# Team

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class Team : IMissionTeam`  
**Base:** `IMissionTeam`  
**Source:** `TaleWorlds.MountAndBlade/Team.cs`

## 一句话职责

它把当前 Mission 中同一阵营的 Agent、Formation、OrderController 和 Team AI 组织成可查询、可下令的边界，并协调活动成员、编队槽位、敌我关系与 Mission teardown 期间的原生资源清理。

## 心智模型

`Team` 是 **Mission-scoped 的阵营容器**，不是 Campaign 的 `Clan`、`Kingdom` 或 party 对象。

- Mission 创建队伍并把它们放入 `Mission.Teams`；用 `Mission.Current.PlayerTeam`、`PlayerEnemyTeam` 或遍历 `Teams` 获取，不要自己构造普通 Team。
- `TeamAgents` 表示登记过的 Agent，`ActiveAgents` 表示仍在活动战场上的 Agent；Agent 被移除时，Team 会先将其从活动集合停用。
- `FormationsIncludingEmpty` 和 `FormationsIncludingSpecialAndEmpty` 提供编队槽位；`GetFormation(FormationClass)` 用类别取得槽位。
- `Side` 是战场侧，`IsPlayerTeam`/`IsPlayerAlly` 是相对于当前 Mission 玩家队伍的关系；不要把它们当作战役阵营身份。

Team 的原生 `MBTeam`、Team AI、QuerySystem 和 OrderController 都依赖当前 Mission。Mission 结束会清理 Team 和编队，跨场景保存只能保存稳定的战役 ID 或结果值。

## 如何获取 Team

```csharp
Mission mission = Mission.Current;
if (mission == null || mission.CurrentState != Mission.State.Continuing)
{
    return;
}

Team player = mission.PlayerTeam;
Team enemy = mission.PlayerEnemyTeam;
foreach (Team team in mission.Teams)
{
    if (team.IsValid && team != player)
    {
        TeamSideEnum role = team.TeamSide;
        int activeCount = team.ActiveAgents.Count;
    }
}
```

`Team.Invalid` 是引擎提供的无效哨兵，不是可以下令或读取 Formation 的正常队伍。使用前应检查 `IsValid`，并避免 `Teams[0]` 这类固定下标。

## 何时用 / 何时不用

**适合：** 找玩家/敌方队伍、按阵营筛选 Agent、访问编队、设置敌我关系、读取 Team QuerySystem、或把订单交给当前 Team 的控制器。

**不适合：** 用 Team 代替 Campaign party、跨 Mission 缓存 `Team`、直接改战役关系，或绕过 OrderController 直接重建原生队伍。

## 依赖图

- 上游：[`Mission`](../Mission/) 创建、持有和清理 Team；[`Agent`](../Agent/) 通过 Team 进入场景。
- 内部：[`Formation`](../Formation/) 承载编队成员和 orders；`TeamAIComponent`、`TeamQuerySystem` 和 `DetachmentManager` 驱动战术。
- 下游：[`MissionBehavior`](../MissionBehavior/) 的 `OnAddTeam`/`AfterAddTeam` 监听队伍加入；[`MissionLogic`](../../mission-ext/MissionLogic/) 可读取 Team 状态判定胜负。
- 相关层：Campaign 的 `PartyBase`/`MobileParty` 是战役对象，不是 Team 的持久替代。

## 风险段

1. **无效 Team：** `Team.Invalid` 或 Mission 结束后的 `MBTeam` 不可用于 `GetFormation`、`ActiveAgents`、QuerySystem 或 orders。
2. **跨 Mission 缓存：** Mission teardown 会调用 Team 的结束逻辑、清理 Formation 和原生对象；清理后继续使用字段可能崩溃或读到无效句柄。
3. **错误阵营假设：** Attacker/Defender 可能各有 ally 队伍，集合顺序不保证；使用 `PlayerTeam`、`Side` 和 `IsEnemyOf`，不要猜索引。
4. **Agent 死亡时序：** `Mission.OnAgentRemoved` 先调用 `Team.DeactivateAgent`，再通知 behavior。死亡回调里统计活动人数时要接受该 Agent 已不在 `ActiveAgents`。
5. **破坏共享指令：** 直接替换 OrderController 或在同一帧重排所有 Formation 会干扰原版 Team AI；只在明确拥有控制权的 Mission 阶段下令。

## 成员说明

| 成员 | 何时使用 | 影响 |
|---|---|---|
| `Side`、`TeamSide` | 区分战场侧和玩家相对关系 | `TeamSide` 依赖当前 Mission 的 PlayerTeam |
| `IsPlayerTeam`、`IsPlayerAlly`、`IsAttacker`、`IsDefender` | 快速筛选战术对象 | 不是 Campaign faction 身份 |
| `Mission`、`TeamIndex`、`IsValid` | 检查所有权和 native 有效性 | 结束后不可继续使用 Team |
| `ActiveAgents`、`TeamAgents` | 分别读取活动成员和完整登记成员 | 移除、撤退、删除会改变集合 |
| `FormationsIncludingEmpty`、`FormationsIncludingSpecialAndEmpty` | 遍历可用或特殊编队槽位 | 不要依赖列表顺序表达战术语义；用 `FormationClass` |
| `GetFormation(FormationClass)` | 取得 Infantry、Ranged、Cavalry 等槽位 | 返回的 Formation 仍属于当前 Mission |
| `MasterOrderController`、`PlayerOrderController` | 通过现有指令系统下达 orders | 替换控制器会改变玩家/AI 输入路径 |
| `QuerySystem`、`TeamAI`、`DetachmentManager` | 战术查询、AI 和脱离/挂接管理 | 依赖编队和 Agent 集合处于有效阶段 |
| `IsEnemyOf`、`IsFriendOf`、`SetIsEnemyOf` | 读取或同步 Mission 内敌我关系 | 不等同于外交关系；服务端/回放还会有网络同步边界 |
| `GeneralsFormation`、`BodyGuardFormation`、`GeneralAgent` | 读取/设置特殊角色与编队关联 | 引用必须在当前 Mission 内维护 |

## 最小真实示例

### 按敌我关系读取活动 Agent

```csharp
public override void OnMissionTick(float dt)
{
    Mission mission = Mission.Current;
    Team player = mission?.PlayerTeam;
    if (player == null || !player.IsValid)
    {
        return;
    }

    foreach (Team team in mission.Teams)
    {
        if (!team.IsValid || !team.IsEnemyOf(player))
        {
            continue;
        }

        foreach (Agent agent in team.ActiveAgents)
        {
            if (agent.IsActive() && agent.IsHuman)
            {
                ObserveEnemy(agent.Position);
            }
        }
    }
}
```

### 从玩家队伍取得编队并下达 orders

```csharp
Mission mission = Mission.Current;
Team player = mission?.PlayerTeam;
if (player == null || !player.IsValid)
{
    return;
}

Formation infantry = player.GetFormation(FormationClass.Infantry);
if (infantry.CountOfUnits > 0)
{
    infantry.SetArrangementOrder(ArrangementOrder.ArrangementOrderShieldWall);
    infantry.SetMovementOrder(MovementOrder.MovementOrderCharge);
}
```

这里使用的是源码中 Team → Formation → Order 的实际链路；没有用 `Teams[0]`、人工构造 Team 或伪造战役阵营。

## 生命周期与清理

- Mission 添加 Team 后，会通知所有 `MissionBehavior.OnAddTeam`，随后调用 `AfterAddTeam`。
- Agent 加入/移除会改变 `TeamAgents`/`ActiveAgents`，并通知每个 Formation 的 AI。
- Mission 结束时调用 Team 的 `OnMissionEnded`，随后清理 Team、Formation 和 native `MBTeam`。
- 模组没有一个可跨 Mission 的 Team hook；需要清空缓存时，在自己的 `MissionBehavior.OnEndMissionInternal` 或 `OnRemoveBehavior` 中做。

## 跨版本提示

- 1.3.15 与 1.4.5 都支持从 `Mission.Current` 取得 Player/Enemy Team、从 `Team.GetFormation` 取得编队，并通过 Formation orders 控制。
- 1.4.5 把部分网络同步细节继续交给 OrderController 和 Mission 网络组件；跨版本代码应使用 Team/Formation 的公开入口，不要依赖 `MBTeam` 内部状态。

## 导航

- [↑ Mission API 模块](./)
- [↔ Mission](../Mission/)
- [↔ MissionBehavior](../MissionBehavior/)
- [下属 Formation](../Formation/) · [下属 Agent](../Agent/)
- [MissionLogic](../../mission-ext/MissionLogic/)
- [Campaign 层 Campaign](../../campaign/Campaign/)
