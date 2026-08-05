---
title: "StandingPointWithTeamLimit"
description: "只允许一个已配置 Mission Team 及其战斗方使用的 StandingPoint 派生点。"
---
# StandingPointWithTeamLimit

**命名空间：** `TaleWorlds.MountAndBlade`  
**模块：** `TaleWorlds.MountAndBlade`  
**类型：** `public class StandingPointWithTeamLimit : StandingPoint`  
**基类：** [`StandingPoint`](../StandingPoint)  
**源码：** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StandingPointWithTeamLimit.cs`

## 这类点做什么

只有 `Team` 等于 `UsableTeam` 的 Agent 可以使用该点，分遣选择也只会把 `UsableTeam` 所属战斗方视为可用。

## 概述

该类是在 [`StandingPoint`](../StandingPoint) 之上增加 Team 身份过滤。源码使用 `agent.Team == UsableTeam` 比较，而不是宽松的阵营比较，因此同一战斗方的两个 Team 仍然不同。`IsUsableBySide` 会读取 `UsableTeam.Side`，再调用基类的阵营与占用检查。

## 心智模型

`UsableTeam` 必须在 Mission 创建 Team 后、`UsableMachine` 评估分遣槽位前由所属机器设置。源码中的 [`CastleGate`](../CastleGate) 会遍历收集到的点，把配置好的 Team 赋给每个 `StandingPointWithTeamLimit`。本类不会自动发现 Team，也不会持久化这个绑定。

这里有两层过滤：个体 Agent 必须引用完全相同的 Team；分遣请求还必须来自该 Team 的 `BattleSideEnum`。基类继续处理停用、即时使用、占用、控制器类型和实体标签。

## 依赖关系

- [`StandingPoint`](../StandingPoint) 提供共同使用生命周期及基础阵营/占用规则。
- [`UsableMachine`](../UsableMachine) 在选择槽位时调用 `IsDisabledForAgent` 与 `IsUsableBySide`。
- [`Team`](../Team) 提供本类读取的身份和 `Side`；[`Mission`](../../mission/Mission) 持有当前 Team 实例。
- [`CastleGate`](../CastleGate) 是源码确认的消费者，在机器初始化时赋值 `UsableTeam`。

## 何时使用，何时不用

**适合使用：**

- 机器槽位属于一个明确 Team，即使另一个 Team 与它共享战斗方也不能使用。
- 所属机器可以在 AI 分遣评估开始前配置 Team。

**不适合使用：**

- 战斗方中的任意 Team 都能使用；应使用普通 [`StandingPoint`](../StandingPoint) 配合场景阵营标签。
- 允许名单是会变化的个体角色集合；应使用 [`StandingPointWithAgentLimit`](../StandingPointWithAgentLimit)。
- Team 尚未创建。应等待当前 Mission 的 Team 非空，而不是依赖未配置点继续进行评估。

## 关键成员与调用时机

- `UsableTeam` 是必需配置属性；它同时决定个体资格和阵营资格。
- `IsDisabledForAgent` 拒绝空 Team 或不同 Team，再把匹配的 Agent 交给基类检查。
- `IsUsableBySide` 将请求阵营与 `UsableTeam.Side` 比较，再调用基类。

属性没有 setter 校验。调用方负责配置顺序，不应在机器并发分配 Agent 时改变它。

## 真实获取与配置示例

下面沿用 Mission 所有机器的获取方式：从 `Mission.Current.Teams` 读取实时 Team，并给活动对象集合中已经注册的点绑定它：

```csharp
using TaleWorlds.MountAndBlade;

static void BindAttackerTeamPoints()
{
    Mission mission = Mission.Current;
    if (mission == null || mission.Teams == null)
    {
        return;
    }

    Team attackers = mission.Teams.Attacker;
    foreach (StandingPointWithTeamLimit point in
             mission.ActiveMissionObjects.FindAllWithType<StandingPointWithTeamLimit>())
    {
        point.UsableTeam = attackers;
    }
}
```

应在机器和 Team 初始化完成、分遣选择开始前运行；站位点不会创建或注册 Team。

## 风险与崩溃边界

- `IsUsableBySide` 无空值保护地读取 `UsableTeam.Side`。未设置属性时进行阵营评估可能崩溃，必须在机器查询前配置。
- Team 属于某一场 Mission。Mission 结束后不要继续保存或复用 `UsableTeam`。
- 使用期间修改属性可能让当前 Agent 在后续检查中失败。应通过机器所有者停止或重新分配，而不是在移动中改变门槛。
- 同一战斗方不等于同一 Team。必须使用当前 Mission 中的确切对象。

## 参见与双向导航

- ↑ 父级：[Mission-ext 模块索引](../)
- ↔ 同级：[StandingPoint](../StandingPoint) · [StandingPointWithAgentLimit](../StandingPointWithAgentLimit)
- 相关限制：[StandingPointWithWeaponRequirement](../StandingPointWithWeaponRequirement) · [StandingPointWithVolumeBox](../StandingPointWithVolumeBox)
- 消费者与宿主：[CastleGate](../CastleGate) · [UsableMachine](../UsableMachine) · [Mission](../../mission/Mission)
- 中文/English：[StandingPointWithTeamLimit](../../../../en/api/mission-ext/StandingPointWithTeamLimit)
