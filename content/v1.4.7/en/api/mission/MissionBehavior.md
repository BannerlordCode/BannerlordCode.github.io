---
title: "MissionBehavior"
description: "The combat-layer behaviour base class: sixty-plus all-virtual callbacks covering mission creation, deployment, per-tick, hits, agent spawn and death, mounting, interaction, mission state and mission end. The standard hook for any in-combat mod logic."
---
# MissionBehavior

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionBehavior : IMissionBehavior`
**Base:** none; implements `TaleWorlds.MountAndBlade.IMissionBehavior`
**Source:** `TaleWorlds.MountAndBlade/MissionBehavior.cs` (declaration at line 11)

## Overview

`MissionBehavior` is the official extension carrier for the combat layer, and the counterpart of [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) on the campaign side. It holds no state of its own. What it has is sixty-plus callbacks, **every one of them `virtual`**: mission created, deployment finished, each tick, an agent was hit or killed, someone mounted or dismounted, an object was used, the mission state changed, the mission ended. Each is an independent hook.

The relationship with [Mission](../Mission) is "subscriber and participant": you register with `mission.AddMissionBehavior(this)` and the engine calls your callbacks at the right moments, keeping your instance in `Mission.MissionBehaviors`.

The difference that catches people is persistence. **A `MissionBehavior` does not participate in saving.** The campaign-layer behaviour has `SyncData`; this one has no equivalent. When the mission ends the behaviour is destroyed along with the whole `Mission`. Anything that must survive a mission has to be written back to the campaign layer — onto a `Hero`, a `Settlement`, or a campaign behaviour's own fields.

The `Mission` property has an `internal` setter. The engine injects it during registration, so it is null while your constructor runs and only reliable from `OnBehaviorInitialize` onwards.

`BehaviorType` is abstract and must be implemented. `MissionBehaviorType` has exactly two values, `Logic` and `Other`; the engine uses it to group and order behaviours.

## Mental Model

A `MissionBehavior` is a subscription to the combat's timeline, not a service and not a persistent store. Three consequences follow.

**Register, receive callbacks, get removed.** The natural registration points are `MBSubModuleBase.OnMissionBehaviorInitialize(Mission)` or the mission launch path. Removal is automatic at mission end, and you can do it early in `OnEndMission` if you need to. Anything you hold beyond that is a dangling reference.

**The callback fires while the world is mid-change.** `OnAgentRemoved` runs after the agent has left the scene but possibly before it is deleted; `OnEarlyAgentRemoved` runs earlier still. During these callbacks the agent collections are being mutated, so mark and defer rather than act. Put the handling in the next `OnMissionTick`.

**`Mission` is injected, not constructed.** It is null in your constructor. Touching it before `OnBehaviorInitialize` is a null reference every time.

**Which callback to use, quickly:**

- per-frame logic → `OnMissionTick(float dt)`, `OnPreMissionTick(float dt)`, `OnPreDisplayMissionTick(float dt)`
- fixed-step physics or numeric sync → `OnFixedMissionTick(float fixedDt)`
- hit detection → `OnAgentHit`, `OnMeleeHit`, `OnMissileHit`, `OnScoreHit`, `OnRegisterBlow`
- agent life and death → `OnAgentCreated`, `OnEarlyAgentRemoved`, `OnAgentRemoved`, `OnAgentDeleted`
- deployment → `OnTeamDeployed`, `OnBattleSideDeployed`, `OnDeploymentFinished`, `OnAfterDeploymentFinished`
- mission state → `OnMissionStateActivated`, `OnMissionStateDeactivated`, `OnMissionStateFinalized`, `OnMissionModeChange`
- ending → `OnEndMissionInternal`, `OnEndMission`, `OnRemoveBehavior`

**Override and call `base`.** Several of these callbacks carry engine-internal bookkeeping in their default implementations. Skipping `base` is a silent behavioural change, not a simplification.

**Three mistakes account for most bugs here.** Enumerating `Mission.Agents` from inside `OnAgentRemoved` while the collection is changing. Doing an O(n) sweep every frame in `OnMissionTick`. And using a `MissionBehavior` to hold state that has to survive the mission, which comes back as a default after a load.

## When to Use / When Not To Use

- **Use** for any logic that only matters inside combat: damage modifiers, hit reactions, AI patches, UI prompts, in-mission overrides.
- **Use** when you need mission start and end hooks without patching vanilla code.
- **Use** `OnEndMission` for teardown: camera restoration, spawned-object cleanup, unsubscription.
- **Do not** use it to hold cross-mission state. It is not saved; use [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase).
- **Do not** scan the whole agent list every frame in `OnMissionTick`.
- **Do not** mutate agent collections inside a death callback.
- **Do not** override a callback without calling `base`.

## Members

### Lifecycle

| Member | What it is for |
| --- | --- |
| `public Mission Mission { get; internal set; }` | The owning mission. **The setter is `internal`** — the engine injects it at registration, so it is null in your constructor and reliable from `OnBehaviorInitialize`. |
| `public abstract MissionBehaviorType BehaviorType { get; }` | Required. `MissionBehaviorType` has only `Logic` and `Other`; the engine uses it to group and order behaviours. |
| `OnAfterMissionCreated()` | The mission object exists; the scene may not be fully loaded yet. |
| `OnBehaviorInitialize()` | The engine has initialised the behaviour. **The first reliable point at which `Mission` is usable.** |
| `OnCreated()` | Behaviour creation finished. |
| `EarlyStart()` / `AfterStart()` | Before and after mission start. `EarlyStart` is pre-deployment. |
| `OnRenderingStarted()` | Scene rendering has begun. |
| `OnClearScene()` | Scene cleanup. Drop scene-level references here. |
| `OnEndMissionInternal()` | Engine-side start of the end sequence. |
| `protected virtual void OnEndMission()` | Mission end. **The right place for teardown**: camera, spawned objects, subscriptions. |
| `OnRemoveBehavior()` | The behaviour is being removed — the last callback it receives. |

### Ticks

| Member | What it is for |
| --- | --- |
| `public virtual void OnFixedMissionTick(float fixedDt)` | Fixed-step tick. Physics and numeric synchronisation belong here; the step is constant. |
| `public virtual void OnPreMissionTick(float dt)` | Before the mission tick — preprocessing for the frame. |
| `public virtual void OnPreDisplayMissionTick(float dt)` | Before the display tick. |
| `public virtual void OnMissionTick(float dt)` | **The main tick.** Most per-frame logic goes here, and it is performance sensitive. |

### Hits and damage

| Member | What it is for |
| --- | --- |
| `public virtual void OnMeleeHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)` | A melee hit landed. `isCanceled` means it was blocked or cancelled. |
| `public virtual void OnMissileHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)` | A missile hit landed. |
| `public virtual void OnMissileCollisionReaction(Mission.MissileCollisionReaction collisionReaction, Agent attackerAgent, Agent attachedAgent, sbyte attachedBoneIndex)` | Missile collision reaction — straight flight, pierce or bounce. |
| `public virtual void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | **The general hit callback**; melee and missile hits both route here. The default choice for damage logic. |
| `public virtual void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | Hit scoring — whether it counted as a hit, and the difficulty figures behind that decision. |
| `public virtual void OnRegisterBlow(Agent attacker, Agent victim, WeakGameEntity realHitEntity, Blow b, ref AttackCollisionData collisionData, in MissionWeapon attackerWeapon)` | **Blow registration.** `collisionData` is passed by `ref`, so it is the only combat-result parameter a behaviour can rewrite. Its settable members are `AttackerStunPeriod` and `DefenderStunPeriod`; damage values on it are read-only. |
| `public virtual void OnAgentShootMissile(Agent shooterAgent, EquipmentIndex weaponIndex, Vec3 position, Vec3 velocity, Mat3 orientation, bool hasRigidBody, int forcedMissileIndex)` | The moment of firing — the place to alter initial velocity. |
| `OnMissileRemoved(int missileIndex)` | A missile was removed. |

### Agent life cycle

| Member | What it is for |
| --- | --- |
| `OnAgentCreated(Agent agent)` | An agent spawned. **The entry point for reinforcement and stat initialisation mods.** |
| `OnAgentBuild(Agent agent, Banner banner)` | The agent's visual build finished. |
| `OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)` | The agent changed team. |
| `OnAgentControllerSetToPlayer(Agent agent)` | Control was handed to the player — a switch or a reclaim. |
| `OnEarlyAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | Early stage of the death sequence. |
| `OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | Death sequence. **Do not enumerate `Mission.Agents` here** — the collection is being changed. |
| `OnAgentDeleted(Agent affectedAgent)` | The agent has been fully removed from the scene. **The reference is now invalid.** |
| `OnAgentFleeing(Agent agent)` / `OnAgentPanicked(Agent agent)` | Rout and panic. |
| `OnAgentMount(Agent agent)` / `OnAgentDismount(Agent agent)` | Mounting and dismounting. |
| `OnAgentControllerChanged(Agent agent, AgentControllerType oldController)` | Controller changed (`protected internal`). |
| `OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)` | Alert state changed. |
| `OnGetAgentState(Agent agent, bool usedSurgery)` | State query hook (`protected internal`). The entry point for state-modifying behaviour. |
| `OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)` | An interaction action. |
| `OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)` / `OnObjectStoppedBeingUsed(...)` | A scene object started or stopped being used. |
| `OnFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)` / `OnFocusLost(...)` | Interaction focus. |
| `OnAssignPlayerAsSergeantOfFormation(Agent agent)` | The player was made formation sergeant. |
| `IsThereAgentAction(Agent userAgent, Agent otherAgent)` | Whether an action is available — the precondition for dialogue or interaction. |

### Teams, deployment and mission state

| Member | What it is for |
| --- | --- |
| `OnAddTeam(Team team)` / `AfterAddTeam(Team team)` | A team was added, before and after. |
| `OnTeamDeployed(Team team)` | That team finished deploying. |
| `OnBattleSideDeployed(BattleSideEnum side)` | That whole side finished deploying. |
| `OnDeploymentFinished()` | Deployment is over and the fight has begun. |
| `OnAfterDeploymentFinished()` | After deployment finished. |
| `OnMissionStateActivated()` / `OnMissionStateDeactivated()` / `OnMissionStateFinalized()` | Mission state machine transitions. |
| `OnMissionModeChange(MissionMode oldMissionMode, bool atStart)` | The mission's play mode changed. |
| `GetCompassTargets()` | Returns `List<CompassItemUpdateParams>` to add compass markers. **Called every frame** — returning a fresh list each time costs garbage; be sparing. |
| `OnTutorialCompleted(string completedTutorialIdentifier)` | An in-mission tutorial finished. |

### Entities and misc

| Member | What it is for |
| --- | --- |
| `OnEntityRemoved(GameEntity entity)` | A scene entity was removed. **The correct place to release entity references.** |
| `OnObjectDisabled(DestructableComponent destructionComponent)` | A destructible was disabled (`protected internal`). |
| `OnMissionScreenPreLoad()` | The in-mission screen is preloading. |

## Examples

### Example 1: Rewrite a combat outcome at blow registration

`collisionData` arrives by `ref`, and its stun periods are settable. Damage figures on it are read-only, so a mod that wants a different damage number has to reach for something other than this parameter.

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyStunModifierBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;

    public override void OnRegisterBlow(Agent attacker, Agent victim, WeakGameEntity realHitEntity,
        Blow b, ref AttackCollisionData collisionData, in MissionWeapon attackerWeapon)
    {
        base.OnRegisterBlow(attacker, victim, realHitEntity, b, ref collisionData, attackerWeapon);

        if (attacker == null || victim == null)
        {
            return;
        }

        if (attacker.IsPlayerControlled)
        {
            // These two are the settable members of the collision data
            collisionData.AttackerStunPeriod = 0f;
            collisionData.DefenderStunPeriod = 1.5f;
        }
    }
}
```

### Example 2: Teardown that restores camera and clears spawned objects

This belongs in `OnEndMission`, not in a tick.

```csharp
using TaleWorlds.MountAndBlade;

public class MyCleanupBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;

    protected override void OnEndMission()
    {
        base.OnEndMission();

        // Mission is injected by the engine at registration
        Mission mission = Mission;
        if (mission == null)
        {
            return;
        }

        // Without this the next mission inherits the old camera
        mission.ResetFirstThirdPersonView();

        // Without this spawned objects survive into a reused scene
        mission.RemoveSpawnedItemsAndMissiles();
    }

    public override void OnEntityRemoved(GameEntity entity)
    {
        base.OnEntityRemoved(entity);

        // Drop any subscription holding this entity
    }
}
```

### Example 3: Know where you are in the death sequence

```csharp
using TaleWorlds.MountAndBlade;

public class MyDeathWatcherBehavior : MissionBehavior
{
    private bool _deathsThisMission;

    public int DeathsThisMission
    {
        get { return _deathsThisMission ? 1 : 0; }
    }

    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;

    public override void OnMissionTick(float dt)
    {
        // Mission is null until the engine injects it at registration
        if (Mission == null)
        {
            return;
        }

        if (!Mission.IsDeploymentFinished)
        {
            return;
        }
    }

    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
    {
        // The agent collection is mid-change here: record only, and act in the
        // next OnMissionTick
        _deathsThisMission = true;
    }

    public override void OnAgentDeleted(Agent affectedAgent)
    {
        base.OnAgentDeleted(affectedAgent);

        // affectedAgent is fully invalid past this point
    }
}
```

## Risks and Boundaries

- **Not saved.** There is no `SyncData` on this class. Anything that must survive the mission or a reload belongs on the campaign layer.
- **Everything dies with the mission.** `Mission`, `Agent` and `GameEntity` references are volatile. A static field or a long-lived campaign object holding one is a dangling pointer into the next battle.
- **Do not enumerate agent collections in death callbacks.** `OnAgentRemoved` and `OnEarlyAgentRemoved` run while the collection is being modified; a `foreach` throws `InvalidOperationException`.
- **`Mission` is null in the constructor.** It is injected at registration; using it before `OnBehaviorInitialize` null-references.
- **`OnMissionTick` runs every frame.** An O(n) sweep there costs frames directly. Accumulate elapsed time and process on an interval.
- **`GetCompassTargets()` runs every frame** and returns a fresh list. Unconditional use is a per-frame allocation.
- **`OnRegisterBlow` is the only place a behaviour can rewrite a hit.** `collisionData` is `ref`, but only `AttackerStunPeriod` and `DefenderStunPeriod` have setters; the damage figures are read-only. Rewriting it also changes multiplayer consistency, and arbitrary values break balance and corrupt AI scoring.
- **Override and chain.** Several callbacks carry engine-internal state maintenance in their defaults.
- **`protected internal` members are override-only.** From another assembly you cannot call them, and a wrong signature produces a silent "my override never fires".
- **Single-threaded with native interop.** Callbacks run on the main combat loop; `AttackCollisionData`, `MissionWeapon` and `WeakGameEntity` wrap native data and must not be cached across frames.

## Dependencies

- **Upstream / providers**
  - [Mission](../Mission) registers this class through `AddMissionBehavior` and holds the instance.
  - [MBSubModuleBase](../../core/MBSubModuleBase)'s `OnBeforeMissionBehaviorInitialize` / `OnMissionBehaviorInitialize` are the registration timing.
- **Peers / downstream**
  - [MissionState](../MissionState) opens the mission and then drives the callbacks through its tick.
  - [Agent](../Agent) is the argument of most of these callbacks.
  - [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) is the campaign-layer counterpart, and the place for state that must persist.

## See Also

- ↑ Parent: [mission index](../)
- ↔ Related: [Mission](../Mission) · [MissionState](../MissionState) · [Agent](../Agent) · [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) · [MBSubModuleBase](../../core/MBSubModuleBase) · [Chinese twin](../../../../zh/api/mission/MissionBehavior)