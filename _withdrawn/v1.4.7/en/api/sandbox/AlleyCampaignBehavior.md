---
title: "AlleyCampaignBehavior"
description: "AlleyCampaignBehavior — class in SandBox.CampaignBehaviors. 15 public members (0 static)."
---

<!-- v147-skeleton -->
# AlleyCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`  
**Module:** `SandBox`  
**Type:** `public class AlleyCampaignBehavior : CampaignBehaviorBase, IAlleyCampaignBehavior, ICampaignBehavior`  
**Base:** `CampaignBehaviorBase, IAlleyCampaignBehavior, ICampaignBehavior`  
**Source:** `SandBox/CampaignBehaviors/AlleyCampaignBehavior.cs`

## Overview

`AlleyCampaignBehavior` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends CampaignBehaviorBase, IAlleyCampaignBehavior, ICampaignBehavior, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Instance members** (15): `RegisterEvents`, `SyncData`, `OnSessionLaunched`, `AddGameMenus`, `AddDialogs`, `GetIsPlayerAlleyUnderAttack`, ….
- **Extension points** (2): `RegisterEvents`, `SyncData`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RegisterEvents` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SyncData` | method (override) | Overrides the base member. Takes 1 argument: `IDataStore dataStore`. Called from the owner’s update loop — do not assume a frame boundary. |
| `AbandonAlleyFromClanMenu` | method | Instance entry point. Takes 1 argument: `Alley alley`. |
| `ChangeAlleyMember` | method | Instance entry point. Takes 2 arguments: `Alley alley`, `Hero newAlleyLead`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `GetAllAssignedClanMembersForOwnedAlleys` | method | Instance entry point. Takes no arguments. Returns `List<Hero>`. Read path: prefer it over reaching for the backing store. |
| `GetAssignedClanMemberOfAlley` | method | Instance entry point. Takes 1 argument: `Alley alley`. Returns `Hero`. Read path: prefer it over reaching for the backing store. |
| `GetIsPlayerAlleyUnderAttack` | method | Instance entry point. Takes 1 argument: `Alley alley`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetPlayerOwnedAlleyTroopCount` | method | Instance entry point. Takes 1 argument: `Alley alley`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetResponseTimeLeftForAttackInDays` | method | Instance entry point. Takes 1 argument: `Alley alley`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `IsHeroAlleyLeaderOfAnyPlayerAlley` | method | Instance entry point. Takes 1 argument: `Hero hero`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnPlayerDiedInMission` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPlayerRetreatedFromMission` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSessionLaunched` | method | Instance entry point. Takes 1 argument: `CampaignGameStarter campaignGameStarter`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AddDialogs` | method | Protected — for subclasses only. Takes 1 argument: `CampaignGameStarter campaignGameStarter`. Adds to the collection or relation this type owns. |
| `AddGameMenus` | method | Protected — for subclasses only. Takes 1 argument: `CampaignGameStarter campaignGameSystemStarter`. Adds to the collection or relation this type owns. |

## Usage Example

```csharp
public class MyAlleyCampaignBehavior : CampaignBehaviorBase, IAlleyCampaignBehavior, ICampaignBehavior
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyAlleyCampaignBehavior());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/CampaignBehaviors/AlleyCampaignBehavior.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Alley](../../campaign/Alley/) — `TaleWorlds.CampaignSystem.Settlements`.
- [TroopRoster](../../campaign/TroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [AlleyModel](../../campaign-ext/AlleyModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.
- [AlleyUnderAttackMapNotification](../../campaign/AlleyUnderAttackMapNotification/) — `TaleWorlds.CampaignSystem.MapNotificationTypes`.
- [FlattenedTroopRosterElement](../../campaign/FlattenedTroopRosterElement/) — `TaleWorlds.CampaignSystem.Roster`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [Location](../../campaign/Location/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [LocationComplex](../../campaign/LocationComplex/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [LocationCharacter](../../campaign/LocationCharacter/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [AgeModel](../../campaign-ext/AgeModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.

Section: [api/sandbox/](../) — the other types in this bucket.
