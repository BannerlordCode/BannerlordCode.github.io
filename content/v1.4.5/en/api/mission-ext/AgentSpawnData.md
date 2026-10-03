---
title: "AgentSpawnData"
description: "The blittable anthropometrics record the mission hands to the native engine when it creates an agent: eye heights, capsule adders, arm reach, jump and charge limits."
---

# AgentSpawnData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct AgentSpawnData`
**Base:** value type — no reference base, no interface
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentSpawnData.cs`

## One-line responsibility

It is the hand-off record for agent creation: the mission measures a `Monster`, packs the result into this struct, and passes it by `ref` across the native boundary so the engine can build a body with the right proportions.

## Mental model

Everything about this type follows from one attribute on the declaration: `[EngineStruct("Agent_spawn_data", false, null)]`. That marks it as a blittable record with a fixed native layout. There are **19 public fields, no properties, and no methods at all**. That is not sloppiness in the source — a managed shape here would break the marshalling, so the type is a plain bag of numbers by requirement.

The next anchor is **who fills it**. The answer is `MonsterExtensions.FillSpawnData(this Monster monster, ItemObject mountItem)` at `MonsterExtensions.cs:134`, an extension method that returns a fully-populated `new AgentSpawnData { ... }` — and it sets **all 19 fields**. Every value comes off the `Monster` (or off the `mountItem`, for `Weight` alone). There is no second producer and no partial population anywhere in the tree.

The consumer is `Mission.CreateAgent` at `Mission.cs:4040`, which is `private`. It calls `monster.FillSpawnData(null)` at line 4044 and hands the struct to `CreateAgentInternal(..., ref spawnData, ref capsuleData, ref animationSystemData, instanceNo)`, which forwards it to `MBAPI.IMBMission.CreateAgent(...)` — a native call taking `ref AgentSpawnData` alongside `ref CapsuleData` for both capsules and `ref AnimationSystemData`.

That gives you the honest boundary to internalise: **you can read and build these records; you cannot feed one to the engine.** The only public way to produce an agent runs the private path for you. If you were hoping to spawn an agent with hand-tuned eye heights, the entry point for that does not exist in 1.4.5 — the numbers are derived from `Monster` XML and never overridden from managed code.

Two field clusters carry the gameplay weight. The **eye-height block** (`StandingEyeHeight`, `CrouchEyeHeight`, `MountedEyeHeight`, `RiderEyeHeightAdder`) is camera and aim geometry: it decides where the game believes the agent's eyes are, which drives third-person camera height and the ranged aim origin. The **capsule-adder block** (`RiderBodyCapsuleHeightAdder`, `RiderBodyCapsuleForwardAdder`) offsets the rider's own collision capsule from the mount's; wrong values make riders clip through walls or float above the saddle, and unlike eye height nothing draws the mistake.

Finally, the struct semantics. This is a `struct` passed by `ref` into a native call, so the callee *can* mutate it, and the caller's copy is updated in place. That is the opposite of the usual "structs copy" intuition, and it is deliberate: the engine writes back what it decided. Read `Mission.cs:4044-4045` again if you want to see the `ref` doing work — `spawnData` is declared, passed by `ref`, and the engine is free to change it before the `Agent` is constructed.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `StandingEyeHeight` / `CrouchEyeHeight` / `MountedEyeHeight` | `public float` | The three eye heights the game switches between. These decide the ranged aim origin and the third-person camera height, so `CrouchEyeHeight` is why a crouching archer's shot goes low and `MountedEyeHeight` is why a horse archer's line clears a spearman. Both are authored per-`Monster`, not derived. |
| `RiderEyeHeightAdder` | `public float` | Vertical offset applied when the body is a rider rather than a dismounted soldier, layered on the mount's eye height. The difference between "riding" and "sitting inside the horse". Meaningless without a mount. |
| `StandingChestHeight` / `StandingPelvisHeight` | `public float` | Torso landmarks used to place seat attachment points and the torso collision volume. Pure body proportion, no gameplay decisions. |
| `EyeOffsetWrtHead` | `public Vec3` | Eye position relative to the head bone origin. Separates "where the head is" from "where the eyes sit inside the head", so one head mesh can serve several eye configurations. |
| `FirstPersonCameraOffsetWrtHead` | `public Vec3` | First-person camera mount point. Deliberately distinct from `EyeOffsetWrtHead` — a camera sits slightly behind and above the eyes rather than exactly on them. |
| `RiderCameraHeightAdder` | `public float` | Third height adder, and the one most easily missed: `FillSpawnData` populates it from `monster.RiderCameraHeightAdder` alongside the eye adders. It adjusts the camera when riding and has no effect at all on the capsule. |
| `RiderBodyCapsuleHeightAdder` / `RiderBodyCapsuleForwardAdder` | `public float` | Vertical and forward offsets added to the mount's capsule to produce the rider's own collision capsule. Getting these wrong makes riders clip through walls or hover over the saddle — and nothing renders the error, so it presents as a physics bug rather than a data bug. |
| `ArmLength` / `ArmWeight` | `public float` | Arm reach and arm mass. `ArmLength` bounds melee reach and interaction distance; `ArmWeight` feeds swing inertia. `ArmWeight` being a `float` while `Monster.Weight` is an `int` is a deliberate widening in `FillSpawnData`. |
| `JumpAcceleration` / `JumpSpeedLimit` | `public float` | Jump impulse and the hard ceiling on resulting speed. Both are enforced limits in the movement solver, not suggestions. |
| `RelativeSpeedLimitForCharge` | `public float` | The speed ceiling *relative to the mount* past which a charge stops counting as a charge. This is the switch behind every horse-charge damage rule, so a wrong value makes charges never fire or always fire. |
| `HitPoints` | `public int` | The source monster's hit points, copied verbatim. Note this is `int` while `Agent.Health` is `float` — the conversion happens later, in the agent, not here. |
| `MonsterUsageIndex` | `public int` | Produced by `Agent.GetMonsterUsageIndex(monster.MonsterUsage)` — a static call, not a raw array subscript. It identifies the creature's usage entry. Do not persist it: indexes shift when character-tree data is rebuilt. |
| `Weight` | `public float` | Body weight, and the **only** field where `FillSpawnData` does not read the monster directly: it prefers `(int)mountItem.Weight` when a `mountItem` is passed, and falls back to `monster.Weight`. Passing `null` — as `Mission.CreateAgent` does — always yields the monster's own weight. |

## Real example

Producing the record the way the engine does, and reading the eye-height block out of it:

```csharp
public class MyBodyReport : MissionLogic
{
    public override void OnAgentCreated(Agent agent)
    {
        Monster creature = agent.Monster;
        AgentSpawnData body = creature.FillSpawnData(null);

        Debug.Print("standing eye height = " + body.StandingEyeHeight, 0);
        Debug.Print("crouch   eye height = " + body.CrouchEyeHeight, 0);
        Debug.Print("mounted  eye height = " + body.MountedEyeHeight, 0);
        Debug.Print("rider    eye adder  = " + body.RiderEyeHeightAdder, 0);
        Debug.Print("arm length          = " + body.ArmLength, 0);
        Debug.Print("charge speed limit  = " + body.RelativeSpeedLimitForCharge, 0);
    }
}
```

Passing a mount item so the weight comes from the saddle rather than the creature:

```csharp
public class MySaddleReport : MissionLogic
{
    public override void OnAgentMount(Agent agent)
    {
        if (agent.MountAgent == null)
        {
            return;
        }

        MissionWeapon mountHarness = agent.Equipment[EquipmentIndex.Horse];
        AgentSpawnData riderBody = agent.Monster.FillSpawnData(mountHarness.Item);

        Debug.Print("rider weight with harness = " + riderBody.Weight, 0);
        Debug.Print("creature weight alone     = " + agent.Monster.FillSpawnData(null).Weight, 0);
    }
}
```

The two numbers differing is the whole point of the `mountItem` parameter, and it is the only field in the struct where the parameter has any effect. Note that there is no `EquipmentIndex.Saddle` — the mount's worn item lives in `EquipmentIndex.Horse`, and `Agent.Equipment` is a `MissionEquipment`, so you reach the `ItemObject` through its `MissionWeapon` indexer rather than through an `Equipment` lookup.

Demonstrating the value-copy trap without shipping it — this block is a bug, shown so you can recognise it:

```csharp
public static void MyBrokenWriter(Agent agent)
{
    AgentSpawnData body = agent.Monster.FillSpawnData(null);
    body.HitPoints = 0;
    Debug.Print("local copy now says " + body.HitPoints, 0);
}
```

`body` is a local struct. Writing to it changes the local, and nothing in the engine ever reads it again. The 1.4.5 API gives you no way to feed a modified record back into agent creation — `Mission.CreateAgent` is `private` and rebuilds the struct itself on every spawn.

## Risks and boundaries

1. **The struct cannot be fed back into the engine.** `Mission.CreateAgent` is `private`, and `FillSpawnData` is the only public producer. Tuning `StandingEyeHeight` on a local copy changes nothing at runtime. Custom body proportions must be authored on the `Monster`, not patched here.
2. **All 19 fields are public and writable, and none of them is writable in practice.** There is no setter that the engine reads back outside the single private `CreateAgent` path. Treat the type as read-only from a mod.
3. **`EngineStruct` means the layout is a native contract.** Never add, reorder, or remove a field — the engine reads by offset, and an insertion silently corrupts every later value. This is the one change that would break the game rather than your mod.
4. **Passed by `ref` into native code.** `CreateAgentInternal` and `IMBMission.CreateAgent` both take it by `ref`, so the engine may write back into the caller's variable. This is intentional, and it means the struct is *not* immune to mutation the way value-type intuition suggests.
5. **`Vec3` members complicate the blittability.** Despite the attribute, `EyeOffsetWrtHead` and `FirstPersonCameraOffsetWrtHead` are `Vec3` value types. Do not marshal this struct yourself across a boundary you do not own.
6. **Nothing here is saved.** No serialization hook, no savegame field. Re-measure after loading a save rather than caching a snapshot in campaign state.
7. **Rider fields are meaningless without a mount.** `RiderEyeHeightAdder`, `RiderCameraHeightAdder`, `RiderBodyCapsuleHeightAdder`, and `RiderBodyCapsuleForwardAdder` describe the rider *relative to a mount*. Guard on `HasMount` before concluding anything from them.
8. **`MonsterUsageIndex` is an index into usage data, not a stable identity.** It is computed by `Agent.GetMonsterUsageIndex`, and it shifts when character-tree data is rebuilt.
9. **`Weight` is the only field affected by the `mountItem` parameter.** Passing a non-null mount item silently changes it from the creature's own weight to the item's. If you compare two records, pass the same argument to both or you will compare different quantities.

## Dependencies

- **Producer:** [`MonsterExtensions`](../../mission/MonsterExtensions) `FillSpawnData(this Monster, ItemObject)` is the sole public factory, and it populates all 19 fields.
- **Source data:** [`Monster`](../../core-extra/Monster) supplies every anthropometric value, plus `HitPoints` and `Weight`.
- **Consumer:** [`Mission`](../../mission/Mission) `CreateAgent` calls the factory and passes the struct by `ref` into `CreateAgentInternal`; both that method and the native `IMBMission.CreateAgent` are outside a mod's reach.
- **Paired record:** [`AgentCapsuleData`](./AgentCapsuleData) is filled by the sibling `MonsterExtensions.FillCapsuleData` and travels through the same native call.
- **Produced agent:** [`Agent`](../../mission/Agent) exposes `Monster` and converts these numbers into `Health` (a `float`) and the live collision capsule.
- **Authored input:** [`BodyProperties`](../../core-extra/BodyProperties) is the authored shape data that ultimately drives the skeleton these heights describe.
- Bucket home: [mission-ext API section](../)