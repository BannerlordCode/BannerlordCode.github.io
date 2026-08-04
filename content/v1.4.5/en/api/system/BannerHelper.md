---
title: "BannerHelper"
description: "Campaign banner utilities for selecting hero banner items and applying matching BannerEffect bonuses to an ExplainedNumber."
---
# BannerHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class BannerHelper`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/BannerHelper.cs`

## One-sentence responsibility

`BannerHelper` connects a live [Hero](../../campaign/Hero) to the active [BannerItemModel](../../campaign/BannerItemModel), and applies a matching [BannerEffect](../../core-extra/BannerEffect) from a [BannerComponent](../../core-extra/BannerComponent) to an [ExplainedNumber](../../campaign/ExplainedNumber).

## Mental Model

This is a narrow calculation helper, not the owner of banner equipment or combat stats.

- `GetRandomBannerItemForHero` asks `Campaign.Current.Models.BannerItemModel` for the items that can reward a specific Hero, then chooses one. It returns an [ItemObject](../../core-extra/ItemObject); the caller decides whether to put it in `Hero.BannerItem`, grant it as loot, or reject it.
- `AddBannerBonusForBanner` is a guarded adapter from a live `BannerComponent` to an existing `ExplainedNumber`. It does nothing when the component is null or its `BannerEffect` is not the requested effect.
- The private effect switch distinguishes `EffectIncrementType.Add` from `EffectIncrementType.AddFactor`. The helper records the effect name as the explanation source, but it does not create the stat calculation or own the result.

## When to use and when not to use

- **Use it:** in Campaign banner reward/upgrade flows when the active `BannerItemModel` should select a hero-compatible item.
- **Use it:** in a combat or stat model that already has a live banner component and an `ExplainedNumber` to which the banner effect should contribute.
- **Do not use it:** to assign `Hero.BannerItem` without the surrounding eligibility and lifecycle checks in `BannerCampaignBehavior`.
- **Do not use it:** to replace `BannerItemModel`, `BannerComponent`, or the model that owns the surrounding `ExplainedNumber` calculation.
- **Do not infer:** that a non-null banner item applies every effect. The component's actual `BannerEffect` must equal the requested effect.

## Dependencies

- Reward selection: [Campaign](../../campaign/Campaign), [BannerItemModel](../../campaign/BannerItemModel), [Hero](../../campaign/Hero), and [ItemObject](../../core-extra/ItemObject).
- Effect data: [BannerComponent](../../core-extra/BannerComponent), [BannerEffect](../../core-extra/BannerEffect), `EffectIncrementType`, and `GetBannerEffectBonus()`.
- Calculation target: [ExplainedNumber](../../campaign/ExplainedNumber), whose owner decides when the resulting stat value is consumed.
- Callers: `BannerCampaignBehavior` assigns selected items to heroes; SandBox agent damage, stat, and morale models pass active banner components into `AddBannerBonusForBanner`.

## Public members

### GetRandomBannerItemForHero

`GetRandomBannerItemForHero(Hero hero)` calls `Campaign.Current.Models.BannerItemModel.GetPossibleRewardBannerItemsForHero(hero)` and selects one item from that model-provided collection. It does not equip the item, add it to an inventory, or publish a reward event.

```csharp
Hero hero = Hero.MainHero;
if (Campaign.Current != null && hero != null)
{
    ItemObject bannerItem = BannerHelper.GetRandomBannerItemForHero(hero);
    if (bannerItem != null)
    {
        hero.BannerItem = new EquipmentElement(bannerItem);
    }
}
```

The assignment is shown separately from the helper because the v1.4.5 `BannerCampaignBehavior` owns when a hero may receive or upgrade a banner.

### AddBannerBonusForBanner

`AddBannerBonusForBanner(BannerEffect bannerEffect, BannerComponent bannerComponent, ref ExplainedNumber bonuses)` first checks that `bannerComponent` is non-null and that its `BannerEffect` is the requested effect. It then reads the component bonus and applies it as either an additive value or an additive factor, preserving the effect name in the explanation.

```csharp
if (activeBanner != null && activeBanner.BannerEffect != null)
{
    BannerHelper.AddBannerBonusForBanner(
        activeBanner.BannerEffect,
        activeBanner,
        ref bonuses);
}
```

Here `activeBanner` is the banner component already selected by the combat/stat model and `bonuses` is its existing `ExplainedNumber`; neither object is created or owned by the helper.

## Real example

The following combines the two source-backed boundaries used by the game: a Campaign behavior selects an item for the player hero, while a stat calculation contributes the hero's active banner effect to an existing explanation number.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

public static class BannerInspection
{
    public static ItemObject SelectPlayerBanner()
    {
        if (Campaign.Current == null || Hero.MainHero == null)
        {
            return null;
        }

        return BannerHelper.GetRandomBannerItemForHero(Hero.MainHero);
    }

    public static void AddActiveBannerEffect(BannerComponent activeBanner, ref ExplainedNumber bonuses)
    {
        if (activeBanner?.BannerEffect != null)
        {
            BannerHelper.AddBannerBonusForBanner(activeBanner.BannerEffect, activeBanner, ref bonuses);
        }
    }
}
```

`SelectPlayerBanner` returns a candidate only; a behavior must perform the same eligibility, random-tick, and equipment assignment checks as the owning Campaign flow before changing a Hero.

## Risks and save boundaries

- **Campaign phase:** `GetRandomBannerItemForHero` reads `Campaign.Current.Models`; call it only after Campaign models and the Hero object graph are initialized.
- **Model replacement:** banner reward candidates and their levels come from the active `BannerItemModel`; do not copy a candidate list or assume the default model's culture rules.
- **Effect matching:** a component with a different effect is intentionally ignored. Passing a requested effect that does not match the component is not a way to force a bonus.
- **Calculation ownership:** `AddBannerBonusForBanner` mutates the `ExplainedNumber` passed by reference, not a saved Hero or banner object. Call it only inside the calculation that owns that number.
- **Save boundary:** `Hero.BannerItem` and the BannerComponent belong to the Campaign/Core object graph; do not save transient `ExplainedNumber` instances or cache model results across Campaign unload/load.

## Version note

This page follows v1.4.5 `Helpers/BannerHelper.cs`. The private switch handles only `Add` and `AddFactor`; effect-specific eligibility, banner levels, and reward timing remain in `BannerItemModel`, `BannerCampaignBehavior`, and the consuming stat models.

## Navigation

- [↑ API system index](../)
- [Related: Hero](../../campaign/Hero)
- [Related: Campaign](../../campaign/Campaign)
- [Related: BannerItemModel](../../campaign/BannerItemModel)
- [Related: BannerComponent](../../core-extra/BannerComponent)
- [Related: BannerEffect](../../core-extra/BannerEffect)
- [Related: ItemObject](../../core-extra/ItemObject)
- [Related: ExplainedNumber](../../campaign/ExplainedNumber)
