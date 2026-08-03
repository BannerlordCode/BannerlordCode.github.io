---
title: "DefaultPartyTroopUpgradeModel"
description: "The default campaign model for troop-upgrade eligibility, XP/gold costs, requirements, and branch selection."
---
# DefaultPartyTroopUpgradeModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultPartyTroopUpgradeModel : PartyTroopUpgradeModel`  
**Base:** [`PartyTroopUpgradeModel`](../PartyTroopUpgradeModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTroopUpgradeModel.cs` (v1.3.15; the v1.4.5 counterpart is under `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents`)

## One-line job

This model decides whether an ordinary troop has upgrade targets, how much XP and gold an upgrade costs, whether required items/perks exist, and how multiple upgrade branches are selected. It does not deduct gold or XP or replace the roster.

## Mental model

```text
CharacterObject.UpgradeTargets + TroopRoster XP + ItemRoster
              + PartyWageModel / perks / culture / formation
                              |
          Campaign.Current.Models.PartyTroopUpgradeModel
                              |
        conditions, costs, skill XP, branch weights (calculation)
                              |
 PartyUpgraderCampaignBehavior / PartyScreen / UpgradeTargetVM
                              |
    roster replacement, XP/gold deduction, SkillLevelingManager notification
```

The model works on a `current troop -> target in UpgradeTargets` relationship. `IsTroopUpgradeable` only answers whether the character definition has an upgrade path. Actual availability also depends on target membership, items, perks, healthy troop count, XP, wage limit, and party funds. AI upgrading and PartyScreen both query these results, so a replacement must keep the entry-point contracts consistent.

### Use it when

- You need to display upgrade XP, gold, or requirements: read the result from `Campaign.Current.Models.PartyTroopUpgradeModel`.
- You need to change an upgrade gate, cost, or branch preference: register a subclass during `CampaignGameStarter` setup and override only the rule you own.
- You are diagnosing why a troop does not upgrade: inspect `IsTroopUpgradeable`, `UpgradeTargets`, item requirements, and perk requirements in that order instead of looking only at `CanPartyUpgradeTroopToTarget`.

### Do not use it when

Do not call `GiveGoldAction`, `TroopRoster.AddToCounts`, `SetElementXp`, or skill-upgrade events from the model. `PartyUpgraderCampaignBehavior` checks the available count, deducts XP and gold, replaces roster entries, and notifies `SkillLevelingManager`. The model is queried by PartyScreen, AI, and behaviors; a one-time mutation here causes duplicate payment, duplicate upgrades, or a mismatch between UI and save state.

## Dependencies

### Upstream inputs

| Type / system | What it supplies |
| --- | --- |
| [`PartyBase`](../../campaign/PartyBase) / [`MobileParty`](../../campaign/MobileParty) | Party, leader, `ItemRoster`, trade gold, wage limit, perks, culture, and upgrade context. |
| [`CharacterObject`](../../campaign/CharacterObject) | Current/target tier, level, occupation, culture, ranged/mounted flags, `UpgradeTargets`, and required item category. |
| [`TroopRoster`](../TroopRoster) | Current troop count, wounded count, and accumulated XP; the model does not write back to it. |
| [`ItemRoster`](../ItemRoster) / `ItemCategory` | Whether the party has at least one item in the category required by the target. |
| `PartyWageModel` | Recruitment-cost estimates for the source and target with no buyer and no horse-equipment surcharge. |
| `PerkObject` / `DefaultPerks` / `DefaultCulturalFeats` | `SoundReserves`, `RenownedArcher`, `Contractors`, the Khuzait mounted-upgrade feat, and the bandit cross-culture gate. |
| `FormationClass` / `CharacterHelper` | Leader formation preference and troop-tree matching. |

### Downstream consumers

| Consumer | How it uses the model |
| --- | --- |
| [`PartyUpgraderCampaignBehavior`](../PartyUpgraderCampaignBehavior) | Builds `TroopUpgradeArgs`, then performs upgrade based on XP, gold, wage, and branch rules. |
| `PartyScreenLogic` / `UpgradeTargetVM` | Displays maximum XP cost, target requirements, and upgrade choices. |
| `CharacterObject` upgrade helpers | Forward cost queries for a concrete target. |
| `SkillLevelingManager` / `GiveGoldAction` / `TroopRoster` | Are called by the upgrade behavior for real skill, gold, and roster changes. |
| [`PartyWageModel`](../PartyWageModel) | Supplies the source/target recruitment estimates used by upgrade gold cost; it does not perform a world mutation. |

## Public contract

| Member | Default behavior | Important boundary |
| --- | --- | --- |
| `IsTroopUpgradeable` | True for a non-hero with `UpgradeTargets.Length != 0`. | Does not check roster count, XP, items, perks, or gold. |
| `CanPartyUpgradeTroopToTarget` | Combines upgradeability, target membership, item requirements, and perk requirements. | Still a model decision; it does not charge or replace the roster. |
| `GetXpCostForUpgrade` | Accumulates XP for each tier crossed; invalid targets return `100000000`. | A valid target must be non-null and present in the current troop's `UpgradeTargets`. |
| `GetGoldCostForUpgrade` | Uses `PartyWageModel` no-horse estimates for the cost difference, then applies party perk/culture factors. | Returns an `ExplainedNumber`; it does not call a gold action. |
| `GetSkillXpFromUpgradingTroops` | Returns `(troop.Level + 10) * numberOfTroops`. | A skill-XP rule, not an immediate XP grant. |
| `DoesPartyHaveRequiredItemsForUpgrade` | True when the target has no category requirement; otherwise true if the roster has a positive count in that category. | Checks category presence, not one item per troop being upgraded. |
| `DoesPartyHaveRequiredPerksForUpgrade` | Bandit to non-bandit upgrades require `Leadership.VeteransRespect`; other cases have no requirement. | Returns the missing/displayable perk through `out requiredPerk`. |
| `GetUpgradeChanceForTroopUpgrade` | Usually returns `1`; a preferred formation or deterministic hash can give one target `9999`. | `9999` is a selection weight/priority, not a 999900% probability. |

## Default calculations

### Eligibility and composition

`IsTroopUpgradeable` has only two conditions: the `CharacterObject` is not a hero and it has at least one `UpgradeTarget`. It is a fast first filter, not proof that the party currently has healthy troops, XP, money, or equipment.

`CanPartyUpgradeTroopToTarget` composes four checks through the currently registered `PartyTroopUpgradeModel`:

1. `IsTroopUpgradeable(upgradingParty, upgradeableCharacter)` is true;
2. `upgradeableCharacter.UpgradeTargets` contains `upgradeTarget`;
3. `DoesPartyHaveRequiredItemsForUpgrade` is true;
4. `DoesPartyHaveRequiredPerksForUpgrade` is true.

The source reads those sub-decisions through `Campaign.Current.Models.PartyTroopUpgradeModel`. This is a recursion boundary for replacements: inherit the default and call `base`, or delegate through the `BaseModel` injected during starter setup. Do not read the already replaced property as your own base.

### XP cost

For a valid target, the method loops from the current troop's `Tier + 1` through the target tier and adds the following amount per crossed tier:

| Crossed tier | XP increment |
| ---: | ---: |
| `<= 1` | `100` |
| `2` | `300` |
| `3` | `550` |
| `4` | `900` |
| `5` | `1300` |
| `6` | `1700` |
| `7` | `2100` |
| `> 7` | `int(1.333 * (upgradeTarget.Level + 4)^2)` |

An invalid target (`null` or not in `UpgradeTargets`) returns `100000000`, a rejection sentinel rather than a normal payable cost. PartyScreen also uses the maximum XP cost among valid targets when it builds upgrade information, so changing the formula for one display path can break comparisons.

### Gold cost and the `PartyWageModel` dependency

The default implementation first obtains:

```csharp
PartyWageModel wages = Campaign.Current.Models.PartyWageModel;
int targetCost = wages.GetTroopRecruitmentCost(
    upgradeTarget, buyerHero: null, withoutItemCost: true).RoundedResultNumber;
int sourceCost = wages.GetTroopRecruitmentCost(
    characterObject, buyerHero: null, withoutItemCost: true).RoundedResultNumber;
```

The difference is divided by `2` for ordinary troops and by `3` when the source is a Mercenary or Gangster. The result then receives:

- Steward `SoundReserves` from the party;
- the secondary `RenownedArcher` factor when the source is ranged;
- the Khuzait recruit-upgrade cultural feat when the source is mounted;
- Steward `Contractors` for Mercenary/Gangster sources.

`withoutItemCost: true` excludes only the horse/equipment surcharge; it does not remove the troop's base estimate. The model returns an `ExplainedNumber`; the upgrade behavior owns payment.

### Item and perk requirements

When `UpgradeRequiresItemFromCategory` is null, the item requirement passes. Otherwise the method scans `party.ItemRoster`; one matching `EquipmentElement.Item.ItemCategory` with a positive total is enough. This is not “one item per troop”; the behavior handles upgrade count and payment separately.

There is one default special perk branch: when the source culture is Bandit and the target culture is not, `requiredPerk` is set to `DefaultPerks.Leadership.VeteransRespect`, and the party must have it through the secondary-role check. Other cases set `requiredPerk` to null and return true. The `out` value lets the UI explain the missing requirement.

### Selecting among multiple targets

With no multiple targets or an invalid index, `GetUpgradeChanceForTroopUpgrade` returns `1`. With multiple targets:

- If the leader has a specific `PreferredUpgradeFormation` and the target troop tree contains that formation, the target receives `9999`.
- Otherwise the method mixes the leader's `RandomValue` (or a party-id hash without a leader) with the deterministic hash of the troop string ID, shifts by troop tier, and uses the result modulo target count. Only the matching target receives `9999`.

This makes AI selection repeatable for the same party and troop data instead of rerolling every tick. A custom branch policy should still preserve valid indices and explainable output.

## Real read path

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

PartyBase party = MobileParty.MainParty.Party;
CharacterObject source = party.MemberRoster.GetCharacterAtIndex(0);
CharacterObject target = source.UpgradeTargets[0];
PartyTroopUpgradeModel model = Campaign.Current.Models.PartyTroopUpgradeModel;

bool canUpgrade = model.CanPartyUpgradeTroopToTarget(party, source, target);
int xpCost = model.GetXpCostForUpgrade(party, source, target);
int goldCost = model.GetGoldCostForUpgrade(party, source, target).RoundedResultNumber;
```

This uses the current main-party roster and the source character's real upgrade tree. The caller must still ensure that the roster has an element and that `UpgradeTargets.Length > 0`. These values are suitable for display or diagnosis; they do not replace the official upgrade flow.

## Replacing the default model

Register the model during campaign starter setup. When changing XP cost, leave the other entry points on the default implementation:

```csharp
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public sealed class MyPartyTroopUpgradeModel : DefaultPartyTroopUpgradeModel
{
    public override int GetXpCostForUpgrade(
        PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)
    {
        int baseCost = base.GetXpCostForUpgrade(
            party, characterObject, upgradeTarget);
        return baseCost >= 100000000 ? baseCost : baseCost - 25;
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyPartyTroopUpgradeModel());
}
```

The example preserves the invalid-target sentinel instead of turning rejected input into a negative cost. When wrapping an existing model, use the `BaseModel` supplied by `CampaignGameStarter.AddModel<T>(MBGameModel<T>)`; do not read `Campaign.Current.Models.PartyTroopUpgradeModel` as the already replaced base, or composite methods can recurse.

## Model versus actual upgrade

`PartyUpgraderCampaignBehavior` excludes the main party and inactive parties, computes healthy troop count, limits the count by XP, wage payment limit, and `PartyTradeGold`, then reads gold cost and eligibility. The actual operation then:

1. subtracts upgrade XP from the original roster element;
2. removes the source troop and adds the target through `TroopRoster.AddToCounts`;
3. charges total gold through `GiveGoldAction`;
4. reports the upgrade through `SkillLevelingManager.OnUpgradeTroops`.

PartyScreen also queries the model to display requirements and costs, but a `true` result does not bypass the official upgrade flow. Keep all world mutation in the official caller.

## Risks and crash boundaries

1. **Eligibility is not available count:** the model does not check healthy count, roster XP, wage limit, or party funds; inspect `PartyUpgraderCampaignBehavior` when AI does not upgrade.
2. **Broad item requirement:** the default only requires one item in the target category and does not reserve one per troop; do not treat the boolean as a full inventory settlement.
3. **Cost recursion:** gold cost depends on `PartyWageModel`; when replacing both models, avoid reading each already replaced property as the other model's base.
4. **Sentinel misuse:** `100000000` means an invalid target; validate target membership before displaying or paying a cost.
5. **Weight confusion:** `9999` is a deterministic selection priority, not a percentage; treating it as a probability distorts AI selection.
6. **Direct roster/gold writes:** UI and AI may query the model repeatedly. Calling `GiveGoldAction` or `AddToCounts` here repeats mutations and can desynchronize saves.
7. **Upgrade-tree lifetime:** `CharacterObject` and `UpgradeTargets` should come from registered object data; do not cache targets or compute a static tree before object registration completes.

## Version note

The v1.3.15 and v1.4.5 interfaces, tier XP bands, invalid-target sentinel, gold-cost branches, bandit perk gate, and deterministic branch selection remain consistent. The v1.4.5 source is under `Bannerlord.Source/bin`; decompiler LINQ/local-variable syntax differs, but the calling contract is the same. Check the target version's `PartyUpgraderCampaignBehavior` and PartyScreen callers before shipping a replacement.

## See also

- [Campaign-ext Models family](../models/)
- [`PartyTroopUpgradeModel`](../PartyTroopUpgradeModel)
- [`PartyUpgraderCampaignBehavior`](../PartyUpgraderCampaignBehavior)
- [`PartyBase`](../../campaign/PartyBase)
- [`MobileParty`](../../campaign/MobileParty)
- [`CharacterObject`](../../campaign/CharacterObject)
- [`TroopRoster`](../TroopRoster)
- [`ItemRoster`](../ItemRoster)
- [`PartyWageModel`](../PartyWageModel)
- [`CampaignGameStarter`](../CampaignGameStarter)
