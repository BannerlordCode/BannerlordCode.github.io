---
title: "AIBehaviorData"
description: "队伍 AI 的「一条候选行为」值类型：目标点 + 行为种类 + 导航方式 + 三个布尔上下文，自己实现全字段相等与哈希，供 PartyThinkParams 做评分表键。"
---

# AIBehaviorData

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public struct AIBehaviorData : IEquatable<AIBehaviorData>`
**Base:** 无（实现 `IEquatable<AIBehaviorData>`）
**File:** `TaleWorlds.CampaignSystem/AIBehaviorData.cs`

## 概述

队伍 AI 每帧要回答一个问题：「这个队伍下一步有多少种可能，每种可能性值多少分」。`AIBehaviorData` 就是「一种可能性」的载体——一个 **`struct`**，七个字段，值语义。它的字段可以分成三组：**目标**（`Party` 一个 `IMapPoint`，或 `Position` 一个 `CampaignVec2`，二选一）、**行为**（`AiBehavior` 枚举 + `NavigationType`）、**上下文开关**（`WillGatherArmy` / `IsFromPort` / `IsTargetingPort`）。

它真正的价值不在数据本身，而在**自己实现的相等语义**。这个类型手写了 `Equals(object)`、`Equals(AIBehaviorData)`、`GetHashCode()` 与 `==` / `!=` 两个运算符，等价于「七个字段逐个比」。而 `GetHashCode` 的写法很有信息量：它按 `AiBehavior → Party → WillGatherArmy → IsTargetingPort → IsFromPort → NavigationType → Position` 的顺序乘 397 混合，**这个顺序就是哈希对字段排列的敏感度顺序**——调换顺序会让所有已缓存的哈希全部失效。

它的消费者是 [PartyThinkParams](../PartyThinkParams)：`MBList<(AIBehaviorData, float)> _aiBehaviorScores` 是一个**线性扫描**的评分表，`TryGetBehaviorScore(in AIBehaviorData, out float)` 逐条 `Equals` 比较，`SetBehaviorScore(in AIBehaviorData, float)` 找到就替换、**找不到就 `Debug.FailedAssert("AIBehaviorScore not found.")`**。所以往表里写分之前必须先 `AddBehaviorScore`，否则断言会响。

## 心智模型

把它当成「**一条可比较的 AI 决策候选**」，用法上分三步：**造 → 查/写分 → 比**。

**造**有两个构造函数，正好对应两种目标形态。以 `IMapPoint` 为目标的版本把 `Position` 设为 `CampaignVec2.Zero`、`Party` 设为你给的点；以 `CampaignVec2` 为目标的版本把 `Party` 设为 `null`、`Position` 设为你给的坐标。**两个构造函数的参数列表除第一个参数外完全一样**，所以选错重载是纯类型驱动的、编译期就会拦住。官方用法就是这两种：`PatrolPartiesCampaignBehavior.cs:459` 用 `mobileParty.HomeSettlement` 走 `IMapPoint` 版，`:517` 也用 `settlement` 走 `IMapPoint` 版；`AiArmyMemberBehavior.cs:86` 用 `mobileParty.Army.LeaderParty` 走 `IMapPoint` 版。

**查/写分**必须成对。`TryGetBehaviorScore` 找不到返回 false 且把 `score` 置 0；`SetBehaviorScore` 找不到直接断言失败。官方正确顺序是先 `AddBehaviorScore((data, 0f))` 再 `SetBehaviorScore(data, score)`，或者直接 `AddBehaviorScore((data, score))` 一次到位。

**比**靠 `==` 与 `Equals`。这里有一个必须记住的坑：**`struct` 默认会为所有字段生成 `Equals` 与 `GetHashCode`，但本类型显式覆盖了它们**——所以你比较时走的是这份手写实现，而不是编译器合成的。`Equals(object obj)` 里 `if (!(obj is AIBehaviorData)) return false;` 是 `is` 模式匹配写法，对 null 安全、对装箱值安全。

另一个必须记住的坑是 **`static readonly AIBehaviorData Invalid`**。它在静态构造里被建成 `new AIBehaviorData(null, AiBehavior.None, MobileParty.NavigationType.None, false, false, false)`——**走的是 `IMapPoint` 重载**，所以它的 `Position` 是 `CampaignVec2.Zero` 而 `Party` 是 null。用它当「无行为」哨兵时，比较逻辑对 `Party` 有专门的 null 分支（`GetHashCode` 里的 `((Party != null) ? ... : hashCode)`），所以不会 NRE。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Invalid` | `public static readonly AIBehaviorData Invalid` | 「无行为」哨兵。构造为 `Party = null` + `Position = CampaignVec2.Zero` + `AiBehavior.None` + `NavigationType.None` + 三个 bool 全 false。**它是 `readonly` 的，只能读不能替换**；也**不是 default(AIBehaviorData)**——`default` 下 `Position` 是全零、`Party` 是 null、`AiBehavior` 是 `Hold`（枚举值 0），与 `Invalid` 的 `AiBehavior.None`（值 1）不同。 |
| `Party` | `public IMapPoint Party` | 目标点引用。两个构造函数里**只有 `IMapPoint` 重载会赋值**，`CampaignVec2` 重载把它置 null。`Equals` / `GetHashCode` / `==` 都会比它，且都对 null 做了处理。 |
| `Position` | `public CampaignVec2 Position` | 目标坐标。**只有 `CampaignVec2` 重载会赋值**，`IMapPoint` 重载把它置成 `CampaignVec2.Zero`。注意它与 `Party` 同时参与相等判定——同一个聚落的两个 `AIBehaviorData`，一个用 `Party` 版构造、一个用 `Position` 版构造，**它们不相等**。 |
| `AiBehavior` | `public AiBehavior AiBehavior` | 行为种类，19 个取值（`Hold` / `None` / `GoToSettlement` / `AssaultSettlement` / `RaidSettlement` / `BesiegeSettlement` / `EngageParty` / `JoinParty` / `GoAroundParty` / `GoToPoint` / `FleeToPoint` / `FleeToGate` / `FleeToParty` / `PatrolAroundPoint` / `EscortParty` / `DefendSettlement` / `DoOperation` / `MoveToNearestLandOrPort` + 哨兵 `NumAiBehaviors`）。它是 `GetHashCode` 的**种子**，也是 `switch` 分派时最常读的字段。 |
| `NavigationType` | `public MobileParty.NavigationType NavigationType` | 目标是否可达所需的导航方式（`Default` / `Naval` 等）。它参与相等与哈希，但**不参与 `Equals(object)` 之外的任何逻辑**——用错不会报错，只会让 AI 拿到一条它走不到的行为。 |
| `WillGatherArmy` | `public bool WillGatherArmy` | 这条行为是否会顺便召集军队。官方全部调用点都传 `willGatherArmy: false`，只有 `SetPartyAiAction` 一类的上层入口可能传 true。 |
| `IsFromPort` | `public bool IsFromPort` | 起点是否来自港口。三个 bool 里它在哈希里的位置是**倒数第三**（`WillGatherArmy → IsTargetingPort → IsFromPort`）。 |
| `IsTargetingPort` | `public bool IsTargetingPort` | 目标是否为港口。官方 `PatrolPartiesCampaignBehavior.cs:459` 传的是 `mobileParty.HomeSettlement.HasPort && mobileParty.IsCurrentlyAtSea`——**这两个条件不是恒等式**，所以这个 bool 携带真实信息。 |
| 构造函数（点版） | `public AIBehaviorData(IMapPoint party, AiBehavior aiBehavior, MobileParty.NavigationType navigationType, bool willGatherArmy, bool isFromPort, bool isTargetingPort)` | 以一个地图对象为目标。同时把 `Position` 置为 `CampaignVec2.Zero`。**不校验 `party` 为 null**——传 null 得到的就是「目标缺失但其余字段有效」的一条数据。 |
| 构造函数（坐标版） | `public AIBehaviorData(CampaignVec2 position, AiBehavior aiBehavior, MobileParty.NavigationType navigationType, bool willGatherArmy, bool isFromPort, bool isTargetingPort)` | 以一个坐标为目标。同时把 `Party` 置为 null。参数顺序与点版**只差第一个**，选错重载由目标类型决定。 |
| `Equals` / `==` / `!=` / `GetHashCode` | `public override bool Equals(object obj)` / `public bool Equals(AIBehaviorData other)` / `public static bool operator ==` / `!=` / `public override int GetHashCode()` | 手写的七字段全等实现，是 `PartyThinkParams` 评分表能工作的前提。`operator ==` 是**逐字段短路比较后再比 `Position`**，所以任一 bool 不同就不会走到坐标比较。`GetHashCode` 按 `AiBehavior → Party → WillGatherArmy → IsTargetingPort → IsFromPort → NavigationType → Position` 的固定顺序乘 397 混合。 |

## 真实示例

造两条候选行为——注意这两次调用因为目标形态不同，**结果不相等**：

```csharp
MobileParty party = MobileParty.MainParty;

// 点版：IMapPoint 目标，Position 被置成 CampaignVec2.Zero
AIBehaviorData byPoint = new AIBehaviorData(
    party.HomeSettlement,
    AiBehavior.GoToSettlement,
    party.NavigationCapability,
    willGatherArmy: false,
    isFromPort: false,
    isTargetingPort: false);

// 坐标版：CampaignVec2 目标，Party 被置成 null
AIBehaviorData byPosition = new AIBehaviorData(
    party.HomeSettlement.Position,
    AiBehavior.GoToSettlement,
    party.NavigationCapability,
    willGatherArmy: false,
    isFromPort: false,
    isTargetingPort: false);

Debug.Print("same behavior, different target form -> " + (byPoint == byPosition), 0);
```

往评分表里写分——**必须先 Add 再 Set，否则 `SetBehaviorScore` 会 FailedAssert**：

```csharp
PartyThinkParams thinkParams = MobileParty.MainParty.ThinkParamsCache;
AIBehaviorData candidate = new AIBehaviorData(
    MobileParty.MainParty.HomeSettlement,
    AiBehavior.AssaultSettlement,
    MobileParty.MainParty.NavigationCapability,
    willGatherArmy: false,
    isFromPort: false,
    isTargetingPort: false);

if (!thinkParams.TryGetBehaviorScore(candidate, out float score))
{
    thinkParams.AddBehaviorScore((candidate, 0f));
    score = 0f;
}

thinkParams.SetBehaviorScore(candidate, score + 10f);
```

查分（找不到时 `score` 被置 0，务必判返回值而不是判 `score != 0`）：

```csharp
if (MobileParty.MainParty.ThinkParamsCache.TryGetBehaviorScore(candidate, out float found))
{
    Debug.Print("score = " + found, 0);
}
else
{
    Debug.Print("this candidate was never scored", 0);
}
```

按行为种类分派——`AiBehavior` 是这个类型上最常被读的字段：

```csharp
public static string Describe(AIBehaviorData data)
{
    // Party 可能是 null（坐标版构造），所以先判再读
    string target = data.Party != null ? data.Party.Name.ToString() : data.Position.ToString();

    switch (data.AiBehavior)
    {
        case AiBehavior.BesiegeSettlement:
            return "besieging " + target;

        case AiBehavior.RaidSettlement:
            return "raiding " + target;

        case AiBehavior.PatrolAroundPoint:
            return "patrolling " + target;

        default:
            return data.AiBehavior.ToString();
    }
}
```

用 `Invalid` 当哨兵——注意它**不是 `default`**：

```csharp
AIBehaviorData nothing = AIBehaviorData.Invalid;

Debug.Print("invalid? " + (nothing == AIBehaviorData.Invalid), 0);
Debug.Print("is default? " + (nothing == default(AIBehaviorData)), 0);
Debug.Print("behavior = " + nothing.AiBehavior, 0);
```

自定义评分权重时，`SetBehaviorScore` 的「找不到即断言」是这个类型最容易踩的行为：

```csharp
public static void BoostAllPatrolScores(PartyThinkParams thinkParams, float bonus)
{
    foreach ((AIBehaviorData data, float score) in thinkParams.AIBehaviorScores)
    {
        if (data.AiBehavior != AiBehavior.PatrolAroundPoint)
        {
            continue;
        }

        // 每一项都在表里，所以 Set 一定找得到
        thinkParams.SetBehaviorScore(data, score + bonus);
    }
}
```

## 风险与边界

- **`Invalid` 不等于 `default(AIBehaviorData)`。** `Invalid.AiBehavior` 是 `AiBehavior.None`（值 1），`default` 是 `AiBehavior.Hold`（值 0）。混用会让「无行为」被判成「原地不动」。
- **两个构造函数互不等价。** 同一目标用点版与坐标版造出来的两条数据**不相等**，因为 `Party` 与 `Position` 都参与比较。查表时必须用与写入时相同的目标形态。
- **`SetBehaviorScore` 找不到会 `Debug.FailedAssert`。** 源码里的断言文本是 `"AIBehaviorScore not found."`。先 `TryGetBehaviorScore` 或 `AddBehaviorScore`。
- **`AddBehaviorScore` 不做去重。** 重复 Add 同一个键会产生两条相同记录，此后 `TryGetBehaviorScore` 返回**第一条**的分、`SetBehaviorScore` 改的是**第一条**——两条会永远不同步。
- **评分表是线性扫描。** `TryGetBehaviorScore` 与 `SetBehaviorScore` 都是 O(n) 遍历，不是字典。想 O(1) 得自己按 `AiBehavior` 分桶。
- **`struct` 可变字段公开。** 七个字段全是 `public` 非 readonly，`data.Position = x` 合法。改完会**静默破坏已缓存的评分**（键变了但表里的旧记录还在）。
- **`Equals(object)` 用 `is` 模式匹配。** 对 null 与装箱值都安全，不抛异常。
- **哈希顺序固定。** `GetHashCode` 的混合顺序是实现细节；不要依赖具体数值，也不要在运行时改动 `Position` 后继续用旧哈希做字典键。
- **`Party` 为 null 不代表数据无效。** 坐标版构造就是 `Party = null` 的合法状态。
- **不参与存档。** 它是 AI 每帧现算的临时值，只活在 `PartyThinkParams` 的评分表里。
- **`NavigationType` 用错不报错。** 相等与哈希都照算，但那条行为在 AI 侧走不到，属于静默失效。

## 依赖关系

- 唯一容器：[PartyThinkParams](../../campaign/PartyThinkParams) 的 `MBList<(AIBehaviorData, float)> AIBehaviorScores`、`TryGetBehaviorScore` / `SetBehaviorScore` / `AddBehaviorScore` 三个方法是本类型存在的全部理由
- 行为枚举：[AiBehavior](../../campaign/AiBehavior) 的 19 个取值决定 `AiBehavior` 字段的取值域，它同时也是 `switch` 分派时读的那一个
- 目标接口：`TaleWorlds.CampaignSystem.Map.IMapPoint` 是 `Party` 字段的类型，提供 `Name` / `Position` / `CurrentNavigationFace` / `MapFaction` 等，`MobileParty` / `Settlement` / `Army.LeaderParty` 都实现它
- 坐标类型：[CampaignVec2](../../campaign/CampaignVec2) 是 `Position` 字段的类型，带 `IsValid()` / `DistanceSquared` / `Face`，是坐标版构造的输入
- 导航方式：`MobileParty.NavigationType` 决定 `NavigationType` 字段，官方一律传 `party.NavigationCapability`
- 构造来源：`PatrolPartiesCampaignBehavior.cs:459 / :517`、`AiArmyMemberBehavior.cs:86 / :92`、`AiEngagePartyBehavior.cs:201`、`AiLandBanditPatrollingBehavior.cs:29` 是全树几处代表性构造点，展示了两种重载各自的用法
- 相邻上下文：`IsFromPort` / `IsTargetingPort` 这两个 bool 由调用方从 `MobileParty.IsCurrentlyAtSea` 与 `Settlement.HasPort` 推导，本类型不参与推导
- 桶首页：[campaign-ext API 分区](../)
