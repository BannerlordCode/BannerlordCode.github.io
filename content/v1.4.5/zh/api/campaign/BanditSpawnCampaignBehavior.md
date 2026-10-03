---
title: "BanditSpawnCampaignBehavior"
description: "强盗与掠夺者的生成器：开局建藏身处、按夜间频率（0.1 / 0.07）补充队伍、每日按权重概率扩张藏住处、进入藏住处时给城镇供货、发现藏住处后补 Boss 队。全树所有数量上限都走 BanditDensityModel。"
---

# BanditSpawnCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BanditSpawnCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BanditSpawnCampaignBehavior.cs`

## 概述

`BanditSpawnCampaignBehavior` 是**强盗世界的造物主**。它自己**一个数字都不硬编码容量**——所有上限都通过 9 个表达式属性转发给 [BanditDensityModel](../BanditDensityModel)：

```csharp
private float _numberOfMinimumBanditPartiesInAHideoutToInfestIt => Campaign.Current.Models.BanditDensityModel.NumberOfMinimumBanditPartiesInAHideoutToInfestIt;
private int  _numberOfMaxBanditPartiesAroundEachHideout   => Campaign.Current.Models.BanditDensityModel.NumberOfMaximumBanditPartiesAroundEachHideout;
private int  _numberOfMaxHideoutsAtEachBanditFaction     => Campaign.Current.Models.BanditDensityModel.NumberOfMaximumHideoutsAtEachBanditFaction;
private int  _numberOfInitialHideoutsAtEachBanditFaction => Campaign.Current.Models.BanditDensityModel.NumberOfInitialHideoutsAtEachBanditFaction;
private int  _numberOfMaximumBanditPartiesInEachHideout  => Campaign.Current.Models.BanditDensityModel.NumberOfMaximumBanditPartiesInEachHideout;
private int  _numberOfMaxBanditCountPerClanHideout       => _numberOfMaxBanditPartiesAroundEachHideout + _numberOfMaximumBanditPartiesInEachHideout;
```

**唯一的两个硬编码常量是金币系数与冷却天数**：`BanditStartGoldPerBandit = 10f`、`BanditLongTermGoldPerBandit = 50f`、`HideoutInfestCooldownAfterFightInDays = 1.5f`。

它维护两个**运行期缓存字典**（都不进存档）：`_hideouts`（按文化索引的藏住处列表）与 `_banditCountsPerHideout`（按聚落索引的队伍数）。**后者由 `MobilePartyCreated` / `MobilePartyDestroyed` / `CacheBanditCounts` / `OnHomeHideoutChanged` 四条路径维护**——这是本行为最需要小心的并发点。

## 心智模型

把它当成**「强盗生态的调度器」**就对了。

- **八个事件订阅，其中两个只服务开局。** `OnNewGameCreatedPartialFollowUpEvent` 是关键：**它带一个 `int i` 参数**，本行为只在 `i == 10` 和 `i == 11` 两个阶段动手（`BanditSpawnCampaignBehavior.cs:85-102`）——10 阶段建藏住处，11 阶段生成周边强盗与掠夺者并重算计数。**这是分阶段初始化的官方机制，mod 想插自己的初始化必须选对 i。**
- **`SyncData` 是空的。** 因为两个字典都是**可重建的缓存**：`CacheHideouts()` 从 `Hideout.All` 重建，`CacheBanditCounts()` 从 `MobileParty.AllBanditParties` 重建。**读档后 `OnGameLoaded` 会重跑这两个方法。**
- **夜间生成只按 0.1 / 0.07 的比例补充，不是直接拉满。** `HourlyTickClan`（`:240-253`）只在 `Campaign.Current.IsNight && clan.IsBanditFaction` 时行动：掠夺者派系走 `SpawnLooters(clan, 0.07f, uniformDistribution: false)`，强盗派系走 `SpawnBanditsAroundHideout(clan, 0.1f)`。这两个比例是**硬编码的私有字面量**，不在任何模型里。
- **藏住处扩张是每日一次、带权重的两层随机。** `AddNewHideouts`（`:275-298`）先按「缺口越大权重越高」用 `MBRandom.ChooseWeighted` 选一个派系，再算一个开箱概率——**缺口 < 一半上限时用 `0.2f + (上限 - 现有) * 0.1f`，否则用一条三次曲线**。只有概率命中才真的建。
- **生成概率按已有队伍数的平方倒数衰减。** `GetSpawnChanceInSettlement`（`:352-359`）返回 `1f / MathF.Pow(_banditCountsPerHideout[settlement], 2f)`。**藏住处里队伍越多，越不会被选中——平方衰减，队伍到 3 支时权重只剩 1/9。**
- **「强盗派系」与「掠夺者派系」是两个互斥的判定。** `IsBanditFaction(clan)`（`:560-566`）要求 `!clan.HasNavalNavigationCapability && clan.IsBanditFaction && clan.Culture.CanHaveSettlement`；`IsLooterFaction(IFaction)`（`:474-480`）要求 `!faction.Culture.CanHaveSettlement && !faction.HasNavalNavigationCapability && faction.StringId != "deserters"`。**`deserters` 被显式排除在掠夺者之外**（它有自己的行为类）。
- **进入藏住处会「卖货」给城镇。** `OnSettlementEntered`（`:149-180`）算出队伍多余食物的总价值 `num`，若大于 0 且队伍交易开启，就给队伍加 25% 的交易金币、给聚落加 25% 的金币。
- **发现藏住处时会补 Boss 队。** `CheckForSpawningBanditBoss`（`:182-197`）在「藏住处已被发现 + 里面有强盗」时检查有没有 Boss 队，没有就 `AddBossParty`，有但缺 `culture.BanditBoss` 就补一个。**这个方法在 `OnSettlementEntered` 的最前面无条件调用**，早于后面那一串 early-return。
- **`AddBanditToHideout` 是唯一公开的造物入口，且返回 `MobileParty`。** 它做五步：确认文化是强盗文化 → 按文化找派系 → `BanditPartyComponent.CreateBanditParty(...)` → `InitializeBanditParty` → `SetMoveGoToSettlement` + `RecalculateShortTermBehavior` + `EnterSettlementAction.ApplyForParty`。**文化不是强盗文化时返回 null。**

### 四个公开入口与它们的触发时机

| 入口 | 谁调 | 什么时候 | 说明 |
| --- | --- | --- | --- |
| `InitializeInitialHideouts()` | 自身 `i == 10` 阶段 | 开局 | 遍历 `Clan.BanditFactions`，对每个强盗派系建 `NumberOfInitialHideoutsAtEachBanditFaction` 个藏住处 |
| `SpawnBanditsAroundHideoutAtNewGame()` | 自身 `i == 11` 阶段 | 开局 | 每个强盗派系按 `MBRandom.RandomFloatRanged(0.5f, 0.75f)` 的比例补充队伍 |
| `SpawnLootersAtNewGame()` | 自身 `i == 11` 阶段 | 开局 | 每个掠夺者派系按同样区间、**`uniformDistribution: true`** 生成 |
| `AddBanditToHideout(Hideout, PartyTemplateObject, bool)` | **外部可调** | 任意 | 唯一对外开放的造物方法，返回造出的队伍或 null |
| `OnSettlementEntered(MobileParty, Settlement, Hero)` | 事件 | 进入聚落 | Boss 检查 + 藏住处发现 + 卖货 |

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `RegisterEvents()` | `public override void RegisterEvents()` | 订阅八个事件（`:43-53`）：`MobilePartyCreated` / `MobilePartyDestroyed` / `SettlementEntered` / `DailyTickEvent` / `HourlyTickClanEvent` / `OnGameLoadedEvent` / `OnHomeHideoutChangedEvent` / `OnNewGameCreatedPartialFollowUpEvent`。**全部 `AddNonSerializedListener`**——两个缓存字典靠 `OnGameLoaded` 重建，不靠存档。 |
| `SyncData(IDataStore dataStore)` | `public override void SyncData(IDataStore dataStore)` | **空实现**（`:81-83`）。**这是正确的**：`_hideouts` 与 `_banditCountsPerHideout` 都是缓存，`OnGameLoaded` 会调 `CacheHideouts()` + `CacheBanditCounts()` 重建。**想存跨档状态必须自己写进这里。** |
| `OnNewGameCreatedPartialFollowUp(CampaignGameStarter starter, int i)` | `private void OnNewGameCreatedPartialFollowUp(CampaignGameStarter starter, int i)` | **分阶段初始化**（`:85-102`）。`switch (i)` 只处理两个值：`10` → `CacheHideouts()` + （上限 > 0 时）`InitializeInitialHideouts()`；`11` → `SpawnBanditsAroundHideoutAtNewGame()` + `SpawnLootersAtNewGame()` + `CacheBanditCounts()`。**其它 i 值什么都不做**——这是官方给 mod 预留的分阶段插槽。 |
| `InitializeInitialHideouts()` | `public void InitializeInitialHideouts()` | 开局建藏住处（`:130-139`）。遍历 `Clan.BanditFactions`，对每个 `IsBanditFaction` 为真的派系调 `SpawnHideoutsAndBanditsPartiallyOnNewGame`，后者循环 `NumberOfInitialHideoutsAtEachBanditFaction` 次 `FillANewHideoutWithBandits`。 |
| `AddBanditToHideout(Hideout hideoutComponent, PartyTemplateObject overridenPartyTemplate = null, bool isBanditBossParty = false)` | `public MobileParty AddBanditToHideout(...)` | **唯一对外开放的造物入口**（`:311-334`）。五步：判 `hideoutComponent.Owner.Settlement.Culture.IsBandit` → 按文化在 `Clan.BanditFactions` 里找匹配派系 → `BanditPartyComponent.CreateBanditParty(clan.StringId + "_1", clan, hideout, isBanditBossParty, pt, gatePosition)` → `InitializeBanditParty` → `SetMoveGoToSettlement` + `RecalculateShortTermBehavior` + `EnterSettlementAction.ApplyForParty`。**文化不是强盗文化时返回 null。** |
| `OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)` | `public void OnSettlementEntered(...)` | 进入聚落（`:149-180`）。**第一句无条件调 `CheckForSpawningBanditBoss`**，之后才判 `!Campaign.Current.GameStarted || mobileParty == null || !mobileParty.IsBandit || !settlement.IsHideout` 并返回。然后做两件事：藏住处未被发现且已 infestation 且队伍可见 → 标记 `IsSpotted` + 派发 `OnHideoutSpotted`；算出多余食物价值 `num`，> 0 时给队伍 25% 交易金币、给聚落 25% 金币。 |
| `CheckForSpawningBanditBoss(Settlement settlement, MobileParty mobileParty)` | `private void CheckForSpawningBanditBoss(...)` | Boss 队补齐（`:182-197`）。条件是「藏住处 + 已发现 + 里面有强盗或 Boss 队」。没有 Boss 队就 `AddBossParty`；有但 `MemberRoster` 不含 `culture.BanditBoss` 就 `AddToCounts(culture.BanditBoss, 1)`。**两个参数里 `mobileParty` 完全没用。** |
| `HourlyTickClan(Clan clan)` | `private void HourlyTickClan(Clan clan)` | **夜间补充**（`:240-253`）。只在 `Campaign.Current.IsNight && clan.IsBanditFaction` 时行动。掠夺者派系 → `SpawnLooters(clan, 0.07f, false)`；强盗派系 → `SpawnBanditsAroundHideout(clan, 0.1f)`。**两个比例是硬编码字面量，不在 BanditDensityModel 里。** |
| `SpawnBanditsAroundHideout(Clan clan, float ratio)` | `private void SpawnBanditsAroundHideout(Clan clan, float ratio)` | 按比例补强盗（`:255-263`）。数量 = `MBRandom.RoundRandomized((GetInfestedHideoutCount(clan) * _numberOfMaxBanditCountPerClanHideout - clan.WarPartyComponents.Count) * ratio)`。**注意上限里减的是 `WarPartyComponents.Count`（全派系部队数），不是藏住处里的队伍数。** |
| `SpawnLooters(Clan clan, float ratio, bool uniformDistribution)` | `private void SpawnLooters(Clan clan, float ratio, bool uniformDistribution)` | 按比例补掠夺者（`:265-273`）。数量 = `RoundRandomized((GetCurrentLimitForLooters(clan) - clan.WarPartyComponents.Count) * ratio)`。**`GetCurrentLimitForLooters` = `Math.Min(全图 infestation 藏处数 × 7, GetMaxSupportedNumberOfLootersForClan(clan))`——那个 7 是硬编码的。** |
| `AddNewHideouts()` | `private void AddNewHideouts()` | 每日藏住处扩张（`:275-298`）。先为每个未达上限的强盗派系算权重 `1f - 现有数 / 上限`，用 `MBRandom.ChooseWeighted` 选一个；再算开箱概率——**缺口小于上限一半时 `0.2f + (上限 - 现有) * 0.1f`，否则用一条以上限一半为顶点的三次曲线**。概率命中才 `FillANewHideoutWithBandits`。 |
| `GetSpawnChanceInSettlement(Settlement settlement)` | `private float GetSpawnChanceInSettlement(Settlement settlement)` | **生成权重**（`:352-359`）。返回 `1f / MathF.Pow(_banditCountsPerHideout[settlement], 2f)`，计数为 0 或字典里没有时返回 1。**平方倒数衰减——3 支队伍时权重只剩 1/9。** |
| `GetCurrentLimitForLooters(Clan clan)` | `private int GetCurrentLimitForLooters(Clan clan)` | 掠夺者数量上限（`:503-506`）：`Math.Min(Hideout.All.Count(x => x.IsInfested) * 7, Campaign.Current.Models.BanditDensityModel.GetMaxSupportedNumberOfLootersForClan(clan))`。**那个 × 7 是硬编码的**，全图藏住处越少、掠夺者上限越低。 |
| `GetSpawnRadiusForClan(Clan selectedFaction)` | `private float GetSpawnRadiusForClan(Clan selectedFaction)` | 生成半径（`:485-488`）：`BanditSpawnRadiusAsDays * (IsLooterFaction(selectedFaction) ? 1.5f : 1f)`。而 `BanditSpawnRadiusAsDays => 0.5f * Campaign.Current.EstimatedAverageBanditPartySpeed * CampaignTime.HoursInDay`——**掠夺者的生成半径是强盗的 1.5 倍。** |
| `IsBanditFaction(Clan clan)` | `private bool IsBanditFaction(Clan clan)` | 强盗派系判定（`:560-566`）：`!clan.HasNavalNavigationCapability && clan.IsBanditFaction && clan.Culture.CanHaveSettlement`。**三个条件缺一不可。** |
| `IsLooterFaction(IFaction faction)` | `private static bool IsLooterFaction(IFaction faction)` | 掠夺者派系判定（`:474-480`）：`!faction.Culture.CanHaveSettlement && !faction.HasNavalNavigationCapability && faction.StringId != "deserters"`。**`deserters` 被字符串比较显式排除**——它有专属行为类 `DesertersCampaignBehavior`。 |

## 真实示例

用唯一公开的造物入口在指定藏住处放一支强盗队（形状照 `FillANewHideoutWithBandits` 的内部调用）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using System.Linq;
using TaleWorlds.CampaignSystem.Settlements;

public static MobileParty SeedHideout(Settlement hideoutSettlement)
{
    if (Campaign.Current == null || hideoutSettlement == null || !hideoutSettlement.IsHideout)
    {
        return null;
    }

    Hideout hideout = hideoutSettlement.Hideout;
    if (hideout == null)
    {
        return null;
    }

    BanditSpawnCampaignBehavior behavior = Campaign.Current.GetCampaignBehavior<BanditSpawnCampaignBehavior>();
    if (behavior == null)
    {
        return null;
    }

    MobileParty party = behavior.AddBanditToHideout(hideout);
    if (party != null)
    {
        Debug.Print("seeded bandit at " + hideoutSettlement.Name.ToString()
            + " clan=" + party.ActualClan.Name.ToString(), 0);
    }

    return party;
}
```

读当前强盗密度（形状照官方那 9 个表达式属性的转发写法）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public static string DescribeSpawnCapacity()
{
    if (Campaign.Current == null)
    {
        return "";
    }

    BanditDensityModel model = Campaign.Current.Models.BanditDensityModel;
    int perHideout = model.NumberOfMaximumBanditPartiesAroundEachHideout + model.NumberOfMaximumBanditPartiesInEachHideout;
    Debug.Print("max per clan-hideout = " + perHideout, 0);
    Debug.Print("hideout cap = " + model.NumberOfMaximumHideoutsAtEachBanditFaction, 0);
    return "perHideout=" + perHideout;
}
```

检查某个藏住处当前是否被强盗占据，以及 Boss 在不在（复刻 `CheckForSpawningBanditBoss` 的判断）：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public static string DescribeHideoutState(Settlement hideoutSettlement)
{
    if (hideoutSettlement == null || !hideoutSettlement.IsHideout || hideoutSettlement.Hideout == null)
    {
        return "not a hideout";
    }

    Hideout hideout = hideoutSettlement.Hideout;
    bool hasBandits = hideoutSettlement.Parties.Any(x => x.IsBandit);
    bool hasBoss = hideoutSettlement.Parties.FirstOrDefault(x => x.IsBanditBossParty) != null;

    Debug.Print("infested=" + hideout.IsInfested + " spotted=" + hideout.IsSpotted, 0);
    return "bandits=" + hasBandits + " boss=" + hasBoss;
}
```

写一个自己的夜间生成器（形状照 `HourlyTickClan`，但用自定义比例）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

public class MyNightlySpawner : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HourlyTickClanEvent.AddNonSerializedListener(this, HourlyTickClan);
    }

    private void HourlyTickClan(Clan clan)
    {
        if (Campaign.Current == null || !Campaign.Current.IsNight || !clan.IsBanditFaction)
        {
            return;
        }

        if (MobileParty.AllBanditParties.Count < 40)
        {
            Settlement target = Settlement.All.FirstOrDefault(s => s.IsHideout && s.Hideout.IsInfested);
            if (target != null && target.Hideout != null)
            {
                BanditSpawnCampaignBehavior official = Campaign.Current.GetCampaignBehavior<BanditSpawnCampaignBehavior>();
                if (official != null)
                {
                    official.AddBanditToHideout(target.Hideout);
                }
            }
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

## 风险与边界

- **`SyncData` 是空的，两个字典都是缓存。** **任何依赖它们的状态都必须接受「读档后重建」这个事实**——`_hideouts` 的键是 `CultureObject` 引用，`_banditCountsPerHideout` 的键是 `Settlement` 引用。**读档后必须重新取 `Campaign.Current.Kingdoms` / `Settlements` 里的实例，不能持有旧引用。**
- **`_banditCountsPerHideout` 有四条维护路径，只增不减的路径都靠事件。** `MobilePartyCreated` +1、`MobilePartyDestroyed` -1、`OnHomeHideoutChanged` 把旧藏住处 -1、`CacheBanditCounts` 整体重算。**你如果在外部销毁一支强盗队而不发对应事件，计数会永久偏高，生成权重被压到接近零。**
- **夜间比例 0.1 与 0.07 是硬编码字面量，不在模型里。** 换 [BanditDensityModel](../BanditDensityModel) 改不了生成速度，只能改容量上限。**想调速率必须复制整个行为类。**
- **`GetCurrentLimitForLooters` 里的 `* 7` 也是硬编码的。** 掠夺者上限 = `Min(全图 infestation 藏处数 × 7, 模型上限)`。**地图上藏住处被清空时，掠夺者上限直接归零。**
- **`IsLooterFaction` 用字符串比较排除 `deserters`。** 任何 StringId 为 `deserters` 的派系都不会被当作掠夺者——**这是隐式契约，不是配置**。
- **`BanditSpawnCampaignBehavior` 与 `DesertersCampaignBehavior` 是两条独立路径。** 逃兵不在本行为的管辖内，所以本页的「夜间 0.07 生成」不适用于逃兵。
- **`OnSettlementEntered` 的 Boss 检查在 early-return 之前。** `CheckForSpawningBanditBoss(settlement, mobileParty)` 是第一句，**即使进入者不是强盗、藏住处未被游戏标记开始、队伍为 null，它也会先跑一遍**。它只依赖 `settlement` 自身的状态，所以逻辑上没错，但**这条路径的触发频率比直觉高**。
- **`CheckForSpawningBanditBoss` 的 `mobileParty` 参数完全没用。** 读调用点时不要以为它在检查进入者。
- **`HideoutInfestCooldownAfterFightInDays = 1.5f` 与两个金币常量都在本文件里，但只有金币那两个在 `CreatePartyTrade` / `DailyTick` 里被用。** 冷却天数的实际消费方在别处（本文件里读不到），跨文件核对时不要漏。
- **`DailyTick` 里有一个 3% 的抢掠事件。** `:208-238` 除了更新队伍交易金币（向 `50 * 总人数` 收敛，权重 0.05），还会以 3% 概率给地图事件中的强盗队伍加食物——**掠夺者派系每单位 8，强盗派系 16**。这两个数字也是硬编码的。
- **`AddBanditToHideout` 返回 null 而不是抛异常。** 唯一的 null 来源是「藏住处文化不是强盗文化」。**调用方必须判空**，官方的 `FillANewHideoutWithBandits` 就是这么做的。
- **`AddBanditToHideout` 里 `clan` 变量可能为 null。** 它在 `Clan.BanditFactions` 里找匹配文化的派系，找不到就保持 null，而下一句是 `clan.DefaultPartyTemplate`——**没有藏身处文化是强盗文化但对应派系不存在的合理情况，但这是一个未加保护的解引用。**
- **队伍 id 是 `clan.StringId + "_1"`，硬编码后缀。** `BanditPartyComponent.CreateBanditParty(clan.StringId + "_1", ...)` —— 同一派系造出的所有队伍都用这个 id 字符串。**它不是唯一的队伍标识**（真正的标识是 `MobileParty` 实例）。
- **`_numberOfMaxBanditCountPerClanHideout` 是两个模型值的和，不是独立配置的。** 改 `BanditDensityModel` 时要清楚：改「周边上限」和改「内部上限」对总量影响相同。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BanditSpawnCampaignBehavior.cs` 是 583 行原始源码。跨版本比对时盯七点：**`OnNewGameCreatedPartialFollowUp` 的 `case 10` / `case 11` 是否还只用这两个下标**（改了会打乱开局初始化顺序）、两个硬编码生成比例 0.1 / 0.07、`GetCurrentLimitForLooters` 里的 `* 7`、`IsLooterFaction` 对 `"deserters"` 的字符串排除、`GetSpawnChanceInSettlement` 的平方衰减是否改成线性、`DailyTick` 里的 3% 抢掠事件、以及 `HideoutInfestCooldownAfterFightInDays = 1.5f` 的消费方是否还在。**`case 10` / `case 11` 的下标是最危险的**——它与官方 SubModule 里其它行为的阶段编号耦合，改动会让藏住处建立时机整体漂移。

## 依赖关系

- 官方注册点：`SandBoxManager.cs:35` 的 `gameStarter.AddBehavior(new BanditSpawnCampaignBehavior());`
- 容量模型：九个表达式属性全部转发 [BanditDensityModel](../BanditDensityModel)，包括 `GetMaxSupportedNumberOfLootersForClan`（在 `GetCurrentLimitForLooters` 里与硬编码的 `* 7` 取 min）
- 派系来源：`Clan.BanditFactions` 是全部生成逻辑的遍历入口；`Clan.IsBanditFaction` / `Clan.HasNavalNavigationCapability` / `Clan.WarPartyComponents` / `Clan.DefaultPartyTemplate` 是判定与计数依据
- 藏住处：[Hideout](../Hideout) 的 `IsInfested`（依赖模型的 infestation 阈值）、`IsSpotted`、`Owner.Settlement`；`Hideout.All` 是全表枚举源
- 队伍侧：[MobileParty](../MobileParty) 的 `IsBandit` / `IsBanditBossParty` / `IsVisible` / `ItemRoster` / `MemberRoster`；`MobileParty.AllBanditParties` 是重算入口；[BanditPartyComponent](../BanditPartyComponent) 提供 `CreateBanditParty` / `CreateLooterParty`
- 聚落侧：[Settlement](../Settlement) 的 `IsHideout` / `Hideout` / `Parties` / `Culture`，以及 `SettlementComponent.ChangeGold`（卖货时给城镇加钱）
- 时间与随机：`Campaign.Current.IsNight`、`Campaign.Current.EstimatedAverageBanditPartySpeed`、`MBRandom.RoundRandomized` / `ChooseWeighted` / `RandomFloatRanged`
- 事件：[CampaignEvents](../CampaignEvents) 的八个订阅，全部 `AddNonSerializedListener`；派发方 `CampaignEventDispatcher`（`OnHideoutSpotted` 就在这里）
- 存档：行为本身**零存档字段**，两个字典靠 `OnGameLoaded` 重建
- 桶首页：[campaign API 分区](../)
