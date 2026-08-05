---
title: "StandingPointWithAgentLimit"
description: "只允许显式维护的 Agent 实例使用的 StandingPoint 派生点，适合脚本化机组分配。"
---
# StandingPointWithAgentLimit

**命名空间：** `TaleWorlds.MountAndBlade`  
**模块：** `TaleWorlds.MountAndBlade`  
**类型：** `public class StandingPointWithAgentLimit : StandingPoint`  
**基类：** [`StandingPoint`](../StandingPoint)  
**源码：** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StandingPointWithAgentLimit.cs`

## 这类点做什么

这个点增加 Agent 白名单门槛：只有所有者加入的、仍然存活的 [`Agent`](../../mission/Agent) 引用才能通过普通站位点检查。

## 概述

`StandingPointWithAgentLimit` 适合位置只属于一组已知角色的机器，例如脚本化的机组分配。它不是数值容量限制，也不复制 Agent ID。私有列表保存对象引用；`IsDisabledForAgent` 先检查成员身份，只有成员才委托给基类。

## 心智模型

白名单是普通 [`StandingPoint`](../StandingPoint) 契约前的附加过滤器。`AddValidAgent` 忽略 `null`，但不去重；`ClearValidAgents` 清空列表；成员判断使用 `List<Agent>.Contains`，因此依赖同一个对象引用和当前生命周期。阵营标签、占用、控制器类型、路径距离和停用状态仍由基类处理。

所有者应在 Mission 创建真实 Agent 后填充列表，并在 Agent 或站位点离开 Mission 前清理。该规则只存在于内存中，不是存档数据。

## 依赖关系

- [`StandingPoint`](../StandingPoint) 仍负责目标帧、占用、评分和基础可用性。
- [`UsableMachine`](../UsableMachine) 在 AI 选择和分遣槽位检查时调用 `IsDisabledForAgent`。
- [`Mission`](../../mission/Mission) 与 [`Agent`](../../mission/Agent) 决定白名单引用的有效生命周期。
- [`MissionBehavior`](../../mission/MissionBehavior) 可作为拥有者，在 Mission 结束时清理列表。

## 何时使用，何时不用

**适合使用：**

- 场景机器只应接受一组已知 Agent，而不是阵营中的所有 Agent。
- 脚本化分配只在一场 Mission 内变化，并且可以显式刷新列表。

**不适合使用：**

- 要接受 Team 的所有成员；使用 [`StandingPointWithTeamLimit`](../StandingPointWithTeamLimit)。
- 资格由手中武器决定；使用 [`StandingPointWithWeaponRequirement`](../StandingPointWithWeaponRequirement)。
- 分配必须跨存档或跨 Mission 保留。应在别处存储持久战役数据，再重新构建白名单。

## 关键成员与调用时机

- `AddValidAgent(Agent agent)` 追加非空引用，不去重，也不验证 Agent 是否属于当前 Mission。
- `ClearValidAgents()` 移除全部引用；更换分配或 Mission 结束时应调用。
- `IsDisabledForAgent(Agent agent)` 对所有非成员返回 `true`；成员仍会进入 `base.IsDisabledForAgent(agent)`。

本类没有公开列表读取器。应把两个修改方法当作完整同步边界，不要在无效生命周期阶段依靠反复调用 `IsDisabledForAgent` 推断内部状态。

## 真实获取与配置示例

站位点从 `Mission.Current` 找到，Agent 参数由调用方的 Mission 脚本提供：

```csharp
using TaleWorlds.MountAndBlade;

static void AssignCrewAgent(Agent crewAgent)
{
    Mission mission = Mission.Current;
    if (mission == null || crewAgent == null)
    {
        return;
    }

    foreach (StandingPointWithAgentLimit point in
             mission.ActiveMissionObjects.FindAllWithType<StandingPointWithAgentLimit>())
    {
        point.ClearValidAgents();
        point.AddValidAgent(crewAgent);
    }
}
```

这只配置现有场景组件；Agent 的移动和站位点使用生命周期仍由所属机器管理。

## 风险与崩溃边界

- 角色死亡或移除后继续持有 Agent 引用，可能让后续选择和清理访问失效引擎对象。创建分配的生命周期拥有者应负责清空列表。
- `null` 参数会被静默忽略；查找 Agent 失败时，点可能变成没有用户，而不是立即抛出明显异常。
- 重复添加会被接受。反复分配时应先清空，或由调用方控制更新频率。
- 本类不会同步或序列化白名单。每场新 Mission 都要重新构建，并把战役/存档状态放在别处。

## 参见与双向导航

- ↑ 父级：[Mission-ext 模块索引](../)
- ↔ 同级：[StandingPoint](../StandingPoint) · [StandingPointWithTeamLimit](../StandingPointWithTeamLimit)
- 其他限制：[StandingPointWithWeaponRequirement](../StandingPointWithWeaponRequirement) · [StandingPointWithVolumeBox](../StandingPointWithVolumeBox)
- 宿主与生命周期：[UsableMachine](../UsableMachine) · [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior)
- 中文/English：[StandingPointWithAgentLimit](../../../../en/api/mission-ext/StandingPointWithAgentLimit)
