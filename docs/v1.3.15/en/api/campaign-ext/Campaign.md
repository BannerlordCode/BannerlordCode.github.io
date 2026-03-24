# Campaign

**Namespace**: TaleWorlds.CampaignSystem  
**File**: `bannerlord-1.3.15/TaleWorlds.CampaignSystem/Campaign.cs`  
**Purpose**: Main campaign class managing game state, time, factions, and global systems

## Overview

Campaign is the central class for the campaign mode in Mount and Blade II: Bannerlord. It manages the global game state, time progression, factions, parties, settlements, and provides access to all major game systems.

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `Current` | `static Campaign` | Current campaign instance |
| `GameMode` | `CampaignGameMode` | Current game mode |
| `MainParty` | `MobileParty` | Player's main party |
| `MainHero` | `Hero` | Player's hero character |
| `Settlements` | `MBReadOnlyList` | All settlements in the world |
| `MobileParties` | `MBReadOnlyList` | All mobile parties |
| `Kingdoms` | `MBReadOnlyList` | All kingdoms |
| `Clans` | `MBReadOnlyList` | All clans |
| `AliveHeroes` | `MBReadOnlyList` | All living heroes |
| `DeadOrDisabledHeroes` | `MBReadOnlyList` | All dead or disabled heroes |
| `CaravanParties` | `MBReadOnlyList` | All caravan parties |
| `PatrolParties` | `MBReadOnlyList` | All patrol parties |
| `MilitiaParties` | `MBReadOnlyList` | All militia parties |
| `GarrisonParties` | `MBReadOnlyList` | All garrison parties |
| `LordParties` | `MBReadOnlyList` | All lord parties |
| `BanditParties` | `MBReadOnlyList` | All bandit parties |
| `TimeControlMode` | `CampaignTimeControlMode` | Current time control state |
| `IsMainPartyWaiting` | `bool` | Is main party waiting |
| `CampaignEventDispatcher` | `CampaignEventDispatcher` | Event dispatcher |
| `QuestManager` | `QuestManager` | Quest management |
| `IssueManager` | `IssueManager` | Issue management |
| `FactionManager` | `FactionManager` | Faction management |
| `Models` | `GameModels` | Game models container |
| `PlayerProgress` | `float` | Player progress value |
| `SpeedUpMultiplier` | `float` | Time speed multiplier |
| `MapDiagonal` | `static float` | Map diagonal distance |
| `CurrentTime` | `static float` | Current campaign time in hours |

## Key Methods

| Method | Description |
|--------|-------------|
| `GetCampaignBehavior()` | Get a campaign behavior of type T |
| `GetCampaignBehaviors()` | Get all campaign behaviors of type T |
| `GetSimplifiedTimeControlMode()` | Get simplified time control mode |
| `SetTimeSpeed(int speed)` | Set time speed (0=stop, 1=normal, 2=fast) |
| `LateAITick()` | Trigger late AI tick |
| `Tick()` | Campaign tick |
| `RealTick(float realDt)` | Real-time tick |
| `OnGameOver()` | Handle game over |
| `AddCustomManager()` | Add custom system manager |
| `GetCustomManager()` | Get custom system manager |

## Usage Example

```csharp
// Access current campaign
Campaign campaign = Campaign.Current;
if (campaign == null)
{
    return;
}

// Get player info
Hero player = campaign.MainHero;
MobileParty party = campaign.MainParty;

// Get all settlements
foreach (Settlement settlement in campaign.Settlements)
{
    if (settlement.IsTown)
    {
        Debug.Print("Town: " + settlement.Name);
    }
}

// Check time control
if (campaign.TimeControlMode == CampaignTimeControlMode.Stop)
{
    Debug.Print("Game is paused");
}

// Set time speed
campaign.SetTimeSpeed(2);  // Fast forward

// Get campaign behavior
var myBehavior = campaign.GetCampaignBehavior<MyCustomBehavior>();

// Get all parties of a type
foreach (MobileParty caravan in campaign.CaravanParties)
{
    Debug.Print("Caravan: " + caravan.Name);
}
```

## Time Control

| Mode | Description |
|------|-------------|
| `Stop` | Time is stopped |
| `UnstoppablePlay` | Always playing |
| `UnstoppableFastForward` | Always fast forwarding |
| `StoppablePlay` | Playing until blocked |
| `StoppableFastForward` | Fast forwarding until blocked |
| `FastForwardStop` | Transitioning to stop |

## Static Properties

| Property | Type | Description |
|----------|------|-------------|
| `MapDiagonal` | `float` | Distance between map corners |
| `MapDiagonalSquared` | `float` | Squared map diagonal |
| `MapMinimumPosition` | `Vec2` | Minimum map position |
| `MapMaximumPosition` | `Vec2` | Maximum map position |
| `CurrentTime` | `float` | Current time in hours |

## Party Types

You can access different party types through these properties:
- `CaravanParties` - Trade caravans
- `PatrolParties` - Patrol parties
- `VillagerParties` - Village parties
- `MilitiaParties` - Militia parties
- `GarrisonParties` - Garrison parties
- `LordParties` - Lord parties
- `BanditParties` - Bandit parties
- `CustomParties` - Custom created parties
