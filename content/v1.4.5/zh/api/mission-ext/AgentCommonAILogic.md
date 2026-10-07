---
title: "AgentCommonAILogic"
description: "把 CommonAIComponent 挂到每个 AI 控制 Agent 上的装配逻辑：Agent 一创建就挂，控制权在 AI 与人之间切换时增删，是引擎默认 mission behavior 之一。"
---

# AgentCommonAILogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentCommonAILogic : MissionLogic`
**Base:** `TaleWorlds.MountAndBlade.MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentCommonAILogic.cs`

## 概述

`AgentCommonAILogic` 全文 31 行，是一个纯粹的**装配器**。它做两件事：在 [Agent](../../mission/Agent/) 被创建时，如果 `agent.IsAIControlled` 就 `agent.AddComponent(new CommonAIComponent(agent))`；在控制权发生变化时，按新控制者是不是 AI 决定挂上或摘掉这个组件。它自己不持有任何状态，所有状态都在 [CommonAIComponent](../CommonAIComponent/) 内部（士气、恐慌标记、撤退距离、预留骑手下标）。

它之所以值得单独一页，是因为它是**引擎默认挂载的行为之一**：[MissionState](../MissionState/) 的 `AddDefaultMissionBehaviorsTo`（`MissionState.cs:329`）里有一句 `list.Add(new AgentCommonAILogic());`。也就是说，只要 [MissionState](../MissionState/) 的 `OpenNew` 被以 `addDefaultMissionBehaviors: true`（默认值）调用，**任何任务里由 AI 控制的 Agent 都自动会有这个组件**，不需要 mod 自己去挂。

## 心智模型

把它当成**「组件生命周期与控制权绑定的适配层」**，三个推论：

第一，**它的两个钩子覆盖了组件增删的全部时机**。`OnAgentCreated` 处理「出生时已经是 AI」；`OnAgentControllerChanged` 处理「出生后控制权变了」。漏了任一个都会出现「玩家夺控后士气组件还挂着」或「交给 AI 后没有士气组件」。

第二，**「AI 控制」的判定一律用 `agent.Controller == AgentControllerType.AI`**，不是 `IsAIControlled` 属性。源码里两条路径用了两种写法：`OnAgentCreated` 用属性 `agent.IsAIControlled`（等价于 `Controller == AgentControllerType.AI`），`OnAgentControllerChanged` 用直接枚举比较。语义相同，但写自定义逻辑时要注意 `oldController` 传进来的是**旧值**。

第三，**摘组件走的是 `Agent.RemoveComponent` 而不是自己操作字段**。`Agent.RemoveComponent`（`Agent.cs:4388`）在移除成功后会额外做一件事：如果被摘掉的正好是 `CommonAIComponent` 引用，就把 `Agent.CommonAIComponent` 置 null。所以 `agent.CommonAIComponent` 在摘除后不会悬空——但前提是你**必须用 `RemoveComponent` 而不是 `_components.Remove`**。

第四，**注意它和 [AgentHumanAILogic](../AgentHumanAILogic/) 的区别**：本类不判断 `agent.IsHuman`，所以**动物 AI（马匹、野兽）也会挂上 CommonAIComponent**；`AgentHumanAILogic` 才额外要求 `IsHuman`。两者是并列的默认行为，不互相替代。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `OnAgentCreated` | `public override void OnAgentCreated(Agent agent)` | Agent 诞生的第一时间由 `Mission.CreateAgent` 逐个 behavior 派发。实现是「先 `base.OnAgentCreated(agent)` 再判 `agent.IsAIControlled` 就挂组件」——**先调 base 是硬约定**，因为基类 [MissionBehavior](../../mission/MissionBehavior/) 的实现可能做自己的记账（`MissionBehavior.cs:53`）。 |
| `OnAgentControllerChanged` | `protected internal override void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)` | 控制权变更回调（声明在 `MissionBehavior.cs:232`，注意是 `protected internal`）。它比 `OnAgentCreated` 多一道 `agent.IsActive()` 守卫——**死掉的 Agent 不做组件增删**。逻辑是新控制者是 AI 就挂、旧控制者是 AI 且组件还在就摘。 |

## 死成员与陷阱

本页死成员状态未知：本页成员全部落在 UNSUPPORTED（多声明者歧义等），调用点数不可当结论；
本次未测出任何可复核的调用点。

## 真实示例

照着它写一个同构的装配逻辑，挂自己的组件（这是最常见的继承用途）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyAgentEquipLogic : MissionLogic
{
    public override void OnAgentCreated(Agent agent)
    {
        base.OnAgentCreated(agent);
        if (agent.IsAIControlled)
        {
            agent.AddComponent(new MyStaminaComponent(agent));
        }
    }

    protected internal override void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)
    {
        base.OnAgentControllerChanged(agent, oldController);
        if (!agent.IsActive())
        {
            return;
        }
        MyStaminaComponent stamina = agent.GetComponent<MyStaminaComponent>();
        if (agent.Controller == AgentControllerType.AI)
        {
            if (stamina == null)
            {
                agent.AddComponent(new MyStaminaComponent(agent));
            }
        }
        else if (oldController == AgentControllerType.AI && stamina != null)
        {
            agent.RemoveComponent(stamina);
        }
    }
}
```

把本类显式加进自定义任务的 behavior 列表（默认情况下不用这么做）：

```csharp
using System.Collections.Generic;
using TaleWorlds.MountAndBlade;

public IEnumerable<MissionBehavior> OpenCustomBehaviors(Mission mission)
{
    // addDefaultMissionBehaviors: false 时默认行为不会自动进来，需要自己补
    return new MissionBehavior[] { new AgentCommonAILogic() };
}
```

从任务里读回组件状态，确认它确实挂上了：

```csharp
Mission mission = Mission.Current;
foreach (Agent agent in mission.Agents)
{
    CommonAIComponent common = agent.CommonAIComponent;
    if (common == null)
    {
        continue;
    }
    Debug.Print("agent " + agent.Index + " morale=" + common.Morale + " panicked=" + common.IsPanicked, 0);
}
```

判读为什么某个 AI 没有士气组件——控制权是不是被夺走了：

```csharp
Agent agent = target;
Debug.Print("controller = " + agent.Controller + " active = " + agent.IsActive(), 0);
if (agent.Controller == AgentControllerType.Player && agent.CommonAIComponent == null)
{
    Debug.Print("correct: player-controlled agent has no CommonAIComponent", 0);
}
```

## 风险与边界

- **`OnAgentControllerChanged` 是 `protected internal`。** 派生类能覆写，但**外部调用方拿不到这个方法**（`internal` 部分仅限同程序集）。它只能由 `Agent` 在控制权变化时主动派发。
- **`OnAgentCreated` 必须在 `OnAgentControllerChanged` 之前有结果。** 如果你在 `OnAgentCreated` 里已经挂了组件、随后控制权没变，`OnAgentControllerChanged` 不会再来一次；本类在这个路径上是幂等的（靠 `agent.CommonAIComponent != null` 判定），但自定义实现若不做同样的判空检查会挂出重复组件。
- **`CommonAIComponent` 是动物也会挂的。** 本类不判 `IsHuman`，与 [AgentHumanAILogic](../AgentHumanAILogic/) 的分工靠的是「谁挂了 `HumanAIComponent`」而不是「谁挂了 `CommonAIComponent`」。
- **必须是 `addDefaultMissionBehaviors: true`。** [MissionState](../MissionState/) 的 `OpenNew` 第四个参数默认 true，但显式传 false 就没有它（`AgentCommonAILogic` 也就不在 behavior 列表里，Agent 不会有 CommonAIComponent）。
- **摘除必须走 `Agent.RemoveComponent`。** 它会顺带把 `Agent.CommonAIComponent` 字段置 null；绕过它就会留下悬空引用，且 `Agent.cs:4394` 的判定用的是**引用相等**（`CommonAIComponent == agentComponent`），不是类型判定。
- **组件状态不跨任务。** `CommonAIComponent` 是任务内对象，任务结束即销毁；`IsPanicked` / `ReservedRiderAgentIndex` 都不会保留。
- **没有公开构造需求。** 它有无参隐式构造，引擎在 `MissionState.cs:329` 直接 `new AgentCommonAILogic()`；类不是 `sealed`，可以继承。

## 依赖关系

- 基类链：继承 [MissionLogic](../MissionLogic/) → [MissionBehavior](../../mission/MissionBehavior/)，两个钩子分别声明在 `MissionBehavior.cs:53`（`OnAgentCreated`）与 `:232`（`OnAgentControllerChanged`）
- 装配目标：[CommonAIComponent](../CommonAIComponent/)，持士气 / 恐慌 / 撤退距离 / 预留骑手下标，构造器需要 `Mission.Current`（它在里面 new 了一个 `Timer`）
- 宿主：[Agent](../../mission/Agent/) 的 `AddComponent` / `RemoveComponent` / `GetComponent<T>` / `CommonAIComponent` 属性，以及 `Agent.IsAIControlled` 与 `Agent.Controller` 两个判定入口
- 默认挂载点：[MissionState](../MissionState/) 的 `AddDefaultMissionBehaviorsTo`（`MissionState.cs:329`）与它同批被加进默认列表的还有 `BasicMissionHandler`、`CasualtyHandler`，以及联机时的 `MissionNetworkComponent`
- 并列行为：[AgentHumanAILogic](../AgentHumanAILogic/) 负责 `[HumanAIComponent](../HumanAIComponent/)`，两者都要手动 new 时应同时加入
- 桶首页：[mission-ext API 分区](../)
