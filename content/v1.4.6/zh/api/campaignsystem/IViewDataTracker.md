---
title: "IViewDataTracker"
description: "IViewDataTracker：TaleWorlds.CampaignSystem 的 public 接口；公开成员 56 个（方法 49、属性 7、字段 0）。源文件 TaleWorlds.CampaignSystem/IViewDataTracker.cs。"
---
# IViewDataTracker

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IViewDataTracker`
**File:** `TaleWorlds.CampaignSystem/IViewDataTracker.cs`

## 概述

IViewDataTracker 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/IViewDataTracker.cs。它是一个 public 接口，继承链为 IViewDataTracker。public/protected 成员共 56 个：49 方法、7 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IViewDataTracker 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 IViewDataTracker。成员构成以方法为主（方法 49/56，属性 7/56），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/IViewDataTracker.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetInventoryLocks` | `void SetInventoryLocks(IEnumerable<string>locks);` | 方法 |
| `IEnumerable` | `IEnumerable<string>GetInventoryLocks();` | 方法 |
| `GetMapBarExtendedState` | `bool GetMapBarExtendedState();` | 方法 |
| `SetMapBarExtendedState` | `void SetMapBarExtendedState(bool value);` | 方法 |
| `SetPartyTroopLocks` | `void SetPartyTroopLocks(IEnumerable<string>locks);` | 方法 |
| `SetPartyPrisonerLocks` | `void SetPartyPrisonerLocks(IEnumerable<string>locks);` | 方法 |
| `SetPartySortType` | `void SetPartySortType(int sortType);` | 方法 |
| `SetIsPartySortAscending` | `void SetIsPartySortAscending(bool isAscending);` | 方法 |
| `IEnumerable` | `IEnumerable<string>GetPartyTroopLocks();` | 方法 |
| `IEnumerable` | `IEnumerable<string>GetPartyPrisonerLocks();` | 方法 |
| `GetPartySortType` | `int GetPartySortType();` | 方法 |
| `GetIsPartySortAscending` | `bool GetIsPartySortAscending();` | 方法 |
| `AddEncyclopediaBookmarkToItem` | `void AddEncyclopediaBookmarkToItem(Concept concept);` | 方法 |
| `AddEncyclopediaBookmarkToItem` | `void AddEncyclopediaBookmarkToItem(Kingdom kingdom);` | 方法 |
| `AddEncyclopediaBookmarkToItem` | `void AddEncyclopediaBookmarkToItem(Settlement settlement);` | 方法 |
| `AddEncyclopediaBookmarkToItem` | `void AddEncyclopediaBookmarkToItem(CharacterObject unit);` | 方法 |
| `AddEncyclopediaBookmarkToItem` | `void AddEncyclopediaBookmarkToItem(Hero item);` | 方法 |
| `AddEncyclopediaBookmarkToItem` | `void AddEncyclopediaBookmarkToItem(ShipHull shipHull);` | 方法 |
| `AddEncyclopediaBookmarkToItem` | `void AddEncyclopediaBookmarkToItem(Clan clan);` | 方法 |
| `RemoveEncyclopediaBookmarkFromItem` | `void RemoveEncyclopediaBookmarkFromItem(Hero hero);` | 方法 |
| `RemoveEncyclopediaBookmarkFromItem` | `void RemoveEncyclopediaBookmarkFromItem(ShipHull shipHull);` | 方法 |
| `RemoveEncyclopediaBookmarkFromItem` | `void RemoveEncyclopediaBookmarkFromItem(Clan clan);` | 方法 |
| `RemoveEncyclopediaBookmarkFromItem` | `void RemoveEncyclopediaBookmarkFromItem(Concept concept);` | 方法 |
| `RemoveEncyclopediaBookmarkFromItem` | `void RemoveEncyclopediaBookmarkFromItem(Kingdom kingdom);` | 方法 |
| `RemoveEncyclopediaBookmarkFromItem` | `void RemoveEncyclopediaBookmarkFromItem(Settlement settlement);` | 方法 |
| `RemoveEncyclopediaBookmarkFromItem` | `void RemoveEncyclopediaBookmarkFromItem(CharacterObject unit);` | 方法 |
| `IsEncyclopediaBookmarked` | `bool IsEncyclopediaBookmarked(Hero hero);` | 方法 |
| `IsEncyclopediaBookmarked` | `bool IsEncyclopediaBookmarked(ShipHull shipHull);` | 方法 |
| `IsEncyclopediaBookmarked` | `bool IsEncyclopediaBookmarked(Clan clan);` | 方法 |
| `IsEncyclopediaBookmarked` | `bool IsEncyclopediaBookmarked(Concept concept);` | 方法 |
| `IsEncyclopediaBookmarked` | `bool IsEncyclopediaBookmarked(Kingdom kingdom);` | 方法 |
| `IsEncyclopediaBookmarked` | `bool IsEncyclopediaBookmarked(Settlement settlement);` | 方法 |
| `IsEncyclopediaBookmarked` | `bool IsEncyclopediaBookmarked(CharacterObject unit);` | 方法 |
| `SetQuestSelection` | `void SetQuestSelection(QuestBase selection);` | 方法 |
| `GetQuestSelection` | `QuestBase GetQuestSelection();` | 方法 |
| `SetQuestSortTypeSelection` | `void SetQuestSortTypeSelection(int questSortTypeSelection);` | 方法 |
| `GetQuestSortTypeSelection` | `int GetQuestSortTypeSelection();` | 方法 |
| `InventorySetSortPreference` | `void InventorySetSortPreference(int inventoryMode, int sortOption, int sortState);` | 方法 |
| `int>InventoryGetSortPreference` | `Tuple<int, int>InventoryGetSortPreference(int inventoryMode);` | 方法 |
| `IsPartyNotificationActive` | `bool IsPartyNotificationActive` | 属性 |
| `GetPartyNotificationText` | `TextObject GetPartyNotificationText();` | 方法 |
| `ClearPartyNotification` | `void ClearPartyNotification();` | 方法 |
| `UpdatePartyNotification` | `void UpdatePartyNotification();` | 方法 |
| `IsQuestNotificationActive` | `bool IsQuestNotificationActive` | 属性 |
| `IReadOnlyList` | `IReadOnlyList<JournalLog>UnExaminedQuestLogs` | 属性 |
| `GetQuestNotificationText` | `TextObject GetQuestNotificationText();` | 方法 |
| `OnQuestLogExamined` | `void OnQuestLogExamined(JournalLog log);` | 方法 |
| `List` | `List<Army>UnExaminedArmies` | 属性 |
| `NumOfKingdomArmyNotifications` | `int NumOfKingdomArmyNotifications` | 属性 |
| `OnArmyExamined` | `void OnArmyExamined(Army army);` | 方法 |
| `IsCharacterNotificationActive` | `bool IsCharacterNotificationActive` | 属性 |
| `ClearCharacterNotification` | `void ClearCharacterNotification();` | 方法 |
| `GetCharacterNotificationText` | `TextObject GetCharacterNotificationText();` | 方法 |
| `MBReadOnlyList` | `MBReadOnlyList<ItemRosterElement>GetPlunderItems();` | 方法 |
| `IReadOnlyList` | `IReadOnlyList<Figurehead>UnexaminedFigureheads` | 属性 |
| `OnFigureheadExamined` | `void OnFigureheadExamined(Figurehead figurehead);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
