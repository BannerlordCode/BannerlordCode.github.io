---
title: "AgentState"
description: "agent 生命状态枚举：None / Active / Routed / Unconscious / Killed / Deleted。它是一条单向的生命周期轴，Routed 可被写回 Active，但 Unconscious 之后的值一旦设置就无法恢复。"
---

# AgentState

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public enum AgentState`
**Base:** 无
**File:** `TaleWorlds.Core/AgentState.cs`

## 概述

`AgentState` 是 mission 里一个 agent 的**生命状态轴**。它比 [AgentControllerType](../AgentControllerType) 更基础：控制权决定「谁在操作」，而它决定「这个单位还能不能被打」。`BattleEndLogic` 判断战斗是否结束靠它，`Mission` 的伤害管线靠它决定是否还要结算死亡动画，`OnBeforeAgentRemoved` 把它作为参数交给订阅者。

它承担的是**「这一条命现在处于哪一阶段」**这一环，六个成员构成一条**基本单向**的轴：`None`（未就位）→ `Active`（存活可战）→ `Routed`（溃逃，仍可被追上击杀）→ `Unconscious`（昏迷，不参与战斗但可被处决）→ `Killed` → `Deleted`。它由 native 定义并持有（`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:11` 的 `DefineAsEngineStruct(..., "Agent_state", false, ...)`），**但托管侧可以写**——`Agent.State` 是个带 setter 的属性（`Agent.cs:1529-1541`）。这个可写性是本页最需要小心的地方。

## 心智模型

把它当成**一条只往一个方向推的生命时间线**，而不是六个可以随意切换的标签。写它的唯一正当理由是**「让一个已经溃逃的敌人重新回到战斗里」**，其余情况一律只读。

**为什么说它基本单向。** `Agent.State` 的 setter（`Agent.cs:1534-1541`）只做两件事：值相同则不写（`if (State != value)`），否则调 `MBAPI.IMBAgent.SetStateFlags(GetPtr(), value)`。**托管层没有任何状态迁移校验**——它不检查「能不能从 Killed 回到 Active」。所以「单向」不是类型强制的，而是 native 侧的物理现实：被判定 `Killed` 的单位已经在跑布娃娃动画，`Deleted` 的单位已经从 mission 的 agent 列表里移除并可能被复用。**在托管侧强行把 `Killed` 写回 `Active`，不会报错，只会得到一个布娃娃还在播放但状态说它活着的单元。** 这是本页最贵的一条结论。

**读它的正确姿势是判等值，不要比大小。** 虽然六个成员的数值天然按生命周期递增，但官方代码里全是 `state == AgentState.Routed`（`BannerBearerLogic.cs:723`、`BattleEndLogic.cs:191`、`CustomBattleAgentLogic.cs:19`、`Mission.cs:3025`）这样的判等。`Enum.CompareTo` 在这里没有语义支撑——一旦某个版本插一个新成员到中间（这在 native 定义的枚举上完全可能），所有基于数值的比较全部失效。

由此推出四条实操结论。第一，**`None` 与 `Active` 的差别是「这个 agent 还在不在场上」。** `MultiplayerItemTestMissionController.cs:86` 的 `if (mainAgent == null || mainAgent.State != AgentState.Active) return;` 是标准写法：先判 null 再判 Active，别只判其一。第二，**`Routed` 不是「已死」。** 溃逃单位仍会被追上并击杀，`BattleEndLogic.cs:191` 甚至专门用 `agentState == AgentState.Routed` 来决定「敌人是否还在拉锯」。第三，**`Unconscious` 与 `Killed` 在伤害统计里通常合并处理。** `BattleObserverMissionLogic.cs:72` 与 `MissionMultiplayerFlagDomination.cs:1064` 都写成 `(agentState == AgentState.Unconscious || agentState == AgentState.Killed)`，因为两者的下游后果一致（不再参与战斗、计入战果）。第四，**`Deleted` 是资源回收态。** 它意味着这个 `Agent` 对象已经可以被 mission 复用；此时读它身上任何业务字段都不再安全，这也是为什么 `Mission.OnBeforeAgentRemoved` 要在移除**之前**触发。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `None` | `None = 0` | 未就位。agent 已构造但尚未进入战斗序列时的初值。**注意它与 `null` 判断是两回事**：`mainAgent != null` 不代表 `State == Active`。 |
| `Active` | `Active = 1` | 存活且可参与战斗。绝大多数「这个单位还能被打吗」的问题都落在这个值上。`Agent.IsActive()`（`Agent.cs:3296-3299`）就是它的判等包装，**能优先用 `IsActive()` 就别手写 `State == AgentState.Active`**。 |
| `Routed` | `Routed = 2` | 溃逃中。单位还活着但已脱离战斗，会被追击。**这是唯一有正当理由从外部写回 `Active` 的目标状态**（例如「指挥官溃逃了，我把他喊回来」）。`BannerBearerLogic.cs:723` 靠它决定旗手在溃逃时是否掉旗。 |
| `Unconscious` | `Unconscious = 3` | 昏迷。不参与战斗但**仍可被处决**，且在战果统计里通常与 `Killed` 合并处理。`BattleObserverMissionLogic.cs:72` 写成 `agentState == AgentState.Unconscious \|\| agentState == AgentState.Killed`。 |
| `Killed` | `Killed = 4` | 被击杀，已进入死亡流程。`Mission.cs:3025` 在这个状态下直接跳过部分伤害后续处理。**写回 `Active` 不会报错，但会得到一个状态与动画矛盾的单位。** |
| `Deleted` | `Deleted = 5` | 已从 mission 移除、资源可复用。**这是唯一一个读其他字段就不再安全的取值**——`Mission.OnBeforeAgentRemoved` 之所以在移除前触发，就是为了让你还能安全地读。 |
| （程序集特性）`DefineAsEngineStruct` | `[assembly: DefineAsEngineStruct(typeof(AgentState), "Agent_state", false, null, null)]`，`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:11` | 把它绑到 native 的 `Agent_state` 结构体，`false` 表示非位标志集。与 [AgentAttackType](../AgentAttackType) 一样，**它是 native 定义的镜像**；但与那个不同，`Agent.State` 带 setter，所以托管侧能写。 |

## 真实示例

最标准的读法是先判空再判状态，抄 `MultiplayerItemTestMissionController.cs:86` 的结构：

```csharp
private void DoSomethingWithMainAgent()
{
    Agent mainAgent = Mission.Current.MainAgent;
    if (mainAgent == null || mainAgent.State != AgentState.Active)
    {
        Debug.Print("main agent is gone or already out of the fight", 0);
        return;
    }

    Debug.Print("main agent alive, hp = " + mainAgent.Health, 0);
}
```

订阅 `Mission.OnBeforeAgentRemoved`，注意它把 `AgentState` 和 `KillingBlow` 一起交出来——**这个事件是死亡瞬间唯一能安全读全部数据的时机**：

> ⚠️ 一个必须知道的时序细节：`Mission.OnAgentRemoved`（`Mission.cs:2985-2989`，`[MBCallback] internal`）先 `Invoke` 事件，**下一行才** `affectedAgent.State = agentState`。所以**在回调内部读 `affectedAgent.State` 拿到的是旧值**，必须用回调参数 `agentState`。

```csharp
public class MyDeathWatcher : MissionBehavior
{
    public override void OnAfterMissionCreated()
    {
        base.OnAfterMissionCreated();
        Mission.Current.OnBeforeAgentRemoved += HandleAgentRemoved;
    }
}

private void HandleAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
{
    switch (agentState)
    {
        case AgentState.Routed:
            Debug.Print("routed out, still killable, killer = " + killingBlow.OwnerId, 0);
            break;
        case AgentState.Unconscious:
        case AgentState.Killed:
            // Downstream consequences are identical, so the engine code itself
            // folds these two together -- see BattleObserverMissionLogic, line 72.
            Debug.Print("down for the count, body part = " + killingBlow.VictimBodyPart, 0);
            break;
        case AgentState.Deleted:
            Debug.Print("removed from the mission, nothing more to read", 0);
            break;
        default:
            Debug.Print("unhandled state = " + agentState, 0);
            break;
    }
}
```

把溃逃的敌人喊回战斗——这是本页唯一推荐的写法（`Routed` → `Active`）：

```csharp
private void RallyRoutedUnit(Agent unit)
{
    if (unit == null || unit.State != AgentState.Routed)
    {
        return;
    }

    // Routed -> Active is the one transition the engine actually supports from
    // outside. Do NOT try Killed -> Active: nothing rejects it and the result is
    // a unit whose ragdoll is still playing while its state claims it is alive.
    unit.State = AgentState.Active;
    Debug.Print("unit " + unit.Index + " rallied back into the fight", 0);
}
```

## 风险与边界

- **状态轴没有托管层校验。** `Agent.State` 的 setter 只做「值变了才写」（`Agent.cs:1534`），随后 `MBAPI.IMBAgent.SetStateFlags`。**从 `Killed` 或 `Deleted` 写回 `Active` 不会抛异常**，你会得到一个状态与动画/物理互相矛盾的单位。这是最容易写出「幽灵单位」的地方。
- **不要用数值比较。** 六个成员数值虽递增，但官方代码一律判等。做 `<` / `>` 在 native 定义的这个枚举上没有语义保障——新增成员会直接改变大小关系。
- **`Unconscious` 与 `Killed` 要成对处理。** 战果统计、经验分配、AI 目标剔除都把两者当同一件事（`BattleObserverMissionLogic.cs:72`、`MissionMultiplayerFlagDomination.cs:1064`）。只判其一就会漏掉一半。
- **`Routed` ≠ 死亡。** 溃逃单位可被追上击杀，因此它仍是有效的击杀目标，也是 `BattleEndLogic` 判断「战斗是否仍在继续」的一个条件。
- **`Deleted` 之后读取业务字段不安全。** 对象已进入可复用状态。要拿死亡时的完整信息，必须在 `Mission.OnBeforeAgentRemoved` 回调里取。
- **`null` 判断不能替代状态判断。** `mainAgent != null` 只保证引用有效，不保证 `State == Active`。`MultiplayerItemTestMissionController.cs:86` 两者都判，照抄这个结构。
- **优先用 `Agent.IsActive()`。** 它（`Agent.cs:3296-3299`）是 `State == AgentState.Active` 的语义封装，比手写判等更不容易在跨版本时出错。
- **回调参数与属性在那一刻不一致。** `Mission.cs:2988-2989` 先触发事件再写 `affectedAgent.State`，所以在 `OnBeforeAgentRemoved` 回调里读属性得到的是**旧状态**。永远用参数 `agentState`。
- **不要与 [AgentControllerType](../AgentControllerType) 混淆。** 溃逃的单位 `Controller` 仍是 `AI`；玩家自己的单位被击杀后 `Controller` 仍是 `Player`。两个枚举独立演进，没有组合关系。

## 怎么用

### 怎么拿到它

`public enum AgentState`（`TaleWorlds.Core/AgentState.cs:3`）。读入口是 `Agent.State`，通知入口是 `Mission.OnBeforeAgentRemoved` 委托（移除前触发，此刻还能安全读全部数据）。它也带 `DefineAsEngineStruct(..., "Agent_state", false, ...)`（`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:11`），但与 [AgentAttackType](../AgentAttackType) 不同——**`Agent.State` 带 setter，托管侧能写**。

### 典型用法

上面「真实示例」两段都是**读**：判主控还在不在、以及在死亡瞬间按状态分流。写这一侧只有一个正当场景——把溃逃的单位喊回战场：

```csharp
public class MyRallyLogic : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        Team team = Mission.Current.MainAgent != null ? Mission.Current.MainAgent.Team : null;
        if (team == null)
        {
            return;
        }
        foreach (Agent unit in team.ActiveAgents)
        {
            // Routed 是唯一有正当理由从外部写回 Active 的目标状态
            if (unit.State != AgentState.Routed)
            {
                continue;
            }
            unit.State = AgentState.Active;
            MBDebug.Print("[MyMod] 把溃逃单位喊回：" + unit.Name);
            // 一次只改一个：setter 没有托管层校验，批量写会和动画/物理打架
            return;
        }
    }
}
```

与上面「真实示例」的差别：那里只从状态里**读出信息**去打印或分流，写入一次都没有；这里唯一的一行赋值就是写入本身，而且它是**有方向的写**——从 `Routed` 回到 `Active`。`return` 不是省事，是必须的：同一帧里连写多个单位的 `State` 会让动画与状态脱节，而那正是下面那条坑描述的现象。

### 最容易踩的坑

**状态轴没有托管层校验。** `Agent.State` 的 setter 只做「值变了才写」（`Agent.cs:1534`）。**从 `Killed` 或 `Deleted` 写回 `Active` 不会抛异常**，你会得到一个状态与动画互相矛盾的单位。

## 跨版本提示

`AgentState.cs` 在 1.4.5 里是 11 行、6 个成员，属于该版本极小文件批次（`AgentAttackType.cs` 10 行、`AgentControllerType.cs` 9 行同属），是原始源码形态。1.3.x / 1.4.6 的同名文件是反编译产物，行数显著变长但成员集合与 native 绑定名 `"Agent_state"` 一致。跨版本迁移时值得核对两件事：native 侧是否新增了状态成员（一旦新增，**你写死的 `switch` 缺 `default` 分支就会静默失效**），以及 `DefineAsEngineStruct` 的第三个参数是否仍为 `false`——若变成 `true`，说明 native 已把它改成位标志集，本页「判等而非位运算」的结论需要重新审视。

## 依赖关系

- 定义来源：`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:11` 的 `DefineAsEngineStruct` 把它绑到 native 的 `Agent_state`
- 读写入口：[Agent](../../mission/Agent) 的 `State` 属性（`Agent.cs:1529-1541`），getter 走 `AgentHelper.GetAgentState(_statePointer)`
- 语义封装：`Agent.IsActive()`（`Agent.cs:3296`）、`TaleWorlds.Core/IAgent.cs:7` 的 `AgentState State { get; }`
- 关键消费方（Battle 层）：`BattleEndLogic.cs:191`、`BattleObserverMissionLogic.cs:72`、`BannerBearerLogic.cs:723`、`CustomBattleAgentLogic.cs:19`
- 伤害管线：`Mission.cs:3025` 在伤害后续处理里按 `AgentState.Routed` 提前返回
- 事件出口：`Mission.OnBeforeAgentRemoved`（`Mission.cs:1535`）的委托签名带 `AgentState` 与 `KillingBlow`
- 易混枚举：[AgentControllerType](../AgentControllerType)（控制权）、[AgentAttackType](../AgentAttackType)（命中通道）
- 桶首页：[core-extra API 分区](../)