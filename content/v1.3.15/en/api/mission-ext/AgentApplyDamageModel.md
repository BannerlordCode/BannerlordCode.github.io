---
title: "AgentApplyDamageModel"
description: "The total gate for damage calculation and hit reaction in a battle Mission: it decides how damage is amplified, scaled, reduced and modified, and whether a hit knocks back, dismounts, knocks down, or spooks a mount."
---
# AgentApplyDamageModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class AgentApplyDamageModel : MBGameModel<AgentApplyDamageModel>`  
**Base:** `MBGameModel<AgentApplyDamageModel>`  
**Source:** `TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs`  
**Default implementation:** `SandBox.GameComponents.SandboxAgentApplyDamageModel` (`Modules.SandBox/SandBox/GameComponents/SandboxAgentApplyDamageModel.cs`)

## One-line responsibility

In a single battle "attack" it centrally decides: whether damage should be ignored or applied, how the value is amplified, scaled, reduced and modified, and whether the hit knocks the target back, dismounts them, knocks them down, or spooks their mount — it is the total gate connecting "attack input" to an `Agent`'s health, death and morale. It only computes "how much *should* be dealt"; it does not write the value into `Agent.Health` itself.

## Mental Model

Think of it as **the damage computer inside combat**: `Mission` calls it along melee-hit, missile-collision and passive-attack paths, applies the result onto the `Agent`, and triggers death plus a morale change driven by [`BattleMoraleModel`](../BattleMoraleModel/).

Lifecycle and control flow:

- **Owner**: Mission-layer models are held centrally by `MissionGameModels` (which inherits `GameModelsManager`); at runtime they are reached through the static singleton `MissionGameModels.Current.AgentApplyDamageModel`. **Note: a Mission model lives on `MissionGameModels.Current`, NOT on `Campaign.Current.Models`** — campaign models and Mission models are two separate registries.
- **Layer**: the Mission combat layer, not the campaign layer. It is invoked by `Mission` on every combat tick that resolves a hit, throughout the whole battle.
- **The single skeleton `CalculateDamage`**: it is itself not abstract; it dispatches the work to the abstract methods in a fixed order, then clamps with `MathF.Max(0f, …)`:

```text
A hit enters CalculateDamage(baseDamage)
  └─ IsDamageIgnored?              → if true, the whole damage becomes 0
  └─ ApplyDamageAmplifications    → skill / Perk / banner amplifications (ExplainedNumber)
  └─ ApplyDamageScaling           → scene-rule scaling (e.g. 4.5× vs siege engines in a sally-out)
  └─ ApplyDamageReductions        → reduction Perks / banners
  └─ ApplyGeneralDamageModifiers  → AgentDrivenProperties multiplier band
  └─ MathF.Max(0, result)         → no negative damage
```

- **Replacement rule**: a model is registered via `starterObject.AddModel<AgentApplyDamageModel>(new MyModel())` inside `MBSubModuleBase.OnGameStart`. `GetGameModel<T>()` searches the list from the end backwards, so **a later-registered (module loaded later) model of the same type overrides an earlier one** — letting you override SandBox's default from your own module.

When you need to change the "damage rules", replace / subclass this Model; when you need to change an Agent's current health, go through the engine hit path (`Agent.ApplyDamage`, etc.) — **do not** write `agent.Health` directly inside a model callback, since that bypasses the death / morale pipeline.

### Lifecycle and registration

- The default `SandboxAgentApplyDamageModel` is registered by `SandBoxSubModule.OnGameStart` via `AddModel<AgentApplyDamageModel>(new SandboxAgentApplyDamageModel())`; if your module depends on SandBox, your `OnGameStart` runs after it, so the default already exists at that point.
- `Mission.cs` calls `MissionGameModels.Current.AgentApplyDamageModel.*` heavily along melee-hit, missile-collision and passive-attack paths (e.g. `CalculateDamage`, `DecideAgentKnockedDownByBlow`, `DecideMissileWeaponFlags`).
- Custom logic most often lives in a [`MissionBehavior`](../../mission/MissionBehavior/) that reads the model, or in a subclass that overrides one stage.
- `MissionGameModels.Current` is non-null only inside an active Mission; reading it before a Mission starts, after it ends (`MissionGameModels` is torn down), or on the main menu yields a null reference.

### When to use

- You want to systematically adjust the damage formula (global up/down, per-weapon / skill / faction bonus).
- You want to change hit-reaction rules (whether a hit can knock back, dismount, knock down, spook a mount, or let a missile pass through after a shield breaks).
- You want to change the "body-part damage multiplier" or "friendly-fire ignore" decision.

### When not to use

- **Do not read/write campaign state or the save inside a callback**: these methods are hot paths in the Mission lifecycle — never access `Campaign.Current.*` for writing, create / destroy `Agent`s, or read any save data (`SaveManager` / serialized fields). Damage rules must be deterministic and cheap.
- **Do not mutate `Agent.Health` directly**: causing a "kill" by writing health from outside the model starves the death / morale events, producing bad-data inconsistency.
- **Do not assume `Mission.Current` is non-null**: the default `ApplyDamageScaling` reads `Mission.Current.IsSallyOutBattle` directly; a custom override that uses `Mission.Current` must null-check first.
- **Do not act on dead / removed Agents**: after `OnAgentRemoved` the reference is stale; dispatching damage to it again only yields a null reference or garbage.

## Dependencies

### Upstream

| Type | Relationship |
| --- | --- |
| [`Mission`](../../mission/Mission/) | Holds the combat scene and calls this model during hit resolution; `Mission.Current` is often read inside the default implementation. |
| [`Agent`](../../mission/Agent/) | Both attacker and victim; the model uses the `Agent` argument to judge skill, mount and team, and the result finally lands on `Agent.Health`. |
| [`AttackInformation`](../AttackInformation/) | `in` read-only struct carrying the hit context: attacker/defender, weapon, faction, headshot / shield-block, etc. |
| [`AttackCollisionData`](../AttackCollisionData/) | `in` read-only struct carrying collision details (body part, shield-blocked, horse-charge, etc.). |
| [`Blow`](../Blow/) | Already-resolved blow data; `CalculateStaggerThresholdDamage` and the `Decide*` methods take `in Blow`. |
| [`WeaponComponentData`](../../core-extra/WeaponComponentData/) | Weapon usage data; used to judge skill, whether it is a consumable / melee / polearm. |
| [`WeaponFlags`](../../core-extra/WeaponFlags/) | Weapon flag bits; `DecideMissileWeaponFlags` rewrites them via `ref`, `CanWeaponIgnoreFriendlyFireChecks` judges them read-only. |
| [`DamageTypes`](../../core-extra/DamageTypes/) | Damage category (blunt / cut / pierce / beast); `GetDamageMultiplierForBodyPart` picks the multiplier by type. |
| [`BoneBodyPartType`](../BoneBodyPartType/) | Struck body-part enum; the core argument for body-part multipliers and dismount / knockback detection. |
| [`CombatCollisionResult`](../CombatCollisionResult/) | Attacker/defender collision result; argument of `CalculateDefendedBlowStunMultipliers`. |
| [`MissionWeapon`](../MissionWeapon/) | Weapon snapshot; several methods take it via `in` / `ref`. |
| [`IShipOrigin`](../../core-extra/IShipOrigin/) | Naval ship origin; argument for sail / hull fire-damage calculation. |
| [`BasicCharacterObject`](../../campaign/CharacterObject/) | Character data; the default implementation reads Perks / skills / culture through it. |

### Downstream

| Type | Relationship |
| --- | --- |
| [`MissionBehavior`](../../mission/MissionBehavior/) | The most common customization entry: read the model from a behavior, or pair it with hit events. |
| [`Formation`](../../mission/Formation/) | The model reads `Agent.Formation` to get captain Perks and faction-banner bonuses. |
| [`Team`](../../mission/Team/) | Distinguishes attacker/defender side, deciding whether Perks / banners apply. |
| [`BattleMoraleModel`](../BattleMoraleModel/) | Downstream consumer: the lethal damage this model computes triggers death, which in turn drives team morale. |

### Actions, events and save boundaries

- This model dispatches no events and reads/writes no save data; the hit result is applied to `Agent.Health` by `Mission`'s combat code and triggers death / morale.
- Callbacks run inside the Mission lifecycle, on the combat hot path; they must be deterministic and cheap. **Never** create / destroy `Agent`s, write campaign state, or touch save data in them.
- Differences in damage rules indirectly change battle outcomes and fallen heroes, and therefore campaign save consistency — just because "the model is not serialized" does not mean you may introduce non-determinism (e.g. reading random state, timestamps).

## Risks and Debugging

1. **`MissionGameModels.Current` is null**: calling a model method on the main menu, before Mission init, or after the Mission ended (manager torn down) yields a null reference. Null-check `MissionGameModels.Current != null` before any model call, and also `Mission.Current != null` inside a `MissionBehavior`.
2. **`Mission.Current` is null inside a custom override**: the default `ApplyDamageScaling` accesses `Mission.Current.IsSallyOutBattle` directly. A subclass that similarly reads scene state must null-check first, or it NPEs during Mission teardown.
3. **Hot-swap causes recursion / jumps**: `Current` is re-assigned during `MissionGameModels` construction. If you `AddModel` again mid-battle, the in-flight `CalculateDamage` dispatch jumps to the new instance, causing value jumps or (if the new instance again reads `MissionGameModels.Current`) infinite recursion. Register the model once in `OnGameStart`, and hold a `_vanilla` delegate captured at construction instead of re-querying `Current`.
4. **NaN / negative pollution**: `CalculateDamage` only clamps the lower bound with `MathF.Max(0, …)`; it does NOT handle `NaN` (`NaN > 0` is false, so it passes through). Overrides must always return a finite, non-negative number.
5. **Bypassing the death / morale pipeline**: writing `Agent.Health` directly from outside the model to "cause a kill" starves [`BattleMoraleModel`](../BattleMoraleModel/) and the result statistics of their events, producing bad-data inconsistency.
6. **Acting on dead / removed Agents**: after `OnAgentRemoved` the Agent may be recycled; dispatching damage to it again, or reading `Agent.Team` / `Character`, yields a null reference or garbage.
7. **`in` / `ref` read-only structs**: `AttackInformation` and `AttackCollisionData` arrive as `in` read-only structs; overrides must receive them with `in` — copying and mutating their fields does nothing. `DecideMissileWeaponFlags`, `CalculateDefendedBlowStunMultipliers`, `DecideWeaponCollisionReaction` etc. carry `ref` / `out` parameters and must be forwarded exactly as signed.

## Member Contract

> Apart from `CalculateDamage` (the concrete orchestrator), every other member is `public abstract`. The tables below give **purpose + call timing / side-effects**, not a signature wall.

### Damage value pipeline

The engine strings the following segment together through `CalculateDamage`; the rest are abstract hooks for each stage, filled in by the default implementation with Perk / banner / skill logic.

| Member | Purpose | Call timing & side-effects |
| --- | --- | --- |
| `CalculateDamage` | The only concrete method: calls the four stages below in order and clamps to ≥0; returns 0 immediately if `IsDamageIgnored`. | Itself mutates no Agent state; called during `Mission` hit resolution. |
| `IsDamageIgnored` | Decides whether this attack is entirely void (e.g. a Pavise-shield Perk's chance to ignore damage). | When it returns `true`, the whole damage becomes 0. |
| `ApplyDamageAmplifications` | Amplification stage: skill, captain Perk, faction-banner damage boosts (accumulated via `ExplainedNumber`). | The sandbox default branches by weapon skill (one-handed / two-handed / polearm / bow / crossbow / throwing) to add Perks. |
| `ApplyDamageScaling` | Scene-level scaling: e.g. 4.5× damage vs siege engines in a sally-out. | The default reads `Mission.Current.IsSallyOutBattle` directly; needs `Mission.Current` non-null. |
| `ApplyDamageReductions` | Reduction stage: reduction Perks, banners, shield wall, etc. | Symmetric to amplification, applied after the same base value. |
| `ApplyGeneralDamageModifiers` | General multiplier band: scales by `AgentDrivenProperties` damage multipliers. | The sandbox multiplies melee / thrown weapons and character-driven properties into the result. |
| `CalculateAlternativeAttackDamage` | Computes base damage for an "alternative attack" (e.g. kick / unarmed). | The sandbox returns 1–2 by weapon class. |
| `CalculatePassiveAttackDamage` | Computes passive-attack (e.g. trample) damage. | The sandbox applies a polearm Perk multiplier when shield-blocked. |
| `CalculateShieldDamage` | Computes durability damage dealt to the shield itself. | The sandbox reduces it by the victim's faction-banner reduction. |
| `GetDamageMultiplierForBodyPart` | Returns a damage multiplier by body part + damage type (e.g. head amplifies blunt). | Pure query, no side-effects; used by hit resolution to amplify / dampen. |
| `CalculateStaggerThresholdDamage` | Computes the damage threshold at which the target "staggers". | The sandbox combines the victim's Perks with management parameters. |

### Hit-reaction decisions

| Member | Purpose | Call timing & side-effects |
| --- | --- | --- |
| `DecideCrushedThrough` | Decides whether the attack "crushes through" the defense (breaks the guard). | The sandbox decides by attack-energy threshold (default 58, shield +20%). |
| `DecideWeaponCollisionReaction` | Decides the weapon collision reaction (bounce / stuck, etc.), `out MeleeCollisionReaction`. | Default delegates to `MissionCombatMechanicsHelper`. |
| `DecidePassiveAttackCollisionReaction` | Collision reaction for passive attacks (trample). | Lethal and mounted ⇒ chance to pierce. |
| `DecideAgentShrugOffBlow` | Decides whether the target "shrugs off" the blow (no status change). | Default delegates to `MissionCombatMechanicsHelper`. |
| `DecideAgentDismountedByBlow` | Whether to dismount the rider. | Default delegates to the Helper, combined with body part / weapon Perk. |
| `DecideAgentKnockedBackByBlow` | Whether to knock back. | Default delegates to the Helper. |
| `DecideAgentKnockedDownByBlow` | Whether to knock down. | Default delegates to the Helper. |
| `DecideMountRearedByBlow` | Whether the mount rears up in fright. | Default delegates to the Helper. |
| `CalculateDefendedBlowStunMultipliers` | Computes stun-duration multipliers for attacker and defender (`ref float`). | The sandbox lengthens attacker stun under a heavy-blow Perk. |

### Penetration and momentum

| Member | Purpose | Call timing & side-effects |
| --- | --- | --- |
| `GetDismountPenetration` | Dismount penetration value (higher ⇒ easier to unhorse). | The sandbox accumulates by weapon Perk (polearm brace / crossbow-maul / thrown-dismount). |
| `GetKnockBackPenetration` | Knock-back penetration value. | The sandbox boosts it under the polearm "keep distance" Perk. |
| `GetKnockDownPenetration` | Knock-down penetration value. | The sandbox accumulates by weapon class and body part (head / torso). |
| `GetHorseChargePenetration` | Horse-charge penetration value. | The sandbox hard-returns 0.4. |
| `DecideMissileWeaponFlags` | Rewrites missile weapon flags (e.g. thrown pierce), `ref WeaponFlags`. | The sandbox sets the relevant `WeaponFlags` under a thrown Perk. |
| `ShouldMissilePassThroughAfterShieldBreak` | Whether a missile keeps passing through after the shield breaks. | The sandbox hard-returns `false`. |
| `CalculateRemainingMomentum` | Computes remaining momentum after the hit. | Default forwards to `CalculateDefaultRemainingMomentum` (0.3× on crush-through, etc.). |

### Weapon capability checks

| Member | Purpose | Call timing & side-effects |
| --- | --- | --- |
| `CanWeaponIgnoreFriendlyFireChecks` | Whether the weapon ignores friendly-fire checks. | The sandbox judges by a specific `WeaponFlags` combination. |
| `CanWeaponDealSneakAttack` | Whether a sneak attack (backstab) can trigger. | The sandbox judges by the victim's AI state / facing. |
| `CanWeaponDismount` | Whether the weapon can dismount. | The sandbox judges by body part, blow type, Perk. |
| `CanWeaponKnockback` | Whether the weapon can knock back. | The sandbox judges by body part and weapon flags. |
| `CanWeaponKnockDown` | Whether the weapon can knock down. | The sandbox judges by weapon class / body part / sweet-spot collision. |

### Naval warfare (since v1.4.5)

| Member | Purpose | Call timing & side-effects |
| --- | --- | --- |
| `CalculateSailFireDamage` | Sail fire damage. | The sandbox returns the base value unchanged. |
| `CalculateHullFireDamage` | Hull fire damage. | The sandbox returns it wrapped in an `ExplainedNumber`. |

## Real Reading Path

The code below only queries the model registered in the current Mission, and demonstrates the real acquisition path of the engine entry `CalculateDamage` (an active Mission is required):

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

// Mission models live on MissionGameModels.Current, NOT on Campaign.Current.Models
if (MissionGameModels.Current == null)
{
    return; // null on the main menu / before or after a Mission
}

AgentApplyDamageModel model = MissionGameModels.Current.AgentApplyDamageModel;

// attackInfo / collisionData are supplied by combat hit resolution; note the in read-only passing
float damage = model.CalculateDamage(in attackInfo, in collisionData, baseDamage);
```

If you only want to layer a bounded modification on top of the default rules (e.g. a global −15% damage), hold the `_vanilla` delegate captured at construction and **do not** re-query `MissionGameModels.Current` inside the override (that recurses):

```csharp
using System.Linq;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public sealed class GlassCannonDamageModel : AgentApplyDamageModel
{
    private readonly AgentApplyDamageModel _vanilla;

    public GlassCannonDamageModel(AgentApplyDamageModel vanilla)
    {
        _vanilla = vanilla;
    }

    // Only change the "reduction" stage: run the default reduction first, then apply a global -15% factor
    public override float ApplyDamageReductions(
        in AttackInformation attackInformation,
        in AttackCollisionData collisionData,
        float baseDamage)
    {
        float reduced = _vanilla.ApplyDamageReductions(in attackInformation, in collisionData, baseDamage);
        return reduced * 0.85f;
    }

    // Forward every other abstract member to _vanilla so the remaining combat rules stay unchanged
    public override bool IsDamageIgnored(in AttackInformation a, in AttackCollisionData c)
        => _vanilla.IsDamageIgnored(in a, in c);

    public override float ApplyDamageAmplifications(in AttackInformation a, in AttackCollisionData c, float b)
        => _vanilla.ApplyDamageAmplifications(in a, in c, b);

    public override float ApplyDamageScaling(in AttackInformation a, in AttackCollisionData c, float b)
        => _vanilla.ApplyDamageScaling(in a, in c, b);

    public override float ApplyGeneralDamageModifiers(in AttackInformation a, in AttackCollisionData c, float b)
        => _vanilla.ApplyGeneralDamageModifiers(in a, in c, b);

    // Members with ref / out are forwarded exactly as signed
    public override void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags)
        => _vanilla.DecideMissileWeaponFlags(attackerAgent, in missileWeapon, ref missileWeaponFlags);

    public override void CalculateDefendedBlowStunMultipliers(
        Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult,
        WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon,
        ref float attackerStunPeriod, ref float defenderStunPeriod)
        => _vanilla.CalculateDefendedBlowStunMultipliers(
            attackerAgent, defenderAgent, collisionResult, attackerWeapon, defenderWeapon,
            ref attackerStunPeriod, ref defenderStunPeriod);

    // The remaining Decide* / Can* / Get* / Calculate* members all forward to _vanilla (omitted here)
}
```

When registering, pull the SandBox default already registered on `IGameStarter.Models` as `_vanilla` (your module depends on SandBox, so it exists at that point):

```csharp
using System.Linq;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter starterObject)
    {
        base.OnGameStart(game, starterObject);

        AgentApplyDamageModel vanilla =
            starterObject.Models.OfType<AgentApplyDamageModel>().FirstOrDefault();
        if (vanilla != null)
        {
            // Later registration overrides earlier; capture _vanilla at construction to avoid recursion
            starterObject.AddModel<AgentApplyDamageModel>(new GlassCannonDamageModel(vanilla));
        }
    }
}
```

## Navigation

- ↑ [Parent: mission-ext index](../)
- ↔ [Sibling: BattleMoraleModel](../BattleMoraleModel/)
- ↔ [Sibling: AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel/)
- [Mission](../../mission/Mission/)
- [Agent](../../mission/Agent/)
- [MissionBehavior](../../mission/MissionBehavior/)
- [Formation](../../mission/Formation/)
- [Team](../../mission/Team/)
- [WeaponComponentData](../../core-extra/WeaponComponentData/)
- [BasicCharacterObject](../../campaign/CharacterObject/)
- [Crash and save boundaries](../../../architecture/crash-boundaries/)
