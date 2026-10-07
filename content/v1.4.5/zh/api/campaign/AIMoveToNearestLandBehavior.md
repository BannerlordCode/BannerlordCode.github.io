---
title: "AIMoveToNearestLandBehavior"
description: "内部战役 AI 行为：当海军方当前位于海上（IsCurrentlyAtSea）时，依地图搜索最近陆地面中心并估算抵达时长，若安全航行时长足够覆盖航程则产出“移动到最近陆地/港口（MoveToNearestLandOrPort）”的评分；由 Campaign 在 InitializeGameStarter 中注册，仅写入 PartyThinkParams。"
---

# AIMoveToNearestLandBehavior

**命名空间：** TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors
**模块：** TaleWorlds.CampaignSystem
**类型：** internal class AIMoveToNearestLandBehavior : CampaignBehaviorBase
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors/AIMoveToNearestLandBehavior.cs

## 概述

该行为是战役 AI 的“救生”评分器，专门处理当前漂浮在海上的海军方：它在地图上找到最近的可登陆面中心，按该方类型的平均海军航速估算 “航程 / 安全航行时长” 之比，若比值低于阈值则产出 `MoveToNearestLandOrPort` 候选，分数随紧迫度放大，引导方尽快靠岸而非在海上漂到船毁。

## 心智模型

它是 `CampaignBehaviorBase` 的纯评分器，且被标记为 `internal`——仅对同一程序集（TaleWorlds.CampaignSystem）可见，mod 无法从外部程序集按类型引用或继承它，但战役运行时仍由框架注册并参与 AI 思考。唯一入口 `AiHourlyTick` 只订阅 `AiHourlyTickEvent`，`SyncData` 为空。关键前置：`!mobileParty.IsCurrentlyAtSea || mobileParty.CurrentSettlement != null` 时直接返回（只有真正在海上、不在定居点内的方才会被评分），且 `!mobileParty.HasLandNavigationCapability` 时也返回。最终移动由 AI 思考管线采纳，本行为不改写方的移动状态。生命周期与兄弟行为一致：子模块 `InitializeGameStarter` 中由游戏本体 `AddBehavior` 一次。

## 何时使用 / 何时不要使用

- **使用**：理解“海军方为何会主动靠岸”时阅读本行为；其评分依赖 [CampaignShipDamageModel](../CampaignShipDamageModel) 的 `GetEstimatedSafeSailDuration` 与 [PartyNavigationModel](../PartyNavigationModel)（经 `Campaign.Current.Models.PartyNavigationModel.GetInvalidTerrainTypesForNavigationType`）—要改安全航行/地形判定应走这些模型。
- **不要使用**：不要在外部 mod 里 `new AIMoveToNearestLandBehavior()` 或按类型取它（它是 internal，跨程序集不可见；运行时若确需读取，也只能在同一程序集内 `Campaign.Current.GetCampaignBehavior<AIMoveToNearestLandBehavior>()`）；不要直接给海上方设置 `MoveToNearestLandOrPort` 来“让它靠岸”，应让本行为写入候选。也不要在 `Campaign.Current` 为空时调用其评分逻辑。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有行为；读取 `Campaign.Current.Models.CampaignShipDamageModel`、`Campaign.Current.Models.PartyNavigationModel`、`Campaign.Current.MapSceneWrapper`、`Campaign.MapDiagonal`、`Campaign.Current.EstimatedAverage*NavalSpeed` 等全局数据。
- [CampaignEvents](../CampaignEvents) —— 订阅 `AiHourlyTickEvent`。
- [MobileParty](../MobileParty) —— 判定主体；读取 `IsCurrentlyAtSea`、`CurrentSettlement`、`HasLandNavigationCapability`、`CurrentNavigationFace`、`Ships`、`IsLordParty/IsCaravan/IsBandit/IsVillager`、`DefaultBehavior`、`TargetSettlement`。
- [PartyThinkParams](../PartyThinkParams) —— 评分写入目标。
- [AIBehaviorData](../AIBehaviorData) / [AiBehavior](../AiBehavior) —— 产出候选（行为恒为 `MoveToNearestLandOrPort`，`NavigationType.All`）。
- [CampaignShipDamageModel](../CampaignShipDamageModel) —— 经 `GetEstimatedSafeSailDuration(mobileParty)` 给出船只还能安全航行多久，是紧迫度分母。
- [PartyNavigationModel](../PartyNavigationModel) —— 经 `GetInvalidTerrainTypesForNavigationType(NavigationType.All)` 取出不可航行的地形，用于地图最近陆地搜索。

下游与协同（同 AI 簇）：

- [AiPartyThinkBehavior](../AiPartyThinkBehavior) —— 消费 `PartyThinkParams` 候选并决定最终移动。
- [AiPatrollingBehavior](../AiPatrollingBehavior) / [AiLandBanditPatrollingBehavior](../AiLandBanditPatrollingBehavior) / [AiVisitSettlementBehavior](../AiVisitSettlementBehavior) —— 同层兄弟行为。

辅助（无独立页）：`MapSceneWrapper.GetNearestFaceCenterForPositionWithPath` 与 `DistanceHelper.FindClosestDistanceFromMobilePartyToPoint` 完成最近陆地面寻路与距离计算。

## 风险

- **internal 类型跨程序集不可见**：mod 不能 `new` 它或按泛型 `GetCampaignBehavior<AIMoveToNearestLandBehavior>()` 从外部程序集取实例（编译期不可访问）。若要在自家 mod 里复刻“海上靠岸”逻辑，应复制其算法或改用 [CampaignShipDamageModel](../CampaignShipDamageModel) 自行计算，不要依赖此内部类型。
- **仅当真正在海上才评分**：`!IsCurrentlyAtSea` 或 `CurrentSettlement != null` 直接返回；若你错误地给本就在定居点内的方期待评分，不会得到候选。
- **海军/陆地边界**：`!HasLandNavigationCapability` 直接返回；纯海军方（无陆地能力）不会被引导靠岸（它本就只能在海上）。`AIBehaviorData` 使用 `NavigationType.All` 表示“任意可登陆方式”。
- **地图无陆地面时静默失败**：若 `MapSceneWrapper.GetNearestFaceCenterForPositionWithPath` 在 `Campaign.MapDiagonal / 2` 半径内找不到陆地面，距离 `num` 为 `float.MaxValue`，随后 `num < Campaign.MapDiagonal` 不成立，方法静默返回，不产出候选（方继续在海上）。
- **依赖 Campaign.Current 非空**：内部大量读取 `Campaign.Current.*`；在主菜单、`Mission` 层或战役未启动时调用会空引用。只在 `AiHourlyTick` 上下文安全。
- **重复注册**：同其它行为，应只注册一次，否则 `AiHourlyTickEvent` 被多次订阅导致评分重复累加。

## 成员说明

### 事件订阅与生命周期

- **`RegisterEvents()`**
  - 用途：仅订阅 `CampaignEvents.AiHourlyTickEvent` 到 `AiHourlyTick`。
  - 副作用：无。调用时机：行为注册后由框架调用一次。

- **`SyncData(IDataStore dataStore)`**
  - 用途：空实现；无字段需序列化。
  - 副作用：无。调用时机：存读档时调用。

### 每小时“靠岸”评分

- **`AiHourlyTick(MobileParty mobileParty, PartyThinkParams p)`**
  - 用途：前置过滤（不在海上 / 在定居点内 / 无陆地能力 → 返回）→ 取 `CampaignShipDamageModel.GetEstimatedSafeSailDuration` 得到安全航行时长 `estimatedSafeSailDuration` → 用 `MapSceneWrapper.GetNearestFaceCenterForPositionWithPath(mobileParty.CurrentNavigationFace, targetIsLand:true, …)` 找到最近陆地面中心 → `DistanceHelper.FindClosestDistanceFromMobilePartyToPoint` 得到航程 `num`。按方类型选平均海军航速，计算 `num3 = 航程 / 航速 / 安全航行时长`；若 `num3 > RatioThreshold(0.75f)`，则分数 `num4 = 2f * num3`（且若方已处 `MoveToNearestLandOrPort` 且目标正是该陆地则再乘 `1.2f`），写入 `AIBehaviorData(settlement:null, AiBehavior.MoveToNearestLandOrPort, NavigationType.All, …)`；分数上限由 `MoveToNearestLandMaximumScore = 2` 概念约束（`2f * num3` 随紧迫度可超过 2，但 `num3` 很小）。
  - 副作用：仅写 `p`。调用时机：`AiHourlyTickEvent`。注意 `settlement` 变量始终为 `null`（本行为不锁定具体定居点，只求“最近陆地”），所以产出的 `AIBehaviorData` 目标定居点为 null，由移动系统解析到具体面。

## 示例

观察海上方是否已被本行为注入“靠岸”候选（只观察，不要改写移动状态）：

```csharp
CampaignEvents.AiHourlyTickEvent.AddNonSerializedListener(this, OnSeaTick);

private void OnSeaTick(MobileParty mobileParty, PartyThinkParams p)
{
    if (mobileParty.IsCurrentlyAtSea && mobileParty.DefaultBehavior == AiBehavior.MoveToNearestLandOrPort)
    {
        float safeHours = Campaign.Current.Models.CampaignShipDamageModel.GetEstimatedSafeSailDuration(mobileParty);
    }
}
```

在自家行为中复刻“低安全航行时长则引导靠岸”的判定（跨程序集无法引用内部类型，故直接读模型）：

```csharp
float safeSail = Campaign.Current.Models.CampaignShipDamageModel.GetEstimatedSafeSailDuration(myParty);
if (safeSail < 12f)
{
    myParty.Ai.SetAIState(AiBehavior.MoveToNearestLandOrPort);
}
```

## 怎么用

### 怎么拿到它

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors/AIMoveToNearestLandBehavior.cs`（全文 54 行）。
**入口：** 无——类型是 `internal`，外部程序集只能观察它写进 `PartyThinkParams.AIBehaviorScores` 的候选。

**你不能 `new` 它。** 类声明是 `internal class AIMoveToNearestLandBehavior : CampaignBehaviorBase`（`AIMoveToNearestLandBehavior.cs:7`）——**`internal` 意味着外部程序集在编译期就看不到这个类型**，`new AIMoveToNearestLandBehavior()` 不会编译，`GetCampaignBehavior<AIMoveToNearestLandBehavior>()` 的泛型实参也传不过去。

它已经由官方注册好了，**你要做的是读它写出来的候选，而不是拿到它**。产出通道是 `AiHourlyTick(MobileParty, PartyThinkParams)`（`AIMoveToNearestLandBehavior.cs:18`），通过 `p.AddBehaviorScore(...)`（`AIMoveToNearestLandBehavior.cs:47`）交回给 [AiPartyThinkBehavior](../AiPartyThinkBehavior)。

要看它到底在算什么，先把它的两道早退门限记下来。第一道在 `AIMoveToNearestLandBehavior.cs:20`：`!IsCurrentlyAtSea || CurrentSettlement != null` 直接 return——**海上且不在定居点里**才进入。第二道在 `AIMoveToNearestLandBehavior.cs:27`：`!HasLandNavigationCapability` 再 return。**没有陆上导航能力的船型方永远拿不到靠岸候选。**

### 典型用法

评分的核心是「按安全航行时长还能撑多久」：距离除以航速（`DistanceHelper.FindClosestDistanceFromMobilePartyToPoint`，`:33`）再除以 `GetEstimatedSafeSailDuration`（`:24`），得到 `num3`（`:39`）。`num3 > 0.75f`（`:40`）才产出候选，分数是 `2f * num3`（`:42`），**越危险分数越高**。`RatioThreshold = 0.75f` 这个 `private const`（`:11`）在 `:40` 被写成字面量——**常量与使用处不同源，改常量不生效。**

航速是四选一的分派（`:38`）：领主方 / 商队 / 土匪 / 村民各有各的估值，否则退到 `EstimatedMaximumLordPartySpeedExceptPlayer * 0.5f`。

想知道一支船现在离岸还有多远、自己算一遍同样的数：

```csharp
public static class NearestLandReplica
{
    public static float SafeRatio(MobileParty seaParty)
    {
        float safeHours = Campaign.Current.Models.CampaignShipDamageModel.GetEstimatedSafeSailDuration(seaParty);
        int[] bad = Campaign.Current.Models.PartyNavigationModel.GetInvalidTerrainTypesForNavigationType(MobileParty.NavigationType.All);
        CampaignVec2 face = Campaign.Current.MapSceneWrapper.GetNearestFaceCenterForPositionWithPath(seaParty.CurrentNavigationFace, targetIsLand: true, Campaign.MapDiagonal / 2f, bad);
        float distance = DistanceHelper.FindClosestDistanceFromMobilePartyToPoint(seaParty, face, MobileParty.NavigationType.All, out var _);
        float speed = Campaign.Current.EstimatedAverageLordPartyNavalSpeed;
        return distance / speed / safeHours;
    }
}
```

**复刻这段代码时注意一个细节**：原行为在 `:34` 还做了一道 `!(num > 0f) || !(num < Campaign.MapDiagonal)` 的早退，即**距离必须在 (0, MapDiagonal) 区间内**才算候选。`:43` 的 1.2 倍加成依赖 `settlement != null`，而 `settlement` 在 `:26` 被初始化为 null 后**从未被重新赋值**——**这个加成分支是死代码，永远不成立。** 别照抄它。

### 最容易踩的坑

**internal 类型跨程序集不可见**：mod 不能 `new` 它或按泛型 `GetCampaignBehavior<AIMoveToNearestLandBehavior>()` 从外部程序集取实例（编译期不可访问）。若要在自家 mod 里复刻“海上靠岸”逻辑，应复制其算法或改用 [CampaignShipDamageModel](../CampaignShipDamageModel) 自行计算，不要依赖此内部类型。

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [MobileParty](../MobileParty) · [PartyThinkParams](../PartyThinkParams) · [AIBehaviorData](../AIBehaviorData) · [AiBehavior](../AiBehavior) · [CampaignShipDamageModel](../CampaignShipDamageModel) · [PartyNavigationModel](../PartyNavigationModel) · [Ship](../Ship) · [AiPartyThinkBehavior](../AiPartyThinkBehavior) · [AiPatrollingBehavior](../AiPatrollingBehavior) · [AiLandBanditPatrollingBehavior](../AiLandBanditPatrollingBehavior) · [AiVisitSettlementBehavior](../AiVisitSettlementBehavior)
