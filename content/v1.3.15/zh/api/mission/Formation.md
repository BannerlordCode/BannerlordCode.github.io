---
title: "Formation"
description: "Team 内管理单位编组、队形、移动/射击 orders、查询缓存和拆分转移的 Mission 运行时对象。"
---
# Formation

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public sealed class Formation : IFormation`  
**Base:** `IFormation`  
**Source:** `TaleWorlds.MountAndBlade/Formation.cs`

## 一句话职责

它维护一个 Team 编队的成员集合、物理/逻辑类别、阵型和当前 orders，并把这些状态交给 Formation AI 和查询系统，同时在单位转移、脱离、重新编组和场景结束时保持相关缓存与原生状态一致。

## 心智模型

`Formation` 是 **Team 内的战术控制单元**，不是静态的士兵列表。

- Mission 创建 Team 后，Team 初始化 `FormationsIncludingEmpty` 和 `FormationsIncludingSpecialAndEmpty` 槽位；通过 `Team.GetFormation(FormationClass)` 获取编队。
- 编队同时维护成员安排、detached units、`FormationAI`、`FormationQuerySystem` 和 Movement/Arrangement/Form 等 orders。改变成员或 order 会使查询缓存失效并影响 AI。
- `FormationClass` 是槽位/逻辑类别；`LogicalClass` 与 `PhysicalClass` 可能因成员构成而变化，不要把当前类别当作永久职业标签。
- Mission 结束时 Team 清空编队并释放 native 依赖。Formation 只能在当前 Mission 内使用。

## 如何获取一个 Formation

```csharp
Mission mission = Mission.Current;
Team player = mission?.PlayerTeam;
if (player == null || !player.IsValid)
{
    return;
}

Formation infantry = player.GetFormation(FormationClass.Infantry);
if (infantry.CountOfUnits == 0)
{
    return;
}

int activeUnits = infantry.CountOfUnitsWithoutDetachedOnes;
WorldPosition median = infantry.CachedMedianPosition;
```

不要自己 `new Formation`，也不要从上一场 Mission 保存 Formation 引用。编队属于 Team 的当前 Mission 槽位。

## 编队类别

常用类别包括 `Infantry`、`Ranged`、`Cavalry` 和 `HorseArcher`。`FormationIndex` 是槽位，`LogicalClass` 反映战术逻辑分类，`PhysicalClass` 来自当前单位组成。特殊/空编队也可能存在，因此不能只用 `CountOfUnits > 0` 推断所有 Formation 槽位都已准备好。

## 何时用 / 何时不用

**适合：** 在部署完成或战斗 tick 中查询编队、下达移动/冲锋/阵型命令、按成员执行短操作、把单位转移到另一编队，或读取当前编队的空间统计。

**不适合：** 直接把每个 Agent 的位置当作长期阵形状态、在 Mission teardown 后访问编队、在 AI 正在 tick 时任意拆分/重排、或用 Formation 改 Campaign party 的人数和伤亡。

## 依赖图

- 上游：[`Mission`](../Mission/) 持有场景；[`Team`](../Team/) 创建、拥有和清理 Formation。
- 成员：[`Agent`](../Agent/) 通过 Team/Formation 关联进入编队。
- 回调：[`MissionBehavior`](../MissionBehavior/) 可在 `OnDeploymentFinished`、`OnMissionTick` 或 Agent 事件中访问编队。
- 下游：Formation AI、OrderController 和 FormationQuerySystem 根据 Formation 状态驱动移动、战术和查询；结束结果由 [`MissionLogic`](../../mission-ext/MissionLogic/) 读取。

## 风险与生命周期

1. **空/无效编队：** Team 为空、Mission 不在 `Continuing`，或 Formation 已被清理时，`QuerySystem`、orders 和 native 位置都可能不可用。
2. **缓存失效：** Add/Remove/Detach/Attach、Transfer 和 orders 会使查询/位置缓存重新计算；不要在修改前保存统计并假设仍准确。
3. **detached units：** `CountOfUnits`、`CountOfUnitsWithoutDetachedOnes` 和 `CountOfUnitsWithoutLooseDetachedOnes` 语义不同；用于战力或人数时必须明确是否排除 detached units。
4. **集合修改：** `ApplyActionOnEachUnit` 内不要直接进行会改变同一 Formation 成员集合的操作；先复制需要操作的成员，再做转移/移除。
5. **AI 冲突：** `SetControlledByAI`、orders 和 `FormationAI` 会互相影响；在部署/玩家控制/AI 控制阶段之外硬改，可能在下一次 AI tick 被覆盖。
6. **teardown：** Mission 结束会清 Team/Formation；不要把 `Formation`、`QuerySystem` 或 `CachedMedianPosition` 交给异步任务。

## 核心成员与时机

| 成员 | 用途 | 副作用或边界 |
|---|---|---|
| `FormationIndex`、`LogicalClass`、`PhysicalClass` | 识别槽位和当前类别 | 类别会随成员变化；不是 Campaign 类型 |
| `CountOfUnits`、`CountOfDetachedUnits`、`CountOfUnitsWithoutDetachedOnes` | 选择人数口径 | detached/loose detached 的排除规则不同 |
| `UnitsWithoutLooseDetachedOnes`、`DetachedUnits`、`LooseDetachedUnits` | 读取不同成员集合 | 成员变更时集合立即变化 |
| `QuerySystem`、`CachedAveragePosition`、`CachedMedianPosition` | 读取编队空间/战术统计 | 成员和 order 变化后缓存可能过期或重算 |
| `SetMovementOrder`、`SetArrangementOrder`、`SetFormOrder` | 设置移动、松紧和阵型 | 会改变 AI 当前 order 与查询缓存 |
| `SetRidingOrder`、`SetFiringOrder`、`SetFacingOrder` | 设置骑乘、射击和朝向 | 只在拥有当前控制权的阶段调用 |
| `SetTargetFormation` | 设定跟随/目标编队 | 目标必须属于当前有效 Mission |
| `SetControlledByAI` | 切换编队 AI 控制 | 可能覆盖玩家 order；需与 Team 控制权协调 |
| `ApplyActionOnEachUnit` | 对成员做短、只读或局部操作 | 回调内不要修改正在遍历的集合 |
| `TransferUnits`、`Split` | 将成员转移或拆分编队 | 会改变双方数量、类别、缓存和 AI 状态 |
| `AddUnit`、`RemoveUnit`、`DetachUnit`、`AttachUnit` | 管理成员安排 | 必须尊重 Agent/Formation 所属的当前 Mission |
| `Tick`、`Reset`、`OnDeploymentFinished` | AI、缓存与部署生命周期 | 通常由 Team/Mission 驱动，不应随意手动 Tick |

## 真实示例：移动当前玩家步兵编队

源码中的 `HideoutPhasedMissionController` 和 `HideoutMissionController` 使用 `CachedMedianPosition` 创建 Movement order。模组在自己的 Mission behavior 中可以采用同样的获取链：

```csharp
public override void OnDeploymentFinished()
{
    Mission mission = Mission.Current;
    Formation infantry = mission?.PlayerTeam?.GetFormation(FormationClass.Infantry);
    if (infantry == null || infantry.CountOfUnits == 0)
    {
        return;
    }

    WorldPosition target = infantry.CachedMedianPosition;
    target.SetVec2(infantry.CachedAveragePosition);
    infantry.SetMovementOrder(MovementOrder.MovementOrderMove(target));
}
```

## 真实示例：按成员类别下达 orders

```csharp
public override void OnMissionTick(float dt)
{
    Mission mission = Mission.Current;
    Team player = mission?.PlayerTeam;
    if (player == null || !player.IsValid)
    {
        return;
    }

    foreach (Formation formation in player.FormationsIncludingSpecialAndEmpty)
    {
        if (formation.CountOfUnits == 0)
        {
            continue;
        }

        if (formation.LogicalClass == FormationClass.Infantry ||
            formation.LogicalClass == FormationClass.HeavyInfantry)
        {
            formation.SetArrangementOrder(ArrangementOrder.ArrangementOrderShieldWall);
        }

        formation.SetMovementOrder(MovementOrder.MovementOrderCharge);
    }
}
```

这两个例子都通过 `Mission.Current → PlayerTeam → Formation` 取得真实对象，并使用公开 order 工厂；没有构造 Formation，也没有假设 Team 集合下标。

## 跨版本提示

- 1.3.15 与 1.4.5 的 Formation 获取和公开 order 入口保持一致：`Team.GetFormation`、`CachedMedianPosition`、`SetMovementOrder`、`SetArrangementOrder` 和成员计数器。
- 具体 AI 行为由 Mission 模式和 SandBox logic 决定；跨版本模组应避免依赖内部 `FormationAI` 字段，优先使用公开 Formation/Team API。

## 导航

- [↑ Mission API 模块](./)
- [↔ Mission](../Mission/)
- [↔ Team](../Team/)
- [↔ Agent](../Agent/) · [MissionBehavior](../MissionBehavior/)
- [MissionLogic](../../mission-ext/MissionLogic/)
- [Mission extension 类型索引](../../mission-ext/)
