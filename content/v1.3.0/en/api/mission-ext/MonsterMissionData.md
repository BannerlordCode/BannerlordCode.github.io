---
title: "MonsterMissionData"
description: "Auto-generated class reference for MonsterMissionData."
---
# MonsterMissionData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MonsterMissionData : IMonsterMissionData`
**Base:** `IMonsterMissionData`
**File:** `TaleWorlds.MountAndBlade/MonsterMissionData.cs`

## Overview

`MonsterMissionData` is a thin adapter that projects a campaign-level `Monster` object into the mission-facing `IMonsterMissionData` interface (`MonsterMissionData.cs:8`). It holds exactly one field — the `Monster` — and everything else is derived on demand. Construct it with a `Monster`; the constructor also seeds both action-set caches with `MBActionSet.InvalidActionSet` (`MonsterMissionData.cs:64`, `MonsterMissionData.cs:66`).

Two of its properties build values, and two of them cache. `BodyCapsule` and `CrouchedBodyCapsule` each construct a fresh `CapsuleData` from a radius and two points read off the monster (`MonsterMissionData.cs:17`) — no allocation is cached, so calling them per frame allocates. `ActionSet` and `FemaleActionSet` are lazy: each checks whether its cached `MBActionSet` `IsValid`, and only then resolves `MBActionSet.GetActionSet(Monster.ActionSetCode)` (`MonsterMissionData.cs:43`) or the female equivalent (`MonsterMissionData.cs:57`), storing the result so the lookup happens once per instance.

The important subtlety is that the cache is validated by `IsValid`, not by whether the code string is empty. An empty or null `ActionSetCode` therefore leaves the cached value as `MBActionSet.InvalidActionSet` forever, and every subsequent read returns that invalid set — correctly, but without distinguishing "no action set configured" from "lookup failed".

## Mental Model

This is a projection object with a short lifetime, and its validity is entirely inherited from its `Monster`. Nothing here validates anything.

The action-set cache has a real behaviour worth planning around: it is **not** invalidated when the `Monster` changes. `Monster` has a private setter, so in normal use it cannot change after construction — which is what makes the cache safe. If you build a `MonsterMissionData` once and reuse it across different monsters by any route, the cached action sets will be stale and the `IsValid` guard will keep returning the first monster's set forever.

Note that the female set is resolved independently of the main set, from a different code field. A monster can have both, either, or neither, and each is only attempted on first read. The `string.IsNullOrEmpty` guard on both properties means a monster with no codes simply yields two invalid sets rather than throwing — so a missing action set presents as an animation set that plays nothing, not as an error.

The capsule properties return a new `CapsuleData` on every access, so a per-frame caller allocates twice if it reads both. Cache the `CapsuleData` yourself if you need it in a hot loop.

## How to use

**Getting it.** Construct it from a `Monster`:

```csharp
MonsterMissionData data = new MonsterMissionData(monster);
```

The engine's own consumers receive it as `IMonsterMissionData`; you can hold the concrete type if you want the lazy action-set caching.

**Typical use** — reading a monster's physical shape and its animation set in a mission:

```csharp
MonsterMissionData data = new MonsterMissionData(monster);

CapsuleData capsule = data.BodyCapsule;          // fresh struct each call
CapsuleData crouched = data.CrouchedBodyCapsule;

MBActionSet set = data.ActionSet;                 // resolved once, then cached
if (!set.IsValid)
    MBDebug.Print(monster.StringId + " has no action set code");

MBActionSet female = data.FemaleActionSet;
```

**Typical use** — caching the capsules yourself when reading them every frame:

```csharp
public class CapsuleReader : MissionLogic
{
    private MonsterMissionData _data;
    private CapsuleData _cachedCapsule;

    public override void OnBehaviorInitialize()
    {
        base.OnBehaviorInitialize();
        _data = new MonsterMissionData(monster);
        _cachedCapsule = _data.BodyCapsule;   // allocate once
    }

    public override void OnMissionTick(float dt)
    {
        // _cachedCapsule is safe to reuse; _data.BodyCapsule would allocate per read.
        MBDebug.Print("capsule radius " + _cachedCapsule.Radius);
    }
}
```

**Most common mistake, and what it costs.** Constructing the object once and expecting the action-set cache to follow the monster, or treating an invalid action set as a transient state that will resolve later. Both cost the same thing: agents animated with the wrong or no action set. Because `ActionSet` caches on first successful read and re-validates with `IsValid`, a `MonsterMissionData` built for monster A and reused for monster B returns A's action set for B — the agent runs B's mesh with A's animation set, which usually renders as a T-pose or an idle rather than as an obvious error. Construct one `MonsterMissionData` per `Monster` and keep that pairing for the object's lifetime; if you must rebind, construct a new instance rather than trying to reset the cache, which has no public reset.

## Key Properties

| Name | Signature |
|------|-----------|
| `Monster` | `public Monster Monster { get; }` |
| `BodyCapsule` | `public CapsuleData BodyCapsule { get; }` |
| `CrouchedBodyCapsule` | `public CapsuleData CrouchedBodyCapsule { get; }` |
| `ActionSet` | `public MBActionSet ActionSet { get; }` |
| `FemaleActionSet` | `public MBActionSet FemaleActionSet { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
MonsterMissionData entry = ...;
```

## See Also

- [Area Index](../)
- [MonsterMissionData (中文页面)](../../../../zh/api/mission-ext/MonsterMissionData)
- [Agent](../../mission/Agent)
- [MissionLogic](../MissionLogic)
- [ViewCreatorManager](../ViewCreatorManager)