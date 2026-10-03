---
title: "BreakInOutBesiegedSettlementAction"
description: "攻城战里「突围」与「强行突入」的共用实现：向 TroopSacrificeModel 问损失数，再按队伍是否在联军中分别从主队或全军花掉兵力。"
---

# BreakInOutBesiegedSettlementAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class BreakInOutBesiegedSettlementAction`
**Base:** 无（纯静态动作类）
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/BreakInOutBesiegedSettlementAction.cs`

## 概述

攻城战结束时有两条路可选：打输之后**突围**（`ApplyBreakOut`），或者主动**强行突入**（`ApplyBreakIn`）。两条路在这里共用同一个私有实现 `ApplyInternal`，唯一的差别是**向模型问损失人数时走哪个方法**。所以这个类真正承担的是「把一次战术选择翻译成具体死多少人」——它不判胜败、不改围城状态、不动关系分（除了特定分支），只负责**扣兵**。

扣兵的算法分两支，由「玩家队伍是不是联军统帅」决定。**玩家队伍是联军统帅时**（`mainParty.Army != null && mainParty.Army.LeaderParty == mainParty`），先统计全军非英雄人数 `num2`，然后按人数加权在全军所有队伍里挑人扣，**落在主队的计入 `casualties`，落在其他队伍的只累加 `armyCasualtiesCount`**。**玩家队伍不是联军统帅时**，直接从 `mainParty.MemberRoster` 里按槽位随机扣，命中英雄槽或空槽就 `i--` 重试，扣掉的全部进 `casualties`。

## 心智模型

把这个类当成「**一次性的伤亡结算器**」，输出是两个 `out` 参数：`casualties` 是 `TroopRoster`（玩家自己吃掉的），`armyCasualtiesCount` 是一个 **`int`，且用 `-1` 当哨兵值**。这是最容易踩的地方：`ApplyInternal` 开头就是 `casualties = TroopRoster.CreateDummyTroopRoster(); armyCasualtiesCount = -1;`，而 `armyCasualtiesCount` 只在**联军统帅分支**里被赋成 `0` 并随后自增。所以三种调用的返回值含义完全不同——

| 情形 | `casualties` | `armyCasualtiesCount` |
| --- | --- | --- |
| 玩家是联军统帅 | 主队实际死者 | 全军非主队的死者数（真实值） |
| 玩家在联军里但不是统帅 | 主队实际死者 | **仍是 -1** |
| 玩家不在联军里 | 主队实际死者 | **仍是 -1** |

**`-1` 不是「零伤亡」，是「这个数字没被计算过」。** 拿它去做 UI 显示会得到一个负数。

第二个心智锚点是**损失数的来源不对称**：`breakIn == true` 走 `TroopSacrificeModel.GetLostTroopCountForBreakingInBesiegedSettlement(mainParty, siegeEvent)`（**只吃两个参数**），`breakIn == false` 走 `GetLostTroopCountForBreakingOutOfBesiegedSettlement(mainParty, siegeEvent, isFromPort)`（三个参数）。也就是说 **`isFromPort` 参数对 `ApplyBreakIn` 完全无效**——它只被 `ApplyBreakOut` 透传进模型。传错了不会有任何提示。

第三个锚点是**关系惩罚只在一支路径上**：只有「玩家在联军里、但不是统帅」这一支会执行 `ChangeRelationAction.ApplyPlayerRelation(armyLeader, BreakOutArmyLeaderRelationPenalty)` 与对每个 `AttachedParties` 成员的 `BreakOutArmyMemberRelationPenalty`，然后 `MobileParty.MainParty.Army = null`（脱离联军）。统帅路径与独立队伍路径都不做这些。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ApplyBreakIn` | `public static void ApplyBreakIn(out TroopRoster casualties, out int armyCasualtiesCount, bool isFromPort)` | 主动突入被围城镇的入口，薄封装 `ApplyInternal(breakIn: true, ...)`。**`isFromPort` 在这条路上不会被读取**（损失模型走的是两参重载），传什么都不影响结果。 |
| `ApplyBreakOut` | `public static void ApplyBreakOut(out TroopRoster casualties, out int armyCasualtiesCount, bool isFromPort)` | 战败后突围的入口，薄封装 `ApplyInternal(breakIn: false, ...)`。**只有这条路会把 `isFromPort` 透传给 `GetLostTroopCountForBreakingOutOfBesiegedSettlement`**，影响模型算出的损失人数。 |
| `ApplyInternal` | `private static void ApplyInternal(bool breakIn, out TroopRoster casualties, out int armyCasualtiesCount, bool isFromPort)` | 全部逻辑所在，也是唯一读 `Settlement.CurrentSettlement.SiegeEvent` 的地方——**调用时必须处于一个正在被围困的城镇里**，否则 `CurrentSettlement` 为 null 直接 NRE。分两支扣兵算法，统帅支写 `armyCasualtiesCount`，非统帅支额外做关系惩罚与脱离联军。 |

## 真实示例

最基本的调用：打输后突围，把死兵记进 `casualties`（`armyCasualtiesCount` 在这条路上多半是 -1）：

```csharp
TroopRoster casualties;
int armyCasualtiesCount;

BreakInOutBesiegedSettlementAction.ApplyBreakOut(out casualties, out armyCasualtiesCount, false);

Debug.Print("player losses = " + casualties.TotalManCount, 0);
if (armyCasualtiesCount >= 0)
{
    Debug.Print("allied losses outside the main party = " + armyCasualtiesCount, 0);
}
else
{
    Debug.Print("not commanding an army, armyCasualtiesCount is the -1 sentinel", 0);
}
```

主动突入——注意这条路上 `isFromPort` 传什么都不影响结果，写 `false` 只是为了表意清楚。调用后主队花名册已经变短，可以直接复查：

```csharp
TroopRoster assaultLosses;
int alliedLosses;

int before = MobileParty.MainParty.MemberRoster.TotalManCount;

BreakInOutBesiegedSettlementAction.ApplyBreakIn(out assaultLosses, out alliedLosses, false);

Debug.Print("before=" + before + " after=" + MobileParty.MainParty.MemberRoster.TotalManCount, 0);
Debug.Print("record roster says " + assaultLosses.TotalManCount + " dead", 0);
```

调用前先自己预估损失人数（两个损失模型方法都是 `public abstract`，可以直接调；`ExplainedNumber.RoundedResultNumber` 是本类内部实际取用的那个属性）：

```csharp
SiegeEvent siegeEvent = Settlement.CurrentSettlement.SiegeEvent;

ExplainedNumber breakInLoss = Campaign.Current.Models.TroopSacrificeModel
    .GetLostTroopCountForBreakingInBesiegedSettlement(MobileParty.MainParty, siegeEvent);

ExplainedNumber breakOutLoss = Campaign.Current.Models.TroopSacrificeModel
    .GetLostTroopCountForBreakingOutOfBesiegedSettlement(
        MobileParty.MainParty, siegeEvent, true);

Debug.Print("break in loses about " + breakInLoss.RoundedResultNumber, 0);
Debug.Print("break out from port loses about " + breakOutLoss.RoundedResultNumber, 0);
Debug.Print("break out detail: " + breakOutLoss.GetExplanations(), 0);
```

对照复刻「非统帅路径的关系惩罚」，方便 mod 在调用前预览：

```csharp
TroopSacrificeModel model = Campaign.Current.Models.TroopSacrificeModel;

if (MobileParty.MainParty.Army != null &&
    MobileParty.MainParty.Army.LeaderParty != MobileParty.MainParty)
{
    Debug.Print("escaping costs the leader " + model.BreakOutArmyLeaderRelationPenalty, 0);
    Debug.Print("escaping costs each attached member " + model.BreakOutArmyMemberRelationPenalty, 0);
}
```

## 风险与边界

- **必须在被围城镇内调用。** `ApplyInternal` 第一件事就是 `Settlement.CurrentSettlement.SiegeEvent`。在野外、在非 siege 场景、在任务触发的菜单里调都会 NRE。
- **`armyCasualtiesCount = -1` 是哨兵不是数值。** 只有「玩家是联军统帅」这一支才会把它变成真实计数。UI 上要显式判 `>= 0`。
- **`isFromPort` 只对 `ApplyBreakOut` 有效。** `ApplyBreakIn` 走的两参模型重载根本不读它。
- **非统帅路径可能死循环。** 扣兵的 `for` 循环里 `int index = MBRandom.RandomInt(memberRoster.Count); ... if (!characterAtIndex.IsRegular || memberRoster.GetElementNumber(index) == 0) { i--; continue; }`——如果整个 `MemberRoster` 里没有任何常规士兵（只有英雄、或者全被扣光），这个重试永远命中不了，会把帧卡死。调用前应确认队伍里还有常规士兵。
- **损耗是从真实花名册里扣的。** 扣掉的是 `MemberRoster` 里的实际条目，不是「虚拟损失数」，会立刻反映在 `TotalManCount` 与后续寻路上。
- **英雄不会被扣。** 非统帅路径显式跳过 `!characterAtIndex.IsRegular` 的槽位；统帅路径的加权循环里也显式跳过 `IsHero` 的条目。
- **统帅路径会把全军都拖下水。** 损失是按全军人数加权随机摊的，别的队伍（盟友部队）也会真死兵，且那部分只用一个 `int` 计数、不进 `casualties`。
- **只有非统帅路径会扣关系分并脱离联军。** 统帅路径与独立队伍路径都不动关系；非统帅路径执行完还会 `MobileParty.MainParty.Army = null`。
- **`out TroopRoster` 是 `CreateDummyTroopRoster()` 造的哑名单。** 它只是伤亡的记录载体，**不会写回任何队伍**，真正的扣减是在同一次调用里直接对 `MemberRoster` 做的。
- **`static class` 无法继承也无法实例化。** 换伤亡算法请替换 `Campaign.Current.Models.TroopSacrificeModel`，不要试图派生。

## 依赖关系

- 损失模型：[TroopSacrificeModel](../TroopSacrificeModel) 的两个 `GetLostTroopCount...` 方法决定扣多少人、两个 `BreakOut...RelationPenalty` 属性决定非统帅路径的关系代价——**要改数值就得换 model，而不是改这个类**
- 战局上下文：`Settlement.CurrentSettlement.SiegeEvent` 是损失模型的输入，也是本类 NPE 风险的全部来源；[Settlement](../../campaign/Settlement) 的 `SetNextSiegeState()` 是围城状态推进的另一半（由 [CampaignSiegeStateHandler](CampaignSiegeStateHandler) 触发）
- 名单数据：`TroopRoster.CreateDummyTroopRoster()` 造 `out` 载体，`MemberRoster` / `GetCharacterAtIndex` / `GetElementNumber` / `AddToCountsAtIndex` 是实际扣兵的原语
- 关系惩罚：[ChangeRelationAction](../ChangeRelationAction) 的 `ApplyPlayerRelation(Hero, int)` 是非统帅路径唯一的对外影响
- 队伍模型：[MobileParty](../../campaign/MobileParty) 的 `Army` 属性可读可写，`LordPartyComponent` 与 `AttachedParties` 决定关系惩罚的作用对象
- 数值类型：[ExplainedNumber](../ExplainedNumber) 的 `RoundedResultNumber` 是本类从模型结果里取整数的唯一途径
- 同族动作：[ChangePlayerCharacterAction](ChangePlayerCharacterAction) 是同一命名空间下另一个「一次性做完整段战役变更」的静态动作类
- 桶首页：[campaign-ext API 分区](../)
