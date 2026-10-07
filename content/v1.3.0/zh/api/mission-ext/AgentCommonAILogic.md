---
title: "AgentCommonAILogic"
description: "两个钩子的任务逻辑：在 AgentCreated 与 AgentControllerChanged 里按 IsAIControlled 挂/摘 CommonAIComponent，是整个任务 AI 组件链的第一环。"
---

# AgentCommonAILogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentCommonAILogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentCommonAILogic.cs`（全文 34 行）

## 概述

`AgentCommonAILogic` 是一个 **34 行、两个覆写、零自有字段**的 [MissionLogic](../MissionLogic)。它做且只做一件事：**保证每个 AI 控制的 Agent 身上恰好挂着一个 [CommonAIComponent](../CommonAIComponent)**。

全文：

```csharp
public class AgentCommonAILogic : MissionLogic
{
    public override void OnAgentCreated(Agent agent)
    {
        base.OnAgentCreated(agent);
        if (agent.IsAIControlled)
        {
            agent.AddComponent(new CommonAIComponent(agent));
        }
    }

    protected internal override void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)
    {
        base.OnAgentControllerChanged(agent, oldController);
        if (agent.Controller == AgentControllerType.AI)
        {
            agent.AddComponent(new CommonAIComponent(agent));
            return;
        }
        if (oldController == AgentControllerType.AI && agent.CommonAIComponent != null)
        {
            agent.RemoveComponent(agent.CommonAIComponent);
        }
    }
}
```

## 心智模型

把它当成**「CommonAIComponent 的自动装配器」**，然后记住它是被谁注册进任务的。

心智模型分三块。

**第一块：它的存在意义是「不用你手动挂组件」。** 如果 mod 或官方代码不给 AI Agent 挂 [CommonAIComponent](../CommonAIComponent)，那么 [AgentComponentExtensions](../AgentComponentExtensions) 里那一整族扩展方法（`GetMorale` / `SetMorale` / `ChangeMorale` / `IsRetreating` / `Retreat` / `StopRetreatingMoraleComponent`）全都会因为 `agent.CommonAIComponent == null` 而**静默失效**：`GetMorale()` 返回 `-1f`，其余返回 `void` 的方法直接 `return`。所以「士气相关的东西不工作」的第一个排查点就是这个逻辑有没有被注册。

**第二块：两个钩子对应两种时机，判据不同。**

- `OnAgentCreated(Agent)` 走 **`agent.IsAIControlled`**——这读的是「当前是否由 AI 操控」，不看控制器类型。玩家自己操控但被 AI 托管的单位（联机观战、部分脚本场景）也满足这个条件。
- `OnAgentControllerChanged(Agent, AgentControllerType oldController)` 走 **`agent.Controller == AgentControllerType.AI`** 的显式类型比较。三值枚举在 `TaleWorlds.Core` 命名空间，形状是 `None = 0` / `AI = 1` / `Player = 2` / `Count = 3`（`TaleWorlds.Core/AgentControllerType.cs`）。

`OnAgentControllerChanged` 的分支结构值得逐字读：`Controller == AI` 时挂上并 `return`；否则，只有在 `oldController == AI`（说明刚刚**从** AI 脱手）且组件还在时才摘掉。这个「old == AI」的守卫让摘除只发生在真正的交接时刻，重复调用不会误伤。

**第三块：注册与否决定了整个行为。** `MissionLogic` 的 `BehaviorType` 恒为 `MissionBehaviorType.Logic`，所以它进 `Mission.MissionLogics` 列表。官方由 `Mission` 在初始化阶段添加，具体调用点不在 1.3.0 托管源码树里（`Agent.AddComponent` / `AgentHumanAILogic` 同理），要确认它是否已被注册请直接查 `Mission.GetMissionBehavior<AgentCommonAILogic>()` 或 `Mission.HasMissionBehavior<T>()`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `OnAgentCreated` | `public override void OnAgentCreated(Agent agent)` | Agent 创建时的装配点。先调 `base.OnAgentCreated(agent)`（[MissionBehavior](../../mission/MissionBehavior) 的空实现），然后在 `agent.IsAIControlled` 为真时 `AddComponent(new CommonAIComponent(agent))`。**不做去重**——如果调用方已经挂过一个，这里会挂第二个。 |
| `OnAgentControllerChanged` | `protected internal override void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)` | 控制权交接时的挂/摘。`Controller == AI` 挂上并早退；`oldController == AI` 且组件非 null 时 `RemoveComponent`。`protected internal` 意味着外部代码调不到它，只能覆写。 |

类里**没有声明任何字段、属性或构造器**。

## 真实示例

确认某个 Agent 的士气组件是否已经就位——这是排查「士气 API 无效」的标准动作：

```csharp
using TaleWorlds.MountAndBlade;

public static bool HasCommonAI(Agent agent)
{
    // CommonAIComponent 是 Agent 上的 public 只读属性
    return agent.CommonAIComponent != null;
}
```

手动补挂（当你在自己的逻辑里比 `AgentCommonAILogic` 更早创建了 Agent，导致 `OnAgentCreated` 没赶上时）：

```csharp
using TaleWorlds.MountAndBlade;

public static void EnsureCommonAI(Agent agent)
{
    if (!agent.IsAIControlled)
    {
        return;
    }
    if (agent.CommonAIComponent != null)
    {
        return;
    }
    agent.AddComponent(new CommonAIComponent(agent));
}
```

`AddComponent` 内部除了 `_components.Add` 之外，还会把 `CommonAIComponent` / `HumanAIComponent` 类型的组件回填到对应的缓存属性上（`Agent.cs:4600-4614`），所以走 `AddComponent` 是必须的——直接往 `agent.Components` 里 `Add` 不会更新缓存属性。

## 风险与边界

- **`OnAgentCreated` 不去重。** 官方已经注册了 `AgentCommonAILogic` 的前提下，你再 `new CommonAIComponent(agent)` + `AddComponent`，会有两个组件同时 tick，而 [CommonAIComponent](../CommonAIComponent) 的 `Morale` 各自独立——士气会被分裂成两份。**先查 `agent.CommonAIComponent != null` 再挂。**
- **`OnAgentControllerChanged` 是 `protected internal`。** 外部调不到。你不能主动触发它，只能覆写。
- **摘除分支有 `CommonAIComponent != null` 的守卫。** 因为 `Agent.RemoveComponent` 在移除后会把 `Agent.CommonAIComponent` 置 `null`（`Agent.cs:4617-4632`），连续调用不会 NRE。
- **摘除条件是 `oldController == AI`，不是「当前不是 AI」。** 语义上等价于「刚刚交接」，但如果你在一个 `Controller == None` 的中间态里看到组件没被摘，那是因为 `oldController` 也不匹配——这不是 bug，是守卫的设计。
- **`OnAgentCreated` 判 `IsAIControlled` 而不是 `Controller == AI`。** 两者不是同一件事：`IsAIControlled` 反映的是实际控制来源，联机观战和部分脚本托管场景下两者会不一致。官方在这个钩子里用的是 `IsAIControlled`，在交接钩子里用的是 `Controller == AI`——**同一个类里两种判据，别统一成一种。**
- **`base.OnAgentCreated(agent)` 必须调。** 虽然 [MissionBehavior](../../mission/MissionBehavior) 的基类实现是空的，但这是覆写链的约定；后续版本可能给基类加实现。
- **`base.OnAgentControllerChanged(agent, oldController)` 也必须调。** 同上。而且 `protected internal` 覆写时漏掉 base 是很常见的编译通过、行为错误的坑。
- **没有构造器，也不需要。** `MissionLogic` 的默认构造足够。它是被 `Mission` 用 `AddMissionBehavior` 加进去的，不由你 new。
- **同族的 [AgentHumanAILogic](../AgentHumanAILogic) 会再加一层。** 两个逻辑都注册时，AI 人类单位会同时挂 `CommonAIComponent` 和 `HumanAIComponent`——这是设计，不是冲突。

## 怎么用

### 怎么拿到它

`public class AgentCommonAILogic : MissionLogic`（`TaleWorlds.MountAndBlade/AgentCommonAILogic.cs:7`），只有隐式公开构造。它不是单例——**官方在 Mission 建立时就把一个实例 `AddMissionBehavior` 进去了**（`Mission.cs:4306` 是那条入口），它自己靠 `OnAgentCreated` 这个回调看到每一个新建的 Agent。你要拿到的效果就是「Agent 上挂着一个 `CommonAIComponent`」，读法是 `agent.CommonAIComponent != null`。

### 典型用法

它只有一个 virtual 扩展点，所以派生一份是最省事的做法——让官方那份先跑完，再在同一帧挂你自己的组件：

```csharp
public class MyExtendedAILogic : AgentCommonAILogic
{
    private readonly HashSet<Agent> _tagged = new HashSet<Agent>();

    public override void OnAgentCreated(Agent agent)
    {
        // 先让官方那份跑完，CommonAIComponent 才会就位
        base.OnAgentCreated(agent);

        if (!agent.IsAIControlled)
        {
            return;
        }
        // 官方的 OnAgentCreated 不去重：判断得你自己做，否则两个组件会同时 tick
        if (!this._tagged.Add(agent))
        {
            return;
        }
        agent.AddComponent(new MyTacticalComponent(agent));
    }
}
```

与上面「真实示例」的差别：那两段是在**官方逻辑之外**做善后（查组件、手动补挂），都是一次性、针对单个 Agent 的工具函数；这里是把官方逻辑**接在基类位置上**继承，让「创建时挂什么」这件事在每次 Agent 创建时自动发生，且用 `_tagged` 把去重这个官方没做的动作补在了派生类里。

### 最容易踩的坑

**`OnAgentCreated` 不去重。** 官方已经注册了它，你再 `new CommonAIComponent(agent)` + `AddComponent`，会有两个组件同时 tick，而各自的 `Morale` 彼此独立——士气会被分裂成两份。**先查 `agent.CommonAIComponent != null` 再挂。**

## 跨版本提示

`AgentCommonAILogic` 的 34 行在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 里一致，两个覆写的判据（`IsAIControlled` 与 `AgentControllerType.AI`）都没变。

变化点在 **[CommonAIComponent](../CommonAIComponent)** 本身：它的成员数在这几个版本里持续增长（新增的 AI 决策钩子、perk 交互等），[AgentComponentExtensions](../AgentComponentExtensions) 也跟着扩展。反过来说，**`AgentCommonAILogic` 保持稳定说明「组件装配协议」没有变**——你的自定义 `AgentComponent` 只要继承 [AgentComponent](../AgentComponent)，就会自动获得引擎的全部回调，无需在这里登记。

`AgentControllerType` 的四个成员（`None` / `AI` / `Player` / `Count`）从 1.3.0 到 1.5.3 逐字一致，所以 `== AgentControllerType.AI` 这种比较不会因为枚举变动而失效。

## 依赖关系

- 基类：[MissionLogic](../MissionLogic)（`BehaviorType` 恒为 `MissionBehaviorType.Logic`）→ [MissionBehavior](../../mission/MissionBehavior) 的 56 个钩子
- 挂载目标：[CommonAIComponent](../CommonAIComponent)，通过 [Agent](../../mission/Agent) 的 `AddComponent(AgentComponent)` / `RemoveComponent(AgentComponent)` 与 `CommonAIComponent` 只读属性
- 判据枚举：[AgentControllerType](../../core-extra/AgentControllerType)（`TaleWorlds.Core`，`None`/`AI`/`Player`/`Count`）
- 受其影响的 API 面：[AgentComponentExtensions](../AgentComponentExtensions) 的士气与撤退族扩展全部依赖 `CommonAIComponent != null`
- 并列逻辑：[AgentHumanAILogic](../AgentHumanAILogic) 负责 [HumanAIComponent](../HumanAIComponent) 的装配，判据多一层 `agent.IsHuman`
- 容器：[MissionBehavior](../../mission/MissionBehavior) 的 `OnAgentControllerChanged` 是 `protected internal` 钩子，外部不可调
- 桶首页：[mission-ext API 分区](../)