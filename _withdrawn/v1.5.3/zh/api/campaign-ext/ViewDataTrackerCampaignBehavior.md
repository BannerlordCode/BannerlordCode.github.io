---
title: "ViewDataTrackerCampaignBehavior"
description: "ViewDataTrackerCampaignBehavior 的自动生成类参考。"
---
# ViewDataTrackerCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ViewDataTrackerCampaignBehavior : CampaignBehaviorBase,IViewDataTracker `
**Base:** CampaignBehaviorBase,IViewDataTracker
**Source:** TaleWorlds.CampaignSystem/CampaignBehaviors/ViewDataTrackerCampaignBehavior.cs

## 概述

`ViewDataTrackerCampaignBehavior` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/CampaignBehaviors/ViewDataTrackerCampaignBehavior.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetPartyNotificationText
`public TextObject GetPartyNotificationText() `

### ClearPartyNotification
`public void ClearPartyNotification() `

### UpdatePartyNotification
`public void UpdatePartyNotification() `

### GetQuestNotificationText
`public TextObject GetQuestNotificationText() `

### OnQuestLogExamined
`public void OnQuestLogExamined(JournalLog log) `

### OnArmyExamined
`public void OnArmyExamined(Army army) `

### ClearCharacterNotification
`public void ClearCharacterNotification() `

### GetCharacterNotificationText
`public TextObject GetCharacterNotificationText() `

### GetLastOpenedKingdomTabIndex
`public int GetLastOpenedKingdomTabIndex() `

### SetLastOpenedKingdomTabIndex
`public void SetLastOpenedKingdomTabIndex(int tabIndex) `

### GetLastOpenedClanTabIndex
`public int GetLastOpenedClanTabIndex() `

### SetLastOpenedClanTabIndex
`public void SetLastOpenedClanTabIndex(int tabIndex) `

### GetMapBarExtendedState
`public bool GetMapBarExtendedState() `

### SetMapBarExtendedState
`public void SetMapBarExtendedState(bool isExtended) `

### SetInventoryLocks
`public void SetInventoryLocks(IEnumerable<string> locks) `

### GetInventoryLocks
`public IEnumerable<string> GetInventoryLocks() `

### InventorySetSortPreference
`public void InventorySetSortPreference(int inventoryMode,int sortOption,int sortState) `

### InventoryGetSortPreference
`public Tuple<int,int> InventoryGetSortPreference(int inventoryMode) `

### SetPartyTroopLocks
`public void SetPartyTroopLocks(IEnumerable<string> locks) `

### SetPartyPrisonerLocks
`public void SetPartyPrisonerLocks(IEnumerable<string> locks) `

### SetPartySortType
`public void SetPartySortType(int sortType) `

### SetIsPartySortAscending
`public void SetIsPartySortAscending(bool isAscending) `

### GetPartyTroopLocks
`public IEnumerable<string> GetPartyTroopLocks() `

### GetPartyPrisonerLocks
`public IEnumerable<string> GetPartyPrisonerLocks() `

### GetPartySortType
`public int GetPartySortType() `

### GetIsPartySortAscending
`public bool GetIsPartySortAscending() `

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Hero item) `
`public void AddEncyclopediaBookmarkToItem(ShipHull shipHull) `
`public void AddEncyclopediaBookmarkToItem(Clan clan) `
`public void AddEncyclopediaBookmarkToItem(Concept concept) `
`public void AddEncyclopediaBookmarkToItem(Kingdom kingdom) `
`public void AddEncyclopediaBookmarkToItem(Settlement settlement) `
`public void AddEncyclopediaBookmarkToItem(CharacterObject unit) `

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Hero hero) `
`public void RemoveEncyclopediaBookmarkFromItem(ShipHull shipHull) `
`public void RemoveEncyclopediaBookmarkFromItem(Clan clan) `
`public void RemoveEncyclopediaBookmarkFromItem(Concept concept) `
`public void RemoveEncyclopediaBookmarkFromItem(Kingdom kingdom) `
`public void RemoveEncyclopediaBookmarkFromItem(Settlement settlement) `
`public void RemoveEncyclopediaBookmarkFromItem(CharacterObject unit) `

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Hero hero) `
`public bool IsEncyclopediaBookmarked(ShipHull shipHull) `
`public bool IsEncyclopediaBookmarked(Clan clan) `
`public bool IsEncyclopediaBookmarked(Concept concept) `
`public bool IsEncyclopediaBookmarked(Kingdom kingdom) `
`public bool IsEncyclopediaBookmarked(Settlement settlement) `
`public bool IsEncyclopediaBookmarked(CharacterObject unit) `

### SetQuestSelection
`public void SetQuestSelection(QuestBase selection) `

### GetQuestSelection
`public QuestBase GetQuestSelection() `

### GetPlunderItems
`public MBReadOnlyList<ItemRosterElement> GetPlunderItems() `

### OnFigureheadExamined
`public void OnFigureheadExamined(Figurehead figurehead) `

### RemoveCraftingPieceNewlyUnlockedList
`public void RemoveCraftingPieceNewlyUnlockedList(CraftingPiece craftingPiece) `

### IsCraftingPieceNewlyUnlocked
`public bool IsCraftingPieceNewlyUnlocked(CraftingPiece craftingPiece) `

### RegisterEvents
`public override void RegisterEvents() `

### SetQuestSortTypeSelection
`public void SetQuestSortTypeSelection(int questSortTypeSelection) `

### GetQuestSortTypeSelection
`public int GetQuestSortTypeSelection() `

### SyncData
`public override void SyncData(IDataStore dataStore) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
