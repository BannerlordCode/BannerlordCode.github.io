---
title: "CampaignBehaviorBase"
description: "The root class for campaign-module extensions: register events, save data, and inject daily-tick and quest logic."
---
# CampaignBehaviorBase

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public abstract class CampaignBehaviorBase : ICampaignBehavior`  
**Base:** —  
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviorBase.cs`

## Overview

`CampaignBehaviorBase` is one of the most important extension points for a Bannerlord campaign mod. Think of it as a **"long-lived service mounted on the campaign world"**: created at game start, alive for the whole campaign, until the campaign ends or is loaded.

By inheriting it and overriding its two abstract methods, you can:

- **React to campaign events:** daily tick, party movement, battle end, quest-state change, relation change, and so on.
- **Persist custom data:** write your mod data into the save through `SyncData`.
- **Create periodic logic:** subscribe to the various tick events of `CampaignEvents` inside `RegisterEvents`.

## Mental Model

Treat `CampaignBehaviorBase` as the **"background service of the campaign world"**:

- Do not confuse it with `MissionBehavior`: a `MissionBehavior` lives only once inside a battle/scene; a `CampaignBehaviorBase` persists in the campaign map.
- It is not created automatically; you must register it inside `CampaignGameStarter.AddBehavior(...)`.
- A mod usually only needs **one main Behavior**; a complex mod can split into several (e.g. economy behavior, event behavior, UI behavior).
- `SyncData` is the **only recommended entry point** for saving mod data across saves.

## Core Members

| Member | Description |
|------|------|
| `StringId` | The behavior's unique id; used by `GetCampaignBehavior<T>()` to look it up. |
| `RegisterEvents()` | Abstract method; subscribe to `CampaignEvents` here. |
| `SyncData(IDataStore dataStore)` | Abstract method; save/restore mod data here. |
| `static T GetCampaignBehavior<T>()` | Get the registered behavior instance by type. |

## How to Register a CampaignBehavior

Usually registered inside `CampaignGameStarter` (or `MbSubModuleBase`'s `OnGameStart`):

```csharp
public class MySubModule : MBSubModuleBase
{
    protected internal override void OnSubModuleLoad()
    {
        base.OnSubModuleLoad();
    }

    protected internal override void OnGameStart(Game game, IGameStarter starterObject)
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
Subscribe to campaign events. Common events include `DailyTickEvent`, `HourlyTickEvent`, `OnSettlementEntered`, `OnMissionEnded`, `MobilePartyDestroyed`, and so on.

```csharp
public override void RegisterEvents()
{
    CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, OnHeroKilled);
    CampaignEvents.SettlementEntered.AddNonSerializedListener(this, OnSettlementEntered);
}

private void OnDailyTick()
{
    // Runs once a day
}

private void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
{
    // Some hero died
}

private void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)
{
    // Entered a settlement
}
```

### `public abstract void SyncData(IDataStore dataStore)`
Serialize/deserialize mod data. `dataStore` is written on save and read on load.

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

> `SyncData` hands the fields directly to `IDataStore`; a behavior's fields do **not** need an extra `[SaveableField]` or `[SaveableProperty]` just because `SyncData` is used. Attribute/field marking is a separate save contract for the object graph and cannot replace a behavior's `SyncData`.

### `public static T GetCampaignBehavior<T>()`
Find the registered behavior by type at runtime. Good for calling a behavior's public methods from elsewhere.

```csharp
var myBehavior = CampaignBehaviorBase.GetCampaignBehavior<MyCampaignBehavior>();
myBehavior?.ForceEvent("invasion");
```

## Typical Usage Examples

### Example 1: give the player party a little XP every day

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

### Example 2: save/restore a custom data structure

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

- v1.3.0 / v1.3.15 / v1.4.5: the `CampaignBehaviorBase` abstract interface is very stable; `RegisterEvents` + `SyncData` is the most reliable cross-version extension.
- v1.4.5 split `CampaignGameStarter` into finer pieces, but the `AddBehavior(...)` method is unchanged.
- Cross-version compatibility advice: use conditional compilation or reflection to handle `CampaignEvents` signature differences across versions.

## Dependencies

- Upstream: [CampaignGameStarter](../CampaignGameStarter/) mounts the behavior during campaign startup; [Campaign](../../campaign/Campaign/) owns its lifecycle.
- Downstream: [CampaignEvents](../CampaignEvents) callback events; `SyncData(IDataStore)` connects to [SaveManager](../../save-system/SaveManager).
- World changes: the behavior is responsible for timing and coordination; entity-state changes are delegated to the matching `*Action.Apply`, do not change low-level fields directly inside a tick.

## See Also

- [Campaign](../../campaign/Campaign/) — the entry point to the campaign world
- [CampaignEvents](../CampaignEvents/) — the event bus
- [CampaignGameStarter](../CampaignGameStarter/) — register Behavior and Model
- [SaveManager](../../save-system/SaveManager/) — the underlying serialization of `SyncData`
- [QuestBase](../../campaign/QuestBase) — create quests
- [IssueBase](../../campaign/IssueBase/) — create issues/problems
