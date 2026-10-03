---
title: "AgentHumanAILogic"
description: "三个钩子的任务逻辑：在 CommonAI 那一层之上再加 IsHuman 判据挂 HumanAIComponent，并额外接管 OnAgentMount 的坐骑预约刷新。"
---

# AgentHumanAILogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentHumanAILogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentHumanAILogic.cs`（全文 44 行）

## 概述

`AgentHumanAILogic` 是一个 **44 行、三个覆写、零自有字段**的 [MissionLogic](../MissionLogic)。它与同族的 [AgentCommonAILogic](../AgentCommonAILogic) 是**同一件事的两层**：后者管所有 AI，后者只管「AI 控制的**人**」，并且额外做一件与组件无关的事。

全文：

```csharp
public class AgentHumanAILogic : MissionLogic
{
    public override void OnAgentCreated(Agent agent)
    {
        base.OnAgentCreated(agent);
        if (agent.IsAIControlled && agent.IsHuman)
        {
            agent.AddComponent(new HumanAIComponent(agent));
        }
    }

    protected internal override void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)
    {
        base.OnAgentControllerChanged(agent, oldController);
        if (agent.IsHuman)
        {
            if (agent.Controller == AgentControllerType.AI)
            {
                agent.AddComponent(new HumanAIComponent(agent));
                return;
            }
            if (oldController == AgentControllerType.AI && agent.HumanAIComponent != null)
            {
                agent.RemoveComponent(agent.HumanAIComponent);
            }
        }
    }

    public override void OnAgentMount(Agent agent)
    {
        base.OnAgentMount(agent);
        Mission.Current.UpdateMountReservationsAfterRiderMounts(agent, agent.MountAgent);
    }
}
```

## 心智模型

把它当成**「HumanAIComponent 的装配器 + 上马时的坐骑预约刷新」**。心智模型分三块，第三块是这个类里最容易被忽略的一行。

**第一块：判据比 [AgentCommonAILogic](../AgentCommonAILogic) 多一层 `IsHuman`，而且两个钩子的判据层级不同。**

- `OnAgentCreated`：`agent.IsAIControlled && agent.IsHuman`——两个条件都在这里。
- `OnAgentControllerChanged`：`if (agent.IsHuman)` 是**外层守卫**，`Controller == AI` 与 `oldController == AI` 的比较都被包在里面。所以非人类单位（马、牛、攻城器械）**根本不会进入交接判断**。

这一点和 [AgentCommonAILogic](../AgentCommonAILogic) 形成对照：后者在 `OnAgentControllerChanged` 里**没有** `IsHuman` 守卫，只判控制器类型；前者把 `IsHuman` 提成了外层 if。**同一个「装配器」家族里两个类的守卫位置不同**，照抄时别混。

**第二块：两个类会各挂一个组件，互不覆盖。** [Agent](../../mission/Agent) 的 `AddComponent`（`Agent.cs:4600-4614`）对两类组件分别有独立的缓存属性回填：

```csharp
this._components.Add(agentComponent);
CommonAIComponent commonAIComponent;
if ((commonAIComponent = (agentComponent as CommonAIComponent)) != null)
{
    this.CommonAIComponent = commonAIComponent;
    return;
}
HumanAIComponent humanAIComponent;
if ((humanAIComponent = (agentComponent as HumanAIComponent)) != null)
{
    this.HumanAIComponent = humanAIComponent;
}
```

`CommonAIComponent` 命中就 `return`，所以两个类依次添加是安全的：AI 人类单位最终同时持有 `CommonAIComponent` 和 `HumanAIComponent`，两个缓存属性都非 null。

**第三块：`OnAgentMount` 那一行不是组件逻辑，是全局状态维护。**

```csharp
public override void OnAgentMount(Agent agent)
{
    base.OnAgentMount(agent);
    Mission.Current.UpdateMountReservationsAfterRiderMounts(agent, agent.MountAgent);
}
```

它调的是 [Mission](../../mission/Mission) 上的 `UpdateMountReservationsAfterRiderMounts(Agent, Agent)`——**不是** `this.Mission`。而且用的是静态 `Mission.Current`，不是 `MissionLogic.Mission` 属性。这意味着：**如果任务里没有注册 `AgentHumanAILogic`，上马时就不会刷新坐骑预约**，表现是别的单位仍以为那匹马是「可占用的空位」而去抢骑。这是这个类最实际的、脱离组件话题的一个作用。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `OnAgentCreated` | `public override void OnAgentCreated(Agent agent)` | 装配点。先调 base，再在 `agent.IsAIControlled && agent.IsHuman` 时 `AddComponent(new HumanAIComponent(agent))`。**不去重**——已有组件时会挂第二个。 |
| `OnAgentControllerChanged` | `protected internal override void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)` | 交接装配。`if (agent.IsHuman)` 是外层守卫；内层 `Controller == AI` 挂上并早退，`oldController == AI` 且 `HumanAIComponent != null` 时摘掉。`protected internal`，外部调不到。 |
| `OnAgentMount` | `public override void OnAgentMount(Agent agent)` | **唯一与组件无关的成员**。先调 base，然后 `Mission.Current.UpdateMountReservationsAfterRiderMounts(agent, agent.MountAgent)` 刷新全局坐骑预约表。它不做判空、不判 `IsHuman`、不看控制器——任何单位上马都会走这一行。 |

类里**没有声明任何字段、属性或构造器**。

## 真实示例

确认 HumanAI 组件是否就位（与 `CommonAIComponent` 是两个独立属性）：

```csharp
using TaleWorlds.MountAndBlade;

public static bool HasHumanAI(Agent agent)
{
    // HumanAIComponent 是 Agent 上的 public 只读属性
    return agent.HumanAIComponent != null;
}
```

手动补挂，判据要与官方一致（两个条件都要）：

```csharp
using TaleWorlds.MountAndBlade;

public static void EnsureHumanAI(Agent agent)
{
    if (!agent.IsAIControlled || !agent.IsHuman)
    {
        return;
    }
    if (agent.HumanAIComponent != null)
    {
        return;
    }
    agent.AddComponent(new HumanAIComponent(agent));
}
```

接管「跟随」语义——这是依赖 `HumanAIComponent` 的典型形状，[AgentComponentExtensions](../AgentComponentExtensions) 提供了现成的扩展方法：

```csharp
using TaleWorlds.MountAndBlade;

public static void OrderFollow(Agent follower, Agent leader)
{
    // SetFollowedUnit 是 Agent 上的扩展方法，转发到 HumanAIComponent.FollowAgent
    follower.SetFollowedUnit(leader);
    Debug.Print(follower.Name + " follows " + leader.Name, 0);
}
```

## 风险与边界

- **`OnAgentCreated` 不去重。** 官方已注册时你再挂一次会有两个 `HumanAIComponent` 同时 tick。**先查 `agent.HumanAIComponent != null`。**
- **`OnAgentControllerChanged` 是 `protected internal`。** 外部调不到，只能覆写；漏调 `base` 会切断覆写链。
- **`OnAgentMount` 用 `Mission.Current` 而不是 `this.Mission`。** 静态访问在多任务/回放环境下可能指向另一个任务，而且**没有判空**。如果你的逻辑在任务尚未完全建立时触发上马事件，这里会 NRE。
- **`OnAgentMount` 无条件执行。** 它不看 `IsHuman`、不看控制器、不看组件是否挂上。给非人类单位写 `OnAgentMount` 覆写时也要注意这个调用是无条件发生的。
- **`IsHuman` 守卫的位置在交接钩子里是外层 if。** 想照抄这个模式到你自己的装配器时，注意别把 `IsHuman` 挪进内层分支——非人类单位会走进内层然后误判 `oldController`。
- **它依赖 `Mission.Current` 存在。** 如果你在一个没有 current mission 的上下文里手动触发 `OnAgentMount`，会直接崩。引擎路径上不会，因为上马一定发生在任务内。
- **`AgentHumanAILogic` 与 [AgentCommonAILogic](../AgentCommonAILogic) 都注册才有完整 AI。** 只有前者不挂 `CommonAIComponent`，士气相关 API 依然失效；只有后者则人类 AI 没有决策能力。
- **没有字段、没有构造器。** 被 `Mission` 用 `AddMissionBehavior` 加进 `MissionLogics`，不由你 new。

## 跨版本提示

44 行内容在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 里一致，三个覆写都没变。`AgentControllerType` 的四个成员同样稳定。

变化点在 **[HumanAIComponent](../HumanAIComponent)**：它在后续版本里持续新增成员（行为值集 `BehaviorValueSet`、`AISimpleBehaviorKind` 这类形状在 1.3.x 到 1.5.x 间有调整），[AgentComponentExtensions](../AgentComponentExtensions) 的对应扩展也跟着变。但**「两个装配逻辑类」的形状没变**——这说明新增的能力都是加在组件里，而不是加在装配器里。你自定义 [AgentComponent](../AgentComponent) 时不必修改这两个类。

值得盯的是 `Mission.UpdateMountReservationsAfterRiderMounts(Agent, Agent)` 这个调用点：它在后续版本里被更多的地方复用（海战、攻城器械），签名保持两参数。**如果它改成三参数（多一个传入者），你覆写的 `OnAgentMount` 逻辑不会编译失败，但调用会错位**——所以覆写时不要缓存 `Mission.Current`，每次现取。

## 依赖关系

- 基类：[MissionLogic](../MissionLogic)（`BehaviorType` 恒为 `MissionBehaviorType.Logic`）→ [MissionBehavior](../../mission/MissionBehavior)
- 挂载目标：[HumanAIComponent](../HumanAIComponent)，通过 [Agent](../../mission/Agent) 的 `AddComponent` / `RemoveComponent` 与 `HumanAIComponent` 只读属性
- 判据枚举：[AgentControllerType](../../core-extra/AgentControllerType)（`None`/`AI`/`Player`/`Count`）
- 第三行调用的目标：[Mission](../../mission/Mission) 的 `UpdateMountReservationsAfterRiderMounts(Agent, Agent)`（走静态 `Mission.Current`）
- 同层逻辑：[AgentCommonAILogic](../AgentCommonAILogic) 负责 [CommonAIComponent](../CommonAIComponent) 的装配，两者对 AI 人类单位叠加生效
- 受其影响的 API 面：[AgentComponentExtensions](../AgentComponentExtensions) 的行为值集与跟随相关扩展依赖 `HumanAIComponent != null`
- 桶首页：[mission-ext API 分区](../)