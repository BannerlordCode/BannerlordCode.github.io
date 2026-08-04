---
title: "DefaultClanTierModel"
description: "The v1.4.5 Campaign implementation for clan tiers, renown floors, party and companion capacity, and eligibility previews."
---
# DefaultClanTierModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultClanTierModel : ClanTierModel`  
**Base:** `ClanTierModel`  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultClanTierModel.cs`

## Overview

`DefaultClanTierModel` is the Sandbox implementation of the clan-tier rules registered for a 1.4.5 Campaign. It does not own a `Clan`'s tier, renown, or influence state. Instead, it calculates thresholds, party and companion limits, initial values, and the next-tier preview from the clan and other Campaign Models. `Clan`, clan-management UI, hero and party spawning, diplomacy strength estimates, and eligibility checks all read the same active model, so replacing this policy affects several downstream systems at once.

## One-line responsibility

Converts clan tier and renown into the default eligibility, capacity, initial-value, and next-tier rules.

## Mental model

### Where it lives, who creates it, and who holds it

This is a stateless calculator at the Campaign rules layer. [Clan](../Clan) still owns the state. During Campaign model registration, `SandBoxManager` executes `gameStarter.AddModel(new DefaultClanTierModel())`; the [GameModels](../GameModels) constructor then resolves the `ClanTierModel` property through `GetGameModel<ClanTierModel>()`. A running mod should obtain the active instance from `Campaign.Current.Models.ClanTierModel`, rather than constructing `DefaultClanTierModel` and expecting that separate object to be used by the game.

`CampaignGameStarter.AddModel(GameModel)` appends a model to the list. Lookup scans backward, so the later same-type implementation wins. The generic `AddModel<T>(MBGameModel<T>)` overload also initializes the new model with the current same-type model before appending it. These are startup replacement contracts, not APIs for changing the rules at any arbitrary point during a running Campaign.

That `Initialize(ClanTierModel baseModel)` method is inherited from [MBGameModel](../../core-extra/MBGameModel) and is the wrapper-initialization entry point: it receives the previous Model only when a custom wrapper is registered through generic `AddModel<T>(MBGameModel<T>)`. Sandbox registers this default implementation through the non-generic `AddModel(GameModel)`, so `Initialize` should not be mistaken for a runtime callback owned by `DefaultClanTierModel`.

### When to use it

- Read the active Campaign's clan-tier bounds, eligibility thresholds, party capacity, or companion capacity after Campaign Models have been resolved.
- Reuse the default calculations while clans are created, XML objects are initialized, renown is increased, or clan-management UI displays progression.
- Change the complete clan-tier policy by supplying a full `ClanTierModel` implementation during Campaign model registration, while keeping existing saves interpretable.

### When not to use it

- Do not treat a Model result as a state mutation. Increase renown through [Clan](../Clan)'s `AddRenown`; change influence through [ChangeClanInfluenceAction](../../campaign-ext/ChangeClanInfluenceAction), preserving tier writes and event dispatch.
- Do not query it before `Campaign.Current.Models` is initialized, while a clan leader is still being restored, or after the Campaign has been destroyed.
- Do not pass arbitrary integers to `GetRequiredRenownForTier`. The default implementation indexes a seven-element array directly; negative values, values above 6, and maximum-tier `Tier + 1` lookups can throw.

## Lifecycle and dependency graph

- Registration upstream: [SandBoxManager](../SandBoxManager) creates and registers the default implementation; [CampaignGameStarter](../CampaignGameStarter) stores the model list.
- Runtime holder: [GameModels](../GameModels) resolves `ClanTierModel` during construction; [Campaign](../Campaign) exposes it through `Campaign.Current.Models`.
- State boundary: [Clan](../Clan) owns `Tier`, `Renown`, `Leader`, and `IsMinorFaction`; `AddRenown`, `ResetClanRenown`, and `Deserialize` call the active `ClanTierModel`.
- Calculation consumers: [PartySizeLimitModel](../PartySizeLimitModel), [WorkshopModel](../WorkshopModel), and [KingdomCreationModel](../KingdomCreationModel) are read directly by `HasUpcomingTier`; [DiplomacyModel](../DiplomacyModel) and hero-spawn logic consume party limits.
- Concrete consumers: [ClanManagementVM](../../viewmodel/ClanManagementVM) and Campaign UI tooltips read `HasUpcomingTier`; [HeroSpawnCampaignBehavior](../HeroSpawnCampaignBehavior) uses party limits, while eligibility logic reads the mercenary and vassal thresholds.
- Events and mutations: [CampaignEvents](../CampaignEvents) receives tier-change notifications; influence is written through [ChangeClanInfluenceAction](../../campaign-ext/ChangeClanInfluenceAction), not by this Model.
- Save boundary: this class has no visible save fields, but its results affect clan tier, renown interpretation, party count, and companion state. For save compatibility, also read [SaveManager](../../save-system/SaveManager); do not silently change the valid tier range or threshold meaning after a save is loaded.

## Default rules

### Tier and eligibility properties

| Member | Default | Purpose and timing |
|---|---:|---|
| `MinClanTier` | `0` | Lower bound used by tier calculation and eligibility checks. |
| `MaxClanTier` | `6` | Upper bound used by `CalculateTier` and next-tier previews. |
| `MercenaryEligibleTier` | `1` | Eligibility logic can allow mercenary service at this tier. |
| `VassalEligibleTier` | `2` | Eligibility logic can allow vassalage at this tier. |
| `BannerEligibleTier` | `0` | Map visuals use it when deciding whether the player clan's banner qualifies. |
| `RebelClanStartingTier` | `3` | Used by `Clan.CreateSettlementRebelClan` when creating a rebel clan. |
| `CompanionToLordClanStartingTier` | `2` | Used by `Clan.CreateCompanionToLordClan` when a companion becomes a noble clan leader. |

The default renown-floor array is `{ 0, 50, 150, 350, 900, 2350, 6150 }`; the index is tier `0` through `6`. It is not a save field or a public configuration object that a mod can mutate directly.

### Initial values and tier calculation

#### `CalculateInitialRenown(Clan clan)`

Uses `clan.Tier` to select the current and next renown floors, then calls `MBRandom.RandomInt` to produce an initial value within that interval. At the maximum tier it uses `6150 + 1500` as the upper-bound source. The source calls it from `Clan.Deserialize` after reading an XML clan object. That makes it an object-initialization rule; it should not be documented as “re-randomizing renown every time an existing save is opened.”

The caller must keep `clan.Tier` in `0..6`. An out-of-range tier fails at the array access.

#### `CalculateInitialInfluence(Clan clan)`

Uses the exact formula `150 + MBRandom.RandomInt((int)(CalculateInitialRenown(clan) / 15f)) + MBRandom.RandomInt(MBRandom.RandomInt(MBRandom.RandomInt(400)))` to produce initial influence. `ClanVariablesCampaignBehavior` reads this result only for specific non-player clans during new-game creation, then writes it through `ChangeClanInfluenceAction.Apply`. This method does not mutate `clan.Influence` or broadcast an influence event.

#### `CalculateTier(Clan clan)`

Starts at `MinClanTier`, compares `clan.Renown` with each renown floor, and returns the last satisfied tier. After adding positive renown, `Clan.AddRenown` calls it and writes `Tier` only when the result is above the old tier, then dispatches the tier-change event. `ResetClanRenown` clears renown, recalculates the tier, and dispatches without notification. The Model calculation itself never writes `Clan.Tier`.

### Next-tier preview and capacity

#### `HasUpcomingTier(Clan clan, out TextObject extraExplanation, bool includeDescriptions = false)`

When `clan.Tier < MaxClanTier`, it returns `(ExplainedNumber, true)`; at the maximum tier it returns an empty `ExplainedNumber` and `false`. The next-tier benefit compares:

- the party-limit difference between `GetPartyLimitForTier(clan, clan.Tier + 1)` and the current tier;
- the tier-only companion-limit difference from private `GetCompanionLimitFromTier`, excluding leader perk bonuses;
- `Campaign.Current.Models.PartySizeLimitModel.GetNextClanTierPartySizeEffectChangeForHero(clan.Leader)`;
- the difference between `Campaign.Current.Models.WorkshopModel.GetMaxWorkshopCountForClanTier` for the current and next tier.

When the next tier reaches the mercenary, vassal, or kingdom-creation threshold, `extraExplanation` receives the corresponding localized `TextObject`. `includeDescriptions` only controls whether `ExplainedNumber` records descriptions. Clan-management view models and renown tooltips consume this result, so do not call it while the leader or dependent Models are unavailable.

#### `GetRequiredRenownForTier(int tier)`

Returns `{ 0, 50, 150, 350, 900, 2350, 6150 }[tier]` directly. `Clan.RenownRequirementForNextTier` passes `Tier + 1`, so callers must confirm `Tier < MaxClanTier`; the maximum tier has no next lookup.

#### `GetPartyLimitForTier(Clan clan, int clanTierToCheck)`

For ordinary clans, the base party limit is `1` below tier 3, `2` at tiers 3-4, and `3` at tiers 5-6. For minor factions, the checked tier is clamped to `1..4`. The method then adds `DefaultPerks.Leadership.TalentMagnet.SecondaryBonus` when the leader has that perk, and rounds the result. `Clan.WarPartyLimit`, hero spawning, and diplomacy strength estimates consume it.

`clanTierToCheck` is the tier being evaluated and need not equal `clan.Tier`. Do not pass unchecked UI input or mistake the returned number for a command that creates a party.

#### `GetCompanionLimit(Clan clan)`

Starts at `clan.Tier + 3`, then checks `DefaultPerks.Leadership.WePledgeOurSwords` and `DefaultPerks.Charm.Camaraderie` on the leader, adding their `PrimaryBonus` and `SecondaryBonus`. The source calls `clan.Leader.GetPerkValue` without a null check, so call it only after the clan and leader are initialized and outside destruction or save-restoration gaps.

## Real acquisition and usage examples

### Read the active Model and guard the threshold boundary

This uses the active Campaign acquisition path and does not create a parallel Model. It excludes the maximum tier before asking for `Tier + 1`.

```csharp
Campaign campaign = Campaign.Current;
if (campaign != null && campaign.Models != null && Clan.PlayerClan != null)
{
    ClanTierModel clanTierModel = campaign.Models.ClanTierModel;
    Clan playerClan = Clan.PlayerClan;
    if (clanTierModel != null && playerClan.Tier >= clanTierModel.MinClanTier && playerClan.Tier < clanTierModel.MaxClanTier)
    {
        int nextTierRenown = clanTierModel.GetRequiredRenownForTier(playerClan.Tier + 1);
        int partyLimit = clanTierModel.GetPartyLimitForTier(playerClan, playerClan.Tier);
        int companionLimit = clanTierModel.GetCompanionLimit(playerClan);
    }
}
```

### Read the next-tier explanation instead of guessing that one exists

```csharp
Campaign campaign = Campaign.Current;
if (campaign != null && campaign.Models != null)
{
    Clan playerClan = Clan.PlayerClan;
    ClanTierModel clanTierModel = campaign.Models.ClanTierModel;
    if (playerClan != null && clanTierModel != null)
    {
        (ExplainedNumber changes, bool hasUpcomingTier) = clanTierModel.HasUpcomingTier(playerClan, out TextObject explanation, includeDescriptions: true);
        if (hasUpcomingTier)
        {
            int nextTier = playerClan.Tier + 1;
        }
    }
}
```

If the goal is to change influence, do not write back the result of `CalculateInitialInfluence`. With a valid `Clan` and Campaign context, use `ChangeClanInfluenceAction.Apply` so the game's mutation and persistence boundaries remain intact. If a mod grants renown to a hero, use [GainRenownAction](../../campaign-ext/GainRenownAction)'s `Apply(Hero hero, float renownValue, bool doNotNotify = false)`: it calls `hero.Clan.AddRenown` and then dispatches `OnRenownGained` instead of bypassing the tier and event path.

## Crash, save, and replacement risks

1. **Array bounds:** the default implementation uses clan tier as an array index. Negative tiers, tiers above `MaxClanTier`, and maximum-tier `Clan.RenownRequirementForNextTier` calls can fail.
2. **Missing leader:** `GetCompanionLimit` dereferences `clan.Leader` without a guard, and `HasUpcomingTier` passes the leader to `PartySizeLimitModel`. Avoid these paths while a clan is being created, destroyed, or restored from a save.
3. **Unresolved Model dependencies:** `HasUpcomingTier` depends on `PartySizeLimitModel`, `WorkshopModel`, and `KingdomCreationModel`. Calling it too early or omitting one during replacement can cause null references or incorrect UI previews.
4. **Late replacement:** `SandBoxManager` registers the implementation and the `GameModels` constructor resolves and stores `ClanTierModel`. After Campaign startup, do not assume adding another implementation will update the already-resolved facade.
5. **Save semantic drift:** this class has no save fields of its own, but changing renown floors, tier bounds, or capacity rules changes the meaning of existing `Clan.Tier`, party counts, and eligibility. Keep old tiers in the valid range and migrate deliberately when the rules change across versions.
6. **Treating calculation as mutation:** the Model does not update tier, renown, influence, parties, or companions. Direct state writes that bypass `Clan` operations, Actions, and `CampaignEvents` can make UI, behaviors, and save data disagree.

## Navigation

### ↑ Parent

- [Campaign API index](../)
- [ClanTierModel contract](../ClanTierModel)
- [Version home](../../)

### ↔ Siblings and related types

- [Clan](../Clan)
- [GameModels](../GameModels)
- [CampaignGameStarter](../CampaignGameStarter)
- [PartySizeLimitModel](../PartySizeLimitModel)
- [WorkshopModel](../WorkshopModel)
- [KingdomCreationModel](../KingdomCreationModel)
- [CampaignEvents](../CampaignEvents)
- [ChangeClanInfluenceAction](../../campaign-ext/ChangeClanInfluenceAction)
- [GainRenownAction](../../campaign-ext/GainRenownAction)
- [ClanManagementVM](../../viewmodel/ClanManagementVM)
- [MBGameModel](../../core-extra/MBGameModel)
- [Crash boundaries](../../../architecture/crash-boundary)
