---
title: "AgentApplyDamageModel"
description: "The melee damage rule book: 33 abstract hooks that decide whether a blow lands, how much it hurts, how far it shoves, and whether it dismounts."
---

# AgentApplyDamageModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class AgentApplyDamageModel : MBGameModel<AgentApplyDamageModel>`
**Base:** `MBGameModel<AgentApplyDamageModel>`
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/AgentApplyDamageModel.cs`

## One-line responsibility

It is the single place where a strike is turned into a number: the model either vetoes the blow, runs it through a fixed five-stage multiplier pipeline, then decides the physical aftermath (stagger, shove, dismount, crush-through) that the collision code plays back.

## Mental model

Read the type as **a five-stage damage pipeline plus a physical-outcome rule set**, not as a bag of getters. The concrete `CalculateDamage` at `AgentApplyDamageModel.cs:8` is the pipeline and it is **not `virtual`**:

```
IsDamageIgnored  ->  (true ? return 0 immediately : keep going)
ApplyDamageAmplifications
ApplyDamageScaling
ApplyDamageReductions
ApplyGeneralDamageModifiers
-> MathF.Max(0f, result)
```

The trap that catches everyone is right there in the first line of that method: it re-reads `MissionGameModels.Current.AgentApplyDamageModel` and dispatches back through **the currently resolved instance**, not through `BaseModel`. So once your own model is the resolved one, calling `CalculateDamage(...)` from inside one of your own overrides recurses into itself forever. The pipeline is an entry point for *callers*; inside an override you must compose the stages by hand, or delegate to the model you saved at registration time.

The second mental anchor is the split between `MBGameModel<T>.BaseModel` and `MissionGameModels.Current`. `BaseModel` is a `protected` property injected once, at `IGameStarter.AddModel<T>` time, and it points at whatever was registered before you. `GetGameModel<T>()` inside `GameModelsManager` walks its list **from the end backwards**, so the *last* registered model of a given type wins. That is why "my damage model is being ignored" and "my damage model doubles every hit" are both classic symptoms of load order, not of a broken override.

The third is that most of the 33 abstract members are not about damage at all — they are about **what a melee collision physically does**. `CalculateRemainingMomentum` decides how much punch survives the hit, `CanWeaponDismount` / `CanWeaponKnockback` / `CanWeaponKnockDown` are the capability gates, and the matching `GetDismountPenetration` / `GetKnockBackPenetration` / `GetKnockDownPenetration` are the probability gates that run once a capability is granted. Override the capability and forget the penetration and nothing happens.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `CalculateDamage` | `public float CalculateDamage(in AttackInformation, in AttackCollisionData, float)` | The pipeline entry point. **Non-virtual.** Returns `0f` immediately when the resolved model's `IsDamageIgnored` says yes, otherwise threads the value through all four multiplier stages and clamps at zero. Call it to *ask* the resolved model for a number; never from inside one of your own overrides. |
| `IsDamageIgnored` | `public abstract bool IsDamageIgnored(in AttackInformation, in AttackCollisionData)` | The veto. Return `true` and the whole blow evaporates — no damage, no momentum, no reaction. This is the hook for invulnerability frames, armour gating, or "hits pass through this unit". |
| `ApplyDamageAmplifications` | `public abstract float ApplyDamageAmplifications(in AttackInformation, in AttackCollisionData, float)` | Stage 2, first in the multiplier chain. Put *vulnerability* here: multipliers above 1 that depend on the victim (wounded, unarmoured, low morale). Runs before scaling, so anything order-sensitive belongs in a later stage. |
| `ApplyDamageScaling` | `public abstract float ApplyDamageScaling(in AttackInformation, in AttackCollisionData, float)` | Stage 3, after amplification. The natural home for attacker-side bonuses that are conceptually "extra punch" rather than "extra vulnerability" — perks, weapon damage, charge bonus. |
| `ApplyDamageReductions` | `public abstract float ApplyDamageReductions(in AttackInformation, in AttackCollisionData, float)` | Stage 4. Flat subtraction and diminishing-returns lives here: flat armour soak, shield blocking, damage caps. Receives whatever stages 2-3 produced, so it is the right place to clamp against a maximum. |
| `ApplyGeneralDamageModifiers` | `public abstract float ApplyGeneralDamageModifiers(in AttackInformation, in AttackCollisionData, float)` | Stage 5, last before the `MathF.Max(0f, ...)`. The catch-all for rules that must observe the fully-reduced number — critical hits, executioners, damage-type conversions. |
| `CalculateRemainingMomentum` | `public abstract float CalculateRemainingMomentum(float, in Blow, in AttackCollisionData, Agent, Agent, in MissionWeapon, bool)` | Decides how much of the swing's momentum survives into the shove/kick reaction. Returning `0` silently disables knockback; returning `originalMomentum` produces chain-friendly full-power hits. |
| `CalculateDefaultRemainingMomentum` | `protected float CalculateDefaultRemainingMomentum(float, in Blow, in AttackCollisionData, Agent, Agent, in MissionWeapon, bool)` | The vanilla momentum formula, shipped as a concrete helper so subclasses can adjust a baseline instead of reinventing it. Crush-through keeps 30%; a passive (horse) attack keeps 50%; a clean multi-target hit keeps `(1 - absorbedByArmor/inflictedDamage) * 0.5`, snapped to zero below `0.25`. |
| `DecideWeaponCollisionReaction` | `public abstract void DecideWeaponCollisionReaction(in Blow, in AttackCollisionData, Agent, Agent, in MissionWeapon, bool, bool, float, out MeleeCollisionReaction)` | The `out` parameter is the payoff of the momentum calculation: it converts surviving momentum into a `MeleeCollisionReaction` that the engine plays back as an animation. This is the member to override when you want different hit reactions rather than different numbers. |
| `CanWeaponDismount` / `CanWeaponKnockback` / `CanWeaponKnockDown` | `public abstract bool CanWeapon*(Agent, WeaponComponentData, in Blow, in AttackCollisionData)` | Three capability gates, evaluated before the reaction is chosen. They are independent: a weapon can knock down without knocking back, and `CanWeaponKnockDown` takes the victim as a second `Agent` because it may consult the victim's footing. |
| `GetDismountPenetration` / `GetKnockBackPenetration` / `GetKnockDownPenetration` | `public abstract float Get*Penetration(Agent, WeaponComponentData, in Blow, in AttackCollisionData)` | The roll that happens *after* the matching `CanWeapon*` returned true. Return `1f` for "always", `0f` for "never". Overriding only one side of each pair is the single most common reason a custom hit reaction appears to do nothing. |
| `DecideAgentShrugOffBlow` | `public abstract bool DecideAgentShrugOffBlow(Agent, in AttackCollisionData, in Blow)` | The grunt-reaction gate, independent of the physical reaction. It decides whether the victim visibly absorbs the hit without a stagger animation, which is what makes light weapons feel "shrugged off" instead of "parried". |
| `DecideAgentKnockedDownByBlow` / `DecideAgentDismountedByBlow` / `DecideAgentKnockedBackByBlow` / `DecideMountRearedByBlow` | `public abstract bool Decide*ByBlow(...)` | The per-victim confirmation layer. These sit above the capability gates and let a model refuse a reaction on a specific victim — a captain who will not be knocked down, a horse that will not rear. |
| `GetDamageMultiplierForBodyPart` | `public abstract float GetDamageMultiplierForBodyPart(BoneBodyPartType, DamageTypes, bool, bool)` | Per-limb scaling. Note the `isHuman` and `isMissile` flags: the same call path serves human limbs and horse/flight collision bodies, so a rule written only for humanoids silently zeroes out mount hits. |
| `BaseModel` (inherited) | `protected AgentApplyDamageModel BaseModel { get; private set; }` | The model that was registered before yours. **This — not `base.` — is how you compose with vanilla.** All 33 pipeline/decision members are `abstract`, so `base.X(...)` is a compile error on every one of them; `BaseModel.X(...)` is the only legal delegation. |

## Dead members and traps

Almost every abstract member of this model is wired into the damage pipeline; exactly two are not. Overriding them changes nothing.

| `Member` | Declaration | override | Call sites | Verdict | Notes |
|---|---|---:|---:|---|---|
| `CalculateSailFireDamage` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/AgentApplyDamageModel.cs:48 | 3 | 0 times (0 lines, re-verified) | MEASURED | Declaration and its overrides exist, but nothing in the tree calls it — overriding it cannot change behaviour because no game code reaches it. Same-family control: the other 30 abstract members each show 4 non-declaration occurrences (3 overrides + 1 call site); this one and CalculateHullFireDamage show 3 — the missing occurrence is the call site. |
| `CalculateHullFireDamage` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/AgentApplyDamageModel.cs:50 | 3 | 0 times (0 lines, re-verified) | MEASURED | Declaration and its overrides exist, but nothing in the tree calls it — overriding it cannot change behaviour because no game code reaches it. Same-family control as above: 3 overrides, 0 call sites, against 30 siblings that all have exactly one call site. |

## Real example

The registration path that actually exists in 1.4.5. `IGameStarter.AddModel<T>` (`TaleWorlds.Core/IGameStarter.cs:9`) is the only model-injection surface, `CampaignGameStarter` implements it, and `GameEventReceiver.OnSessionStart` is the hook that receives the starter:

```csharp
public class MyDamageModelInstaller : CampaignEventReceiver
{
    public override void OnSessionStart(CampaignGameStarter campaignGameStarter)
    {
        campaignGameStarter.AddModel<AgentApplyDamageModel>(new MyTunedDamageModel());
    }
}
```

A derived model that buffs mounted victims. Note `BaseModel` delegation — this is the composition pattern, and it is the reason `CalculateDamage` must never be called from inside:

```csharp
public class MyTunedDamageModel : AgentApplyDamageModel
{
    public override float ApplyDamageAmplifications(
        in AttackInformation attackInformation,
        in AttackCollisionData collisionData,
        float baseDamage)
    {
        float amplified = this.BaseModel.ApplyDamageAmplifications(in attackInformation, in collisionData, baseDamage);
        if (collisionData.VictimHitBodyPart == BoneBodyPartType.Head)
        {
            return amplified * 1.4f;
        }

        return amplified;
    }

    public override float ApplyDamageScaling(
        in AttackInformation attackInformation,
        in AttackCollisionData collisionData,
        float baseDamage)
    {
        float scaled = this.BaseModel.ApplyDamageScaling(in attackInformation, in collisionData, baseDamage);
        if (attackInformation.DoesAttackerHaveMountAgent)
        {
            return scaled * 1.15f;
        }

        return scaled;
    }

    public override float CalculateRemainingMomentum(
        float originalMomentum,
        in Blow b,
        in AttackCollisionData collisionData,
        Agent attacker,
        Agent victim,
        in MissionWeapon attackerWeapon,
        bool isCrushThrough)
    {
        return this.BaseModel.CalculateRemainingMomentum(
            originalMomentum, in b, in collisionData, attacker, victim, in attackerWeapon, isCrushThrough);
    }
}
```

`base.ApplyDamageScaling(...)` does not compile here, and that is the mistake almost every first-time model author makes. All four pipeline stages plus `IsDamageIgnored` are declared `abstract` on this class, and C# forbids `base.` calls to abstract members. `BaseModel` — the `protected` property inherited from `MBGameModel<T>` — is the only way to reach the model you replaced, and it is populated for you at `AddModel<T>` time.

Asking the resolved model a question from a mission behavior — the correct direction for `CalculateDamage`:

```csharp
public class MyDamageProbeBehavior : MissionLogic
{
    public override void OnAgentHit(
        Agent affectedAgent,
        Agent affectorAgent,
        in MissionWeapon affectorWeapon,
        in Blow blow,
        in AttackCollisionData attackCollisionData)
    {
        AgentApplyDamageModel model = MissionGameModels.Current.AgentApplyDamageModel;
        MeleeCollisionReaction reaction;
        model.DecideWeaponCollisionReaction(
            in blow,
            in attackCollisionData,
            affectorAgent,
            affectedAgent,
            affectorWeapon,
            isFatalHit: false,
            isShruggedOff: false,
            momentumRemaining: 0f,
            out reaction);

        Debug.Print("resolved model = " + model.GetType().Name, 0);
        Debug.Print("damage inflicted = " + attackCollisionData.InflictedDamage, 0);
    }
}
```

`OnAgentHit` is declared on [`MissionBehavior`](../../mission/MissionBehavior), not on `MissionLogic`, and its five-parameter shape is fixed — `affectedAgent`, `affectorAgent`, the *blow's* weapon, the blow, then the collision data. Use the `affectorWeapon` parameter that is handed to you; reaching for the victim's currently-wielded item instead would answer a different question.

## Risks and boundaries

1. **Recursion is the default outcome of the obvious mistake.** `CalculateDamage` is non-virtual and dispatches through `MissionGameModels.Current`, so calling it from inside an override is infinite recursion with no compile-time warning. Compose with `BaseModel`, or with explicit stage calls.
2. **33 abstract members.** A derived class that omits any one of them does not compile — there is no partial-default fallback in this type. Budget for the whole surface, or derive from a concrete implementation and override what you need.
3. **Load order decides who wins.** `GameModelsManager.GetGameModel<T>` iterates the registration list backwards. Register last or be overridden by whoever registers after you.
4. **Capability gates and penetration rolls are separate.** Overriding `CanWeaponKnockDown` without `GetKnockDownPenetration` (or the reverse) produces no visible knockdowns and no error.
5. **The five pipeline stages are ordered and all four run.** There is no short-circuit between amplification, scaling, reduction, and general modification. A non-commutative multiplier in the wrong stage produces order-dependent bugs that look like randomness.
6. **`GetDamageMultiplierForBodyPart` serves humans, mounts, and missiles** through the same signature. `isHuman == false` covers horse and ballista collision bodies; a `return 0f` that forgets this branch removes mounted combatants from combat entirely.
7. **This model is mission-scoped but not mission-owned.** It is resolved once through `MissionGameModels` and lives for the game session; it is never serialized into a save. Changing it does not invalidate saves, but existing missions keep whatever model was resolved at mission start.
8. **`BaseModel` can be `null`.** `AddModel<T>` passes `GetModel<T>()` into `Initialize`, which returns `null` when no prior model of that type was registered. Always null-check before delegating.

## Dependencies

- **Host:** [`MissionGameModels`](../MissionGameModels) resolves the live instance through `GetGameModel<T>()`; every call site in the engine reads `MissionGameModels.Current.AgentApplyDamageModel` rather than caching it.
- **Injection:** [`IGameStarter`](../../core-extra/IGameStarter) `AddModel<T>` / `AddModel(GameModel)` is the only registration surface; `MBGameModel<T>.Initialize(T)` is what fills `BaseModel`.
- **Damage inputs:** [`AttackCollisionData`](../AttackCollisionData) and [`Blow`](../Blow) are the two `in` structs every damage hook receives; [`MissionWeapon`](../MissionWeapon) carries the wielded item.
- **Outcomes:** [`Agent`](../../mission/Agent) state (`Health`, `HasMount`), [`WeaponComponentData`](../../core-extra/WeaponComponentData), and `MeleeCollisionReaction` are what the hooks read and write.
- **Sibling model:** [`AgentStatCalculateModel`](../AgentStatCalculateModel) runs first — it produces the agent's stats that this model then scales damage by.
- Bucket home: [mission-ext API section](../)