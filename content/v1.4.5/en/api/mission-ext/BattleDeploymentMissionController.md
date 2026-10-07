---
title: "BattleDeploymentMissionController"
description: "The deployment-phase controller that suppresses spawning, teleports each team general to a numbered formation frame, and removes the deployment handler when the phase ends."
---

# BattleDeploymentMissionController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BattleDeploymentMissionController : DeploymentMissionController`
**Base:** `DeploymentMissionController`
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BattleDeploymentMissionController.cs`

## One-line responsibility

It runs the pre-battle deployment phase: it turns spawning off so nobody appears mid-setup, teleports each side's general to a fixed numbered formation frame, then hands control back and deletes the deployment handler.

## Mental model

The constructor is the whole key to the type:

```csharp
public BattleDeploymentMissionController(bool isPlayerAttacker)
    : base(isPlayerAttacker)
{
}
```

It is **public**, it takes one `bool`, and it does nothing but forward it. That makes this one of the mission-controller types a mod genuinely can construct — the pattern in the mission-logic family is usually that the engine builds these with its own arguments, so read the constructor's accessibility before assuming you cannot. What the flag means is inherited: "is the player on the attacking side", which decides which side the player places first.

The override set is what tells you the deployment sequence. Read the methods top to bottom and you get the phase in order:

1. **`OnBehaviorInitialize`** resolves two collaborators from the mission: `BattleDeploymentHandler` (the UI-side handler, stored in a **private** field) and `DefaultBattleMissionAgentSpawnLogic` (stored in a **`protected`** field). Both via `base.Mission.GetMissionBehavior<T>()`. Note this is `OnBehaviorInitialize`, not `AfterStart` — the behavior's own init phase.
2. **`OnAfterStart`** is the suppression step, and its loop shape is worth noting: `for (int i = 0; i < 2; i++)` with `MissionAgentSpawnLogic.SetSpawnTroops((BattleSideEnum)i, spawnTroops: false)`, followed by `SetReinforcementsSpawnEnabled(value: false)`. It iterates over the *enum values* `0` and `1` cast to `BattleSideEnum` rather than over `Mission.Teams`. The casts are unchecked: if the enum ever gains a third value, or if its values are not literally `0` and `1`, this loop silently misses a side.
3. **`OnSetupTeamsOfSide(BattleSideEnum)`** re-enables spawning for one side *and enforces it* — `SetSpawnTroops(battleSide, spawnTroops: true, enforceSpawning: true)` — then sets AI states, then calls `MissionAgentSpawnLogic.OnSideDeploymentOver(battleSide)`. Called once per side.
4. **`OnSetupTeamsFinished`** is the teleport step: sets `base.Mission.IsTeleportingAgents = true`, then for each `Team` with a non-null `GeneralAgent`, calls `GetFormationSpawnFrame(team, FormationClass.NumberOfRegularFormations, isReinforcement: false, out spawnPosition, out spawnDirection)` and applies it with `TrySetFormationFrame(in, in)`. The `spawnPosition.GetNavMesh() != UIntPtr.Zero && spawnPosition.IsValid` guard is the safety check — it skips a frame that is not on the navmesh rather than teleporting an agent into geometry.
5. **`BeforeDeploymentFinished`** clears the flag: `IsTeleportingAgents = false`.
6. **`AfterDeploymentFinished`** restores reinforcements and removes the handler: `SetReinforcementsSpawnEnabled(value: true)` and `base.Mission.RemoveMissionBehavior(_battleDeploymentHandler)`.

The `IsTeleportingAgents` bracket is the subtle part. The flag is set in `OnSetupTeamsFinished` and cleared in `BeforeDeploymentFinished`, and `TrySetFormationFrame` takes both position and direction **by `in`**. That is the pattern for a batched teleport: raise a flag so the engine knows the next movement updates are not real motion, perform the snaps, lower the flag. Any code reading agent velocity during that window will see nonsense by design.

The `in` parameters are a genuine constraint to be aware of: `TrySetFormationFrame(in spawnPosition, in spawnDirection)` cannot accept an expression with a side effect, and you cannot pass a field you intend to modify in the same call. Neither can be swapped for `ref`.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `BattleDeploymentMissionController(bool)` | `public BattleDeploymentMissionController(bool isPlayerAttacker)` | The only constructor, **public**, forwarding the attacker flag to the base. Readable and callable from a mod — but the base class decides what the flag means, and every dependency below is resolved from the mission rather than injected. |
| `MissionAgentSpawnLogic` | `protected DefaultBattleMissionAgentSpawnLogic MissionAgentSpawnLogic` | The spawn logic this controller drives. **`protected`, not private** — a subclass can reach it, which is the intended extension seam. Resolved in `OnBehaviorInitialize` from `GetMissionBehavior<DefaultBattleMissionAgentSpawnLogic>()`. It is used in four of the six overrides, and there is no null check on it anywhere. |
| `_battleDeploymentHandler` | `private BattleDeploymentHandler _battleDeploymentHandler` | The deployment UI handler, resolved in `OnBehaviorInitialize` and **removed** in `AfterDeploymentFinished`. **Private**, so a subclass can neither inspect nor keep it — and the removal is unconditional, with no null check on the result. |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | Resolves both collaborators from the mission. Note it calls `base.OnBehaviorInitialize()` first, and note the timing: this is the behavior-init hook, so it runs before `OnAfterStart`. |
| `OnAfterStart` | `protected override void OnAfterStart()` | The suppression step. Loops `i` from `0` to `1`, casting the loop variable to `BattleSideEnum` and calling `SetSpawnTroops(..., false)`, then disables reinforcements. Nobody may spawn during deployment setup. The `enforceSpawning: true` flag on the re-enable side is what makes the later per-side call actually authoritative. |
| `OnSetupTeamsOfSide` | `protected override void OnSetupTeamsOfSide(BattleSideEnum battleSide)` | Re-enables spawning for one side with `enforceSpawning: true`, calls the inherited `SetupAgentAIStatesForSide(battleSide)`, then tells the spawn logic the side is done. Invoked once per side — the only override keyed to an argument. |
| `OnSetupTeamsFinished` | `protected override void OnSetupTeamsFinished()` | The teleport. Raises `Mission.IsTeleportingAgents`, then per team with a non-null `GeneralAgent` resolves a formation spawn frame at `FormationClass.NumberOfRegularFormations` with `isReinforcement: false` and applies it through `TrySetFormationFrame`. Skips any frame whose position has a null navmesh pointer or fails `IsValid`. |
| `BeforeDeploymentFinished` | `protected override void BeforeDeploymentFinished()` | Only one statement: `base.Mission.IsTeleportingAgents = false`. The lower half of the teleport bracket, and the reason the flag is a bracket rather than a one-way switch. |
| `AfterDeploymentFinished` | `protected override void AfterDeploymentFinished()` | Re-enables reinforcements and removes the deployment handler from the mission. Removing it here is why the handler must be resolved eagerly in `OnBehaviorInitialize` — after this point there is no way back to it. |

## Dead members and traps

The inventory reports `_battleDeploymentHandler` with 0 call sites; it is both written and read. Not a dead member.

| `Member` | Declaration | override | Call sites | Verdict | Notes |
|---|---|---:|---:|---|---|
| `_battleDeploymentHandler` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BattleDeploymentMissionController.cs:11 | 0 | 2 times (2 lines) | MEASURED | Assigned at :21 via `GetMissionBehavior<BattleDeploymentHandler>()`, then passed to `RemoveMissionBehavior` at :70 to deregister. A bare field read is not call-shaped, so the tool scores it 0. |

## Real example

Driving the deployment from a subclass, which is what the `protected` field access is for:

```csharp
public class MyDeploymentController : BattleDeploymentMissionController
{
    public MyDeploymentController(bool isPlayerAttacker)
        : base(isPlayerAttacker)
    {
    }

    protected override void OnSetupTeamsOfSide(BattleSideEnum battleSide)
    {
        base.OnSetupTeamsOfSide(battleSide);

        Debug.Print("deployment complete for side " + battleSide, 0);
        Debug.Print(
            "spawn logic = " +
            (this.MissionAgentSpawnLogic != null ? "resolved" : "null"),
            0);
    }
}
```

The subclass reaches `MissionAgentSpawnLogic` because it is `protected`. It cannot reach the deployment handler, because that field is `private` — the asymmetry is the design, not an oversight.

Building one yourself and attaching it, which the public constructor permits:

```csharp
public class MyDeploymentInstaller : MissionLogic
{
    public override void OnBehaviorInitialize()
    {
        if (this.Mission.GetMissionBehavior<BattleDeploymentMissionController>() != null)
        {
            return;
        }

        this.Mission.AddMissionBehavior(new BattleDeploymentMissionController(isPlayerAttacker: true));
    }
}
```

That guard is not optional. A second controller will fight the first over `SetSpawnTroops`, over `IsTeleportingAgents`, and over removing the shared handler — and none of those conflicts raise an error.

## Risks and boundaries

1. **The engine builds these too.** Check `GetMissionBehavior<BattleDeploymentMissionController>()` before adding your own; a duplicate controller produces silent contention over spawning and the teleport flag rather than an exception.
2. **`MissionAgentSpawnLogic` is never null-checked.** `OnAfterStart`, `OnSetupTeamsOfSide`, and `AfterDeploymentFinished` all dereference it. If `OnBehaviorInitialize` did not run, or the mission has no `DefaultBattleMissionAgentSpawnLogic`, the first of those throws.
3. **The side loop assumes enum values `0` and `1`.** `for (int i = 0; i < 2; i++)` casting to `BattleSideEnum` works only because the enum has exactly two members with those values. It is unchecked — a third side would be silently skipped.
4. **`IsTeleportingAgents` is a bracket across two hooks.** Raised in `OnSetupTeamsFinished`, lowered in `BeforeDeploymentFinished`. Anything that observes agent motion between them sees the teleport window, not real movement, and the flag is on the shared `Mission` — every behavior sees it, not just this controller.
5. **`in` parameters cannot be swapped for `ref`.** `GetFormationSpawnFrame(..., out spawnPosition, out spawnDirection)` followed by `TrySetFormationFrame(in spawnPosition, in spawnDirection)` requires two local variables and forbids passing anything with a side effect.
6. **The deployment handler is removed unconditionally.** `AfterDeploymentFinished` calls `RemoveMissionBehavior(_battleDeploymentHandler)` with no null check, and the field is `private` so a subclass cannot retain a reference first.
7. **The public constructor is not the whole story.** Constructing the controller does not inject `MissionAgentSpawnLogic` or the handler — `OnBehaviorInitialize` resolves both from the mission. A constructed-but-never-initialized instance has nulls in both fields.
8. **Reinforcements stay disabled until the very end.** `OnAfterStart` turns them off and only `AfterDeploymentFinished` turns them back on, so any reinforcement arriving mid-deployment is suppressed by design.
9. **Not saved.** Deployment is a mission-time phase and leaves nothing behind.

## Dependencies

- **Base contract:** [`DeploymentMissionController`](../DeploymentMissionController) defines the phase and the hook names (`OnAfterStart`, `OnSetupTeamsOfSide`, `OnSetupTeamsFinished`, `BeforeDeploymentFinished`, `AfterDeploymentFinished`) plus the `isPlayerAttacker` flag.
- **Spawn collaborator:** [`DefaultBattleMissionAgentSpawnLogic`](../DefaultBattleMissionAgentSpawnLogic) supplies `SetSpawnTroops`, `SetReinforcementsSpawnEnabled`, and `OnSideDeploymentOver`; it is stored in a `protected` field.
- **UI handler:** [`BattleDeploymentHandler`](../BattleDeploymentHandler) is resolved privately and removed when the phase ends.
- **Mission state:** [`Mission`](../../mission/Mission) `IsTeleportingAgents`, `GetMissionBehavior<T>()`, `AddMissionBehavior`, `RemoveMissionBehavior`, `GetFormationSpawnFrame`, and `Teams` are the mission surfaces used here.
- **Scene data:** [`Agent`](../../mission/Agent) `TrySetFormationFrame`, [`Team`](../Team) `GeneralAgent`, and [`Formation`](../../mission/Formation) frame placement.
- **Scene-level spawn sets:** [`BattleSpawnLogic`](../BattleSpawnLogic) prunes the scene's spawnpoint sets in the same pre-mission window this controller runs in.
- Bucket home: [mission-ext API section](../)