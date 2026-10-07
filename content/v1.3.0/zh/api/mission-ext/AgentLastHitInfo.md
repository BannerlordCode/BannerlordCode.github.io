---
title: "AgentLastHitInfo"
description: "Agent 内嵌的两字段记账结构 + 一个 5 秒门限的 CanOverrideBlow：命中时登记「谁打的」，濒死时用它改写最后一击的归属，把坐骑伤害归给骑手。"
---

# AgentLastHitInfo

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct AgentLastHitInfo`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/Agent.cs`（结构体本体在 Agent.cs:6212，跨 6212–6252）

## 概述

`AgentLastHitInfo` 是 `Agent` 的嵌套结构体，字段极少、行为极少，但解决一个具体的战斗判定问题：**Agent 被打到濒死时，这一击算谁的**。

它的全部内容是：

```csharp
public struct AgentLastHitInfo
{
    public int LastBlowOwnerId { get; private set; }
    public AgentAttackType LastBlowAttackType { get; private set; }

    public bool CanOverrideBlow
    {
        get { return this.LastBlowOwnerId >= 0 && this._lastBlowTimer.ElapsedTime <= 5f; }
    }

    public void Initialize()
    {
        this.LastBlowOwnerId = -1;
        this.LastBlowAttackType = AgentAttackType.Standard;
        this._lastBlowTimer = new BasicMissionTimer();
    }

    public void RegisterLastBlow(int ownerId, AgentAttackType attackType)
    {
        this._lastBlowTimer.Reset();
        this.LastBlowOwnerId = ownerId;
        this.LastBlowAttackType = attackType;
    }

    private BasicMissionTimer _lastBlowTimer;
}
```

它挂在 [Agent](../../mission/Agent) 的私有字段 `_lastHitInfo` 上（`Agent.cs:1464` 初始化为 `default(Agent.AgentLastHitInfo)`）。托管层只有两个写入点、一个读取点。

## 心智模型

把它当成**「谁打的我，最后一击就记谁」的短期记账本**，并且记住它有**一个 5 秒的门限**。

心智模型分三块。

**第一块：记账发生在扣血时，不是濒死时。** 写入点在 [Agent](../../mission/Agent) 的 `TakeDamage` 尾部（`Agent.cs:5798-5806`）：

```csharp
if (agent != null && agent != this && this.IsHuman)
{
    if (agent.IsMount && agent.RiderAgent != null)
    {
        this._lastHitInfo.RegisterLastBlow(agent.RiderAgent.Index, b.AttackType);
    }
    else if (agent.IsHuman)
    {
        this._lastHitInfo.RegisterLastBlow(b.OwnerId, b.AttackType);
    }
}
```

三个条件缺一不可：打你的人非空、不是你本人、你自己是 `IsHuman`。第二层分支是关键——**马打你，记的是骑手的 Index，不是马的**。马没有血条逻辑，但它的伤害要归到主人头上。

**第二块：改写发生在 `Die` 里，而且有三重守卫。** 读取点在 `Agent.Die`（`Agent.cs:4894-4898`）：

```csharp
this.Health = 0f;
if (overrideKillInfo != Agent.KillInfo.TeamSwitch
    && (b.OwnerId == -1 || b.OwnerId == this.Index)
    && this.IsHuman
    && this._lastHitInfo.CanOverrideBlow)
{
    b.OwnerId = this._lastHitInfo.LastBlowOwnerId;
    b.AttackType = this._lastHitInfo.LastBlowAttackType;
}
MBAPI.IMBAgent.Die(this.GetPtr(), ref b, (sbyte)overrideKillInfo);
```

四个条件同时成立才改写：

1. `overrideKillInfo != Agent.KillInfo.TeamSwitch` —— 换队导致的死亡不算任何人击杀。
2. `b.OwnerId == -1 || b.OwnerId == this.Index` —— **只有「无人认领」或「自己打自己」的击杀才可能被改写**。一个已经被别人认领的击杀不会被这个机制篡改。
3. `this.IsHuman` —— 动物不参与。
4. `CanOverrideBlow` —— 记账存在且在 5 秒内。

注意改写的是 `b` 这个 `Blow` 结构体本身的字段，而 `b` 是 `Die(Blow b, ...)` 的**值参数**——所以它改的是本地副本，随后通过 `ref b` 递给 native。这是 mod 无法观察的改写，只能通过击杀归属（`KillInfo` / 队友击杀判定）看到结果。

**第三块：5 秒门限来自 `_lastBlowTimer`，而它是 private。** `CanOverrideBlow` 读 `this._lastBlowTimer.ElapsedTime <= 5f`。`RegisterLastBlow` 里 `this._lastBlowTimer.Reset()` 把计时归零。也就是说：**只有在最近 5 秒任务时间内挨过打，才有资格改写最后一击**。被打了 6 秒前那一下然后站着被人砍死，改写不发生。`_lastBlowTimer` 是 private，外部既读不到也重置不了。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `LastBlowOwnerId` | `public int LastBlowOwnerId { get; private set; }` | 最近一次有效受击的攻击者 `Agent.Index`。`Initialize()` 把它置为 `-1`（无人认领），`RegisterLastBlow(int ownerId, ...)` 写入。`-1` 同时是 `Die` 里「无人认领」的判据之一，也是 `CanOverrideBlow` 判否的条件。setter 是 private，只有 `RegisterLastBlow` 和 `Initialize` 能写。 |
| `LastBlowAttackType` | `public AgentAttackType LastBlowAttackType { get; private set; }` | 最近一次受击的攻击类型（`AgentAttackType.Standard` 等）。`Initialize()` 置为 `AgentAttackType.Standard`，`RegisterLastBlow` 写入来自 `Blow.AttackType` 的值，改写时覆盖 `b.AttackType`。 |
| `CanOverrideBlow` | `public bool CanOverrideBlow { get { return this.LastBlowOwnerId >= 0 && this._lastBlowTimer.ElapsedTime <= 5f; } }` | **只读、无 setter 的门限判断**。两个条件：记过账（`LastBlowOwnerId >= 0`）且距上次记账不超过 5 秒任务时间。`Die` 用它做第四道守卫。它不修改任何状态——调多少次都是同样的结果。 |
| `Initialize()` | `public void Initialize()` | 复位。`LastBlowOwnerId = -1`、`LastBlowAttackType = Standard`、`_lastBlowTimer = new BasicMissionTimer()`（**新建一个计时器**，不是重置已有的）。 |
| `RegisterLastBlow(int, AgentAttackType)` | `public void RegisterLastBlow(int ownerId, AgentAttackType attackType)` | 记账入口。重置计时器并写入两个属性。由 [Agent](../../mission/Agent) 的扣血路径调用两次分支（马→骑手、人→`b.OwnerId`）。`ownerId` 传负数等于抹掉记账。 |

## 真实示例

**先说清楚一件事：`Agent.AgentLastHitInfo` 的实例在 mod 代码里拿不到。** `Agent._lastHitInfo` 是 private 字段，[Agent](../../mission/Agent) 上没有 `LastHitInfo` 属性、没有 `GetLastHitInfo()` 方法。所以本类的 `CanOverrideBlow` / `LastBlowOwnerId` / `RegisterLastBlow` 对你来说是**只读文档，不可调用**。下面两段都是走这条机制的**公开出口**：`KillingBlow` 的字段和 [MissionBehavior](../../mission/MissionBehavior) 的移除钩子。

在 `OnAgentRemoved` 里读改写之后的击杀归属——`KillingBlow` 是这条链唯一的托管出口（见 [KillingBlow](../KillingBlow)）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
{
    base.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
    if (killingBlow == null || !killingBlow.IsValid)
    {
        return;
    }
    // KillingBlow.OwnerId 与 AttackType 就是 AgentLastHitInfo 可能改写过的两个值
    Debug.Print("down: " + affectedAgent.Name + " owner=" + killingBlow.OwnerId, 0);
}
```

`killingBlow == null` 是合法的——`KillingBlow` 是 struct，但参数本身按引用语义传递时引擎会传 null（`MissionBehavior.OnAgentRemoved` 的四个参数里只有它是可空的）。`IsValid` 也是 struct 上的真实成员。

自己持有一份 `AgentLastHitInfo` 做独立计时记账（这个类型可以自己 new，它不依赖任何 Agent 实例）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyBlowLedger
{
    private Agent.AgentLastHitInfo _info;

    public void AttachTo(Agent victim)
    {
        this._info.Initialize();
    }

    public void OnStruckBy(Agent attacker)
    {
        if (attacker.IsMount && attacker.RiderAgent != null)
        {
            this._info.RegisterLastBlow(attacker.RiderAgent.Index, AgentAttackType.Standard);
            return;
        }
        this._info.RegisterLastBlow(attacker.Index, AgentAttackType.Standard);
    }

    public bool IsStillAttributable(Agent attacker)
    {
        return this._info.CanOverrideBlow && this._info.LastBlowOwnerId == attacker.Index;
    }
}
```

这段照抄了 [Agent](../../mission/Agent) 记账分支里的「马→骑手」判定（`Agent.cs:5798-5806`），是本类型能独立使用的正确姿势：**它只是一个带 5 秒门限的记账器**，是否挂在真 Agent 上由你决定。

## 风险与边界

- **它没有任何公开的读出入口。** `Agent._lastHitInfo` 是 private 字段，`Agent` 上没有 `LastHitInfo` 属性、没有 `CanOverrideBlow` 的转发方法。mod 拿不到挂在真 Agent 上的这个结构，只能观察它造成的**结果**（击杀归属、队友击杀判定）。你唯一能合法持有的实例是**自己 new 出来的副本**。想读真 Agent 的那一份，得靠 Harmony 打补丁——那不是本 API 的能力。
- **改写对 mod 不可见。** `Die` 里改的是 `b` 这个值参数的本地副本，通过 `ref` 传给 native。没有任何托管事件在改写前后触发，所以「我能不能抢到最后一击」只能从战报/击杀统计上看。
- **`b.OwnerId == -1` 时也会被改写。** 守卫里 `b.OwnerId == -1 || b.OwnerId == this.Index` 把「无人认领」也算进来了。也就是说环境伤害（坠落、窒息）致死时，如果 5 秒内挨过打，这一击会被归给那个打过你的人——这可能是你不想要的结果。
- **只对 `IsHuman` 生效。** `TakeDamage` 的写入和 `Die` 的读取都有 `IsHuman` 守卫，动物（马、牛）的死亡不走这个机制。
- **只对「已认领或无人认领」的击杀生效。** 如果 `b.OwnerId` 已经是别人（比如友军误伤走 `TeamSwitch`），这道机制既不会触发也会被第一道守卫（`overrideKillInfo != TeamSwitch`）挡住。
- **5 秒是硬编码的任务时间门限。** 写在 `CanOverrideBlow` 的 getter 里，无法配置、无法覆写（不是 `virtual`）。想改这个窗口只能打补丁。
- **`Initialize()` 是新建计时器而不是 Reset。** 它 `new BasicMissionTimer()`，所以旧计时器对象被丢弃。你在外部持有不到它，无所谓；但要知道 `Initialize` 与 `RegisterLastBlow` 的语义不同——前者连计时器一起换掉。
- **struct + private setter。** 它是值类型。`var a = agent.LastHitInfo;` 拿到的是副本；直接改副本的属性改不动原对象（本来也没法改，setter 是 private）。
- **`AgentAttackType` 是另一个嵌套枚举。** 它的定义在 `Agent.cs` 的另一处，写全名要带 `Agent.`；同时 `TaleWorlds.Core` 下有一个同名概念，别混。

## 怎么用

### 怎么拿到它

`public struct AgentLastHitInfo`，结构体本体在 `TaleWorlds.MountAndBlade/Agent.cs:6212`。**托管侧拿不到挂在真 Agent 上的那一份**——`Agent._lastHitInfo` 是 private 字段，`Agent` 上既没有 `LastHitInfo` 属性也没有 `GetLastHitInfo()`。所以你的「怎么拿到」只能是 `new`：这个类型不依赖任何 Agent 实例，可以自己造一份做独立计时记账。

### 典型用法

上面「真实示例」第一段是**观察引擎给出的结果**（`KillingBlow`），第二段是给单个受害者记一份账。本页真正需要单独处理的是**一份账本在多攻击者之间轮换**时的复位语义：`Initialize()` 不是重置，而是**新建一个 `BasicMissionTimer`**，同时把 `LastBlowOwnerId` 置成 `-1`：

```csharp
public class MyBlowLedger
{
    // 自己 new 的副本：真 Agent 上那一份托管侧读不到
    private readonly Agent.AgentLastHitInfo _info = new Agent.AgentLastHitInfo();

    private readonly List<int> _recentOwners = new List<int>();

    // 换人记账前必须 Initialize：它把归属置 -1，并新建计时器
    public void Reset()
    {
        this._info.Initialize();
        this._recentOwners.Clear();
    }

    public void Record(Agent attacker)
    {
        // 马上的攻击归骑手，不归马
        int ownerId = attacker.RiderAgent != null ? attacker.RiderAgent.Index : attacker.Index;
        if (!this._recentOwners.Contains(ownerId))
        {
            this._recentOwners.Add(ownerId);
        }
        this._info.RegisterLastBlow(ownerId, AgentAttackType.Standard);
    }

    // CanOverrideBlow 只问「5 秒内且有人认领」，不问当前攻击者是谁
    public bool IsFresh()
    {
        return this._info.CanOverrideBlow;
    }
}
```

与上面「真实示例」的差别：那里第二段是**一对一**的账本（一个受害者一份 `_info`，马→骑手的分支只用来决定归属给谁）；这里处理的是**轮换与多人**——一份 `_info` 被反复 `Initialize` 后给不同攻击者用，同时额外维护一份「本轮出现过谁」的列表，因为 `CanOverrideBlow` 本身不会告诉你攻击者换没换。

### 最容易踩的坑

**它没有任何公开的读出入口。** `Agent._lastHitInfo` 是 private 字段，`Agent` 上没有 `LastHitInfo` 属性、没有 `CanOverrideBlow` 的转发方法。你唯一能合法持有的实例是**自己 new 出来的副本**；想读真 Agent 的那一份，得靠 Harmony 打补丁。

## 跨版本提示

`AgentLastHitInfo` 的两个属性、`CanOverrideBlow` 的 getter、`Initialize()` 与 `RegisterLastBlow(int, AgentAttackType)` 的签名，以及「马→骑手、人→`b.OwnerId`」的记账分支，在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 的 `Agent.cs` 里保持一致。

变化点有两处值得关注。一是 `CanOverrideBlow` 里的**5 秒常量**可能在后续版本被调整（它是裸字面量，不是具名常量，所以源码 diff 里很难一眼看出）；二是 `AgentAttackType` 的成员在持续追加（该枚举在 1.5.x 明显变长），但既有成员的值与语义没变。

结论：**升级不会让你的代码编译失败**（你根本访问不到这个结构），但如果你的 mod 依赖「濒死抢人头」的行为表现，那个 5 秒窗口是可能变的参数。别把它写进你的设计文档当成稳定契约。

## 依赖关系

- 宿主：[Agent](../../mission/Agent) 持有私有 `_lastHitInfo`，在 `TakeDamage` 写入、在 `Die` 读取
- 写入的输入：[Blow](../Blow) 的 `OwnerId` 与 `AttackType`；骑手 Index 来自 `Agent.RiderAgent.Index`
- 击杀枚举：`Agent.KillInfo`（`Agent` 的嵌套枚举）是改写的第一道守卫参数 `overrideKillInfo`
- 攻击类型枚举：`Agent.AgentAttackType` 是两个属性的类型之一
- 计时器：[BasicMissionTimer](../BasicMissionTimer)（`TaleWorlds.MountAndBlade` 命名空间）提供 5 秒窗口，它的 `ElapsedTime` 是 `MBCommon.GetTotalMissionTime() - _startTime`，即**累计任务时间**而非单任务时间
- 结果出口：[KillingBlow](../KillingBlow) 的 `OwnerId` / `AttackType` / `IsValid` 字段，以及 [MissionBehavior](../../mission/MissionBehavior) 的 `OnEarlyAgentRemoved` / `OnAgentRemoved`，是 mod 能观察到的最终形态
- 桶首页：[mission-ext API 分区](../)