---
title: "ViewDataTrackerCampaignBehavior"
description: "Auto-generated class reference for ViewDataTrackerCampaignBehavior."
---
# ViewDataTrackerCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ViewDataTrackerCampaignBehavior : CampaignBehaviorBase,IViewDataTracker `
**Base:** CampaignBehaviorBase, IViewDataTracker
**Source:** TaleWorlds.CampaignSystem/CampaignBehaviors/ViewDataTrackerCampaignBehavior.cs

## Overview

Auto-generated stub for `ViewDataTrackerCampaignBehavior`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetPartyNotificationText
`public TextObject GetPartyNotificationText()`

### ClearPartyNotification
`public void ClearPartyNotification()`

### UpdatePartyNotification
`public void UpdatePartyNotification()`

### GetQuestNotificationText
`public TextObject GetQuestNotificationText()`

### OnQuestLogExamined
`public void OnQuestLogExamined(JournalLog log)`

### OnArmyExamined
`public void OnArmyExamined(Army army)`

### ClearCharacterNotification
`public void ClearCharacterNotification()`

### GetCharacterNotificationText
`public TextObject GetCharacterNotificationText()`

### GetLastOpenedKingdomTabIndex
`public int GetLastOpenedKingdomTabIndex()`

### SetLastOpenedKingdomTabIndex
`public void SetLastOpenedKingdomTabIndex(int tabIndex)`

### GetLastOpenedClanTabIndex
`public int GetLastOpenedClanTabIndex()`

### SetLastOpenedClanTabIndex
`public void SetLastOpenedClanTabIndex(int tabIndex)`

### GetMapBarExtendedState
`public bool GetMapBarExtendedState()`

### SetMapBarExtendedState
`public void SetMapBarExtendedState(bool isExtended)`

### SetInventoryLocks
`public void SetInventoryLocks(IEnumerable<string> locks)`

### GetInventoryLocks
`public IEnumerable<string> GetInventoryLocks()`

### InventorySetSortPreference
`public void InventorySetSortPreference(int inventoryMode,int sortOption,int sortState)`

### InventoryGetSortPreference
`public Tuple<int,int> InventoryGetSortPreference(int inventoryMode)`

### SetPartyTroopLocks
`public void SetPartyTroopLocks(IEnumerable<string> locks)`

### SetPartyPrisonerLocks
`public void SetPartyPrisonerLocks(IEnumerable<string> locks)`

### SetPartySortType
`public void SetPartySortType(int sortType)`

### SetIsPartySortAscending
`public void SetIsPartySortAscending(bool isAscending)`

### GetPartyTroopLocks
`public IEnumerable<string> GetPartyTroopLocks()`

### GetPartyPrisonerLocks
`public IEnumerable<string> GetPartyPrisonerLocks()`

### GetPartySortType
`public int GetPartySortType()`

### GetIsPartySortAscending
`public bool GetIsPartySortAscending()`

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Hero item)`

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Hero hero)`

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Hero hero)`

### SetQuestSelection
`public void SetQuestSelection(QuestBase selection)`

### GetQuestSelection
`public QuestBase GetQuestSelection()`

### GetPlunderItems
`public MBReadOnlyList<ItemRosterElement> GetPlunderItems()`

### OnFigureheadExamined
`public void OnFigureheadExamined(Figurehead figurehead)`

### RemoveCraftingPieceNewlyUnlockedList
`public void RemoveCraftingPieceNewlyUnlockedList(CraftingPiece craftingPiece)`

### IsCraftingPieceNewlyUnlocked
`public bool IsCraftingPieceNewlyUnlocked(CraftingPiece craftingPiece)`

### RegisterEvents
`public override void RegisterEvents()`

### SetQuestSortTypeSelection
`public void SetQuestSortTypeSelection(int questSortTypeSelection)`

### GetQuestSortTypeSelection
`public int GetQuestSortTypeSelection()`

### SyncData
`public override void SyncData(IDataStore dataStore)`

## See Also

- [Section index](../)
