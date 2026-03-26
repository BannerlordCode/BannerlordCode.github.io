---
title: Mission System Basics
description: v1.3.0 Mission and MissionBehavior introduction
---

# Mission System Basics

**v1.3.0 Version**

> Note: This page covers v1.3.0 Mission system basics. v1.3.15 has more features and APIs. For complete content, see [v1.3.15 Mission System](../../v1.3.15/en/guide/mission-system.md).

## Overview

Mission is the core of Bannerlord's combat system. In v1.3.0, the Mission system is relatively simple.

## MissionBehavior

### Basic Structure

```csharp
using TaleWorlds.MountAndBlade;

namespace MyModule
{
    public class MyMissionBehavior : MissionBehavior
    {
        public override void OnMissionStart()
        {
            base.OnMissionStart();
            Debug.Print("Mission started!");
        }
        
        public override void OnMissionTick(float dt)
        {
            base.OnMissionTick(dt);
            // Per-frame logic
        }
    }
}
```

### Register Behavior

```csharp
protected override void OnGameStart(Game game, IGameStarter gameStarter)
{
    base.OnGameStart(game, gameStarter);
    gameStarter.AddBehavior(new MyMissionBehavior());
}
```

## Agent Basics

```csharp
// Get all Agents
Mission.Current.GetAgents();

// Get player Agent
Agent playerAgent = Mission.Current.MainAgent;

// Agent basic properties
Vec3 position = agent.Position;
float health = agent.Health;
```

## Differences from v1.3.15

| Feature | v1.3.0 | v1.3.15 |
|---------|--------|---------|
| MissionBehavior | Supported | Support + more types |
| Agent components | Basic | More component types |
| Formation | Supported | Enhanced Formation AI |

---

## Related Documentation

- [v1.3.15 Mission System](../../v1.3.15/en/guide/mission-system.md)
- [API Reference](../../api/mission/)
