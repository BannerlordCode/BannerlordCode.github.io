---
title: "ActionCodeType"
description: "Agent 内嵌枚举：动画动作码的 54 个取值，外加 12 个只给 native 用的区间标记常量；由 Agent.GetCurrentActionType 读出，MBAnimation.GetActionType 静态换算。"
---

# ActionCodeType

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum ActionCodeType`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/Agent.cs`（枚举本体在 Agent.cs:6546，枚举体共 54 个成员）

## 概述

`ActionCodeType` 是**动画系统给自己听的代号表**，不是给玩法逻辑判断用的状态枚举。它是 `Agent` 的嵌套枚举（声明在 `Agent` 类体内、命名空间仍是 `TaleWorlds.MountAndBlade`），唯一权威的读出入口是 [Agent](../../mission/Agent) 的 `GetCurrentActionType(int channelNo)`：

```csharp
// Agent.cs:2885
public Agent.ActionCodeType GetCurrentActionType(int channelNo)
{
    return (Agent.ActionCodeType)MBAPI.IMBAgent.GetCurrentActionType(this.GetPtr(), channelNo);
}
```

也就是说：**枚举值是 native 侧报的整数直接转型来的**，托管层不产生、不校验、不缓存。想在 mod 里知道「这个人现在在干嘛」，只有这一条路。

枚举有两段内容。第一段是 0..53 的连续动作码：`Other`(0) 到 `MountStrike`(52)，然后 `Count`(53)。第二段是 12 个**显式赋值**的辅助常量——它们全部是「区间起点/终点」，并且在**整个 1.3.0 托管源码树里一次都没被引用**（`grep -rn "AllBegin" --include=*.cs .` 只命中 `Agent.cs` 的声明本身）。这些常量是给 native 的动作表做区间切分的，托管层用不上，但读懂它们能帮你把 0..53 那张表分段。

## 心智模型

把它当成一张**按数值排序、且刻意留了分段标记的动作码表**。整条心智模型是三条规则。

**规则一：数值不是随意的，它就是表的顺序。** 前 54 个成员按「防御 → 远程 → 装填 → 近战 → 受击反馈 → 位移 → 装备 → 坐姿 → 梯子 → 冲刺」排列，所以枚举值的大小本身带语义。分段的辅助常量就是这种排序的产物，例如：

- `DefendAllBegin = 1` / `DefendAllEnd = 15` —— 覆盖 `DefendFist`(1) 到 `DefendLeftStaff`(14)，14 个格挡方向的格挡码；`15` 已经是 `ReadyRanged` 了，所以这一段是**左闭右开**。
- `AttackMeleeAllBegin = 19` / `AttackMeleeAllEnd = 23` —— 覆盖 `ReadyMelee`(19)、`ReleaseMelee`(20)、`ParriedMelee`(21)、`BlockedMelee`(22)，正好四个近战码。
- `CombatAllBegin = 1` / `CombatAllEnd = 23` —— 上面两段的并集，1..22。
- `StrikeBegin = 48` / `StrikeEnd = 52` —— `StrikeLight`(48)、`StrikeMedium`(49)、`StrikeHeavy`(50)、`StrikeKnockBack`(51)；`52` 是 `MountStrike`，所以这也是左闭右开。
- `JumpAllBegin`（隐式接着 `CombatAllEnd = 23`，即 24）/ `JumpAllEnd = 28` —— `JumpStart`(24)…`Kick`(28)。
- `FallAllBegin = 25` / `FallAllEnd = 28`、`KickAllBegin = 28` / `KickAllEnd = 31`、`AlternativeAttackAllBegin = 28` / `AlternativeAttackAllEnd = 32`。

这些段是**互相重叠**的（`KickAllEnd = 31` 就是 `WeaponBash`，`AlternativeAttackAllEnd = 32` 就是 `PassiveUsage`），说明它们不是互斥分区，而是 native 侧在做「动作属于哪一类」的交叉判定。托管层拿不到它们的语义，只能拿到值。

**规则二：拿不到「还没有动作」这件事本身。** `GetCurrentActionType` 不会返回「无」。基类版本 `MBAnimation.GetActionType(ActionIndexCache)`（`MBAnimation.cs:44`）才对空动作有特判：

```csharp
public static Agent.ActionCodeType GetActionType(ActionIndexCache actionIndex)
{
    if (!(actionIndex == ActionIndexCache.act_none))
    {
        return MBAPI.IMBAnimation.GetActionType(actionIndex.Index);
    }
    return Agent.ActionCodeType.Other;
}
```

所以想判断「这个 ActionIndexCache 对应什么码」要**用静态的 `MBAnimation.GetActionType`**，想判断「这个人现在在干什么」才用 `Agent.GetCurrentActionType(channelNo)`。两者混用是常见的错误来源。

**规则三：动作码 ≠ 动作阶段。** 判断「攻击打到哪个阶段了」要用 [ActionStage](../ActionStage)，那是另一张表，由 `Agent.GetCurrentActionStage(int channelNo)` 读出。两者同在 `Agent` 里、都是 `int` 转出来的枚举，但语义维度完全不同：码是「哪种动作」，阶段是「这种动作走到哪一步」。官方 [CustomBattleAutoBlockModel](../CustomBattleAutoBlockModel) 同时用两者，就是这个原因。

## 关键成员

| 成员 | 值 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Other` | 0 | 兜底码。`MBAnimation.GetActionType` 遇到 `act_none` 就返回它，所以「无动作」和「不认识的动作」在托管层都塌缩成这一个值。 |
| `DefendFist` … `DefendLeftStaff` | 1..14 | 14 个格挡码，按武器类型（拳/盾/双手/单手/长杆）× 方向（前/上/右/左）组合排布。`Agent.HasPathThroughNavigationFaceIdFromDirection` 之外，格挡方向判断大量依赖这一段。 |
| `ReadyRanged` | 15 | 远程武器举到待发位置。 |
| `ReleaseRanged` | 16 | 远程武器已释放。[Agent](../../mission/Agent) 内部 `Agent.cs:4679` 用 `ReleaseMelee` / `ReleaseRanged` / `ReleaseThrowing` / `WeaponBash` 四者一起判断「这次攻击是否已经打出去了」。 |
| `ReleaseThrowing` | 17 | 投掷武器已释放。 |
| `Reload` | 18 | 装填中。 |
| `ReadyMelee` | 19 | 近战武器举起、还在蓄力窗口内。 |
| `ReleaseMelee` | 20 | 近战已劈出。[HumanAIComponent](../HumanAIComponent) 的 `IsAttacking()` 形状（`HumanAIComponent.cs:344`）就是 `ReadyMelee || ReadyRanged || ReleaseMelee || ReleaseRanged || ReleaseThrowing || DefendShield` 六个码的或。 |
| `ParriedMelee` | 21 | 本次近战被招架。 |
| `BlockedMelee` | 22 | 本次近战被格挡。 |
| `Fall` | 23 | 倒地。 |
| `JumpStart` / `Jump` / `JumpEnd` / `JumpEndHard` | 24..27 | 跳跃四阶段，`JumpEndHard` 是硬直更大的落地。 |
| `Kick` / `KickContinue` / `KickHit` | 28..30 | 踢击三阶段，`KickHit` 是踢中判定帧。 |
| `WeaponBash` | 31 | 用武器砸（柄击）。 |
| `PassiveUsage` | 32 | 被动使用（推门、攀爬一类的持物状态）。 |
| `EquipUnequip` | 33 | 装备/卸装。[AgentVictoryLogic](../AgentVictoryLogic)（`AgentVictoryLogic.cs:322`）用 `!= ActionCodeType.EquipUnequip` 排除正在换武器的人。 |
| `SwitchAlternative` | 34 | 切换到副手/备用武器。 |
| `Idle` | 35 | 站立待机。 |
| `Guard` | 36 | 格挡姿态保持（注意与 `Defend*` 段区分）。 |
| `Mount` / `Dismount` | 37 / 38 | 上马 / 下马动作段。 |
| `Dash` | 39 | 冲刺。 |
| `MountQuickStop` | 40 | 骑乘急停。 |
| `HitObject` | 41 | 撞到物体。 |
| `Sit` / `SitOnTheFloor` / `SitOnAThrone` | 42 / 43 / 44 | 三种坐姿。[Agent](../../mission/Agent) 的 `IsSitting()`（`Agent.cs:3505-3506`）正是这三码的或。 |
| `LadderRaise` / `LadderRaiseEnd` | 45 / 46 | 架梯动作段。[SiegeLadder](../SiegeLadder)（`SiegeLadder.cs:753`）判 `LadderRaiseEnd` 来决定梯子何时到位。 |
| `Rear` | 47 | 马匹后躯站立（后仰）。[Agent](../../mission/Agent) 的 `CanInteractWithAgent`（`Agent.cs:3370`、`Agent.cs:3372`）用它把正在后仰的马排除出可交互目标。 |
| `StrikeLight` … `StrikeKnockBack` | 48..51 | 四档打击强度。 |
| `MountStrike` | 52 | 骑乘冲撞。 |
| `Count` | 53 | 元素个数哨兵，**不是有效动作码**。 |
| `StrikeBegin` / `StrikeEnd` | 48 / 52 | 四档打击的区间标记，托管层零引用。 |
| `DefendAllBegin` / `DefendAllEnd` | 1 / 15 | 14 个格挡码的区间标记，托管层零引用。 |
| `AttackMeleeAllBegin` / `AttackMeleeAllEnd` | 19 / 23 | 四个近战码的区间标记，托管层零引用。 |
| `AttackMeleeAndRangedAllBegin` / `AttackMeleeAndRangedAllEnd` | 15 / 23 | 八个远程+近战码的区间标记，托管层零引用。 |
| `CombatAllBegin` / `CombatAllEnd` | 1 / 23 | 前述两段并集的区间标记，托管层零引用。 |
| `JumpAllBegin` / `JumpAllEnd` | 24 / 28 | 跳跃四码的区间标记，托管层零引用。 |
| `FallAllBegin` / `FallAllEnd` | 25 / 28 | 区间标记，托管层零引用。 |
| `KickAllBegin` / `KickAllEnd` | 28 / 31 | 踢击三码的区间标记，托管层零引用。 |
| `AlternativeAttackAllBegin` / `AlternativeAttackAllEnd` | 28 / 32 | 区间标记，托管层零引用。 |

## 真实示例

判「这个人是不是正举着武器还没打出去」——官方 [HumanAIComponent](../HumanAIComponent) 里那个方法就是这个形状（`HumanAIComponent.cs:343-344`）：

```csharp
public bool IsAttacking()
{
    Agent.ActionCodeType currentActionType = this.Agent.GetCurrentActionType(1);
    return currentActionType == Agent.ActionCodeType.ReadyMelee
        || currentActionType == Agent.ActionCodeType.ReadyRanged
        || currentActionType == Agent.ActionCodeType.ReleaseMelee
        || currentActionType == Agent.ActionCodeType.ReleaseRanged
        || currentActionType == Agent.ActionCodeType.ReleaseThrowing
        || currentActionType == Agent.ActionCodeType.DefendShield;
}
```

静态那侧：给定一个动作索引想知道它属于哪一码，走 `MBAnimation.GetActionType` 而不是 `GetCurrentActionType`。

```csharp
using TaleWorlds.MountAndBlade;

public static bool IsSwordSwing(ActionIndexCache actionIndex)
{
    Agent.ActionCodeType code = MBAnimation.GetActionType(actionIndex);
    return code == Agent.ActionCodeType.ReleaseMelee
        || code == Agent.ActionCodeType.StrikeLight
        || code == Agent.ActionCodeType.StrikeMedium;
}
```

按位置而不是按码判断时，可以直接用枚举的数值做区间比较——这是唯一「安全地用数值」的方式，因为 0..53 那一段是连续的：

```csharp
using TaleWorlds.MountAndBlade;

public static bool IsInsideStrikeBand(Agent agent)
{
    int code = (int)agent.GetCurrentActionType(1);
    return code >= (int)Agent.ActionCodeType.StrikeBegin
        && code < (int)Agent.ActionCodeType.StrikeEnd;
}
```

## 风险与边界

- **`GetCurrentActionType` 报的是什么就转什么，没有范围检查。** `MBAPI.IMBAgent.GetCurrentActionType` 返回 native 的 `int`，托管层直接 `(Agent.ActionCodeType)` 强转。native 侧若返回了不在 0..53 里的值，你拿到的是一个「不存在的码」，而枚举比较**不会报错**——所有 `==` 都是 false，静默走进「都不是」那条分支。要防这一点就显式 `IsDefined` 或对 `(int)` 值做范围判断。
- **`Count` = 53 不是有效码。** 任何 `code <= (int)ActionCodeType.Count` 的写法都会把 `Count` 本身算进去，而 native 不会报 53。
- **`*AllBegin` / `*AllEnd` 在托管层完全零引用。** 不要以为可以拿它们做 `Enum.IsDefined` 之外的语义判断——它们互相重叠，不是互斥分区，而且**你在 C# 里读到的是「值」，读不到「意图」**。想复刻 native 的分类逻辑，正确做法是照抄官方的显式 `==` 列表（如上面 `IsAttacking` 那样）。
- **不要用动作码代替 [ActionStage](../ActionStage)。** 「是不是在攻击」和「攻击到哪一步了」是两个问题；用码判断阶段会得到时序上错误的答案。
- **同码不同义。** `Guard`(36) 和 `Defend*` 段名字接近但语义不同：`Guard` 是姿态保持，`DefendFist`/`DefendShield`/… 是四种武器的四个格挡方向。误用会让「对方格挡了吗」这个判断在某些武器上恒为 false。
- **枚举是 `Agent` 的嵌套类型，写全名要带外层。** 代码里必须写 `Agent.ActionCodeType` 而不是 `ActionCodeType`；`using TaleWorlds.MountAndBlade;` 只解决命名空间，不解决嵌套。
- **取值只能在有动作通道的 Agent 上做。** `GetCurrentActionType(0)` 与 `(1)` 语义不同：官方读法几乎全是通道 1（玩家/攻击通道），通道 0 用于下马之类。读错通道会拿到看似合理但恒定的旧值。

## 怎么用

### 怎么拿到它

**你永远不会 `new` 它**——它是 `Agent` 的嵌套枚举（`bannerlord-1.3.0/TaleWorlds.MountAndBlade/Agent.cs:6546`，紧跟着上一行的 `[EngineStruct("Action_code_type", true, "actt", false)]` 引擎结构标记），值类型，由 [Agent](../../mission/Agent) 当作成员读出来。托管树里只有两条入口：

- **实例侧（问「这个人现在在干嘛」）**：`Agent.GetCurrentActionType(int channelNo)`（`Agent.cs:2885`），函数体只有一句 `return (Agent.ActionCodeType)MBAPI.IMBAgent.GetCurrentActionType(this.GetPtr(), channelNo);`（`Agent.cs:2887`）。它需要你手上有一个活着的 `Agent`——通常是 `Mission.Current.Agents` 遍历出来的，或 `Mission.Current.MainAgent`。
- **静态侧（问「这个动作索引属于哪一码」）**：`MBAnimation.GetActionType(ActionIndexCache actionIndex)`（`MBAnimation.cs:44`），只吃一个 `ActionIndexCache`，并对 `act_none` 特判返回 `Other`（`MBAnimation.cs:46-50`）。

除此之外没有任何工厂、静态属性或注册点：`GetCurrentActionType` 每次调用都直接向 native 要一个整数，没有缓存，也没有生命周期回调会主动把它推给你。

### 典型用法

把动作码翻成玩法需要的「打击档位」——注意这里显式做了范围校验，并且 `switch` 带 `default`，这样 native 报出表外值时不会静默走进「都不是」那条分支：

```csharp
using TaleWorlds.MountAndBlade;

public enum StrikeLevel
{
    None,
    Light,
    Medium,
    Heavy,
    KnockBack
}

public static StrikeLevel GetStrikeLevel(Agent agent)
{
    // 通道 1 是官方通用读法：CustomBattleAutoBlockModel.cs:20 与
    // MissionGamepadEffectsView.cs:247 都走这条通道
    Agent.ActionCodeType code = agent.GetCurrentActionType(1);

    // GetCurrentActionType 不做范围检查（Agent.cs:2887 是裸强转），
    // 所以「不认识」和「不在攻击」必须先分开
    if (!Enum.IsDefined(typeof(Agent.ActionCodeType), code))
    {
        return StrikeLevel.None;
    }

    switch (code)
    {
        case Agent.ActionCodeType.StrikeLight:
            return StrikeLevel.Light;
        case Agent.ActionCodeType.StrikeMedium:
            return StrikeLevel.Medium;
        case Agent.ActionCodeType.StrikeHeavy:
            return StrikeLevel.Heavy;
        case Agent.ActionCodeType.StrikeKnockBack:
            return StrikeLevel.KnockBack;
        default:
            // Count = 53 不是有效码，和全部非打击码都落到这里
            return StrikeLevel.None;
    }
}
```

### 最容易踩的坑

**`GetCurrentActionType` 是裸强转，不带任何范围校验。** 函数体（`Agent.cs:2887`）直接把 `MBAPI.IMBAgent.GetCurrentActionType` 返回的 `int` 转型成枚举，托管层既不查 `Enum.IsDefined` 也不查 `Count`。后果是：一旦 native 报出一个不在 0..53 里的整数，你**拿不到异常、也拿不到警告**——那一整串 `code == Agent.ActionCodeType.XXX` 全部返回 false，代码安静地走进「都不是攻击」那条分支。对 AI 脚本来说症状是「单位明明在挥刀，我的格挡/闪避永远不触发」，而且日志里一行线索都没有。所以上面那段先 `Enum.IsDefined`、再带 `default:` 的写法不是洁癖，是唯一能让你在出问题时看见症状的写法。

这不是我给的自创规则形状，引擎自己就是这么选的：官方 `BattleObserverMissionLogic.OnAgentRemoved`（`BattleObserverMissionLogic.cs:52`）里的 `switch (agentState)` 同样带 `default:`（`BattleObserverMissionLogic.cs:68`），而那一行的方法体是 `throw new ArgumentOutOfRangeException("agentState", agentState, null);`（`BattleObserverMissionLogic.cs:69`）。**面对同一个问题，官方选的是「遇到不认识的值就抛出来」，不是「静默走 default」**——这正是你那段裸强转丢掉的信息。



## 跨版本提示

`ActionCodeType` 的 0..53 那一段在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 五个源码树里保持同一顺序与同一数值，`StrikeBegin = 48` 这类显式赋值也逐字一致。变化集中在这张表的**尾部追加**——新版本会在 `MountStrike` 之后继续加动作码，`Count` 随之变大，而那些区间标记的显式值必须跟着调整。

对 mod 而言的实际影响有两条。一是**不要硬编码 48 / 52 / 53 这些数字**，用 `StrikeBegin` / `StrikeEnd` / `Count` 这些命名常量，它们的值会随引擎一起变。二是**写 `switch` 时始终带 `default:`**——新版本在中间插入动作码时，你的旧 switch 会静默漏掉新情况，而不是编译失败。

读法入口（`Agent.GetCurrentActionType`、`MBAnimation.GetActionType`）在 1.3 → 1.5 之间没有签名变化，你的调用代码不需要为升级改动。

## 依赖关系

- 读取入口：[Agent](../../mission/Agent) 的 `GetCurrentActionType(int channelNo)` 是托管层唯一的实例侧读法，`GetCurrentActionType(1)` 通道 1 是官方通用选择
- 静态换算：[MBAnimation](../MBAnimation) 的 `GetActionType(ActionIndexCache)` 把动作索引映射到动作码，并对 `act_none` 特判返回 `Other`
- 相邻维度：[ActionStage](../ActionStage) 描述同一通道上的动作**阶段**，两者互不替代
- 消费范例：[HumanAIComponent](../HumanAIComponent) 的攻击/格挡判断、[CustomBattleAutoBlockModel](../CustomBattleAutoBlockModel) 的自动格挡、[AgentVictoryLogic](../AgentVictoryLogic) 的欢呼过滤、[SiegeLadder](../SiegeLadder) 的梯子到位判定
- 底层 Agent 状态：[AIStateFlag](../AIStateFlag) 是另一套**行为意图**位标记，与动作码正交
- 桶首页：[mission-ext API 分区](../)