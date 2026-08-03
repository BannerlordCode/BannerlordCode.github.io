---
title: "PartyTroopUpgradeModel"
description: "The replaceable campaign policy for troop-upgrade eligibility, item and perk requirements, XP and gold costs, and weighted branch selection."
---

# PartyTroopUpgradeModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartyTroopUpgradeModel : MBGameModel<PartyTroopUpgradeModel>`  
**Base:** `MBGameModel<PartyTroopUpgradeModel>`  
**Source:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyTroopUpgradeModel.cs`  
**Default implementation:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyTroopUpgradeModel.cs`

## Responsibility

This model turns a `CharacterObject` upgrade tree, party resources, and leader capabilities into answers for eligibility, requirements, cost, and branch preference. It does not edit a `TroopRoster`, gold, items, or hero skills.

## Mental model

This is the campaign-layer policy between troop data/party state and the code that performs an upgrade. Once the campaign registers its models, `GameModels` exposes the instance; `PartyCharacterVM`, the encyclopedia troop tree, and `PartyUpgraderCampaignBehavior` all query the same `Campaign.Current.Models.PartyTroopUpgradeModel`. The model has no save-data lifecycle of its own and should not mutate world state while answering a query.

An upgrade request starts with a target from `CharacterObject.UpgradeTargets`, then checks that the target remains in the tree, that the required item category is present, and that any required perk is available. The model then supplies XP, gold, and branch weights. The player party screen uses these values to preview and execute upgrades. Background parties are processed by `PartyUpgraderCampaignBehavior` on a daily tick or after a map battle; only after reading the model does that behavior subtract roster XP, change roster counts, award leader skill XP, and charge gold through `GiveGoldAction`.

Replacing this model therefore replaces the rule, not the upgrade button. Let the existing Party UI, Behavior, or a dedicated Action perform a world change. Do not call `TroopRoster.AddToCounts`, charge gold, or trigger an upgrade from a model method: the same result can be queried repeatedly by UI refreshes, daily ticks, and battle settlement.

## When to use and when not to

- Replace this model when changing troop eligibility, required items or perks, XP/gold cost, or the preference among multiple `UpgradeTargets`; register the replacement during campaign startup.
- Read the active rule for a menu, hint, or custom preview through `Campaign.Current.Models.PartyTroopUpgradeModel`; do not duplicate the vanilla formulas.
- Do not treat `GetGoldCostForUpgrade` as a charge or `GetXpCostForUpgrade` as roster XP already removed. Both return query results only.
- Do not construct an arbitrary `CharacterObject` target outside `CharacterObject.UpgradeTargets`. The default implementation treats an out-of-tree target as invalid, and the `CharacterObject` convenience wrappers assume a valid index.
- Do not treat `CanPartyUpgradeTroopToTarget` as the only gate in every context. Vanilla `PartyUpgraderCampaignBehavior` adds party-culture and bandit-occupation checks outside the model, while the player UI also applies gold, roster-count, and UI-disabled checks.

## Dependencies

### Upstream

- [Campaign](../../campaign/Campaign/) and [GameModels](../GameModels/) provide the registered model; do not read it before the campaign model set has been assembled.
- [CharacterObject](../../campaign/CharacterObject/) supplies `UpgradeTargets`, tier, level, culture, occupation, hero status, ranged/mounted flags, and `UpgradeRequiresItemFromCategory`.
- [PartyBase](../../campaign/PartyBase/) supplies `ItemRoster`, `MobileParty`, leader, and party identity; [TroopRoster](../TroopRoster/) stores the pending troop and its XP.
- [ItemRoster](../ItemRoster/) and [ItemCategory](../../core-extra/ItemCategory/) support item-category requirements; [PerkObject](../PerkObject/) represents upgrade gates and cost modifiers.
- [PartyWageModel](../PartyWageModel/) supplies `GetTroopRecruitmentCost`, which the default gold formula uses for the before/after recruitment-price difference.

### Downstream

- [PartyUpgraderCampaignBehavior](../PartyUpgraderCampaignBehavior/) listens to [CampaignEvents](../CampaignEvents/) `DailyTickPartyEvent` and map-event completion, then uses eligibility, cost, and weights before mutating `TroopRoster`.
- The player-party `PartyCharacterVM` reads cost, item, and perk results; the encyclopedia troop tree reads perk results to display the alternative-upgrade requirement for bandit-to-non-bandit branches.
- `PartyUpgraderCampaignBehavior` calls `SkillLevelingManager.OnUpgradeTroops` and uses [GiveGoldAction](../GiveGoldAction/) when it performs an upgrade. Those are side-effecting consumers, not model responsibilities.
- If a custom upgrade policy needs long-lived state, store it through [CampaignBehaviorBase](../CampaignBehaviorBase/) and its save contract; the model itself has no `SyncData` method.

## Members and timing

### `CanPartyUpgradeTroopToTarget`

Call this when a UI or behavior needs the final model-level answer for upgrading a troop to a particular target. The default combines `IsTroopUpgradeable`, `upgradeableCharacter.UpgradeTargets.Contains(upgradeTarget)`, the item check, and the perk check. It therefore rejects heroes, out-of-tree targets, missing required items, and missing required perks. It returns a Boolean only: it does not charge resources and does not include every outer party, occupation, or UI gate.

### `IsTroopUpgradeable`

Call this while scanning a `TroopRoster`, before evaluating its upgrade targets. The default allows only `!character.IsHero` with `character.UpgradeTargets.Length != 0`; `party` does not change that default result. A hero is not treated as an upgradeable troop by the vanilla party-upgrade path even if other character relationships exist.

### `DoesPartyHaveRequiredItemsForUpgrade`

Call this during target validation and before building an upgrade hint. The default reads `upgradeTarget.UpgradeRequiresItemFromCategory`: with no category requirement it returns `true`; with one, it loops over `party.ItemRoster` and sums entries whose `EquipmentElement.Item.ItemCategory` matches. Any positive total is enough. This method answers presence only; it does not reserve or remove items. The player upgrade path consumes items when the upgrade is actually applied.

### `DoesPartyHaveRequiredPerksForUpgrade`

Call this while showing requirements, calculating an upgradeable count, or checking a bandit branch. The default sets `requiredPerk` to `null`; only a bandit source troop upgrading to a non-bandit target receives `DefaultPerks.Leadership.VeteransRespect`, checked with `party.MobileParty.HasPerk(requiredPerk, checkSecondaryRole: true)`. Other upgrade paths require no perk. Read the `out` value to explain the missing requirement instead of using only the Boolean.

### `GetGoldCostForUpgrade`

Call this for a Party UI preview or while the behavior calculates how many troops can be upgraded. The default uses [PartyWageModel](../PartyWageModel/) `GetTroopRecruitmentCost` with `withoutItemCost: true` for the target and source. It divides their difference by 2 for ordinary troops or by 3 for mercenary/gangster troops, then applies Steward `SoundReserves`, Bow `RenownedArcher` for ranged troops, the Khuzait `KhuzaitRecruitUpgradeFeat` for mounted troops, and Steward `Contractors` for mercenary/gangster troops. The `ExplainedNumber` result exposes the reasons to UI; it does not change `PartyTradeGold`.

### `GetXpCostForUpgrade`

Call this for the upgrade button, roster capacity calculation, and background-upgrade filtering. When the target is non-null and belongs to `characterObject.UpgradeTargets`, the default adds a per-tier cost from source tier + 1 through target tier: 100 for tier 1 or below, 300 for tier 2, 550 for tier 3, 900 for tier 4, 1300 for tier 5, 1700 for tier 6, and 2100 for tier 7. Higher tiers use the integer result of `1.333f * (upgradeTarget.Level + 4)^2`. An invalid target returns `100000000`, a rejection sentinel rather than a useful game cost.

### `GetSkillXpFromUpgradingTroops`

This contract entry supplies a skill-XP amount for upgrading a number of troops. The default returns `(troop.Level + 10) * numberOfTroops`. In the inspected 1.4.5 call path, however, `DefaultSkillLevelingManager.OnUpgradeTroops` directly uses `GetXpCostForUpgrade` multiplied by an occupation coefficient to award Leadership or Roguery XP; it does not call this member. A custom implementation must not assume that overriding this method alone changes vanilla post-upgrade skill XP.

### `GetUpgradeChanceForTroopUpgrade`

Call this when a source troop has multiple upgrade targets and the behavior builds its weighted candidate list. The default starts every branch at `1f`. If the leader has a `PreferredUpgradeFormation` and the target tree contains that formation, the branch receives `9999f`. Only when there is no leader formation preference does the model combine the leader's `RandomValue` (or `PartyBase.Id` when there is no leader) with the troop's deterministic string hash and tier; a matching target index receives `9999f`. If a preference exists but no target matches it, the model does not fall back to the hash and keeps the branch at `1f`. `PartyUpgraderCampaignBehavior` consumes these weights together with `MBRandom.RandomFloat`, so 9999 is a strong preference, not an absolute percentage. The supplied index must be inside `UpgradeTargets`.

## Default implementation call chain

For non-player parties, `PartyUpgraderCampaignBehavior.RegisterEvents` hooks the daily-party tick and map-event-ended callback. It skips the main party or inactive parties, then reads troop XP, wounded count, wage limit, gold, items, perks, and model weights. Once a target is selected, it subtracts XP from the `TroopRoster`, removes the source troop, adds the target troop, calls the skill manager, and charges through [GiveGoldAction](../GiveGoldAction/). The main player party uses the Party screen roster-transaction path instead, so the background behavior's exclusions must not be copied into player UI code.

These queries may run several times during one UI refresh and again before the actual upgrade. A replacement should return deterministic, explainable, bounded values and should not depend on frame time, random side effects, or mutable counters stored in the model instance.

## Real query example

The following obtains the active campaign model and the first upgrade target from the main party roster. It reads the policy only; it does not execute an upgrade:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;

public static void InspectFirstPartyUpgrade()
{
    PartyBase party = PartyBase.MainParty;
    PartyTroopUpgradeModel model = Campaign.Current.Models.PartyTroopUpgradeModel;
    if (party.MemberRoster.Count == 0)
    {
        return;
    }

    TroopRosterElement element = party.MemberRoster.GetElementCopyAtIndex(0);
    CharacterObject troop = element.Character;
    if (troop == null || troop.UpgradeTargets.Length == 0)
    {
        return;
    }

    CharacterObject target = troop.UpgradeTargets[0];
    bool eligible = model.IsTroopUpgradeable(party, troop);
    bool canUpgrade = model.CanPartyUpgradeTroopToTarget(party, troop, target);
    bool hasItems = model.DoesPartyHaveRequiredItemsForUpgrade(party, target);
    bool hasPerks = model.DoesPartyHaveRequiredPerksForUpgrade(party, troop, target, out PerkObject requiredPerk);
    int xpCost = model.GetXpCostForUpgrade(party, troop, target);
    var goldCost = model.GetGoldCostForUpgrade(party, troop, target);
    float branchWeight = model.GetUpgradeChanceForTroopUpgrade(party, troop, 0);
}
```

`eligible`, `canUpgrade`, `hasItems`, `hasPerks`, and the costs are snapshots of current state. Continue to let the Party screen or `PartyUpgraderCampaignBehavior` change the roster, consume resources, and award skill XP.

## Risks and debugging boundaries

1. Reading `Campaign.Current.Models.PartyTroopUpgradeModel` before campaign model registration can produce an unassembled model or a startup null reference. Register replacements during the campaign-startup `CampaignGameStarter`/`IGameStarter.AddModel` phase.
2. Passing a target outside `UpgradeTargets` to a cost method returns the XP sentinel; passing an invalid index to `CharacterObject.GetUpgradeGoldCost`-style wrappers can throw or select the wrong target. Obtain the target from the same array and validate the index first.
3. Checking only `CanPartyUpgradeTroopToTarget` while ignoring the outer bandit-culture, bandit-occupation, wage-limit, gold, wounded-count, or UI-disabled checks makes custom UI disagree with the vanilla execution path.
4. Treating the item Boolean as permission to consume an arbitrary quantity is unsafe. The default model only requires a positive category count, while the player execution path removes items for the selected upgrade count; changing one side without the other desynchronizes preview and inventory state.
5. Writing `TroopRoster`, gold, or skill XP from a model can run repeatedly during daily ticks, battle completion, and UI refreshes, causing duplicate upgrades, negative resources, or roster/gold disagreement after reload. Models do not persist state; put durable state in a Behavior with an explicit `SyncData` contract.
6. Upgrade weights are not a saved choice. Treating `9999f` as an absolute probability, or adding unstable randomness to a replacement, can make preview and background selection choose different branches for the same party.

## Navigation

- [Parent: campaign-ext](../)
- [Models family guide](../models/)
- [Siblings: PartyTrainingModel](../PartyTrainingModel/) · [PartyTransitionModel](../PartyTransitionModel/) · [PartyWageModel](../PartyWageModel/)
- [Related: CharacterObject](../../campaign/CharacterObject/) · [PartyBase](../../campaign/PartyBase/) · [Campaign](../../campaign/Campaign/) · [CampaignEvents](../CampaignEvents/)
