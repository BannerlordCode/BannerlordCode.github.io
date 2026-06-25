---
title: "ViewDataTrackerCampaignBehavior"
description: "Auto-generated class reference for ViewDataTrackerCampaignBehavior."
---
# ViewDataTrackerCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ViewDataTrackerCampaignBehavior : CampaignBehaviorBase, IViewDataTracker`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/ViewDataTrackerCampaignBehavior.cs`

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

**Purpose:** **Purpose:** Reads and returns the party notification text value held by the this instance.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetPartyNotificationText();
```

### ClearPartyNotification
`public void ClearPartyNotification()`

**Purpose:** **Purpose:** Removes all party notification from the this instance.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.ClearPartyNotification();
```

### UpdatePartyNotification
`public void UpdatePartyNotification()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of party notification.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.UpdatePartyNotification();
```

### GetQuestNotificationText
`public TextObject GetQuestNotificationText()`

**Purpose:** **Purpose:** Reads and returns the quest notification text value held by the this instance.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetQuestNotificationText();
```

### OnQuestLogExamined
`public void OnQuestLogExamined(JournalLog log)`

**Purpose:** **Purpose:** Invoked when the quest log examined event is raised.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.OnQuestLogExamined(log);
```

### OnArmyExamined
`public void OnArmyExamined(Army army)`

**Purpose:** **Purpose:** Invoked when the army examined event is raised.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.OnArmyExamined(army);
```

### ClearCharacterNotification
`public void ClearCharacterNotification()`

**Purpose:** **Purpose:** Removes all character notification from the this instance.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.ClearCharacterNotification();
```

### GetCharacterNotificationText
`public TextObject GetCharacterNotificationText()`

**Purpose:** **Purpose:** Reads and returns the character notification text value held by the this instance.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetCharacterNotificationText();
```

### GetMapBarExtendedState
`public bool GetMapBarExtendedState()`

**Purpose:** **Purpose:** Reads and returns the map bar extended state value held by the this instance.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetMapBarExtendedState();
```

### SetMapBarExtendedState
`public void SetMapBarExtendedState(bool isExtended)`

**Purpose:** **Purpose:** Assigns a new value to map bar extended state and updates the object's internal state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.SetMapBarExtendedState(false);
```

### SetInventoryLocks
`public void SetInventoryLocks(IEnumerable<string> locks)`

**Purpose:** **Purpose:** Assigns a new value to inventory locks and updates the object's internal state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.SetInventoryLocks(locks);
```

### GetInventoryLocks
`public IEnumerable<string> GetInventoryLocks()`

**Purpose:** **Purpose:** Reads and returns the inventory locks value held by the this instance.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetInventoryLocks();
```

### InventorySetSortPreference
`public void InventorySetSortPreference(int inventoryMode, int sortOption, int sortState)`

**Purpose:** **Purpose:** Executes the InventorySetSortPreference logic.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.InventorySetSortPreference(0, 0, 0);
```

### InventoryGetSortPreference
`public Tuple<int, int> InventoryGetSortPreference(int inventoryMode)`

**Purpose:** **Purpose:** Executes the InventoryGetSortPreference logic.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.InventoryGetSortPreference(0);
```

### SetPartyTroopLocks
`public void SetPartyTroopLocks(IEnumerable<string> locks)`

**Purpose:** **Purpose:** Assigns a new value to party troop locks and updates the object's internal state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.SetPartyTroopLocks(locks);
```

### SetPartyPrisonerLocks
`public void SetPartyPrisonerLocks(IEnumerable<string> locks)`

**Purpose:** **Purpose:** Assigns a new value to party prisoner locks and updates the object's internal state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.SetPartyPrisonerLocks(locks);
```

### SetPartySortType
`public void SetPartySortType(int sortType)`

**Purpose:** **Purpose:** Assigns a new value to party sort type and updates the object's internal state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.SetPartySortType(0);
```

### SetIsPartySortAscending
`public void SetIsPartySortAscending(bool isAscending)`

**Purpose:** **Purpose:** Assigns a new value to is party sort ascending and updates the object's internal state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.SetIsPartySortAscending(false);
```

### GetPartyTroopLocks
`public IEnumerable<string> GetPartyTroopLocks()`

**Purpose:** **Purpose:** Reads and returns the party troop locks value held by the this instance.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetPartyTroopLocks();
```

### GetPartyPrisonerLocks
`public IEnumerable<string> GetPartyPrisonerLocks()`

**Purpose:** **Purpose:** Reads and returns the party prisoner locks value held by the this instance.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetPartyPrisonerLocks();
```

### GetPartySortType
`public int GetPartySortType()`

**Purpose:** **Purpose:** Reads and returns the party sort type value held by the this instance.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetPartySortType();
```

### GetIsPartySortAscending
`public bool GetIsPartySortAscending()`

**Purpose:** **Purpose:** Reads and returns the is party sort ascending value held by the this instance.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetIsPartySortAscending();
```

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Hero item)`

**Purpose:** **Purpose:** Adds encyclopedia bookmark to item to the current collection or state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.AddEncyclopediaBookmarkToItem(item);
```

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(ShipHull shipHull)`

**Purpose:** **Purpose:** Adds encyclopedia bookmark to item to the current collection or state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.AddEncyclopediaBookmarkToItem(shipHull);
```

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Clan clan)`

**Purpose:** **Purpose:** Adds encyclopedia bookmark to item to the current collection or state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.AddEncyclopediaBookmarkToItem(clan);
```

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Concept concept)`

**Purpose:** **Purpose:** Adds encyclopedia bookmark to item to the current collection or state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.AddEncyclopediaBookmarkToItem(concept);
```

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Kingdom kingdom)`

**Purpose:** **Purpose:** Adds encyclopedia bookmark to item to the current collection or state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.AddEncyclopediaBookmarkToItem(kingdom);
```

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Settlement settlement)`

**Purpose:** **Purpose:** Adds encyclopedia bookmark to item to the current collection or state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.AddEncyclopediaBookmarkToItem(settlement);
```

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(CharacterObject unit)`

**Purpose:** **Purpose:** Adds encyclopedia bookmark to item to the current collection or state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.AddEncyclopediaBookmarkToItem(unit);
```

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Hero hero)`

**Purpose:** **Purpose:** Removes encyclopedia bookmark from item from the current collection or state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.RemoveEncyclopediaBookmarkFromItem(hero);
```

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(ShipHull shipHull)`

**Purpose:** **Purpose:** Removes encyclopedia bookmark from item from the current collection or state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.RemoveEncyclopediaBookmarkFromItem(shipHull);
```

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Clan clan)`

**Purpose:** **Purpose:** Removes encyclopedia bookmark from item from the current collection or state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.RemoveEncyclopediaBookmarkFromItem(clan);
```

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Concept concept)`

**Purpose:** **Purpose:** Removes encyclopedia bookmark from item from the current collection or state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.RemoveEncyclopediaBookmarkFromItem(concept);
```

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Kingdom kingdom)`

**Purpose:** **Purpose:** Removes encyclopedia bookmark from item from the current collection or state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.RemoveEncyclopediaBookmarkFromItem(kingdom);
```

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Settlement settlement)`

**Purpose:** **Purpose:** Removes encyclopedia bookmark from item from the current collection or state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.RemoveEncyclopediaBookmarkFromItem(settlement);
```

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(CharacterObject unit)`

**Purpose:** **Purpose:** Removes encyclopedia bookmark from item from the current collection or state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.RemoveEncyclopediaBookmarkFromItem(unit);
```

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Hero hero)`

**Purpose:** **Purpose:** Determines whether the this instance is in the encyclopedia bookmarked state or condition.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.IsEncyclopediaBookmarked(hero);
```

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(ShipHull shipHull)`

**Purpose:** **Purpose:** Determines whether the this instance is in the encyclopedia bookmarked state or condition.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.IsEncyclopediaBookmarked(shipHull);
```

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Clan clan)`

**Purpose:** **Purpose:** Determines whether the this instance is in the encyclopedia bookmarked state or condition.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.IsEncyclopediaBookmarked(clan);
```

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Concept concept)`

**Purpose:** **Purpose:** Determines whether the this instance is in the encyclopedia bookmarked state or condition.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.IsEncyclopediaBookmarked(concept);
```

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Kingdom kingdom)`

**Purpose:** **Purpose:** Determines whether the this instance is in the encyclopedia bookmarked state or condition.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.IsEncyclopediaBookmarked(kingdom);
```

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Settlement settlement)`

**Purpose:** **Purpose:** Determines whether the this instance is in the encyclopedia bookmarked state or condition.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.IsEncyclopediaBookmarked(settlement);
```

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(CharacterObject unit)`

**Purpose:** **Purpose:** Determines whether the this instance is in the encyclopedia bookmarked state or condition.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.IsEncyclopediaBookmarked(unit);
```

### SetQuestSelection
`public void SetQuestSelection(QuestBase selection)`

**Purpose:** **Purpose:** Assigns a new value to quest selection and updates the object's internal state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.SetQuestSelection(selection);
```

### GetQuestSelection
`public QuestBase GetQuestSelection()`

**Purpose:** **Purpose:** Reads and returns the quest selection value held by the this instance.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetQuestSelection();
```

### GetPlunderItems
`public MBReadOnlyList<ItemRosterElement> GetPlunderItems()`

**Purpose:** **Purpose:** Reads and returns the plunder items value held by the this instance.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetPlunderItems();
```

### OnFigureheadExamined
`public void OnFigureheadExamined(Figurehead figurehead)`

**Purpose:** **Purpose:** Invoked when the figurehead examined event is raised.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.OnFigureheadExamined(figurehead);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.RegisterEvents();
```

### SetQuestSortTypeSelection
`public void SetQuestSortTypeSelection(int questSortTypeSelection)`

**Purpose:** **Purpose:** Assigns a new value to quest sort type selection and updates the object's internal state.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.SetQuestSortTypeSelection(0);
```

### GetQuestSortTypeSelection
`public int GetQuestSortTypeSelection()`

**Purpose:** **Purpose:** Reads and returns the quest sort type selection value held by the this instance.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetQuestSortTypeSelection();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of ViewDataTrackerCampaignBehavior from the subsystem API first
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.GetPartyNotificationText();
```

## See Also

- [Area Index](../)