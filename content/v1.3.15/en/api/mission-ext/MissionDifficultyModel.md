---
title: "MissionDifficultyModel"
description: "The mission-side combat-difficulty hook: one abstract method that scales every damage number by victim/attacker relationship, called from the damage pipeline."
---
# MissionDifficultyModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionDifficultyModel : MBGameModel<MissionDifficultyModel>`
**Base:** `MBGameModel<MissionDifficultyModel>`
**Source:** `TaleWorlds.MountAndBlade/ComponentInterfaces/MissionDifficultyModel.cs`

## Overview

`MissionDifficultyModel` is a single-method mission-side model: an abstract class with exactly one abstract member, `GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)`. It is the hook through which a mod changes how hard combat feels *for the player specifically* — the vanilla implementation returns `Mission.Current.DamageToPlayerMultiplier` when the victim is the main agent, `DamageToFriendsMultiplier` when the victim is a friendly agent, `DamageFromPlayerToFriendsMultiplier` when the player is the attacker on a friendly victim, and `1f` for everyone else.

It is a `MBGameModel<MissionDifficultyModel>`, so it is registered exactly like a campaign model: through `IGameStarter.AddModel<T>` during mission bootstrap, and reached at runtime through `MissionGameModels.Current.MissionDifficultyModel`. The engine never calls the abstract method directly — it goes through `Mission.GetDamageMultiplierOfCombatDifficulty`, which null-checks the model and falls back to `1f` when no model is registered. The result is consumed inside `AttackInformation`'s constructor (stored as `CombatDifficultyMultiplier`) and again inside [MissionCombatMechanicsHelper](../MissionCombatMechanicsHelper/).

## Mental Model

Treat it as **"a per-victim damage scale that sits between the damage model and the engine's hit resolution"**:

- **Typical call order for a mod.** In your [MBSubModuleBase](../../core/MBSubModuleBase/) override `InitializeMissionModel` (or the mission equivalent of the starter hook), call `game.Models.AddModel<MissionDifficultyModel>(new MyDifficultyModel())`. The engine then routes every combat-damage query through your instance. Nothing else is required — no behavior registration, no event subscription.
- **The call is not from your code.** `Mission.GetDamageMultiplierOfCombatDifficulty(victim, attacker)` is invoked by the engine when an `AttackInformation` is built. Your model runs *during* hit resolution, before damage is applied. Do not mutate agents from inside it.
- **`victimAgent` may be a mount.** The vanilla implementation starts with `victimAgent = victimAgent.IsMount ? victimAgent.RiderAgent : victimAgent`. If your override does not do the same normalization, a horse taking damage will be classified differently from its rider — the two agents then get different multipliers for the same blow.
- **`attackerAgent` is optional and frequently null.** The default is `null`, and the engine passes whatever it has; missile and environmental damage paths do not always supply one. Never dereference it without a null check, even though the vanilla model checks.
- **Trap: returning `0f` is catastrophic, not "very hard".** The value is a *multiplier* applied to damage. `0f` makes a target invulnerable; a negative value produces negative health. Return a positive finite float.
- **Trap: the fallback is silent.** `Mission.GetDamageMultiplierOfCombatDifficulty` returns `1f` when `MissionGameModels.Current.MissionDifficultyModel` is null. If your registration happened at the wrong point in bootstrap, nothing fails — combat simply behaves as vanilla and you get no diagnostic.
- **Trap: `MissionGameModels.Current` is mission-scoped.** Unlike `Campaign.Current.Models`, it is not available in the campaign map screen. Any code that reads `MissionDifficultyModel` must be inside a mission.

### When to Use

**Use `MissionDifficultyModel` when:**
- You want to change how much damage the player deals or takes, per victim class (player, friends, everyone else), without touching the generic damage model.
- You want difficulty that is context-sensitive — armour class, troop tier, number of nearby allies — applied at the moment a blow lands rather than baked into troop stats.
- You are implementing an accessibility or "assist mode" option that softens incoming damage only.

**Do NOT use `MissionDifficultyModel` when:**
- You want to change base weapon damage, armour values or health pools. That is the damage model / equipment data, not this multiplier.
- You want to change AI accuracy. That is `Mission.GetShootDifficulty`, a separate path with no model hook.
- You want to change morale, formation behaviour or agent AI decisions. Those are `BattleMoraleModel`, `BattleInitializationModel` and the mission-logic behaviours.
- You want a *campaign-level* difficulty setting. That is the campaign's own difficulty model reached through `Campaign.Current.Models`, and it is not consulted by this hook.
- You need to modify damage after the fact from a behaviour. Do it in a [MissionBehavior](../../mission/MissionBehavior/) `OnAgentHit`/`OnEndMissionInternal`, not inside the model.

## Dependencies

- [MissionCombatMechanicsHelper](../MissionCombatMechanicsHelper/) — a live consumer of the returned multiplier inside the damage pipeline.
- [Mission](../../mission/Mission/) — owns `GetDamageMultiplierOfCombatDifficulty`, the `DamageToPlayerMultiplier` / `DamageToFriendsMultiplier` / `DamageFromPlayerToFriendsMultiplier` fields, and the `MissionGameModels` instance the model is stored in.
- [MissionLogic](../MissionLogic/) — the sibling mission-side extension point, for behaviour rather than models.
- [MBGameModel](../../core-extra/MBGameModel/) — the base class that carries the `Initialize(T)` chaining contract.
- [GameModel](../../core-extra/GameModel/) — the root of the model hierarchy the registry stores.
- [Agent](../../mission/Agent/) — the `victimAgent` / `attackerAgent` parameters; `IsMount`, `RiderAgent`, `IsMainAgent`, `IsFriendOf` are what the vanilla model reads.
- [MissionBehavior](../../mission/MissionBehavior/) — the alternative place to react to hits when you need post-damage effects rather than a pre-damage scale.
- [DifficultyModel](../../campaign-ext/DifficultyModel/) — the campaign-side difficulty model, a different system with a different lifetime; do not confuse the two.
- [MBSubModuleBase](../../core/MBSubModuleBase/) — declares the mission model registration hook where your model is installed.

## Key members

#### `public abstract float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)`

The single member, and the whole point of the type.
- **Contract:** given a victim agent and an optional attacker agent, return a positive multiplier applied to the damage of the blow being resolved against that victim.
- **Return-value semantics:** `1f` means "no change". Values below `1f` reduce damage, above `1f` increase it. There is no clamp applied by the engine — the model owns the range.
- **`victimAgent`:** may be a mount, in which case the vanilla implementation substitutes the rider. A victim that is neither a human nor resolvable to a rider leaves the vanilla path at `1f`.
- **`attackerAgent`:** default `null`. Vanilla only inspects it in the specific case "victim is a friend of the main agent **and** the attacker is the main agent", to select `DamageFromPlayerToFriendsMultiplier` instead of `DamageToFriendsMultiplier`.
- **When to call:** never call it yourself in gameplay code — read `Mission.Current.GetDamageMultiplierOfCombatDifficulty(...)` if you need the current value, or listen to `OnAgentHit` on a behaviour.
- **Side effects:** none permitted. The engine builds `AttackInformation` (and therefore calls this method) in the middle of hit resolution; mutating agents or spawning here corrupts the in-flight blow.

## Examples

### Example 1 — register a custom difficulty model

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public class MyMission : MBSubModuleBase
{
    public override void OnMissionInitializationFinished()
    {
        // Registered through the mission model registry, not a behavior.
        base.OnMissionInitializationFinished();
    }

    public override void InitializeMissionModel(int randomSeed, IGameStarter gameModels)
    {
        // Wraps the already-registered DefaultMissionDifficultyModel.
        gameModels.AddModel<MissionDifficultyModel>(new AssistDifficultyModel());
    }
}

public class AssistDifficultyModel : MissionDifficultyModel
{
    public override float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)
    {
        // Called by the engine during hit resolution. Pure function only.
        Agent normalized = victimAgent.IsMount ? victimAgent.RiderAgent : victimAgent;
        if (normalized == null || !normalized.IsMainAgent)
        {
            return 1f;
        }
        return 0.6f; // incoming damage to the player is softened
    }
}
```

### Example 2 — extend the vanilla model instead of replacing it

```csharp
public class TierAwareDifficultyModel : MissionDifficultyModel
{
    private MissionDifficultyModel _baseModel;

    public override void Initialize(MissionDifficultyModel baseModel)
    {
        // MBGameModel<T>.Initialize hands you the registered default.
        _baseModel = baseModel;
    }

    public override float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)
    {
        float vanilla = _baseModel.GetDamageMultiplierOfCombatDifficulty(victimAgent, attackerAgent);
        Agent rider = victimAgent.IsMount ? victimAgent.RiderAgent : victimAgent;
        if (rider == null || !rider.IsMainAgent)
        {
            return vanilla;
        }
        return vanilla * 0.75f;
    }
}
```

### Example 3 — read the current multiplier from a mission behavior

```csharp
public class DamageAuditBehavior : MissionBehavior
{
    public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent,
        in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)
    {
        // Ask the mission; it routes to whichever model is registered and
        // falls back to 1f when none is.
        float multiplier = Mission.Current.GetDamageMultiplierOfCombatDifficulty(affectedAgent, affectorAgent);
        if (multiplier != 1f)
        {
            Debug.Print($"damage scale for {affectedAgent.Character.Name}: {multiplier}");
        }
    }
}
```

### Example 4 — react after the damage instead of scaling it

```csharp
public class LethalBlowGuardBehavior : MissionBehavior
{
    public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent,
        in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)
    {
        // Do NOT scale damage here - that is the model's job.
        // Post-hit effects belong in a behavior.
        if (affectedAgent.Health < affectedAgent.HealthLimit * 0.15f && affectedAgent.IsMainAgent)
        {
            Debug.Print("Player is near death.");
        }
    }
}
```

## Risks and crash boundaries

- **Crash boundary — `MissionGameModels.Current` is null outside a mission.** Reaching the model from campaign map code (a daily tick, a menu) gets you a `NullReferenceException` on `.MissionDifficultyModel`. Guard with `Mission.Current != null`.
- **Crash boundary — `Mission.Current` inside the model.** The vanilla implementation reads `Mission.Current.DamageToPlayerMultiplier` and friends. If your override does the same while no mission is current, it throws. The model is only invoked from inside a mission, so this is safe by construction — but a unit test calling it directly is not.
- **Null `attackerAgent` is normal.** Missile damage, area effects and environmental damage paths do not always supply an attacker. An override that dereferences it without a check will throw in the middle of hit resolution, which surfaces as a battle crash rather than a clean error.
- **Mount normalization.** If you skip the `IsMount ? RiderAgent : self` step, a horse and its rider receive different difficulty treatment for the same physical blow, and `AttackInformation.CombatDifficultyMultiplier` becomes inconsistent with player expectation.
- **A `0f` or negative return is a live exploit, not a difficulty setting.** The value multiplies damage directly. `0f` makes the victim immune; a negative value drives health negative and can corrupt agent state far past the damage system. Clamp inside your override.
- **Silent fallback masks a failed registration.** `Mission.GetDamageMultiplierOfCombatDifficulty` returns `1f` when no model is registered. A model installed in the wrong bootstrap hook therefore produces vanilla combat with no error at all. If your change "does nothing", verify the registration hook first.
- **Registration order matters when wrapping.** `MBGameModel<T>.Initialize(T baseModel)` receives the previously registered model. If you register your wrapper before the default exists, `_baseModel` is null and every call throws inside hit resolution.
- **Cross-domain dependency.** The type lives in `TaleWorlds.MountAndBlade` under `.ComponentInterfaces` but its implementation reaches into `TaleWorlds.Core` (`Vec3`, `GameState`) and the mission/agent layer. A mod assembly providing the model must reference `TaleWorlds.MountAndBlade` and `TaleWorlds.Core`.
- **Load-order boundary.** The model must be registered during mission model initialization, which happens *after* the mission behaviors are created but *before* combat starts. Registering from a mission behavior's `OnMissionBehaviorAdded` is too late — the first blows may already have resolved.
- **Not save-serialized, and it should not be.** Nothing here persists. A per-campaign "assist mode" flag must live in a campaign behavior's `SyncData([IDataStore](../../campaign-ext/IDataStore/))` (or a setting file) and be read by the model at call time — do not try to store it on the model.
- **ID stability.** This model holds no identifiers, so nothing to keep stable — but the *ordering* of model registration is effectively an implicit contract: whoever registers last and wraps via `Initialize` changes the effective behaviour for everyone. Keep the chain shallow and document the order your mod assumes.

## Cross-Version Notes

- **v1.3.x (this page):** `MissionDifficultyModel` has exactly one abstract member, `GetDamageMultiplierOfCombatDifficulty`, and is a `MBGameModel<MissionDifficultyModel>` registered through `MissionGameModels`. `DefaultMissionDifficultyModel` is the shipped default and is referenced only through the mission, not exposed as a page-level dependency here.
- **v1.4.x:** unchanged in shape. Newer versions keep the single-method contract; if they add damage-scaling dimensions (armour class, formations) they do so as *new model types*, not by widening this one.
- **v1.5.x:** expect additional mission models around hit resolution and AI. This type remains the player-specific difficulty scale. Build against `Mission.GetDamageMultiplierOfCombatDifficulty` rather than reaching for `MissionGameModels.Current` directly, so you inherit the `1f` fallback.

## See Also

- ↑ Parent bucket: [Mission-Ext API index](./)
- ↔ Sibling: [MissionCombatMechanicsHelper](../MissionCombatMechanicsHelper/) — where the multiplier is consumed
- ↔ Sibling: [MissionState](../MissionState/) — the mission lifecycle state that owns the current mission
- ↑ Mission: [Mission](../../mission/Mission/) — `GetDamageMultiplierOfCombatDifficulty` and the `Damage*Multiplier` fields
- ↑ MissionBehavior: [MissionBehavior](../../mission/MissionBehavior/) — the behavioural alternative to scaling damage
- ↑ Agent: [Agent](../../mission/Agent/) — the victim/attacker parameters
- ↑ Model base: [MBGameModel](../../core-extra/MBGameModel/)
- ↑ Model root: [GameModel](../../core-extra/GameModel/)
- ↑ Campaign-side sibling: [DifficultyModel](../../campaign-ext/DifficultyModel/)