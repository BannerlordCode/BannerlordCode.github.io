---
title: "BannerCampaignBehavior"
description: "The daily maintenance behavior for hero banners: grants banners at startup, rolls 10% / 25% chances per hero per day to upgrade or grant, tops up on coming-of-age and hero creation, strips banners from defeated army leaders and lords after battle, and tracks a per-hero loot cooldown."
---

# BannerCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BannerCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BannerCampaignBehavior.cs`

## Overview

`BannerCampaignBehavior` is the **full lifecycle maintainer of hero banners**: who should have one, how a tier gets upgraded, and when one can be stripped from a defeated enemy. It subscribes to seven events, and across 234 source lines it has only three effective constants, two probabilities, and **one field that actually needs saving**.

```csharp
private const int BannerLevel1CooldownDays = 4;
private const int BannerLevel2CooldownDays = 8;
private const int BannerLevel3CooldownDays = 12;
private const float BannerItemUpdateChance = 0.1f;
private const float GiveBannerItemChance = 0.25f;

private Dictionary<Hero, CampaignTime> _heroNextBannerLootTime = new Dictionary<Hero, CampaignTime>();
```

**`_heroNextBannerLootTime` is the only thing that gets saved** — it records how long before a given hero's banner can be looted again. Every other piece of state lives on `hero.BannerItem`, which the hero persists itself.

It relies on [BannerItemModel](../BannerItemModel) to answer "which tier may this hero hold", on [BannerHelper](../../system/BannerHelper) in the `Helpers` namespace to pick a random banner that matches the tier, and on [BattleRewardModel](../BattleRewardModel) to decide whether a battle drops a banner outright.

## Mental Model

Think of it as **"banner operations plus loot"**.

- **Five entry points, three write paths.** Banners are written in only three places: `GiveBannersToHeroes` (one sweep at startup and after load), `DailyTickHero` (daily grant or upgrade), and `OnCollectLootItems` (post-battle strip). `OnHeroComesOfAge`, `OnHeroCreated`, and `OnClanCreated` are three supplementary entries that all end in the same `hero.BannerItem = new EquipmentElement(randomBannerItemForHero);`.
- **`CanBannerBeGivenToHero` is the only grant gate.** Four conditions: `hero.Occupation == Occupation.Lord`, `hero.Age >= Campaign.Current.Models.AgeModel.HeroComesOfAge`, `hero.BannerItem.IsInvalid()`, and `hero.Clan != Clan.PlayerClan`. **The player's clan never receives one** — the player picks their own banner.
- **The daily tick has two mutually exclusive branches.** Already has a banner and `CanBannerBeUpdated` passes → 10% chance to upgrade; has no banner, `CanBannerBeGivenToHero` passes, and is not a prisoner → 25% chance to grant a fresh one. **The `else if` means "already has a banner" excludes the grant branch entirely.**
- **An upgrade requires matching culture, matching banner effect, and the target tier.** `GetUpgradeBannerForHero` (`:93-105`) walks `GetPossibleRewardBannerItems()` looking for `possibleRewardBannerItem.Culture == item.Culture && bannerComponent.BannerLevel == upgradeBannerLevel && bannerComponent.BannerEffect == ((BannerComponent)item.ItemComponent).BannerEffect`. **When it finds nothing it falls back to `BannerHelper.GetRandomBannerItemForHero(hero)` — and that fallback does not verify the tier.**
- **Post-battle stripping prefers army leaders.** `OnCollectLootItems` (`:107-147`) first scans the defeated side's mobile parties that own an army for an eligible `Army.ArmyOwner`; only if that fails does it randomly pick a `LeaderHero` from all defeated parties. **Army leaders win the tie because they are more likely to hold a high-tier banner.**
- **Stripping rolls two independent probabilities.** [BattleRewardModel](../BattleRewardModel)'s `GetBannerRewardForWinningMapEvent(mapEvent)` decides whether a banner drops into the loot outright; `GetBannerLootChanceFromDefeatedHero(hero)` decides whether the hero's existing banner can be taken. **They do not interact.**
- **The cooldown dictionary is the only saved field.** `LogBannerLootForHero` writes `_heroNextBannerLootTime[hero] = CampaignTime.DaysFromNow(GetCooldownDays(bannerLevel))`; `CanBannerBeLootedFromHero` reads it. **A successful strip also runs `hero.BannerItem = new EquipmentElement(null)` — the victim is left bannerless.**

### A source bug you have to know about

`GetCooldownDays(int bannerLevel)` (`:207-218`) reads:

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

**The second `if` repeats the first condition exactly**, so the `return 8` branch is unreachable. **The result is: tier-1 banners cool down in 4 days, tier-2 banners also cool down in 4 days (not the 8 days the class-level `BannerLevel2CooldownDays = 8` constant advertises), and tier 3 or above cool down in 12 days.** All three `BannerLevel*CooldownDays` constants at the top of the class are **never referenced** — they are dead code. This is the real state of the 1.4.5 source, not a transcription slip; a mod that computes cooldowns from the constants will be wrong by four days.

### The seven subscriptions and what each does

| Event | Callback | What it does |
| --- | --- | --- |
| `OnNewGameCreatedEvent` | `OnNewGameCreated` | Calls `GiveBannersToHeroes()` |
| `OnGameLoadFinishedEvent` | `GiveBannersToHeroes` | **Also runs after a load**, topping up lords who still have no banner |
| `DailyTickHeroEvent` | `DailyTickHero` | Returns immediately for the player clan; then 10% upgrade / 25% grant |
| `OnCollectLootsItemsEvent` | `OnCollectLootItems` | Post-battle banner drop and stripping |
| `HeroComesOfAgeEvent` | `OnHeroComesOfAge` | Grants one banner on coming of age |
| `HeroCreated` | `OnHeroCreated` | Grants one banner when a hero is created |
| `OnClanCreatedEvent` | `OnClanCreated` | Grants the leader a banner when a companion clan is created |

## How to use

**How to obtain it.** **Do not construct it.** `public class BannerCampaignBehavior : CampaignBehaviorBase` is added at campaign start; reach it with `Campaign.Current.GetCampaignBehavior<BannerCampaignBehavior>()`.

```csharp
BannerCampaignBehavior banner = Campaign.Current.GetCampaignBehavior<BannerCampaignBehavior>();
int cooldown = banner.GetCooldownDays(hero);   // see the pitfall before trusting this
```

**The most common pitfall.** **`GetCooldownDays` has a real bug.** The second branch repeats `bannerLevel == 1`, so `return 8` is unreachable — **tier 1 and tier 2 both cool down in 4 days.**

## Key members

| Member | Signature | What this member is actually for |
| --- | --- | --- |
| `RegisterEvents()` | `public override void RegisterEvents()` | Subscribes seven events (`:26-35`), **all through `AddNonSerializedListener`**, so no handle is saved and `CampaignBehaviorManager` re-subscribes after a load. **Note that `GiveBannersToHeroes` serves two events**: campaign creation and game-load-finished. |
| `SyncData(IDataStore dataStore)` | `public override void SyncData(IDataStore dataStore)` | Syncs exactly one field: `dataStore.SyncData("_heroNextBannerLootTime", ref _heroNextBannerLootTime);` (`:37-40`). **That is this behavior's only cross-save state** — the banner tier itself lives on `hero.BannerItem` and is none of this behavior's business. |
| `GiveBannersToHeroes()` | `private void GiveBannersToHeroes()` | **The one-shot top-up at startup and after load** (`:47-60`). Walks `Hero.AllAliveHeroes` and, for every hero where `CanBannerBeGivenToHero` holds, calls `BannerHelper.GetRandomBannerItemForHero` and writes the result when non-null. **Lords who already have a banner are untouched**, which makes it idempotent. |
| `DailyTickHero(Hero hero)` | `private void DailyTickHero(Hero hero)` | Per-hero daily maintenance (`:62-91`). **The very first statement is `if (hero.Clan == Clan.PlayerClan) return;`** — the player clan is not managed at all. Then two exclusive branches: with a banner, roll 10% for an upgrade (gated on `bannerItemModel.CanBannerBeUpdated(bannerItem.Item)`); without one, roll 25% for a grant (gated on `CanBannerBeGivenToHero` plus `!hero.IsPrisoner`). |
| `GetUpgradeBannerForHero(Hero hero, int upgradeBannerLevel)` | `private ItemObject GetUpgradeBannerForHero(Hero hero, int upgradeBannerLevel)` | **The upgrade target search** (`:93-105`). It walks the candidate set demanding matching `Culture`, `BannerLevel == upgradeBannerLevel`, and matching `BannerEffect`. **When it returns nothing it falls back to `BannerHelper.GetRandomBannerItemForHero(hero)`, and that fallback does not check the tier** — so an "upgrade" can degrade into a random swap, possibly to a lower tier. |
| `OnCollectLootItems(PartyBase winnerParty, ItemRoster gainedLoots)` | `private void OnCollectLootItems(PartyBase winnerParty, ItemRoster gainedLoots)` | Post-battle handling (`:107-147`). **The first statement is `if (winnerParty != PartyBase.MainParty) return;`** — only a player victory is processed. It then asks `BattleRewardModel.GetBannerRewardForWinningMapEvent(mapEvent)` whether to drop a banner directly, and afterwards hunts a defeated army leader or lord to strip. |
| `CanBannerBeLootedFromHero(Hero hero)` | `private bool CanBannerBeLootedFromHero(Hero hero)` | The cooldown test (`:198-205`): with a dictionary entry it uses `IsPast`, and **with no entry it returns true outright**. So **a new hero's banner is always strippable the first time.** |
| `GetCooldownDays(int bannerLevel)` | `private int GetCooldownDays(int bannerLevel)` | Maps tier to cooldown in days (`:207-218`). **Source bug: the second branch repeats the condition `bannerLevel == 1`, making `return 8` unreachable** — so in practice tier 1 costs 4 days, tier 2 also costs 4 days, and everything else 12 days. All three class-level `BannerLevel*CooldownDays` constants are unreferenced. |
| `LogBannerLootForHero(Hero hero, int bannerLevel)` | `private void LogBannerLootForHero(Hero hero, int bannerLevel)` | Writes the cooldown after a successful strip (`:219-230`), overwriting an existing entry or `Add`ing a new one. **Its call site sits immediately next to `hero.BannerItem = new EquipmentElement(null);`.** |
| `CanBannerBeGivenToHero(Hero hero)` | `private bool CanBannerBeGivenToHero(Hero hero)` | **The only grant gate** (`:231-238`). Four conditions: `Occupation == Occupation.Lord`, `Age >= Campaign.Current.Models.AgeModel.HeroComesOfAge`, `BannerItem.IsInvalid()`, and `Clan != Clan.PlayerClan`. **It does not check captivity** — the prisoner test exists only inside the bannerless branch of `DailyTickHero`. |

## Examples

Grant a banner to a qualifying hero by hand, through the real `Helpers` entry point and the same shape as `GiveBannersToHeroes`:

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

Read a hero's banner tier — `BannerComponent.BannerLevel` is the very number [BannerItemModel](../BannerItemModel) computes:

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

Find an upgradeable banner of the same culture and effect at the model's target tier, reproducing the search conditions of `GetUpgradeBannerForHero`:

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

Write your own maintenance behavior that also covers the player clan, which the official one skips entirely:

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

        if (MBRandom.RandomFloat >= 0.5f)
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

## Risks and crash boundaries

- **`GetCooldownDays` has a real bug.** The second branch repeats `bannerLevel == 1`, so `return 8` is unreachable. **Tier 1 and tier 2 both cool down in 4 days.** The `BannerLevel2CooldownDays = 8` constant is never referenced — **a mod computing cooldowns from it will be four days wrong.**
- **`GiveBannersToHeroes` also runs after a load.** It hangs off `OnGameLoadFinishedEvent`. **Because `CanBannerBeGivenToHero` requires `BannerItem.IsInvalid()`, it only tops up lords who still have no banner and never overwrites an existing one.** It **will**, however, grant a banner to a lord who has just come of age in a loaded save — that is deliberate.
- **`_heroNextBannerLootTime` is the only saved field and is keyed by `Hero` object.** After a load, `SyncData` rebinds it to the restored `Hero` instances. **If a mod removes a hero, the key dangles** — the `CampaignTime` value stays in the dictionary with no hero behind it. That is a memory-level leftover: it neither crashes nor takes effect.
- **`DailyTickHero` ignores the player clan entirely.** It returns on the first line. **The player clan's lords therefore never auto-upgrade their banners.**
- **An upgrade can degrade into a random swap.** When `GetUpgradeBannerForHero` finds no match it falls back to `BannerHelper.GetRandomBannerItemForHero(hero)`, and **that function filters by culture and tier but never by `BannerEffect`.** An "upgrade" can therefore hand out a same-tier banner with a different effect, or even a lower tier.
- **Stripping empties the victim's banner.** `hero.BannerItem = new EquipmentElement(null);` runs right next to `LogBannerLootForHero`. **The stripped AI lord is bannerless from that moment** and has to wait for the 25% branch of `DailyTickHero` to get another one.
- **`OnCollectLootItems` only handles player victories.** `if (winnerParty != PartyBase.MainParty) return;`. **Battles between AI factions produce no banner effects at all.**
- **Stripping passes two independent probabilities.** `GetBannerRewardForWinningMapEvent` (an outright drop) and `GetBannerLootChanceFromDefeatedHero` (taking the existing one) both come from [BattleRewardModel](../BattleRewardModel) and do not affect each other.
- **Army leaders are preferred, and are skipped when ineligible.** The loop condition includes `!item.Party.MobileParty.Army.ArmyOwner.BannerItem.IsInvalid()` and `CanBannerBeLootedFromHero(...)`. **An army leader in cooldown or without a banner is passed over in favour of someone else.**
- **`CanBannerBeLootedFromHero` returns true when there is no entry.** **A new hero's or freshly granted banner is always strippable the first time**; the cooldown only starts after one strip.
- **`GiveBannerItemChance = 0.25f` and `BannerItemUpdateChance = 0.1f` are hard-coded private constants.** There is no external adjustment; the only way to change them is to copy the whole behavior class.
- **`BannerHelper.GetRandomBannerItemForHero` returning null is normal** when the candidate set is empty. **All four call sites null-check it, and so must yours.**
- **Writes to `hero.BannerItem` have no Action wrapper.** The official code assigns directly. **Consistency is maintained only by the daily tick's idempotence — there is no event broadcast and no undo.**

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BannerCampaignBehavior.cs` is a 234-line original-source file. Five things to check across versions: **whether the duplicated condition in `GetCooldownDays` gets fixed** (the single most important item — fixing it moves the tier-2 cooldown from 4 days to 8 and shifts the pacing every mod depending on banner cadence relies on), whether the three `BannerLevel*CooldownDays` constants are still dead, whether the 0.1f and 0.25f probabilities were retuned, whether any of the seven subscriptions were added or removed, and whether the upgrade condition still requires equal `BannerEffect`. **The bug fix alone is a breaking change**, because it changes game pacing.

## Dependencies

- Official registration point: `gameStarter.AddBehavior(new BannerCampaignBehavior());` at `SandBoxManager.cs:160`
- Tier and candidates: `CanBannerBeUpdated`, `GetBannerItemLevelForHero`, and `GetPossibleRewardBannerItems` on [BannerItemModel](../BannerItemModel) are the entire source of this behavior's three decisions
- Random pick: `BannerHelper.GetRandomBannerItemForHero` in the `Helpers` namespace (`Helpers/BannerHelper.cs:9-12`), internally `GetRandomElementInefficiently()`, where **a null result is normal**
- Battle rewards: `GetBannerLootChanceFromDefeatedHero` and `GetBannerRewardForWinningMapEvent` on [BattleRewardModel](../BattleRewardModel)
- Banner carrier: `BannerItem` (`EquipmentElement`) on [Hero](../Hero); on the item side it is `(ItemObject.ItemComponent as BannerComponent)` supplying `BannerLevel` and `BannerEffect`
- Age and occupation: `HeroComesOfAge` on [AgeModel](../AgeModel), plus `Hero.Occupation` and `Hero.IsLord`
- Battle context: [MapEvent](../MapEvent) and `PartyBase`; `Army.ArmyOwner` on the army side is the preferred strip target
- Events: the seven subscriptions on [CampaignEvents](../CampaignEvents), all through `AddNonSerializedListener`
- Bucket index: [campaign API section](../)
