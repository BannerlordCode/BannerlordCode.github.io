---
title: "AgentDrivenProperties"
description: "The 98-slot float block behind one agent's combat and locomotion numbers: swing speed, encumbrance, armour values, mount handling, and the whole AI tuning surface, addressable by DrivenProperty enum."
---

# AgentDrivenProperties

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentDrivenProperties`
**Base:** `object` — no base class, no interface
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentDrivenProperties.cs`

## One-line responsibility

It is the flat array of per-agent derived numbers that sits between the agent's authored skills and the native simulation: the same class holds swing speed, encumbrance, per-limb armour, horse handling, and roughly seventy AI decision weights.

## Mental model

The file is 1203 lines but the storage is one line: `_statValues = new float[98]`. Every one of the 98 public properties is a hand-written pass-through to `GetStat(DrivenProperty.X)` or `SetStat(DrivenProperty.X, value)`, and `GetStat` is nothing more than `_statValues[(int)propertyEnum]`. So the whole class is **a typed façade over a 98-element float array indexed by the `DrivenProperty` enum**.

That gives you the two access routes and the reason to care about the difference. The named route (`agent.AgentDrivenProperties.SwingSpeedMultiplier`) is readable and discoverable. The index route (`agent.AgentDrivenProperties.GetStat(DrivenProperty.SwingSpeedMultiplier)`) is the same value with no property hop in between, and it is what the engine itself uses — `Agent` calls `AgentDrivenProperties.GetStat(type)` and `SetStat(type, val)` directly. There is no behavioural difference between them; they are the same array slot.

Now the enum, because it is not a clean 1:1 mapping and that is where the sharp edges are. `DrivenProperty` declares **101 named members**, but the array is `new float[98]`. The real indices are `0` through `97`; `Count = 98` is a sentinel that documents the length. Two members sit outside that range and both are traps:

- `None = -1`. Passing it to `GetStat` or `SetStat` indexes `-1` and throws. It exists as a default/unset marker, not as a usable slot.
- `DrivenPropertiesCalculatedAtSpawnEnd = 64`, declared after `Count` as a marker meaning "the stat block finished calculating at spawn end". Its value **aliases `WeaponsEncumbrance = 64`**. So `SetStat(DrivenProperty.DrivenPropertiesCalculatedAtSpawnEnd, x)` does not error and does not do nothing — it silently overwrites weapons encumbrance. That alias is the single most dangerous thing about this class and it is invisible unless you read the enum's last two lines.

Two lifecycle facts follow from the storage model. First, `new float[98]` means every stat starts at **0.0f**, not at a sensible default. A property that has not been written yet reads zero, which for a multiplier is a divide-by-zero waiting to happen. Second, the array size is hard-coded and the index is `(int)propertyEnum`, so the two must agree exactly — which is why `None = -1` throws and `DrivenPropertiesCalculatedAtSpawnEnd = 64` writes into the wrong slot instead.

The population boundary is `internal`. `InitializeDrivenProperties` and `UpdateDrivenProperties` are both `internal float[]` methods, and so is the `Values` property. From a mod you can read and write any of the 98 slots, but you cannot ask the object to recompute itself — the recompute path calls `MissionGameModels.Current.AgentStatCalculateModel`, and only the engine can trigger it. Practically this means: **write a stat once, at a moment you know is safe, and do not expect the model to notice.**

That last point is the single biggest trap on this page. `AgentStatCalculateModel.UpdateAgentStats` runs periodically and rewrites the AI block wholesale. If you set, say, `AIDecideOnAttackChance` from a behavior, the next update pass will overwrite it. Stat writes that survive are the ones the model does not touch on that code path — which is why the reliable modding practice is to wrap the model, not to poke these values.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `GetStat` | `public float GetStat(DrivenProperty propertyEnum)` | Raw indexed read. `_statValues[(int)propertyEnum]` — no bounds checking beyond the array itself. This is the engine's own read path and the one to use in tight loops. Out-of-range enum values throw rather than clamp. |
| `SetStat` | `public void SetStat(DrivenProperty propertyEnum, float value)` | Raw indexed write. Also unchecked. Everything the model computes eventually lands here, so a value you set can be indistinguishable from a computed one — there is no dirty flag and no provenance. |
| `Values` | `internal float[] Values => _statValues` | The backing array itself. `internal`, so a mod cannot reach it directly; the engine uses it to push the whole block to native in one copy. Use `GetStat` per slot instead of trying to marshal the array. |
| `InitializeDrivenProperties` | `internal float[] InitializeDrivenProperties(Agent agent, Equipment spawnEquipment, AgentBuildData agentBuildData)` | The birth path. Calls `InitializeAgentStats` then `UpdateAgentStats` on the resolved model and returns the array. `internal` — you cannot call it, and you should not: doing so outside agent creation leaves a half-initialized stat block on a live agent. |
| `UpdateDrivenProperties` | `internal float[] UpdateDrivenProperties(Agent agent)` | The refresh path, calling only `UpdateAgentStats`. This is the call that will silently undo your writes, and it is what `Agent` invokes on its periodic update. |
| `SwingSpeedMultiplier` / `ThrustOrRangedReadySpeedMultiplier` / `HandlingMultiplier` | `public float { get; set; }` | Weapon-handling multipliers. They scale animation playback rates rather than raw damage, which is why a swing-speed change alters how fast a weapon looks and hits, not how hard. |
| `WeaponsEncumbrance` | `public float { get; set; }` | Weapon-side encumbrance, and the slot that `DrivenProperty.DrivenPropertiesCalculatedAtSpawnEnd` also aliases (both equal `64`). Writing through the marker name corrupts this value silently. Together with `ArmorEncumbrance` it is summed by `Agent.GetTotalEncumbrance()`. |
| `ArmorEncumbrance` | `public float { get; set; }` | Armour-side encumbrance. `Agent.GetTotalEncumbrance()` sums it with `WeaponsEncumbrance`, and both feed movement speed through the stat model. Writing only one produces a partially-encumbered agent. |
| `ArmorHead` / `ArmorTorso` / `ArmorLegs` / `ArmorArms` | `public float { get; set; }` | Per-limb armour values, kept separately because damage is resolved per body part. `AgentApplyDamageModel.GetDamageMultiplierForBodyPart` consumes them, so this is the join point between the equipment layer and the damage layer. |
| `MaxSpeedMultiplier` / `CombatMaxSpeedMultiplier` / `CrouchedSpeedMultiplier` / `TopSpeedReachDuration` | `public float { get; set; }` | Locomotion budget. `CombatMaxSpeedMultiplier` is the one that clamps movement while engaged; `CrouchedSpeedMultiplier` is why crouching slows you down before any stance penalty is applied. |
| `MountManeuver` / `MountSpeed` / `MountChargeDamage` / `MountDashAccelerationMultiplier` | `public float { get; set; }` | Mount handling block. `MountChargeDamage` sits right on the charge path that `AgentApplyDamageModel`'s knockback and crush-through rules also read, so it is the single most cross-cutting mount stat. |
| `AttributeRiding` / `AttributeShield` / `AttributeCourage` / `AttributeHorseArchery` | `public float { get; set; }` | The resolved skill attributes for this agent in this mission. They are mission-scoped derivations of campaign skills, not the campaign values themselves — a high campaign Riding does not guarantee a high `AttributeRiding` here. |
| `AiShootFreq` / `AiWaitBeforeShootFactor` / `AIDecideOnAttackChance` / `AIBlockOnDecideAbility` / `AIParryOnDecideAbility` | `public float { get; set; }` | A representative slice of the ~70 AI-decision weights. These are *decision probabilities and timing*, not skill levels, and they are rewritten on every `UpdateAgentStats` pass. |
| `AiRangedHorsebackMissileRange` / `AiFlyingMissileCheckRadius` / `AiFacingMissileWatch` | `public float { get; set; }` | AI sensing geometry — how far and how wide an AI archer looks for a target. `SetAiRelatedProperties` derives several of these from the agent's effective skill and difficulty. |

## Real example

Reading stats off a live agent — the ordinary use, and the one with no lifecycle hazard:

```csharp
public class MyStatReport : MissionLogic
{
    public override void OnAgentCreated(Agent agent)
    {
        AgentDrivenProperties stats = agent.AgentDrivenProperties;

        Debug.Print("swing speed      = " + stats.SwingSpeedMultiplier, 0);
        Debug.Print("armor encumbrance= " + stats.ArmorEncumbrance, 0);
        Debug.Print("weapons encumbr. = " + stats.WeaponsEncumbrance, 0);
        Debug.Print("total encumbrance= " + agent.GetTotalEncumbrance(), 0);
    }
}
```

Using the indexed form, which is the engine's own path and skips a property hop:

```csharp
public class MyIndexedRead : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        Agent main = Mission.Current.MainAgent;
        if (main == null)
        {
            return;
        }

        float swing = main.AgentDrivenProperties.GetStat(DrivenProperty.SwingSpeedMultiplier);
        float charge = main.AgentDrivenProperties.GetStat(DrivenProperty.MountChargeDamage);

        Debug.Print("swing=" + swing + " charge=" + charge, 0);
    }
}
```

A write that sticks, chosen because the model does not recompute it on the ordinary update path:

```csharp
public class MySpeedBoost : MissionLogic
{
    public override void OnAgentCreated(Agent agent)
    {
        if (!agent.IsAIControlled)
        {
            return;
        }

        agent.AgentDrivenProperties.MaxSpeedMultiplier = 1.35f;
    }
}
```

Do not extend that block to the AI weights. `AiShootFreq`, `AIDecideOnAttackChance`, and the rest are recomputed by `AgentStatCalculateModel.UpdateAgentStats`, and the next pass will discard what you wrote. For those, wrap the model instead — see [`AgentStatCalculateModel`](../AgentStatCalculateModel).

## Risks and boundaries

1. **Uninitialised reads are `0.0f`, not defaults.** The array is `new float[98]`. A stat that the model has not written yet reads zero, and a zero multiplier divides. Read only after the agent has been created and its stats initialised.
2. **Writes to the AI block do not survive.** `UpdateDrivenProperties` calls `UpdateAgentStats`, which recomputes the AI properties wholesale. This is the most common "my change had no effect" report against this class.
3. **The array size is hard-coded and the enum is not a clean match.** `new float[98]` covers indices `0`–`97`. `DrivenProperty.None = -1` throws on access, and `DrivenPropertiesCalculatedAtSpawnEnd = 64` aliases `WeaponsEncumbrance` — writing through it corrupts encumbrance with no error. Read both before using the indexed form.
4. **`Values`, `InitializeDrivenProperties`, and `UpdateDrivenProperties` are all `internal`.** A mod can read and write slots but cannot trigger a recompute or take the array. The refresh is engine-owned.
5. **No provenance.** A value you set and a value the model computed are indistinguishable in the array. When debugging, assume the model wrote it unless you know when you wrote it.
6. **Encumbrance is two halves.** `ArmorEncumbrance` and `WeaponsEncumbrance` are summed by `Agent.GetTotalEncumbrance()`; setting only one gives a partially-encumbered agent that behaves consistently but never matches either intent.
7. **Mission-scoped, not saved.** Every value here is derived at agent creation inside a mission. Campaign skills, attributes, and equipment are the saved layer; this is the projection of them. Nothing here survives a mission, and reloading recomputes from the campaign.
8. **Multiplying versus adding.** `SwingSpeedMultiplier`, `MaxSpeedMultiplier`, and `MountSpeed` are multipliers around a `1.0f` baseline, so `1.0f` means "unchanged". Writing `0.1f` intending a 10% penalty gives a 10x slowdown. The additive stats (`ArmorTorso`, `MountChargeDamage`) have no such baseline.
9. **Writing during AI evaluation re-enters the model.** Several of these slots are read inside `AgentStatCalculateModel.SetAiRelatedProperties`; mutating them from a callback that runs during that same pass produces order-dependent results rather than an error.

## Dependencies

- **Producer:** [`AgentStatCalculateModel`](../AgentStatCalculateModel) fills every slot through `InitializeAgentStats` and `UpdateAgentStats`; it is the only writer in the tree.
- **Host:** [`Agent`](../../mission/Agent) owns the instance (`Agent.AgentDrivenProperties`), allocates it during creation, and reads it for total encumbrance and stat queries.
- **Index enum:** [`DrivenProperty`](../../core-extra/DrivenProperty) supplies the ordinal used by `GetStat`/`SetStat`; its usable range is `0`–`97`, matching the array, with `None = -1` and the aliasing `DrivenPropertiesCalculatedAtSpawnEnd = 64` as the two members outside that contract.
- **Spawn inputs:** [`AgentBuildData`](./AgentBuildData) and [`Equipment`](../../core-extra/Equipment) are the arguments threaded into `InitializeDrivenProperties`.
- **Consumer:** [`AgentApplyDamageModel`](../AgentApplyDamageModel) reads the armour and charge stats when resolving per-body-part damage and knockback.
- **Resolution:** [`MissionGameModels`](../MissionGameModels) is how the engine reaches the stat model that writes here.
- Bucket home: [mission-ext API section](../)