---
title: "Campaign"
description: "The global entry point for the Bannerlord campaign world: time management, object managers, quest/issue systems, behavior manager, and model collection."
---
# Campaign

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class Campaign : GameType`  
**Base:** `GameType`  
**File:** `TaleWorlds.CampaignSystem/Campaign.cs`

## Overview

`Campaign` is the “world object” of Bannerlord's **campaign map**. It does not control battle scenes directly; instead it holds the runtime state of the entire campaign sandbox:

- Collection entry points for all `Hero`, `Clan`, `Kingdom`, `Settlement`, and `MobileParty` instances.
- The behavior manager (`CampaignBehaviorManager`) that runs mod logic on daily/hourly ticks.
- Quest (`QuestManager`) and issue (`IssueManager`) systems.
- Relation (`CharacterRelationManager`) and faction (`FactionManager`) systems.
- The model collection (`Models`) that encapsulates battle, economy, relation, and other algorithms.

In short: almost every mod operation on the campaign map starts by grabbing `Campaign.Current`.

## Mental Model

Think of `Campaign` as the **campaign-world engine instance**:

- Do not `new Campaign()` yourself; the game creates and starts it through `CampaignGameStarter`.
- Access the single instance via `Campaign.Current`; if it is `null`, you are not on the campaign map (e.g., main menu or custom battle).
- It is mostly a **coordinator/container**: most “doing” logic lives in `CampaignBehaviorBase` subclasses or `GameModel` subclasses, not directly on `Campaign`.
- It exposes the current game time through `CampaignTime.Now` (on `CampaignTime`); time is the axis around which the campaign turns.

## How to Access Campaign

```csharp
// The typical entry point
Campaign campaign = Campaign.Current;
if (campaign == null) return; // not on the campaign map

// Reach managers through Campaign
Hero mainHero = campaign.MainParty?.LeaderHero; // or Hero.MainHero
MobileParty mainParty = campaign.MainParty;
Clan playerClan = Clan.PlayerClan;
CampaignTime now = CampaignTime.Now;
```

## Core Properties & Managers

| Property | Type | Description |
|----------|------|-------------|
| `Campaign.Current` | `Campaign` | Global singleton instance. |
| `MainParty` | `MobileParty` | Player party; same as `MobileParty.MainParty`. |
| `CampaignObjectManager` | `CampaignObjectManager` | Manages lifecycle and lookup of `MBObjectBase`-derived objects (heroes, clans, kingdoms, etc.). |
| `CampaignBehaviorManager` | `ICampaignBehaviorManager` | Manages all `CampaignBehaviorBase` instances; where mods register custom behaviors. |
| `QuestManager` | `QuestManager` | Tracks active quests. |
| `IssueManager` | `IssueManager` | Tracks available and ongoing issues. |
| `FactionManager` | `FactionManager` | Factions (kingdoms, clans, gangs) relations and states. |
| `CharacterRelationManager` | `CharacterRelationManager` | Personal relations between heroes. |
| `Models` | `GameModels` | Collection of algorithm models (combat, economy, influence, skill growth, etc.). |
| `SaveHandler` | `SaveHandler` | Save/load entry point. |
| `GameStarted` | `bool` | Whether the campaign has started. |
| `CurrentTickCount` | `int` | Current tick count. |

## Key Methods

### `public static Campaign Current { get; }`
Global access point. Most campaign mod logic begins with `if (Campaign.Current == null) return;`.

```csharp
public override void RegisterEvents()
{
    CampaignEvents.DailyTickPartyEvent.AddNonSerializedListener(this, OnDailyTickParty);
}

private void OnDailyTickParty(MobileParty party)
{
    if (Campaign.Current == null) return;
    // your daily logic
}
```

### `public GameModels Models`
Get the model collection, used to read or replace algorithms such as influence cost, party speed, or skill XP formulas.

```csharp
// Note: replacing models should usually be done in CampaignGameStarter's OnGameStart/OnGameLoaded.
Campaign.Current.Models.DiplomacyModel = new MyCustomDiplomacyModel();
```

### `public CampaignObjectManager CampaignObjectManager`
Access the object manager to find or iterate objects by id.

```csharp
Hero hero = Campaign.Current.CampaignObjectManager.Find<Hero>("lord_derthert");
Settlement settlement = Campaign.Current.Settlements.FirstOrDefault(s => s.IsTown);
```

### `public override void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)`
Campaign-side callback fired before a mission (battle, scene, etc.) starts. Useful for modifying party rosters or adding agents based on campaign state.

```csharp
public class MyCampaignBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnMissionStartedEvent.AddNonSerializedListener(this, OnMissionStarted);
    }

    private void OnMissionStarted(IMission mission)
    {
        // Mission has started; mission-related data is available here.
    }
}
```

## Typical Usage Examples

### Example 1: Safe Campaign access helper

```csharp
public static class CampaignHelper
{
    public static Campaign ActiveCampaign => Campaign.Current;

    public static bool IsCampaignActive => Campaign.Current != null && Campaign.Current.GameStarted;
}
```

### Example 2: Iterate all clans on daily tick and print their gold

```csharp
private void OnDailyTick()
{
    if (Campaign.Current == null) return;

    foreach (Clan clan in Clan.AllClans)
    {
        if (clan.IsEliminated) continue;
        InformationManager.DisplayMessage(new InformationMessage($"{clan.Name}: {clan.Gold} gold"));
    }
}
```

### Example 3: Replace a GameModel

```csharp
public class MyCampaignBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents() { }

    public override void SyncData(IDataStore dataStore) { }

    protected void OnGameStart(IGameStarter gameStarter)
    {
        if (gameStarter is CampaignGameStarter campaignStarter)
        {
            campaignStarter.AddModel(new MyPartySpeedModel());
        }
    }
}
```

> You can replace `Campaign.Current.Models` members at runtime via reflection, but prefer registering models through `CampaignGameStarter.AddModel`.

## Cross-Version Notes

- v1.3.0: `Campaign.Current` works the same; the `Models` collection contains fewer model classes.
- v1.4.5: `Campaign` was split into more sub-managers (e.g., new/separate `CampaignInformationManager`). For cross-version mods, prefer accessing through interface properties rather than reflecting private fields.

## See Also

- [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) — inject custom logic into the campaign lifecycle
- [CampaignGameStarter](../../campaign-ext/CampaignGameStarter/) — register models and behaviors at startup
- [CampaignEvents](../../campaign-ext/CampaignEvents/) — event bus
- [CampaignTime](../../campaign-ext/CampaignTime/) — campaign time
- [MobileParty](../MobileParty/) — player/AI parties
- [Hero](../Hero/) — hero characters
- [Settlement](../Settlement/) — towns, castles, villages
