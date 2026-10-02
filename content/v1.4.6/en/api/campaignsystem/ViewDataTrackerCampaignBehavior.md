---
title: "ViewDataTrackerCampaignBehavior"
description: "ViewDataTrackerCampaignBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase, IViewDataTracker; 59 exposed members (51 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignBehaviors/ViewDataTrackerCampaignBehavior.cs."
---
# ViewDataTrackerCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ViewDataTrackerCampaignBehavior : CampaignBehaviorBase, IViewDataTracker`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/ViewDataTrackerCampaignBehavior.cs`

## Overview

ViewDataTrackerCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/ViewDataTrackerCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, IViewDataTracker; the inheritance chain is ViewDataTrackerCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 59 public/protected members: 51 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ViewDataTrackerCampaignBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CampaignBehaviors) the module directory; inheritance chain ViewDataTrackerCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 51/59, properties 7/59), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/ViewDataTrackerCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ViewDataTrackerCampaignBehavior` | `public ViewDataTrackerCampaignBehavior()` | constructor |
| `IsPartyNotificationActive` | `public bool IsPartyNotificationActive` | property |
| `GetPartyNotificationText` | `public TextObject GetPartyNotificationText()` | method |
| `ClearPartyNotification` | `public void ClearPartyNotification()` | method |
| `UpdatePartyNotification` | `public void UpdatePartyNotification()` | method |
| `IsQuestNotificationActive` | `public bool IsQuestNotificationActive` | property |
| `IReadOnlyList` | `public IReadOnlyList<JournalLog>UnExaminedQuestLogs` | property |
| `GetQuestNotificationText` | `public TextObject GetQuestNotificationText()` | method |
| `OnQuestLogExamined` | `public void OnQuestLogExamined(JournalLog log)` | method |
| `List` | `public List<Army>UnExaminedArmies` | property |
| `NumOfKingdomArmyNotifications` | `public int NumOfKingdomArmyNotifications` | property |
| `OnArmyExamined` | `public void OnArmyExamined(Army army)` | method |
| `IsCharacterNotificationActive` | `public bool IsCharacterNotificationActive` | property |
| `ClearCharacterNotification` | `public void ClearCharacterNotification()` | method |
| `GetCharacterNotificationText` | `public TextObject GetCharacterNotificationText()` | method |
| `GetMapBarExtendedState` | `public bool GetMapBarExtendedState()` | method |
| `SetMapBarExtendedState` | `public void SetMapBarExtendedState(bool isExtended)` | method |
| `SetInventoryLocks` | `public void SetInventoryLocks(IEnumerable<string>locks)` | method |
| `IEnumerable` | `public IEnumerable<string>GetInventoryLocks()` | method |
| `InventorySetSortPreference` | `public void InventorySetSortPreference(int inventoryMode, int sortOption, int sortState)` | method |
| `int>InventoryGetSortPreference` | `public Tuple<int, int>InventoryGetSortPreference(int inventoryMode)` | method |
| `SetPartyTroopLocks` | `public void SetPartyTroopLocks(IEnumerable<string>locks)` | method |
| `SetPartyPrisonerLocks` | `public void SetPartyPrisonerLocks(IEnumerable<string>locks)` | method |
| `SetPartySortType` | `public void SetPartySortType(int sortType)` | method |
| `SetIsPartySortAscending` | `public void SetIsPartySortAscending(bool isAscending)` | method |
| `IEnumerable` | `public IEnumerable<string>GetPartyTroopLocks()` | method |
| `IEnumerable` | `public IEnumerable<string>GetPartyPrisonerLocks()` | method |
| `GetPartySortType` | `public int GetPartySortType()` | method |
| `GetIsPartySortAscending` | `public bool GetIsPartySortAscending()` | method |
| `AddEncyclopediaBookmarkToItem` | `public void AddEncyclopediaBookmarkToItem(Hero item)` | method |
| `AddEncyclopediaBookmarkToItem` | `public void AddEncyclopediaBookmarkToItem(ShipHull shipHull)` | method |
| `AddEncyclopediaBookmarkToItem` | `public void AddEncyclopediaBookmarkToItem(Clan clan)` | method |
| `AddEncyclopediaBookmarkToItem` | `public void AddEncyclopediaBookmarkToItem(Concept concept)` | method |
| `AddEncyclopediaBookmarkToItem` | `public void AddEncyclopediaBookmarkToItem(Kingdom kingdom)` | method |
| `AddEncyclopediaBookmarkToItem` | `public void AddEncyclopediaBookmarkToItem(Settlement settlement)` | method |
| `AddEncyclopediaBookmarkToItem` | `public void AddEncyclopediaBookmarkToItem(CharacterObject unit)` | method |
| `RemoveEncyclopediaBookmarkFromItem` | `public void RemoveEncyclopediaBookmarkFromItem(Hero hero)` | method |
| `RemoveEncyclopediaBookmarkFromItem` | `public void RemoveEncyclopediaBookmarkFromItem(ShipHull shipHull)` | method |
| `RemoveEncyclopediaBookmarkFromItem` | `public void RemoveEncyclopediaBookmarkFromItem(Clan clan)` | method |
| `RemoveEncyclopediaBookmarkFromItem` | `public void RemoveEncyclopediaBookmarkFromItem(Concept concept)` | method |
| `RemoveEncyclopediaBookmarkFromItem` | `public void RemoveEncyclopediaBookmarkFromItem(Kingdom kingdom)` | method |
| `RemoveEncyclopediaBookmarkFromItem` | `public void RemoveEncyclopediaBookmarkFromItem(Settlement settlement)` | method |
| `RemoveEncyclopediaBookmarkFromItem` | `public void RemoveEncyclopediaBookmarkFromItem(CharacterObject unit)` | method |
| `IsEncyclopediaBookmarked` | `public bool IsEncyclopediaBookmarked(Hero hero)` | method |
| `IsEncyclopediaBookmarked` | `public bool IsEncyclopediaBookmarked(ShipHull shipHull)` | method |
| `IsEncyclopediaBookmarked` | `public bool IsEncyclopediaBookmarked(Clan clan)` | method |
| `IsEncyclopediaBookmarked` | `public bool IsEncyclopediaBookmarked(Concept concept)` | method |
| `IsEncyclopediaBookmarked` | `public bool IsEncyclopediaBookmarked(Kingdom kingdom)` | method |
| `IsEncyclopediaBookmarked` | `public bool IsEncyclopediaBookmarked(Settlement settlement)` | method |
| `IsEncyclopediaBookmarked` | `public bool IsEncyclopediaBookmarked(CharacterObject unit)` | method |
| `SetQuestSelection` | `public void SetQuestSelection(QuestBase selection)` | method |
| `GetQuestSelection` | `public QuestBase GetQuestSelection()` | method |
| `MBReadOnlyList` | `public MBReadOnlyList<ItemRosterElement>GetPlunderItems()` | method |
| `IReadOnlyList` | `public IReadOnlyList<Figurehead>UnexaminedFigureheads` | property |
| `OnFigureheadExamined` | `public void OnFigureheadExamined(Figurehead figurehead)` | method |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SetQuestSortTypeSelection` | `public void SetQuestSortTypeSelection(int questSortTypeSelection)` | method |
| `GetQuestSortTypeSelection` | `public int GetQuestSortTypeSelection()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IViewDataTracker](../IViewDataTracker)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
