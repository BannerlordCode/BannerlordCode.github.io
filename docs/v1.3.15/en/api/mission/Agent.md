<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Agent`
- [← Area / Back to mission](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
- [🔀 Cross-Version Compare /versions/Agent](/versions/Agent)
<!-- END BREADCRUMB -->
# Agent Class

**Namespace**: TaleWorlds.MountAndBlade  
**File**: `TaleWorlds.MountAndBlade/Agent.cs` (~232,000 lines)  
**Purpose**: Represents units (soldiers, players, monsters, etc.) on the battlefield. Contains unit state, equipment, animations, and behavior control.

## Overview

`Agent` is the core class representing units in Bannerlord. Each Agent can be:
- Player-controlled character
- AI-controlled soldier
- Monster or animal
- Mounted horse

Agent contains rich data:
- Position and movement data
- Equipment and weapons
- Health and state
- Animations and actions
- Team and formation information

## Developer Use Cases

### Use Case 1: Get the player Agent and read state

**Scenario**: Check whether the player is alive, get position, current team.

```csharp
Agent main = Agent.Main; // equivalent to Mission.Current.MainAgent
if (main == null) return;
Vec3 pos = main.Position;
Team team = main.Team;
bool dead = main.State == AgentState.Dead;
```

**Key points**: `Agent.Main` is the static accessor; null in spectator mode or before the player spawns; `State` is a property, `IsActive()` is a method — semantics differ.

### Use Case 2: Change an Agent's team

**Scenario**: Defection, transferring to ally or enemy side.

```csharp
agent.SetTeam(newTeam, sync: true);
```

**Key points**: The second `sync` parameter controls network sync; pass `true` in multiplayer. After changing teams the `Formation` reference becomes stale and must be reassigned.

### Use Case 3: Extend an Agent with AgentComponent

**Scenario**: Attach per-frame logic or a damage callback to every Agent.

```csharp
public class MyComp : AgentComponent
{
    public MyComp(Agent a) : base(a) { }
    public override void OnHit(Agent affector, int dmg,
        in MissionWeapon w, in Blow b, in AttackCollisionData c) { }
}

public class MyBehavior : MissionLogic
{
    public override void OnAgentCreated(Agent a) =>
        a.AddComponent(new MyComp(a));
}
```

**Key points**: Do not inherit `Agent` directly; attach components at spawn via `MissionBehavior.OnAgentCreated`; components are disposed together with the Agent.

### Use Case 4: Handle damage via MissionBehavior

**Scenario**: Custom damage rules or kill tracking.

```csharp
public override void OnAgentHit(Agent affected, Agent affector,
    in MissionWeapon weapon, in Blow blow, in AttackCollisionData data)
{
    if (affected == Agent.Main) { /* player damage handling */ }
}
```

**Key points**: `OnAgentHit` fires after damage is resolved; to intercept or rewrite damage use `OnMeleeHit` / `OnMissileHit`; read final damage via `blow.BaseDamage`.

## Key Properties

### Identity and State

| Property | Type | Description |
|----------|------|-------------|
| `Index` | `int` | Unique index of the Agent |
| `State` | `AgentState` | Current state (active/dead/captured, etc.) |
| `Controller` | `AgentControllerType` | Control type (player/AI/scripted) |
| `Mission` | `Mission` | The mission this Agent belongs to |

### Position and Movement

| Property | Type | Description |
|----------|------|-------------|
| `Position` | `Vec3` | World coordinate position |
| `MovementMode` | `AgentMovementMode` | Current movement mode |
| `MovementVelocity` | `Vec2` | Movement velocity vector |
| `MovementDirectionAsAngle` | `float` | Movement direction angle |
| `MovementFlags` | `MovementControlFlag` | Movement flags (forward/backward/left/right) |
| `MovementInputVector` | `Vec2` | Movement input vector |

### Team and Formation

| Property | Type | Description |
|----------|------|-------------|
| `Team` | `Team` | The team this Agent belongs to |
| `FormationPositionPreference` | `FormationPositionPreference` | Formation position preference |
| `IsFormationFrameEnabled` | `bool` | Whether formation frame is enabled |

### Combat Properties

| Property | Type | Description |
|----------|------|-------------|
| `CurrentMortalityState` | `Agent.MortalityState` | Life/death state |
| `CurrentWatchState` | `Agent.WatchState` | Watch/alert state |
| `CurrentGuardMode` | `Agent.GuardMode` | Defense posture |
| `ImmediateEnemy` | `Agent` | Nearest enemy Agent |
| `RiderAgent` | `Agent` | Rider (if this Agent is a mount) |
| `MountAgent` | `Agent` | Mount (if this Agent is riding) |

### Equipment and Weapons

| Property | Type | Description |
|----------|------|-------------|
| `Equipment` | `Equipment` | Equipment slots |
| `AgentDrivenProperties` | `AgentDrivenProperties` | Agent-driven properties |

## Key Methods

### Movement Control

| Method | Description |
|--------|-------------|
| `SetTargetPosition(Vec2)` | Set target position |
| `SetTargetPositionAndDirection(Vec2, Vec3)` | Set target position and direction |
| `SetMovementDirection(Vec2)` | Set movement direction |
| `GetMovementDirection()` | Get current movement direction |
| `SetScriptedPosition(WorldPosition, bool, AIScriptedFrameFlags)` | Set scripted position (for AI) |
| `SetScriptedTargetEntity(WeakGameEntity, ...)` | Set scripted target entity |
| `DisableScriptedMovement()` | Disable scripted movement |
| `AttackDirectionToMovementFlag(UsageDirection)` | Convert attack direction to movement flag |
| `DefendDirectionToMovementFlag(UsageDirection)` | Convert defend direction to movement flag |

### Combat Control

| Method | Description |
|--------|-------------|
| `SetTargetAgent(Agent)` | Set target Agent |
| `GetTargetAgent()` | Get target Agent |
| `SetLookAgent(Agent)` | Set look-at Agent |
| `GetLookAgent()` | Get look-at Agent |
| `SetAutomaticTargetSelection(bool)` | Set automatic target selection |
| `SetWeaponGuard(UsageDirection)` | Set weapon guard direction |
| `PlayerAttackDirection()` | Get player attack direction |

### Team and Formation

| Method | Description |
|--------|-------------|
| `SetTeam(Team, bool)` | Set team membership |
| `SetFormationIntegrityData(...)` | Set formation integrity data |
| `GetFormationFileAndRankInfo(...)` | Get formation file/rank info |
| `SetTargetFormationIndex(int)` | Set target formation index |

### Agent Lifecycle

| Method | Description |
|--------|-------------|
| `AddController(Type)` | Add a controller |
| `RemoveController(Type)` | Remove a controller |
| `GetController()` | Get controller of specified type |
| `SetAILastSuspiciousPosition(...)` | Set AI last suspicious position |

### Animation and Actions

| Method | Description |
|--------|-------------|
| `SetCurrentActionProgress(int, float)` | Set current action progress |
| `SetCurrentActionSpeed(int, float)` | Set current action speed |
| `GetCurrentActionType(int)` | Get current action type |
| `GetCurrentActionStage(int)` | Get current action stage |
| `SetWantedAttackDirection(UsageDirection)` | Set wanted attack direction |

### Items and Equipment

| Method | Description |
|--------|-------------|
| `SetWieldedItemIndexAsClient(...)` | Set wielded weapon |
| `UpdateWeapons()` | Update weapon state |
| `InitializeSpawnEquipment(Equipment)` | Initialize spawn equipment |

## AgentController Related

### AgentControllerType Enum

| Value | Description |
|-------|-------------|
| `Player` | Player controlled |
| `AI` | AI controlled |
| `Create` | Used for creating new Agent |
| `Uncontrolled` | Uncontrolled |

### Adding Custom Controller

```csharp
// Add custom controller
AgentController myController = agent.AddController(typeof(MyAgentController));

// Get controller
var controller = agent.GetController<MyAgentController>();

// Remove controller
agent.RemoveController(typeof(MyAgentController));
```

## AgentState Enum

| Value | Description |
|-------|-------------|
| `Active` | Active |
| `Dead` | Dead |
| `Unconscious` | Unconscious |
| `Fled` | Fled |
| `Captured` | Captured |
| `Routed` | Routed |

## MovementControlFlag Enum

| Value | Description |
|-------|-------------|
| `Forward` | Forward |
| `Backward` | Backward |
| `Left` | Left |
| `Right` | Right |
| `DodgeForward` | Dodge forward |
| `DodgeBackward` | Dodge backward |
| `Jump` | Jump |

## UsageDirection Enum

| Value | Description |
|-------|-------------|
| `None` | None |
| `Up` | Up |
| `Down` | Down |
| `Left` | Left |
| `Right` | Right |

## Common Usage

### 1. Iterate All Agents in a Team

```csharp
// Get all Agents on attacker side
Team attackerTeam = Mission.Current.GetTeam(TeamSideEnum.Attacker);
foreach (Agent agent in attackerTeam.TeamAgents)
{
    // Process each Agent
}
```

### 2. Move Agent to Position

```csharp
// Set Agent to move to target position
agent.SetTargetPosition(targetPosition);

// Set Agent to move to position and face direction
Vec2 targetPos = new Vec2(100, 50);
Vec3 targetDir = new Vec3(1, 0, 0);
agent.SetTargetPositionAndDirection(targetPos, targetDir);

// Directly set movement direction
agent.SetMovementDirection(new Vec2(1, 0));
```

### 3. Make Agent Attack Target

```csharp
// Set target Agent
agent.SetTargetAgent(targetAgent);

// Set look-at target (for AI aiming)
agent.SetLookAgent(targetAgent);

// Enable automatic target selection
agent.SetAutomaticTargetSelection(true);

// Set attack direction
agent.SetWantedAttackDirection(Agent.UsageDirection.Right);
```

### 4. Control Agent Team

```csharp
// Change Agent team
agent.SetTeam(newTeam, sync: true);
```

### 5. Get Agent Information

```csharp
// Get Agent state
AgentState state = agent.State;

// Get Agent position
Vec3 position = agent.Position;

// Get Agent team
Team team = agent.Team;

// Check if Agent is dead
bool isDead = agent.State == AgentState.Dead;

// Get Agent's wielded weapon
EquipmentIndex wieldedIndex = agent.GetWieldedItemIndex(Agent.HandIndex.MainHand);
```

### 6. Extend Functionality with AgentComponent

```csharp
// AgentComponent is used to add custom behavior to Agent
public class MyAgentComponent : AgentComponent
{
    public MyAgentComponent(Agent agent) : base(agent) { }
    
    public override void OnTick(float dt)
    {
        // Logic executed every frame
    }
    
    public override void OnHit(Agent affectorAgent, int damage, 
        in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData)
    {
        // Handle hit event
    }
}

// Automatically added when Agent is created
public class MyMissionBehavior : MissionLogic
{
    public override void OnAgentCreated(Agent agent)
    {
        agent.AddComponent(new MyAgentComponent(agent));
    }
}
```

### 7. Check if Agent Can Perform Actions

```csharp
// Check if Agent can move
bool canMove = agent.CanBeAssignedForScriptedMovement();

// Get Agent's movement behavior type
Agent.MovementBehaviorType movementType = Mission.Current.GetMovementTypeOfAgents(new[] { agent });
```

## Notes

1. **Agent index is not permanent** - Index can change during mission; do not store long-term
2. **Use Mission for queries** - Query through `Mission.Current.GetNearbyAgents()` and similar methods
3. **Component pattern** - Use `AgentComponent` to extend Agent functionality; do not inherit Agent directly
4. **Animation sync** - Modifying animations in multiplayer requires network sync
5. **Movement direction** - `SetMovementDirection` uses Vec2, not angle
