---
title: "AgentCapsuleData"
description: "The two-capsule collision record handed to the native engine at agent creation: a standing body capsule and a crouched one, filled straight off the Monster."
---

# AgentCapsuleData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct AgentCapsuleData`
**Base:** value type — no reference base, no interface
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentCapsuleData.cs`

## One-line responsibility

It carries the two collision capsules — one for a standing body, one for a crouched body — across the native agent-creation call, so the engine builds a collision shape that matches the body proportions it was handed.

## Mental model

The whole type is ten lines and two fields. Read it as **a pair of collision volumes, not a data model**. `BodyCap` is the capsule used when the agent is standing; `CrouchedBodyCap` is the one used when it crouches. Both are of type `TaleWorlds.Engine.CapsuleData`, which is the engine's own capsule record, not a managed type declared in this assembly.

Where the values come from is the useful part. `MonsterExtensions.FillCapsuleData(this Monster monster)` at `MonsterExtensions.cs:124` is the only producer. It does **not** read the capsule numbers off `Monster` directly — it casts `monster.MonsterMissionData` to `MonsterMissionData` and copies `BodyCapsule` and `CrouchedBodyCapsule` off that. The `MonsterMissionData` class (at `MonsterMissionData.cs:6`) is where the authored points and radius are finally assembled into a `CapsuleData`, and `Monster.MonsterMissionData` is itself lazy: it calls `Game.Current.MonsterMissionDataCreator.CreateMonsterMissionData(this)` on first access and caches the result. So the chain is `Monster` → `MonsterMissionData` → `CapsuleData` → `AgentCapsuleData`, with a creator hook in the middle. Contrast this with [`AgentSpawnData`](./AgentSpawnData), whose factory takes a `mountItem` and can therefore vary one field: this one takes nothing and varies nothing. Every capsule in the game is authored on the `Monster`.

One shape fact that changes how you read the fields: **`CapsuleData` has no height and no position.** Its own members are `P1` (`Vec3`), `P2` (`Vec3`), and `Radius` (`float`). A capsule is a line segment from `P1` to `P2` inflated by `Radius`. Standing versus crouched therefore differs in where the two endpoints sit and how fat the tube is, not in a single `Height` scalar. `MonsterMissionData` builds `BodyCapsule` from `Monster.BodyCapsuleRadius`, `BodyCapsulePoint1`, `BodyCapsulePoint2` and `CrouchedBodyCapsule` from the three matching `Crouched…` values — six authored numbers per monster, not two.

Where the values go is the boundary that matters. `Mission.CreateAgent` (private, `Mission.cs:4040`) calls `monster.FillCapsuleData()` at line 4043 and then passes the result by `ref` into `CreateAgentInternal(..., ref spawnData, ref capsuleData, ref animationSystemData, instanceNo)`, which forwards it to the native `IMBMission.CreateAgent`. So the struct exists for exactly one hand-off and has no other consumer in the tree.

The struct trap is the same one as its sibling, and it is worth stating precisely because there are only two fields and both are `public`: **`AgentCapsuleData` is copied on assignment, but the native call takes it by `ref`.** Read it out of `FillCapsuleData` and mutate your local, and the engine never sees the change. Write into a local, pass that local by `ref` somewhere, and the callee *can* write back — the two behaviours coexist, which is exactly the sort of thing that makes people assume the wrong one is true.

There is also no concept of "current" capsule on the struct. Which capsule applies is the agent's business at runtime, decided by its stance, not by this record. The struct is a static description of both possibilities, captured once at creation.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `BodyCap` | `public CapsuleData BodyCap` | The standing collision volume: a segment from `P1` to `P2` inflated by `Radius`. Because the endpoints are absolute points rather than a height plus an offset, moving `P1`/`P2` slides and tilts the whole volume — that is how a capsule stays aligned with a leaning or non-humanoid mesh instead of staying axis-aligned. `FillCapsuleData` reads it from `MonsterMissionData.BodyCapsule`. |
| `CrouchedBodyCap` | `public CapsuleData CrouchedBodyCap` | The crouched volume, copied from `MonsterMissionData.CrouchedBodyCapsule`, which in turn is built from the monster's own `CrouchedBodyCapsuleRadius`, `CrouchedBodyCapsulePoint1`, and `CrouchedBodyCapsulePoint2`. It is authored independently: shortening `BodyCap` does not shorten `CrouchedBodyCap`, and the two can disagree in the source data. That divergence is invisible until an agent crouches and clips. |

## Real example

Filling the record the way the mission does, and reading the difference a crouch makes:

```csharp
public class MyCapsuleReport : MissionLogic
{
    public override void OnAgentCreated(Agent agent)
    {
        Monster creature = agent.Monster;
        AgentCapsuleData capsules = creature.FillCapsuleData();

        Debug.Print("standing capsule radius = " + capsules.BodyCap.Radius, 0);
        Debug.Print("crouched capsule radius = " + capsules.CrouchedBodyCap.Radius, 0);
        Debug.Print("standing lower endpoint = " + capsules.BodyCap.P1, 0);
        Debug.Print("standing upper endpoint = " + capsules.BodyCap.P2, 0);
    }
}
```

Taking `CrouchedBodyCap` and substituting the standing one, which is the mistake this page exists to prevent:

```csharp
public class MyBadCapsuleSwap(Agent agent)
{
    public AgentCapsuleData Broken(Monster creature)
    {
        AgentCapsuleData capsules = creature.FillCapsuleData();

        // BUG: copies a reference-free struct into a local. The engine never sees this.
        capsules.CrouchedBodyCap = capsules.BodyCap;

        return capsules;
    }
}
```

The class declaration line is also wrong C# — `MyBadCapsuleSwap(Agent agent)` is not a valid type name. It is left broken on purpose to mark the block as anti-example; copy neither the declaration nor the body into your mod.

## Risks and boundaries

1. **Two fields, both `public`, both writable, neither useful to write.** There is no public path from a `AgentCapsuleData` you built back into agent creation. `Mission.CreateAgent` is `private` and always calls `FillCapsuleData()` itself.
2. **Value semantics on the managed side.** Assigning `agentCapsuleData a = b` copies two `CapsuleData` values. Mutations to `a` do not reach `b`, and there is no reference identity to compare against.
3. **Passed by `ref` into native code.** `CreateAgentInternal` and `IMBMission.CreateAgent` both take it by `ref`, so the engine can write back. Do not generalise the copy semantics to that path, and do not generalise the `ref` semantics to managed code either.
4. **No `EngineStruct` attribute, unlike its sibling.** `AgentSpawnData` carries `[EngineStruct("Agent_spawn_data", ...)]`; this struct has no attribute on its declaration. It is still marshalled as part of the same native call, but it does not carry its own native type name — do not assume the two structs have equivalent marshalling contracts.
5. **`CapsuleData` is an engine type.** `TaleWorlds.Engine.CapsuleData` is declared in the engine assembly, not `TaleWorlds.MountAndBlade`, and it is defined by two endpoint vectors plus a radius — reading it crosses into the engine layer.
6. **Crouched is authored, not derived.** Six separate numbers per monster (three standing, three crouched) become two capsules. Nothing derives one capsule from the other, so authoring a monster with inconsistent values produces an agent that clips only while crouched.
7. **Not saved.** No serialization surface. Re-fill it after loading; do not cache it in campaign state.
8. **The endpoints are positional data and must stay aligned.** Moving `P1`/`P2` slides or tilts the volume relative to the entity origin. A change that moves the capsule without moving the origin shows up as collision in the wrong place, with no diagnostic.
9. **Filling it depends on `Game.Current`.** `Monster.MonsterMissionData` lazily calls `Game.Current.MonsterMissionDataCreator.CreateMonsterMissionData(this)`. `FillCapsuleData` therefore inherits that dependency and will fail outside a live game.

## Dependencies

- **Producer:** [`MonsterExtensions`](./MonsterExtensions) `FillCapsuleData(this Monster)` is the sole factory. It takes no arguments — every value comes off the monster's mission data.
- **Assembly point:** [`MonsterMissionData`](./MonsterMissionData) casts to `MonsterMissionData` and builds each `CapsuleData` from three authored values on [`Monster`](../../core-extra/Monster); `Monster.MonsterMissionData` is created lazily through `Game.Current.MonsterMissionDataCreator`.
- **Field type:** [`CapsuleData`](../../engine/CapsuleData) is declared in `TaleWorlds.Engine` and holds `P1`, `P2`, and `Radius`.
- **Consumer:** [`Mission`](../../mission/Mission) `CreateAgent` (private) fills it and passes it by `ref` into the native `IMBMission.CreateAgent`.
- **Sibling record:** [`AgentSpawnData`](./AgentSpawnData) travels through the identical native call, produced by the neighbouring `FillSpawnData` method.
- **Resulting agent:** [`Agent`](../../mission/Agent) owns the live collision volume that these two capsules initialise.
- Bucket home: [mission-ext API section](../)