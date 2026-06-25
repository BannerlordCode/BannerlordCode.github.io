---
title: "CampaignBehaviorBase"
description: "The root class for campaign module extensions: register events, save data, and inject daily ticks and quest logic."
---
# CampaignBehaviorBase

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public abstract class CampaignBehaviorBase : ICampaignBehavior`  
**Base:** —  
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviorBase.cs`

## Overview

`CampaignBehaviorBase` is one of the most important extension points for Bannerlord campaign mods. Think of it as a **long-running service attached to the campaign world**: it is created at game start, stays alive while the campaign runs, and ends when the campaign ends or a save is loaded.

By inheriting from it and overriding its two abstract methods, you can:

- **Respond to campaign events**: daily ticks, party movement, battle end, quest state changes, relation changes, etc.
- **Persist custom data**: use `SyncData` to write mod data into save games.
- **Create periodic logic**: subscribe to the many tick events on `CampaignEvents` inside `RegisterEvents`.

## Mental Model

Think of `CampaignBehaviorBase` as a **background service in the campaign world**:

- Do not confuse it with `MissionBehavior`: `MissionBehavior` lives only during one battle/scene; `CampaignBehaviorBase` exists for the whole campaign map session.
- It is not created automatically; register it with `CampaignGameStarter.AddBehavior(...)`.
- One mod usually needs **one main behavior**; complex mods may split into several (economy behavior, event behavior, UI behavior).
- `SyncData` is the **recommended single hook** for cross-save mod data persistence.

## Core Members

| Member | Description |
|--------|-------------|
| `StringId` | Unique identifier for the behavior; used by `GetCampaignBehavior<T>()`. |
| `RegisterEvents()` | Abstract method; subscribe to `CampaignEvents` here. |
| `SyncData(IDataStore dataStore)` | Abstract method; save/restore mod data here. |
| `static T GetCampaignBehavior<T>()` | Find a registered behavior by type at runtime. |

## How to Register a CampaignBehavior

Usually register inside `CampaignGameStarter` (or `MbSubModuleBase.OnGameStart`):

```csharp
public class MySubModule : MBSubModuleBase
{
    protected override void OnSubModuleLoad()
    {
        base.OnSubModuleLoad();
    }

    protected override void OnGameStart(Game game, IGameStarter starterObject)
    {
        base.OnGameStart(game, starterObject);

        if (starterObject is CampaignGameStarter campaignStarter)
        {
            campaignStarter.AddBehavior(new MyCampaignBehavior());
        }
    }
}
```

## Key Methods

### `public abstract void RegisterEvents()`
Subscribe to campaign events. Common events include `DailyTickEvent`, `HourlyTickEvent`, `OnSettlementEntered`, `OnMissionEnded`, `MobilePartyDestroyed`, etc.

```csharp
public override void RegisterEvents()
{
    CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, OnHeroKilled);
    CampaignEvents.OnSettlementEnteredEvent.AddNonSerializedListener(this, OnSettlementEntered);
}

private void OnDailyTick()
{
    // runs once per day
}

private void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, MapEvent mapEvent)
{
    // a hero died
}

private void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)
{
    // entered a settlement
}
```

### `public abstract void SyncData(IDataStore dataStore)`
Serialize/deserialize mod data. The data store writes on save and reads on load.

```csharp
[SaveableField(0)]
private int _totalKills;

[SaveableField(1)]
private List<string> _unlockedBosses = new List<string>();

public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData("MyModTotalKills", ref _totalKills);
    dataStore.SyncData("MyModUnlockedBosses", ref _unlockedBosses);
}
```

> Fields passed to `SyncData` must be marked with `[SaveableField]` or `[SaveableProperty]` so the save system recognizes them.

### `public static T GetCampaignBehavior<T>()`
Find a registered behavior by type at runtime. Useful for calling public methods on the behavior from elsewhere.

```csharp
var myBehavior = CampaignBehaviorBase.GetCampaignBehavior<MyCampaignBehavior>();
myBehavior?.ForceEvent("invasion");
```

## Typical Usage Examples

### Example 1: Give the player party a small amount of XP every day

```csharp
public class DailyXpBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickPartyEvent.AddNonSerializedListener(this, OnDailyTickParty);
    }

    private void OnDailyTickParty(MobileParty party)
    {
        if (party == MobileParty.MainParty)
        {
            foreach (TroopRosterElement element in party.MemberRoster.GetTroopRoster())
            {
                if (element.Character.IsHero)
                {
                    element.Character.HeroObject.AddSkillXp(DefaultSkills.Leadership, 10f);
                }
            }
        }
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

### Example 2: Save and restore custom data structures

```csharp
public class MyCampaignData
{
    [SaveableField(0)]
    public int DaysSinceInvasion;

    [SaveableField(1)]
    public bool InvasionActive;
}

public class InvasionBehavior : CampaignBehaviorBase
{
    [SaveableField(0)]
    private MyCampaignData _data = new MyCampaignData();

    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("MyInvasionData", ref _data);
    }

    private void OnDailyTick()
    {
        _data.DaysSinceInvasion++;
        if (_data.DaysSinceInvasion > 30 && !_data.InvasionActive)
        {
            StartInvasion();
            _data.InvasionActive = true;
        }
    }
}
```

## Cross-Version Notes

- v1.3.0 / v1.3.15 / v1.4.5: The `CampaignBehaviorBase` abstract interface is very stable; `RegisterEvents` + `SyncData` is the most reliable cross-version extension pattern.
- v1.4.5: `CampaignGameStarter` was split further, but `AddBehavior(...)` remains unchanged.
- Cross-version tip: use conditional compilation or reflection to handle signature differences in `CampaignEvents` between versions.

## See Also

- [Campaign](../../campaign/Campaign/) — entry point to the campaign world
- [CampaignEvents](../CampaignEvents/) — event bus
- [CampaignGameStarter](../CampaignGameStarter/) — register behaviors and models
- [SaveManager](../../save-system/SaveManager/) — underlying serialization for `SyncData`
- [QuestBase](../QuestBase/) — create quests
- [IssueBase](../../campaign/IssueBase/) — create issues/contracts
