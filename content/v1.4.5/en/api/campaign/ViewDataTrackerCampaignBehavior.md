---
title: "ViewDataTrackerCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ViewDataTrackerCampaignBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ViewDataTrackerCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ViewDataTrackerCampaignBehavior : CampaignBehaviorBase, IViewDataTracker`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/ViewDataTrackerCampaignBehavior.cs`

## Overview

`ViewDataTrackerCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPartyNotificationActive` | `public bool IsPartyNotificationActive { get; }` |
| `UnExaminedQuestLogs` | `public IReadOnlyList<JournalLog> UnExaminedQuestLogs { get; }` |

## Key Methods

### GetPartyNotificationText
`public TextObject GetPartyNotificationText()`

**Purpose:** Gets the current value of `party notification text`.

### ClearPartyNotification
`public void ClearPartyNotification()`

**Purpose:** Handles logic related to `clear party notification`.

### UpdatePartyNotification
`public void UpdatePartyNotification()`

**Purpose:** Updates the state or data of `party notification`.

### GetQuestNotificationText
`public TextObject GetQuestNotificationText()`

**Purpose:** Gets the current value of `quest notification text`.

### OnQuestLogExamined
`public void OnQuestLogExamined(JournalLog log)`

**Purpose:** Called when the `quest log examined` event is raised.

### OnArmyExamined
`public void OnArmyExamined(Army army)`

**Purpose:** Called when the `army examined` event is raised.

### ClearCharacterNotification
`public void ClearCharacterNotification()`

**Purpose:** Handles logic related to `clear character notification`.

### GetCharacterNotificationText
`public TextObject GetCharacterNotificationText()`

**Purpose:** Gets the current value of `character notification text`.

### GetMapBarExtendedState
`public bool GetMapBarExtendedState()`

**Purpose:** Gets the current value of `map bar extended state`.

### SetMapBarExtendedState
`public void SetMapBarExtendedState(bool isExtended)`

**Purpose:** Sets the value or state of `map bar extended state`.

### SetInventoryLocks
`public void SetInventoryLocks(IEnumerable<string> locks)`

**Purpose:** Sets the value or state of `inventory locks`.

### GetInventoryLocks
`public IEnumerable<string> GetInventoryLocks()`

**Purpose:** Gets the current value of `inventory locks`.

### InventorySetSortPreference
`public void InventorySetSortPreference(int inventoryMode, int sortOption, int sortState)`

**Purpose:** Handles logic related to `inventory set sort preference`.

### InventoryGetSortPreference
`public Tuple<int, int> InventoryGetSortPreference(int inventoryMode)`

**Purpose:** Handles logic related to `inventory get sort preference`.

### SetPartyTroopLocks
`public void SetPartyTroopLocks(IEnumerable<string> locks)`

**Purpose:** Sets the value or state of `party troop locks`.

### SetPartyPrisonerLocks
`public void SetPartyPrisonerLocks(IEnumerable<string> locks)`

**Purpose:** Sets the value or state of `party prisoner locks`.

### SetPartySortType
`public void SetPartySortType(int sortType)`

**Purpose:** Sets the value or state of `party sort type`.

### SetIsPartySortAscending
`public void SetIsPartySortAscending(bool isAscending)`

**Purpose:** Sets the value or state of `is party sort ascending`.

### GetPartyTroopLocks
`public IEnumerable<string> GetPartyTroopLocks()`

**Purpose:** Gets the current value of `party troop locks`.

### GetPartyPrisonerLocks
`public IEnumerable<string> GetPartyPrisonerLocks()`

**Purpose:** Gets the current value of `party prisoner locks`.

### GetPartySortType
`public int GetPartySortType()`

**Purpose:** Gets the current value of `party sort type`.

### GetIsPartySortAscending
`public bool GetIsPartySortAscending()`

**Purpose:** Gets the current value of `is party sort ascending`.

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Hero item)`

**Purpose:** Adds `encyclopedia bookmark to item` to the current collection or state.

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(ShipHull shipHull)`

**Purpose:** Adds `encyclopedia bookmark to item` to the current collection or state.

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Clan clan)`

**Purpose:** Adds `encyclopedia bookmark to item` to the current collection or state.

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Concept concept)`

**Purpose:** Adds `encyclopedia bookmark to item` to the current collection or state.

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Kingdom kingdom)`

**Purpose:** Adds `encyclopedia bookmark to item` to the current collection or state.

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Settlement settlement)`

**Purpose:** Adds `encyclopedia bookmark to item` to the current collection or state.

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(CharacterObject unit)`

**Purpose:** Adds `encyclopedia bookmark to item` to the current collection or state.

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Hero hero)`

**Purpose:** Removes `encyclopedia bookmark from item` from the current collection or state.

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(ShipHull shipHull)`

**Purpose:** Removes `encyclopedia bookmark from item` from the current collection or state.

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Clan clan)`

**Purpose:** Removes `encyclopedia bookmark from item` from the current collection or state.

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Concept concept)`

**Purpose:** Removes `encyclopedia bookmark from item` from the current collection or state.

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Kingdom kingdom)`

**Purpose:** Removes `encyclopedia bookmark from item` from the current collection or state.

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Settlement settlement)`

**Purpose:** Removes `encyclopedia bookmark from item` from the current collection or state.

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(CharacterObject unit)`

**Purpose:** Removes `encyclopedia bookmark from item` from the current collection or state.

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Hero hero)`

**Purpose:** Handles logic related to `is encyclopedia bookmarked`.

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(ShipHull shipHull)`

**Purpose:** Handles logic related to `is encyclopedia bookmarked`.

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Clan clan)`

**Purpose:** Handles logic related to `is encyclopedia bookmarked`.

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Concept concept)`

**Purpose:** Handles logic related to `is encyclopedia bookmarked`.

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Kingdom kingdom)`

**Purpose:** Handles logic related to `is encyclopedia bookmarked`.

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Settlement settlement)`

**Purpose:** Handles logic related to `is encyclopedia bookmarked`.

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(CharacterObject unit)`

**Purpose:** Handles logic related to `is encyclopedia bookmarked`.

### SetQuestSelection
`public void SetQuestSelection(QuestBase selection)`

**Purpose:** Sets the value or state of `quest selection`.

### GetQuestSelection
`public QuestBase GetQuestSelection()`

**Purpose:** Gets the current value of `quest selection`.

### GetPlunderItems
`public MBReadOnlyList<ItemRosterElement> GetPlunderItems()`

**Purpose:** Gets the current value of `plunder items`.

### OnFigureheadExamined
`public void OnFigureheadExamined(Figurehead figurehead)`

**Purpose:** Called when the `figurehead examined` event is raised.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SetQuestSortTypeSelection
`public void SetQuestSortTypeSelection(int questSortTypeSelection)`

**Purpose:** Sets the value or state of `quest sort type selection`.

### GetQuestSortTypeSelection
`public int GetQuestSortTypeSelection()`

**Purpose:** Gets the current value of `quest sort type selection`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

## Usage Example

```csharp
var value = new ViewDataTrackerCampaignBehavior();
value.GetPartyNotificationText();
```

## See Also

- [Complete Class Catalog](../catalog)