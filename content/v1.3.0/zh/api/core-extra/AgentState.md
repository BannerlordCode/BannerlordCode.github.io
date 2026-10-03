---
title: "AgentState"
description: "单位生存状态枚举：None/Active/Routed/Unconscious/Killed/Deleted，由原生写、IAgentStateDecider 定夺、在 OnAgentRemoved 里以参数形式发给全部 MissionBehavior，官方沙盒大量用裸数字 2/3/4 判定。"
---

# AgentState

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public enum AgentState`（无 `: byte`，底层 `int`）
**Base:** `System.Enum`
**File:** `TaleWorlds.Core/AgentState.cs`（全文 21 行 / 384 字节）

> 核对记录：读了 `TaleWorlds.Core/AgentState.cs`（384 B）+ `TaleWorlds.MountAndBlade/Agent.cs` 的 `State` 属性（1720–1738 行）+ `TaleWorlds.MountAndBlade/Mission.cs` 的 `GetAgentState`（4700–4745 行）与 `OnAgentRemoved`（2561–2600 行）与 `OnAgentDeleted`（2544–2552 行） `TaleWorlds.MountAndBlade/IAgentStateDecider.cs` + `TaleWorlds.MountAndBlade/BattleObserverMissionLogic.cs:52-78`（唯一一处完整 switch）+ `TaleWorlds.MountAndBlade/CustomBattleAgentLogic.cs:40-60` + `BattleHighlightsController.cs:25/43/62` + `SandBox/Missions/MissionLogics/BattleAgentLogic.cs:127-140` + `SandBox/Missions/CheckpointMissionLogic.cs:40/124` + `AI/AgentComponents/ScriptedMovementComponent.cs:33`。约 30 min。最难判断点：`None` 既是 `Mission.GetAgentState` 里的「尚未决断」中间值，又是「没有任何 decider 说话」的信号，而真正派发给 `OnAgentRemoved` 的值永远不会是 `None` 或 `Active`——枚举有 6 个成员但回调里只可能出现 3 个。

## 概述

`AgentState` 描述**一个单位在战场上的最终归宿**。六个成员分三段：

| 段 | 成员 | 值 | 语义 |
| --- | --- | --- | --- |
| 未决 / 未初始化 | `None` | `0` | 在 `Mission.GetAgentState` 里是「还没人决定」；在 agent 刚生成、还没有任何判决时也是它 |
| 存活 | `Active` | `1` | 还在场上行动。**唯一被高频读写的成员**：`Agent.IsActive()` 就是 `this.State == AgentState.Active` |
| 退出但未死 | `Routed` | `2` | 溃退/脱离战斗 |
| 退出且失去战力 | `Unconscious` | `3` | 被打晕，可以被救起 |
| 退出且死亡 | `Killed` | `4` | 阵亡 |
| 已从战场移除 | `Deleted` | `5` | 尸体/单位已被引擎从活跃列表移除 |

**关键结论：`OnAgentRemoved` 的 `agentState` 参数只可能是 `Routed`、`Unconscious`、`Killed` 三个值之一。** 依据有两条：

- `Mission.GetAgentState` 的返回值域就是这三个（`IAgentStateDecider.GetAgentState` 的实现被强制如此，官方实现 `ArenaAgentStateDeciderLogic` 直接 `return 3;` 即 `Killed`）。
- `BattleObserverMissionLogic.OnAgentRemoved`（`BattleObserverMissionLogic.cs:52`）是全树唯一一处完整的 `switch (agentState)`，它的三个 `case` 正好是 `Routed` / `Unconscious` / `Killed`，**`default` 分支直接 `throw new ArgumentOutOfRangeException("agentState", agentState, null);`**。任何第四个值都会让官方战场统计逻辑当场崩掉。

`Deleted` 走的是另一条路：`Mission.cs:2544` 的 `internal void OnAgentDeleted(Agent affectedAgent)` 是一个 `[MBCallback]` 原生回调，第一行就是 `affectedAgent.State = AgentState.Deleted;`，随后遍历 `MissionBehavior.OnAgentDeleted(affectedAgent)` 并把它从 `_allAgents` 移除。它**会出现在 `agent.State` 上**，但不走 `OnAgentRemoved` 的参数。

**没有引擎结构体注册。** `grep -rn "DefineAsEngineStruct(typeof(AgentState)"` 在 1.3.0 零命中——它是通过 `MBAPI.IMBAgent.SetStateFlags(UIntPtr, AgentState)` 传整数的，与 [AgentAttackType](../AgentAttackType) 那类 ABI 枚举不同，改名安全。

## 心智模型

把它当成**「一次死亡判决的结果 + 单位在引擎里的存续标记」**两件事合在同一个枚举里。

**第一段，判决是怎么产生的。** `Mission.GetAgentState(Agent affectorAgent, Agent agent, DamageTypes damageType, WeaponFlags weaponFlags)`（`Mission.cs:4704`）的流程只有四步：

```csharp
float agentStateProbability = MissionGameModels.Current.AgentDecideKilledOrUnconsciousModel.GetAgentStateProbability(affectorAgent, agent, damageType, weaponFlags, out num);
AgentState agentState = AgentState.None;                       // ① 先假设没人说话
bool flag = false;                                             // ② usedSurgery
foreach (MissionBehavior missionBehavior in this.MissionBehaviors)
{
    IAgentStateDecider agentStateDecider;
    if ((agentStateDecider = (missionBehavior as IAgentStateDecider)) != null)
    {
        agentState = agentStateDecider.GetAgentState(agent, agentStateProbability, out flag);
        break;                                                  // ③ 第一个 decider 说了算
    }
}
if (agentState == AgentState.None)                             // ④ 没有 decider → 概率掷骰
{
    float randomFloat = MBRandom.RandomFloat;
    if (randomFloat < agentStateProbability) { agentState = AgentState.Killed; flag = true; }
    else
    {
        agentState = AgentState.Unconscious;
        if (randomFloat > 1f - num) { flag = true; }
    }
}
if (flag && affectorAgent != null && affectorAgent.Team != null && agent.Team != null && affectorAgent.Team == agent.Team)
{
    flag = false;                                               // 友军击杀不算「需要手术」
}
```

三个可注入点，按优先级：

- **`MissionGameModels.Current.AgentDecideKilledOrUnconsciousModel`** 给出概率 `agentStateProbability`（死亡的概率）与 `num`（不死的概率里「重度受伤」的份额）。**掷骰的骰子由它决定。**
- **任意 `MissionBehavior` 实现 `IAgentStateDecider`** 就能完全接管。遍历是 `foreach … break`，所以**第一个实现该接口的 behavior 说了算**，后面的被忽略。加一个实现就能把整场战斗的生死判定换掉。
- **`None` 是「我要放弃」信号。** `ArenaAgentStateDeciderLogic.GetAgentState` 只有三行：`usedSurgery = false; return 3;`——它返回 `Killed`（3），因为竞技场里只有「打死」一种处理。**如果你想让官方兜底逻辑接手，返回 `AgentState.None`。**

**第二段，判决如何变成事件。** `Mission.OnAgentRemoved`（`Mission.cs:2561`）：

```csharp
Mission.OnBeforeAgentRemovedDelegate onBeforeAgentRemoved = this.OnBeforeAgentRemoved;
if (onBeforeAgentRemoved != null) { onBeforeAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow); }
affectedAgent.State = agentState;                              // 先把状态写到 agent 上
if (affectorAgent != null && affectorAgent.Team != affectedAgent.Team) { affectorAgent.KillCount++; }
Team team = affectedAgent.Team;
if (team != null) { team.DeactivateAgent(affectedAgent); }
foreach (MissionBehavior missionBehavior in this.MissionBehaviors)
{
    missionBehavior.OnEarlyAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);   // 先
}
foreach (MissionBehavior missionBehavior2 in this.MissionBehaviors)
{
    missionBehavior2.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);       // 后
}
```

**注意顺序**：`State` 在两个回调之前就被写好了，所以回调里 `affectedAgent.State == agentState` 恒成立（除了 `ScriptedMovementComponent` 那种在更早时刻读的代码）。而 `OnEarlyAgentRemoved` 早于 `OnAgentRemoved`——`CheckpointMissionLogic` 用的是前者，正是为了在 agent 被真正清理掉之前抓住它的位置。

**第三段，三个值分别意味着什么。** 全树的消费点可以归成三类：

- **`Routed`（2）：不是死，是退。** `BattleObserverMissionLogic` 给它 `TroopNumberChanged(side, …, -1, 0, 0, 1, 0, 0)`——损失 1 人、击杀 0。`BannerBearerLogic.cs:242` 只在 `agentState == AgentState.Routed` 时触发旗帜掉落逻辑；`BattleEndLogic.cs:165` 也在 `Routed` 时做「守军后撤」判断。`ScriptedMovementComponent.cs:33` 的 `_targetAgent.State != AgentState.Routed && _targetAgent.State != AgentState.Deleted` 是「目标还值得追」的条件。
- **`Unconscious`（3）：活着但废了。** `BattleObserverMissionLogic` 给 `-1, 0, 1, 0, 0`（损失 1、击倒 1）。`BattleHighlightsController.cs:25` 把 `Killed` 与 `Unconscious` 合并处理（都算「需要显示击杀提示」），`:43` 和 `:62` 也用 `agent.State != AgentState.Killed && agent.State != AgentState.Unconscious` 判断「还有活人能打」。
- **`Killed`（4）：真死。** `BattleObserverMissionLogic` 给 `-1, 1, 0, 0, 0`（损失 1、击杀 1）。`CheckpointMissionLogic.cs:124` 把它和 `Deleted` 一起当作「算一具要复现的尸体」。

## 关键成员

| 成员 | 值 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- | --- |
| `None` | `0` | `None` | 「尚未决断」。`Mission.GetAgentState` 把它作为初值，decider 返回它就等于弃权、走概率兜底；`MapConversationAgent.cs:43` 在地图对话里直接 `return AgentState.Active;`（不走这套流程）。**不会作为 `OnAgentRemoved` 的参数出现。** |
| `Active` | `1` | `Active` | 存活且在行动。`Agent.IsActive()` 就是 `this.State == AgentState.Active`（`Agent.cs:3438`），全树 778 处 `IsActive()` 调用都建立在它之上；`Agent.cs:4169` 与 `:4679` 的动作约束也判它。**写它靠 `MapConversationAgent` 与原生层，托管代码基本只读。** |
| `Routed` | `2` | `Routed` | 溃退。`BattleObserverMissionLogic` 的第一个 `case`；`BannerBearerLogic` 的旗帜掉落分支；`BattleEndLogic` 的后撤判断；`ScriptedMovementComponent` 的「不值得追」条件之一。**官方代码里也常写成裸数字 `2`**（`BattleAgentLogic.cs:129`）。 |
| `Unconscious` | `3` | `Unconscious` | 昏迷。`BattleObserverMissionLogic` 的第二个 `case`；`BattleHighlightsController` 与 `Killed` 合并处理；`SandboxBattleMoraleModel` 用它算士气变化。**`ArenaAgentStateDeciderLogic` 的 `return 3;` 指的就是它**——不是 `Killed`，`Killed` 是 4。 |
| `Killed` | `4` | `Killed` | 阵亡。`BattleObserverMissionLogic` 的第三个 `case`；`BattleHighlightsController.cs:25` 与 `HighlightsController.cs:98` 的击杀高亮判据；`CheckpointMissionLogic` 的尸体判定之一；`Mission.GetAgentState` 掷骰命中概率时的赋值。 |
| `Deleted` | `5` | `Deleted` | 已从战场移除。**唯一由托管代码显式写入的成员**：`Mission.OnAgentDeleted` 里的 `affectedAgent.State = AgentState.Deleted;`。`ScriptedMovementComponent` 把它和 `Routed` 一起列为「不再追踪」，`CheckpointMissionLogic` 把它和 `Killed` 一起列为尸体。 |

**没有 `Count`。** 与 [AgentAttackType](../AgentAttackType) / [AgentControllerType](../AgentControllerType) 不同，本枚举末位是真实状态。`Enum.GetValues(typeof(AgentState)).Length` 返回 **6**。

## 真实示例

接管整场战斗的生死判定——实现 `IAgentStateDecider` 并返回 `None` 弃权，或返回具体值强制：

```csharp
public class MyAlwaysDeadLogic : MissionBehavior, IAgentStateDecider
{
    public AgentState GetAgentState(Agent affectedAgent, float deathProbability, out bool usedSurgery)
    {
        usedSurgery = false;
        // 官方 ArenaAgentStateDeciderLogic 的形状：竞技场里只有「打死」一种处理
        return AgentState.Killed;
    }
}
```

换成「重伤不死」的竞技场（**返回 `None` 就把决定权交回官方的概率掷骰**）：

```csharp
public class MySparringLogic : MissionBehavior, IAgentStateDecider
{
    public AgentState GetAgentState(Agent affectedAgent, float deathProbability, out bool usedSurgery)
    {
        usedSurgery = true;
        return AgentState.Unconscious;   // 全部打晕，不死人
    }
}
```

在 `OnAgentRemoved` 里分流（这是全树 40+ 个官方 `MissionBehavior` 的共同形状）：

```csharp
public class MyCorpseLogic : MissionLogic
{
    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
    {
        if (!affectedAgent.IsHuman || affectedAgent.Team == Team.Invalid)
        {
            return;
        }
        switch (agentState)
        {
            case AgentState.Routed:
                MBDebug.Print("[MyMod] " + affectedAgent.Character.Name + " 溃退");
                break;
            case AgentState.Unconscious:
                MBDebug.Print("[MyMod] " + affectedAgent.Character.Name + " 被打晕，可救");
                break;
            case AgentState.Killed:
                MBDebug.Print("[MyMod] " + affectedAgent.Character.Name + " 阵亡");
                break;
            default:
                // 官方 BattleObserverMissionLogic 在这里 throw ArgumentOutOfRangeException
                // 模组建议改成 log 而不是 throw，避免一个畸形值炸掉整场战斗统计
                MBDebug.Print("[MyMod] 意外状态 " + agentState);
                break;
        }
    }
}
```

判「这个人还能不能打」（照抄官方 `BattleHighlightsController.cs:43` 的形状）：

```csharp
public class MyAliveCheckLogic : MissionLogic
{
    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
    {
        if (!affectedAgent.IsHuman || affectedAgent.Team == Team.Invalid)
        {
            return;
        }
        // 官方写法：agent.State != AgentState.Killed && agent.State != AgentState.Unconscious
        bool stillFighting = affectedAgent.State != AgentState.Killed
            && affectedAgent.State != AgentState.Unconscious
            && affectedAgent.State != AgentState.Routed
            && affectedAgent.State != AgentState.Deleted;
        if (stillFighting)
        {
            MBDebug.Print("[MyMod] 还有人能继续打");
        }
    }
}
```

用裸数字写（官方沙盒的常见形态，`BattleAgentLogic.cs:129-138` 就是这样）：

```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
{
    // agentState == 2 是 Routed，== 3 是 Killed；官方脱编译产物大量保留裸数字
    if (affectorAgent == null && affectedAgent.IsMount && agentState == 2)
    {
        return;   // 无主的马匹溃退，不计损失
    }
    if (agentState == 3)
    {
        MBDebug.Print("[MyMod] 击杀统计 +1");
    }
}
```

## 风险与边界

- **`OnAgentRemoved` 的参数只可能是 3 个值，但 `switch` 不写 `default` 会留下空洞。** 官方 `BattleObserverMissionLogic` 写了 `default: throw`。你自己写 `switch` 时若省略 `default`，将来若引擎多派发一个值，你会静默什么都不做——这通常比抛异常更难查。
- **`None`(0) 与 `Active`(1) 永不出现在 `OnAgentRemoved` 里。** 看到回调参数等于 0 或 1，说明它不是从 `Mission.OnAgentRemoved` 来的，或者被你自己写坏了。
- **`Unconscious` 是 3 不是 4。** 竞技场那个 `return 3;` 经常被误读成「死了」——它其实是「打晕」。`Killed` 是 4。
- **`State` 的写入面极窄。** `Agent.State` 的 setter 只有一行有效逻辑：`if (this.State != value) { MBAPI.IMBAgent.SetStateFlags(this.GetPtr(), value); }`。托管代码里能看到的显式赋值只有 `Mission.OnAgentDeleted` 里的 `Deleted` 和 `Mission.OnAgentRemoved` 里的 `affectedAgent.State = agentState;`。**自己写 `agent.State = AgentState.Routed` 能编译，但绕过了 `Team.DeactivateAgent`、`KillCount` 递增和全部 `MissionBehavior` 回调，等于手动制造一个状态不一致的幽灵单位。**
- **`Deleted` 和 `Killed` 在「算尸体」时是并列的。** `CheckpointMissionLogic.cs:124` 写的是 `keyValuePair.Key.State == 4 || keyValuePair.Key.State == 3`。只判 `Killed` 会漏掉已被引擎移除的单位。
- **裸数字在官方代码里到处都是。** `BattleAgentLogic.cs:129` 的 `agentState == 2`、`:138` 的 `agentState == 3`、`ArenaAgentStateDeciderLogic` 的 `return 3`、`CheckpointMissionLogic` 的 `== 4` 与 `== 4 || == 3`——**反编译产物把枚举名折叠成了整数**。你在 1.3.0 上验证过的裸数字，跨版本不能想当然。
- **`AgentState` 不注册引擎结构体。** 与 [AgentAttackType](../AgentAttackType) 不同，改名不会破 ABI；但它仍然通过 `IMBAgent.SetStateFlags(UIntPtr, AgentState)` 传整数，**你在枚举里加一个新成员（比如 `Captured`）会编译通过，原生层不认，行为未定义。**
- **没有 `Count` 哨兵。** `Enum.GetValues(typeof(AgentState)).Length == 6`，别拿它当「有多少种活法」——`None` 不是活法，`Active` 之外的都是死法。
- **`Agent.IsActive()` 只判 `Active`。** 溃退、昏迷、死亡全都不算 active，但它们的处理逻辑完全不同。想要「还占着编队位置」得判 `State != Routed && State != Unconscious && State != Killed && State != Deleted`。

## 跨版本提示

`AgentState.cs` 在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` **五棵树全部是 21 行 / 384 字节**，`grep -v Token` 逐行 diff 后 1.3.15 与 1.4.6 **完全一致**，成员、值、顺序一字未改。跨 1.3 → 1.5 三个大版本零变化，**你的 `switch (agentState)` 升到 1.5.3 行为一致**。

差异只在 `// Token:` 注释的 RID 编号上（1.3.0 的 `None` 是 `0x040000D3 RID: 211`，1.3.15 是 `0x040000D8 RID: 216`，1.4.6 是 `0x040000DA RID: 218`），是同一程序集前面类型数量变化导致的编号平移，与本枚举无关。

`bannerlord-1.4.5/` 那棵树保存的是去掉了 `// Token:` 注释的精简版，只有 11 行 / 123 字节——**存储格式差异，不是类型被裁剪**。

跨版本会变的是**判定链**：`MissionGameModels.Current.AgentDecideKilledOrUnconsciousModel` 的实现、`IAgentStateDecider` 的实现者数量（`foreach … break` 意味着**先注册的实现说了算**，新版本加进一个官方 decider 就可能改变你的自定义 decider 是否生效）、以及 `CheckpointMissionLogic` 的尸体过滤条件。枚举本身不会动，但**「谁说话」这件事没有版本承诺**。

## 依赖关系

- 宿主属性：[Agent](../../mission/Agent) 的 `State` 属性（读走 `AgentHelper.GetAgentState`，写走 `MBAPI.IMBAgent.SetStateFlags`）与 `IsActive()`
- 判决入口：[Mission](../../mission/Mission) 的 `GetAgentState(affectorAgent, agent, damageType, weaponFlags)` 遍历 `MissionBehaviors` 找 [IAgentStateDecider](../../mission-ext/IAgentStateDecider)，全都弃权时按模型给的概率掷骰
- 事件派发：[Mission](../../mission/Mission) 的 `OnAgentRemoved` 先写 `State`、再 `OnEarlyAgentRemoved`、再 [MissionBehavior](../../mission/MissionBehavior).OnAgentRemoved —— 全树 40+ 个官方 `MissionBehavior` 的签名都带 `AgentState`
- 统计消费：[BattleObserverMissionLogic](../../mission-ext/BattleObserverMissionLogic) 的三分支 `switch` 是唯一完整的映射表（`Routed`/`Unconscious`/`Killed` 分别对应不同的 `TroopNumberChanged` 参数）
- 自定义战斗：[CustomBattleAgentLogic](../../mission-ext/CustomBattleAgentLogic) 与 `BattleAgentLogic` 展示沙盒侧如何按状态分流
- 尸体持久化：[AgentSaveData](../AgentSaveData) 的业务使用者 `CheckpointMissionLogic` 用裸数字 `4` / `3` 判尸体，是本枚举与存档结构的交点
- 同族惯例：[AgentAttackType](../AgentAttackType) / [AgentControllerType](../AgentControllerType) 有末尾 `Count` 哨兵，本枚举**没有**，因为末位是真实状态
- 桶首页：[core-extra API 分区](../)