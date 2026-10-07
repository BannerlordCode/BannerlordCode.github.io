---
title: "BattleDeploymentMissionController"
description: "布阵阶段的刷兵开关：部署全程把刷兵关掉，只在某一方部署结束时才给它打开；增援则要等整个部署结束才解禁。同时把双方主将瞬移到首位阵型的 frame。"
---

# BattleDeploymentMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleDeploymentMissionController : DeploymentMissionController`
**Base:** `DeploymentMissionController`
**File:** `TaleWorlds.MountAndBlade/BattleDeploymentMissionController.cs`

## 概述

全文 72 行、8 个成员，是 [DeploymentMissionController](../DeploymentMissionController/) 的具体实现。它在整个布阵（deployment）期间做两件事。

**一、管刷兵开关。** `OnAfterStart` 用一个两轮循环把两个 `BattleSideEnum` 的刷兵全关掉（`BattleDeploymentMissionController.cs:34`），再把增援也关掉（`BattleDeploymentMissionController.cs:36`）。`OnSetupTeamsOfSide` 在**每一方的部署各自结束**时只把**那一方**的刷兵打开（`BattleDeploymentMissionController.cs:41`）。增援则一直等到 `AfterDeploymentFinished` 才解禁（`BattleDeploymentMissionController.cs:69`）。

**二、摆主将。** `OnSetupTeamsFinished` 把瞬移总开关置真（`BattleDeploymentMissionController.cs:48`），然后对每个有主将的队伍算出首位阵型的 frame（`BattleDeploymentMissionController.cs:53`）。

**校验过 navmesh 之后把主将瞬移过去**（`BattleDeploymentMissionController.cs:56`）。

`BeforeDeploymentFinished` 负责把同一个开关置回 false（`BattleDeploymentMissionController.cs:64`）。

钩子顺序由基类写死。敌方先被布置（`DeploymentMissionController.cs:185`），我方后被布置（`DeploymentMissionController.cs:191`），两方都摆完之后才轮到收尾钩子（`DeploymentMissionController.cs:192`）。**也就是说 `OnSetupTeamsFinished` 跑在两方都摆完之后——这正是挪主将的时机。**

构造点实测 5 处（CustomBattle 与 Multiplayer 各带一份 `MultiplayerPracticeMissions.cs:76`），逐个列在文末「依赖关系」里。

## 心智模型

把它当成**「部署期间的总闸 + 主将就位钩」**，而不是「部署控制器」。四条推论：

第一，**布阵期间你手动 spawn 兵是不生效的。** 刷兵开关在 `BattleDeploymentMissionController.cs:34` 被两边一起关掉，一直关到每方的 `OnSetupTeamsOfSide` 才逐边打开（`BattleDeploymentMissionController.cs:41`）。**在部署还没走完时调 [Mission](../../mission/Mission/) 的生成接口，出来的兵要么被吞掉、要么走不到 spawn logic。** 想在部署阶段加兵，要么覆写 `OnAfterStart`，要么等 `AfterDeploymentFinished`。

第二，**增援比初始兵解得更晚。** 增援闸在 `BattleDeploymentMissionController.cs:36` 关掉，在 `BattleDeploymentMissionController.cs:69` 恢复。也就是说**初始兵在部署中后期就能刷，增援必须等部署彻底结束。** 两者不是同一个闸。

第三，**主将的落点是「首位常规阵型」的 frame，不是玩家指定的阵型。** 参数写死是 `FormationClass.NumberOfRegularFormations`（`BattleDeploymentMissionController.cs:53`），增援标志传的是 false。而且要先过 navmesh 合法性这一关（`BattleDeploymentMissionController.cs:54`）——**navmesh 上没有合法点就跳过，主将留在原地，不报错。** 在传送门密集或悬崖边的自定义地图上，这是「主将莫名站错位置」的成因。

第四，**它拿了两个外部 behavior 引用，但只在初始化时取一次。** 部署 handler 的取值发生在 `BattleDeploymentMissionController.cs:21`。刷兵逻辑的取值发生在 `BattleDeploymentMissionController.cs:22`。**任何一个取不到就是 null，而后面 `OnAfterStart` 立刻解引用它 —— 不检查、不报错、直接 NullReferenceException。** 所以 mission behavior 列表里必须同时挂上这两个。

还有一条边界：`OnRemoveBehavior`（`BattleDeploymentMissionController.cs:25`）**只调了 base，什么都不恢复**。如果 mission 在部署中途被拆掉，**刷兵开关停在关闭状态，AI 停摆状态也不回滚。** 而部署 handler 要到 `BattleDeploymentMissionController.cs:70` 才被移除——中途拆掉的话它会泄漏在 mission 上。

## 如何使用

**拿法：** `new` 出来加进 mission behavior 列表，**且必须和那两兄弟一起挂**：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

List<MissionBehavior> behaviors = new MissionBehavior[]
{
    // 三个必须同场：本类在初始化时取后两个（BattleDeploymentMissionController.cs:21 和 :22），
    // 取不到就是 null，OnAfterStart 立刻炸。
    new BattleDeploymentHandler(),
    new DefaultBattleMissionAgentSpawnLogic(suppliers, BattleSideEnum.Defender,
                                            Mission.BattleSizeType.Siege),
    new BattleDeploymentMissionController(isPlayerAttacker: true)
};
```

想改「哪一方先刷兵」，覆写唯一的那个 hook 而不是去动 spawn logic：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyModDeploymentController : BattleDeploymentMissionController
{
    private DefaultBattleMissionAgentSpawnLogic _spawnLogic;

    public MyModDeploymentController(bool isPlayerAttacker)
        : base(isPlayerAttacker)
    {
    }

    public override void OnBehaviorInitialize()
    {
        base.OnBehaviorInitialize();

        // base 里已经取过一次，这里复用同一个实例，别再 GetMissionBehavior
        _spawnLogic = Mission.GetMissionBehavior<DefaultBattleMissionAgentSpawnLogic>();
    }

    protected override void OnSetupTeamsOfSide(BattleSideEnum battleSide)
    {
        // 基类实现在 BattleDeploymentMissionController.cs:39-44：
        // 打开这一方的刷兵 -> 设 AI 状态 -> 通知该方部署结束
        base.OnSetupTeamsOfSide(battleSide);

        // 你的额外逻辑放在这里 —— 此时该方已经能刷兵了
        if (battleSide == BattleSideEnum.Defender)
        {
            _spawnLogic.SetSpawnTroops(battleSide, spawnTroops: true, enforceSpawning: true);
        }
    }
}
```

诊断「部署完兵为什么不出来」：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static void ReportDeploymentSpawnGates()
{
    BattleDeploymentMissionController controller =
        Mission.Current.GetMissionBehavior<BattleDeploymentMissionController>();

    if (controller == null)
    {
        MBDebug.Print("BattleDeploymentMissionController not in mission; spawn gates untouched", 0);
        return;
    }

    DefaultBattleMissionAgentSpawnLogic spawn =
        Mission.Current.GetMissionBehavior<DefaultBattleMissionAgentSpawnLogic>();

    // spawn 为 null 就意味着 BattleDeploymentMissionController.cs:22 什么都没取到，
    // 而 OnAfterStart 会对它解引用 —— 这是最常见的 NRE 来源。
    MBDebug.Print("spawn logic present = " + (spawn != null), 0);
}
```

手动挪主将（看清它到底做了什么）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static void MoveGeneralToFront(Team team)
{
    if (team.GeneralAgent == null)
    {
        return;   // 与 BattleDeploymentMissionController.cs:51 的判断一致
    }

    // 与 BattleDeploymentMissionController.cs:53 同参
    Mission.Current.GetFormationSpawnFrame(
        team,
        FormationClass.NumberOfRegularFormations,
        isReinforcement: false,
        out WorldPosition spawnPosition,
        out Vec2 spawnDirection);

    // 与 BattleDeploymentMissionController.cs:54 同一道校验
    if (spawnPosition.GetNavMesh() == UIntPtr.Zero || !spawnPosition.IsValid)
    {
        MBDebug.Print("no valid navmesh spawn frame for team " + team.Tier + "; general stays put", 0);
        return;
    }

    // 与 BattleDeploymentMissionController.cs:56 同一句；形参带 in，调用处也要写 in
    team.GeneralAgent.TrySetFormationFrame(in spawnPosition, in spawnDirection);
}
```

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 类声明 | `public class BattleDeploymentMissionController : DeploymentMissionController`（`BattleDeploymentMissionController.cs:7`） | 非抽象，构造函数只有一个 `bool`。文件头的 `using` 里没有 LINQ 命名空间，说明**本类没做 LINQ**。 |
| `MissionAgentSpawnLogic` | `protected DefaultBattleMissionAgentSpawnLogic MissionAgentSpawnLogic`（`BattleDeploymentMissionController.cs:9`） | **`protected` 字段**，派生类可直接用。赋值在 `BattleDeploymentMissionController.cs:22`，**只在 `OnBehaviorInitialize` 里取一次**，之后整局复用同一个实例。 |
| `_battleDeploymentHandler` | `private BattleDeploymentHandler _battleDeploymentHandler`（`BattleDeploymentMissionController.cs:11`） | **`private`**，外部与派生类都拿不到。赋值在 `BattleDeploymentMissionController.cs:21`，唯一用途是在 `BattleDeploymentMissionController.cs:70` 把自己从 mission 上摘掉。 |
| 构造函数 | `public BattleDeploymentMissionController(bool isPlayerAttacker) : base(isPlayerAttacker)`（`BattleDeploymentMissionController.cs:13`） | 空体，转手交给基类。基类据此算出敌方是哪一边（`DeploymentMissionController.cs:30`），**这决定了 `SetupTeams` 里哪一方先被布置。** |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()`（`BattleDeploymentMissionController.cs:18`） | 先调 base，再取两个外部 behavior。**这是本类唯一的公开 override；取不到就是 null，后面直接解引用。** |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()`（`BattleDeploymentMissionController.cs:25`） | **只调 base，不做任何状态恢复。** 刷兵闸与瞬移开关都不回滚，部署 handler 也不在这里移除。 |
| `OnAfterStart` | `protected override void OnAfterStart()`（`BattleDeploymentMissionController.cs:30`） | 基类的抽象钩子之一。调用点是基类的启动回调（`DeploymentMissionController.cs:33`），在关掉 AI tick 之后（`DeploymentMissionController.cs:35`）。**本实现把两边刷兵关掉 + 增援关掉。** |
| `OnSetupTeamsOfSide` | `protected override void OnSetupTeamsOfSide(BattleSideEnum battleSide)`（`BattleDeploymentMissionController.cs:39`） | 基类的抽象钩子之一（声明在 `DeploymentMissionController.cs:140`）。**每一方的部署结束时各调一次**，本实现开这一方的刷兵、设 AI 状态、通知部署结束。 |
| `OnSetupTeamsFinished` | `protected override void OnSetupTeamsFinished()`（`BattleDeploymentMissionController.cs:46`） | 基类的抽象钩子之一（声明在 `DeploymentMissionController.cs:142`），**在两方都摆完之后**才被调用（`DeploymentMissionController.cs:192`）。本实现挪主将。 |
| `BeforeDeploymentFinished` | `protected override void BeforeDeploymentFinished()`（`BattleDeploymentMissionController.cs:62`） | 基类的抽象钩子之一（声明在 `DeploymentMissionController.cs:144`）。由基类的收尾流程第一句调用（`DeploymentMissionController.cs:47`），该流程本身在 `DeploymentMissionController.cs:45`。**本实现只做一件事：把瞬移开关置回 false。** |
| `AfterDeploymentFinished` | `protected override void AfterDeploymentFinished()`（`BattleDeploymentMissionController.cs:67`） | 基类的抽象钩子之一（声明在 `DeploymentMissionController.cs:146`），调用点在 `DeploymentMissionController.cs:86`。本实现解禁增援并移除部署 handler。 |

## 真实示例

完整的最小挂载（把三个兄弟 behavior 放一起）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static void BuildBattleMissionBehaviors(
    IMissionTroopSupplier[] suppliers,
    bool isPlayerAttacker,
    List<MissionBehavior> into)
{
    // 1) 先挂 handler —— 本类在 BattleDeploymentMissionController.cs:21 取它，
    //    并在 BattleDeploymentMissionController.cs:70 把它摘掉
    into.Add(new BattleDeploymentHandler());

    // 2) 再挂 spawn logic —— 本类在 BattleDeploymentMissionController.cs:22 取它
    into.Add(new DefaultBattleMissionAgentSpawnLogic(
        suppliers, BattleSideEnum.Defender, Mission.BattleSizeType.Siege));

    // 3) 最后挂本类
    into.Add(new BattleDeploymentMissionController(isPlayerAttacker));
}
```

给主将换落点（覆写而不是重写整套瞬移）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyModGeneralPlacementController : BattleDeploymentMissionController
{
    public MyModGeneralPlacementController(bool isPlayerAttacker)
        : base(isPlayerAttacker)
    {
    }

    protected override void OnSetupTeamsFinished()
    {
        // 先让基类按默认规则（首位常规阵型）摆一遍
        base.OnSetupTeamsFinished();

        // 再把己方主将挪到倒数第二个阵型的首位
        Team myTeam = Mission.Current.MainTeam;
        if (myTeam?.GeneralAgent != null)
        {
            Mission.Current.GetFormationSpawnFrame(
                myTeam,
                formationClass: FormationClass.NumberOfRegularFormations - 1,
                isReinforcement: false,
                out WorldPosition pos,
                out Vec2 dir,
                useDefaultClassIfNotFound: true);   // 见 Mission.cs:3973 的签名

            if (pos.GetNavMesh() != UIntPtr.Zero && pos.IsValid)
            {
                myTeam.GeneralAgent.TrySetFormationFrame(in pos, in dir);
            }
        }
    }
}
```

想在部署阶段塞一批立即参战的兵——注意要挑对钩子：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyModEarlyReinforcementController : BattleDeploymentMissionController
{
    private DefaultBattleMissionAgentSpawnLogic _spawnLogic;

    public MyModEarlyReinforcementController(bool isPlayerAttacker)
        : base(isPlayerAttacker)
    {
    }

    public override void OnBehaviorInitialize()
    {
        base.OnBehaviorInitialize();
        _spawnLogic = Mission.GetMissionBehavior<DefaultBattleMissionAgentSpawnLogic>();
    }

    protected override void OnSetupTeamsFinished()
    {
        // 基类在这里挪主将（BattleDeploymentMissionController.cs:46-60）
        base.OnSetupTeamsFinished();

        // ⚠ 增援闸此时【仍然是关的】（BattleDeploymentMissionController.cs:36 关、
        //    BattleDeploymentMissionController.cs:69 才开）。
        //    提前打开会破坏部署阶段的兵力预算。
        // _spawnLogic.SetReinforcementsSpawnEnabled(true);   // 别这么写
    }
}
```

## 风险与边界

- **部署期间刷兵是关的**（`BattleDeploymentMissionController.cs:34`），手动 spawn 不生效。
- **增援比初始兵解得更晚**（关在 `BattleDeploymentMissionController.cs:36`，开在 `BattleDeploymentMissionController.cs:69`）。混用这两个闸会破坏部署阶段的兵力预算。
- **外部 behavior 取不到就是 null**（`BattleDeploymentMissionController.cs:21`）。那个启动回调立刻解引用它 → NullReferenceException。**三个 behavior 必须同挂。**
- **主将落点写死是首位常规阵型**（`BattleDeploymentMissionController.cs:53`）。想换就覆写。
- **navmesh 校验失败会静默跳过**（`BattleDeploymentMissionController.cs:54`）。主将留在原地，不报错。
- **`OnRemoveBehavior` 不恢复任何状态**（`BattleDeploymentMissionController.cs:25`）。中途拆 mission 会留下关闭的刷兵闸。
- **部署 handler 只在收尾时移除**（`BattleDeploymentMissionController.cs:70`）。中途拆掉会泄漏。
- **瞬移开关是 mission 级全局**（`Mission.cs:1165`）。本类在 `BattleDeploymentMissionController.cs:48` 置真、在 `BattleDeploymentMissionController.cs:64` 置假；你的代码在这段窗口里改它会和主将瞬移打架。
- **`TrySetFormationFrame` 形参带 `in`**，调用处也必须写 `in`（声明在 `Agent.cs:3892`）。
- **钩子顺序由基类写死。** 敌方先我方后（`DeploymentMissionController.cs:185`），收尾最后（`DeploymentMissionController.cs:192`）。**改不了，只能覆写后在 `base` 前后插逻辑。**
- **敌方是哪一边由构造参数反推**（`DeploymentMissionController.cs:30`）。传错这个 bool 会让「敌方先摆」变成「我方先摆」。

## 依赖关系

- 本类：`BattleDeploymentMissionController.cs:7` 类头
- 本类的两个字段：`BattleDeploymentMissionController.cs:9` 与 `BattleDeploymentMissionController.cs:11`
- 本类的构造与初始化：`BattleDeploymentMissionController.cs:13` 与 `BattleDeploymentMissionController.cs:18`
- 本类的五个部署钩子：`BattleDeploymentMissionController.cs:30`、`:39`、`:46`、`:62`、`:67`（这一句指的都是同一个文件）
- 基类：[DeploymentMissionController](../DeploymentMissionController/)
- 基类的启动回调：`DeploymentMissionController.cs:33`
- 基类的收尾流程：`DeploymentMissionController.cs:45`
- 基类的敌方推导：`DeploymentMissionController.cs:30`
- 基类的布阵流程：`DeploymentMissionController.cs:180`
- 基类的五个抽象声明：`DeploymentMissionController.cs:138`、`:140`、`:142`、`:144`、`:146`（这一句指的都是同一个文件）
- 刷兵逻辑：[DefaultBattleMissionAgentSpawnLogic](../DefaultBattleMissionAgentSpawnLogic/)，它的 `SetSpawnTroops` 声明在 `DefaultBattleMissionAgentSpawnLogic.cs:212`
- 同一协作对象上的 `OnSideDeploymentOver`：声明在 `DefaultBattleMissionAgentSpawnLogic.cs:241`
- 同一协作对象上的 `SetReinforcementsSpawnEnabled`：声明在 `DefaultBattleMissionAgentSpawnLogic.cs:277`
- 另一个协作对象：[BattleDeploymentHandler](../BattleDeploymentHandler/)
- 瞬移总开关：[Mission](../../mission/Mission/) 上的 `IsTeleportingAgents`，声明在 `Mission.cs:1165`
- 阵型落点计算：同一个类上的 `GetFormationSpawnFrame`，声明在 `Mission.cs:3973`
- 主将瞬移：[Agent](../../mission/Agent/) 的 `TrySetFormationFrame`，声明在 `Agent.cs:3892`
-  troop 来源契约：[IMissionTroopSupplier](../../core-extra/IMissionTroopSupplier/)
- 落点类型：[WorldPosition](../../engine/WorldPosition/)
- 5 个构造点之一：[BannerlordMissions](../BannerlordMissions/) 的 `BannerlordMissions.cs:151`
- 5 个构造点之二：[SandBoxMissions](../../campaign-ext/SandBoxMissions/) 的 `SandBoxMissions.cs:753`
- 5 个构造点之三：同一文件的 `SandBoxMissions.cs:860`
- 5 个构造点之四五：CustomBattle 与 Multiplayer 各自的 `MultiplayerPracticeMissions.cs:76`
- 部署阶段还会挂：[BattleSpawnLogic](../BattleSpawnLogic/)（出生点集清理）
- 桶首页：[mission-ext API 分区](../)