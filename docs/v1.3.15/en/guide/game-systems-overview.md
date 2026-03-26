---
title: Game Systems Overview
description: Learn what can be customized in Bannerlord
---

# Game Systems Overview

## Overview

Bannerlord provides rich systems for mod developers to customize. Understanding these systems helps you plan your mod's feature scope.

## Customizable Systems

| System | Customizability | Description |
|--------|----------------|-------------|
| UI/Interface | ★★★★★ | Fully customizable, create new screens, modify existing UI |
| Mission/Battle | ★★★★☆ | Add new MissionBehavior, customize battle logic |
| Campaign/World | ★★★★☆ | Modify world state, add new events |
| Items/Equipment | ★★★★☆ | Add new items, modify attributes |
| Character/AI | ★★★☆☆ | Add new character types, modify AI behavior |
| Save System | ★★★☆☆ | Custom save format, handle version migration |
| Network/Multiplayer | ★★☆☆☆ | Limited multiplayer support |

## System Entry Points

### SubModule Entry

```csharp
public class MySubModule : MBSubModuleBase
{
    protected override void OnSubModuleLoad()
    {
        // Called when module loads
    }
    
    protected override void OnGameStart(Game game, IGameStarter gameStarter)
    {
        // Called when game starts
        // Add MissionBehavior
        // Add CampaignBehavior
    }
}
```

### Mission Entry

```csharp
public class MyMissionBehavior : MissionBehavior
{
    public override void OnMissionStart()
    {
        // Mission starts
    }
    
    public override void OnAgentCreated(Agent agent)
    {
        // Agent created
    }
}
```

### Campaign Entry

```csharp
public class MyCampaignBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // Register events
        CampaignEvents.OnGameLoaded.AddNonSerializedListener(this, OnGameLoaded);
    }
    
    public override void SyncData(IDataStore dataStore)
    {
        // Save sync
    }
}
```

## System Architecture

```
MBSubModuleBase
    │
    ├─► TaleWorlds.MountAndBlade
    │       │
    │       ├─► Mission
    │       │       ├─► MissionBehavior (battle logic)
    │       │       ├─► Agent (unit)
    │       │       ├─► Formation (formation)
    │       │       └─► Team (side)
    │       │
    │       └─► Campaign
    │               ├─► CampaignBehavior (world logic)
    │               ├─► MobileParty (moving party)
    │               ├─► Kingdom (kingdom)
    │               ├─► Clan (clan)
    │               └─► Settlement (settlement)
    │
    ├─► TaleWorlds.SaveSystem (v1.3.15)
    │       └─► Save management
    │
    └─► TaleWorlds.Gauntlet
            └─► UI (interface)
```

## Limitations

1. **Don't modify Native modules** - Located in game core
2. **Limited multiplayer sync** - Multiplayer support is incomplete
3. **Save compatibility** - v1.3.0 and v1.3.15 are incompatible
4. **Performance considerations** - Avoid excessive per-frame logic modifications

---

## Related Documentation

- [Mission System](./mission-system.md)
- [Campaign System](./campaign-system.md)
- [Architecture Documentation](../architecture/)

---

## Next Section

- [Troubleshooting](./troubleshooting.md) - Solve problems
- [Common Patterns](./common-patterns.md) - Best practices
