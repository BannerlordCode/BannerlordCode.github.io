---
title: "AgentControllerType"
description: "Agent 控制权归属枚举：None=0 / AI=1 / Player=2 / Count=3，声明顺序本身就是可比较的排序，由 Agent.Controller 的原生指针读写，setter 里挂着一整串编队、网络、AI 切换副作用。"
---

# AgentControllerType

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public enum AgentControllerType`（无 `: byte`，底层 `int`）
**Base:** `System.Enum`
**File:** `TaleWorlds.Core/AgentControllerType.cs`（全文 17 行 / 289 字节）

> 核对记录：读了 `TaleWorlds.Core/AgentControllerType.cs`（289 B）+ `TaleWorlds.MountAndBlade/Agent.cs` 的 `Controller` 属性、`Build`、`OnControlledAgentChanged`、`IsMine`、`IsAIControlled` 四段 + `AgentBuildData.cs` + `AgentCommonAILogic.cs` / `AgentHumanAILogic.cs` + `AgentStatCalculateModel.cs` + `Ballista.cs`。约 20 min。最难判断点：值只有 3 个但 setter 有 11 个分支，必须区分「哪些副作用是 `Player` 专属、哪些是「非 AI」专属」——`value != AgentControllerType.AI` 和 `value == AgentControllerType.Player` 在代码里都出现过，含义完全不同。

## 概述

`AgentControllerType` 描述的是**「这个 Agent 现在归谁操控」**：没人（`None`）、引擎 AI（`AI`）、玩家（`Player`）。三个成员按这个顺序声明，于是**枚举天然可比较**——`Agent.cs:3523` 直接写了 `this.Controller > AgentControllerType.None` 来表达「至少有一个活人在操控它」。这是全树唯一一处依赖枚举顺序的判断，也是这个类型最容易被忽略的语义。

它在 [Agent](../../mission/Agent) 上只有一个落点：`public AgentControllerType Controller { get; private set; }` 风格的属性（实际是 `get` + 带副作用的 `set`，见 [Agent](../../mission/Agent) 页）。读走的是原生内存里的一个字节：`AgentHelper.GetAgentControllerType(this._controllerTypePointer)`；写走的是 `MBAPI.IMBAgent.SetController(this.GetPtr(), value)`。

本类型**不注册为引擎结构体**——`grep -rn "DefineAsEngineStruct(typeof(AgentControllerType)"` 在 `bannerlord-1.3.0/` 零命中。它是通过 `IMBAgent` 的整型参数传递的，所以从纯托管视角看，它比 [AgentAttackType](../AgentAttackType) 那类 ABI 枚举更"软"，改名风险低，重排风险也一样低（引擎只按整数值传，不按名字）。

## 心智模型

把它当成**「控制权的三态 + 一个不可比较的边界」**来读，代码里所有用法都能归进三类。

**第一类：谁是玩家。** [Agent](../../mission/Agent) 顶部两个高频属性直接建立在它之上：

```csharp
public bool IsMine { get { return this.Controller == AgentControllerType.Player; } }
public bool IsAIControlled { get { return this.Controller == AgentControllerType.AI && !GameNetwork.IsClientOrReplay; } }
```

注意 `IsAIControlled` 除了判 `AI` 还叠加了 `!GameNetwork.IsClientOrReplay`——**在联机客户端上，AI 操控的 agent 也不算 `IsAIControlled`**，因为它跑在别人机器上。你自己写行为树时如果只用 `agent.Controller == AgentControllerType.AI`，在客户端会做出跟官方相反的判断。

**第二类：排序比较。** `Agent.cs:3523` 那句 `GameNetwork.IsSessionActive || this.Controller > AgentControllerType.None` 用的是「`> None`」而不是「`!= None`」。因为成员只有三个且顺序是 `None(0) < AI(1) < Player(2)`，两种写法在当前定义下等价。**但这意味着枚举顺序已经进入了业务逻辑**：如果你在派生 mod 里复制这段代码、或者反过来依赖「`> AI` 意味着是玩家」这种更进一步的推论，那就没有任何东西替你兜底。

**第三类：控制权切换的副作用。** 这是这个枚举真正的重量所在。[Agent](../../mission/Agent) 的 `Controller` setter 不是简单的赋值：

```csharp
public AgentControllerType Controller
{
    get { return AgentHelper.GetAgentControllerType(this._controllerTypePointer); }
    set
    {
        AgentControllerType controller = this.Controller;
        if (value != controller)   // 幂等保护：同值直接什么都不做
        {
            if (value == AgentControllerType.Player && this.IsDetachedFromFormation)
            {
                this._detachment.RemoveAgent(this);
                Formation formation = this._formation;
                if (formation != null) { formation.AttachUnit(this); }
            }
            MBAPI.IMBAgent.SetController(this.GetPtr(), value);
            bool flag = value == AgentControllerType.Player;
            if (flag)
            {
                this.Mission.MainAgent = this;
                this.SetAgentFlags(this.GetAgentFlags() | AgentFlag.CanRide);
            }
            Formation formation2 = this.Formation;
            if (formation2 != null) { formation2.OnAgentControllerChanged(this, controller); }
            if (value != AgentControllerType.AI && this.GetAgentFlags().HasAnyFlag(AgentFlag.IsHumanoid))
            {
                Agent mountAgent = this.MountAgent;
                if (mountAgent != null) { mountAgent.SetMaximumSpeedLimit(-1f, false); }
                this.SetMaximumSpeedLimit(-1f, false);
                if (this.WalkMode) { this.EventControlFlags |= Agent.EventControlFlag.Run; }
            }
            foreach (MissionBehavior missionBehavior in this.Mission.MissionBehaviors)
            {
                missionBehavior.OnAgentControllerChanged(this, controller);
            }
            if (flag)
            {
                foreach (MissionBehavior missionBehavior2 in this.Mission.MissionBehaviors)
                {
                    missionBehavior2.OnAgentControllerSetToPlayer(this.Mission.MainAgent);
                }
            }
            if (GameNetwork.IsServer) { /* 广播 SetAgentIsPlayer(this.Index, this.Controller != AgentControllerType.AI) */ }
        }
    }
}
```

从这段能读出三档不同的触发条件，**这是最容易写错的地方**：

| 条件 | 触发什么 |
| --- | --- |
| `value == Player` | 脱离编队重挂载、设 `Mission.MainAgent`、`SetAgentFlags(\| CanRide)`、广播 `OnAgentControllerSetToPlayer`、联机时下发 `SetAgentIsPlayer` 消息 |
| `value != AI`（即 `None` 或 `Player` 都算） | 解除速度上限（`SetMaximumSpeedLimit(-1f, false)`，骑乘时连马一起解除）、若处于 `WalkMode` 则强行打开 `EventControlFlag.Run` |
| 任何变化 | `Formation.OnAgentControllerChanged(agent, oldController)` + 遍历全部 `MissionBehavior.OnAgentControllerChanged(agent, oldController)` |

**「非 AI」和「是玩家」不是一回事**——`None` 也会解除速度上限。把 `Controller = AgentControllerType.None` 当成「只是松手」是错的。

至于初始值和生成期赋值，有两条路径：

- **生成时**：`AgentBuildData` 持有 `public AgentControllerType AgentController { get; private set; }`，构造时初值是 `AgentControllerType.AI`，并由 `public AgentBuildData Controller(AgentControllerType controller)` 这条 fluent 方法改写。但真正落到 agent 上是 `Agent.Build(AgentBuildData)` 里这一句：`this.Controller = (this.GetAgentFlags().HasAnyFlag(AgentFlag.IsHumanoid) ? agentBuildData.AgentController : AgentControllerType.AI);` ——**非人形单位（马、攻城器械、飞行器）无论 build data 写了什么都会被强制成 `AI`**。
- **夺权时**：`Agent` 的受控代理变更回调里 `this.Controller = (value.IsMine ? AgentControllerType.Player : AgentControllerType.None);`。也就是说**「没被任何人接管」对应 `None`，不是 `AI`**——`AI` 意味着引擎的行为树在管，两者语义正交。

最后是 AI 组件的换手。[AgentCommonAILogic](../../mission-ext/AgentCommonAILogic) 与 [AgentHumanAILogic](../../mission-ext/AgentHumanAILogic) 都重写了 `OnAgentControllerChanged(Agent agent, AgentControllerType oldController)`，形状一致：`agent.Controller == AgentControllerType.AI` 时挂上自己的组件（`CommonAIComponent` / `HumanAIComponent`），而 `oldController == AgentControllerType.AI` 时把旧组件拆掉。**注意它比的是 `oldController`，不是「切换前有没有 AI」**。

## 关键成员

| 成员 | 值 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- | --- |
| `None` | `0` | `None` | 无人操控。夺权回调里「不是我的」走这个分支；也是 `Controller > AgentControllerType.None` 这种排序判断里的下界。**它不等于「AI 停了」**——停在 `None` 会触发 `value != AI` 分支解除速度上限。 |
| `AI` | `1` | `AI` | 引擎行为树在管。`AgentBuildData.AgentController` 的初值就是它；`Agent.Build` 把它当作非人形单位的强制值；`IsAIControlled` 判它（且额外要求非联机客户端）；两个 AI logic 用它决定挂不挂 AI 组件。 |
| `Player` | `2` | `Player` | 玩家操控。`IsMine` 判它；setter 里它独占四类副作用（重挂编队、设 `MainAgent`、加 `CanRide` 标志、广播网络消息）。**它是唯一一个会触发 `OnAgentControllerSetToPlayer` 的值。** |
| `Count` | `3` | `Count` | 哨兵。1.3.0 托管代码里 `grep -rn "AgentControllerType.Count"` 零命中，纯预留成员；和 [AgentAttackType](../AgentAttackType) 的 `Count` 是同一套惯例。**不要拿它当上界做循环**。 |

## 真实示例

生成一个由玩家直接操控的单位。这段代码逐字来自官方 `SandBox/Issues/IssueQuestTasks/ArenaDuelQuestTask.cs` 的 `SpawnArenaAgent`，只是把裸整数换成了枚举名——**官方自己就写的是 `.Controller((character == CharacterObject.PlayerCharacter) ? 2 : 1)`**，2 是 `Player`、1 是 `AI`：

```csharp
private Agent SpawnMyArenaAgent(CharacterObject character, Team team, MatrixFrame frame)
{
    Mission mission = Mission.Current;
    AgentBuildData agentBuildData = new AgentBuildData(character)
        .Team(team)
        .ClothingColor1(team.Color)
        .ClothingColor2(team.Color2)
        .InitialPosition(ref frame.origin);
    Vec2 direction = frame.rotation.f.AsVec2;
    direction = direction.Normalized();
    // 原版写的是 ? 2 : 1，2 == Player、1 == AI
    AgentBuildData build = agentBuildData.InitialDirection(ref direction)
        .NoHorses(true)
        .TroopOrigin(new SimpleAgentOrigin(character, -1, null, default(UniqueTroopDescriptor)))
        .Controller(character == CharacterObject.PlayerCharacter ? AgentControllerType.Player : AgentControllerType.AI);
    Agent agent = mission.SpawnAgent(build, false);
    if (agent.IsAIControlled)
    {
        agent.SetWatchState(2);   // 原版这里是裸整数
    }
    return agent;
}
```

注意 `Controller(Player)` 只在 `IsHumanoid` 成立时才会生效——换成马或攻城器械的 `BasicCharacterObject`，`Agent.Build` 会按回 `AI`，不报错。

在自己的 `MissionBehavior` 里响应控制权变更（把官方两个 AI logic 的重写形状抄准）：

```csharp
public class MyControllerWatcher : MissionBehavior
{
    protected internal override void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)
    {
        if (agent == null)
        {
            return;
        }
        // 官方 AgentHumanAILogic 的形状：从 AI 交出去时拆组件，交给 AI 时挂组件
        if (oldController == AgentControllerType.AI)
        {
            // HumanAIComponent / CommonAIComponent 的 setter 是 private，
            // 托管侧不能自己换，只能读出来判断或交给官方 AI logic 去换
            if (agent.HumanAIComponent != null)
            {
                MBDebug.Print("[MyMod] unit " + agent.Index + " left AI control");
            }
        }
        if (agent.Controller == AgentControllerType.AI && agent.IsHuman)
        {
            agent.SetAIBehaviorParams(HumanAIComponent.AISimpleBehaviorKind.GoToPos, 0f, 0f, 0f, 0f, 0f);
        }
    }
}
```

想要 `Player` 专属的一次性钩子，官方给的是 `OnAgentControllerSetToPlayer`（`MissionBehavior.cs:93`）：

```csharp
public class MyPlayerHandoff : MissionBehavior
{
    public override void OnAgentControllerSetToPlayer(Agent agent)
    {
        // 这是 Agent.Controller setter 里 flag == true 时遍历全部 MissionBehavior 触发的
        MBInformationManager.ShowHint(agent.Character.Name + " 现在由你指挥");
        agent.SetWatchState(2);
    }
}
```

判「本地玩家操控」用 `IsMine`，不要用 `IsAIControlled`：

```csharp
public class MyHumanOnlyRule : MissionLogic
{
    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
    {
        if (affectorAgent == null || !affectorAgent.IsMine || affectorAgent.IsAIControlled)
        {
            return;   // 联机客户端上 IsAIControlled 恒为 false，两者叠加才是真玩家
        }
        MBInformationManager.ShowHint("真人玩家击杀了一次单位");
    }
}
```

## 风险与边界

- **setter 有 11 个副作用，改一次控制权不是改一个字段。** 最容易踩的三条：变成 `Player` 会**重挂编队**（从 `_detachment` 移除再 `AttachUnit`）；变成 `Player` 会**设 `Mission.MainAgent`**（全局单例，被多方抢就会互相覆盖）；变成 `Player` 会**加 `AgentFlag.CanRide`** 且这个标志只加不减（`|=` 无对应的清除分支）。
- **`None` 与 `AI` 的语义正交，别混。** `None` = 没人管（玩家放手），`AI` = 引擎管。`value != AgentControllerType.AI` 这个分支会**解除速度上限并强制 Run 标志**——把一个正常 AI 单位设成 `None` 会让它跑起来且不限速。
- **`Agent.Build` 会覆盖你的 build data。** 非人形单位（`AgentFlag.IsHumanoid` 未置位）强制 `AI`。你的 `AgentBuildData.Controller(Player)` 在马身上静默失效。
- **联机下 `IsAIControlled` 语义变了。** 它带 `!GameNetwork.IsClientOrReplay`，客户端上所有 agent 的 `IsAIControlled` 都是 `false`。要判「这台机器上没人管它」用 `agent.Controller == AgentControllerType.AI`，要判「本地玩家操控」用 `agent.IsMine`。
- **别依赖枚举顺序做更细的比较。** 唯一被官方使用的地方是 `Controller > AgentControllerType.None`，等价于 `!= None`。`> AI`、`>= AI` 这类写法在 1.3.0 里没有先例，属于你在赌声明顺序。
- **官方自己就在写裸整数。** `SandBox/Issues/IssueQuestTasks/ArenaDuelQuestTask.cs` 里是 `.Controller((character == CharacterObject.PlayerCharacter) ? 2 : 1)`，同一行还有 `agent.SetWatchState(2)`。**如果某个值语义变了但整数值没变，这些官方调用点不会编译失败，只会行为漂移**——你在 1.3.0 上验证过的裸整数，到新版本不能想当然。
- **`Count` 是死的。** 没有任何代码用它，也不保证等于成员数。本枚举 4 个成员，`Count == 3`。
- **不注册为引擎结构体，但仍走 `IMBAgent` 整型传参。** 改名安全，重排也不改 ABI，但反过来——**原生层永远只认整数**，你在托管侧定义新成员（比如加一个 `Scripted`）会编译通过，但 `SetController` 传出去的整数原生不认，行为未定义。
- **`Mission.MainAgent` 是单例。** 多次把不同 agent 设成 `Player` 会互相顶掉，前一个 setter 里 `Mission.MainAgent = this` 的效果被后一个覆盖，但 `OnAgentControllerSetToPlayer` 已经广播过了。

## 怎么用

### 怎么拿到它

它是 `public enum AgentControllerType`（`TaleWorlds.Core/AgentControllerType.cs:6`，无 `: byte`，底层 `int`）。读入口是 `Agent.Controller`（`TaleWorlds.MountAndBlade/Agent.cs:1074`）与 `MissionBehavior.OnAgentControllerChanged(Agent, AgentControllerType)` 的 `oldController` 形参；**写入口只有 `Agent.Controller` 的 setter 一条**。还有第三个读点值得记住：`Agent.Build` 在 `Agent.cs:5467` 用它决定非人形单位一律回落到 `AI`，所以你在 `AgentBuildData.Controller(...)` 上写什么，对马和攻城器械都不算数。

### 典型用法

把控制权从 AI 交到玩家是一次性的、有副作用的动作，不适合在回调里顺手改。收集候选、把副作用集中到一次：

```csharp
public class MyControlArbiter : MissionBehavior
{
    private readonly List<Agent> _candidates = new List<Agent>();

    protected internal override void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)
    {
        if (agent == null || agent.Controller != AgentControllerType.AI)
        {
            return;
        }
        // 非人形单位赋 Player 也没用：Agent.Build 会打回 AI，白跑一遍 setter
        if (!agent.IsHumanoid)
        {
            return;
        }
        _candidates.Add(agent);
    }

    // 11 个副作用只在这一处付：重挂编队、设 Mission.MainAgent、加 AgentFlag.CanRide……
    public AgentControllerType PromoteFirstCandidate()
    {
        if (_candidates.Count == 0)
        {
            return AgentControllerType.None;
        }
        Agent agent = _candidates[0];
        _candidates.RemoveAt(0);
        agent.Controller = AgentControllerType.Player;
        return agent.Controller;
    }
}
```

与上面「真实示例」那两段的差别：那里一段在**生成时**就写定控制权、另一段在回调里**读**出来判断；这里是在回调里**攒候选**、在你自己选定的时刻**写**一次——因为 setter 的副作用是全局的（`Mission.MainAgent` 是单例），在谁的控制权变化回调里抢写都会互相覆盖。

### 最容易踩的坑

**setter 有 11 个副作用，改一次控制权不是改一个字段。** 最容易踩的三条：变成 `Player` 会重挂编队（从 `_detachment` 移除再 `AttachUnit`）；会设 `Mission.MainAgent`（全局单例）；会 `|=` 上 `AgentFlag.CanRide` 且**只加不减**，没有对应的清除分支。

## 跨版本提示

`AgentControllerType.cs` 在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` **五棵树里 md5 完全一致**（`acb39c17…`），17 行 / 289 字节，成员、值、顺序一字未改。**跨 1.3 → 1.5 三个大版本零变化**，你的 `Controller(AgentControllerType.Player)` 升到 1.5.3 依然编译通过、行为一致。

同样地，`bannerlord-1.4.5/` 那棵树保存的是去掉了 `// Token:` 注释的精简版，`AgentControllerType.cs` 只有 9 行 / 101 字节——**这是存储格式差异，不是类型缩水**，别据此判断「1.4.5 精简了枚举」。

`Agent.Controller` 的 setter 主体（重挂编队 / `MainAgent` / `CanRide` / 速度上限 / 两次 `MissionBehavior` 回调 / 联机广播）在 1.3.0 → 1.5.3 全程存在，没有被拆分或改签名。真正会随版本漂移的是**被它触发的 `MissionBehavior` 子类数量**——新版本会加入更多 AI logic 重写 `OnAgentControllerChanged`，你的重写如果没调 `base.OnAgentControllerChanged(agent, oldController)`，在旧版本上没事、在新版本上会静默丢掉新逻辑。

## 依赖关系

- 宿主属性：[Agent](../../mission/Agent) 的 `Controller` 属性是本枚举唯一的落点，`IsMine` / `IsAIControlled` 两个便捷属性都建立在它之上
- 生成期输入：[AgentBuildData](../../mission-ext/AgentBuildData) 的 `AgentController` 属性与 `Controller(AgentControllerType)` fluent 方法，决定初始控制权（人形单位）
- AI 换手：[AgentCommonAILogic](../../mission-ext/AgentCommonAILogic) 与 [AgentHumanAILogic](../../mission-ext/AgentHumanAILogic) 重写 `OnAgentControllerChanged`，靠 `oldController == AI` 与 `Controller == AI` 两端夹住组件生命周期
- 编队联动：[Formation](../../mission/Formation) 的 `OnAgentControllerChanged(Agent, AgentControllerType)` 在 setter 里紧跟着被调用
- 属性副作用：[DrivenProperty](../DrivenProperty) 里的 `UseRealisticBlocking` 由 `agent.Controller != AgentControllerType.Player` 驱动，见 `AgentStatCalculateModel.cs:256`
- 同族惯例：[AgentAttackType](../AgentAttackType) 与本页的 `Count` 都是「末尾哨兵」写法，但它是 ABI 枚举，本页不是
- 桶首页：[core-extra API 分区](../)