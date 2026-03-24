# Mission / Mission

**Namespace**: TaleWorlds.MountAndBlade
**File**: `bannerlord-1.3.0/TaleWorlds.MountAndBlade/Mission.cs`
**Version**: v1.3.0

## Overview

`Mission` is the core class of the game mission (battle) system, responsible for managing all entities, agents, and mission behaviors within a mission scene. Every battle takes place within a Mission instance.

## Differences from v1.3.15

- v1.3.0 Mission class is much simpler than v1.3.15 (about 8500 lines vs 32000+ lines in v1.3.15)
- No AgentComponent system
- Fewer MissionBehavior types
- Missing some AI and Formation related features
- No advanced animation system integration
- Simpler Scene interaction
- Fewer networking features for multiplayer

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| Current | static Mission | Gets current mission instance |
| Scene | Scene | Gets scene object |
| SceneName | string | Gets scene name |
| MainAgent | Agent | Gets main agent (player) |
| ActiveMissionObjects | MBReadOnlyList | Gets active mission objects |
| MissionObjects | MBReadOnlyList | Gets all mission objects |

## Key Methods

| Method | Description |
|--------|-------------|
| AddMissionBehavior | Add a mission behavior |
| GetActiveEntitiesWithScriptComponentOfType | Get entities with specific script component |
| AddActiveMissionObject | Add mission object |
| ActivateMissionObject | Activate mission object |
| DeactivateMissionObject | Deactivate mission object |

## Code Example

```csharp
// Get current mission
Mission mission = Mission.Current;
if (mission == null)
    return;

// Get scene name
string sceneName = mission.SceneName;

// Get main agent (player)
Agent mainAgent = mission.MainAgent;

// Access mission objects
foreach (MissionObject obj in mission.ActiveMissionObjects)
{
    // Process mission object
}

// Add custom mission behavior
mission.AddMissionBehavior(new MyCustomMissionBehavior());
```

## Using MissionBehavior

MissionBehavior is the base class for extending mission functionality:

```csharp
public class MyMissionBehavior : MissionBehavior
{
    public override void OnBehaviorInitialize()
    {
        base.OnBehaviorInitialize();
        // Initialize your behavior
    }

    public override void OnMissionTick(float dt)
    {
        base.OnMissionTick(dt);
        // Called every frame during mission
    }
}
```

## Notes

- Mission is a DOTNET managed wrapper around a native object
- Use Mission.Current to get current mission instance
- Mission objects are managed through MissionObject base class
- All agents in mission can be accessed through mission.AgentList
