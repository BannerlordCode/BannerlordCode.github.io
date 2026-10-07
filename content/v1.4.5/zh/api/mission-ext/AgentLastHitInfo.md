---
title: "AgentLastHitInfo"
description: "Agent 身上两个字段的记录结构：记住最近一次「谁打的我、打法是什么」，并在死亡时把无人认领的致命一击改判给这个人，窗口只有 5 秒。"
---

# AgentLastHitInfo

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct AgentLastHitInfo`
**Base:** 无（`Agent.cs` 内的嵌套类型）
**File:** `TaleWorlds.MountAndBlade/Agent.cs`（声明在第 39 行）

## 概述

`AgentLastHitInfo` 是一段 33 行的嵌套结构体，声明在 [Agent](../../mission/Agent/) 自己的文件里（`Agent.cs:39`），不是独立文件。它解决一个具体的记账问题：**有时候致命的最后一击没有攻击者**——环境伤害、坐骑撞击结算、或者 attacker 不是人。结算时 `b.OwnerId` 会是 `-1` 或就是死者自己的 `Index`，这笔击杀/助攻就没人认领。

本结构的职责是**记住最近一次「谁打过我」**，等到死亡结算时，如果那一击没人认领，就把它改判给这个人。窗口是硬编码的 5 秒：`CanOverrideBlow` 返回 `_lastBlowTimer.ElapsedTime <= 5f`。

## 心智模型

把它当成**「死亡结算前的临时草稿」**，四个推论：

第一，**它是 `struct` 但持有引用类型字段**。`_lastBlowTimer` 是 `BasicMissionTimer`——**那是一个 `class`**（`BasicMissionTimer.cs:3`，`public class`）。所以复制一个 `AgentLastHitInfo` 会复制引用，**两个副本共享同一个计时器**。这是本类型最容易踩的语义坑：它在 `Agent` 里只有一个实例（`private AgentLastHitInfo _lastHitInfo`，`Agent.cs:596`），所以内部没事；但**外部若自己持有一份副本，计时器会互相干扰**。

第二，**`Initialize()` 必须调，否则 `CanOverrideBlow` 恒为 false**。`Agent.cs:1579`–`1580` 的写法是 `_lastHitInfo = default(AgentLastHitInfo);` 紧接着 `_lastHitInfo.Initialize();`——先清零再初始化。`Initialize` 做三件事：`LastBlowOwnerId = -1`、`LastBlowAttackType = AgentAttackType.Standard`、`_lastBlowTimer = new BasicMissionTimer()`。**没有 `Initialize` 的话 `_lastBlowTimer` 是 null，读 `ElapsedTime` 直接 NRE。**

第三，**计时基准是任务总时间，不是 `Mission.Current.CurrentTime`**。`BasicMissionTimer.ElapsedTime => MBCommon.GetTotalMissionTime() - _startTime`。这意味着**跨任务累计**——新任务里计时不会重置，除非重新 `Reset()`。

第四，**它的写入条件比想象中窄**。`Agent.cs:5455` 一带只有三条路径调 `RegisterLastBlow`：`agent != null && agent != this && IsHuman`，然后若 `agent.IsMount && agent.RiderAgent != null` 就记**骑手**的下标，否则若 `agent.IsHuman` 就记 `b.OwnerId`。**所以「被动物打死」「被坐骑撞死」都不会留记录。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_lastBlowTimer` | `private BasicMissionTimer _lastBlowTimer`（字段） | 私有计时器，**类型是 `class` 而非 struct**。`RegisterLastBlow` 每次 `Reset()` 它，`CanOverrideBlow` 每次读它的 `ElapsedTime`。因为是引用类型，本结构体被复制时计时器不跟着复制。 |
| `LastBlowOwnerId` | `public int LastBlowOwnerId { get; private set; }` | 最近一次有效打击者的 **Agent 下标**（不是 `Agent` 引用）。`-1` 是「无记录」的哨兵值——`Initialize` 设的就是它，而 `Die` 里的 `b.OwnerId == -1` 正是触发改判的条件之一。**存下标不存引用，是为了让 native 侧的 `Blow` 结构能直接消费。** |
| `LastBlowAttackType` | `public AgentAttackType LastBlowAttackType { get; private set; }` | 最近一次打击的**打法类型**。`AgentAttackType` 只有 `Standard` / `Kick` / `Bash` / `Collision` 四个值（第五个是 `Count`）。`Initialize` 设默认值 `Standard`。它在 `Die` 里与 `OwnerId` 一起被改写进 `b.AttackType`——**换人也会换打法**，比如把「碰撞致死」改判成某人的「踢击」。 |
| `CanOverrideBlow` | `public bool CanOverrideBlow`（只读） | 判定「现在能不能改判」。逻辑：`LastBlowOwnerId >= 0` 时返回 `_lastBlowTimer.ElapsedTime <= 5f`，否则返回 false。**两个条件缺一不可**——没有记录就 false。**5 秒是写死的字面量，没有对应的常量或配置项。** |
| `Initialize` | `public void Initialize()` | 唯一的初始化入口。设 `OwnerId = -1`、`AttackType = Standard`、**新建** `_lastBlowTimer`。注意它是「新建」不是「Reset」——所以重复调会换一个计时器实例。 |
| `RegisterLastBlow` | `public void RegisterLastBlow(int ownerId, AgentAttackType attackType)` | 记录一次打击。先 `_lastBlowTimer.Reset()`（**如果计时器是 null 会 NRE**），再写 `OwnerId` 与 `AttackType`。没有校验 `ownerId` 合法性——传 `-1` 就等于清空记录。 |

## 死成员与陷阱

清单把 `_lastBlowTimer` 报成「调用点 0」，实测它有 3 次活跃引用 —— 工具口径盲区，不是死成员。

| 成员 | 声明位置 | override | 调用点 | 判定 | 说明 |
|---|---|---:|---:|---|---|
| `_lastBlowTimer` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Agent.cs:41 | 0 | 3 次（3 行） | MEASURED | 受击计时器：:63 重建、:68 `Reset()`、:53 `ElapsedTime <= 5f` 判断是否在受击保护期内。字段裸读不是调用形，工具计成 0。 |

## 真实示例

读当前状态——这是 mod 唯一能做的事，因为宿主字段是 `private`：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// _lastHitInfo 在 Agent 里是 private 字段，外部拿不到；
// 唯一可观察的窗口是死亡改判本身：见下面的 Die 复现
Agent victim = target;
Debug.Print("victim index = " + victim.Index + " isHuman = " + victim.IsHuman, 0);
```

用本结构体复现 `Agent.Die` 里的改判条件——这是理解 5 秒窗口最直接的方式：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

AgentLastHitInfo lastHitInfo = new AgentLastHitInfo();
lastHitInfo.Initialize();

// 模拟「刚被人踢了一脚」
lastHitInfo.RegisterLastBlow(attacker.Index, AgentAttackType.Kick);

Debug.Print("ownerId=" + lastHitInfo.LastBlowOwnerId + " type=" + lastHitInfo.LastBlowAttackType, 0);
Debug.Print("canOverrideBlow=" + lastHitInfo.CanOverrideBlow, 0);
```

自建一份记录驱动自己的结算逻辑——注意 `Initialize` 必须先调，否则 `_lastBlowTimer` 为 null：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

AgentLastHitInfo lastHitInfo = new AgentLastHitInfo();
lastHitInfo.Initialize();
lastHitInfo.RegisterLastBlow(agent.Index, AgentAttackType.Standard);

// 自行实现「无人认领的致命一击归给最近的打人者」
// Blow 是 struct，这里的 pendingBlow 是你自己的待结算副本
Blow pendingBlow = new Blow();
if (pendingBlow.OwnerId == -1 && lastHitInfo.CanOverrideBlow)
{
    pendingBlow.OwnerId = lastHitInfo.LastBlowOwnerId;
    pendingBlow.AttackType = lastHitInfo.LastBlowAttackType;
    Debug.Print("reassigned kill to agent " + pendingBlow.OwnerId + " as " + pendingBlow.AttackType, 0);
}
```

验证「没调 `Initialize` 就注册」会炸——这是本类型最硬的约束：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// 故意跳过 Initialize()：_lastBlowTimer 为 null
AgentLastHitInfo broken = new AgentLastHitInfo();
// broken.RegisterLastBlow(0, AgentAttackType.Standard);  // 这里会 NullReferenceException
Debug.Print("LastBlowOwnerId 默认值 = " + broken.LastBlowOwnerId, 0);
Debug.Print("CanOverrideBlow 默认值 = " + broken.CanOverrideBlow, 0);
```

把 `ownerId` 传 `-1` 当作清空记录——源码不做任何校验：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

AgentLastHitInfo lastHitInfo = new AgentLastHitInfo();
lastHitInfo.Initialize();
lastHitInfo.RegisterLastBlow(12, AgentAttackType.Bash);
Debug.Print("before clear: canOverride=" + lastHitInfo.CanOverrideBlow, 0);

// 传 -1 等于清空：CanOverrideBlow 会因为 LastBlowOwnerId >= 0 不成立而变 false
lastHitInfo.RegisterLastBlow(-1, AgentAttackType.Standard);
Debug.Print("after clear: ownerId=" + lastHitInfo.LastBlowOwnerId + " canOverride=" + lastHitInfo.CanOverrideBlow, 0);
```

## 风险与边界

- **`struct` 里嵌 `class` 字段。** `BasicMissionTimer` 是引用类型，复制本结构体时计时器共享。**外部持有一份副本会和 Agent 内部那一份共享同一个计时器。**
- **必须先 `Initialize()`。** 否则 `_lastBlowTimer` 为 null，`RegisterLastBlow` 里的 `Reset()` 与 `CanOverrideBlow` 里的 `ElapsedTime` 都会 NRE。`Agent` 内部的顺序是 `_lastHitInfo = default(AgentLastHitInfo); _lastHitInfo.Initialize();`。
- **宿主字段是 `private`。** `Agent._lastHitInfo` 在 `Agent.cs:596`，**没有任何公开的读入口**——modder 无法直接观察某个 Agent 的最近挨打记录，本页的示例都是用自建的实例复现语义。
- **5 秒窗口写死。** `CanOverrideBlow` 里的 `5f` 是字面量，没有常量、没有配置项、读不到。
- **计时基准是 `MBCommon.GetTotalMissionTime()`。** 不是 `Mission.Current.CurrentTime`——**跨任务累计**。任务结束后再读 `ElapsedTime` 会得到一个很大的值。
- **存的是 `int` 下标不是 `Agent` 引用。** Agent 被移除后下标失效；改判出来的 `b.OwnerId` 指向一个可能已经不存在的 Agent。
- **写入条件排除动物与无人攻击。** `Agent.cs:5455` 的三重判：`agent != null && agent != this && IsHuman`；坐骑要 `agent.RiderAgent != null` 才记骑手。**被野兽咬死、被落石砸死都不会留记录。**
- **改判会连 `AttackType` 一起换掉。** 「碰撞致死」可能被改判成「踢击」，影响击杀播报与统计归类。
- **`overrideKillInfo != KillInfo.TeamSwitch` 是前置条件。** 换队导致的死亡不会被本机制改判（`Agent.cs:4655`）。
- **改判只发生在 `Die` 里。** `b.OwnerId == -1 || b.OwnerId == Index` 两个条件之一成立才触发——若那一击已经有明确的攻击者（且不是自己），本机制完全不介入。
- **不存档。** 嵌在 `Agent` 里，`Agent` 本身不存档。

## 依赖关系

- 宿主：[Agent](../../mission/Agent/) 的 `private AgentLastHitInfo _lastHitInfo`（`Agent.cs:596`）、初始化（`:1579`–`:1580`）、消费（`Die` 的 `:4655`–`:4658`）、写入（`:5455`–`:5463`）
- 计时器：[BasicMissionTimer](../BasicMissionTimer/)（`public class`），`ElapsedTime => MBCommon.GetTotalMissionTime() - _startTime`
- 载荷类型：[AgentAttackType](../../core-extra/AgentAttackType)（`Standard` / `Kick` / `Bash` / `Collision`）与 [Blow](../Blow)（攻击结算结构，`OwnerId` 与 `AttackType` 都是**公开字段**，本结构体的值最终写进它们）
- 改判条件方：[KillInfo](../KillInfo) 的 `TeamSwitch` 与 `Formation.Team.QuerySystem.RegisterDeath()` 决定死亡归因路径
- 同类记账：`AgentPropertiesModifiers`（`Agent.cs` 内的另一个 `public struct`）与 `StackArray8Agent` 是同文件里的相邻嵌套类型，机制完全不同但常被一并遇到
- 伤害侧：[AgentApplyDamageModel](../AgentApplyDamageModel/) 决定伤害数值，本结构体只解决「这一击归谁」的战绩归属
- 桶首页：[mission-ext API 分区](../)
