---
title: "ViewDataTrackerCampaignBehavior"
description: "ViewDataTrackerCampaignBehavior 的自动生成类参考。"
---
# ViewDataTrackerCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ViewDataTrackerCampaignBehavior : CampaignBehaviorBase, IViewDataTracker`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/ViewDataTrackerCampaignBehavior.cs`

## 概述

`ViewDataTrackerCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsPartyNotificationActive` | `public bool IsPartyNotificationActive { get; }` |
| `IsQuestNotificationActive` | `public bool IsQuestNotificationActive { get; }` |
| `UnExaminedQuestLogs` | `public IReadOnlyList<JournalLog> UnExaminedQuestLogs { get; }` |
| `UnExaminedArmies` | `public List<Army> UnExaminedArmies { get; }` |
| `NumOfKingdomArmyNotifications` | `public int NumOfKingdomArmyNotifications { get; }` |
| `IsCharacterNotificationActive` | `public bool IsCharacterNotificationActive { get; }` |
| `UnexaminedFigureheads` | `public IReadOnlyList<Figurehead> UnexaminedFigureheads { get; }` |

## 主要方法

### GetPartyNotificationText
`public TextObject GetPartyNotificationText()`

**用途 / Purpose:** 读取并返回当前对象中 「party notification text」 的结果。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetPartyNotificationText();
```

### ClearPartyNotification
`public void ClearPartyNotification()`

**用途 / Purpose:** 清空当前对象中的「party notification」。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.ClearPartyNotification();
```

### UpdatePartyNotification
`public void UpdatePartyNotification()`

**用途 / Purpose:** 重新计算并更新 「party notification」 的最新表示。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.UpdatePartyNotification();
```

### GetQuestNotificationText
`public TextObject GetQuestNotificationText()`

**用途 / Purpose:** 读取并返回当前对象中 「quest notification text」 的结果。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetQuestNotificationText();
```

### OnQuestLogExamined
`public void OnQuestLogExamined(JournalLog log)`

**用途 / Purpose:** 在 「quest log examined」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.OnQuestLogExamined(log);
```

### OnArmyExamined
`public void OnArmyExamined(Army army)`

**用途 / Purpose:** 在 「army examined」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.OnArmyExamined(army);
```

### ClearCharacterNotification
`public void ClearCharacterNotification()`

**用途 / Purpose:** 清空当前对象中的「character notification」。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.ClearCharacterNotification();
```

### GetCharacterNotificationText
`public TextObject GetCharacterNotificationText()`

**用途 / Purpose:** 读取并返回当前对象中 「character notification text」 的结果。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetCharacterNotificationText();
```

### GetMapBarExtendedState
`public bool GetMapBarExtendedState()`

**用途 / Purpose:** 读取并返回当前对象中 「map bar extended state」 的结果。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetMapBarExtendedState();
```

### SetMapBarExtendedState
`public void SetMapBarExtendedState(bool isExtended)`

**用途 / Purpose:** 为 「map bar extended state」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.SetMapBarExtendedState(false);
```

### SetInventoryLocks
`public void SetInventoryLocks(IEnumerable<string> locks)`

**用途 / Purpose:** 为 「inventory locks」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.SetInventoryLocks(locks);
```

### GetInventoryLocks
`public IEnumerable<string> GetInventoryLocks()`

**用途 / Purpose:** 读取并返回当前对象中 「inventory locks」 的结果。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetInventoryLocks();
```

### InventorySetSortPreference
`public void InventorySetSortPreference(int inventoryMode, int sortOption, int sortState)`

**用途 / Purpose:** 处理与 「inventory set sort preference」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.InventorySetSortPreference(0, 0, 0);
```

### InventoryGetSortPreference
`public Tuple<int, int> InventoryGetSortPreference(int inventoryMode)`

**用途 / Purpose:** 处理与 「inventory get sort preference」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.InventoryGetSortPreference(0);
```

### SetPartyTroopLocks
`public void SetPartyTroopLocks(IEnumerable<string> locks)`

**用途 / Purpose:** 为 「party troop locks」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.SetPartyTroopLocks(locks);
```

### SetPartyPrisonerLocks
`public void SetPartyPrisonerLocks(IEnumerable<string> locks)`

**用途 / Purpose:** 为 「party prisoner locks」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.SetPartyPrisonerLocks(locks);
```

### SetPartySortType
`public void SetPartySortType(int sortType)`

**用途 / Purpose:** 为 「party sort type」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.SetPartySortType(0);
```

### SetIsPartySortAscending
`public void SetIsPartySortAscending(bool isAscending)`

**用途 / Purpose:** 为 「is party sort ascending」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.SetIsPartySortAscending(false);
```

### GetPartyTroopLocks
`public IEnumerable<string> GetPartyTroopLocks()`

**用途 / Purpose:** 读取并返回当前对象中 「party troop locks」 的结果。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetPartyTroopLocks();
```

### GetPartyPrisonerLocks
`public IEnumerable<string> GetPartyPrisonerLocks()`

**用途 / Purpose:** 读取并返回当前对象中 「party prisoner locks」 的结果。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetPartyPrisonerLocks();
```

### GetPartySortType
`public int GetPartySortType()`

**用途 / Purpose:** 读取并返回当前对象中 「party sort type」 的结果。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetPartySortType();
```

### GetIsPartySortAscending
`public bool GetIsPartySortAscending()`

**用途 / Purpose:** 读取并返回当前对象中 「is party sort ascending」 的结果。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetIsPartySortAscending();
```

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Hero item)`

**用途 / Purpose:** 将 「encyclopedia bookmark to item」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.AddEncyclopediaBookmarkToItem(item);
```

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Clan clan)`

**用途 / Purpose:** 将 「encyclopedia bookmark to item」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.AddEncyclopediaBookmarkToItem(clan);
```

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Concept concept)`

**用途 / Purpose:** 将 「encyclopedia bookmark to item」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.AddEncyclopediaBookmarkToItem(concept);
```

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Kingdom kingdom)`

**用途 / Purpose:** 将 「encyclopedia bookmark to item」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.AddEncyclopediaBookmarkToItem(kingdom);
```

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Settlement settlement)`

**用途 / Purpose:** 将 「encyclopedia bookmark to item」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.AddEncyclopediaBookmarkToItem(settlement);
```

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(CharacterObject unit)`

**用途 / Purpose:** 将 「encyclopedia bookmark to item」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.AddEncyclopediaBookmarkToItem(unit);
```

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Hero hero)`

**用途 / Purpose:** 从当前容器或状态中移除 「encyclopedia bookmark from item」。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.RemoveEncyclopediaBookmarkFromItem(hero);
```

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Clan clan)`

**用途 / Purpose:** 从当前容器或状态中移除 「encyclopedia bookmark from item」。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.RemoveEncyclopediaBookmarkFromItem(clan);
```

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Concept concept)`

**用途 / Purpose:** 从当前容器或状态中移除 「encyclopedia bookmark from item」。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.RemoveEncyclopediaBookmarkFromItem(concept);
```

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Kingdom kingdom)`

**用途 / Purpose:** 从当前容器或状态中移除 「encyclopedia bookmark from item」。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.RemoveEncyclopediaBookmarkFromItem(kingdom);
```

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Settlement settlement)`

**用途 / Purpose:** 从当前容器或状态中移除 「encyclopedia bookmark from item」。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.RemoveEncyclopediaBookmarkFromItem(settlement);
```

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(CharacterObject unit)`

**用途 / Purpose:** 从当前容器或状态中移除 「encyclopedia bookmark from item」。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.RemoveEncyclopediaBookmarkFromItem(unit);
```

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Hero hero)`

**用途 / Purpose:** 判断当前对象是否处于 「encyclopedia bookmarked」 状态或条件。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.IsEncyclopediaBookmarked(hero);
```

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Clan clan)`

**用途 / Purpose:** 判断当前对象是否处于 「encyclopedia bookmarked」 状态或条件。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.IsEncyclopediaBookmarked(clan);
```

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Concept concept)`

**用途 / Purpose:** 判断当前对象是否处于 「encyclopedia bookmarked」 状态或条件。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.IsEncyclopediaBookmarked(concept);
```

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Kingdom kingdom)`

**用途 / Purpose:** 判断当前对象是否处于 「encyclopedia bookmarked」 状态或条件。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.IsEncyclopediaBookmarked(kingdom);
```

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Settlement settlement)`

**用途 / Purpose:** 判断当前对象是否处于 「encyclopedia bookmarked」 状态或条件。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.IsEncyclopediaBookmarked(settlement);
```

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(CharacterObject unit)`

**用途 / Purpose:** 判断当前对象是否处于 「encyclopedia bookmarked」 状态或条件。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.IsEncyclopediaBookmarked(unit);
```

### SetQuestSelection
`public void SetQuestSelection(QuestBase selection)`

**用途 / Purpose:** 为 「quest selection」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.SetQuestSelection(selection);
```

### GetQuestSelection
`public QuestBase GetQuestSelection()`

**用途 / Purpose:** 读取并返回当前对象中 「quest selection」 的结果。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetQuestSelection();
```

### GetPlunderItems
`public MBReadOnlyList<ItemRosterElement> GetPlunderItems()`

**用途 / Purpose:** 读取并返回当前对象中 「plunder items」 的结果。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetPlunderItems();
```

### OnFigureheadExamined
`public void OnFigureheadExamined(Figurehead figurehead)`

**用途 / Purpose:** 在 「figurehead examined」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.OnFigureheadExamined(figurehead);
```

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.RegisterEvents();
```

### SetQuestSortTypeSelection
`public void SetQuestSortTypeSelection(int questSortTypeSelection)`

**用途 / Purpose:** 为 「quest sort type selection」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.SetQuestSortTypeSelection(0);
```

### GetQuestSortTypeSelection
`public int GetQuestSortTypeSelection()`

**用途 / Purpose:** 读取并返回当前对象中 「quest sort type selection」 的结果。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
var result = viewDataTrackerCampaignBehavior.GetQuestSortTypeSelection();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 ViewDataTrackerCampaignBehavior 实例
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.SyncData(dataStore);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ViewDataTrackerCampaignBehavior viewDataTrackerCampaignBehavior = ...;
viewDataTrackerCampaignBehavior.GetPartyNotificationText();
```

## 参见

- [本区域目录](../)