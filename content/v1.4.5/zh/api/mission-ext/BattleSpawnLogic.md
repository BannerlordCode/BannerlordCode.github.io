---
title: "BattleSpawnLogic"
description: "场景预处理器：按选中的 spawnpoint_set 标签保留那一组出生点实体，把其余同族实体从场景里删掉，只跑一次。"
---

# BattleSpawnLogic

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BattleSpawnLogic : MissionLogic`
**Base:** `TaleWorlds.MountAndBlade.MissionLogic`
**File:** `TaleWorlds.MountAndBlade.Source.Missions/BattleSpawnLogic.cs`

## 概述

`BattleSpawnLogic` 是一个一次性的**场景裁剪器**。任务场景里通常摆着多组出生点 GameEntity，它们共享同一个 `spawnpoint_set` 标签；本类在 `OnPreMissionTick` 第一次被调用时，保留传入标签对应的那一组，把同族里**其余**的实体 `Remove(76)` 掉。之后 `_isScenePrepared` 置 true，同一个任务里再也不会执行第二次。

它不创建任何东西、不动任何 [Agent](../../mission/Agent/)、不参与战斗逻辑——它只在任务开头把「没选中的出生点」从场景里物理删除，避免后续的系统去遍历到不该用的点。三个 `public const string` 标签（`BattleTag` / `SallyOutTag` / `ReliefForceAttackTag`）就是它支持的几种选取方式，由调用方在构造时传进来。

## 心智模型

把它当成**「加载完场景、正式开局之前的一次清场」**，心智模型是「一次性门闩」而不是「每帧检查」。四个推论：

第一，**它有 public 构造器，可以自己 new**（`BattleSpawnLogic(string selectedSpawnPointSetTag)`）。这是本桶里少数 modder 可以直接实例化的 `MissionLogic`——绝大多数 MissionLogic 由引擎在任务初始化时自行创建并挂载，而这个类的存在意义就是让**调用方决定用哪一组出生点**，所以它必须能被构造。全树构造点有 9 处：`BannerlordMissions.cs:185`（按 `isSallyOut` / `isReliefForceAttack` 三选一）、`SandBoxMissions.cs` 的 715 / 826 / 983 / 1076 / 1435 / 1572 行。

第二，**它依赖 `MissionBehavior` 的挂载顺序**。`OnPreMissionTick` 在 `MissionBehavior.cs:138` 是 `virtual`，属于任务 tick 的一个阶段；它拿到的 `base.Mission` 必须已经被赋值。自行 new 出来的实例若没有 `Mission.AddMissionBehavior`，`base.Mission` 会是 null，`OnPreMissionTick` 里的 `base.Mission.Scene` 直接 NRE。

第三，**找不到选中标签时静默什么都不做**。`FindWeakEntityWithTag` 返回 null 时，`if (weakGameEntity != null)` 整块被跳过，但 `_isScenePrepared` 照样置 true——**这一次性的机会就此用掉**，之后即使实体才被加载出来也不会再裁剪。

第四，**`Remove(76)` 的 76 是裸魔数**。它是 native 侧的删除原因标记，源码里没有具名常量；删掉的是「没被选中的那一组出生点 GameEntity」，不含骨骼与动画资源，纯粹是场景节点。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `BattleTag` | `public const string BattleTag = "battle_set"` | 常规会战的出生点组标签。场景里所有候选出生点都带公共标签 `spawnpoint_set`，而这一组额外带 `battle_set`——本类就是靠它把常规会战那组从公共集合里区分出来保留。 |
| `SallyOutTag` | `public const string SallyOutTag = "sally_out_set"` | 突围（sally out）用的出生点组。攻城任务里守方选择从城内冲出去时要用的那组，和 `BattleTag` 是互斥的两套点位。 |
| `ReliefForceAttackTag` | `public const string ReliefForceAttackTag = "relief_force_attack_set"` | 援军进攻用的出生点组。三个常量对应三种战场形态，调用方三选一传入。 |
| `selectedSpawnPointSetTag`（构造参数） | `public BattleSpawnLogic(string selectedSpawnPointSetTag)` | **唯一入口**。私有字段 `_selectedSpawnPointSetTag` 就是保留哪一组的标准，且是 `readonly`。传一个场景里不存在的字符串不会立刻报错，只会静默跳过裁剪——这是本类最常见的误用。 |
| `OnPreMissionTick` | `public override void OnPreMissionTick(float dt)` | 唯一的逻辑入口，`dt` 参数**完全没被用到**（裁剪是一次性的，与时间无关）。第一次调用时先取 `_selectedSpawnPointSetTag` 对应的 `WeakGameEntity`，再 `FindWeakEntitiesWithTag("spawnpoint_set")` 拿全量、`ToList()` 后 `Remove` 掉被保留的那个，然后逐个 `Remove(76)`。无论是否找到实体，末尾一律 `_isScenePrepared = true`。 |

## 真实示例

按会战形态三选一地构造并挂载（这是 `BannerlordMissions.cs:185` 附近的真实写法）：

```csharp
using System.Collections.Generic;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Source.Missions;

public bool IsPlayerAttacker;
public bool IsSallyOut;
public bool IsReliefForceAttack;

public IEnumerable<MissionBehavior> OpenBattleBehaviors(Mission mission)
{
    string tag = IsSallyOut
        ? BattleSpawnLogic.SallyOutTag
        : (IsReliefForceAttack ? BattleSpawnLogic.ReliefForceAttackTag : BattleSpawnLogic.BattleTag);
    return new MissionBehavior[] { new BattleSpawnLogic(tag) };
}
```

挂上去之后确认场景里到底留下了哪些出生点——这是排查「单位在错误的位置刷出来」的第一现场：

```csharp
using TaleWorlds.Engine;

Mission mission = Mission.Current;
int total = 0;
foreach (WeakGameEntity entity in mission.Scene.FindWeakEntitiesWithTag("spawnpoint_set"))
{
    total++;
}
WeakGameEntity kept = mission.Scene.FindWeakEntityWithTag(BattleSpawnLogic.BattleTag);
Debug.Print("spawnpoint sets left = " + total + ", kept battle_set = " + (kept != null), 0);
```

自定义一组出生点：给场景里某个自有 GameEntity 打上标签，然后用它当保留组：

```csharp
// 场景 XML 里的写法（示例）：<GameEntity tag="spawnpoint_set" .../> 与 <GameEntity tag="my_custom_set" .../>
Mission mission = Mission.Current;
mission.AddMissionBehavior(new BattleSpawnLogic("my_custom_set"));
```

判断本类有没有生效（注意：`_isScenePrepared` 是私有的，只能从结果反推）：

```csharp
Mission mission = Mission.Current;
WeakGameEntity kept = mission.Scene.FindWeakEntityWithTag("battle_set");
if (kept == null)
{
    Debug.Print("BattleSpawnLogic did not run, or the scene has no battle_set tag", 0);
}
```

## 风险与边界

- **只有一次机会。** `_isScenePrepared` 是 `private bool`，一旦置 true 永不复位。传入一个场景里不存在的标签会导致**整场任务都不裁剪**，且没有任何日志或断言。
- **可以自己 new，但不能只 new 不挂。** 构造器是 public 的（这一点上它区别于绝大多数 MissionLogic），可 `OnPreMissionTick` 依赖 `MissionBehavior.Mission`（`internal set`）。必须 `Mission.AddMissionBehavior(...)`，否则 `base.Mission` 为 null。
- **`Remove(76)` 是裸魔数。** 源码里没有具名常量解释 76 的语义，传错不会在 C# 侧报错，只会删掉不该删的实体。
- **删的是场景节点，不是资源。** 被 `Remove` 的是 GameEntity 本身；`FindWeakEntitiesWithTag` 返回的 `IEnumerable` 被 `.ToList()` 物化过，遍历期间不会因 native 侧集合变化而失效。
- **依赖场景标签的正确性。** 场景 XML 里如果出生点没打 `spawnpoint_set` 公共标签，本类只会保留指定的那一个、不会误删；但如果公共标签打得太宽（例如打成场景根节点），会把无关实体一起删掉。
- **`OnPreMissionTick` 的 `dt` 未使用。** 不要指望通过 dt 调节行为或做节流。
- **`MissionLogic` 家族通用约束。** 它继承 `MissionLogic` → [MissionBehavior](../../mission/MissionBehavior/)，进的是 `Logic` 队列（`MissionLogic.BehaviorType => MissionBehaviorType.Logic`），生命周期由任务管理，不跨任务存活、不存档。

## 依赖关系

- 基类链：继承 [MissionLogic](../MissionLogic/) → [MissionBehavior](../../mission/MissionBehavior/)，`OnPreMissionTick` 定义在 `MissionBehavior.cs:138`
- 场景依赖：[Scene](../../engine/Scene/) 的 `FindWeakEntityWithTag` / `FindWeakEntitiesWithTag` 与 [WeakGameEntity](../../engine/WeakGameEntity/) 的 `Remove(int)`，两个都在 `TaleWorlds.Engine` 程序集，属于 native 边界
- 构造调用方：`TaleWorlds.MountAndBlade/BannerlordMissions.cs:185` 与 `Modules.SandBox/SandBox/Sandbox/SandBoxMissions.cs`（715 / 826 / 983 / 1076 / 1435 / 1572）——都是把三个常量之一传进来
- 任务容器：[Mission](../../mission/Mission/) 的 `AddMissionBehavior` 是把它挂上任务树的唯一入口
- 相关但不同的类：[BattleSpawnModel](../BattleSpawnModel/) 决定「哪个 origin 分配到哪个阵型」，本类决定「场景里保留哪几组出生点实体」——一个是逻辑分配，一个是场景裁剪
- 桶首页：[mission-ext API 分区](../)
