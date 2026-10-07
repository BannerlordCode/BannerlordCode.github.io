---
title: "BannerCampaignBehavior"
description: "英雄旗帜的日常维护行为：开局给所有成年领主发旗、每日按 10% / 25% 概率发旗或升档、成年与新英雄创建时补旗、战后从战败方军团领袖或领主手里按概率抢旗，并用 _heroNextBannerLootTime 做冷却。"
---

# BannerCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BannerCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BannerCampaignBehavior.cs`

## 概述

`BannerCampaignBehavior` 是**英雄旗帜的全生命周期维护者**：谁该有旗、旗档该怎么升、什么时候能从敌人手里抢走一面旗。它订阅七个事件，234 行源码里只有三个有效常量、两个概率和**一个真正需要存档的字典**。

```csharp
private const int BannerLevel1CooldownDays = 4;
private const int BannerLevel2CooldownDays = 8;
private const int BannerLevel3CooldownDays = 12;
private const float BannerItemUpdateChance = 0.1f;
private const float GiveBannerItemChance = 0.25f;

private Dictionary<Hero, CampaignTime> _heroNextBannerLootTime = new Dictionary<Hero, CampaignTime>();
```

**唯一需要存档的就是 `_heroNextBannerLootTime`**——它记录「这个英雄的旗被抢走后多久可以再抢」。其余状态全写在 `hero.BannerItem` 上，由英雄自己存档。

它依赖 [BannerItemModel](../BannerItemModel) 回答「谁能拿哪一档」，依赖 `Helpers` 里的 [BannerHelper](../../system/BannerHelper) 随机取一面合乎档位的旗，依赖 [BattleRewardModel](../BattleRewardModel) 决定战后能否直接掉一面旗。

## 心智模型

把它当成**「旗的日常运维 + 战利品」**就对了。

- **五个入口，三条写旗路径。** 写旗只发生在三处：`GiveBannersToHeroes`（开局 / 读档完成后一次性给全图发旗）、`DailyTickHero`（日常发旗或升档）、`OnCollectLootItems`（战后抢旗）。`OnHeroComesOfAge` / `OnHeroCreated` / `OnClanCreated` 是三个补充入口，都走同一句 `hero.BannerItem = new EquipmentElement(randomBannerItemForHero);`。
- **`CanBannerBeGivenToHero` 是唯一的发旗门槛。** 三个条件：`hero.Occupation == Occupation.Lord`、`hero.Age >= Campaign.Current.Models.AgeModel.HeroComesOfAge`、`hero.BannerItem.IsInvalid()`，外加 `hero.Clan != Clan.PlayerClan`。**玩家家族永远不发旗**——玩家的旗是自己选的。
- **每日 tick 里有两条互斥分支。** 已有旗且 `CanBannerBeUpdated` 通过 → 10% 概率升档；没旗且 `CanBannerBeGivenToHero` 通过且不是囚犯 → 25% 概率发一面新旗。**同一句 `else if` 意味着「已有旗就不考虑发新旗」。**
- **升档要求「同文化 + 同 BannerEffect + 目标档位」。** `GetUpgradeBannerForHero`（`:93-105`）遍历 `GetPossibleRewardBannerItems()`，找 `possibleRewardBannerItem.Culture == item.Culture && bannerComponent.BannerLevel == upgradeBannerLevel && bannerComponent.BannerEffect == ((BannerComponent)item.ItemComponent).BannerEffect`。**找不到就回退到 `BannerHelper.GetRandomBannerItemForHero(hero)`——注意这个回退不保证档位正确。**
- **抢旗优先找军团领袖。** `OnCollectLootItems`（`:107-147`）先在战败方的「有军团的移动队伍」里找符合条件的 `Army.ArmyOwner`；找不到才在所有战败方队伍里随机找一个 `LeaderHero`。**军团领袖优先级更高，因为他们更可能有高等级旗。**
- **抢旗有两个概率。** 先由 [BattleRewardModel](../BattleRewardModel) 的 `GetBannerRewardForWinningMapEvent(mapEvent)` 决定是否直接掉一面旗加进战利品；再由 `GetBannerLootChanceFromDefeatedHero(hero)` 决定能否抢走那个英雄手里的旗。**两件事互相独立。**
- **冷却字典是唯一的存档字段。** `LogBannerLootForHero` 写 `_heroNextBannerLootTime[hero] = CampaignTime.DaysFromNow(GetCooldownDays(bannerLevel))`；`CanBannerBeLootedFromHero` 读它。**抢走旗时同时执行 `hero.BannerItem = new EquipmentElement(null)`——被抢者变回无旗。**

### 一个必须知道的源码 bug

`GetCooldownDays(int bannerLevel)`（`:207-218`）写的是：

```csharp
if (bannerLevel == 1)
{
    return 4;
}
if (bannerLevel == 1)
{
    return 8;
}
return 12;
```

**第二个 `if` 的条件与第一个完全相同**，因此 `return 8` 这条分支永远不可达。**结果是：1 档旗冷却 4 天，2 档旗冷却也是 4 天（而不是类顶部 `BannerLevel2CooldownDays = 8` 说的 8 天），3 档及以上冷却 12 天。** 顶部那三个 `BannerLevel*CooldownDays` 常量**一个都没被引用**——全是死代码。这是 1.4.5 源码的真实状态，不是本文的笔误；写"按旗档冷却"的 mod 如果照常量算会算错。

### 七个订阅事件与各自职责

| 事件 | 回调 | 做什么 |
| --- | --- | --- |
| `OnNewGameCreatedEvent` | `OnNewGameCreated` | 调 `GiveBannersToHeroes()` |
| `OnGameLoadFinishedEvent` | `GiveBannersToHeroes` | **读档后也跑一次**，给还没有旗的领主补旗 |
| `DailyTickHeroEvent` | `DailyTickHero` | 玩家家族直接 return；然后 10% 升档 / 25% 发旗 |
| `OnCollectLootsItemsEvent` | `OnCollectLootItems` | 战后掉旗 + 抢旗 |
| `HeroComesOfAgeEvent` | `OnHeroComesOfAge` | 成年时补一面旗 |
| `HeroCreated` | `OnHeroCreated` | 新英雄创建时补一面旗 |
| `OnClanCreatedEvent` | `OnClanCreated` | 同伴家族创建时给领袖补旗 |

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `RegisterEvents()` | `public override void RegisterEvents()` | 订阅七个事件（`:26-35`），**全部用 `AddNonSerializedListener`**，事件句柄不进存档，读档后由 `CampaignBehaviorManager` 重订阅。**注意 `GiveBannersToHeroes` 同时服务两个事件**：开局与读档完成后。 |
| `SyncData(IDataStore dataStore)` | `public override void SyncData(IDataStore dataStore)` | 只同步一个字段：`dataStore.SyncData("_heroNextBannerLootTime", ref _heroNextBannerLootTime);`（`:37-40`）。**这是本行为唯一的跨存档状态**——旗档本身写在 `hero.BannerItem` 上，不归本行为管。 |
| `GiveBannersToHeroes()` | `private void GiveBannersToHeroes()` | **开局与读档后的一次性补旗**（`:47-60`）。遍历 `Hero.AllAliveHeroes`，对每个 `CanBannerBeGivenToHero` 为真的调用 `BannerHelper.GetRandomBannerItemForHero`，非 null 就写入。**已有旗的领主不会被改动**，所以它是幂等的。 |
| `DailyTickHero(Hero hero)` | `private void DailyTickHero(Hero hero)` | 每英雄每日维护（`:62-91`）。**第一句就是 `if (hero.Clan == Clan.PlayerClan) return;`**——玩家家族完全不管。然后两个互斥分支：已有旗走 10% 升档（要 `bannerItemModel.CanBannerBeUpdated(bannerItem.Item)`），无旗走 25% 发旗（要 `CanBannerBeGivenToHero` 且 `!hero.IsPrisoner`）。 |
| `GetUpgradeBannerForHero(Hero hero, int upgradeBannerLevel)` | `private ItemObject GetUpgradeBannerForHero(Hero hero, int upgradeBannerLevel)` | **升档目标搜索**（`:93-105`）。遍历候选集，要求 `Culture` 相同、`BannerLevel == 目标档`、`BannerEffect` 相同。**返回 null 就回退到 `BannerHelper.GetRandomBannerItemForHero(hero)`，而那个回退不校验档位**——所以「升档」可能退化成随机换一面。 |
| `OnCollectLootItems(PartyBase winnerParty, ItemRoster gainedLoots)` | `private void OnCollectLootItems(PartyBase winnerParty, ItemRoster gainedLoots)` | 战后处理（`:107-147`）。**第一句 `if (winnerParty != PartyBase.MainParty) return;`**——只有玩家赢才处理。然后先问 `BattleRewardModel.GetBannerRewardForWinningMapEvent(mapEvent)` 要不要直接掉一面旗，再找战败方军团领袖或领主抢旗。 |
| `CanBannerBeLootedFromHero(Hero hero)` | `private bool CanBannerBeLootedFromHero(Hero hero)` | 冷却判定（`:198-205`）：字典里有记录就用 `IsPast`，**没有记录直接返回 true**。所以**新英雄的旗第一次永远可抢。** |
| `GetCooldownDays(int bannerLevel)` | `private int GetCooldownDays(int bannerLevel)` | 旗档到冷却天数的映射（`:207-218`）。**源码 bug：第二个分支的条件重复写成 `bannerLevel == 1`，导致 `return 8` 不可达**——实际结果是 1 档 4 天、2 档 4 天、其余 12 天。顶部三个 `BannerLevel*CooldownDays` 常量全部未被引用。 |
| `LogBannerLootForHero(Hero hero, int bannerLevel)` | `private void LogBannerLootForHero(Hero hero, int bannerLevel)` | 抢旗后写冷却（`:219-230`）。有记录就覆盖，没有就 `Add`。**调用点在抢旗成功之后，与 `hero.BannerItem = new EquipmentElement(null)` 紧挨着。** |
| `CanBannerBeGivenToHero(Hero hero)` | `private bool CanBannerBeGivenToHero(Hero hero)` | **唯一的发旗门槛**（`:231-238`）。四个条件：`Occupation == Occupation.Lord`、`Age >= Campaign.Current.Models.AgeModel.HeroComesOfAge`、`BannerItem.IsInvalid()`、`Clan != Clan.PlayerClan`。**不检查是否被俘**——被俘检查只在 `DailyTickHero` 的无旗分支里单独加。 |

## 怎么用

这是旗帜（banner）的发放、掉落与升级行为。它的节奏由一个私有字典控制：每个英雄记一个「下次可掉旗的时刻」，每日 tick 里按冷却判定该给谁换旗。

**怎么拿到它**：注册点是 `SandBoxManager.cs:160` 的 `gameStarter.AddBehavior(new BannerCampaignBehavior())`，声明在 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BannerCampaignBehavior.cs`。唯一的持久状态是 `:24` 的 `_heroNextBannerLootTime`，通过 `SyncData`（`:37`）进存档。

它订阅七类事件，入口都在 `RegisterEvents`（`:26`）里：新战役创建走 `OnNewGameCreated`（`:42`），**读档完成**走 `GiveBannersToHeroes`（`:47`）——注意读档也发旗，这是补偿机制而不只是新局逻辑；战斗掉落走 `OnCollectLootItems`（`:107`），成年走 `OnHeroComesOfAge`（`:149`），英雄与氏族创建走 `OnHeroCreated`（`:161`）与 `OnClanCreated`（`:173`）。日常推进在 `DailyTickHero`（`:62`），且它开头就 `if (hero.Clan == Clan.PlayerClan) return`，玩家氏族的英雄不参与。

旗帜的等级与可升级性判定全部委托给 [BannerItemModel](../BannerItemModel)，读点就在 `BannerCampaignBehavior.cs:69` 与 `:73`：先取模型，再取 `GetBannerItemLevelForHero(hero)` 决定当前级别，随后 `GetUpgradeBannerForHero`（`:93`）算出升级品。升级品的匹配条件是三项全等——文化相同、`BannerLevel` 相同、`BannerEffect` 相同，匹配不上才退到 `BannerHelper.GetRandomBannerItemForHero`。冷却天数由 `GetCooldownDays`（`:199`）按级别算出，能否掉落与能否发放分别由 `CanBannerBeLootedFromHero`（`:190`）与 `CanBannerBeGivenToHero`（`:225`）判定。

每日升级的触发概率也在这段里：`DailyTickHero`（`:71`）要求当前旗帜有效、模型说可升级，然后掷一次 `MBRandom.RandomFloat < 0.1f`，十次里中一次。

```csharp
BannerCampaignBehavior banners = Campaign.Current.GetCampaignBehavior<BannerCampaignBehavior>();
BannerItemModel model = Campaign.Current.Models.BannerItemModel;
foreach (Hero hero in Hero.AllAliveHeroes)
{
    int level = model.GetBannerItemLevelForHero(hero);
    ItemObject upgrade = null;
    foreach (ItemObject item in model.GetPossibleRewardBannerItemsForHero(hero))
    {
        if (model.CanBannerBeUpdated(item)) { upgrade = item; break; }
    }
    Debug.Print(hero.Name + " 旗级=" + level + " 可升级到=" + (upgrade?.Name ?? "无"), 0);
}
Debug.Print("整套可发放旗帜物品来自 " + model.GetPossibleRewardBannerItems().Count() + " 个候选", 0);
```

掉落会写日志，入口是 `LogBannerLootForHero`（`:212`），所以调冷却或调等级时，日志文本会跟着变。

**最常见的坑**：`GetCooldownDays`（`:199`）里的第二个分支是死代码——`if (bannerLevel == 1) return 4;` 之后紧跟着又是一句 `if (bannerLevel == 1) return 8;`，条件写重复了。结果是 2 级旗的冷却不是 8 天而是末尾兜底的 12 天，而 8 这个值永远不会被返回。你要调冷却曲线时改第二句是无效的。

## 真实示例

手动给一个符合条件的英雄发旗（走 `Helpers` 的真实入口，与 `GiveBannersToHeroes` 同一形状）：

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;

public static bool TryGrantBanner(Hero target)
{
    if (Campaign.Current == null || target == null)
    {
        return false;
    }

    if (!target.BannerItem.IsInvalid() || target.Clan == Clan.PlayerClan)
    {
        return false;
    }

    if (target.Occupation != Occupation.Lord
        || target.Age < Campaign.Current.Models.AgeModel.HeroComesOfAge)
    {
        return false;
    }

    ItemObject banner = BannerHelper.GetRandomBannerItemForHero(target);
    if (banner == null)
    {
        return false;
    }

    target.BannerItem = new EquipmentElement(banner);
    return true;
}
```

查一个英雄的旗档（`BannerComponent.BannerLevel` 就是 [BannerItemModel](../BannerItemModel) 算出来的那个数）：

```csharp
using TaleWorlds.CampaignSystem;

public static string DescribeBanner(Hero hero)
{
    if (hero == null || hero.BannerItem.IsInvalid())
    {
        return "no banner";
    }

    BannerComponent component = hero.BannerItem.Item.ItemComponent as BannerComponent;
    if (component == null)
    {
        return "banner item without BannerComponent";
    }

    return "level=" + component.BannerLevel + " effect=" + component.BannerEffect;
}
```

按模型算出的目标档位找一个可升级的同族同效旗（复刻 `GetUpgradeBannerForHero` 的搜索条件）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public static ItemObject FindUpgradeBanner(Hero hero)
{
    if (Campaign.Current == null || hero == null || hero.BannerItem.IsInvalid())
    {
        return null;
    }

    BannerItemModel model = Campaign.Current.Models.BannerItemModel;
    int targetLevel = model.GetBannerItemLevelForHero(hero);
    ItemObject current = hero.BannerItem.Item;
    BannerComponent currentComponent = current.ItemComponent as BannerComponent;
    if (currentComponent == null)
    {
        return null;
    }

    foreach (ItemObject candidate in model.GetPossibleRewardBannerItems())
    {
        BannerComponent candidateComponent = candidate.ItemComponent as BannerComponent;
        if (candidateComponent != null
            && candidate.Culture == current.Culture
            && candidateComponent.BannerLevel == targetLevel
            && candidateComponent.BannerEffect == currentComponent.BannerEffect)
        {
            return candidate;
        }
    }

    return null;
}
```

写一个自己的「旗维护」行为，把玩家家族也纳入日常维护（官方直接跳过玩家家族）：

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public class MyBannerMaintenance : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickHeroEvent.AddNonSerializedListener(this, DailyTickHero);
    }

    private void DailyTickHero(Hero hero)
    {
        if (Campaign.Current == null || hero == null || hero.Clan != Clan.PlayerClan)
        {
            return;
        }

        if (!hero.BannerItem.IsInvalid())
        {
            return;
        }

        BannerItemModel model = Campaign.Current.Models.BannerItemModel;
        if (MBRandom.RandomFloat >= 0.5f || !model.CanBannerBeUpdated(null))
        {
            return;
        }

        ItemObject banner = BannerHelper.GetRandomBannerItemForHero(hero);
        if (banner != null)
        {
            hero.BannerItem = new EquipmentElement(banner);
            Debug.Print("granted a banner to " + hero.Name.ToString(), 0);
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

## 风险与边界

- **`GetCooldownDays` 有真实 bug。** 第二个分支条件重复写成 `bannerLevel == 1`，`return 8` 不可达。**实际 1 档与 2 档都是 4 天冷却。** 顶部 `BannerLevel2CooldownDays = 8` 这个常量从未被引用——**按它算冷却的 mod 会算错 4 天。**
- **`GiveBannersToHeroes` 在读档完成后也会跑。** 它挂在 `OnGameLoadFinishedEvent` 上。**因为 `CanBannerBeGivenToHero` 要求 `BannerItem.IsInvalid()`，所以它只补「读档后仍然没有旗」的领主，不会覆盖玩家已有的旗。** 但它**会**给读档后新成年的领主补旗——这是官方设计。
- **`_heroNextBannerLootTime` 是唯一的存档字段，以 `Hero` 对象为键。** 读档后 `SyncData` 会重新绑定到存档里恢复的 `Hero` 实例。**如果你的 mod 移除了某个英雄，这个键会悬空**——`CampaignTime` 值还在字典里但英雄没了，属于内存泄漏级别的残留，不会崩也不会生效。
- **`DailyTickHero` 完全不管玩家家族。** 第一句就 return。**这意味着玩家家族领主的旗永远不会自动升档。**
- **升档可能退化成随机。** `GetUpgradeBannerForHero` 找不到匹配就回退到 `BannerHelper.GetRandomBannerItemForHero(hero)`，而那个函数**只按文化与档位过滤，不校验 `BannerEffect`**。所以「升档」可能给出一面同档但效果不同的旗，甚至更低档的旗。
- **抢旗会把被抢者的旗清空。** `hero.BannerItem = new EquipmentElement(null);` 与 `LogBannerLootForHero` 紧挨着执行。**被抢的 AI 领主当天就变回无旗**，然后要等 `DailyTickHero` 的 25% 分支才可能重新拿到一面。
- **`OnCollectLootItems` 只处理玩家赢。** `if (winnerParty != PartyBase.MainParty) return;`。**AI 之间打仗掉旗完全不生效。**
- **抢旗需要通过两个独立概率。** `GetBannerRewardForWinningMapEvent`（直接掉旗）与 `GetBannerLootChanceFromDefeatedHero`（抢走已有旗）来自 [BattleRewardModel](../BattleRewardModel)，两件事互不影响。
- **优先找军团领袖，且会因为无效旗而跳过他。** 循环条件包含 `!item.Party.MobileParty.Army.ArmyOwner.BannerItem.IsInvalid()` 与 `CanBannerBeLootedFromHero(...)`。**军团领袖在冷却期内或无旗时，会被跳过去找别人。**
- **`CanBannerBeLootedFromHero` 对没有记录的英雄返回 true。** 意味着**新英雄 / 刚发旗的领主第一次永远可抢**，冷却只在抢过一次之后才开始算。
- **`GiveBannerItemChance = 0.25f` 与 `BannerItemUpdateChance = 0.1f` 是硬编码的私有常量。** 无法从外部调整，只能复制整个行为类。
- **`BannerHelper.GetRandomBannerItemForHero` 返回 null 是正常的**（候选集为空时）。**四个调用点全部判空**，你的代码也要判。
- **`hero.BannerItem` 的写入没有任何 Action 包装。** 官方就是直接赋值。**它靠每日 tick 的幂等性维持一致，没有事件广播、没有撤销。**

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BannerCampaignBehavior.cs` 是 234 行原始源码。跨版本比对时盯五点：**`GetCooldownDays` 那个重复条件是否被修**（这是最值得盯的一处——修好后 2 档旗的冷却会从 4 天变成 8 天，所有依赖旗档节奏的 mod 都会受影响）、三个 `BannerLevel*CooldownDays` 常量是否仍为死代码、两个概率常量 0.1f 与 0.25f 是否调整、七个事件订阅是否有增减、以及升级条件里的 `BannerEffect` 相等判定是否保留。**修 bug 本身就是一个破坏性变更**，因为它改了游戏节奏。

## 依赖关系

- 官方注册点：`SandBoxManager.cs:160` 的 `gameStarter.AddBehavior(new BannerCampaignBehavior());`
- 档位与候选：[BannerItemModel](../BannerItemModel) 的 `CanBannerBeUpdated` / `GetBannerItemLevelForHero` / `GetPossibleRewardBannerItems` 是本行为三个决策的全部来源
- 随机取旗：`Helpers` 命名空间的 `BannerHelper.GetRandomBannerItemForHero`（`Helpers/BannerHelper.cs:9-12`），内部 `GetRandomElementInefficiently()`，**返回 null 是正常结果**
- 战斗奖励：[BattleRewardModel](../BattleRewardModel) 的 `GetBannerRewardForWinningMapEvent` 与 `GetBannerLootChanceFromDefeatedHero`
- 旗的载体：[Hero](../Hero) 的 `BannerItem`（`EquipmentElement`），物品侧是 [ItemObject](../../core-extra/ItemObject) 的 `ItemComponent as BannerComponent` 提供的 `BannerLevel` 与 `BannerEffect`
- 年龄与职业：[AgeModel](../AgeModel) 的 `HeroComesOfAge`、`Hero.Occupation` 与 `Hero.IsLord`
- 战斗上下文：[MapEvent](../MapEvent) 与 `PartyBase`；军团侧的 `Army.ArmyOwner` 是抢旗的首选目标
- 事件：[CampaignEvents](../CampaignEvents) 的七个订阅，全部 `AddNonSerializedListener`
- 桶首页：[campaign API 分区](../)
