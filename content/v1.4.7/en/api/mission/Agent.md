---
title: "Agent"
description: "One operable unit in combat: it carries the character, team, health, equipment, formation membership and action state, and exposes several hundred read and write members. Agent.Main is the global entry point for the player unit, and combat logic ends up acting on this type."
---
# Agent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class Agent : DotNetObject, IAgent, IFocusable, IUsable, IFormationUnit, ITrackableBase`
**Base:** `TaleWorlds.DotNet.DotNetObject`; implements `IAgent`, `IFocusable`, `IUsable`, `IFormationUnit`, `ITrackableBase`
**Source:** `TaleWorlds.MountAndBlade/Agent.cs` (declaration at line 19)

## Overview

`Agent` is a living unit instance inside a mission. It is not character *data* — that is `BasicCharacterObject` and `Hero`. It is this character's embodiment in the mission that is currently running: a live position, a velocity, hit points, a wielded weapon, a team, a slot in a formation, and a live action state (attacking, blocking, aiming, mounted, routing, panicking).

The five interfaces it implements are five ways the combat subsystems reach it: `IAgent` (the unit itself), `IFocusable` (it can hold interaction focus), `IUsable` (it can use scene objects), `IFormationUnit` (it is a formation member) and `ITrackableBase` (it can be tracked and targeted).

The public surface runs past five hundred members, but daily use concentrates on a handful: identity (`Character`, `Team`, `Mission`, `Index`, `IsPlayerControlled`), survival (`Health`, `HealthLimit`, `Die`, `SetMortalityState`), equipment (`WieldedWeapon`, `TryToWieldWeaponInSlot`, `EquipItemsFromSpawnEquipment`), position (`Position`, `Velocity`, `TeleportToPosition`), formation (`Formation`, `DetachmentIndex`, `Team`), and the static entry point `Agent.Main`.

It derives from `DotNetObject`, so positions, frames and bone work pass into native code, and the whole type is main-thread only.

## Mental Model

**`Agent` is the bridge between a character and a combat instance.** The campaign layer holds persistent `Hero` and `CharacterObject` data that outlives both the mission and the save file. The combat layer holds `Agent` instances that live exactly as long as the mission. Entering combat spawns an `Agent`; leaving destroys it. What you persist is the character, never the agent.

**`SetX` versus `SetXAsClient` is the multiplayer rule, and getting it wrong is the classic "works solo, does nothing online" bug.**

- `SetX(...)` changes actual state — position, weapon, team, action, health. It is authoritative and belongs on the server.
- `SetXAsClient(...)` pushes a presentation value — pose, ammo count, reload phase — to clients. It is called on the server *to sync*.

A client calling an authoritative setter does nothing, silently. The split is simple to state and easy to violate: if it changes the **result**, it is server-side `SetX`; if it changes the **appearance**, it is `...AsClient`.

**Agents vanish from under you.** Death runs in three stages: `OnEarlyAgentRemoved`, then `OnAgentRemoved` (out of the scene), then `OnAgentDeleted` (fully gone). Past `OnAgentDeleted` the reference is invalid. And `mission.Agents` is a live view, so a `foreach` that triggers a kill throws.

**`MortalityState` is the authority on life, and its values are not what you might guess.** The enum `Agent.MortalityState` has exactly three members — `Mortal`, `Invulnerable`, `Immortal`. There is no `Alive`, `Dying` or `Dead`. "Can this agent be hurt?" is answered by `CurrentMortalityState != Agent.MortalityState.Invulnerable`, and "how hurt is it?" by `Health / HealthLimit`.

**Many fields change within a frame.** `Position`, `Velocity`, `GetCurrentAction(int channelNo)`, `GetCurrentActionType(int channelNo)` and `GetCurrentActionStage(int channelNo)` can all move between ticks in the same frame. Caching them across frames yields a stale answer; read them where you need them.

**Some method names carry more arguments than the shorthand suggests.** `TryToWieldWeaponInSlot(EquipmentIndex slotIndex, Agent.WeaponWieldActionType type, bool isWieldedOnSpawn)`, `EquipItemsFromSpawnEquipment(bool neededBatchedItems, bool prepareImmediately, bool useFaceCache, int faceCacheID)`, `SetWeaponAmmoAsClient(EquipmentIndex equipmentIndex, EquipmentIndex ammoEquipmentIndex, short ammo)`, `Mount(Agent mountAgent)` — all named here with their real shapes.

**`TeleportToPosition` ignores navigation.** It puts an agent exactly where you ask, including inside a wall. It is a scripting tool, not a movement tool.

## When to Use / When Not To Use

- **Use** to read unit state in combat: position, health, team, weapon.
- **Use** to drive a unit: teleport, team change, orders, routing.
- **Use** `EquipItemsFromSpawnEquipment` and `WieldInitialWeapons` after spawning, or the unit is unarmed.
- **Use** [Mission](../Mission)'s `GetClosestEnemyAgent` / `GetNearbyEnemyAgents` for targeting rather than walking the agent list.
- **Do not** cache an `Agent` across missions.
- **Do not** call authoritative setters on a client.
- **Do not** touch an agent after `OnAgentDeleted`.
- **Do not** judge life by `Health == 0`; use `CurrentMortalityState`.

## Members

Over five hundred members, grouped by role below. The groups cover what a mod calls; they are not the whole surface.

### Entry point and identity

| Member | What it is for |
| --- | --- |
| `public static Agent Main` | The player-controlled agent. **On a multiplayer client it can be a proxy**; `Mission.MainAgentServer` is the authoritative one. |
| `Mission Mission` | The owning mission. Invalid once the mission ends. |
| `int Index { get; }` | The agent's index. Stable ordering within its team. |
| `BasicCharacterObject Character` | The character template behind this agent. **This is the object you can hold beyond the mission.** |
| `Monster Monster { get; }` | Monster data, non-null only for beast units. |
| `Team Team { get; private set; }` | The owning team. |
| `bool IsPlayerControlled` | Whether a player rather than the AI is driving this agent. |
| `bool IsFemale { get; set; }` | Sex. Appearance and animation related. |
| `TextObject AgentRole { get; set; }` | The unit's role label — infantry, archer, cavalry and so on. |
| `IAgentOriginBase Origin { get; set; }` | Where the agent was spawned from. |
| `Formation Formation` | The formation it belongs to. |
| `IDetachment Detachment` | Detachment membership. |
| `int DetachmentIndex { get; private set; } = -1` | Slot within the detachment. Controls the shape of generated formations. |
| `float DetachmentWeight` | Detachment weighting. |
| `FormationPositionPreference FormationPositionPreference { get; set; }` | Which rank and file the agent prefers. |
| `AgentState State` | The unit's agent state. |
| `public event Agent.OnAgentHealthChangedDelegate OnAgentHealthChanged` | Raised when health changes. |
| `public event Agent.OnMountHealthChangedDelegate OnMountHealthChanged` | Raised when the mount's health changes. |

### Health and death

| Member | What it is for |
| --- | --- |
| `float Health` | Current health. |
| `float HealthLimit { get; set; }` | Maximum health. **Use this as the denominator for a percentage**, never a literal. |
| `float BaseHealthLimit { get; set; }` | Base maximum, before equipment bonuses. |
| `Agent.MortalityState CurrentMortalityState { get; private set; }` | `Mortal`, `Invulnerable` or `Immortal`. **The authority on whether this agent can be hurt.** |
| `void Die(Blow b, Agent.KillInfo overrideKillInfo = Agent.KillInfo.Invalid)` | Kill the agent. Fires the whole death sequence — enumerating agent collections inside those callbacks throws. |
| `void SetMortalityState(Agent.MortalityState newState)` | Set the mortality state directly, skipping the normal sequence. |
| `void ToggleInvulnerable()` | Flip invulnerability. **Takes no argument** — read `CurrentMortalityState` to find out which way it went. |
| `void RestoreShieldHitPoints()` | Restore shield durability. |
| `void ChangeWeaponHitPoints(EquipmentIndex slotIndex, short hitPoints)` | Set a weapon's durability. |
| `public const float HealthDyingThreshold = 1f` | Health at or below which the dying presentation kicks in. |
| `public const float DismountVelocityLimit = 0.5f` | Speed below which a dismount happens. |
| `int KillCount { get; set; }` | Kill tally. |

### Weapons and equipment

| Member | What it is for |
| --- | --- |
| `MissionWeapon WieldedWeapon` | The weapon in hand. **A value type, not a reference.** |
| `MissionWeapon WieldedOffhandWeapon` | The off-hand weapon. |
| `WeaponInfo GetWieldedWeaponInfo(Agent.HandIndex handIndex)` | Full weapon definition for a hand — ammo, damage, weight. The standard starting point for damage calculation. |
| `bool HasWeapon()` | Whether the agent holds anything. |
| `bool HasRangedWeapon(bool checkHasAmmo = false)` | Whether it holds a ranged weapon, optionally requiring loaded ammo. |
| `void TryToWieldWeaponInSlot(EquipmentIndex slotIndex, Agent.WeaponWieldActionType type, bool isWieldedOnSpawn)` | Switch to the weapon in a slot. **Three arguments.** |
| `void TryToSheathWeaponInHand(Agent.HandIndex handIndex, Agent.WeaponWieldActionType type)` | Sheath the weapon in a hand. |
| `void WieldNextWeapon(Agent.HandIndex weaponIndex, Agent.WeaponWieldActionType wieldActionType = Agent.WeaponWieldActionType.WithAnimation)` | Cycle to the next weapon in a hand. |
| `void EquipItemsFromSpawnEquipment(bool neededBatchedItems, bool prepareImmediately, bool useFaceCache, int faceCacheID)` | Puts on the spawn equipment set. **Call it after spawning or the unit is bare-handed.** |
| `void WieldInitialWeapons(Agent.WeaponWieldActionType wieldActionType = Agent.WeaponWieldActionType.InstantAfterPickUp, Equipment.InitialWeaponEquipPreference initialWeaponEquipPreference = TaleWorlds.Core.Equipment.InitialWeaponEquipPreference.Any)` | Equips the starting weapons. |
| `void DropItem(EquipmentIndex itemIndex, WeaponClass pickedUpItemType = WeaponClass.Undefined)` | Drop an item. |
| `MissionEquipment Equipment { get; private set; }` | The mission-side equipment container — **not** `Core.Equipment`. |
| `void SetWeaponAmmoAsClient(EquipmentIndex equipmentIndex, EquipmentIndex ammoEquipmentIndex, short ammo)` | Push an ammo count to clients. **Client-sync, not authoritative.** |

### Position and movement

| Member | What it is for |
| --- | --- |
| `Vec3 Position` | World position. Changes every frame. |
| `Vec3 Velocity` | Current velocity. |
| `Vec2 MovementVelocity` | Movement velocity as a 2D vector. |
| `void TeleportToPosition(Vec3 position)` | Teleport. **Ignores the navigation mesh** — it will place an agent inside geometry. |
| `void SetTeam(Team team, bool sync)` | Change team. The `sync` flag controls client propagation; the change itself is server-authoritative. |
| `void StopUsingGameObject()` | Stop whatever the agent was using. |
| `void DisableScriptedMovement(...)` / `DisableScriptedCombatMovement(...)` | Hand movement control back. |
| `Agent.MovementControlFlag MovementFlags` | Direction bitfield. |
| `AgentMovementMode MovementMode` | Walking, running, sprinting. |

### Mounts

| Member | What it is for |
| --- | --- |
| `Agent MountAgent` | The mount, when there is one. |
| `Agent RiderAgent` | The rider, from the mount's side. |
| `void Mount(Agent mountAgent)` | Mount. **One argument** — the mounting slot is chosen by the engine. Changes team structure and which weapons are in play. |
| `public bool IsRunningAway { get; private set; }` | Whether the agent is routing. |
| `void Retreat(WorldPosition retreatPos)` | Send the agent routing to a position. |
| `void StopRetreating()` | Cancel the rout. |

### Action and combat state

| Member | What it is for |
| --- | --- |
| `ActionIndexCache GetCurrentAction(int channelNo)` | The current action on a channel. |
| `Agent.ActionCodeType GetCurrentActionType(int channelNo)` | The action's code type. |
| `Agent.ActionStage GetCurrentActionStage(int channelNo)` | The action's stage. |
| `int GetCurrentActionPriority(int channelNo)` | The action's priority. |
| `void SetWeaponGuard(Agent.UsageDirection direction)` | Set the guard direction. |
| `void ResetGuard()` | Clear the guard. |
| `void SetWatchState(Agent.WatchState watchState)` | Set the watch state. |
| `bool IsAlarmStateNormal()` / `IsCautious()` / `IsPatrollingCautious()` / `IsAlarmed()` | Alert-level queries, used by AI decision layers. |
| `bool SetAlarmState(Agent.AIStateFlag alarmStateFlag)` | Set the alert level. Returns whether it took. |
| `void SetScriptedFlags(Agent.AIScriptedFrameFlags flags)` | Hand the unit to script control. |
| `void StartRagdollAsCorpse()` / `AddAsCorpse()` | Corpse and ragdoll presentation. |
| `void SetIsAIPaused(bool isPaused)` | Pause this agent's AI. |

### AI and decisions

| Member | What it is for |
| --- | --- |
| `CommonAIComponent CommonAIComponent { get; private set; }` | The common AI component. |
| `HumanAIComponent HumanAIComponent { get; private set; }` | The human-controlled AI component. |
| `void SetAIBehaviorParams(HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)` | Set AI behaviour parameters. |
| `void ForceAiBehaviorSelection()` | Make the AI choose a behaviour again. |
| `void ResetEnemyCaches()` | Reset enemy caches. **Required after a team change or a role switch.** |
| `void InvalidateAIWeaponSelections()` | Make the AI re-pick its weapons. |
| `bool CanReachAgent(Agent otherAgent)` | Reachability check — cheaper than trying and handling the failure. |
| `bool CanInteractWithAgent(Agent otherAgent, float userAgentCameraElevation)` | Interaction feasibility. |
| `bool CanMoveDirectlyToPosition(in Vec2 position)` | Whether a straight move is possible. |

### Events

| Member | What it is for |
| --- | --- |
| `public event Agent.OnAgentHealthChangedDelegate OnAgentHealthChanged` | Health changed. Instance event; it dies with the agent. |
| `public event Agent.OnMountHealthChangedDelegate OnMountHealthChanged` | Mount health changed. |

## Examples

### Example 1: Read state safely

`MortalityState` has three values and none of them is `Alive`.

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static float HealthFraction(Agent agent)
{
    if (agent == null)
    {
        return 0f;
    }

    // HealthLimit is the denominator, never a literal maximum
    if (agent.HealthLimit <= 0f)
    {
        return 0f;
    }

    return agent.Health / agent.HealthLimit;
}

public static bool CanBeHurt(Agent agent)
{
    // MortalityState is Mortal, Invulnerable or Immortal
    return agent != null
        && agent.CurrentMortalityState == Agent.MortalityState.Mortal;
}
```

### Example 2: Equip a spawned unit

A spawned agent with no `EquipItemsFromSpawnEquipment` call is bare-handed.

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyLoadoutBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;

    public override void OnAgentCreated(Agent agent)
    {
        base.OnAgentCreated(agent);

        if (agent == null)
        {
            return;
        }

        // Without these two the unit spawns with nothing in its hands
        agent.EquipItemsFromSpawnEquipment(true, true, false, 0);
        agent.WieldInitialWeapons();
    }
}
```

### Example 3: Tell server authority from client presentation

Changing the result is server-side; changing what players see is a client push.

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static void ToggleImmortality(Agent agent)
{
    if (agent == null)
    {
        return;
    }

    // Authoritative: changes whether the agent can be hurt at all
    agent.ToggleInvulnerable();

    if (agent.CurrentMortalityState != Agent.MortalityState.Invulnerable)
    {
        agent.ToggleInvulnerable();
    }
}

public static void PushAmmoForDisplay(Agent agent)
{
    if (agent == null)
    {
        return;
    }

    // Presentation only: this synchronises an ammo count to clients
    agent.SetWeaponAmmoAsClient(EquipmentIndex.Weapon, EquipmentIndex.Weapon, (short)0);
}
```

## Risks and Boundaries

- **Invalid after the mission.** An agent dies with its mission. Static fields, campaign-behaviour fields and UI caches holding one are dangling references into the next battle. **`Character` is the part you may keep.**
- **Dead after `OnAgentDeleted`.** Once the third stage of the death sequence completes, reading any property is undefined.
- **The collection is live.** `mission.Agents` mutates as agents are removed; a `foreach` that kills throws `InvalidOperationException`.
- **`SetX` versus `...AsClient` decides multiplayer behaviour.** Authoritative setters called on a client do nothing, silently. That is the root of "works locally, does nothing online".
- **`Health == 0` is not the life test.** `CurrentMortalityState` is the authority, and its three values are `Mortal`, `Invulnerable` and `Immortal` — there is no `Alive` member.
- **Per-frame fields do not cache.** `Position`, `Velocity` and the `GetCurrentAction*` family change within a frame as well as across frames.
- **`TeleportToPosition` ignores navigation.** It will place an agent inside geometry.
- **`Die` cascades.** It fires death callbacks, drops loot, disbands formations and makes the AI retarget. Continuing to write the world from inside those callbacks is how exceptions appear.
- **`ResetEnemyCaches` after a team change.** Skip it and the AI keeps stale enemy information.
- **Native interop.** `DotNetObject` means `Vec3`, frames and bone transforms reach native code. Main thread, scene loaded.
- **Argument shapes matter.** `ToggleInvulnerable()` takes nothing, `Mount(Agent)` takes one, `TryToWieldWeaponInSlot` takes three, `EquipItemsFromSpawnEquipment` takes four. The compiler will catch a wrong count, but not a wrong meaning.

## Dependencies

- **Upstream / providers**
  - [Mission](../Mission) spawns, owns and manages every `Agent`; `Agent.Main` and `Mission.MainAgent` are its entry points.
  - [MissionState](../MissionState) creates them when the mission opens.
- **Peers / downstream**
  - [MissionBehavior](../MissionBehavior)'s callbacks take agents as arguments — this is where combat logic lands.
  - [Campaign](../../campaign/Campaign)'s `MainParty` corresponds to the player's agents at mission entry and exit.
  - [MBSubModuleBase](../../core/MBSubModuleBase)'s mission hooks are the registration point for behaviour that acts on agents.

## See Also

- ↑ Parent: [mission index](../)
- ↔ Related: [Mission](../Mission) · [MissionBehavior](../MissionBehavior) · [MissionState](../MissionState) · [Campaign](../../campaign/Campaign) · [MBSubModuleBase](../../core/MBSubModuleBase) · [Chinese twin](../../../../zh/api/mission/Agent)