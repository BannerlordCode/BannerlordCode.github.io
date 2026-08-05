---
title: "TeamQuerySystem"
description: "Team 持有的 Mission 作用域战场统计与战术快照系统：各指标按不同 QueryData 缓存时长懒刷新，不是持久化对象或保证实时的数据流。"
---
# TeamQuerySystem

**Namespace：** `TaleWorlds.MountAndBlade`
**Module：** `TaleWorlds.MountAndBlade`
**Type：** `public class TeamQuerySystem`
**Base：** 无
**源码：** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TeamQuerySystem.cs`

## 一句话职责

`TeamQuerySystem` 是 `Team.QuerySystem` 背后的 Mission 作用域战术快照：它为当前战斗懒惰聚合队伍/编队、位置、战力、攻城状态和死亡计数。

## 心智模型

应把它理解成挂在活跃 `Team` 上的缓存，而不是独立数据源。`Team.Initialize()` 在 `Mission.Current` 有效后创建它；构造函数保存该 Mission，并建立多个 `QueryData<T>` 读取器。属性按需计算，不同指标有不同 Mission 时间缓存寿命；普通 Mission tick 不会主动刷新全部查询。

`Team.Reset()` 会重置编队并替换整个 `TeamQuerySystem`。Mod 如果保存旧引用，得到的就是不会跟随新 Team 状态的过期对象，其死亡计数和缓存也不会迁移。Mission teardown 也是硬边界：`Mission.Current` 被清空前必须停止使用查询对象。

## 适合使用的场景

- 在活跃 Mission 回调中读取 `Mission.Current.AttackerTeam?.QuerySystem`、`Mission.Current.DefenderTeam?.QuerySystem` 或 `team.QuerySystem`。
- 用查询值选择/解释战术行为、显示战场状态，或比较 Team 与附近敌军的战力。
- 编队级数据使用 `Formation.QuerySystem`，队伍聚合数据使用 `Team.QuerySystem`。两者有不同缓存和失效路径。
- 只有当调用者确实拥有一次范围明确的状态变化时才调用 `Expire()`，并明确下一次读取会懒惰重算。

## 不适合使用的场景

- 普通 Mod 代码不要 `new TeamQuerySystem(team)`。构造函数会捕获当时的 `Mission.Current`，错误时机可能把查询绑定到错误或尚未初始化的 Mission。
- 不要把 `MemberCount` 或任何比例当作每帧真值。它们是有不同寿命的快照，`ExpireAfterUnitAddRemove()` 也是有意设计的部分失效。
- 不要用 `RegisterDeath()` 或 `RegisterDeathByRanged()` 伪造伤亡事件。游戏会从 `Agent.Die` 递增这些计数，消费者只应读取。
- 不要序列化本对象、`QueryData<T>` 或死亡计数。它们是战斗运行时状态，不是存档 schema。
- Mission teardown 后不要再读取任何缓存属性。`QueryData.Value` 会访问 `Mission.Current.CurrentTime`，被清空的 `Mission.Current` 是明确的生命周期边界。

## 真实获取路径

安全路径是从仍由 Mission 持有的 Team 开始：

```csharp
using TaleWorlds.MountAndBlade;

public sealed class TeamQueryReadoutBehavior : MissionBehavior
{
    public override void AfterStart()
    {
        Mission mission = Mission.Current;
        if (mission == null)
        {
            return;
        }

        Team team = mission.PlayerTeam;
        if (team == null)
        {
            return;
        }

        TeamQuerySystem query = team.QuerySystem;
        if (query == null)
        {
            return;
        }

        int units = query.MemberCount;
        float remainingPower = query.RemainingPowerRatio;
        int deaths = query.DeathCount;
    }
}
```

实例由 `Team` 持有；这个 behavior 只在 Mission 活跃期间读取它。编队级消费者应使用 `formation.QuerySystem`，需要队伍聚合时再从 `formation.Team.QuerySystem` 获取。

## 缓存语义

`QueryData<T>.Value` 会把当前 `Mission.Current.CurrentTime` 与过期时间比较。未过期时直接返回缓存；过期时执行 value function 并记录新的过期时间。`Expire()` 只把过期时间设为 0，不清除旧值；下一次 `.Value` 读取时才会重算。

当前实现中的 `GetCachedValue()` 和 `GetCachedValueUnlessTooOld()` 也不是新鲜度检查：它们不读取 Mission 时钟，直接返回已存值。不要把它们当作“保证最新”。同步组过期时还可能先计算组成员，再在同一次访问中重新计算请求属性，所以 getter 也不承诺每次只计算一次。

### Team 指标寿命

| 指标家族 | 代表成员 | 缓存寿命与含义 |
|---|---|---|
| 队伍数量 | `MemberCount`、`AllyUnitCount`、`EnemyUnitCount`、`AllyRangedUnitCount`、`AllCavalryUnitCount`、`EnemyRangedUnitCount` | 基础数量缓存 2 秒。`MemberCount` 汇总 `FormationsIncludingSpecialAndEmpty` 的 `CountOfUnits`，不是 `ActiveAgents`。后三个 int 是缓存比例乘缓存数量后截断的派生值，没有独立的 QueryData 缓存。 |
| 队伍/空间位置 | `AveragePosition`、`MedianPosition`、`AverageEnemyPosition` | 5 秒。没有可用敌方位置时，`AverageEnemyPosition` 可能使用攻城部署的 fallback。 |
| 目标与翼侧 | `MedianTargetFormation`、`MedianTargetFormationPosition`、`LeftFlankEdgePosition`、`RightFlankEdgePosition` | 目标选择约 1 秒；位置/翼侧约 5 秒。目标编队可能为 null。 |
| 兵种组成 | 自身、盟友、敌军的步兵/远程/骑兵/骑射比例 | 15 秒。按单位数加权，并纳入 Team 的 `Heroes` 分类。 |
| 战场战力 | `TeamPower`、`RemainingPowerRatio` | 约 5 秒。剩余战力会扣伤亡战力，并依赖 `IBattlePowerCalculationLogic` 与 `CasualtyHandler`。 |
| 总战力 | `TotalPowerRatio` | 10 秒，不扣伤亡战力。 |
| 攻城 | `InsideWallsRatio` | 10 秒。非攻城 Team 返回 `1`；攻城且无盟友时在导航网格计算前返回 `0`。 |
| 远程压制 | `MaxUnderRangedAttackRatio` | 当前计算约 3 秒，但结果保留旧缓存和新值中的较大者，是本查询对象生命周期内的高水位，不是干净的滚动窗口。 |

Team 自身会被 `Team.IsFriendOf` 判为 friend，因此“盟友”统计包含当前 Team，不等于“其他盟友 Team”。

## 主要查询分组

### 编成与位置

`MemberCount`、`AllyUnitCount` 和 `EnemyUnitCount` 与 Agent 数量不是同一概念：它们使用编队的 `CountOfUnits`，编队会计入 detached units。兵种比例按真实单位数量加权，而不是把每个编队的比例做简单平均；Team 的 Hero 分类也会进入组成结果。

`AveragePosition` 和 `MedianPosition` 总结本队编队。没有可用敌方编队位置时，`AverageEnemyPosition` 可能使用攻方的攻城部署估计，再按当前战斗模式的 fallback 逻辑处理。`MedianTargetFormation` 可能为 null，使用它的代码必须把目标编队当作可选结果。

`LeftFlankEdgePosition` 和 `RightFlankEdgePosition` 是编队行为消费的战术边界，不是稳定的地图地标，只能在当前 Mission 内读取。

### 战力与攻城状态

- `TeamPower` 汇总编队战力。
- `RemainingPowerRatio` 应用伤亡战力损失，将剩余敌我项逐项限制为非负，再按源码公式 `(friendly + 1) / (enemy + 1)` 比较。
- `TotalPowerRatio` 不扣伤亡损失，因此回答的问题不同于剩余战力。
- `InsideWallsRatio` 是攻城指标，不是通用“防御姿态”分数。非攻城固定为 `1`，攻城结果取决于导航/部署状态。
- `BattlePowerLogic` 和 `CasualtyHandler` 从 Mission behaviors 延迟获取。自定义 Mission 缺少相应 behavior 时，读取 `RemainingPowerRatio` 可能触发空引用。

### 远程压制与死亡

`MaxUnderRangedAttackRatio` 最多检查每个盟友 Team 的前 8 个编队，统计过去 10 个 Mission 秒内被远程命中且无盾的单位。由于实现保留旧缓存值与当前计算值中的最大值，`Expire()` 不会把这个高水位清零。

`DeathCount` 和 `DeathByRangedCount` 是普通整数，不是 `QueryData<T>`。`Agent.Die()` 在 Agent 有 Formation 时递增 Team 计数；`Blow.IsMissile` 为 true 时还递增远程计数。Mission 移除 Agent 本身不会递增它们。死亡登记发生在 Agent 离开 Formation 之前，因此短时间内可能与 `MemberCount` 不同步；源码也没有为重复调用提供自动去重契约。

### 局部战力查询

`GetLocalAllyPower(Vec2)` 和 `GetLocalEnemyPower(Vec2)` 每次都遍历当前编队，并按传入点计算距离相关战力；它们不是 `QueryData<T>` 快照。必须提供有效的战场位置，只在活跃 Mission 中调用，不要假设零点或无效坐标有额外保护。

## 失效机制

`Expire()` 使源码列出的 Team 查询值过期，并对当前非空编队调用 `Formation.QuerySystem.Expire()`。它不会直接使 `MedianTargetFormation` 选择器过期；该选择器按自己约一秒的寿命自然过期。它也不会清除缓存值、重置死亡计数或把查询变成实时数据流。

`ExpireAfterUnitAddRemove()` 是更窄的失效路径：它刷新成员数/位置/自身组成/战力/墙内比例/远程压制这一子集，但不会失效所有敌方数量、敌方组成、敌方平均位置或目标编队选择器。把它当成全量刷新，会让战术决定混用不同时间点的数据。

编队增减单位时，游戏已有路径会调用编队级和 Team 级对应失效；旗手更新等系统也会显式使编队查询缓存过期。Mod 应使用拥有该变化的现有路径，不要手工调用 `RegisterDeath*`，也不要无意义地反复强制所有缓存。

## 依赖关系

**上游**

- [`Team`](../Team) 创建、持有、重置并暴露 `QuerySystem`。
- [`Formation`](../../mission/Formation) 提供单位、战力、位置和编队查询缓存。
- `QueryData<T>` 提供基于 Mission 时间的懒缓存和同步组计算。
- [`Agent`](../../mission/Agent) 提供死亡登记调用点。
- `IBattlePowerCalculationLogic`、`CasualtyHandler` 和攻城部署逻辑提供衍生战力/位置输入。

**下游**

- [`TeamAIComponent`](../TeamAIComponent)、[`TeamAIGeneral`](../TeamAIGeneral)、[`BehaviorFlank`](../BehaviorFlank) 和 [`BehaviorSergeantMPMounted`](../BehaviorSergeantMPMounted) 使用数量、比例、位置和战力选择战斗行为。
- Mission Order of Battle 与 HUD view model 使用编队/队伍组成值显示战场信息。
- 攻城 AI 使用墙内和敌方位置；局部战力消费者使用不缓存的距离查询。
- [`BattlePowerCalculationLogic`](../BattlePowerCalculationLogic) 与 [`CasualtyHandler`](../CasualtyHandler) 为扣除伤亡的战力路径提供输入。

## 失败与存档安全边界

1. **Reset 后仍持有旧 Team：** `Team.Reset()` 创建新的查询对象，旧引用不会收到新的计数或缓存值。
2. **旧 Mission：** 构造函数保存一个 Mission，但 `QueryData.Value` 每次读取全局 `Mission.Current`。跨 Mission 引用可能把旧 Team 与新时钟或已清空时钟混在一起。
3. **Mission teardown：** 清理会移除 Agent、清空 Team，随后清空 `Mission.Current`。此后任何属性读取都可能访问不存在的 Mission 时钟。
4. **部分失效：** 单位移动后，`ExpireAfterUnitAddRemove()` 不会让所有敌方和目标指标立即最新。应依照记录的 freshness 边界做决定，而不是只看方法名。
5. **可选结果：** 没有敌人时会使用位置 fallback；`MedianTargetFormation` 可能为 null；编队和 Agent 可能在 teardown 时消失，使用前必须分支保护。
6. **缺少 behavior 依赖：** `BattlePowerLogic` 与 `CasualtyHandler` 是延迟 MissionBehavior 查找。对应 behavior 安装前不要读取扣除伤亡的比例。
7. **误用计数器：** 死亡计数是 `Agent.Die` 的运行时观察，不是公开伤亡账本。不要手动增加、持久化或把它当作去重后的最终伤亡数。
8. **远程高水位：** `MaxUnderRangedAttackRatio` 在当前十秒观察窗口已经下降后仍可能保持高值。不要把它当作严格的当前窗口测量。

## 版本说明

本文描述 1.4.5 的 `TaleWorlds.MountAndBlade` 实现。针对旧版本时应重新核对缓存寿命和 `ExpireAfterUnitAddRemove()` 的失效集合。稳定规则是：在活跃 Mission 内重新获取 `Team.QuerySystem`，绝不跨 Reset 或 teardown 保存/传递它。

## 导航

- [↑ 父级：Mission 扩展 API](../)
- [↔ 同级：Team](../Team)
- [↔ 同级：TeamAIComponent](../TeamAIComponent)
- [相关：Mission](../../mission/Mission)
- [相关：Formation](../../mission/Formation)
- [相关：Agent](../../mission/Agent)
