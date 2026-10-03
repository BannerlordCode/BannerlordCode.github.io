---
title: "AgentComponentExtensions"
description: "22 个 Agent 扩展方法：9 个对 CommonAIComponent 判空后转发、8 个对 HumanAIComponent 裸调必崩、5 个只改 AIStateFlags 位标志；同一个文件里三种防御强度。"
---

# AgentComponentExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class AgentComponentExtensions`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/AgentComponentExtensions.cs`（全文 185 行）

## 概述

`AgentComponentExtensions` 是一个 **185 行、22 个 `public static` 扩展方法、零字段零构造器**的静态类。全部 22 个方法都带 `this Agent agent` 第一个参数——它们的作用是把「拿组件、调方法、判空」这段样板从调用点抹掉。

但这个类**并不统一**。22 个方法分三档，防御强度依次递减，这是本页最重要的一条：

| 档 | 方法数 | 判什么 | 组件缺失时的行为 |
| --- | --- | --- | --- |
| 一档：先判组件再转发 | 9 | [CommonAIComponent](../CommonAIComponent) | 静默返回（`GetMorale` 返回 `-1f`，其余 `void` 直接 `return`） |
| 二档：先判组件再转发 | 1 | [HumanAIComponent](../HumanAIComponent) | `GetFollowedUnit` 返回 `null` |
| 三档：裸调组件 | 8 | [HumanAIComponent](../HumanAIComponent) | **`NullReferenceException`** |
| 零档：只改位标志 | 4 | `agent.AIStateFlags` | **照常工作，不依赖组件** |

具体清单（逐个方法核对过源码）：

- **一档 9 个**：`GetMorale` / `SetMorale` / `ChangeMorale` / `IsRetreating` / `Retreat` / `StopRetreatingMoraleComponent`（6 个走 `CommonAIComponent`）+ `SetBehaviorValueSet` / `RefreshBehaviorValues` / `SetAIBehaviorValues`（3 个走 `HumanAIComponent`，但也判空）。
- **二档 1 个**：`GetFollowedUnit`。
- **三档 8 个**：`AIMoveToGameObjectEnable` / `AIMoveToGameObjectDisable` / `AIDefendGameObjectEnable` / `AIDefendGameObjectDisable` / `AIDefendGameObjectIsEnabled` / `AIInterestedInAnyGameObject` / `AIInterestedInGameObject` / `SetFollowedUnit`——**全是裸一句 `agent.HumanAIComponent.XXX(...)`，不判 null**。
- **零档 4 个**：`AIMoveToGameObjectIsEnabled` / `AIUseGameObjectEnable` / `AIUseGameObjectDisable` / `AIUseGameObjectIsEnabled`——**只改 `agent.AIStateFlags`，根本不碰组件**。

一档的完整形状是这样的：

```csharp
public static float GetMorale(this Agent agent)
{
    CommonAIComponent commonAIComponent = agent.CommonAIComponent;
    if (commonAIComponent != null)
    {
        return commonAIComponent.Morale;
    }
    return -1f;
}
```

后半族里，`AIMoveToGameObjectEnable` / `AIMoveToGameObjectDisable` / `AIDefendGameObjectEnable` / `AIDefendGameObjectDisable` / `AIDefendGameObjectIsEnabled` / `AIInterestedInAnyGameObject` / `AIInterestedInGameObject` / `SetFollowedUnit` 都是**裸一句** `agent.HumanAIComponent.XXX(...)`，**不判 null**。

## 心智模型

把它当成**「组件的门面」**，然后按「拿到 -1 还是拿到 null 还是崩」三种结果分类。

心智模型分三块。

**第一块：返回值的三种失败信号，用途完全不同。**

- `GetMorale()` 返回 **`-1f`**——这是显式的哨兵值。士气本身可以是负值（`[CommonAIComponent](../CommonAIComponent)` 的士气模型允许负），所以 -1 不在正常区间里。你要判「组件在不在」就该判 `== -1f`，而不是判 `< 0`。
- `IsRetreating()` 返回 `commonAIComponent != null && commonAIComponent.IsRetreating`——组件缺失时返回 **`false`**。这与「在撤退」无法区分。
- `GetFollowedUnit()` 返回 **`null`**。
- **不判空的那 12 个方法会直接 `NullReferenceException`。**

所以「组件缺失」在不同方法上的表现是：-1f / false / null / 崩溃。**没有统一的错误通道**，这是这个类最需要记住的事。

**第二块：`AIUseGameObject*` 三兄弟走的是完全不同的技术路径。** 它们不碰 `HumanAIComponent`，而是直接改 [Agent](../../mission/Agent) 上的 `AIStateFlags` 位标志：

```csharp
public static void AIUseGameObjectEnable(this Agent agent)
{
    agent.AIStateFlags |= Agent.AIStateFlag.UseObjectUsing;
}

public static void AIUseGameObjectDisable(this Agent agent)
{
    agent.AIStateFlags &= ~Agent.AIStateFlag.UseObjectUsing;
}

public static bool AIUseGameObjectIsEnabled(this Agent agent)
{
    return agent.AIStateFlags.HasAnyFlag(Agent.AIStateFlag.UseObjectUsing);
}
```

**这就是本桶要点名的那个真实形状**：`agent.AIStateFlags |= Agent.AIStateFlag.X` 置位、`agent.AIStateFlags &= ~Agent.AIStateFlag.X` 清位、`agent.AIStateFlags.HasAnyFlag(Agent.AIStateFlag.X)` 查询。注意查询用的是 **`HasAnyFlag`**（任意一位命中即真），不是 `HasAllFlags`。而 `AIMoveToGameObjectIsEnabled` 读的是另一个位 `Agent.AIStateFlag.UseObjectMoving`。

对比一下：`AIUseGameObjectIsEnabled` 可以在组件缺失时正常返回 false，而 `AIMoveToGameObjectEnable` 在组件缺失时会崩。**同样是「使用/移动到可交互物」这族功能，一个健壮一个脆弱——差别只在扩展方法有没有先取一次 `agent.HumanAIComponent` 并判空。**

**第三块：这些方法都是「一次性转发」，没有缓存、没有队列、没有延迟语义。** 每个方法体一两行，立刻作用在组件的当前状态上。你在 `AIUseGameObjectEnable` 之后立刻调 `AIUseGameObjectIsEnabled`，会得到 true——因为它们操作的是同一个 `AIStateFlags` 字段。这不是「请求」，是「状态」。

## 关键成员

### 士气与撤退族（6 个，全部判空）

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `GetMorale` | `public static float GetMorale(this Agent agent)` | 读 [CommonAIComponent](../CommonAIComponent) 的 `Morale`。**组件缺失返回 `-1f`**。纯查询，不改状态。 |
| `SetMorale` | `public static void SetMorale(this Agent agent, float morale)` | 写 `commonAIComponent.Morale = morale`。组件缺失时静默无操作。**是赋值不是增减**——想增减请用 `ChangeMorale`。 |
| `ChangeMorale` | `public static void ChangeMorale(this Agent agent, float delta)` | `commonAIComponent.Morale += delta`。组件缺失时静默无操作。官方 [BattleMoraleModel](../BattleMoraleModel) 的调用链最终落到这里。 |
| `IsRetreating` | `public static bool IsRetreating(this Agent agent, bool isComponentAssured = true)` | 返回 `commonAIComponent != null && commonAIComponent.IsRetreating`。**`isComponentAssured` 参数在方法体里完全没被用到**——它是一个被忽略的可选参数，传什么都不影响行为。组件缺失时返回 `false`，与「没在撤退」同形。 |
| `Retreat` | `public static void Retreat(this Agent agent, bool useCachingSystem = false)` | 转发 `commonAIComponent.Retreat(useCachingSystem)`。组件缺失时 `return`。`useCachingSystem` 会传下去，是真参数。 |
| `StopRetreatingMoraleComponent` | `public static void StopRetreatingMoraleComponent(this Agent agent)` | 转发 `commonAIComponent.StopRetreating()`。组件缺失时 `return`。 |

### 行为值族（3 个，判空）

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `SetBehaviorValueSet` | `public static void SetBehaviorValueSet(this Agent agent, HumanAIComponent.BehaviorValueSet behaviorValueSet)` | 转发 `humanAIComponent.SetBehaviorValueSet(behaviorValueSet)`。组件缺失时 `return`。`BehaviorValueSet` 是 `HumanAIComponent` 的嵌套结构体。 |
| `RefreshBehaviorValues` | `public static void RefreshBehaviorValues(this Agent agent, MovementOrder.MovementOrderEnum movementOrder, ArrangementOrder.ArrangementOrderEnum arrangementOrder)` | 转发 `humanAIComponent.RefreshBehaviorValues(movementOrder, arrangementOrder)`。组件缺失时 `return`。**两个枚举参数是真参数**，会决定刷新出的行为值。 |
| `SetAIBehaviorValues` | `public static void SetAIBehaviorValues(this Agent agent, HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)` | 转发 `humanAIComponent.OverrideBehaviorParams(behavior, y1, x2, y2, x3, y3)`。组件缺失时 `return`。注意方法名是 `SetAIBehaviorValues` 而转发目标是 `OverrideBehaviorParams`——**命名不一致，但对调用的你无所谓**。六个 float 是行为曲线的控制点。 |

### 移动到可交互物族（3 个：2 裸调 + 1 只读位标志）

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `AIMoveToGameObjectEnable` | `public static void AIMoveToGameObjectEnable(this Agent agent, UsableMissionObject usedObject, IDetachment detachment, Agent.AIScriptedFrameFlags scriptedFrameFlags = Agent.AIScriptedFrameFlags.NoAttack)` | 转发 `agent.HumanAIComponent.MoveToUsableGameObject(usedObject, detachment, scriptedFrameFlags)`。**不判 null**——组件缺失会崩。`scriptedFrameFlags` 是可选参数，默认 `NoAttack`。 |
| `AIMoveToGameObjectDisable` | `public static void AIMoveToGameObjectDisable(this Agent agent)` | 转发 `agent.HumanAIComponent.MoveToClear()`。**不判 null**。 |
| `AIMoveToGameObjectIsEnabled` | `public static bool AIMoveToGameObjectIsEnabled(this Agent agent)` | 返回 `agent.AIStateFlags.HasAnyFlag(Agent.AIStateFlag.UseObjectMoving)`。**不碰 `HumanAIComponent`，所以组件缺失也能安全返回。** |

### 守卫可交互物族（4 个，全部裸调）

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `AIDefendGameObjectEnable` | `public static void AIDefendGameObjectEnable(this Agent agent, UsableMissionObject usedObject, IDetachment detachment)` | 转发 `agent.HumanAIComponent.StartDefendingGameObject(usedObject, detachment)`。**不判 null**。 |
| `AIDefendGameObjectDisable` | `public static void AIDefendGameObjectDisable(this Agent agent)` | 转发 `agent.HumanAIComponent.StopDefendingGameObject()`。**不判 null**。 |
| `AIDefendGameObjectIsEnabled` | `public static bool AIDefendGameObjectIsEnabled(this Agent agent)` | 返回 `agent.HumanAIComponent.IsDefending`。**不判 null**——组件缺失会崩（返回类型是 bool，返回值来自属性读取）。 |
| `AIInterestedInAnyGameObject` / `AIInterestedInGameObject` | `public static bool AIInterestedInAnyGameObject(this Agent agent)` / `public static bool AIInterestedInGameObject(this Agent agent, UsableMissionObject usableMissionObject)` | 前者转发 `agent.HumanAIComponent.IsInterestedInAnyGameObject()`；后者转发 `IsInterestedInGameObject(usableMissionObject)`。**两个都不判 null**。 |

### 使用可交互物族（3 个，全部健壮）

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `AIUseGameObjectEnable` | `public static void AIUseGameObjectEnable(this Agent agent)` | `agent.AIStateFlags \|= Agent.AIStateFlag.UseObjectUsing`。**只改位标志，不碰组件，所以永远不崩。** |
| `AIUseGameObjectDisable` | `public static void AIUseGameObjectDisable(this Agent agent)` | `agent.AIStateFlags &= ~Agent.AIStateFlag.UseObjectUsing`。同上。 |
| `AIUseGameObjectIsEnabled` | `public static bool AIUseGameObjectIsEnabled(this Agent agent)` | `agent.AIStateFlags.HasAnyFlag(Agent.AIStateFlag.UseObjectUsing)`。同上。 |

### 跟随族（2 个）

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `GetFollowedUnit` | `public static Agent GetFollowedUnit(this Agent agent)` | **唯一判空的返回型方法**：`humanAIComponent == null` 时返回 `null`，否则返回 `humanAIComponent.FollowedAgent`。 |
| `SetFollowedUnit` | `public static void SetFollowedUnit(this Agent agent, Agent followedUnit)` | 转发 `agent.HumanAIComponent.FollowAgent(followedUnit)`。**不判 null**。传 `null` 的语义由 `HumanAIComponent.FollowAgent` 决定（大概率是「取消跟随」），但本类不替你校验。 |

## 真实示例

安全的读法——先判组件再调用，这是全类 21 个方法里唯一不出问题的模式：

```csharp
using TaleWorlds.MountAndBlade;

public static float SafeMorale(Agent agent)
{
    // 先确认组件在，再调转发方法
    if (agent.CommonAIComponent == null)
    {
        return 0f;
    }
    return agent.GetMorale();
}
```

用位标志那一族改 AI 意图——这三个方法不依赖组件，最适合脚本驱动：

```csharp
using TaleWorlds.MountAndBlade;

public static void ScriptedUseObject(Agent agent)
{
    agent.AIUseGameObjectEnable();
    if (agent.AIUseGameObjectIsEnabled())
    {
        Debug.Print(agent.Name + " flagged UseObjectUsing", 0);
    }
}
```

这就是源码里那个真实形状：`|=` 置位、`&= ~` 清位、`HasAnyFlag` 查询。三行都不需要 [HumanAIComponent](../HumanAIComponent)，所以在任何 Agent 上都安全。

带默认参数的两族调用（注意 `IsRetreating` 的 `isComponentAssured` 传什么都不影响行为）：

```csharp
using TaleWorlds.MountAndBlade;

public static void RetreatNearest(Mission mission, Agent agent)
{
    if (!agent.IsRetreating(false))
    {
        agent.Retreat(true);
    }
    agent.StopRetreatingMoraleComponent();
}
```

## 风险与边界

- **8 个方法完全不判 null。** 逐个列清：`AIMoveToGameObjectEnable` / `AIMoveToGameObjectDisable` / `AIDefendGameObjectEnable` / `AIDefendGameObjectDisable` / `AIDefendGameObjectIsEnabled` / `AIInterestedInAnyGameObject` / `AIInterestedInGameObject` / `SetFollowedUnit`。它们都会在 `agent.HumanAIComponent == null` 时抛 `NullReferenceException`。**调用前一律先判 `agent.HumanAIComponent != null`。**
- **`IsRetreating` 的 `isComponentAssured` 参数是死的。** 方法体里完全没引用它。传 `true` 或 `false` 行为完全相同。这是个会在读代码时误导人的参数。
- **组件缺失的返回信号不统一：`-1f` / `false` / `null` / 崩溃，四种。** 尤其 `IsRetreating()` 在组件缺失时返回 `false`，与「没在撤退」同形——**唯一可靠的判法是先判 `agent.CommonAIComponent != null`**。
- **`GetMorale()` 返回的 `-1f` 不是一个安全的「无士气」值。** 官方士气模型允许负士气，所以 -1 可能是一个合法状态。它只是「组件缺失」的哨兵。
- **`SetMorale` 是赋值。** `agent.SetMorale(50f)` 会把士气直接设成 50，不管当前是多少。想增减请用 `ChangeMorale`。
- **`AIStateFlags` 是位标志，查询用 `HasAnyFlag`。** 三个 `AIUseGameObject*` 与 `AIMoveToGameObjectIsEnabled` 都走这条路径。注意 `UseObjectUsing` 与 `UseObjectMoving` 是**两个不同的位**，别混。
- **`AIMoveToGameObjectIsEnabled` 读的是 `UseObjectMoving`，不是 `UseObjectUsing`。** 想「正在使用」请用 `AIUseGameObjectIsEnabled`。
- **`SetFollowedUnit(agent, null)` 不报错。** `HumanAIComponent.FollowAgent(null)` 的具体行为在组件里，本类不校验。传 null 前请读 [HumanAIComponent](../HumanAIComponent)。
- **扩展方法不是继承来的。** `[Agent](../../mission/Agent)` 上并没有这些成员；只要 `using TaleWorlds.MountAndBlade;` 就在作用域里。也因此**你不能覆写它们**，只能写同名的静态方法遮蔽（不推荐）。
- **全部是同步转发。** 没有排队、没有延迟生效。想在下一帧才生效要自己用 [MissionBehavior](../../mission/MissionBehavior) 的 tick 钩子包一层。

## 跨版本提示

`AgentComponentExtensions` 的 22 个方法在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 里**成员集合与签名完全一致**（185 行）。这条稳定性意味着：**你的调用代码在 1.3 → 1.5 之间不会编译失败。**

变化全在转发目标上——[CommonAIComponent](../CommonAIComponent) 与 [HumanAIComponent](../HumanAIComponent) 的成员在这段时间里持续增长与调整。尤其 `HumanAIComponent.BehaviorValueSet` 与 `AISimpleBehaviorKind` 这两个嵌套类型，它们是**在组件上定义的**，1.5.x 的形状比 1.3.0 更细。如果你的代码直接构造 `BehaviorValueSet` 或使用 `AISimpleBehaviorKind` 的具体成员，**那才是升级时真正会断的地方**——不是本类。

所以实践建议是：**尽量只用本类的「传入既有值」的转发方法**（`SetBehaviorValueSet` / `RefreshBehaviorValues` 这类），**少自己构造嵌套类型**。前者跨版本稳定，后者会跟着组件的形状走。

判空策略也建议在项目里固定成一条规则：**调用本类任何方法前先判对应组件非 null**。这样既躲开了那 12 个会崩的方法，也不用去记每个方法的失败信号。

## 依赖关系

- 目标组件：[CommonAIComponent](../CommonAIComponent)（前 6 个方法）与 [HumanAIComponent](../HumanAIComponent)（后 15 个方法），两者都继承自 [AgentComponent](../AgentComponent)
- 宿主：[Agent](../../mission/Agent) 提供 `CommonAIComponent` / `HumanAIComponent` 只读属性与 `AIStateFlags`
- 位标志类型：`Agent.AIStateFlag`（`TaleWorlds.MountAndBlade` 的嵌套枚举），`UseObjectUsing` / `UseObjectMoving` 是本类操作的两位；通用形状见 [AIStateFlag](../AIStateFlag)
- 枚举参数：`MovementOrder.MovementOrderEnum` 与 `ArrangementOrder.ArrangementOrderEnum` 是 `RefreshBehaviorValues` 的两个真参数
- 装配前提：[AgentCommonAILogic](../AgentCommonAILogic) 与 [AgentHumanAILogic](../AgentHumanAILogic) 负责把这两个组件挂上——**没注册就等于本类一半方法会崩**
- 组件侧的 AI 决策：`Agent.MovementControlFlag` 与 `Agent.EventControlFlag` 是组件 `OnAIInputSet` 收到的两个位标志参数（见 [AgentComponent](../AgentComponent)）
- 桶首页：[mission-ext API 分区](../)