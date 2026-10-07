---
title: "AgentControllerType"
description: "agent 控制权枚举：None / AI / Player / Count。它决定一个 agent 由谁的输入驱动，并连带触发一串副作用（编队脱离/挂回、Mission.MainAgent 改写、CanRide 标志置位），非人形单位会被强制改写为 AI。"
---

# AgentControllerType

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public enum AgentControllerType`
**Base:** 无
**File:** `TaleWorlds.Core/AgentControllerType.cs`

## 概述

`AgentControllerType` 标注的是 mission 里一个 agent 的**控制权归属**：这一帧的移动与动作指令来自 AI 决策、来自玩家输入，还是「谁都不是」。它是战斗逻辑里最基础的一次分流——`Agent.IsMine`、`Agent.IsAIControlled`、伤害归属判定、指令下发，全都建立在这个值上。与 [AgentState](../AgentState)（这一条命打完了吗）不同，它回答的是**「现在谁在操作他」**。

它承担的是**输入源标记**这一环，而且这个标记**不是只读的标签**：把它写成 `Player` 会触发一连串真实副作用（编队挂接、`Mission.MainAgent` 改写、`CanRide` 能力位打开），所以它事实上是**mission 内的一个控制权移交操作**。它由 native 定义并持有——`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:13` 的 `[assembly: DefineAsEngineStruct(typeof(AgentControllerType), "Agent_controller_type", false, null, null)]`——但**托管侧确实有写路径**，因为 `Agent.Controller` 是个带 setter 的属性。

## 心智模型

把它当成**「这个单位的遥控器握在谁手里」的开关**，而不是一个可以随便改的标签。判断要不要碰它，先问：这个改动会不会把某个单位从 AI 手里抢过来？

**读它是安全的，写它有代价。** 读侧最常用的三个入口都在 `TaleWorlds.MountAndBlade/Agent.cs`：`IsMine`（`:636`，`Controller == AgentControllerType.Player`）、`IsAIControlled`（`:644-653`）、以及 `Formation` 相关判断。写侧全部集中在 `Agent.Controller` 的 setter（`Agent.cs:1199-1235`），它按顺序做了五件事：同值则直接返回（`:1207-1210`）；若新值是 `Player` 且当前已脱离编队，则先 `_detachment.RemoveAgent(this)` 再 `_formation?.AttachUnit(this)`（`:1212-1216`）；调 `MBAPI.IMBAgent.SetController` 写入 native（`:1217`）；若新值是 `Player`，则**改写 `Mission.MainAgent` 并把 `CanRide` 能力位置上**（`:1218-1222`）；最后通知编队 `Formation?.OnAgentControllerChanged`，并在非 AI 状态下解除人形的速度限制（`:1223-1230`）。所以「把某个 agent 设为 Player」在语义上等于「让玩家接管这个单位并把它扶上马」——这不是你调个属性那么简单。

由此推出四条必须记住的结论。第一，**非人形单位会被强制改写为 AI**。`Agent.Build`（`Agent.cs:5172`）里那行 `Controller = (!GetAgentFlags().HasAnyFlag(AgentFlag.IsHumanoid) ? AgentControllerType.AI : agentBuildData.AgentController);` 意味着：你在 `AgentBuildData` 上怎么设都不作数，狼、牛、攻城器械一律是 AI。第二，**`IsAIControlled` 在客户端与回放里恒为 false**。它的 getter（`Agent.cs:644-653`）在 `Controller == AgentControllerType.AI` 时还要再判一次 `!GameNetwork.IsClientOrReplay`。写单机逻辑时测试得通、联机就失效的 bug，多半出在这里。第三，**`None` 不是「未初始化」而是「无控制」**，值 0。`AgentControllerType` 没有 `[Flags]`，`AI | Player`（1 | 2）会得到一个不属于任何命名成员的值 3，而 `Count` 恰好也是 3——用位运算去组合它会直接踩到哨兵。第四，**`Player` 是全局唯一的稀缺资源**：它同时是 `Mission.MainAgent` 的写入条件。给一支部队里两个单位都设 `Player`，`Mission.MainAgent` 会被最后一个覆盖，而 `IsMine` 会对两个都返回 true——这个不一致没有任何断言拦你。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `None` | `None = 0` | 无控制源。既不是 AI 也不是玩家，通常出现在 agent 刚构造、尚未 `Build` 之前的窗口里，以及 `Mission.Current` 为 null 的编辑/测试场景。**不要用它当「未初始化」的哨兵去比较**——`default(AgentControllerType)` 就是它，读到的 `None` 有真实的业务含义。 |
| `AI` | `AI = 1` | 由 AI 驱动。**非人形单位的强制取值**（`Agent.cs:5172`）。`IsAIControlled` 判它，但还要叠加 `!GameNetwork.IsClientOrReplay`——客户端与回放下即使值是 AI，`IsAIControlled` 也返回 false。 |
| `Player` | `Player = 2` | 由玩家驱动。写入它会连带：脱离中的单位先回编队、写入 native、`Mission.MainAgent = this`、打开 `AgentFlag.CanRide`、通知编队。`Agent.IsMine` 就是判它。**这是唯一有全局副作用的取值。** |
| `Count` | `Count = 3` | **哨兵值，表示合法成员个数（3），不是控制权类型。** 它与 `AI | Player` 的位或结果数值相同，因此**对这个枚举做位运算是自毁行为**。穷举 `Enum.GetValues` 时会拿到它。 |
| （程序集特性）`DefineAsEngineStruct` | `[assembly: DefineAsEngineStruct(typeof(AgentControllerType), "Agent_controller_type", false, null, null)]`，`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:13` | 把它绑定到 native 的 `Agent_controller_type` 结构体，`false` 表示非位标志集，调试缩写为空。与 [AgentState](../AgentState) 不同，**这个枚举在托管侧有真实写路径**（`Agent.Controller` 的 setter），所以它不只是个镜像。 |

## 真实示例

用 `AgentBuildData` 在生成时指定控制权（这是唯一「干净」的时机——之后再改就会触发上面那一串副作用）：

```csharp
AgentBuildData buildData = new AgentBuildData(new BasicBattleAgentOrigin(villagerTroop))
    .Team(Mission.Current.AttackerTeam)
    .Controller(AgentControllerType.AI)
    .InitialFrameFromSpawnPointEntity(spawnEntity);

Mission.Current.SpawnAgent(buildData);
```

在 mission 运行期做控制权移交时，要清楚 `Mission.MainAgent` 会跟着走（对照 `Agent.cs:1218-1222` 的副作用）：

```csharp
private void HandOverToPlayer(Agent unit)
{
    if (unit.Controller == AgentControllerType.Player)
    {
        Debug.Print("already player controlled", 0);
        return;
    }

    // This single assignment will: pull a detached unit back into its formation,
    // rewrite Mission.MainAgent, and set the CanRide agent flag.
    unit.Controller = AgentControllerType.Player;

    if (Mission.Current.MainAgent != unit)
    {
        Debug.Print("warning: Mission.MainAgent is " + Mission.Current.MainAgent, 0);
    }

    // CanRide was just turned on as a side effect, which is why a footman can now mount.
    if (unit.GetAgentFlags().HasAnyFlag(AgentFlag.CanRide))
    {
        Debug.Print("unit can now ride, index = " + unit.Index, 0);
    }
}
```

过滤哨兵值，做穷举时永远别把 `Count` 当成一种控制权：

```csharp
public static class ControllerTally
{
    // Count == 3 is the member-count sentinel. A range test against it is the only
    // safe way to enumerate, because Count is numerically equal to (AI | Player).
    public static bool IsRealController(AgentControllerType controller)
    {
        return controller == AgentControllerType.None
            || controller == AgentControllerType.AI
            || controller == AgentControllerType.Player;
    }

    public static string Describe(AgentControllerType controller)
    {
        if (!IsRealController(controller))
        {
            return "unset";
        }
        return controller.ToString();
    }
}
```

## 风险与边界

- **写 `Player` 有五重副作用，不是设个属性那么简单。** `Agent.Controller` 的 setter 会动编队、`Mission.MainAgent`、`CanRide` 能力位、速度上限与编队回调。频繁切换会撕裂编队状态。
- **`Mission.MainAgent` 只保留最后一个。** 给多个单位设 `Player` 后 `IsMine` 全都返回 true，但 `Mission.MainAgent` 只指向最后写入的那个。**`IsMine` 和 `MainAgent` 不是同一件事**，需要「唯一玩家单位」时必须自己判 `agent == Mission.Current.MainAgent`。
- **非人形一律 AI。** `Agent.Build`（`Agent.cs:5172`）在 `!IsHumanoid` 时直接选 `AgentControllerType.AI`，你在 `AgentBuildData` 上的设置被丢弃。兽类与器械没有 `Player` 状态。
- **`IsAIControlled` 在联机/回放下失效。** 它的 getter 里有 `!GameNetwork.IsClientOrReplay` 判断（`Agent.cs:648`）。任何依赖它的单机逻辑一到多人就返回 false。
- **不能做位运算。** 没有 `[Flags]`，且 `Count == 3 == (AI | Player)`。任何 `|` 组合都会造出与哨兵同值的非法状态。
- **跨 native 边界，写入即通知引擎。** setter 立刻调 `MBAPI.IMBAgent.SetController`，native 侧会切换 AI 决策模块。在 mission tick 期间于遍历中改动控制权，可能让同一帧的 AI 行为与你的预期不一致。
- **`AgentBuildData.Controller` 是更安全的入口。** 生成期设置不会触发运行时那串副作用；`AgentControllerType` 页面上真正该用的写法是「生成时定好，之后尽量不改」。
- **不要与 [AgentState](../AgentState) 混淆。** 前者是「谁在操作」，后者是「这条命还在不在」。两者没有派生关系，组合判断时两个都要查。

## 怎么用

### 怎么拿到它

`public enum AgentControllerType`（`TaleWorlds.Core/AgentControllerType.cs:3`）。它与本页其他两个枚举不同——虽然也带 `DefineAsEngineStruct`（`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:13`）绑到 native，但**它在托管侧有真实写路径**：`Agent.Controller` 的 setter。读路径是 `Agent.Controller`、`Agent.IsMine`、`Agent.IsAIControlled`，通知路径是 `OnAgentControllerChanged`。

### 典型用法

上面「真实示例」一段在生成时指定、一段在运行期单次移交。真正的痛点在**批量**移交：`Mission.MainAgent` 是全局单例，每写一次 `Player` 就会覆写它一次，所以要排成队、一次只交一个：

```csharp
public class MyControlQueue : MissionBehavior
{
    private readonly List<Agent> _queue = new List<Agent>();

    public void Enqueue(Agent agent)
    {
        if (agent == null || agent.Controller != AgentControllerType.AI)
        {
            return;
        }
        // 别重复入队：同一个 agent 被移交两次会把编队状态撕两次
        if (!this._queue.Contains(agent))
        {
            this._queue.Add(agent);
        }
    }

    // 一次只交一个：每次写 Player 都会重写 Mission.MainAgent
    public AgentControllerType PromoteOne()
    {
        if (this._queue.Count == 0)
        {
            return AgentControllerType.None;
        }
        Agent agent = this._queue[0];
        this._queue.RemoveAt(0);
        agent.Controller = AgentControllerType.Player;
        return agent.Controller;
    }
}
```

与上面「真实示例」的差别：那里是**单点移交**——一个 `unit`、一次赋值、赋值后立刻读回 `Mission.MainAgent` 做校验；这里处理的是**移交的节奏**：先收队列、再逐个交，每交一个就返回实际生效的取值，让调用方能知道此刻谁持有控制权。它不关心单个 setter 的五重副作用细节，只关心副作用的**全局单例部分**不要被连续触发。

### 最容易踩的坑

**写 `Player` 有五重副作用，不是设个属性那么简单。** `Agent.Controller` 的 setter 会动编队、`Mission.MainAgent`、`CanRide` 能力位、速度上限与编队回调。频繁切换会撕裂编队状态。

## 跨版本提示

`AgentControllerType.cs` 在 1.4.5 里只有 9 行、4 个成员（`AgentState.cs` 11 行、`AgentAttackType.cs` 10 行同属这一批极小文件），是 1.4.5 的原始源码形态。1.3.x / 1.4.6 的同名文件是反编译产物，行数远大于此，但成员集合与 native 绑定名 `"Agent_controller_type"` 一致。跨版本迁移时值得核对的两件事：`Agent.Controller` 的 setter 副作用集合是否增补（1.4.5 里有编队回挂、`MainAgent` 改写、`CanRide` 置位三条），以及 `DefineAsEngineStruct` 的第三参数是否仍为 `false`——若哪天变成 `true`，说明 native 侧改成了位标志集，本页关于「不能位运算」的结论就要跟着改。

## 依赖关系

- 定义来源：`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:13` 的 `DefineAsEngineStruct` 把它绑到 native 的 `Agent_controller_type`
- 读写入口：`TaleWorlds.MountAndBlade/Agent.cs:1199-1235` 的 `Agent.Controller` 属性（getter 走 `AgentHelper.GetAgentControllerType`，setter 有一串副作用）
- 派生判断：[Agent](../../mission/Agent) 的 `IsMine` / `IsAIControlled`（`Agent.cs:636` / `:644`）
- 常见取值来源：[AgentBuildData](../../mission-ext/AgentBuildData).Controller，经 `Agent.Build`（`Agent.cs:5172`）转交，非人形会被强制改成 AI
- 编队耦合：`Formation.OnAgentControllerChanged` 与 `_detachment.RemoveAgent` / `_formation.AttachUnit`
- 能力位联动：置 `Player` 时打开 [AgentFlag](../AgentFlag) 的 `CanRide`
- 易混枚举：[AgentState](../AgentState)（命的状态）、`Agent.UnderAttackType`（被攻击状态）
- 桶首页：[core-extra API 分区](../)