---
title: "TeleportationHelper"
description: "Reads the remaining Campaign hours for a hero's delayed teleport."
---
# TeleportationHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class TeleportationHelper`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/TeleportationHelper.cs`

## One-sentence responsibility

`TeleportationHelper` converts the arrival time held by the active [ITeleportationCampaignBehavior](../../campaign/ITeleportationCampaignBehavior) into remaining Campaign hours for a [Hero](../../campaign/Hero).

## Mental Model

The helper is a read-only convenience bridge over `Campaign.Current`. It resolves the `ITeleportationCampaignBehavior`, asks it for the hero's `CampaignTime` arrival value, and returns `RemainingHoursFromNow`. It does not create a teleport request, choose a destination, or move a hero.

The stock implementation keeps delayed requests in [TeleportationCampaignBehavior](../../campaign/TeleportationCampaignBehavior). That behavior stores a pending hero, either a [Settlement](../../campaign/Settlement) or [MobileParty](../../campaign/MobileParty) target, and an arrival time. The helper deliberately exposes only the countdown, not the target or whether the hero is a governor or party leader.

## When to use and when not to use

- **Use it:** for UI text or other read-only presentation that needs the remaining hours of a hero already marked as traveling.
- **Use it:** when the caller already owns the hero reference and only needs a countdown, as `ClanFinanceAlleyItemVM` does for a traveling alley leader.
- **Do not use it:** to start or cancel a delayed teleport. Use the public entries on [TeleportHeroAction](../../campaign-ext/TeleportHeroAction) for those mutations.
- **Do not use it:** to discover the target. Query `ITeleportationCampaignBehavior.GetTargetOfTeleportingHero` when target identity and role flags are required.
- **Do not treat the result as a destination:** it is a float in hours, not a map point or settlement reference.

## Public entry

### `GetHoursLeftForTeleportingHeroToReachItsDestination`

```csharp
public static float GetHoursLeftForTeleportingHeroToReachItsDestination(Hero teleportingHero)
```

The v1.4.5 body is equivalent to:

```csharp
return Campaign.Current.GetCampaignBehavior<ITeleportationCampaignBehavior>()
    ?.GetHeroArrivalTimeToDestination(teleportingHero)
    .RemainingHoursFromNow ?? 0f;
```

If the Campaign cannot resolve the interface behavior, the null-conditional path returns `0f`. With the stock behavior installed, a hero that has no matching pending record receives `CampaignTime.Never` from `GetHeroArrivalTimeToDestination`; callers should therefore use this helper in a flow that has already established that the hero is traveling.

## Real Campaign flow

The stock clan-finance UI checks `assignedClanMemberOfAlley.IsTraveling`, then uses this helper to fill the `LEFT_TIME` text variable. The same read-only pattern can be used by a Campaign UI or behavior:

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Library;

Hero hero = Hero.MainHero;
if (hero.IsTraveling)
{
    float hoursLeft = TeleportationHelper
        .GetHoursLeftForTeleportingHeroToReachItsDestination(hero);
    Debug.Print($"{hero.Name} has {hoursLeft:0.0} campaign hours left to travel.");
}
```

This code only reads the campaign behavior's current countdown. It does not advance time or force the arrival; the behavior's hourly tick and delayed-teleport model own that lifecycle.

## Dependencies and ownership

- [Campaign](../../campaign/Campaign) is the service locator used to resolve `ITeleportationCampaignBehavior`.
- [ITeleportationCampaignBehavior](../../campaign/ITeleportationCampaignBehavior) owns the public query for arrival time and target information.
- [TeleportationCampaignBehavior](../../campaign/TeleportationCampaignBehavior) is the stock state owner; its pending list is synchronized through the Campaign save system.
- [TeleportHeroAction](../../campaign-ext/TeleportHeroAction) publishes delayed and immediate teleport requests. The helper observes the resulting delayed state but never invokes the action.
- [CampaignTime](../../campaign/CampaignTime) supplies `RemainingHoursFromNow`; this helper converts that time value to a `float`.

## Risks and save boundaries

- The helper depends on `Campaign.Current`; it is a Campaign API and should not be called from a startup path before a Campaign exists.
- A missing interface behavior returns `0f`, which means “no behavior-backed countdown available,” not proof that a hero arrived.
- The stock behavior returns `CampaignTime.Never` when the hero is absent from its pending list. Establish the traveling/pending state through the owning flow before displaying a user-facing countdown.
- A delayed request can be canceled when the hero is killed or imprisoned, its target party is destroyed or disbanded, or a target settlement changes owner. A previously read float is not durable state.
- `TeleportationCampaignBehavior` synchronizes its pending list; this helper itself has no fields, events, or save contract.

## Version note

This page follows v1.4.5 `TeleportationHelper.cs`. The class contains one static read method; delayed teleport creation, cancellation, persistence, and immediate application belong to the Campaign behavior and action layers.

## Navigation

- [↑ API system index](../)
- [Related: Hero](../../campaign/Hero)
- [Related: ITeleportationCampaignBehavior](../../campaign/ITeleportationCampaignBehavior)
- [Related: TeleportationCampaignBehavior](../../campaign/TeleportationCampaignBehavior)
- [Related: TeleportHeroAction](../../campaign-ext/TeleportHeroAction)
