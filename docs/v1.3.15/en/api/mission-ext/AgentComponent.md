# AgentComponent

## Class Overview

| Item | Description |
|------|-------------|
| **Namespace** | TaleWorlds.MountAndBlade |
| **File Path** | TaleWorlds.MountAndBlade/AgentComponent.cs |
| **Type** | Abstract class |

## Description

`AgentComponent` is the base class for the extensible Agent behavior system. By inheriting from this class, you can add custom behaviors to Agents, such as special states, timers, event handling, etc.

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| Agent | Agent | Parent Agent instance |

## Key Methods

### Lifecycle Methods

| Method | Return Value | Description |
|--------|--------------|-------------|
| Initialize() | void | Initialization |
| OnTick(float dt) | void | Per frame update |
| OnTickParallel(float dt) | void | Parallel update |

### Event Methods

| Method | Return Value | Description |
|--------|--------------|-------------|
| OnItemPickup(SpawnedItemEntity item) | void | When picking up item |
| OnWeaponDrop(MissionWeapon droppedWeapon) | void | When dropping weapon |
| OnStopUsingGameObject() | void | When stopping use of game object |
| OnWeaponHPChanged(ItemObject item, int hitPoints) | void | When weapon durability changes |
| OnRetreating() | void | When retreating |
| OnMount(Agent mount) | void | When mounting |
| OnDismount(Agent mount) | void | When dismounting |
| OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData) | void | When taking damage |
| OnDisciplineChanged() | void | When discipline changes |
| OnAgentRemoved() | void | When Agent is removed |
| OnAgentTeleported() | void | When Agent is teleported |
| OnFormationSet() | void | When formation is set |

### Morale Methods

| Method | Return Value | Description |
|--------|--------------|-------------|
| GetMoraleAddition() | float | Gets morale addition value |
| GetMoraleDecreaseConstant() | float | Gets morale decrease constant |

## Usage Example

```csharp
// Create custom Agent component
public class MyAgentComponent : AgentComponent
{
    private float _customTimer;

    public MyAgentComponent(Agent agent) : base(agent)
    {
        _customTimer = 0f;
    }

    public override void Initialize()
    {
        // Initialization logic
    }

    public override void OnTick(float dt)
    {
        _customTimer += dt;
        if (_customTimer > 5f)
        {
            // Execute every 5 seconds
            _customTimer = 0f;
        }
    }

    public override void OnHit(Agent affectorAgent, int damage, 
        in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData)
    {
        // Logic when taking damage
    }
}

// Attach component to Agent
Agent agent = // Get Agent;
agent.AddComponent(new MyAgentComponent(agent));
```
