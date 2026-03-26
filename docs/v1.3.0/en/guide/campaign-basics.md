---
title: Campaign System Basics
description: v1.3.0 MobileParty, Kingdom introduction
---

# Campaign System Basics

**v1.3.0 Version**

> Note: This page covers v1.3.0 Campaign system basics. v1.3.15 has more features. For complete content, see [v1.3.15 Campaign System](../../v1.3.15/en/guide/campaign-system.md).

## Overview

Campaign is Bannerlord's world map/macro-level system. In v1.3.0, the Campaign system is already quite complete.

## CampaignBehavior

### Basic Structure

```csharp
using TaleWorlds.CampaignSystem;

namespace MyModule
{
    public class MyCampaignBehavior : CampaignBehaviorBase
    {
        public override void RegisterEvents()
        {
            CampaignEvents.OnGameLoaded.AddNonSerializedListener(this, OnGameLoaded);
        }
        
        private void OnGameLoaded(CampaignGameStarter starter)
        {
            Debug.Print("Game loaded!");
        }
        
        public override void SyncData(IDataStore dataStore)
        {
            // Save sync
        }
    }
}
```

### Register Behavior

```csharp
if (game.GameType is Campaign)
{
    gameStarter.AddBehavior(new MyCampaignBehavior());
}
```

## MobileParty

```csharp
// Get player party
MobileParty playerParty = MobileParty.MainParty;

// Party position
Vec2 position = playerParty.Position2D;

// Party members
int memberCount = playerParty.MemberCount;
```

## Settlement

```csharp
// Get all settlements
List<Settlement> settlements = Settlement.All;

// Find nearest town
Town nearestTown = Settlement.FindNearestTown(position);
```

## Differences from v1.3.15

| Feature | v1.3.0 | v1.3.15 |
|---------|--------|---------|
| CampaignBehavior | Supported | Supported |
| Save method | IDataStore | TaleWorlds.SaveSystem |
| Event system | CampaignEvents | CampaignEvents (same) |

---

## Related Documentation

- [v1.3.15 Campaign System](../../v1.3.15/en/guide/campaign-system.md)
- [API Reference](../../api/campaign/)
