---
title: "ClanTierModel"
description: "The Campaign rule contract for clan tiers, renown thresholds, eligibility, party limits, and companion limits."
---
# ClanTierModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class ClanTierModel : MBGameModel<ClanTierModel>`
**Base:** `MBGameModel<ClanTierModel>`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ClanTierModel.cs`

## One-line responsibility

Provides the rules that calculate clan tier bounds, renown thresholds, creation-time values, eligibility, party capacity, and companion capacity.

## Overview

`ClanTierModel` is a Campaign rule model. It defines what should be calculated; it does not directly store or mutate `Clan.Tier`, `Clan.Renown`, or `Clan.Influence`. [Clan](../Clan) owns that state. For example, `Clan.AddRenown` first increases renown, then calls `CalculateTier`; when the tier increases, the change is sent through the [CampaignEvents](../CampaignEvents) dispatch chain as `OnClanTierChanged`.

The default 1.4.5 implementation is [DefaultClanTierModel](../DefaultClanTierModel). [SandBoxManager](../SandBoxManager) adds it to [CampaignGameStarter](../CampaignGameStarter) during Campaign model registration, and [GameModels](../GameModels) resolves the `ClanTierModel` property during initialization. A mod should read the live instance through `Campaign.Current.Models.ClanTierModel`, rather than creating a separate instance and expecting the game to use it.

## Mental model

Treat this as the replaceable calculator at the clan-rules layer: `Clan` is the state and write boundary, `ClanTierModel` makes threshold and capacity decisions, and UI, spawning behaviors, and eligibility checks are readers. To change the rules, register a complete derived model during the Campaign model lifecycle. To change one clan's runtime state, use the relevant [Action](../../campaign-ext/ChangeClanInfluenceAction) or public `Clan` operation and preserve the existing event path.

### When to use it

- Read the current Campaign's tier bounds, eligibility thresholds, next-tier renown, or capacity.
- Reuse the current model while a clan is created or loaded, renown is increased, or tier progress is displayed.
- Implement a complete, save-compatible tier policy by deriving from this class and replacing the default during Campaign model registration.

### When not to use it

- Do not use it to write `Tier`, `Renown`, or `Influence`; the model contract has no state-writing API.
- Do not read `Campaign.Current.Models.ClanTierModel` before Campaign models are initialized, and do not assume a late replacement updates every already-resolved holder.
- Do not treat `GetRequiredRenownForTier` as an arbitrary integer lookup. The default implementation indexes an array, so callers must constrain the input to a valid tier range.

## Lifecycle and dependency graph

```text
SandBoxManager
  -> CampaignGameStarter.AddModel(new DefaultClanTierModel())
  -> GameModels.Initialize() / GetGameModel<ClanTierModel>()
  -> Campaign.Current.Models.ClanTierModel
  -> Clan, CampaignBehaviors, Helpers, UI, and SandBox read the rules
```

- Registration upstream: [CampaignGameStarter](../CampaignGameStarter) stores the model list; generic `AddModel` initializes the new model from the existing model of the same type before adding it.
- Live holder: the `ClanTierModel` property on [GameModels](../GameModels) is resolved during initialization; [Campaign](../Campaign) provides the active Campaign context.
- State object: [Clan](../Clan) exposes `Tier`, `Renown`, `Leader`, and `IsMinorFaction`, and calls this model from `AddRenown` and `ResetClanRenown`.
- Calculation dependencies: the default `HasUpcomingTier` reads [PartySizeLimitModel](../PartySizeLimitModel), [WorkshopModel](../WorkshopModel), and `KingdomCreationModel`.
- Readers: [CampaignEvents](../CampaignEvents) receives tier-change notifications; [CampaignGameStarter](../CampaignGameStarter) and [DefaultClanTierModel](../DefaultClanTierModel) are the key navigation points when replacing the model.

## Public properties

These are rule boundaries, not save fields. The default 1.4.5 values are listed below. A custom implementation may change them, but it must also keep tier indexing and existing-save interpretation consistent.

| Property | Default | Purpose and timing |
|---|---:|---|
| `MinClanTier` | `0` | Lowest tier; eligibility behaviors use it to identify a player clan still at the floor. |
| `MaxClanTier` | `6` | Highest tier; bounds `CalculateTier` and tells `HasUpcomingTier` whether another tier exists. |
| `MercenaryEligibleTier` | `1` | `FactionHelper` uses this threshold when checking whether the player clan can qualify for mercenary service. |
| `VassalEligibleTier` | `2` | `FactionHelper` uses this threshold when checking whether the player clan can offer or accept vassalage. |
| `BannerEligibleTier` | `0` | SandBox map visuals use it when deciding whether the player clan's banner can be shown. |
| `RebelClanStartingTier` | `3` | Written by `Clan.CreateSettlementRebelClan` when a rebel clan is created. |
| `CompanionToLordClanStartingTier` | `2` | Written by `Clan.CreateCompanionToLordClan` when a companion becomes a noble clan leader. |

## Public methods

### CalculateInitialRenown

`public abstract int CalculateInitialRenown(Clan clan)`

Calculates a value for a clan whose tier is already known and whose initial renown must be established. The default implementation indexes its tier-lower-bound array and chooses a random upper bound between the current tier's floor and the next tier's floor, using the maximum-tier floor plus 1500 at the cap. `Clan.Deserialize` calls it after reading the clan tier from XML. This is not a general-purpose recalculation of an existing clan's renown; changing the model can produce a different initial result when the same save or XML is loaded.

### CalculateInitialInfluence

`public abstract int CalculateInitialInfluence(Clan clan)`

Calculates influence for a clan that needs initial influence. The default implementation combines the initial-renown calculation with random terms. `ClanVariablesCampaignBehavior` calls it while restoring clan variables only for non-player clans with a leader, a kingdom-faction leader, and positive renown, then writes the result through `ChangeClanInfluenceAction.Apply`; the model does not perform that write itself.

### CalculateTier

`public abstract int CalculateTier(Clan clan)`

Calculates the tier implied by the clan's current state. The default implementation starts at the minimum and compares `clan.Renown` with each tier floor, returning the last satisfied tier. `Clan.AddRenown` calls it after a positive renown change and writes the result only when it is above the current tier, then dispatches the tier-change event. `Clan.ResetClanRenown` also calls it after clearing renown and dispatches the change without a notification.

### HasUpcomingTier

`public abstract (ExplainedNumber, bool) HasUpcomingTier(Clan clan, out TextObject extraExplanation, bool includeDescriptions = false)`

Reports whether the clan is below the maximum tier and returns both an explained value for benefits of the next tier and a boolean indicating that the next tier exists. The default implementation compares current and next party limits, companion limits, the leader's next clan-tier party-size effect, and workshop count. If the next tier reaches the mercenary, vassal, or kingdom-creation threshold, it returns the corresponding text through `extraExplanation`. `includeDescriptions` is passed to `ExplainedNumber`; the clan-management view model and renown tooltip call this method for display.

### GetRequiredRenownForTier

`public abstract int GetRequiredRenownForTier(int tier)`

Returns the renown floor for entering the specified tier. The default implementation returns the corresponding element of `{ 0, 50, 150, 350, 900, 2350, 6150 }`. `Clan.RenownRequirementForNextTier` calls it with `Tier + 1`, so callers must first confirm `Tier < MaxClanTier`; at the maximum tier that convenience property would request an out-of-range index.

### GetPartyLimitForTier

`public abstract int GetPartyLimitForTier(Clan clan, int clanTierToCheck)`

Calculates how many parties a clan may have at the tier being checked. The default implementation gives ordinary clans a base of `1`, `2`, or `3` for tiers below `3`, below `5`, or at least `5`; minor factions instead clamp the checked tier to `1` through `4`. It then adds the leader's `Talent Magnet` perk and rounds the result. The lord-spawn behavior uses it to decide how many parties can be spawned, and the diplomacy model uses it when estimating clan military strength.

### GetCompanionLimit

`public abstract int GetCompanionLimit(Clan clan)`

Calculates the current companion capacity. The default implementation starts with `clan.Tier + 3` and adds the leader's `We Pledge Our Swords` and `Camaraderie` perks. `Clan.CompanionLimit` exposes this calculation as a convenience property, so call it only after the clan and its leader have been initialized.

## Real acquisition and read examples

The following code reads the actual model registered in the active Campaign and checks the active Campaign, model, clan, and next-tier boundary before querying it. It does not create a parallel model instance.

```csharp
Campaign campaign = Campaign.Current;
if (campaign != null && campaign.Models != null && Clan.PlayerClan != null)
{
    ClanTierModel clanTierModel = campaign.Models.ClanTierModel;
    Clan playerClan = Clan.PlayerClan;
    if (clanTierModel != null && playerClan.Tier < clanTierModel.MaxClanTier)
    {
        int currentTierRenown = clanTierModel.GetRequiredRenownForTier(playerClan.Tier);
        int nextTierRenown = clanTierModel.GetRequiredRenownForTier(playerClan.Tier + 1);
        int partyLimit = clanTierModel.GetPartyLimitForTier(playerClan, playerClan.Tier);
        int companionLimit = clanTierModel.GetCompanionLimit(playerClan);
    }
}
```

For a next-tier preview, use the contract's boolean and `out` explanation instead of assuming that a maximum-tier clan has a next tier:

```csharp
Clan playerClan = Clan.PlayerClan;
ClanTierModel clanTierModel = Campaign.Current.Models.ClanTierModel;
if (playerClan != null && clanTierModel != null)
{
    (ExplainedNumber changes, bool hasNextTier) = clanTierModel.HasUpcomingTier(playerClan, out TextObject explanation, includeDescriptions: true);
    if (hasNextTier)
    {
        int nextTier = playerClan.Tier + 1;
    }
}
```

To replace the policy, add a complete `ClanTierModel` implementation to `CampaignGameStarter` during Campaign model registration so that `GameModels` resolves it during initialization. Do not wait until the Campaign is running or a save has loaded and expect an already-resolved model property or existing clan state to migrate automatically.

## Read versus mutation boundaries

- Read tier, renown floors, capacity, and eligibility through the current `ClanTierModel`.
- Increase or clear clan renown with [Clan](../Clan)'s `AddRenown` / `ResetClanRenown`, preserving tier writes and `OnClanTierChanged` dispatch.
- Change influence with [ChangeClanInfluenceAction](../../campaign-ext/ChangeClanInfluenceAction); do not mistake `CalculateInitialInfluence`'s return value for a write.
- Observe tier changes through [CampaignEvents](../CampaignEvents); model calculations do not broadcast events by themselves.

## Crash, save, and replacement risks

1. `Campaign.Current`, `campaign.Models`, or `ClanTierModel` can be unavailable before startup, during a Campaign transition, or before model resolution. Perform reads after the Campaign lifecycle is ready and guard nullable context objects.
2. The default implementation uses `clan.Tier` as an array index. A negative tier, a tier above `MaxClanTier`, or an unchecked integer passed to `GetRequiredRenownForTier` can throw an index exception. The maximum tier is especially important because `Tier + 1` is not a valid lookup.
3. Default `GetCompanionLimit` directly calls `clan.Leader.GetPerkValue`, while `HasUpcomingTier` passes `clan.Leader` to `PartySizeLimitModel`. Do not call these default paths while the leader is unset, being destroyed, or not yet restored by save loading.
4. Default `HasUpcomingTier` also depends on `PartySizeLimitModel`, `WorkshopModel`, and `KingdomCreationModel`. Calling it too early, or breaking those registrations while replacing the model, can produce null references or inconsistent previews.
5. `SandBoxManager` registers `DefaultClanTierModel`, and `GameModels.Initialize` then resolves and caches the model. A replacement added too late may not affect the resolved `Campaign.Current.Models.ClanTierModel`; changing thresholds after save loading also changes the meaning of tier, capacity, and eligibility. Keep saved tiers in the custom model's valid range and perform explicit migration when a version change requires it.
6. The model has no visible save fields of its own, but its results affect the clan's saved or behaviorally significant tier, renown, influence, party, and companion state. Do not bypass Actions and events with direct field writes, or UI, behaviors, and save data can disagree.

## Navigation

### ↑ Parent

- [Campaign API index](../)
- [Campaign](../Campaign)

### ↔ Siblings and related types

- [Clan](../Clan)
- [GameModels](../GameModels)
- [CampaignGameStarter](../CampaignGameStarter)
- [DefaultClanTierModel](../DefaultClanTierModel)
- [PartySizeLimitModel](../PartySizeLimitModel)
- [WorkshopModel](../WorkshopModel)
- [KingdomCreationModel](../KingdomCreationModel)
- [CampaignEvents](../CampaignEvents)
- [ChangeClanInfluenceAction](../../campaign-ext/ChangeClanInfluenceAction)
