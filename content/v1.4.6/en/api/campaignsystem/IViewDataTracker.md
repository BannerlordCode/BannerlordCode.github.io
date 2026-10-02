---
title: "IViewDataTracker"
description: "IViewDataTracker: a public interface in TaleWorlds.CampaignSystem; 56 exposed members (49 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem/IViewDataTracker.cs."
---
# IViewDataTracker

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IViewDataTracker`
**File:** `TaleWorlds.CampaignSystem/IViewDataTracker.cs`

## Overview

IViewDataTracker lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/IViewDataTracker.cs. It is a public interface; the inheritance chain is IViewDataTracker. It exposes 56 public/protected members: 49 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IViewDataTracker is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain IViewDataTracker. The surface is method-led (methods 49/56, properties 7/56), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/IViewDataTracker.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetInventoryLocks` | `void SetInventoryLocks(IEnumerable<string>locks);` | method |
| `IEnumerable` | `IEnumerable<string>GetInventoryLocks();` | method |
| `GetMapBarExtendedState` | `bool GetMapBarExtendedState();` | method |
| `SetMapBarExtendedState` | `void SetMapBarExtendedState(bool value);` | method |
| `SetPartyTroopLocks` | `void SetPartyTroopLocks(IEnumerable<string>locks);` | method |
| `SetPartyPrisonerLocks` | `void SetPartyPrisonerLocks(IEnumerable<string>locks);` | method |
| `SetPartySortType` | `void SetPartySortType(int sortType);` | method |
| `SetIsPartySortAscending` | `void SetIsPartySortAscending(bool isAscending);` | method |
| `IEnumerable` | `IEnumerable<string>GetPartyTroopLocks();` | method |
| `IEnumerable` | `IEnumerable<string>GetPartyPrisonerLocks();` | method |
| `GetPartySortType` | `int GetPartySortType();` | method |
| `GetIsPartySortAscending` | `bool GetIsPartySortAscending();` | method |
| `AddEncyclopediaBookmarkToItem` | `void AddEncyclopediaBookmarkToItem(Concept concept);` | method |
| `AddEncyclopediaBookmarkToItem` | `void AddEncyclopediaBookmarkToItem(Kingdom kingdom);` | method |
| `AddEncyclopediaBookmarkToItem` | `void AddEncyclopediaBookmarkToItem(Settlement settlement);` | method |
| `AddEncyclopediaBookmarkToItem` | `void AddEncyclopediaBookmarkToItem(CharacterObject unit);` | method |
| `AddEncyclopediaBookmarkToItem` | `void AddEncyclopediaBookmarkToItem(Hero item);` | method |
| `AddEncyclopediaBookmarkToItem` | `void AddEncyclopediaBookmarkToItem(ShipHull shipHull);` | method |
| `AddEncyclopediaBookmarkToItem` | `void AddEncyclopediaBookmarkToItem(Clan clan);` | method |
| `RemoveEncyclopediaBookmarkFromItem` | `void RemoveEncyclopediaBookmarkFromItem(Hero hero);` | method |
| `RemoveEncyclopediaBookmarkFromItem` | `void RemoveEncyclopediaBookmarkFromItem(ShipHull shipHull);` | method |
| `RemoveEncyclopediaBookmarkFromItem` | `void RemoveEncyclopediaBookmarkFromItem(Clan clan);` | method |
| `RemoveEncyclopediaBookmarkFromItem` | `void RemoveEncyclopediaBookmarkFromItem(Concept concept);` | method |
| `RemoveEncyclopediaBookmarkFromItem` | `void RemoveEncyclopediaBookmarkFromItem(Kingdom kingdom);` | method |
| `RemoveEncyclopediaBookmarkFromItem` | `void RemoveEncyclopediaBookmarkFromItem(Settlement settlement);` | method |
| `RemoveEncyclopediaBookmarkFromItem` | `void RemoveEncyclopediaBookmarkFromItem(CharacterObject unit);` | method |
| `IsEncyclopediaBookmarked` | `bool IsEncyclopediaBookmarked(Hero hero);` | method |
| `IsEncyclopediaBookmarked` | `bool IsEncyclopediaBookmarked(ShipHull shipHull);` | method |
| `IsEncyclopediaBookmarked` | `bool IsEncyclopediaBookmarked(Clan clan);` | method |
| `IsEncyclopediaBookmarked` | `bool IsEncyclopediaBookmarked(Concept concept);` | method |
| `IsEncyclopediaBookmarked` | `bool IsEncyclopediaBookmarked(Kingdom kingdom);` | method |
| `IsEncyclopediaBookmarked` | `bool IsEncyclopediaBookmarked(Settlement settlement);` | method |
| `IsEncyclopediaBookmarked` | `bool IsEncyclopediaBookmarked(CharacterObject unit);` | method |
| `SetQuestSelection` | `void SetQuestSelection(QuestBase selection);` | method |
| `GetQuestSelection` | `QuestBase GetQuestSelection();` | method |
| `SetQuestSortTypeSelection` | `void SetQuestSortTypeSelection(int questSortTypeSelection);` | method |
| `GetQuestSortTypeSelection` | `int GetQuestSortTypeSelection();` | method |
| `InventorySetSortPreference` | `void InventorySetSortPreference(int inventoryMode, int sortOption, int sortState);` | method |
| `int>InventoryGetSortPreference` | `Tuple<int, int>InventoryGetSortPreference(int inventoryMode);` | method |
| `IsPartyNotificationActive` | `bool IsPartyNotificationActive` | property |
| `GetPartyNotificationText` | `TextObject GetPartyNotificationText();` | method |
| `ClearPartyNotification` | `void ClearPartyNotification();` | method |
| `UpdatePartyNotification` | `void UpdatePartyNotification();` | method |
| `IsQuestNotificationActive` | `bool IsQuestNotificationActive` | property |
| `IReadOnlyList` | `IReadOnlyList<JournalLog>UnExaminedQuestLogs` | property |
| `GetQuestNotificationText` | `TextObject GetQuestNotificationText();` | method |
| `OnQuestLogExamined` | `void OnQuestLogExamined(JournalLog log);` | method |
| `List` | `List<Army>UnExaminedArmies` | property |
| `NumOfKingdomArmyNotifications` | `int NumOfKingdomArmyNotifications` | property |
| `OnArmyExamined` | `void OnArmyExamined(Army army);` | method |
| `IsCharacterNotificationActive` | `bool IsCharacterNotificationActive` | property |
| `ClearCharacterNotification` | `void ClearCharacterNotification();` | method |
| `GetCharacterNotificationText` | `TextObject GetCharacterNotificationText();` | method |
| `MBReadOnlyList` | `MBReadOnlyList<ItemRosterElement>GetPlunderItems();` | method |
| `IReadOnlyList` | `IReadOnlyList<Figurehead>UnexaminedFigureheads` | property |
| `OnFigureheadExamined` | `void OnFigureheadExamined(Figurehead figurehead);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
