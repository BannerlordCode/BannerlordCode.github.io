---
title: "BattleSpawnModel"
description: "战斗刷兵分配模型：把一批 IAgentOriginBase 映射成「阵型下标」的列表，分初始部署与增援两次调用，是战役刷兵编成的替换点。"
---

# BattleSpawnModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class BattleSpawnModel : MBGameModel<BattleSpawnModel>`
**Base:** `TaleWorlds.Core.MBGameModel<BattleSpawnModel>`
**File:** `TaleWorlds.MountAndBlade.ComponentInterfaces/BattleSpawnModel.cs`

## 概述

`BattleSpawnModel` 全文 19 行，回答一个问题：**这一批「士兵来源」各自应该编进哪支阵型？** 它的两个抽象方法都返回 `List<(IAgentOriginBase origin, int formationIndex)>`——`origin` 是这批兵里的一个来源（对应 campaign 或 multiplayer 的一支部队），`formationIndex` 是它要进的阵型下标（`FormationClass` 的数值）。两个方法分别是 `GetInitialSpawnAssignments`（开局部署）和 `GetReinforcementAssignments`（增援波次）。

它不决定人数、不决定位置、不决定装备——那些在 [Mission](../../mission/Mission/) 的刷兵上下文里。它只做**编成分配**这一步，而且是纯函数式的（没有 `ref`、没有副作用声明）。**这是 `[SandBox] GameComponents` 的替换点**：全树三个实现——`CustomBattleSpawnModel`、`MultiplayerBattleSpawnModel`、`SandboxBattleSpawnModel`（`Modules.SandBox/SandBox/Sandbox.GameComponents/SandboxBattleSpawnModel.cs:12`）。

## 心智模型

把它当成**「编队分配器」**：输入一批 origin，输出一批「origin → 阵型下标」的配对。四个推论：

第一，**返回值必须是 `List<>` 而不是 `IList<>`/`IEnumerable<>`**，签名写死了具体类型。返回 `null` 会在下游 `MissionBattleSideSpawnContext.cs:303` 拿到 null 之后直接炸。

第二，**「返回列表的顺序」和「列表里 origin 的顺序」无关，调用方是按 origin 匹配的**。看 `MissionBattleSideSpawnContext.cs:303` 的用法：它拿到 `list3` 后与自己的 origin 集合一起遍历配对。所以你的实现不能假设「第 i 项对应输入的第 i 项」——但**也不能丢项**：任何没出现在返回列表里的 origin 就没有阵型可去。

第三，**`formationIndex` 是裸 int，不是 `FormationClass` 枚举**。`CustomBattleSpawnModel.GetInitialSpawnAssignments` 的做法是 `(troopOrigin, (int)Mission.Current.GetAgentTroopClass(battleSide, troopOrigin.Troop))`——显式转成 int。所以自定义实现必须自己保证取值落在 `FormationClass` 的合法范围内。

第四，**`OnMissionStart` / `OnMissionEnd` 是虚方法且基类实现为空**，它们是给需要跨整个任务维护状态的实现用的挂载点（`SandboxBattleSpawnModel` 就是在这两个钩子里调 `MissionReinforcementsHelper.OnMissionStart/OnMissionEnd`）。它们由谁调用要小心——本类自身不调，全树对这两个方法的调用需要单独确认。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `GetInitialSpawnAssignments` | `public abstract List<(IAgentOriginBase origin, int formationIndex)> GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)` | 开局部署阶段的分配。调用点在 `MissionBattleSideSpawnContext.cs:303`，传进来的是本方尚未分配的全部 origin。返回值决定了每一支部队在开局时编进哪支阵型——直接决定战场上的初始阵型分布（步兵/弓/骑）。**必须实现**。 |
| `GetReinforcementAssignments` | `public abstract List<(IAgentOriginBase origin, int formationIndex)> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)` | 增援波次的分配。调用点在 `MissionBattleSideSpawnContext.cs:499`，传的是 `_reservedTroops`（预留的增援来源）。和初始部署的差别在于这批人不在战场上、还在后方等着按波次进来。**必须实现**。 |
| `OnMissionStart` | `public virtual void OnMissionStart()` | 任务开始时的钩子。基类实现是空的。官方实现（`CustomBattleSpawnModel` 与 `SandboxBattleSpawnModel`）都在这里调 `MissionReinforcementsHelper.OnMissionStart()` 来重置增援计时——这是本类里唯一适合做「跨整个任务的状态初始化」的位置。 |
| `OnMissionEnd` | `public virtual void OnMissionEnd()` | 任务结束的清理钩子，同样默认空实现。官方实现与 `OnMissionStart` 成对，都转到 `MissionReinforcementsHelper`。**不实现它，跨任务的残留状态会带进下一次战斗**。 |

## 真实示例

最简实现——照 `CustomBattleSpawnModel` 的做法，用引擎自己的兵种判定：

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public class CustomBattleSpawnModel : BattleSpawnModel
{
    public override List<(IAgentOriginBase, int)> GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
    {
        List<(IAgentOriginBase, int)> assignments = new List<(IAgentOriginBase, int)>();
        foreach (IAgentOriginBase troopOrigin in troopOrigins)
        {
            // formationIndex 是裸 int，必须显式转换
            assignments.Add((troopOrigin, (int)Mission.Current.GetAgentTroopClass(battleSide, troopOrigin.Troop)));
        }
        return assignments;
    }

    public override List<(IAgentOriginBase, int)> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
    {
        return MissionReinforcementsHelper.GetReinforcementAssignments(battleSide, troopOrigins);
    }
}
```

真要改编成规则时（全部远程兵编成弓阵，附带一份调试输出）：

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public class AllRangedArchersSpawnModel : BattleSpawnModel
{
    private readonly BattleSpawnModel _vanilla;

    public AllRangedArchersSpawnModel(BattleSpawnModel baseModel)
    {
        // Initialize(T) 是 MBGameModel<T> 上的 public 方法，手动调用后 BaseModel 才有值
        Initialize(baseModel);
        _vanilla = baseModel;
    }

    public override List<(IAgentOriginBase, int)> GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
    {
        List<(IAgentOriginBase, int)> assignments = new List<(IAgentOriginBase, int)>();
        int skipped = 0;
        foreach (IAgentOriginBase troopOrigin in troopOrigins)
        {
            if (troopOrigin.Troop == null)
            {
                skipped++;
                continue;
            }
            assignments.Add((troopOrigin, (int)FormationClass.Ranged));
            Debug.Print("side=" + battleSide + " origin seed=" + troopOrigin.UniqueSeed + " -> Ranged", 0);
        }
        if (skipped > 0)
        {
            Debug.Print("dropped origins with no troop: " + skipped, 0);
        }
        return assignments;
    }

    public override List<(IAgentOriginBase, int)> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
    {
        if (_vanilla != null)
        {
            return _vanilla.GetReinforcementAssignments(battleSide, troopOrigins);
        }
        List<(IAgentOriginBase, int)> assignments = new List<(IAgentOriginBase, int)>();
        foreach (IAgentOriginBase troopOrigin in troopOrigins)
        {
            assignments.Add((troopOrigin, (int)FormationClass.Ranged));
        }
        return assignments;
    }
}
```

把它注册进 game models。注意 `IGameStarter` 接口**没有** `GetModel<T>()`，要拿到 vanilla 实例只能向下转型到具体 starter（[CampaignGameStarter](../../campaign/CampaignGameStarter) 或 [BasicGameStarter](../BasicGameStarter/)）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;
using TaleWorlds.MountAndBlade;

public class MyModule : MBSubModuleBase
{
    public override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        base.OnGameStart(game, gameStarterObject);
        BattleSpawnModel vanilla = null;
        if (gameStarterObject is CampaignGameStarter campaignStarter)
        {
            vanilla = campaignStarter.GetModel<BattleSpawnModel>();
        }
        else if (gameStarterObject is BasicGameStarter basicStarter)
        {
            vanilla = basicStarter.GetModel<BattleSpawnModel>();
        }
        if (vanilla != null)
        {
            gameStarterObject.AddModel<BattleSpawnModel>(new AllRangedArchersSpawnModel(vanilla));
        }
    }
}
```

从任务里读回当前生效的实例并核对结果：

```csharp
BattleSpawnModel model = MissionGameModels.Current.BattleSpawnModel;
if (model == null)
{
    Debug.Print("no BattleSpawnModel registered", 0);
    return;
}
Debug.Print("spawn model = " + model.GetType().Name, 0);
```

## 风险与边界

- **抽象类，不能实例化。** 两个 `abstract` 方法必须实现。要复用 vanilla 行为必须自己持有 vanilla 引用再显式转发——`IGameStarter` 接口**不暴露** `GetModel<T>()`，只能向下转型到 `CampaignGameStarter` / `BasicGameStarter` 才拿得到。注意 `AddModel<T>` 内部会再调一次 `Initialize(上一个 model)`，覆盖你自己构造时的那次。
- **`BaseModel` 是 `protected`**，外部读不到。要「只覆盖一半」必须自己持有 vanilla 的引用再显式转发。
- **返回 `null` 会炸。** 两个抽象方法的返回类型都是具体 `List<>`，下游直接遍历。
- **`formationIndex` 是裸 int，无范围校验。** 越界值在下游可能表现为阵型错乱或索引异常，而不是友好的断言。
- **不能丢 origin。** 返回列表里没有的 origin 就没有分配结果；这与「多返回一个」不同，后者可能造成重复编队。
- **`OnMissionStart` / `OnMissionEnd` 默认空实现。** 它们不在本类的抽象契约里，引擎是否调用、调用几次要看具体调用方；跨任务状态必须在 `OnMissionEnd` 里清干净，否则第二次战斗会带着上一次的数据。
- **`MBGameModel<T>` 的 `BaseModel` 只有一层。** 链式包装三层以后，`base.BaseModel` 在基类里是 `protected` 而非公开属性，外部无法访问最底层。
- **不存档、不序列化。** 它是 game model 实例，在 game 启动时构造，任务间复用。

## 依赖关系

- 基类链：[MBGameModel](../../core-extra/MBGameModel/) 持有 `protected T BaseModel` 与 `Initialize(T)`；再往上是 [GameModel](../../core-extra/GameModel/) 的空标记类
- 注册与读取：[MissionGameModels](../MissionGameModels/) 的 `BattleSpawnModel` 属性在构造时由 `GetGameModel<BattleSpawnModel>()`（[GameModelsManager](../../core-extra/GameModelsManager/) 的倒序 `is T` 扫描）填入
- 调用方：`MissionBattleSideSpawnContext.cs:303`（初始部署）与 `:499`（增援）两处，都是通过 `MissionGameModels.Current.BattleSpawnModel` 取实例
- 参数类型：[BattleSideEnum](../../core-extra/BattleSideEnum/) 与 [IAgentOriginBase](../../core-extra/IAgentOriginBase/)，返回值里的 int 对应 [FormationClass](../../core-extra/FormationClass/)
- 增援侧委托：[MissionReinforcementsHelper](../MissionReinforcementsHelper/) 是官方实现用来转发增援分配的地方
- 参考实现：`CustomBattleSpawnModel`、`MultiplayerBattleSpawnModel`、`SandboxBattleSpawnModel`（均在同桶或 `Modules.SandBox`）
- 桶首页：[mission-ext API 分区](../)
