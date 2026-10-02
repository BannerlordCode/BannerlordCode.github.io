---
title: "ViewDataTrackerCampaignBehavior"
description: "ViewDataTrackerCampaignBehavior：TaleWorlds.CampaignSystem 的 public 类，继承 CampaignBehaviorBase、IViewDataTracker；公开成员 59 个（方法 51、属性 7、字段 0）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/ViewDataTrackerCampaignBehavior.cs。"
---
# ViewDataTrackerCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ViewDataTrackerCampaignBehavior : CampaignBehaviorBase, IViewDataTracker`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/ViewDataTrackerCampaignBehavior.cs`

## 概述

ViewDataTrackerCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/ViewDataTrackerCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase、IViewDataTracker，继承链为 ViewDataTrackerCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 59 个：51 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ViewDataTrackerCampaignBehavior 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 ViewDataTrackerCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 51/59，属性 7/59），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/ViewDataTrackerCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ViewDataTrackerCampaignBehavior` | `public ViewDataTrackerCampaignBehavior()` | 构造函数 |
| `IsPartyNotificationActive` | `public bool IsPartyNotificationActive` | 属性 |
| `GetPartyNotificationText` | `public TextObject GetPartyNotificationText()` | 方法 |
| `ClearPartyNotification` | `public void ClearPartyNotification()` | 方法 |
| `UpdatePartyNotification` | `public void UpdatePartyNotification()` | 方法 |
| `IsQuestNotificationActive` | `public bool IsQuestNotificationActive` | 属性 |
| `IReadOnlyList` | `public IReadOnlyList<JournalLog>UnExaminedQuestLogs` | 属性 |
| `GetQuestNotificationText` | `public TextObject GetQuestNotificationText()` | 方法 |
| `OnQuestLogExamined` | `public void OnQuestLogExamined(JournalLog log)` | 方法 |
| `List` | `public List<Army>UnExaminedArmies` | 属性 |
| `NumOfKingdomArmyNotifications` | `public int NumOfKingdomArmyNotifications` | 属性 |
| `OnArmyExamined` | `public void OnArmyExamined(Army army)` | 方法 |
| `IsCharacterNotificationActive` | `public bool IsCharacterNotificationActive` | 属性 |
| `ClearCharacterNotification` | `public void ClearCharacterNotification()` | 方法 |
| `GetCharacterNotificationText` | `public TextObject GetCharacterNotificationText()` | 方法 |
| `GetMapBarExtendedState` | `public bool GetMapBarExtendedState()` | 方法 |
| `SetMapBarExtendedState` | `public void SetMapBarExtendedState(bool isExtended)` | 方法 |
| `SetInventoryLocks` | `public void SetInventoryLocks(IEnumerable<string>locks)` | 方法 |
| `IEnumerable` | `public IEnumerable<string>GetInventoryLocks()` | 方法 |
| `InventorySetSortPreference` | `public void InventorySetSortPreference(int inventoryMode, int sortOption, int sortState)` | 方法 |
| `int>InventoryGetSortPreference` | `public Tuple<int, int>InventoryGetSortPreference(int inventoryMode)` | 方法 |
| `SetPartyTroopLocks` | `public void SetPartyTroopLocks(IEnumerable<string>locks)` | 方法 |
| `SetPartyPrisonerLocks` | `public void SetPartyPrisonerLocks(IEnumerable<string>locks)` | 方法 |
| `SetPartySortType` | `public void SetPartySortType(int sortType)` | 方法 |
| `SetIsPartySortAscending` | `public void SetIsPartySortAscending(bool isAscending)` | 方法 |
| `IEnumerable` | `public IEnumerable<string>GetPartyTroopLocks()` | 方法 |
| `IEnumerable` | `public IEnumerable<string>GetPartyPrisonerLocks()` | 方法 |
| `GetPartySortType` | `public int GetPartySortType()` | 方法 |
| `GetIsPartySortAscending` | `public bool GetIsPartySortAscending()` | 方法 |
| `AddEncyclopediaBookmarkToItem` | `public void AddEncyclopediaBookmarkToItem(Hero item)` | 方法 |
| `AddEncyclopediaBookmarkToItem` | `public void AddEncyclopediaBookmarkToItem(ShipHull shipHull)` | 方法 |
| `AddEncyclopediaBookmarkToItem` | `public void AddEncyclopediaBookmarkToItem(Clan clan)` | 方法 |
| `AddEncyclopediaBookmarkToItem` | `public void AddEncyclopediaBookmarkToItem(Concept concept)` | 方法 |
| `AddEncyclopediaBookmarkToItem` | `public void AddEncyclopediaBookmarkToItem(Kingdom kingdom)` | 方法 |
| `AddEncyclopediaBookmarkToItem` | `public void AddEncyclopediaBookmarkToItem(Settlement settlement)` | 方法 |
| `AddEncyclopediaBookmarkToItem` | `public void AddEncyclopediaBookmarkToItem(CharacterObject unit)` | 方法 |
| `RemoveEncyclopediaBookmarkFromItem` | `public void RemoveEncyclopediaBookmarkFromItem(Hero hero)` | 方法 |
| `RemoveEncyclopediaBookmarkFromItem` | `public void RemoveEncyclopediaBookmarkFromItem(ShipHull shipHull)` | 方法 |
| `RemoveEncyclopediaBookmarkFromItem` | `public void RemoveEncyclopediaBookmarkFromItem(Clan clan)` | 方法 |
| `RemoveEncyclopediaBookmarkFromItem` | `public void RemoveEncyclopediaBookmarkFromItem(Concept concept)` | 方法 |
| `RemoveEncyclopediaBookmarkFromItem` | `public void RemoveEncyclopediaBookmarkFromItem(Kingdom kingdom)` | 方法 |
| `RemoveEncyclopediaBookmarkFromItem` | `public void RemoveEncyclopediaBookmarkFromItem(Settlement settlement)` | 方法 |
| `RemoveEncyclopediaBookmarkFromItem` | `public void RemoveEncyclopediaBookmarkFromItem(CharacterObject unit)` | 方法 |
| `IsEncyclopediaBookmarked` | `public bool IsEncyclopediaBookmarked(Hero hero)` | 方法 |
| `IsEncyclopediaBookmarked` | `public bool IsEncyclopediaBookmarked(ShipHull shipHull)` | 方法 |
| `IsEncyclopediaBookmarked` | `public bool IsEncyclopediaBookmarked(Clan clan)` | 方法 |
| `IsEncyclopediaBookmarked` | `public bool IsEncyclopediaBookmarked(Concept concept)` | 方法 |
| `IsEncyclopediaBookmarked` | `public bool IsEncyclopediaBookmarked(Kingdom kingdom)` | 方法 |
| `IsEncyclopediaBookmarked` | `public bool IsEncyclopediaBookmarked(Settlement settlement)` | 方法 |
| `IsEncyclopediaBookmarked` | `public bool IsEncyclopediaBookmarked(CharacterObject unit)` | 方法 |
| `SetQuestSelection` | `public void SetQuestSelection(QuestBase selection)` | 方法 |
| `GetQuestSelection` | `public QuestBase GetQuestSelection()` | 方法 |
| `MBReadOnlyList` | `public MBReadOnlyList<ItemRosterElement>GetPlunderItems()` | 方法 |
| `IReadOnlyList` | `public IReadOnlyList<Figurehead>UnexaminedFigureheads` | 属性 |
| `OnFigureheadExamined` | `public void OnFigureheadExamined(Figurehead figurehead)` | 方法 |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SetQuestSortTypeSelection` | `public void SetQuestSortTypeSelection(int questSortTypeSelection)` | 方法 |
| `GetQuestSortTypeSelection` | `public int GetQuestSortTypeSelection()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IViewDataTracker](../IViewDataTracker)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
