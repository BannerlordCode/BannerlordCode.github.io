---
title: "BattleDeploymentMissionController"
description: "会战布阵阶段的控制器：先关刷兵与增援，等双方布阵完成后把将军 Agent 传送到 FormationClass.NumberOfRegularFormations 的阵位，再重新打开增援。"
---

# BattleDeploymentMissionController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BattleDeploymentMissionController : DeploymentMissionController`
**Base:** `TaleWorlds.MountAndBlade.DeploymentMissionController`（抽象）
**File:** `TaleWorlds.MountAndBlade/BattleDeploymentMissionController.cs`

## 概述

`BattleDeploymentMissionController` 是会战「布阵（deployment）」阶段的行为控制器，72 行。它实现基类 [DeploymentMissionController](../DeploymentMissionController/) 的四个抽象钩子，把「布阵期不要刷兵、双方各自摆完阵后将军归位、布阵结束才开增援」这套时序固定下来。

具体做的四件事：一、`OnAfterStart` 里对 `BattleSideEnum` 的 0/1 两方都 `SetSpawnTroops(side, false)` 并 `SetReinforcementsSpawnEnabled(false)`，把自动刷兵和增援全关掉——布阵期不该有兵。二、每一方的 `OnSetupTeamsOfSide` 里 `SetSpawnTroops(side, true, enforceSpawning: true)` 打开该方刷兵、让 AI 停下（`SetupAgentAIStatesForSide`）、再通知 `OnSideDeploymentOver`。三、`OnSetupTeamsFinished` 里把 `Mission.IsTeleportingAgents` 打开，然后对每个有 `GeneralAgent` 的 [Team](../../mission/Team/) 取 `FormationClass.NumberOfRegularFormations`（值 8，也就是 `General`）的出生坐标系，把将军传过去。四、`AfterDeploymentFinished` 重新打开增援，并把 `BattleDeploymentHandler` 从任务里摘掉。

## 心智模型

把它当成**「部署阶段的状态机收敛器」**，四个推论：

第一，**它有 public 构造器，可以自己 new**（`BattleDeploymentMissionController(bool isPlayerAttacker)`）。这一点在本桶里不常见——绝大多数 MissionLogic 由引擎在任务初始化时创建并挂载，而这个类的构造参数（玩家是攻方还是守方）是 mod 必须自己定的。官方构造点有 6 处：`BannerlordMissions.cs:151`、`MultiplayerPracticeMissions.cs:76`（CustomBattle 与 Multiplayer 各一份）、`SandBoxMissions.cs:753` / `:860`。

第二，**它必须在 `DeploymentMissionController.OnBehaviorInitialize` 之后才有依赖**。两个字段（`MissionAgentSpawnLogic`、`_battleDeploymentHandler`）是在 `OnBehaviorInitialize` 里通过 `base.Mission.GetMissionBehavior<...>()` 取的。**如果自定义任务里没有挂 [DefaultBattleMissionAgentSpawnLogic](../DefaultBattleMissionAgentSpawnLogic/) 或 [BattleDeploymentHandler](../BattleDeploymentHandler/)，这两个字段就是 null**，随后 `OnAfterStart` 里对它们的调用直接 NRE。

第三，**`OnAfterStart` 用 `for (int i = 0; i < 2; i++)` 遍历 `BattleSideEnum`**，依赖的是枚举值 0=Attacker、1=Defender 的连续编号。这是硬编码的枚举序数，不是 `Enum.GetValues`。

第四，**传送将军只在阵型坐标有效时才做**。`OnSetupTeamsFinished` 里有一道守卫：`if (spawnPosition.GetNavMesh() != UIntPtr.Zero && spawnPosition.IsValid)`。这是因为 `GetFormationSpawnFrame` 的第五个形参默认 `useDefaultClassIfNotFound: true`，找不到对应阵型的部署计划时会回落到默认阵型，回落后的坐标仍可能落在 navmesh 之外。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `MissionAgentSpawnLogic` | `protected DefaultBattleMissionAgentSpawnLogic MissionAgentSpawnLogic`（字段） | 刷兵与增援的总闸门。四个钩子里所有「开/关刷兵」「开/关增援」「通知某方布阵结束」都是打给它。**`protected` 字段**，子类可直接访问，但它是**在 `OnBehaviorInitialize` 里赋值的**，在初始化完成前访问必为 null。 |
| `BattleDeploymentMissionController(bool isPlayerAttacker)` | 构造器 | 唯一的构造入口，转发给基类 `DeploymentMissionController(bool)`。基类据此算出 `PlayerSide` / `EnemySide` 两个 `protected` 字段（攻/守互换）。**没有无参构造**，`new` 时必须传 bool。 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 行为挂上任务时的初始化点。取两个依赖：`Mission.GetMissionBehavior<BattleDeploymentHandler>()` 与 `Mission.GetMissionBehavior<DefaultBattleMissionAgentSpawnLogic>()`。这是**字段被赋值的唯一时刻**，也是排查 null 引用的第一站。 |
| `OnAfterStart` | `protected override void OnAfterStart()` | 布阵阶段开始。`for (int i = 0; i < 2; i++)` 把两侧 `SetSpawnTroops((BattleSideEnum)i, spawnTroops: false)`，再 `SetReinforcementsSpawnEnabled(false)`。**注意基类 `AfterStart` 会先设 `Mission.AllowAiTicking = false`** 再调本方法。 |
| `OnSetupTeamsOfSide` | `protected override void OnSetupTeamsOfSide(BattleSideEnum battleSide)` | 单方布阵完成。`SetSpawnTroops(side, true, enforceSpawning: true)` 打开该方刷兵 → 基类 `SetupAgentAIStatesForSide(side)` 把该方 AI 全部 `SetIsAIPaused(true)` → `OnSideDeploymentOver(side)`。基类在 `SetupTeams()` 里会先对敌方再对玩家方各调一次。 |
| `OnSetupTeamsFinished` | `protected override void OnSetupTeamsFinished()` | 双方都摆完。`Mission.IsTeleportingAgents = true`，然后遍历 `Mission.Teams`，对每个 `team.GeneralAgent != null` 的队取 `GetFormationSpawnFrame(team, FormationClass.NumberOfRegularFormations, false, out spawnPosition, out spawnDirection)`，在 `spawnPosition.GetNavMesh() != UIntPtr.Zero && spawnPosition.IsValid` 时调 `TrySetFormationFrame(in spawnPosition, in spawnDirection)`。 |
| `BeforeDeploymentFinished` | `protected override void BeforeDeploymentFinished()` | 基类 `FinishDeployment()` 的第一步。只做一件事：`Mission.IsTeleportingAgents = false`。这个顺序保证传送开关在布阵收尾期间是关着的。 |
| `AfterDeploymentFinished` | `protected override void AfterDeploymentFinished()` | 布阵彻底结束（基类在 `Mission.Current.OnAfterDeploymentFinished()` 之后调）。`SetReinforcementsSpawnEnabled(true)` 重新开放增援，然后 `Mission.RemoveMissionBehavior(_battleDeploymentHandler)` 把部署 UI 处理器摘掉。**`_battleDeploymentHandler` 为 null 时这里会 NRE。** |

## 真实示例

按官方的方式把它加进会战的行为列表（`isPlayerAttacker` 必须与任务的 `BattleInitializationModel` 一致）：

```csharp
using System.Collections.Generic;
using TaleWorlds.MountAndBlade;

public bool IsPlayerAttacker;

public IEnumerable<MissionBehavior> OpenBattleBehaviors(Mission mission)
{
    return new MissionBehavior[]
    {
        new DefaultBattleMissionAgentSpawnLogic(),
        new BattleDeploymentHandler(),
        new BattleDeploymentMissionController(IsPlayerAttacker),
    };
}
```

部署阶段结束后，把将军重新摆到 `General` 阵位（照抄 `OnSetupTeamsFinished` 的核心逻辑，注意 `in` 形参不能漏）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Missions;

Mission mission = Mission.Current;
mission.IsTeleportingAgents = true;
foreach (Team team in mission.Teams)
{
    if (team.GeneralAgent == null)
    {
        continue;
    }
    mission.GetFormationSpawnFrame(team, FormationClass.NumberOfRegularFormations, isReinforcement: false, out WorldPosition spawnPosition, out Vec2 spawnDirection);
    if (spawnPosition.GetNavMesh() != UIntPtr.Zero && spawnPosition.IsValid)
    {
        team.GeneralAgent.TrySetFormationFrame(in spawnPosition, in spawnDirection);
    }
}
mission.IsTeleportingAgents = false;
```

在布阵阶段检查刷兵开关的状态——这是排查「布阵期为什么冒出兵来」的第一现场：

```csharp
using TaleWorlds.MountAndBlade;

Mission mission = Mission.Current;
DefaultBattleMissionAgentSpawnLogic spawn = mission.GetMissionBehavior<DefaultBattleMissionAgentSpawnLogic>();
if (spawn == null)
{
    Debug.Print("DefaultBattleMissionAgentSpawnLogic is missing, BattleDeploymentMissionController would NRE", 0);
    return;
}
Debug.Print("deployment handler still attached = " + (mission.GetMissionBehavior<BattleDeploymentHandler>() != null), 0);
Debug.Print("agent count during deployment = " + mission.Agents.Count, 0);
```

继承它改「布阵期开不开增援」这个策略（`MissionAgentSpawnLogic` 是 `protected`，子类可直接用）：

```csharp
using TaleWorlds.MountAndBlade;

public class LazyReinforcementDeploymentController : BattleDeploymentMissionController
{
    public LazyReinforcementDeploymentController(bool isPlayerAttacker)
        : base(isPlayerAttacker)
    {
    }

    protected override void AfterDeploymentFinished()
    {
        base.AfterDeploymentFinished();
        // base 里已经 SetReinforcementsSpawnEnabled(true) 并摘掉了 handler
        Debug.Print("reinforcement unlocked on both sides", 0);
    }
}
```

## 风险与边界

- **可以 `new`，但缺依赖就 NRE。** 构造器是 public 的（这一点区别于本桶多数 MissionLogic），可 `OnBehaviorInitialize` 依赖的 [DefaultBattleMissionAgentSpawnLogic](../DefaultBattleMissionAgentSpawnLogic/) 与 [BattleDeploymentHandler](../BattleDeploymentHandler/) 必须已挂上。**裸 `new` 一个而不 `Mission.AddMissionBehavior` 更糟**——`base.Mission` 是 null，连 `GetMissionBehavior` 都调不到。
- **`_battleDeploymentHandler` 在 `AfterDeploymentFinished` 里解引用。** 该行为没挂 handler 的话，部署结束时 NRE。
- **`OnAfterStart` 依赖 `BattleSideEnum` 的序数。** 硬编码 `0..1`。若某个 mod 扩展了这个枚举，多出来的值不会走 `SetSpawnTroops(false)`。
- **`FormationClass.NumberOfRegularFormations` 是 8，等于 `General`。** 这是布阵阶段传将军的位置约定，不是 `NumberOfAllFormations`（10）。
- **`IsTeleportingAgents` 是全局开关。** 覆写 `OnSetupTeamsFinished` / `BeforeDeploymentFinished` 时若忘了配对地开/关，整个后续战斗期间 Agent 都处于可传送状态。
- **传送到 navmesh 之外的坐标被静默跳过。** 守卫是 `spawnPosition.GetNavMesh() != UIntPtr.Zero && spawnPosition.IsValid`，不满足就直接不进 `TrySetFormationFrame`，**没有日志**。
- **只在部署阶段有效。** `FinishDeployment` 之后这套钩子不再被调，`MissionAgentSpawnLogic` 的开关状态就是最终状态。
- **MissionLogic 家族通用约束。** 继承 [MissionLogic](../MissionLogic/) → [MissionBehavior](../../mission/MissionBehavior/)，不存档、不跨任务存活。

## 依赖关系

- 基类链：[DeploymentMissionController](../DeploymentMissionController/)（抽象，四个 `protected abstract` 钩子在 `DeploymentMissionController.cs:138`–`:146`）→ [MissionLogic](../MissionLogic/) → [MissionBehavior](../../mission/MissionBehavior/)
- 刷兵与增援闸门：[DefaultBattleMissionAgentSpawnLogic](../DefaultBattleMissionAgentSpawnLogic/) 的 `SetSpawnTroops` / `SetReinforcementsSpawnEnabled` / `OnSideDeploymentOver`
- 部署 UI：[BattleDeploymentHandler](../BattleDeploymentHandler/)，`AfterDeploymentFinished` 里被 `Mission.RemoveMissionBehavior` 摘除
- 传送落点：[Mission](../../mission/Mission/) 的 `IsTeleportingAgents` / `GetFormationSpawnFrame`（`Mission.cs:3973`）/ [Team](../../mission/Team/) 的 `GeneralAgent`，[Agent](../../mission/Agent/) 的 `TrySetFormationFrame`（`Agent.cs:3892`，`in WorldPosition` + `in Vec2`）
- 阵型枚举：[FormationClass](../../core-extra/FormationClass/)（`NumberOfRegularFormations = 8` 与 `General = 8` 是同一个值）
- 构造调用方：`BannerlordMissions.cs:151`、`Modules.CustomBattle/.../MultiplayerPracticeMissions.cs:76`、`Modules.Multiplayer/.../MultiplayerPracticeMissions.cs:76`、`Modules.SandBox/SandBox/Sandbox/SandBoxMissions.cs:753` / `:860`
- 桶首页：[mission-ext API 分区](../)
