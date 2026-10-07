---
title: "MissionLogic"
description: "任务逻辑的行为基类：在 MissionBehavior 的 60+ 钩子之上追加「任务结束流程」这一组钩子，并通过 BehaviorType.Logic 把自己分流进 MissionLogics 集合。"
---
# MissionLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionLogic : MissionBehavior`
**Source:** `TaleWorlds.MountAndBlade/MissionLogic.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`MissionLogic` 是 `MissionBehavior` 的**语义分层派生**——70 行源码里没有字段、没有构造函数、没有私有方法，但声明了 **10 个真实成员**：1 个覆写属性 `BehaviorType` 返回 `MissionBehaviorType.Logic`（`MissionLogic.cs:13`），以及 9 个「任务结束流程」虚方法（`OnEndMissionRequest` 到 `OnMissionResultReady`）。存在的意义是**语义分层**：把「控制任务何时结束、结束时做什么」这类逻辑，从「每帧 tick、Agent 生命周期」这类通用行为里分出来，让引擎能按 `BehaviorType` 分流到不同的集合与广播路径。

官方有 100 多个 `*Logic` 子类（`BattleEndLogic`、`BasicLeaveMissionLogic`、`AgentVictoryLogic`、`MissionAgentSpawnLogic` 等），它们全部派生自 `MissionLogic` 而非直接派生 `MissionBehavior`。mod 作者写自定义任务逻辑时，应当派生 `MissionLogic` 而不是 `MissionBehavior`——否则你的行为会被分流到 `_otherMissionBehaviors` 而非 `MissionLogics`，在某些广播路径上被跳过。

## 心智模型

**`MissionLogic` 是「任务结束流程的决策层」，不是「每帧逻辑的容器」。**

- 它决定**任务什么时候可以结束**（`OnEndMissionRequest` 返回 `InquiryData` 或 null）、**结束时结算什么**（`MissionEnded` 返回 bool 并改写 `MissionResult`）、**结束后播什么**（`OnBattleEnded`、`ShowBattleResults`、`OnRetreatMission`、`OnSurrenderMission`）。
- 它**不决定**每帧做什么——那是 `MissionBehavior.OnMissionTick` 的事，`MissionLogic` 没有覆写它。
- 它**不决定** Agent 生死——那是 `MissionBehavior.OnAgentRemoved` 的事，`MissionLogic` 也没有覆写它。

**为什么官方要单独抽这一层？** 因为 `MissionBehavior` 的 60+ 个钩子里，有一组是「任务结束流程」专用的：`OnEndMissionRequest` 询问「能不能走」、`MissionEnded` 判定「是否结束」、`OnBattleEnded` 通知「战斗结束了」。这组钩子的语义与「每帧 tick」完全不同——它们只在任务结束时被调一次，且返回值有控制流含义（`InquiryData` 会弹确认框、`bool` 会阻止结束）。把它们放在 `MissionBehavior` 里会让所有 Behavior 都背负这组钩子；单独抽一层 `MissionLogic`，让「我关心任务结束」的类显式声明自己，引擎也能按 `BehaviorType.Logic` 快速筛出所有结束逻辑。

**`BehaviorType` 的分流后果。** `Mission.AddMissionBehavior` 内部按 `BehaviorType` 把行为分流到两个集合：`Logic` 进 `MissionLogics`，`Other` 进 `_otherMissionBehaviors`。`MissionLogics` 是引擎遍历「结束逻辑」的专用列表——`Mission.OnEndMissionRequest` 会遍历它逐个询问，`Mission.MissionEnded` 会遍历它逐个判定。如果你的类直接派生 `MissionBehavior` 并把 `BehaviorType` 返回 `Other`，你的 `MissionEnded` 覆写**永远不会被调**。

## 怎么用

### 怎么拿到

```csharp
using TaleWorlds.MountAndBlade;

// 注册：MissionLogic 是 abstract，必须派生后注册
Mission.Current.AddMissionBehavior(new MyCustomLogic());   // Mission.cs:4454

// 取回
MyCustomLogic logic = Mission.Current.GetMissionBehavior<MyCustomLogic>();
```

### 典型用法

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.Core;

public class MyCustomLogic : MissionLogic
{
    // BehaviorType 已在 MissionLogic 基类覆写为 Logic，无需再写

    public override bool MissionEnded(ref MissionResult missionResult)
    {
        // 返回 true 表示「任务可以结束了」，同时改写 missionResult
        if (Mission.Current.GetMemberCountOfSide(BattleSideEnum.Defender) == 0)
        {
            missionResult = MissionResult.CreateSuccessful(Mission.Current, false);
            return true;
        }
        return false;   // 返回 false 表示「还不能结束」
    }

    public override InquiryData OnEndMissionRequest(out bool canLeave)
    {
        canLeave = true;
        // 返回 null 表示「直接走，不弹确认框」
        // 返回 InquiryData 会弹确认框，玩家确认后才走
        return null;
    }

    public override void OnBattleEnded()
    {
        // 战斗结束后的回调：播音效、写日志、触发事件
        Debug.Print("Battle ended!", 0);
    }
}
```

### 坑

- **手动 new 后不注册则不生效。** `MissionLogic` 的构造函数是隐式的（源码里没有声明构造函数），你 `new MyCustomLogic()` 之后必须调 `Mission.Current.AddMissionBehavior(...)` 挂上去，否则 `Mission` 属性是 null、`OnCreated` 不会被调、你的覆写永远不会被触发。
- **不要在里面做重活。** `MissionLogic` 继承的 `OnMissionTick` 每帧被调，长逻辑会拖慢整个战斗帧。`MissionLogic` 本身没有覆写 `OnMissionTick`，但你的子类如果覆写了它，要注意这一点。
- **`MissionEnded` 返回 false 不会阻止结束。** 它只是「我不认为该结束了」，引擎会继续问其他 Logic。只有所有 Logic 都返回 false 且没有其它结束条件时，任务才继续。
- **`OnEndMissionRequest` 的 `out bool canLeave` 必须赋值。** 它是 `out` 参数，C# 编译器要求你在返回前赋值。基类默认 `canLeave = true`（`MissionLogic.cs:22`），你覆写时也要赋值。

## 关键成员

### 身份与分流

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `BehaviorType` | `public override MissionBehaviorType BehaviorType` | 返回 `MissionBehaviorType.Logic`（`MissionLogic.cs:13`）。这是 `MissionLogic` 存在的核心理由：让引擎把行为分流到 `MissionLogics` 集合 |

### 任务结束流程钩子

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `OnEndMissionRequest` | `public virtual InquiryData OnEndMissionRequest(out bool canLeave)` | 询问「玩家能不能离开任务」。返回 null 表示直接走；返回 `InquiryData` 弹确认框。`canLeave` 是 out 参数，必须赋值。基类默认 `canLeave = true; return null;`（`MissionLogic.cs:22`） |
| `MissionEnded` | `public virtual bool MissionEnded(ref MissionResult missionResult)` | 判定「任务是否应该结束」。返回 true 表示「可以结束了」，同时通过 `ref missionResult` 改写结算结果。基类默认 `return false;`（`MissionLogic.cs:29`） |
| `OnBattleEnded` | `public virtual void OnBattleEnded()` | 战斗结束后的通知回调。基类空实现（`MissionLogic.cs:35`） |
| `ShowBattleResults` | `public virtual void ShowBattleResults()` | 显示战斗结算界面时调。基类空实现（`MissionLogic.cs:40`） |
| `OnRetreatMission` | `public virtual void OnRetreatMission()` | 玩家撤退时调。基类空实现（`MissionLogic.cs:45`） |
| `OnSurrenderMission` | `public virtual void OnSurrenderMission()` | 玩家投降时调。基类空实现（`MissionLogic.cs:50`） |
| `OnAutoDeployTeam` | `public virtual void OnAutoDeployTeam(Team team)` | 某队被自动部署时调。基类空实现（`MissionLogic.cs:55`） |
| `GetExtraEquipmentElementsForCharacter` | `public virtual List<EquipmentElement> GetExtraEquipmentElementsForCharacter(BasicCharacterObject character, bool getAllEquipments = false)` | 给指定角色追加额外装备。基类默认 `return null;`（`MissionLogic.cs:60`） |
| `OnMissionResultReady` | `public virtual void OnMissionResultReady(MissionResult missionResult)` | 战斗结果就绪时调。基类空实现（`MissionLogic.cs:66`） |

**取舍判据**：`MissionLogic` 只有 10 个成员（1 个覆写属性 + 9 个虚方法），全部列出。没有故意略过的成员。

## 真实示例

下面是一个完整的自定义 `MissionLogic` 子类，展示「任务结束流程」的典型用法：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.Core;
using System.Collections.Generic;

public class CustomBattleEndLogic : MissionLogic
{
    private bool _playerWon = false;

    // BehaviorType 已在 MissionLogic 基类覆写为 Logic，无需再写

    public override bool MissionEnded(ref MissionResult missionResult)
    {
        // 判定：防守方全灭时任务结束
        if (Mission.Current.GetMemberCountOfSide(BattleSideEnum.Defender) == 0)
        {
            _playerWon = true;
            missionResult = MissionResult.CreateSuccessful(Mission.Current, false);
            return true;
        }
        return false;
    }

    public override InquiryData OnEndMissionRequest(out bool canLeave)
    {
        canLeave = true;
        // 玩家胜利时弹确认框
        if (_playerWon)
        {
            return new InquiryData(
                "确认胜利？",
                "你确定要结束这场战斗吗？",
                true, true,
                "确定", "取消",
                new System.Action(Mission.Current.OnEndMissionResult),
                null, "", 0f, null, null, null);
        }
        return null;
    }

    public override void OnBattleEnded()
    {
        // 战斗结束后的回调
        if (_playerWon)
        {
            Debug.Print("Player won the battle!", 0);
        }
    }

    public override void OnRetreatMission()
    {
        Debug.Print("Player retreated!", 0);
    }
}

// 注册入口（在 MissionBehavior.OnCreated 或 OnBehaviorInitialize 里）
public class MyMissionSetup : MissionBehavior
{
    public override void OnCreated()
    {
        Mission.Current.AddMissionBehavior(new CustomBattleEndLogic());
    }
}
```

## 参见

- [`../Team`](../Team) —— 战斗里的一方，`MissionLogic` 的 `OnAutoDeployTeam` 钩子的参数类型。
- [`../../mission/MissionBehavior`](../../mission/MissionBehavior) —— `MissionLogic` 的父类，提供 60+ 个通用钩子。
- [`../_index`](../_index) —— `mission-ext` 桶全类型索引。

## 导航

- 同桶：[`../MissionLogic`](../MissionLogic) · [`../MissionObject`](../MissionObject) · [`../Team`](../Team)
- 父索引：[`../_index`](../_index)
