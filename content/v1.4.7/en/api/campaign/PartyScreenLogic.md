---
title: "PartyScreenLogic"
description: "PartyScreenLogic — class in TaleWorlds.CampaignSystem.Party. 89 public members (0 static)."
---

<!-- v147-skeleton -->
# PartyScreenLogic

**Namespace:** `TaleWorlds.CampaignSystem.Party`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class PartyScreenLogic`  
**Source:** `TaleWorlds.CampaignSystem/Party/PartyScreenLogic.cs`

## Overview

`PartyScreenLogic` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PartyScreenLogic`.
- **Instance members** (71): `ActiveOtherPartySortType`, `ActiveMainPartySortType`, `IsOtherPartySortAscending`, `IsMainPartySortAscending`, `MemberTransferState`, `PrisonerTransferState`, ….
- **Data and constants** (17): `PartyGoldChange`, `PartyMoraleChange`, `PartyInfluenceChange`, `PartyHorseChange`, `Update`, `PartyScreenClosedEvent`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AccompanyingTransferState` | property | Instance entry point `PartyScreenLogic.TransferState` property. Read it for current state; a declared setter writes that state in place. |
| `ActiveMainPartySortType` | property | Instance entry point `PartyScreenLogic.TroopSortType` property. Read it for current state; a declared setter writes that state in place. |
| `ActiveOtherPartySortType` | property | Instance entry point `PartyScreenLogic.TroopSortType` property. Read it for current state; a declared setter writes that state in place. |
| `AddCommand` | method | Instance entry point. Takes 1 argument: `PartyScreenLogic.PartyCommand command`. Adds to the collection or relation this type owns. |
| `AfterResetDelegate` | method | Instance entry point. Takes 2 arguments: `PartyScreenLogic partyScreenLogic`, `bool fromCancel`. Returns `delegate void`. |
| `CurrentData` | property | Instance entry point `PartyScreenData` property. Read it for current state; a declared setter writes that state in place. |
| `DoneLogic` | method | Instance entry point. Takes 1 argument: `bool isForced`. Returns `bool`. |
| `DoneReasonString` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `DoNotApplyGoldTransactions` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `Game` | property | Instance entry point `Game` property. Read it for current state; a declared setter writes that state in place. |
| `GetActiveSortTypeForSide` | method | Instance entry point. Takes 1 argument: `PartyScreenLogic.PartyRosterSide side`. Returns `PartyScreenLogic.TroopSortType`. Read path: prefer it over reaching for the backing store. |
| `GetComparer` | method | Instance entry point. Takes 1 argument: `PartyScreenLogic.TroopSortType sortType`. Returns `PartyScreenLogic.TroopComparer`. Read path: prefer it over reaching for the backing store. |
| `GetCurrentQuestCurrentCount` | method | Instance entry point. Takes 2 arguments: `bool includePrisoners`, `bool includeMembers`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetCurrentQuestRequiredCount` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetExecutableReasonString` | method | Instance entry point. Takes 2 arguments: `CharacterObject character`, `bool isExecutable`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetIndexToInsertTroop` | method | Instance entry point. Takes 3 arguments: `PartyScreenLogic.PartyRosterSide side`, `PartyScreenLogic.TroopType type`, `TroopRosterElement troop`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetIsAscendingSortForSide` | method | Instance entry point. Takes 1 argument: `PartyScreenLogic.PartyRosterSide side`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetRecruitableReasonString` | method | Instance entry point. Takes 4 arguments: `CharacterObject character`, `bool isRecruitable`, `int troopCount`, `out bool showStackModifierText`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetRoster` | method | Instance entry point. Takes 2 arguments: `PartyScreenLogic.PartyRosterSide side`, `PartyScreenLogic.TroopType troopType`. Returns `TroopRoster`. Read path: prefer it over reaching for the backing store. |
| `GetTroopRecruitableAmount` | method | Instance entry point. Takes 1 argument: `CharacterObject troop`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `HaveRightSideGainedTroops` | method | Instance entry point. Takes no arguments. Returns `bool`. |
| `Header` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `Initialize` | method | Instance entry point. Takes 1 argument: `PartyScreenLogicInitializationData initializationData`. |
| `IsCancelActive` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |

- Constructed as `public PartyScreenLogic()`.

65 further public members follow the same patterns.
## Usage Example

```csharp
public class MyPartyScreenLogic : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyPartyScreenLogic());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- The declaration in `TaleWorlds.CampaignSystem/Party/PartyScreenLogic.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [TroopRoster](../TroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [IsTroopTransferableDelegate](../IsTroopTransferableDelegate/) — `TaleWorlds.CampaignSystem.Party`.
- [CanTalkToHeroDelegate](../CanTalkToHeroDelegate/) — `TaleWorlds.CampaignSystem.Party`.
- [ItemRoster](../ItemRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [FlattenedTroopRoster](../FlattenedTroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [FlattenedTroopRosterElement](../FlattenedTroopRosterElement/) — `TaleWorlds.CampaignSystem.Roster`.
- [AgeModel](../../campaign-ext/AgeModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.
- [PlayerEncounter](../PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [MBGUID](../../campaign-ext/MBGUID/) — `TaleWorlds.ObjectSystem`.

Section: [api/campaign/](../) — the other types in this bucket.
