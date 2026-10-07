---
title: "AgentController"
description: "挂在单个 Agent 上的实例级控制器插槽：由 Agent.AddController 反射构造，只回调一次 OnInitialize，此后完全由持有者自己驱动。"
---

# AgentController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentController`
**Base:** 无（直接继承 `System.Object`）
**File:** `TaleWorlds.MountAndBlade/AgentController.cs`

## 概述

`AgentController` 是挂在**单个** [Agent](../../mission/Agent/) 身上的实例级扩展槽。它的全部源码只有 12 行：一个无参构造隐式提供的类、两个可写属性 `Owner` / `Mission`、一个空的虚方法 `OnInitialize`。它和 [AgentComponent](../AgentComponent/) 是两套并行机制——组件走 `Agent.AddComponent`，会被引擎在 `OnHit` / `OnMount` / `OnDismount` / `OnItemPickup` 等几十个时机主动广播；控制器**一个广播都没有**，`OnInitialize` 只在挂上去的那一刻被调用一次，之后没有任何自动生命周期。想让它做事，只能由你自己在 `MissionLogic` 的 tick 里显式调用它的方法。

它解决的具体问题是「这份状态属于这一个 Agent，而不是所有 Agent」。同一个 Mission 里有 200 个 Agent，如果把追击计时、弹药计数之类的东西放进一个共享的 `MissionLogic` 字段，就必然要到处 `if (agent == ...)` 地判身份；放进控制器，状态就天然跟着 Agent 实例走。

## 心智模型

把它当成**「每个 Agent 一份的私有协作者」**。典型顺序是三步：写一个 `public class XxxController : AgentController`；在合适的时机对目标 Agent 调 `AddController(typeof(XxxController))`；之后用 `GetController<T>()` 取回来驱动。三个必须记住的推论：

第一，**`AddController` 内部是 `Activator.CreateInstance(type)`，所以你的子类必须有 public 无参构造**。没有的话 `Activator` 抛 `MissingMethodException`，不会静默返回 null。而传入一个不是 `AgentController` 子类的 `Type` 时，代码走的是 `agentController == null` 分支，**静默返回 null**，没有任何日志。

第二，**`Owner` 与 `Mission` 由 `AddController` 在 `OnInitialize` 之前写好**，顺序在 `Agent.cs:4054` 的 `AddController` 里是明确的：先 `agentController.Owner = this;`、再 `agentController.Mission = Mission;`、再入列、最后 `agentController.OnInitialize();`。所以在 `OnInitialize` 里读 `Owner` / `Mission` 是安全的，**在外面自己 `new` 一个再塞进去则是未初始化状态**。

第三，**两个属性都是 `public set`**。这是全类型唯一的写入理由（`AddController` 用），外部误写不会触发任何断言，会让控制器指向别人的 Mission。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Owner` | `public Agent Owner { get; set; }` | 回指宿主 Agent。只有 `AddController` 会正确写它。控制器要读写宿主状态（血量、位置、装备、组件）时走这里，比反向从外部传 Agent 引用更不容易在 Agent 被移除后留下悬空引用。**setter 公开**，外部改它不会有一致性检查。 |
| `Mission` | `public Mission Mission { get; set; }` | 宿主当前所在的任务。`AddController` 写入的是**挂载那一刻**的 `Agent.Mission`，任务结束后这个引用不会自动更新——控制器若跨任务存活就必须在 `OnInitialize` 之外重新取 `Mission.Current`。 |
| `OnInitialize` | `public virtual void OnInitialize()` | 唯一一次自动回调，时机在 `AddController` 内部、`Owner`/`Mission` 赋值之后、且控制器已入 `_agentControllers` 列表之后。**基类实现是空的**，不调 `base.OnInitialize()` 不会出错，但这也意味着没有任何约定的初始化收尾流程。 |

## 死成员与陷阱

本页死成员状态未知：本页成员全部落在 UNSUPPORTED（多声明者歧义等），调用点数不可当结论；
本次未测出任何可复核的调用点。

## 真实示例

写一个控制器。注意 `AddController` 用反射构造，所以无参构造必须存在且公开：

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public class StaminaController : AgentController
{
    private float _stamina;

    public override void OnInitialize()
    {
        base.OnInitialize();
        _stamina = 100f;
    }

    public void Drain(float amount)
    {
        _stamina = MBMath.ClampFloat(_stamina - amount, 0f, 100f);
    }

    public float GetStamina()
    {
        return _stamina;
    }
}
```

在 `MissionLogic` 里挂上去并立刻驱动它——控制器不会自己 tick：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Missions;

public class StaminaMissionLogic : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        base.OnMissionTick(dt);
        foreach (Agent agent in Mission.Agents)
        {
            StaminaController stamina = agent.GetController<StaminaController>();
            if (stamina == null || !agent.IsAIControlled)
            {
                continue;
            }
            // 由控制器自己持有状态，MissionLogic 不需要任何按 agent 索引的字段
            stamina.Drain(dt * 2f);
            if (agent.Health > 80f && stamina.GetStamina() < 10f)
            {
                agent.Retreat();
            }
        }
    }

    public override void OnAgentCreated(Agent agent)
    {
        base.OnAgentCreated(agent);
        agent.AddController(typeof(StaminaController));
    }
}
```

读回已挂载的控制器，并确认 `Owner` / `Mission` 已被引擎填好：

```csharp
Mission mission = Mission.Current;
Agent ally = mission.GetClosestAllyAgent(mission.PlayerTeam, mission.MainAgent.Position, 10f);
if (ally == null)
{
    return;
}

StaminaController stamina = ally.GetController<StaminaController>();
if (stamina == null)
{
    return;
}
Debug.Print("stamina=" + stamina.GetStamina() + " owner=" + stamina.Owner.Index, 0);
Debug.Print("same mission = " + (stamina.Mission == mission), 0);
```

需要替换某个 Agent 的控制器时用 `RemoveController(Type)`——它按类型匹配 `is`，会移除第一个命中的实例并返回它，移除**不会**调用任何回调（源码里没有对应的 `OnRemoved`）：

```csharp
AgentController removed = ally.RemoveController(typeof(StaminaController));
Debug.Print("removed = " + (removed != null), 0);
```

## 风险与边界

- **没有任何自动生命周期。** `OnInitialize` 之后引擎再也不会回调这个对象。数据清理、`Owner` 置空、注销事件订阅都得你自己做。对比 [AgentComponent](../AgentComponent/)：它有 `OnComponentRemoved` 与 `OnAgentRemoved` 两个收尾钩子，控制器没有。
- **`AddController` 用反射构造。** 子类必须可公开无参构造，否则 `MissingMethodException`；传入非子类 `Type` 时**静默返回 null**，不报错也不打日志。
- **`Mission` 是快照。** `AddController` 写入挂载那一刻的 `Agent.Mission`，之后不会跟随。跨任务复用一个控制器实例会让 `Mission` 变成过期引用。
- **不做移除。** `Agent` 在 `Agent.cs:1586` 创建时 `_agentControllers = new List<AgentController>()`，全文件再无清空点；控制器随 Agent 一起被回收，没有 `RemoveAll` 或析构路径。要提前断开关系必须显式 `RemoveController`。
- **`GetController<T>()` 按类型扫全表**（`Agent.cs:2676` 的线性 `is T` 循环），返回第一个命中；同一类型挂两份永远拿不到第二份。
- **和 `AgentComponent` 功能重叠时别混用。** 需要引擎事件（命中、上下马、拾取）就用 [AgentComponent](../AgentComponent/)，它的 `OnHit` / `OnMount` / `OnAIInputSet` 是被 `Agent` 主动调用的；需要纯私有状态 + 手动驱动才用控制器。
- **不是 `[Serializable]`，不存档。** 任务内的临时状态；任务结束状态丢失，重新 `OnInitialize`。

## 依赖关系

- 宿主：[Agent](../../mission/Agent/) 的 `_agentControllers` 列表、`AddController(Type)` / `RemoveController(Type)` / `GetController<T>()` 三个入口是本类型唯一的装配途径
- 上下文：`Mission`（`Mission.Agents` / `Mission.MainAgent` / `GetClosestAgent`）提供宿主所在的战场数据，控制器自己不缓存任务状态
- 平行机制：[AgentComponent](../AgentComponent/) 是同一批「挂到 Agent 上」的另一套插槽，区别是它有几十个引擎广播回调，本类型只有一次 `OnInitialize`
- 典型使用者：[MissionLogic](../MissionLogic/) 在 `OnMissionTick` 里驱动控制器实例，缺了它控制器就是死的
- 同桶参照：[MissionPeer](../MissionPeer/) 描述 Agent 与网络对端的归属；[AgentControllerType](../../core-extra/AgentControllerType/) 描述的是「谁来控制这个 Agent」这个枚举，与本类型无关但常被混为一谈
- 桶首页：[mission-ext API 分区](../)
