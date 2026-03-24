# Agent / Agent

**Namespace**: TaleWorlds.MountAndBlade
**File**: `bannerlord-1.3.0/TaleWorlds.MountAndBlade/Agent.cs`
**Version**: v1.3.0

## Overview

`Agent` is the agent entity in the game, representing soldiers, cavalry, archers, etc. on the battlefield. Each Agent has position, animation, equipment, and AI control. Agent is a wrapper around DotNetObject, with actual rendering and physics handled by the native engine.

## Differences from v1.3.15

- v1.3.0 Agent class is much smaller than v1.3.15 (about 7000 lines vs 23000+ lines in v1.3.15)
- No AgentComponent system (added in v1.3.15)
- Fewer properties and methods
- Missing some advanced AI and behavior features
- No deep Formation integration
- Simplified event system
- Fewer weapon and equipment related methods

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| Main | static Agent | Gets main agent (player controlled) |
| Position | Vec3 | Gets agent position |
| VisualPosition | Vec3 | Gets visual position |
| IsHuman | bool | Whether is human |
| IsMount | bool | Whether is mount |
| IsPlayerControlled | bool | Whether is player controlled |
| IsMainAgent | bool | Whether is main agent |
| IsAIControlled | bool | Whether is AI controlled |
| MovementVelocity | Vec2 | Gets movement velocity |

## Key Methods

| Method | Description |
|--------|-------------|
| GetAgentFlags | Get agent flags |
| GetPtr | Get native pointer |

## Code Example

```csharp
// Get main agent (player)
Agent mainAgent = Agent.Main;
if (mainAgent == null)
    return;

// Check if human or mount
if (mainAgent.IsHuman)
{
    // Human agent logic
}

// Get position
Vec3 position = mainAgent.Position;

// Check if player controlled
if (mainAgent.IsPlayerControlled)
{
    // Player logic
}
```

## Notes

- Agent is a wrapper around native object, do not try to modify internal state directly
- Use Agent.Main to get player agent
- Agent lifecycle is managed by mission system
- Mounts are also Agents
- Agent index is used for network synchronization in multiplayer
