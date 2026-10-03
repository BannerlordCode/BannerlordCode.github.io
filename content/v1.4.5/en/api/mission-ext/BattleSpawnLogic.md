---
title: "BattleSpawnLogic"
description: "A one-shot mission behavior that deletes every spawnpoint_set in the scene except the tagged set the mission selected, then disables itself."
---

# BattleSpawnLogic

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BattleSpawnLogic : MissionLogic`
**Base:** `MissionLogic`
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions/BattleSpawnLogic.cs`

## One-line responsibility

It is a scene-cleanup filter: a battle scene may ship with several spawnpoint sets for different deployment modes, and this behavior keeps only the one the mission asked for and removes the rest.

## Mental model

The whole class is 44 lines and it runs exactly once. The tag constants at the top are the key to the mental model:

- `BattleTag = "battle_set"`
- `SallyOutTag = "sally_out_set"`
- `ReliefForceAttackTag = "relief_force_attack_set"`
- `private const string SpawnPointSetCommonTag = "spawnpoint_set"`

The last one is the important one. It is the **shared parent tag**: every deployment variant in a battle scene tags its spawnpoint entities with `"spawnpoint_set"`, and the three public constants are the specific sub-variants that also exist. The class does not filter by variant; it filters by the common tag and *keeps* whichever set was selected.

That makes the algorithm two-part and slightly subtler than "delete the others":

```
1. Find the entity tagged with _selectedSpawnPointSetTag.
2. If found:
     collect every entity tagged "spawnpoint_set"
     remove that one from the collection
     Remove(76) each remaining entity
3. Set _isScenePrepared = true (always, found or not)
```

The `item.Remove(76)` is the part that needs reading twice. `WeakGameEntity.Remove(int removeReason)` is declared at `WeakGameEntity.cs:652` and forwards to `IGameEntity.Remove(Pointer, removeReason)`. The engine-side meaning of a particular reason code is not documented in this file, and this class hard-codes `76` with no comment and no named constant. Whatever `76` means to the engine, it is the mechanism by which an entity is actually deleted — and it is not discoverable from the managed source. You can pass a different value; you cannot justify one from this file.

The `_isScenePrepared` guard is what makes the type idempotent-by-construction: `OnPreMissionTick` runs every frame before mission start, and without the guard it would re-scan and re-remove on every one of them. Note that the flag is set even when the selected set is **not** found — in that case nothing is removed and the flag still latches, so the one-shot attempt is not retried. That is a deliberate-looking behaviour with no comment, and it is worth knowing if you are relying on a tag that might not exist yet.

The constructor is `public BattleSpawnLogic(string selectedSpawnPointSetTag)` and it is the **only** way to construct this type — there is no parameterless overload, so the tag is mandatory and captured into a `readonly` field. That makes this one of the mission logic types a mod legitimately *can* instantiate itself, unlike most behaviors that the engine builds with its own arguments.

Because it derives from `MissionLogic`, it participates in mission victory and end polling even though it does nothing in that respect. That is harmless but worth knowing: it lands in `MissionLogics` and gets asked `MissionEnded` / `OnEndMission` questions it has no opinion on.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `BattleSpawnLogic(string)` | `public BattleSpawnLogic(string selectedSpawnPointSetTag)` | The only constructor. Stores the tag into a `private readonly` field. **Public, and reachable from a mod** — this is the unusual case in the mission-logic family, where the engine does not build it for you and you may construct it directly. |
| `OnPreMissionTick` | `public override void OnPreMissionTick(float dt)` | The single behaviour: if not yet prepared, keep the selected spawnpoint set and `Remove(76)` every other entity tagged `spawnpoint_set`, then latch the flag. Uses `base.Mission.Scene.FindWeakEntityWithTag(...)` and `FindWeakEntitiesWithTag(...).ToList()` — note the `ToList()` is required so the selected entity can be removed from the collection before iterating. |
| `BattleTag` | `public const string BattleTag = "battle_set"` | The tag for the standard battle deployment set. Pass this to the constructor to keep normal deployment spawnpoints. |
| `SallyOutTag` | `public const string SallyOutTag = "sally_out_set"` | The tag for the sally-out variant. A sally-out is a battle state where the garrison attacks outside the walls; selecting this tag keeps only that deployment. |
| `ReliefForceAttackTag` | `public const string ReliefForceAttackTag = "relief_force_attack_set"` | The tag for the relief-force attack variant. Like `SallyOutTag`, it selects an alternative deployment mode rather than a different set of units. |
| `SpawnPointSetCommonTag` | `private const string SpawnPointSetCommonTag = "spawnpoint_set"` | **Private**, and it is the tag the deletion sweep actually uses. This is the reason the algorithm works: it is the parent tag shared by all variants. A mod cannot reference it directly — the string is duplicated as a literal inside `OnPreMissionTick` rather than using the constant. |
| `_isScenePrepared` | `private bool _isScenePrepared` | The one-shot latch, set at the end of `OnPreMissionTick` whether or not the selected set was found. Private with no accessor, so you cannot query whether the cleanup has run. |

## Real example

Constructing it directly and attaching it — legal here because the constructor is public and takes only a string:

```csharp
public class MyDeploymentFilter : MissionLogic
{
    public override void AfterStart()
    {
        if (this.Mission.Scene.FindWeakEntityWithTag(BattleSpawnLogic.BattleTag) == null)
        {
            this.Mission.AddMissionBehavior(new BattleSpawnLogic(BattleSpawnLogic.BattleTag));
        }
    }
}
```

Auditing what remains after the cleanup has run, which is the practical way to confirm a scene variant was applied:

```csharp
public class MySpawnAudit : MissionLogic
{
    public override void OnPreMissionTick(float dt)
    {
        int remaining = 0;
        foreach (WeakGameEntity entity in this.Mission.Scene.FindWeakEntitiesWithTag("spawnpoint_set"))
        {
            remaining++;
        }

        if (remaining > 1)
        {
            Debug.Print("spawnpoint sets still present before mission start: " + remaining, 0);
        }
    }
}
```

If this audit still reports more than one set after the first pre-mission tick, `BattleSpawnLogic` was never added with a tag that exists in the scene — remember the latch means a failed lookup is never retried, so the count stays wrong for the rest of the mission.

Adding your own variant, which is the main reason to touch this class — a tag constant plus a spawnpoint set in the scene:

```csharp
public class MyNightAssaultDeployment : MissionLogic
{
    private const string NightAssaultTag = "night_assault_set";

    public override void AfterStart()
    {
        WeakGameEntity selected = this.Mission.Scene.FindWeakEntityWithTag(NightAssaultTag);
        if (selected == null)
        {
            Debug.Print("scene has no " + NightAssaultTag + " entity", 0);
            return;
        }

        this.Mission.AddMissionBehavior(new BattleSpawnLogic(NightAssaultTag));
    }
}
```

## Risks and boundaries

1. **`Remove(76)` passes an undocumented engine reason code.** The parameter is named `removeReason` at `WeakGameEntity.cs:652`, but the managed tree carries no enumeration of valid codes and this class hard-codes `76` with no comment. Treat the value as opaque: pass a different one only if you have independent evidence of its meaning, which this file does not provide.
2. **A missing tag is a silent no-op that never retries.** `_isScenePrepared` is set even when `FindWeakEntityWithTag` returns null, so a typo in the tag leaves every spawnpoint set in the scene and there is no second attempt.
3. **`SpawnPointSetCommonTag` is `private`, and the code duplicates its literal.** The constant is declared but the sweep uses the string `"spawnpoint_set"` inline. If the constant ever changes, the sweep does not follow it.
4. **It only removes the *other* spawnpoint sets.** Entities tagged `battle_set` and not `spawnpoint_set` are untouched. The filter is narrower than the name suggests.
5. **`OnPreMissionTick` only.** The cleanup window is before mission start. Adding the behavior after that point still runs it on the next pre-mission tick, but adding it once deployment has begun is too late and it will simply never fire.
6. **Being a `MissionLogic` is incidental.** It inherits the victory/end protocol through `MissionLogic` and has no opinion on any of it. If you only need the cleanup, that classification is a side effect of reusing the base class.
7. **No accessor for the latch.** `_isScenePrepared` is private, so you cannot ask whether the cleanup already ran; the only way to know is to observe the scene.
8. **Tags are a stringly-typed contract with the scene.** The constants match strings authored in scene files. A scene that omits the tag silently yields no cleanup.

## Dependencies

- **Base contract:** [`MissionLogic`](./MissionLogic) supplies the `Mission` back-reference; this behavior also enters mission victory polling as a side effect of that base.
- **Scene queries:** [`Scene`](../../engine/Scene) `FindWeakEntityWithTag` and `FindWeakEntitiesWithTag` are the two calls the cleanup depends on; both return `WeakGameEntity`.
- **Result type:** [`WeakGameEntity`](../../engine/WeakGameEntity) carries the `Remove(int removeReason)` call that actually deletes the non-selected sets.
- **Host:** [`Mission`](../../mission/Mission) `AddMissionBehavior` is the attach path, and the constructor being public makes this one of the few mission logics a mod constructs itself.
- **Deployment siblings:** [`BattleDeploymentMissionController`](./BattleDeploymentMissionController) drives the deployment that consumes the surviving spawnpoints.
- Bucket home: [mission-ext API section](../)