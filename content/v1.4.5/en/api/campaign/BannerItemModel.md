---
title: "BannerItemModel"
description: "The rule model for banner items: which banner items may appear as rewards, which tier a given hero may hold, and whether a banner may be upgraded. Four abstract members, one implementation, three tiers keyed on clan standing."
---

# BannerItemModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class BannerItemModel : MBGameModel<BannerItemModel>`
**Base:** `MBGameModel<BannerItemModel>`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BannerItemModel.cs`

## Overview

`BannerItemModel` is the **rule contract for the "banner item" gameplay dimension**, and it has exactly four abstract members:

```csharp
public abstract IEnumerable<ItemObject> GetPossibleRewardBannerItems();
public abstract IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero);
public abstract int GetBannerItemLevelForHero(Hero hero);
public abstract bool CanBannerBeUpdated(ItemObject item);
```

It answers three questions: **of all the `IsBannerItem` items in the game, which may drop as rewards? Which tier may a specific hero hold? May the banner currently in hand be swapped for a new tier?** These must be answered by one replaceable model because four separate paths need them at once — AI generation, battle rewards, tournament rewards, and vassal rewards.

In the architecture it carries the **"eligibility and tiering rules for banner items"** slot. **It generates nothing itself; it only answers eligibility questions.**

The sole implementation, `DefaultBannerItemModel`, is direct:
- `GetPossibleRewardBannerItems()` is `Items.All.WhereQ(i => i.IsBannerItem && i.StringId != "campaign_banner_small")` — it **excludes `campaign_banner_small`**, which is the small banner icon prop drawn on the map rather than a real banner
- `GetBannerItemLevelForHero(hero)`: clan leader **and** leader of the kingdom's ruling clan → 3; clan leader only → 2; everyone else → 1
- `GetPossibleRewardBannerItemsForHero(hero)` keeps the candidates whose `item.Culture == null || item.Culture == hero.Culture` and whose `BannerComponent.BannerLevel` matches that hero's tier
- `CanBannerBeUpdated(item)` **returns true unconditionally**

## Mental Model

Think of it as **the "who may hold which banner" query panel**.

- **It only queries; it writes no world state.** All four members are pure reads. What actually writes `hero.BannerItem` is [BannerCampaignBehavior](../BannerCampaignBehavior), which reads this model before deciding to hand one out.
- **The "reward candidate set" has five independent consumers.** Five call sites read `GetPossibleRewardBannerItems()`: `BannerHelper.cs:11` (random banner for a hero), `GetUpgradeBannerForHero` in [BannerCampaignBehavior](../BannerCampaignBehavior) (`BannerCampaignBehavior.cs:96`), `DefaultBattleRewardModel.cs:378` (battle rewards), `DefaultTournamentModel.cs:113` (tournament rewards), and `DefaultVassalRewardsModel.cs:34` (vassal rewards). **Changing the candidate set moves all five paths at once.**
- **The tier reflects clan standing, not personal prowess.** `GetBannerItemLevelForHero` looks at exactly two conditions: `hero.Clan.Leader == hero`, and `hero.MapFaction.IsKingdomFaction && hero.Clan.Kingdom.RulingClan == hero.Clan`. **It does not look at hero level, age, skills, or record whatsoever.** A freshly-adulted clan leader immediately qualifies for tier 3.
- **`GetPossibleRewardBannerItemsForHero` throws if a candidate lacks `BannerComponent`.** Its filter reads `(item.Culture == null || item.Culture == hero.Culture) && (item.ItemComponent as BannerComponent).BannerLevel == bannerItemLevelForHero` — an `as` cast to null followed by `.BannerLevel` crashes. The assumption is that `GetPossibleRewardBannerItems()` only ever returns items with a banner component; **once a custom model lets a component-less item into the set, this line blows up.**
- **`CanBannerBeUpdated` defaulting to true means the upgrade path is never disabled.** `BannerCampaignBehavior.cs:70` calls it daily for every AI hero and then rolls a 10% chance to attempt the upgrade. Returning false freezes a given item's tier forever.
- **"Update" really means swapping the item, not changing a stat.** After reading `GetBannerItemLevelForHero(hero)`, `BannerCampaignBehavior` searches for an upgrade target whose **culture matches, whose `BannerEffect` matches, and whose tier is the target tier** (`BannerCampaignBehavior.cs:99`), then assigns `hero.BannerItem = new EquipmentElement(upgradeBannerForHero)`. Failing that, it falls back to `BannerHelper.GetRandomBannerItemForHero(hero)`.

### Call sites for all four members

| Member | Call site | What it decides |
| --- | --- | --- |
| `GetPossibleRewardBannerItems()` | `BannerHelper.cs:11`, `BannerCampaignBehavior.cs:96`, `DefaultBattleRewardModel.cs:378`, `DefaultTournamentModel.cs:113`, `DefaultVassalRewardsModel.cs:34` | The global candidate set, minus `campaign_banner_small` |
| `GetPossibleRewardBannerItemsForHero(hero)` | `BannerHelper.cs:11` | Candidates after filtering by culture and tier |
| `GetBannerItemLevelForHero(hero)` | `BannerCampaignBehavior.cs:73` | Which tier that hero should be on (1 / 2 / 3) |
| `CanBannerBeUpdated(item)` | `BannerCampaignBehavior.cs:70` | Whether this banner may be swapped out |

## Key members

| Member | Signature | What this member is actually for |
| --- | --- | --- |
| `GetPossibleRewardBannerItems()` | `public abstract IEnumerable<ItemObject> GetPossibleRewardBannerItems()` | **The global candidate set**; the default is `Items.All.WhereQ(i => i.IsBannerItem && i.StringId != "campaign_banner_small")`. **Five consumers share it**: random banner issuance at `BannerHelper.cs:11`, upgrade-target search at `BannerCampaignBehavior.cs:96`, battle rewards at `DefaultBattleRewardModel.cs:378`, tournament rewards at `DefaultTournamentModel.cs:113`, and vassal rewards at `DefaultVassalRewardsModel.cs:34`. **It returns a lazy `IEnumerable`, so every enumeration re-runs the whole filter.** |
| `GetPossibleRewardBannerItemsForHero(Hero hero)` | `public abstract IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero)` | **The candidate set after per-hero filtering**, and the only member `BannerHelper.GetRandomBannerItemForHero` uses (`BannerHelper.cs:11`). The default takes the full candidate list and keeps entries matching `(item.Culture == null || item.Culture == hero.Culture) && (item.ItemComponent as BannerComponent).BannerLevel == tier`. **The crash point is reading `.BannerLevel` after an `as` cast that returned null** — any component-less item in the candidate set detonates it. |
| `GetBannerItemLevelForHero(Hero hero)` | `public abstract int GetBannerItemLevelForHero(Hero hero)` | Which banner tier a hero belongs on. **It looks only at clan standing and never at hero strength**: `hero.Clan.Leader == hero` together with `hero.MapFaction.IsKingdomFaction && hero.Clan.Kingdom.RulingClan == hero.Clan` gives 3, clan-leader-only gives 2, everyone else 1. Its only call site is `BannerCampaignBehavior.cs:73`, and **a null `hero.Clan` throws immediately**. |
| `CanBannerBeUpdated(ItemObject item)` | `public abstract bool CanBannerBeUpdated(ItemObject item)` | Whether this banner **may be swapped for a new tier**. **The default returns `true` unconditionally**, so the upgrade path is never off. Its only call site is `BannerCampaignBehavior.cs:70`, which invokes it daily for every non-player-clan AI hero and, on success, rolls a 10% chance (`BannerItemUpdateChance`) to attempt the upgrade. **Returning false permanently freezes that item's tier.** |

## Examples

Read the full candidate set while guarding the exact spot where the default implementation would crash:

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public static List<ItemObject> SafeBannerCandidates()
{
    List<ItemObject> result = new List<ItemObject>();
    if (Campaign.Current == null)
    {
        return result;
    }

    BannerItemModel model = Campaign.Current.Models.BannerItemModel;
    foreach (ItemObject item in model.GetPossibleRewardBannerItems())
    {
        if (item.ItemComponent is BannerComponent)
        {
            result.Add(item);
        }
    }

    return result;
}
```

Determine which tier a hero should be on, mirroring the `DefaultBannerItemModel` rule:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public static int ExpectedBannerLevel(Hero hero)
{
    if (hero == null || Campaign.Current == null || hero.Clan == null)
    {
        return 0;
    }

    return Campaign.Current.Models.BannerItemModel.GetBannerItemLevelForHero(hero);
}
```

Hand a hero a random banner that fits their tier, through the real `Helpers` entry point:

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;

public static void GrantBanner(Hero target)
{
    if (target == null || Campaign.Current == null)
    {
        return;
    }

    ItemObject banner = BannerHelper.GetRandomBannerItemForHero(target);
    if (banner != null)
    {
        target.BannerItem = new EquipmentElement(banner);
        Debug.Print("granted " + banner.StringId + " to " + target.Name.ToString(), 0);
    }
}
```

Write your own model: culture-neutral banners only, and freeze a few items against upgrades:

```csharp
using System.Collections.Generic;
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public class CultureFreeBannerItemModel : BannerItemModel
{
    private readonly HashSet<string> _frozen = new HashSet<string> { "battania_morrigan_banner" };

    public override IEnumerable<ItemObject> GetPossibleRewardBannerItems()
    {
        return Items.All.Where(item => item.IsBannerItem
            && item.StringId != "campaign_banner_small"
            && item.Culture == null);
    }

    public override IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero)
    {
        return GetPossibleRewardBannerItems();
    }

    public override int GetBannerItemLevelForHero(Hero hero)
    {
        return 1;
    }

    public override bool CanBannerBeUpdated(ItemObject item)
    {
        return item != null && !_frozen.Contains(item.StringId);
    }
}
```

## Risks and crash boundaries

- **`GetPossibleRewardBannerItemsForHero` throws when a candidate has no component.** The default reads `(item.ItemComponent as BannerComponent).BannerLevel`, and an `as` that yields null followed by a property read crashes. **A custom model's candidate set must guarantee every entry carries a `BannerComponent`.**
- **`GetBannerItemLevelForHero` throws on a null `hero.Clan`.** The default's first statement reads `hero.Clan.Leader`. Confirm the hero has a clan before calling.
- **`GetPossibleRewardBannerItems()` returns a lazy `IEnumerable`.** Every enumeration re-runs the filter over `Items.All`. **Enumerating it several times on a hot path repeats a full-table scan every time** — call `.ToList()` once.
- **`CanBannerBeUpdated` defaults to constant true.** That means `BannerCampaignBehavior` attempts a banner swap for every AI hero daily, just gated at 10%. Freezing a specific banner requires your own implementation.
- **Tiers reflect clan standing only.** Level, age, skills, and record are ignored. A "promotion by battlefield record" mod must override `GetBannerItemLevelForHero` **and** `GetPossibleRewardBannerItemsForHero`, otherwise the two tiers disagree.
- **The upgrade match also requires equal `BannerEffect`.** That is logic in `BannerCampaignBehavior.cs:99`, not in this model: it demands `possibleRewardBannerItem.Culture == item.Culture` and `bannerComponent.BannerEffect == ((BannerComponent)item.ItemComponent).BannerEffect`. **Change the candidate set here without respecting that condition and the upgrade search never finds a target, silently falling back to a random banner.**
- **Excluding `campaign_banner_small` is hard-coded.** That item is the map banner icon prop; letting it into the reward pool hands players a tiny icon as a banner.
- **Neither `IEnumerable` member caches.** Each call re-filters. `BannerCampaignBehavior.cs:96` enumerates it inside a loop, which is real repeated overhead with many items.
- **Abstract with four mandatory members.** The only implementation, `DefaultBannerItemModel`, is inheritable, so a mod subclass breaks nothing at build time.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BannerItemModel.cs` is a 15-line original-source file (three `using` directives, the class declaration, four abstract members). Four things to check across versions: whether any member was added or removed, whether the `campaign_banner_small` exclusion survives, whether the tier rule is still "clan leader plus ruling clan equals 3", and whether `CanBannerBeUpdated` still returns true unconditionally — it is the only real switch for disabling the upgrade path.

## Dependencies

- Sole implementation: `DefaultBannerItemModel` in `TaleWorlds.CampaignSystem.GameComponents/DefaultBannerItemModel.cs`, which also exposes the constants `BannerLevel1 = 1`, `BannerLevel2 = 2`, and `BannerLevel3 = 3`
- Read entry point: `Models.BannerItemModel` on [Campaign](../Campaign)
- Random issuance: `BannerHelper.GetRandomBannerItemForHero` (`Helpers/BannerHelper.cs:9-12`) calls `GetRandomElementInefficiently()` over `GetPossibleRewardBannerItemsForHero` — **returning null is a normal outcome**, and every caller null-checks
- Tier writer: [BannerCampaignBehavior](../BannerCampaignBehavior) reads `CanBannerBeUpdated` and `GetBannerItemLevelForHero` daily, then assigns `hero.BannerItem`
- Reward-side consumers: `DefaultBattleRewardModel`, `DefaultTournamentModel`, and `DefaultVassalRewardsModel` all draw candidates from `GetPossibleRewardBannerItems()`
- Item side: `IsBannerItem`, `Culture`, and `StringId` on [ItemObject](../../core-extra/ItemObject), plus the [BannerComponent](../../core-extra/BannerComponent) it carries (supplying `BannerLevel` and `BannerEffect`), are the raw data behind every test
- Bucket index: [campaign API section](../)
