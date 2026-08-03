---
title: "PartyHealingModel"
description: "The replaceable campaign policy for party, prisoner, and hero healing results, without directly changing hit points or rosters."
---

# PartyHealingModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PartyHealingModel : MBGameModel<PartyHealingModel>`
**Base:** `MBGameModel<PartyHealingModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyHealingModel.cs`
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyHealingModel.cs`

## One-line responsibility

`PartyHealingModel` turns party type, surgeon, supplies, settlement, and battle context into healing, survival, and post-battle recovery results. It answers how much or how likely, but never writes `Hero.HitPoints`, rosters, or death state itself.

## Mental model

This is the policy layer between [PartyBase](../../campaign/PartyBase) state and the campaign healing behavior. [GameModels](../GameModels) resolves the registered instance; `PartyBase.HealingRateForMemberRegulars`, hero healing properties, and `PartyHealCampaignBehavior` then consume its results. `ExplainedNumber` may carry starvation, settlement, skill, and perk explanations, but those explanations do not change call timing.

Regular members, heroes, and prisoners use separate daily methods, while map-simulation casualties use `GetSurvivalChance`. A replacement therefore has to preserve the distinction between regulars, heroes, prisoners, siege bombardment, and battle-end healing. The model must remain read-only: the behavior applies healing through `Hero.Heal` or roster logic after the calculation.

## When to use and when not to

- Replace the model when changing healing speed, survival probability, medicine XP, or battle-end hero recovery; register the replacement during campaign startup.
- Read the current policy through `Campaign.Current.Models.PartyHealingModel`; do not construct `DefaultPartyHealingModel` and bypass the registry.
- Do not mutate rosters, food, hit points, or death state, or call an Action from `GetDailyHealing*` or `GetSurvivalChance`. These methods run during previews, simulation, and repeated campaign ticks.
- Do not treat `isPrisoner` as a global statement about the party. Callers query the same `PartyBase` for members and prisoners separately, and the result must describe the requested category only.

## Dependencies

#### Upstream

- [Campaign](../../campaign/Campaign) exposes the registered policy through `Campaign.Current.Models`.
- [PartyBase](../../campaign/PartyBase) supplies members, prisoners, starvation, settlement, and map-event context.
- [MobileParty](../../campaign/MobileParty) supplies the surgeon, moving/garrison/sea state, perks, and morale.
- [Hero](../../campaign/Hero) supplies hit points, age, armor, and hero-specific healing context.

#### Downstream

- `PartyHealCampaignBehavior` consumes the result during hourly, quarter-daily, settlement, and battle-end events.
- `MapEventSide` uses survival probability for simulated casualties; post-battle hero healing enters the [Hero](../../campaign/Hero) healing path again.
- [PartyMoraleModel](../PartyMoraleModel) and [PartyWageModel](../PartyWageModel) are adjacent policies. Starvation and unpaid wages may affect morale, but PartyHealingModel must not write morale.
- [GameModels](../GameModels) is the registration and runtime-resolution boundary.

## Members and timing

| Member | Purpose and timing | Side-effect boundary |
|---|---|---|
| `GetSurgeryChance(PartyBase)` | Computes the effective surgeon's chance before map casualty handling. | Returns a probability; it does not perform surgery. |
| `GetSurvivalChance(PartyBase, CharacterObject, DamageTypes, bool, PartyBase)` | Computes simulated survival from damage type, level, armor, medicine perks, and the enemy surgeon. | Does not call `KillCharacterAction` or edit wounds. |
| `GetSkillXpFromHealingTroop(PartyBase)` | Converts healed troop counts into Medicine experience for the skill manager. | Returns a coefficient only. |
| `GetDailyHealingForRegulars(PartyBase, bool, bool)` | Computes daily healing for regular members or regular prisoners; `includeDescriptions` controls explanation lines. | Does not edit `TroopRoster`. |
| `GetDailyHealingHpForHeroes(PartyBase, bool, bool)` | Computes daily hit-point healing for heroes or hero prisoners; a null party supplies the base for unassigned heroes. | The behavior splits the result into hourly work; the model does not write HP. |
| `GetHeroesEffectedHealingAmount(Hero, float)` | Converts a healing rate into the perk-adjusted, probabilistically rounded amount used by `Hero.Heal`. | Does not call `Heal` itself. |
| `GetSiegeBombardmentHitSurgeryChance(PartyBase)` | Supplies the siege-bombardment medicine-perk chance during casualty selection. | Does not select the victim. |
| `GetBattleEndHealingAmount(PartyBase, Hero)` | Computes hero recovery after a victorious map battle. | The returned explanation is applied by the healing behavior. |

## Real acquisition and query example

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;

Campaign campaign = Campaign.Current;
PartyBase party = MobileParty.MainParty.Party;
PartyHealingModel healing = campaign.Models.PartyHealingModel;

ExplainedNumber regularRate = healing.GetDailyHealingForRegulars(
    party,
    isPrisoners: false,
    includeDescriptions: true);
ExplainedNumber heroRate = healing.GetDailyHealingHpForHeroes(
    party,
    isPrisoners: false,
    includeDescriptions: true);
```

This follows the same call path as `PartyBase.HealingRateForMemberRegularsExplained`. To change the policy, register a `PartyHealingModel` subclass during `CampaignGameStarter` setup so [Campaign](../../campaign/Campaign) resolves it while building `GameModels`.

## Risks and debugging boundaries

1. Calling `Hero.Heal`, `KillCharacterAction`, or `GiveGoldAction` from the model turns a read-only calculation into a repeated write. Map simulation and UI previews may invoke it again, causing duplicate healing, events, or save corruption.
2. A negative regular-healing result is a valid injury/adverse-condition result, and callers use it to reduce hit points. Never return an uninitialized `ExplainedNumber` or an unbounded random result.
3. A replacement for `GetSurvivalChance` must preserve blunt-damage rules, difficulty settings, hero age, and the caller's `CanDie` contract; otherwise non-lethal blunt damage and player-character protection change unexpectedly.
4. Confirm that the campaign and party exist before reading `Campaign.Current`, `MobileParty.MainParty`, or perks. Main menu and early save-loading paths cannot assume those objects are ready.
5. A model replacement does not save mutable state automatically. Put persistent custom state in a separate [CampaignBehaviorBase](../CampaignBehaviorBase) with a save contract instead of a mutable dictionary inside the model.

## Navigation

- [Parent: campaign-ext](./)
- [Models family guide](../models)
- [Sibling: PartyWageModel](../PartyWageModel) · [PartyMoraleModel](../PartyMoraleModel)
- [Related: Campaign](../../campaign/Campaign) · [GameModels](../GameModels) · [PartyBase](../../campaign/PartyBase)
