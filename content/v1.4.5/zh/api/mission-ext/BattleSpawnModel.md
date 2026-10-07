---
title: "BattleSpawnModel"
description: "刷兵分配的抽象契约：19 行、4 个成员、2 个抽象方法。回答「这批 troops 按什么顺序编进哪支阵型」，由 CustomBattle / Multiplayer / Sandbox 三个模块各实现一份，通过 MissionGameModels.Current.BattleSpawnModel 取用。"
---

# BattleSpawnModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleSpawnModel : MBGameModel<BattleSpawnModel>`
**Base:** `MBGameModel<BattleSpawnModel>`
**File:** `TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/BattleSpawnModel.cs`

## 概述

全文 19 行、4 个成员：两个空 `virtual` 生命周期钩子加两个 `abstract` 分配方法。它是整个战斗刷兵流程的**策略接口**——真正干活的是三个模块实现：CustomBattle 的 [CustomBattleSpawnModel](../CustomBattleSpawnModel/)、联机的 [MultiplayerBattleSpawnModel](../MultiplayerBattleSpawnModel/)、沙盒的 [SandboxBattleSpawnModel](../../campaign-ext/SandboxBattleSpawnModel/)（实测三个，声明分别在 `CustomBattleSpawnModel.cs:7`、`MultiplayerBattleSpawnModel.cs:7`、`SandboxBattleSpawnModel.cs:12`）。

取用方式固定为一条链。持有人在 `MissionGameModels.cs:27`，那里写着 `public BattleSpawnModel BattleSpawnModel { get; private set; }`。初始化发生在 `MissionGameModels.cs:53`，那里是一句 `GetGameModel<BattleSpawnModel>()`。

运行时只有两个消费者，都在 [MissionBattleSideSpawnContext](../MissionBattleSideSpawnContext/) 里。初始布阵在 `MissionBattleSideSpawnContext.cs:303`，实参是 `_side` 与 `item5.origins`。增援布阵在 `MissionBattleSideSpawnContext.cs:499`，实参是 `_side` 与 `_reservedTroops`。

两个方法的返回值类型完全一样：`List<(IAgentOriginBase origin, int formationIndex)>`——**一个 IAgentOriginBase 加上一个阵型下标**。初始与增援的区别不在签名里，而在实现里。

## 心智模型

把它当成**「一份 troops 清单怎么分配成阵型花名册」的策略接口**。四条推论：

第一，**它是游戏模型，所以自带「基模型」概念。** `BaseModel` 是 `MBGameModel.cs:5` 上的 `protected T BaseModel { get; private set; }`，由 `MBGameModel.cs:7` 的 `Initialize(T baseModel)` 填进去。这意味着 Sandbox 的实现可以在自己的实现里调 `BaseModel` 去问底层的 CustomBattle 实现——**这是 mod 想改刷兵顺序时唯一能拿到的官方入口**，比反射改 private 字段干净得多。

第二，**两个 `abstract` 方法返回的是「(来源, 阵型下标)」配对，不是 Agent、不是 Formation 对象。** 返回的是 [IAgentOriginBase](../../core-extra/IAgentOriginBase/)（`TaleWorlds.Core`），也就是「这批兵从哪来」；`formationIndex` 是 `int`。真正的 Agent 要由消费方拿这两样去 spawn——**这个接口不碰 Agent，也不碰 Mission。** 你在实现里 `new` 一个 Agent 是越界的。

第三，**它只有 `List<IAgentOriginBase>` 输入，没有兵力、队伍、难度、位置这些上下文。** 想知道「一共多少人」「哪一方」「有没有马」都得自己去问。注意 `battleSide` 是**形参**而不是实例状态，所以同一个模型实例要同时服务两方——**实现里绝不能把 `battleSide` 缓存成字段。**

第四，**两个生命周期钩子是空的，但它们是官方唯一承诺的挂钩点。** 至少它们的存在保证了「刷兵前 / 刷兵后」各有一个可以插手的位置，而不用去改 mission behavior 列表。**想改刷兵时机，优先覆写这两个钩子，而不是去动 [BattleSpawnLogic](../BattleSpawnLogic/)。**

## 如何使用

**拿法：** 不要 `new`。全局单例挂在 `MissionGameModels.Current` 上：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static class MyModSpawnInspector
{
    public static void DumpInitialAssignments(BattleSideEnum side, List<IAgentOriginBase> troopOrigins)
    {
        // 属性声明在 MissionGameModels.cs:27，由 MissionGameModels.cs:53 赋值
        BattleSpawnModel model = MissionGameModels.Current.BattleSpawnModel;

        List<(IAgentOriginBase origin, int formationIndex)> assignments =
            model.GetInitialSpawnAssignments(side, troopOrigins);

        foreach (var (origin, formationIndex) in assignments)
        {
            Debug.Print("origin -> formation " + formationIndex, 0);
        }
    }
}
```

**最容易踩的一条：** 把 `battleSide` 记成字段。它是形参，而同一个模型实例被两个 `BattleSideEnum` 各调一次。缓下来第二次就会拿守方的结果当攻方的用。**每次都读形参。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 类声明 | `public abstract class BattleSpawnModel : MBGameModel<BattleSpawnModel>`（`BattleSpawnModel.cs:6`） | 命名空间是 `TaleWorlds.MountAndBlade.ComponentInterfaces`，文件前两行是 `using System.Collections.Generic;` 与 `using TaleWorlds.Core;`，**和其他 mission-ext 类不在同一个命名空间**。`MBGameModel<BattleSpawnModel>` 自引用，所以它同时是「游戏模型」和「自己的基类」。 |
| `OnMissionStart` | `public virtual void OnMissionStart()`（`BattleSpawnModel.cs:8`） | 空生命周期钩子。**不接收任何参数**——想知道刷的是哪一边、哪张图，得自己去问 `Mission.Current`。这是 mod 挂初始化逻辑的第一个点。 |
| `OnMissionEnd` | `public virtual void OnMissionEnd()`（`BattleSpawnModel.cs:12`） | 同样无参、同样空。刷兵结束时的清理点。**和 `OnMissionStart` 一样，看不到 Mission 参数。** |
| `GetInitialSpawnAssignments` | `public abstract List<(IAgentOriginBase origin, int formationIndex)> GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`（`BattleSpawnModel.cs:16`） | **本类最核心的成员。** 把一批 troops 分配成「谁进哪支阵型」。**返回的 list 长度可以少于输入长度（表示不参战），但 order 不保证与输入一致。** |
| `GetReinforcementAssignments` | `public abstract List<(IAgentOriginBase origin, int formationIndex)> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`（`BattleSpawnModel.cs:18`） | 签名与上一个**完全相同**，唯一区别是语义：初始上场 vs 增援批次。**两个方法长得一样但必须分别实现**，复用实现时留意别把增援逻辑用在初始布阵上。 |
| `BaseModel`（继承自 `MBGameModel<T>`） | `protected T BaseModel { get; private set; }`（`MBGameModel.cs:5`） | **protected** —— 只有派生类能读。想「在 Sandbox 刷兵结果上再改一刀」就调它，比反射安全。 |

两个消费点的实参：

| 消费点 | 行 | 实参 |
| --- | --- | --- |
| 初始布阵 | `MissionBattleSideSpawnContext.cs:303` | `_side`、`item5.origins` |
| 增援布阵 | `MissionBattleSideSpawnContext.cs:499` | `_side`、`_reservedTroops` |

## 真实示例

实现一份完整模型（沙盒之外的场景，例如 mod 自定义战场）：

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public class MyModBattleSpawnModel : BattleSpawnModel
{
    // 契约在 BattleSpawnModel.cs:16：返回 (来源, 阵型下标) 配对
    public override List<(IAgentOriginBase origin, int formationIndex)> GetInitialSpawnAssignments(
        BattleSideEnum battleSide,
        List<IAgentOriginBase> troopOrigins)
    {
        var result = new List<(IAgentOriginBase, int)>();

        int slot = 0;
        foreach (IAgentOriginBase origin in troopOrigins)
        {
            // battleSide 是形参，不要缓存成字段：同一实例会被两方各调一次
            int formationIndex = battleSide == BattleSideEnum.Defender
                ? slot % 3
                : slot % 4;

            result.Add((origin, formationIndex));
            slot++;
        }

        return result;
    }

    // 契约在 BattleSpawnModel.cs:18：签名一样，语义是增援批次
    public override List<(IAgentOriginBase origin, int formationIndex)> GetReinforcementAssignments(
        BattleSideEnum battleSide,
        List<IAgentOriginBase> troopOrigins)
    {
        var result = new List<(IAgentOriginBase, int)>();
        foreach (IAgentOriginBase origin in troopOrigins)
        {
            result.Add((origin, (int)FormationClass.NumberOfRegularFormations));
        }
        return result;
    }
}
```

挂上生命周期钩子做初始化/清理：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public class MyModTrackedSpawnModel : BattleSpawnModel
{
    private int _assignmentCalls;

    public override void OnMissionStart()
    {
        // 声明在 BattleSpawnModel.cs:8，无参 —— 要拿上下文得自己问 Mission.Current
        _assignmentCalls = 0;
        MBDebug.Print("battle spawn model armed, mission = "
                    + (Mission.Current?.Scene?.GetName() ?? "<none>"), 0);
    }

    public override void OnMissionEnd()
    {
        MBDebug.Print("assignment calls this mission = " + _assignmentCalls, 0);
    }

    public override List<(IAgentOriginBase origin, int formationIndex)> GetInitialSpawnAssignments(
        BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
    {
        _assignmentCalls++;
        return new List<(IAgentOriginBase, int)>();
    }

    public override List<(IAgentOriginBase origin, int formationIndex)> GetReinforcementAssignments(
        BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
    {
        _assignmentCalls++;
        return new List<(IAgentOriginBase, int)>();
    }
}
```

复用官方实现再改一刀（用 `BaseModel`，别去反射）：

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public class MyModPassthroughSpawnModel : BattleSpawnModel
{
    // BaseModel 是 MBGameModel.cs:5 的 protected 属性，由 MBGameModel.cs:7 的 Initialize 填好
    public override List<(IAgentOriginBase origin, int formationIndex)> GetInitialSpawnAssignments(
        BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
    {
        var fromBase = BaseModel.GetInitialSpawnAssignments(battleSide, troopOrigins);

        // 攻方把最后来的那批塞进第 0 个阵型
        if (battleSide == BattleSideEnum.Attacker && fromBase.Count > 0)
        {
            var last = fromBase[fromBase.Count - 1];
            fromBase[fromBase.Count - 1] = (last.origin, 0);
        }
        return fromBase;
    }

    public override List<(IAgentOriginBase origin, int formationIndex)> GetReinforcementAssignments(
        BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
    {
        return BaseModel.GetReinforcementAssignments(battleSide, troopOrigins);
    }
}
```

## 风险与边界

- **抽象类，不能 `new`。** 必须实现 `BattleSpawnModel.cs:16` 与 `BattleSpawnModel.cs:18` 两个 `abstract` 方法，少一个都编译不过。
- **返回的是 `IAgentOriginBase` 配 `int`，不是 Agent 也不是 Formation。** 想拿 Formation 对象要自己去队伍里按 index 找。
- **`battleSide` 是形参，不能缓存。** 同一实例服务两方。
- **两个方法签名相同、语义不同。** 实现时别互相复制粘贴了事。
- **两个生命周期钩子无参。** 想拿 Mission / Scene 上下文必须自己去 `Mission.Current` 取。
- **接口里没有任何「人数上限 / 难度 / 位置」上下文。** 想要这些必须绕路去问别的系统。
- **返回 list 的长度与顺序没有契约。** 返回空 list 是合法的，但意味着这一方一个兵都不刷。
- **换实现要动游戏模型机制，不是动 mission behavior 列表。** 这是 GameModel 机制，不是 MissionBehavior 机制——`BattleSpawnLogic` 那种 `new` 出来 `list.Add(...)` 的写法在这里不适用。
- **`BaseModel` 是 protected。** 外部拿不到，只能在派生类里用。

## 依赖关系

- 本类：`BattleSpawnModel.cs:6` 类头
- 本类的两个钩子：`BattleSpawnModel.cs:8` 与 `BattleSpawnModel.cs:12`
- 本类的两个抽象方法：`BattleSpawnModel.cs:16` 与 `BattleSpawnModel.cs:18`
- 基类链：[MBGameModel](../../core-extra/MBGameModel/)（`MBGameModel.cs:3-11`，`BaseModel` 在 `:5`、`Initialize` 在 `:7`）→ [GameModel](../../core-extra/GameModel/)
- 持有者：`MissionGameModels.cs:27` 的属性声明与 `MissionGameModels.cs:53` 的赋值
- 两个唯一消费点：[MissionBattleSideSpawnContext](../MissionBattleSideSpawnContext/)（`MissionBattleSideSpawnContext.cs:303` 初始、`:499` 增援）；另有静态版本在 `MissionReinforcementsHelper.cs:195`
- 输入类型：[IAgentOriginBase](../../core-extra/IAgentOriginBase/)（`TaleWorlds.Core`）；`BattleSideEnum` 亦在 `TaleWorlds.Core`（`BattleSideEnum.cs:3`）
- 三个实现：[CustomBattleSpawnModel](../CustomBattleSpawnModel/)（`CustomBattleSpawnModel.cs:7`）、[MultiplayerBattleSpawnModel](../MultiplayerBattleSpawnModel/)（`MultiplayerBattleSpawnModel.cs:7`）、[SandboxBattleSpawnModel](../../campaign-ext/SandboxBattleSpawnModel/)（`SandboxBattleSpawnModel.cs:12`）
- 与刷兵时机的关系：[BattleSpawnLogic](../BattleSpawnLogic/)（场景出生点集清理）、[DefaultBattleMissionAgentSpawnLogic](../DefaultBattleMissionAgentSpawnLogic/)（实际 spawn）
- 桶首页：[mission-ext API 分区](../)