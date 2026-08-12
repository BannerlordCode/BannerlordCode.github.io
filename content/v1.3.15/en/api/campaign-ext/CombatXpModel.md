---
title: "CombatXpModel"
description: "A replaceable rule model that maps one hit (attacker / attacked / captain / damage / fatal / mission type) to skill XP and the trained weapon skill."
---
# CombatXpModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CombatXpModel : MBGameModel<CombatXpModel>`
**Base:** `MBGameModel<CombatXpModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CombatXpModel.cs`
**Default impl:** `TaleWorlds.CampaignSystem.GameComponents/DefaultCombatXpModel.cs`

## Responsibility

It answers "for this hit, how much skill XP should be granted, who earns it, and which skill does it train". It is a pure computation rule layer: the actual XP write happens in the post-battle XP distribution and the post-combat campaign XP settlement behaviors, not inside this model.

## Mental Model

This is the combat-XP rule layer, consumed in **two** places: on one side, the Mission (battle) distributes skill XP per hit; on the other, the post-battle campaign-level XP settlement. It holds no units itself and does not change any `CharacterObject`'s skill level.

The computation chain: when a hit occurs, the caller hands the attacker, attacked, captain, attacker party, damage, whether it is fatal, and the mission type to `GetXpFromHit`, and the model returns an `ExplainedNumber` — first estimating the attacked troop's difficulty from both sides' military power (via [`MilitaryPowerModel`](../MilitaryPowerModel)'s power estimate), then multiplying by the mission-type multiplier, and adding perk-based correction factors. `GetSkillForWeapon` separately decides "which skill does this weapon train", while `CaptainRadius` decides how close a captain must be to be passed as the `captain` argument and thus share the XP.

Use this model to change how "XP is computed" for all consumers. If the goal is to directly grant someone XP, change a skill level, or advance a level, use the XP settlement behavior / [`CharacterDevelopmentModel`](../CharacterDevelopmentModel)'s leveling logic, not writing `CharacterObject` skill fields inside a callback. Also do not treat `GetXpFromHit`'s return value as "already granted" XP — it is only a suggested value to be applied.

When to use:
- Compute "how much XP this hit should yield" for a custom battle report or damage log.
- Change which skill a certain weapon (e.g. a custom weapon) trains, or adjust the skill trained on siege-engine hits.

When not to use:
- Do not call it directly to "grant" XP — the XP write is done by the post-battle / campaign XP behaviors; the model only computes.
- Do not modify a `CharacterObject`'s skills or attributes inside `GetXpFromHit` / `GetSkillForWeapon` callbacks; that turns a read-only query into a side-effecting world mutation.
- Do not read `Campaign.Current` unconditionally at the title screen or early module load — it may be `null` there.

### Lifecycle & Registration

`Campaign.Current.Models` holds the current instance. The default instance is `DefaultCombatXpModel`, registered by the game launcher via `IGameStarter.AddModel` during campaign initialization; a custom model must also be registered before the campaign system starts querying XP. At the title screen, early module load, or when no active campaign exists, `Campaign.Current` may be `null`, and must not be read unconditionally in static field initializers or menu constructors.

## Dependencies

### Upstream

| Type | Relationship |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Provides the active campaign and the `Models` registry (`Campaign.Current.Models.CombatXpModel`). |
| [`CharacterObject`](../../campaign/CharacterObject) | Attacker, attacked, and captain are all passed as `CharacterObject`; its `MaxHitPoints`, `IsHero`, `IsRanged`, etc. drive XP and perk corrections. |
| [`PartyBase`](../../campaign/PartyBase) | The attacker party; the default impl reads `MapEvent`, `Side`, `LeaderSimulationModifier`, and various perks from here. |
| [`SkillObject`](../../core-extra/SkillObject) | `GetSkillForWeapon` returns the trained skill (`Athletics` / `Engineering` / the weapon's `RelevantSkill`). |
| [`WeaponComponentData`](../../core-extra/WeaponComponentData) | Weapon data; when not a siege engine, its `RelevantSkill` decides the trained skill. |
| [`ExplainedNumber`](../ExplainedNumber) | Carries the XP value returned by `GetXpFromHit` plus the explanation of each perk factor. |

### Downstream

| Type | Relationship |
| --- | --- |
| [`Hero`](../../campaign/Hero) | When `captain` is a hero with the `Leadership.InspiringLeader` perk, XP is boosted (`AddFactor`). |
| [`Mission`](../../mission/Mission) | In-battle hit XP distribution consumes `GetXpFromHit` and `GetXpMultiplierFromShotDifficulty`. |
| [`MissionTypeEnum`](../MissionTypeEnum) | Mission type (Battle / PracticeFight / Tournament / SimulationBattle / NoXp) drives the XP multiplier. |
| [`CharacterDevelopmentModel`](../CharacterDevelopmentModel) | Adjacent level / XP model; the `ExplainedNumber` from `GetXpFromHit` is eventually written to skill levels by the XP settlement behavior. |

### Actions, Events & Save Boundaries

The model itself has no save fields and dispatches no events. The actual XP write is performed by the post-battle and campaign XP settlement behaviors; the model only returns a suggested value. A custom implementation should stay deterministic for the same inputs, to avoid XP inconsistency across battle replay / save reload. Note that `GetXpFromHit` internally reads `Campaign.Current.Models.MilitaryPowerModel` to compute both sides' power — when replacing the model, if you also depend on other models, obtain them via `Campaign.Current.Models` as well, and do not cache references that may go stale.

## Risks & Debugging Order

1. **Campaign does not exist yet:** `Campaign.Current` is null at the title screen and early module load; null-check before obtaining the model, or defer to a campaign-startup hook.
2. **Mutating the world inside a callback:** recruiting, changing skill levels, transferring gold, or teleporting must happen in behaviors / Roster API / Actions, not inside an XP computation callback.
3. **Treating the return value as already granted:** `GetXpFromHit` returns "earned XP" to be written by the XP behavior; merely reading the model grants no one any XP.
4. **`attackerParty` is null:** the default impl reads `attackerParty.MapEvent` / `MobileParty` in several places; passing `null` skips the relevant perk corrections (by design), but ensure the caller understands the consequence.
5. **Double-applying multipliers:** calling the model and then writing the return value back or multiplying by a multiplier again makes the mission-type multiplier and perk factors apply twice, causing XP to balloon.
6. **`CaptainRadius` misuse:** this property only declares the "effective radius within which a captain shares XP"; the model does not measure distance itself — distance judgment is done by the caller (battle XP distribution), and the captain should already be within the radius before being passed as the `captain` argument.

## Member Contract

| Member | Purpose | When called & side effects |
| --- | --- | --- |
| `CaptainRadius` | Exposes the "effective radius within which a captain shares XP"; default impl is `10f`. | Read by battle XP distribution when deciding whether the captain is present; the model does not measure distance here, it only declares the radius value. |
| `GetSkillForWeapon` | Returns the skill a weapon trains: on siege-engine hits returns `Engineering`, otherwise takes the weapon's `RelevantSkill`; the rest (unarmed / no weapon) defaults to `Athletics`. | Decides which skill the XP counts toward when a hit occurs; pure query, no side effects. |
| `GetXpFromHit` | Computes the skill XP a hit should yield: estimates the attacked troop's difficulty from both sides' military power, multiplies by the mission-type multiplier, and adds perk factors for `OneHanded` / `TwoHanded` / `Throwing` / `Bow` / `Crossbow` / `Leadership` / `Roguery`, returning an `ExplainedNumber`. | Called per hit by XP distribution / campaign settlement; read-only computation, does not write skills. |
| `GetXpMultiplierFromShotDifficulty` | Returns a `0f~2f` multiplier from shot difficulty (the hit-difficulty parameter of ranged weapons); higher difficulty → higher multiplier, capped at `14.4f`. | Used by the caller to amplify the `GetXpFromHit` result on ranged hits; pure query. |
| `MissionTypeEnum` (nested enum) | Mission-type enum: `Battle`, `PracticeFight`, `Tournament`, `SimulationBattle`, `NoXp`, driving `GetXpFromHit`'s global multiplier (1 / 0.0625 / 0.33 / 0.9 / 0). | Passed as the last argument to `GetXpFromHit`. |

Observable factors in the default impl: the higher the attacked troop's power and the greater the damage (a fatal hit additionally adds max hit points), the more XP; practice fights, tournaments, and simulation battles get only `0.0625` / `0.33` / `0.9` multiplier, `NoXp` is `0`; a captain with `Inspiring Leader` who is not at sea gets a bonus; the party leader's perks `Trainer` / `BaptisedInBlood` / `CorpsACorps` / `LeadByExample` / `Resourceful` / `BullsEye` / `MountedCrossbowman` / `NoRestForTheWicked` add factors by troop type and sea status.

## Real Read Path

The following code only queries the already-registered model in the current campaign, in the same order the battle XP distribution reads `GetXpFromHit`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public ExplainedNumber ComputeHitXp(
    CharacterObject attacker,
    CharacterObject captain,
    CharacterObject attacked,
    PartyBase attackerParty,
    int damage,
    bool isFatal)
{
    if (Campaign.Current == null)
    {
        return new ExplainedNumber(0f);
    }

    CombatXpModel model = Campaign.Current.Models.CombatXpModel;

    // Normal encounter: the Battle multiplier is 1f; the captain only appears in the
    // captain argument if it is already within CaptainRadius.
    ExplainedNumber xp = model.GetXpFromHit(
        attacker, captain, attacked, attackerParty, damage, isFatal,
        CombatXpModel.MissionTypeEnum.Battle);

    return xp;
}
```

This result suits debugging or UI preview — "how much XP does this hit compute to"; normal logic should hand the `ExplainedNumber` to the XP settlement behavior to write, not multiply the value again itself.

Querying the weapon-trained skill and the captain radius:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;

CombatXpModel model = Campaign.Current.Models.CombatXpModel;

// Which skill does the weapon train: melee weapons use their RelevantSkill,
// siege engines use Engineering, the rest default to Athletics.
SkillObject skill = model.GetSkillForWeapon(weapon, isSiegeEngineHit: false);

// Effective radius within which a captain shares XP (default 10f), read by battle
// XP distribution when deciding whether the captain is present.
float radius = model.CaptainRadius;
```

## Safe Replacement Pattern

If you only want to add a bounded correction, keep the original model as a delegate and let all four members still execute in pairs:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public sealed class ModCombatXpModel : CombatXpModel
{
    private readonly CombatXpModel _vanilla;

    public ModCombatXpModel(CombatXpModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override float CaptainRadius => _vanilla.CaptainRadius;

    public override SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)
    {
        return _vanilla.GetSkillForWeapon(weapon, isSiegeEngineHit);
    }

    public override ExplainedNumber GetXpFromHit(
        CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop,
        PartyBase attackerParty, int damage, bool isFatal, MissionTypeEnum missionType)
    {
        ExplainedNumber result = _vanilla.GetXpFromHit(
            attackerTroop, captain, attackedTroop, attackerParty, damage, isFatal, missionType);
        result.AddFactor(0.05f, new TextObject("Mod: drill bonus"));
        return result;
    }

    public override float GetXpMultiplierFromShotDifficulty(float shotDifficulty)
    {
        return _vanilla.GetXpMultiplierFromShotDifficulty(shotDifficulty);
    }
}
```

At registration, save the vanilla delegate during the model-registration phase of `CampaignGameStarter`; do not look yourself up again via `Campaign.Current.Models.CombatXpModel` after the model has been replaced, or it will recurse. If you want the replacement to also cover perk and mission-type multiplier rules, prefer delegating to the current version's default model and then adding your own bounded factors.

## Navigation

v1.3.15 and v1.4.5 both expose `CaptainRadius`, `GetSkillForWeapon`, `GetXpFromHit`, `GetXpMultiplierFromShotDifficulty`, and the nested `MissionTypeEnum`; the default impl `DefaultCombatXpModel` in v1.4.5 more visibly includes sea-status conditions (such as `IsCurrentlyAtSea`). Cross-version implementations should delegate to the current version's vanilla model rather than copy the old formula into the new version.

- [Models directory](../models/)
- [Parent: Campaign Extension API](../)
- [↔ CharacterDevelopmentModel](../CharacterDevelopmentModel)
- [↔ PartySpeedModel](../PartySpeedModel)
- [↔ ExplainedNumber](../ExplainedNumber)
- [↔ MissionTypeEnum](../MissionTypeEnum)
- [↔ MilitaryPowerModel](../MilitaryPowerModel)
- [Campaign](../../campaign/Campaign)
- [CharacterObject](../../campaign/CharacterObject)
- [PartyBase](../../campaign/PartyBase)
- [SkillObject](../../core-extra/SkillObject)
- [WeaponComponentData](../../core-extra/WeaponComponentData)
- [Campaign System Guide](../../../guide/campaign-system)
- [Crash Boundaries & Exception Handling](../../../architecture/crash-boundaries)
