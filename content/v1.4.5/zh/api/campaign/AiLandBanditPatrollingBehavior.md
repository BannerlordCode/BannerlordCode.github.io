---
title: "AiLandBanditPatrollingBehavior"
description: "战役 AI 行为（极简）：为陆上土匪方计算在其巢穴（HomeSettlement）附近巡逻的评分，分数随巢穴内土匪数量相对 infest 阈值的饱和程度而平滑变化，并由随机抖动避免所有土匪聚在同一处；由 Campaign 在 InitializeGameStarter 中注册，仅写入 PartyThinkParams。"
---

# AiLandBanditPatrollingBehavior

**命名空间：** TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors
**模块：** TaleWorlds.CampaignSystem
**类型：** public class AiLandBanditPatrollingBehavior : CampaignBehaviorBase
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors/AiLandBanditPatrollingBehavior.cs

## 概述

该行为是 [AiPatrollingBehavior](../AiPatrollingBehavior) 的土匪变体：它只为“陆地土匪方（非 Boss 方）”产出围绕其 `HomeSettlement` 巡逻（`AiBehavior.PatrolAroundPoint`）的评分，使土匪在巢穴周边游荡直至达到 infest 阈值，并通过多重随机浮点把巡逻意愿打散。

## 心智模型

它是 `CampaignBehaviorBase` 的纯评分器，比通用巡逻行为短得多：唯一入口是 `AiHourlyTick`，只订阅 `AiHourlyTickEvent`，`SyncData` 为空。它在 `AiHourlyTick` 里过滤掉非土匪、`IsBanditBossParty`、或正停留在尚未 infest 的巢穴且人数不足的方；对通过者构造 `AIBehaviorData(HomeSettlement, AiBehavior.PatrolAroundPoint, NavigationType.Default, …)` 并写入 `PartyThinkParams`。最终移动同样由 AI 思考管线采纳，本行为不直接移动方。生命周期与兄弟行为一致：子模块 `InitializeGameStarter` 里 `AddBehavior` 一次，框架在战役启动时调用 `RegisterEvents`。

## 何时使用 / 何时不要使用

- **使用**：想理解土匪为何在巢穴附近徘徊、或调整土匪巡逻密度时阅读本行为；要改“巢穴内多少土匪算 infest”的阈值应走 [BanditDensityModel](../BanditDensityModel)（`NumberOfMinimumBanditPartiesInAHideoutToInfestIt` / `NumberOfMaximumBanditPartiesInEachHideout`），而非改本行为。
- **不要使用**：不要直接给土匪方设置 `PatrolAroundPoint` 来“让它巡逻”——应让本行为写入候选；也不要对非土匪方期望它产生评分（它对非 `IsBandit` 方直接返回）；更不要在 `Campaign.Current` 为空时调用。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有行为；`Campaign.Current.Models.BanditDensityModel` 提供 infest 阈值。
- [CampaignEvents](../CampaignEvents) —— 订阅 `AiHourlyTickEvent`。
- [MobileParty](../MobileParty) —— 判定主体；读取 `IsBandit`、`IsBanditBossParty`、`HasLandNavigationCapability`、`HomeSettlement`、`CurrentSettlement`。
- [PartyThinkParams](../PartyThinkParams) —— 评分写入目标。
- [AIBehaviorData](../AIBehaviorData) / [AiBehavior](../AiBehavior) —— 产出候选（行为恒为 `PatrolAroundPoint`）。
- [BanditDensityModel](../BanditDensityModel) —— 提供 `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` 与 `NumberOfMaximumBanditPartiesInEachHideout`，决定巢穴内土匪饱和度的归一化。

下游与协同（同 AI 簇）：

- [AiPartyThinkBehavior](../AiPartyThinkBehavior) —— 消费 `PartyThinkParams` 候选并决定最终移动。
- [AiPatrollingBehavior](../AiPatrollingBehavior) / [AiVisitSettlementBehavior](../AiVisitSettlementBehavior) / [AIMoveToNearestLandBehavior](../AIMoveToNearestLandBehavior) —— 同层兄弟行为。

辅助（无独立页）：`MBRandom` 提供随机抖动，`LinQuick` 的 `CountQ` 用于统计巢穴内土匪数。

## 风险

- **仅作用于陆地土匪**：入口第一道过滤要求 `mobileParty.IsBandit` 且非 `IsBanditBossParty`；Boss 方与任何其他类型方都不会获得巡逻分。误以为给任意方注册此行为就能巡逻是常见误解。
- **`HomeSettlement` 可能为 null**：构造 `AIBehaviorData(mobileParty.HomeSettlement, …)` 时若土匪方没有 `HomeSettlement`（理论上不该发生，但自定义派对组件可能漏设），下游 `AddBehaviorScore` 可能空引用。自定义土匪派对务必正确设置 `HomeSettlement`。
- **依赖 BanditDensityModel 已注册**：读取 `Campaign.Current.Models.BanditDensityModel` 的常量；若该模型缺失会空引用。确保其随战役模型集合注册。
- **非确定性随机**：评分乘了 5 次 `MBRandom.RandomFloat` 作为空间抖动，未使用带种子的随机；这影响的是候选分数分布而非崩溃，但意味着存档可复现性上土匪巡逻有随机成分。
- **海军/陆地边界**：`!mobileParty.HasLandNavigationCapability` 时直接返回；只有陆地导航能力达标的土匪才会被评分（使用 `NavigationType.Default`）。
- **重复注册**：同 [AiPatrollingBehavior](../AiPatrollingBehavior)，应只 `AddBehavior` 一次。

## 成员说明

### 事件订阅与生命周期

- **`RegisterEvents()`**
  - 用途：仅订阅 `CampaignEvents.AiHourlyTickEvent` 到 `AiHourlyTick`。
  - 副作用：无。调用时机：行为注册后由框架调用一次。

- **`SyncData(IDataStore dataStore)`**
  - 用途：空实现；无字段需序列化。
  - 副作用：无。调用时机：存读档时调用。

### 每小时土匪巡逻评分

- **`AiHourlyTick(MobileParty mobileParty, PartyThinkParams p)`**
  - 用途：过滤（非土匪 / Boss 方 / 正停留在未 infest 巢穴且人数不足者返回）→ 取 `NavigationType.Default` → 构造以 `HomeSettlement` 为目标的 `AIBehaviorData(AiBehavior.PatrolAroundPoint, …)`。分数由两部分构成：巢穴内土匪相对 infest 阈值的饱和度 `num`（在巢穴内时），以及随机抖动 `num3`（在巢穴外时为 `0.5f`）。最终 `0.5f * num * num3` 作为 `AddBehaviorScore` 的第二项，仅当 `num > 0` 才写入。
  - 副作用：仅写 `p`。调用时机：`AiHourlyTickEvent`。
  - 细节：饱和度 `num = (当前巢穴土匪数 − 最小 infest 数) / (最大每巢穴数 − 最小 infest 数)`，把分数从“刚好 infest”平滑抬升到“满员”。

## 示例

在子模块中注册（仅需一次），无需额外配置：

```csharp
public override void InitializeGameStarter(Game game, CampaignGameStarter starter)
{
    starter.AddBehavior(new AiLandBanditPatrollingBehavior());
}
```

观察土匪方是否已被本行为判为巡逻：

```csharp
CampaignEvents.AiHourlyTickEvent.AddNonSerializedListener(this, OnBanditTick);

private void OnBanditTick(MobileParty mobileParty, PartyThinkParams p)
{
    if (mobileParty.IsBandit && !mobileParty.IsBanditBossParty
        && mobileParty.DefaultBehavior == AiBehavior.PatrolAroundPoint)
    {
        Settlement hideout = mobileParty.HomeSettlement;
    }
}
```

## 怎么用

### 怎么拿到它

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors/AiLandBanditPatrollingBehavior.cs`（全文 45 行）。
**入口：** `CampaignGameStarter.RegisterCampaignBehaviors()` → `CampaignBehaviors.AddBehavior(new AiLandBanditPatrollingBehavior())`；生效后由 `CampaignEvents.AiHourlyTickEvent` 自动驱动。

**它是一个 `public class AiLandBanditPatrollingBehavior : CampaignBehaviorBase`（`AiLandBanditPatrollingBehavior.cs:7`），外部程序集可以 `new`。** 但不要每次用都 new 一个——它靠 `RegisterEvents`（`AiLandBanditPatrollingBehavior.cs:9`）挂 `CampaignEvents.AiHourlyTickEvent.AddNonSerializedListener(this, AiHourlyTick)`（`AiLandBanditPatrollingBehavior.cs:11`）驱动，**注册一次就跟着战役活到最后**。

`SyncData` 是空的（`AiLandBanditPatrollingBehavior.cs:14`），**它没有任何存档状态**。

注册走 Campaign Game Starter，与官方同批 behavior 一起加：

```csharp
public class MyPatrollingBehaviors : CampaignGameStarter
{
    public override void RegisterCampaignBehaviors()
    {
        CampaignBehaviors.AddBehavior(new AiLandBanditPatrollingBehavior());
        base.RegisterCampaignBehaviors();
    }
}
```

### 典型用法

`AiHourlyTick` 的第一道过滤（`:20`）是三条件的或：**非土匪、土匪首领、或者身处一个「土匪数量不够」的藏身处**都直接 return。第三个条件值得读细：`CurrentSettlement.Parties.CountQ(x => x.IsBandit && !x.IsBanditBossParty) <= NumberOfMinimumBanditPartiesInAHideoutToInfestIt + 1`——**注意那个 `+ 1`，门槛比模型值高一支队**。

产出的是 `PatrolAroundPoint`，巡逻点是 `mobileParty.HomeSettlement`（`:29`），不是当前位置，也不是藏身处。分数是 `0.5f * num * num3`（`:39`），其中 `num3` 在「身处藏身处」时是**五个 `MBRandom.RandomFloat` 相乘**（`:38`），在开阔地时固定 `0.5f`。

**这里有一个必须知道的性质**：`num3 > 0f` 时才 `AddBehaviorScore`（`:40`），而五个随机数相乘在 `(0,1)` 上取值的期望是 `1/32`，**也就是说藏身处里的巡逻分数绝大多数时候远低于 0.5，开阔地反而稳定拿满分的一半。** 想调巡逻倾向，改这个乘积的次数比改 `0.5f` 更有效。

想知道一支土匪此刻为什么不动，最直接的办法是把三个过滤条件逐个量出来：

```csharp
public static class BanditPatrolProbe
{
    public static void Report(MobileParty party)
    {
        if (!party.IsBandit || party.IsBanditBossParty)
        {
            Debug.Print(party.Name + " is filtered out before scoring", 0);
            return;
        }
        if (!party.HasLandNavigationCapability)
        {
            Debug.Print(party.Name + " has no land navigation, filtered at line 25", 0);
            return;
        }
        int count = 0;
        Settlement here = party.CurrentSettlement;
        if (here != null && here.IsHideout)
        {
            for (int i = 0; i < here.Parties.Count; i++)
            {
                if (here.Parties[i].IsBandit && !here.Parties[i].IsBanditBossParty)
                {
                    count++;
                }
            }
        }
        Debug.Print(party.Name + " passes gates, patrol point=" + party.HomeSettlement, 0);
        Debug.Print("non-boss bandits here = " + count + " threshold = " + (Campaign.Current.Models.BanditDensityModel.NumberOfMinimumBanditPartiesInAHideoutToInfestIt + 1), 0);
    }
}
```

`num` 只在藏身处里才被重算（`:31`-`:37`），公式是 `(实际数 − 最小值) / (最大值 − 最小值)`（`:36`）——**分子可能为负**（虽已被 `:20` 的过滤挡住），分母若被 mod 改成相等就是除零。**换 `BanditDensityModel` 的两个阈值时要保持最大值严格大于最小值。**

### 最容易踩的坑

**仅作用于陆地土匪**：入口第一道过滤要求 `mobileParty.IsBandit` 且非 `IsBanditBossParty`；Boss 方与任何其他类型方都不会获得巡逻分。误以为给任意方注册此行为就能巡逻是常见误解。

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [MobileParty](../MobileParty) · [PartyThinkParams](../PartyThinkParams) · [AIBehaviorData](../AIBehaviorData) · [AiBehavior](../AiBehavior) · [BanditDensityModel](../BanditDensityModel) · [Hideout](../Hideout) · [AiPartyThinkBehavior](../AiPartyThinkBehavior) · [AiPatrollingBehavior](../AiPatrollingBehavior) · [AiVisitSettlementBehavior](../AiVisitSettlementBehavior) · [AIMoveToNearestLandBehavior](../AIMoveToNearestLandBehavior)
