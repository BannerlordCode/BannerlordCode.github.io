---
title: "AgentStatCalculateModel"
description: "The abstract model that turns skills, equipment, difficulty, and weapon choice into an agent's 98 driven stat slots, plus the AI difficulty knobs every AI decision reads."
---

# AgentStatCalculateModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class AgentStatCalculateModel : MBGameModel<AgentStatCalculateModel>`
**Base:** `MBGameModel<AgentStatCalculateModel>`
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs`

## One-line responsibility

It is the writer behind [`AgentDrivenProperties`](../AgentDrivenProperties): every swing-speed, encumbrance, armour, mount-handling, and AI-decision number an agent uses is computed here, at creation and again on every periodic update.

## Mental model

Read it as **a recalculation engine with two entry points and one difficulty dial**. The two entry points are `InitializeAgentStats` (birth, full computation) and `UpdateAgentStats` (periodic refresh). Both are `abstract`, and both write into an `AgentDrivenProperties` that is passed in — the model never owns the stat block, it only fills it.

That ownership split explains the most common symptom people report. `Agent.UpdateDrivenProperties` calls `UpdateAgentStats` on an interval, and `UpdateAgentStats` recomputes the AI block wholesale. So **anything you write into `AgentDrivenProperties` that the model also writes will be discarded on the next pass.** The reliable way to change AI behaviour is to replace this model, not to poke the stat array.

The difficulty dial is `GetDifficultyModifier()`, a single abstract float that everything else is calibrated against, and reading its consumers shows why. `CalculateAILevel` divides the agent's relevant skill by 300 and multiplies by a factor that is `0.1` when difficulty is `<= 0`, `0.32` when `<= 0.5`, and `0.96` otherwise — then clamps to `[0, 1]`. `CalculateAIAttackOnDecideMaxValue` reads the same modifier and returns `0.16` for easy, `0.48` for hard. So difficulty is not a multiplier bolted on at the end; it is the primary independent variable of the AI curve.

There is also a **global override** that sits above all of it: `SetAILevelMultiplier(float)` sets a private `_AILevelMultiplier`, applied in `SetAiRelatedProperties` on top of both the melee-skill and ranged-skill AI levels, with `ResetAILevelMultiplier()` restoring `1f`. That pair is the sanctioned runtime lever for making the AI weaker or stronger without replacing the model — and it is non-virtual, so it works on your subclass unchanged.

One asymmetry worth noticing before you subclass. The **`abstract`** members are the eleven that every implementation must provide: both stat entry points, `GetDifficultyModifier`, `CanAgentRideMount`, `GetWeaponDamageMultiplier`, `GetEquipmentStealthBonus`, `GetSneakAttackMultiplier`, and the three resistance getters plus `GetBreatheHoldMaxDuration`. Everything else — `HasHeavyArmor`, `GetEffectiveArmorEncumbrance`, `GetWeaponInaccuracy`, `GetEffectiveSkill`, `GetInteractionDistance`, `GetMaxCameraZoom`, and the rest — is `virtual` with a working vanilla body. So the surface is split: a small mandatory core, and a large set of tunable overrides that most implementations never touch.

As with [`AgentApplyDamageModel`](../AgentApplyDamageModel), all eleven abstract members forbid `base.` delegation. `BaseModel` is the only composition route.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `InitializeAgentStats` | `public abstract void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)` | The birth computation, called once from `AgentDrivenProperties.InitializeDrivenProperties`. Takes the agent, its spawn equipment, the stat block to fill, and the build ticket — so it has everything it needs to derive the full 98-slot block. This is the method to override when you want an agent's baseline to be different from spawn. |
| `UpdateAgentStats` | `public abstract void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)` | The periodic refresh, called from `AgentDrivenProperties.UpdateDrivenProperties` and from the agent's own update path. Takes only the agent and the stat block — **no build data** — so anything computed at spawn and not recoverable from the agent is not available here. **This is the method that overwrites your direct stat writes**, which is why overriding it is the correct way to change AI behaviour. |
| `GetDifficultyModifier` | `public abstract float GetDifficultyModifier()` | The single abstract dial that scales the whole AI curve. `CalculateAILevel` maps it to a `0.1` / `0.32` / `0.96` skill-to-AI factor and `CalculateAIAttackOnDecideMaxValue` maps it to `0.16` / `0.48`. It must be a stable, cheap read — it is consulted inside per-agent AI evaluation. |
| `SetAILevelMultiplier` / `ResetAILevelMultiplier` | `public void SetAILevelMultiplier(float multiplier)` / `public void ResetAILevelMultiplier()` | The global post-multiplier applied in `SetAiRelatedProperties` on top of the difficulty-derived AI level. **Non-virtual**, so it is available on any subclass without overriding. `Reset` sets it to `1f`. The sanctioned runtime lever for difficulty tuning. |
| `CanAgentRideMount` | `public abstract bool CanAgentRideMount(Agent agent, Agent targetMount)` | The mount gate, checked before an AI soldier will climb onto a mount. Abstract because whether a given mount is rideable depends on the character's mount type, not just on the mount. |
| `GetWeaponDamageMultiplier` | `public abstract float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)` | Per-weapon damage scaling. Abstract because the answer depends on skill progression and equipment rules that differ per game mode. Consumed by the damage layer, so changing it here changes real damage rather than only the preview. |
| `GetEquipmentStealthBonus` / `GetSneakAttackMultiplier` | `public abstract float GetEquipmentStealthBonus(Agent agent)` / `GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)` | The stealth pair. The first is the equipment contribution to stealth, the second the multiplier applied when attacking from stealth. Both abstract, and both paired with `AgentApplyDamageModel.CanWeaponDealSneakAttack` on the damage side. |
| `GetKnockBackResistance` / `GetKnockDownResistance` / `GetDismountResistance` | `public abstract float GetKnockBackResistance(Agent agent)` / `GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)` / `GetDismountResistance(Agent agent)` | The three physical-resistance getters. Each pairs with a `CanWeapon*` gate and a `Get*Penetration` roll on [`AgentApplyDamageModel`](../AgentApplyDamageModel); override all three sides coherently or the resistance reads will not matter. `GetKnockDownResistance` is the only one taking a `StrikeType`, and the default is `StrikeType.Invalid`. |
| `GetBreatheHoldMaxDuration` | `public abstract float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)` | Transforms a supplied baseline into the agent's actual hold duration, so endurance can depend on skills without the caller knowing the formula. |
| `GetWeaponInaccuracy` | `public virtual float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)` | Vanilla body provided, and worth reading because it shows the intended shape. Ranged weapons compute from weapon `Accuracy` reduced by `weaponSkill` at `0.002` per point (or `0.003` for slings); wide-grip melee weapons use `1 - weaponSkill * 0.01`; everything else returns `0`. The result is clamped at zero, so a high skill floors the penalty rather than going negative. |
| `HasHeavyArmor` | `public virtual bool HasHeavyArmor(Agent agent)` | A threshold query with the threshold baked in: `agent.GetBaseArmorEffectivenessForBodyPart(BoneBodyPartType.Chest) >= 24f`. `Agent` calls this directly, so overriding it changes how the engine classifies the agent — heavy armour suppresses AI behaviour in ways the stat array does not show. |
| `GetEnvironmentSpeedFactor` | `public virtual float GetEnvironmentSpeedFactor(Agent agent)` | Weather and time-of-day speed penalties, read from `agent.Mission.Scene`. Outdoor rain multiplies by `0.9`, and for non-human agents an outdoor night multiplies by another `0.9`. Indoors is exempt. A mod that changes scenes should check whether this override is still appropriate. |
| `GetEffectiveSkill` / `GetEffectiveSkillForWeapon` | `public virtual int GetEffectiveSkill(Agent agent, SkillObject skill)` / `GetEffectiveSkillForWeapon(Agent agent, WeaponComponentData weapon)` | The resolution layer between campaign skills and mission statistics. The default just reads `agent.Character.GetSkillValue(skill)`; the weapon variant forwards to `weapon.RelevantSkill`. Override here rather than touching stat slots when you want skill effects in a mission. |
| `GetInteractionDistance` / `GetMaxCameraZoom` | `public virtual float GetInteractionDistance(Agent agent)` / `GetMaxCameraZoom(Agent agent)` | Two presentation-adjacent overrides with trivial vanilla bodies (`1.5f` and `1f`). Cheap to change, and the right place to do it — nothing else in the class touches them. |
| `GetMissionDebugInfoForAgent` | `public virtual string GetMissionDebugInfoForAgent(Agent agent)` | Debug string hook, defaulting to `"Debug info not supported in this model"`. Override it and the mission debug overlay gains per-agent stat text; leave it and the overlay shows the placeholder. |
| `GetMeleeSkill` | `protected int GetMeleeSkill(Agent agent, WeaponComponentData equippedItem, WeaponComponentData secondaryItem)` | The weapon-to-skill mapping, and the subtlest method here. One-handed and polearm use their own skill; two-handed uses `TwoHanded` only when there is no secondary item and falls back to `OneHanded` when there is; anything else is treated as `OneHanded`; and an agent with no weapon at all uses `Athletics`. |

## Real example

Registering a replacement — `IGameStarter.AddModel<T>` is the only injection surface, and `GetGameModel<T>` scans backwards so the last registration wins:

```csharp
public class MyStatModelInstaller : CampaignEventReceiver
{
    public override void OnSessionStart(CampaignGameStarter campaignGameStarter)
    {
        campaignGameStarter.AddModel<AgentStatCalculateModel>(new MyDifficultyStatModel());
    }
}
```

A model that reuses the previous model's work and only changes the difficulty dial, delegating through `BaseModel` because `base.` on an abstract member does not compile:

```csharp
public class MyDifficultyStatModel : AgentStatCalculateModel
{
    private float _difficulty = 0.5f;

    public override float GetDifficultyModifier()
    {
        return this._difficulty;
    }

    public void SetDifficulty(float difficulty)
    {
        this._difficulty = difficulty;
    }

    public override void InitializeAgentStats(
        Agent agent,
        Equipment spawnEquipment,
        AgentDrivenProperties agentDrivenProperties,
        AgentBuildData agentBuildData)
    {
        this.BaseModel.InitializeAgentStats(agent, spawnEquipment, agentDrivenProperties, agentBuildData);
        agentDrivenProperties.MaxSpeedMultiplier *= 1.1f;
    }

    public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)
    {
        this.BaseModel.UpdateAgentStats(agent, agentDrivenProperties);
    }
}
```

Two deliberate omissions in that class, both of which are compile errors you will hit if you copy it: it does not implement `CanAgentRideMount`, `GetWeaponDamageMultiplier`, `GetEquipmentStealthBonus`, `GetSneakAttackMultiplier`, `GetKnockBackResistance`, `GetKnockDownResistance`, `GetDismountResistance`, or `GetBreatheHoldMaxDuration` — the other eight abstract members — and it cannot write `base.GetDifficultyModifier()` even for the one it does implement, because every abstract member forbids `base.` delegation.

Reading resolved skills and accuracy from a live agent, which is the side of this model you can observe without replacing anything:

```csharp
public class MyAccuracyProbe : MissionLogic
{
    public override void OnAgentCreated(Agent agent)
    {
        AgentStatCalculateModel model = MissionGameModels.Current.AgentStatCalculateModel;
        SkillObject skill = DefaultSkills.OneHanded;

        int effective = model.GetEffectiveSkill(agent, skill);
        float inaccuracy = model.GetWeaponInaccuracy(agent, null, effective);

        Debug.Print("difficulty = " + model.GetDifficultyModifier(), 0);
        Debug.Print("effective " + skill + " = " + effective, 0);
        Debug.Print("base inaccuracy = " + inaccuracy, 0);
    }
}
```

Passing `null` for the weapon is legal — `GetWeaponInaccuracy` checks `weapon.IsRangedWeapon` first, so a null returns `0f` rather than throwing. It is a useful probe of the skill path alone, and useless as a measure of any real weapon.

## Risks and boundaries

1. **Direct stat writes do not survive an update.** `UpdateAgentStats` is called periodically and rewrites the AI block. Poking `AgentDrivenProperties` from a behavior produces a change that disappears; override the model instead.
2. **`base.` delegation is illegal on all eleven abstract members.** They are `abstract`, so C# forbids calling them through `base.`. `BaseModel` is the only route to the model you replaced.
3. **`BaseModel` can be `null`.** `AddModel<T>` forwards `GetModel<T>()`, which returns `null` when no prior model of the type was registered.
4. **`UpdateAgentStats` gets no `AgentBuildData`.** Anything spawn-time-only that you need on refresh must be re-derived from the agent, or cached by your own model keyed on the agent.
5. **Difficulty is read very frequently.** `GetDifficultyModifier` is consulted inside per-agent AI evaluation, so it must be a cheap, stable read. Caching it in a field and updating it explicitly — as `MyDifficultyStatModel` does — is the right shape.
6. **`HasHeavyArmor` changes classification, not just a number.** `Agent` calls it directly, and the `>= 24f` chest-effectiveness threshold is inside the vanilla body. Override it and AI behaviour shifts in ways no stat array will explain.
7. **`GetKnockDownResistance` takes a `StrikeType` defaulting to `StrikeType.Invalid`.** An override that ignores the strike type silently discards the thrust-versus-swing distinction the signature exists to provide.
8. **The resistance getters only matter if the damage side agrees.** Each one pairs with a `CanWeapon*` capability gate and a `Get*Penetration` roll on [`AgentApplyDamageModel`](../AgentApplyDamageModel). Changing resistance alone produces no visible effect.
9. **Not saved.** Everything is recomputed per mission. Campaign skills and equipment are the persisted layer; this is the projection.

## Dependencies

- **Output:** [`AgentDrivenProperties`](../AgentDrivenProperties) is the 98-slot block this model fills; `InitializeDrivenProperties` and `UpdateDrivenProperties` are the two `internal` callers that invoke it.
- **Host:** [`Agent`](../../mission/Agent) allocates the stat block during creation and drives the periodic refresh.
- **Resolution:** [`MissionGameModels`](../MissionGameModels) exposes the live instance; `GameModelsManager.GetGameModel<T>` picks the last-registered one.
- **Injection:** [`IGameStarter`](../../core/IGameStarter) `AddModel<T>` is the only registration surface and what populates `BaseModel`.
- **Inputs:** [`AgentBuildData`](./AgentBuildData), [`Equipment`](../../core-extra/Equipment), [`SkillObject`](../../core-extra/SkillObject), [`WeaponComponentData`](../../core-extra/WeaponComponentData), and `DefaultSkills` supply the raw material.
- **Consumer:** [`AgentApplyDamageModel`](../AgentApplyDamageModel) reads the weapon damage, stealth, and resistance results this model produces.
- Bucket home: [mission-ext API section](../)