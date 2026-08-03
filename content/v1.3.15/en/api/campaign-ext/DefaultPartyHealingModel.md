---
title: "DefaultPartyHealingModel"
description: "The default campaign model for healing, surgery survival, and post-battle hero recovery."
---
# DefaultPartyHealingModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultPartyHealingModel : PartyHealingModel`  
**Base:** [`PartyHealingModel`](../PartyHealingModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyHealingModel.cs` (v1.3.15; the v1.4.5 counterpart is under `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents`)

## One-line job

This model turns party state, surgeon skill, damage type, starvation, settlement, morale, movement, and Medicine/Athletics perks into healing, surgery survival, and post-battle recovery results. It calculates values only; it does not heal heroes, edit rosters, or award skill XP directly.

## Mental model

```text
PartyBase / MobileParty / Hero / CharacterObject
      + Surgeon / Medicine / Athletics / Settlement / MapEvent state
                         |
            Campaign.Current.Models.PartyHealingModel
                         |
       ExplainedNumber / float / int (calculation only)
                         |
 PartyBase healing properties, PartyHealCampaignBehavior, post-battle Hero.Heal
```

`DefaultPartyHealingModel` is the default `MBGameModel<PartyHealingModel>` implementation. It is registered during campaign starter setup, while runtime callers normally hold the `PartyHealingModel` interface. Regular troops and heroes use separate daily-healing entry points; prisoners, unassigned heroes, garrisons, parties at sea, and raft state take different branches. `ExplainedNumber` descriptions are for UI and diagnosis, not world-state writes.

### Use it when

- You need to display how much a party heals per day: read the matching `ExplainedNumber` from `Campaign.Current.Models.PartyHealingModel`.
- You need to change healing rules: register a `DefaultPartyHealingModel` subclass during `CampaignGameStarter` setup, override only the rule you own, and let `base` retain starvation, settlement, sea, and perk branches.
- You are diagnosing surgery or post-battle recovery: inspect `GetSurvivalChance` and `GetBattleEndHealingAmount` separately; they are not two names for the same healing rate.

### Do not use it when

Do not call `Hero.Heal`, write `HitPoints`, mutate a `TroopRoster`, consume food, or grant Medicine XP from a model override. `PartyHealCampaignBehavior` accumulates model results over campaign time, rounds them, and performs the real `Heal` at the appropriate phase. Side effects in the model cause double healing, duplicate XP, or inconsistent load state. Do not cache a result during module loading when `Campaign.Current`, the party, or a valid character may not exist.

## Dependencies

### Upstream inputs

| Type / system | What it supplies |
| --- | --- |
| [`PartyBase`](../../campaign/PartyBase) / [`MobileParty`](../../campaign/MobileParty) | Party and prisoner rosters, starvation, movement, sea/raft state, garrison, army, settlement, and map-event context. |
| [`Hero`](../../campaign/Hero) / [`CharacterObject`](../../campaign/CharacterObject) | Hero hit points, age, armor, level, tier, party ownership, and perks. |
| `DefaultPerks.Medicine` / `DefaultPerks.Athletics` | `TriageTent`, `WalkItOff`, `BestMedicine`, `SelfMedication`, `PreventiveMedicine`, and related modifiers. |
| `DefaultSkillEffects` / `SkillHelper` | Surgeon and regular/hero healing skill effects. |
| `Settlement` / `MapEvent` / `PartyMoraleModel` | Settlement kind, siege/raid/safety state, village proximity, high-morale threshold, and player-battle context. |
| `ItemRoster` | Food variety, used by `PerfectHealth` and its sea multiplier. |

### Downstream consumers

| Consumer | How it uses the model |
| --- | --- |
| [`PartyBase`](../../campaign/PartyBase) | Forwards `HealingRateForMemberRegulars`, `HealingRateForMemberHeroes`, and their explained properties. |
| [`PartyHealCampaignBehavior`](../PartyHealCampaignBehavior) | Accumulates regular, hero, and prisoner healing by campaign-time frequency; calls `Hero.Heal` after reading battle-end results. |
| Battle casualty/surgery flow | Uses surgery and survival probabilities and may query `GetSkillXpFromHealingTroop` for the healing skill rule. |
| Other campaign models | Share party state as input but do not receive a healing side effect; this model does not own food or gold settlement. |

## Public contract

| Member | Default behavior | Important boundary |
| --- | --- | --- |
| `GetSurgeryChance` | Returns effective surgeon Medicine skill multiplied by `0.0015`. | A probability calculation; it does not mark surgery success or grant XP. |
| `GetSiegeBombardmentHitSurgeryChance` | Returns `Medicine.SiegeMedic.PrimaryBonus` when the party has that perk, otherwise 0. | Only covers the siege-bombardment hit path. |
| `GetSurvivalChance` | Computes survival from damage type, difficulty, surgeon, DoctorsOath, level, armor, and age. | Returns a `0..1` probability; it does not kill or restore a character. |
| `GetSkillXpFromHealingTroop` | Always returns `5`. | A rule value for XP; it does not immediately add XP. |
| `GetDailyHealingForRegulars` | Computes daily healing for regular troops or regular prisoners, including starvation, garrison, movement, settlement, food, army, sea, and raft branches. | `isPrisoners: true` takes the fixed prisoner value `1` and skips regular-party modifiers. |
| `GetDailyHealingHpForHeroes` | Computes daily hero or hero-prisoner recovery; ordinary heroes start at `11`, prisoners at `20`. | Unassigned heroes also use `11`; a starving mobile hero outside a settlement returns `-19`. |
| `GetHeroesEffectedHealingAmount` | Applies `SelfMedication` to a healing rate, then rounds its fraction randomly. | `Effected` is the interface's existing spelling; the method still only returns an integer. |
| `GetBattleEndHealingAmount` | Adds `PreventiveMedicine` missing-HP recovery and attacking-side `WalkItOff` recovery. | The caller passes a positive result to `Hero.Heal`. |

## Default calculations

### Surgery and survival

`GetSurgeryChance` reads Medicine from `party.MobileParty.EffectiveSurgeon`; with no effective surgeon it treats the skill as zero. `GetSiegeBombardmentHitSurgeryChance` returns the perk's primary bonus only for a mobile party that has `Medicine.SiegeMedic`.

The branch order in `GetSurvivalChance` matters:

1. Non-lethal blunt damage, heroes on Very Easy, and the player character on Easy return `1` immediately.
2. For a character in a mobile party, the method starts a denominator at `1` and adds the effective surgeon's skill effect. An enemy with `DoctorsOath` adds the enemy surgeon effect and reports one unsuccessful surgery application to skill leveling.
3. Character level contributes `0.02`; a low-tier regular in a `MapEvent` also receives `PhysicianOfPeople`.
4. Heroes add total armor and a negative age effect, then the denominator is multiplied by `50`. `CheatDeath` and the player-clan death-difficulty multiplier adjust the final probability.
5. A hero prisoner without mobile-party context uses `1 - Age * 0.0035`. Other no-party cases use the denominator formula, with a near-zero denominator returning 0.

The result is clamped before it becomes `1 - deathChance`. A replacement must return a probability, not a percentage, and must keep surgery success separate from post-battle healing.

### Daily healing for regular troops and regular prisoners

Regular prisoners always receive `1`. For non-prisoners, only mobile parties continue through the party calculation:

- A starving ordinary mobile party loses `25%` of its regular count; a starving garrison loses a randomized `10%` only when `SettlementHelper.IsGarrisonStarving` is true.
- Otherwise the base is `5`. A garrison reads the town governor's healing skill; other parties read the regular-troop healing skill.
- A non-garrison, non-militia party uses Medicine `TriageTent` while stationary. On land while moving it uses Medicine and Athletics `WalkItOff`. High morale adds `BestMedicine`.
- At a non-hideout settlement, `PristineStreets`, `AGoodDaysRest`, and `GoodLogdings` can apply; a fortification first adds `10`. Outside a settlement, a nearby safe recently visited village can apply `BushDoctor`.
- An army applies Scouting `Rearguard`. With food variety, `PerfectHealth` adds a factor; at sea that factor is halved. `HelpingHands` uses the integer floor of total men divided by 10, and its sea bonus is also halved.
- `IsInRaftState` applies a final `25%` regular-count penalty, so raft loss can stack with other results.

Use `includeDescriptions: true` to inspect starvation, settlement, and raft explanations in `ExplainedNumber`; this is more useful for diagnosing an unexpected rate than logging only the final float.

### Daily hero and hero-prisoner recovery

Hero prisoners recover `20`. Passing `party == null` returns the base `11`, which is the path used by the campaign behavior for heroes belonging to no party. Ordinary heroes in a mobile party start at `11`: starvation outside a settlement returns `-19`; otherwise movement, sea state, morale, settlement or safe-village context apply Medicine/Athletics perks, followed by `HealingRateBonusForHeroes`.

The `-19` is a model result, not an instruction to subtract 19 hit points. The caller converts a daily amount to a campaign-time healing increment and applies the hero health bounds.

### Affected hero healing and battle-end recovery

`GetHeroesEffectedHealingAmount` places the incoming `healingRate` in an `ExplainedNumber`, applies Medicine `SelfMedication`, and uses the sea multiplier when the hero belongs to a sea party or is a prisoner in a sea mobile party. It compares the fractional part with `MBRandom.RandomFloat`, so the same input is not guaranteed to return the same integer every call.

`GetBattleEndHealingAmount` returns two possible contributions: `PreventiveMedicine.SecondaryBonus` multiplied by missing hit points, and `WalkItOff.SecondaryBonus` when the hero is on the attacking side. `PartyHealCampaignBehavior` reads the result and calls `Hero.Heal` only when it is positive. That is the model/side-effect boundary.

## Real read path

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;

PartyBase party = MobileParty.MainParty.Party;
PartyHealingModel model = Campaign.Current.Models.PartyHealingModel;

ExplainedNumber regularHealing = model.GetDailyHealingForRegulars(
    party, isPrisoners: false, includeDescriptions: true);
ExplainedNumber heroHealing = model.GetDailyHealingHpForHeroes(
    party, isPrisoners: false, includeDescriptions: true);
float surgeryChance = model.GetSurgeryChance(party);
```

This reads the model registered for the current campaign. `ResultNumber` can feed UI or diagnostics; do not call `Hero.Heal` or mutate the party just because you read a result.

## Replacing the default model

Register the replacement during campaign starter setup. When changing one rule, subclass the default and delegate the rest to `base`:

```csharp
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.Library;

public sealed class MyPartyHealingModel : DefaultPartyHealingModel
{
    public override ExplainedNumber GetDailyHealingForRegulars(
        PartyBase party, bool isPrisoners, bool includeDescriptions = false)
    {
        ExplainedNumber result = base.GetDailyHealingForRegulars(
            party, isPrisoners, includeDescriptions);
        result.Add(2f, new TaleWorlds.Localization.TextObject("{=my_healing_bonus}My healing bonus"));
        return result;
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyPartyHealingModel());
}
```

If you wrap an already registered `PartyHealingModel`, use the `BaseModel` supplied by `CampaignGameStarter.AddModel<T>(MBGameModel<T>)`; do not read `Campaign.Current.Models.PartyHealingModel` inside the replacement as its own base. After replacement that property points to the replacement and can recurse. Registration belongs in starter setup, not in `DailyTick`.

## Risks and crash boundaries

1. **Duplicate healing or XP:** the model calculates; campaign behavior and casualty flow perform `Hero.Heal` and skill progression. Do not trigger those side effects in an override.
2. **Daily amount versus tick amount:** `PartyHealCampaignBehavior` accumulates daily values at an hourly frequency and rounds them; do not apply a daily result in full on every tick.
3. **Negative results:** a starving hero's `-19` is a calculation result, not executable damage; let the existing health flow interpret it.
4. **Missing context:** an unassigned hero legitimately uses `party == null`, while module loading may have no `Campaign.Current`; do not read the model from static initialization.
5. **Lost sea branch:** sea state affects `PerfectHealth`, `HelpingHands`, `SelfMedication`, and perk behavior; a land-only override is incomplete.
6. **Save/lifetime issues:** do not cache `PartyBase`, `Hero`, or `ExplainedNumber` across campaigns. Read current state on each model call and let official objects and behaviors own persistence.

## Version note

The v1.3.15 and v1.4.5 interfaces, base constants, and major branches match: regular base `5`, hero base `11`, hero-prisoner `20`, regular-prisoner `1`, healing skill XP `5`, plus the same starvation, settlement, movement, and sea semantics. The v1.4.5 source is under `Bannerlord.Source/bin`; decompiler syntax and `null` spellings can differ, so an override should still be checked against the target version's callers.

## See also

- [Campaign-ext Models family](../models/)
- [`PartyHealingModel`](../PartyHealingModel)
- [`PartyBase`](../../campaign/PartyBase)
- [`MobileParty`](../../campaign/MobileParty)
- [`Hero`](../../campaign/Hero)
- [`CharacterObject`](../../campaign/CharacterObject)
- [`PartyHealCampaignBehavior`](../PartyHealCampaignBehavior)
- [`PartyMoraleModel`](../PartyMoraleModel)
- [`PartyWageModel`](../PartyWageModel)
- [`CampaignGameStarter`](../CampaignGameStarter)
