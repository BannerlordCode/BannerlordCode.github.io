<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ViewDataTrackerCampaignBehavior`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ViewDataTrackerCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ViewDataTrackerCampaignBehavior : CampaignBehaviorBase, IViewDataTracker`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/ViewDataTrackerCampaignBehavior.cs`

## 概述

`ViewDataTrackerCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsPartyNotificationActive` | `public bool IsPartyNotificationActive { get; }` |
| `UnExaminedQuestLogs` | `public IReadOnlyList<JournalLog> UnExaminedQuestLogs { get; }` |

## 主要方法

### GetPartyNotificationText
`public TextObject GetPartyNotificationText()`

**用途 / Purpose:** 获取 `party notification text` 的当前值。

### ClearPartyNotification
`public void ClearPartyNotification()`

**用途 / Purpose:** 处理 `clear party notification` 相关逻辑。

### UpdatePartyNotification
`public void UpdatePartyNotification()`

**用途 / Purpose:** 更新 `party notification` 的状态或数据。

### GetQuestNotificationText
`public TextObject GetQuestNotificationText()`

**用途 / Purpose:** 获取 `quest notification text` 的当前值。

### OnQuestLogExamined
`public void OnQuestLogExamined(JournalLog log)`

**用途 / Purpose:** 当 `quest log examined` 事件触发时调用此方法。

### OnArmyExamined
`public void OnArmyExamined(Army army)`

**用途 / Purpose:** 当 `army examined` 事件触发时调用此方法。

### ClearCharacterNotification
`public void ClearCharacterNotification()`

**用途 / Purpose:** 处理 `clear character notification` 相关逻辑。

### GetCharacterNotificationText
`public TextObject GetCharacterNotificationText()`

**用途 / Purpose:** 获取 `character notification text` 的当前值。

### GetMapBarExtendedState
`public bool GetMapBarExtendedState()`

**用途 / Purpose:** 获取 `map bar extended state` 的当前值。

### SetMapBarExtendedState
`public void SetMapBarExtendedState(bool isExtended)`

**用途 / Purpose:** 设置 `map bar extended state` 的值或状态。

### SetInventoryLocks
`public void SetInventoryLocks(IEnumerable<string> locks)`

**用途 / Purpose:** 设置 `inventory locks` 的值或状态。

### GetInventoryLocks
`public IEnumerable<string> GetInventoryLocks()`

**用途 / Purpose:** 获取 `inventory locks` 的当前值。

### InventorySetSortPreference
`public void InventorySetSortPreference(int inventoryMode, int sortOption, int sortState)`

**用途 / Purpose:** 处理 `inventory set sort preference` 相关逻辑。

### InventoryGetSortPreference
`public Tuple<int, int> InventoryGetSortPreference(int inventoryMode)`

**用途 / Purpose:** 处理 `inventory get sort preference` 相关逻辑。

### SetPartyTroopLocks
`public void SetPartyTroopLocks(IEnumerable<string> locks)`

**用途 / Purpose:** 设置 `party troop locks` 的值或状态。

### SetPartyPrisonerLocks
`public void SetPartyPrisonerLocks(IEnumerable<string> locks)`

**用途 / Purpose:** 设置 `party prisoner locks` 的值或状态。

### SetPartySortType
`public void SetPartySortType(int sortType)`

**用途 / Purpose:** 设置 `party sort type` 的值或状态。

### SetIsPartySortAscending
`public void SetIsPartySortAscending(bool isAscending)`

**用途 / Purpose:** 设置 `is party sort ascending` 的值或状态。

### GetPartyTroopLocks
`public IEnumerable<string> GetPartyTroopLocks()`

**用途 / Purpose:** 获取 `party troop locks` 的当前值。

### GetPartyPrisonerLocks
`public IEnumerable<string> GetPartyPrisonerLocks()`

**用途 / Purpose:** 获取 `party prisoner locks` 的当前值。

### GetPartySortType
`public int GetPartySortType()`

**用途 / Purpose:** 获取 `party sort type` 的当前值。

### GetIsPartySortAscending
`public bool GetIsPartySortAscending()`

**用途 / Purpose:** 获取 `is party sort ascending` 的当前值。

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Hero item)`

**用途 / Purpose:** 向当前集合/状态中添加 `encyclopedia bookmark to item`。

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(ShipHull shipHull)`

**用途 / Purpose:** 向当前集合/状态中添加 `encyclopedia bookmark to item`。

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Clan clan)`

**用途 / Purpose:** 向当前集合/状态中添加 `encyclopedia bookmark to item`。

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Concept concept)`

**用途 / Purpose:** 向当前集合/状态中添加 `encyclopedia bookmark to item`。

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Kingdom kingdom)`

**用途 / Purpose:** 向当前集合/状态中添加 `encyclopedia bookmark to item`。

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(Settlement settlement)`

**用途 / Purpose:** 向当前集合/状态中添加 `encyclopedia bookmark to item`。

### AddEncyclopediaBookmarkToItem
`public void AddEncyclopediaBookmarkToItem(CharacterObject unit)`

**用途 / Purpose:** 向当前集合/状态中添加 `encyclopedia bookmark to item`。

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Hero hero)`

**用途 / Purpose:** 从当前集合/状态中移除 `encyclopedia bookmark from item`。

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(ShipHull shipHull)`

**用途 / Purpose:** 从当前集合/状态中移除 `encyclopedia bookmark from item`。

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Clan clan)`

**用途 / Purpose:** 从当前集合/状态中移除 `encyclopedia bookmark from item`。

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Concept concept)`

**用途 / Purpose:** 从当前集合/状态中移除 `encyclopedia bookmark from item`。

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Kingdom kingdom)`

**用途 / Purpose:** 从当前集合/状态中移除 `encyclopedia bookmark from item`。

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(Settlement settlement)`

**用途 / Purpose:** 从当前集合/状态中移除 `encyclopedia bookmark from item`。

### RemoveEncyclopediaBookmarkFromItem
`public void RemoveEncyclopediaBookmarkFromItem(CharacterObject unit)`

**用途 / Purpose:** 从当前集合/状态中移除 `encyclopedia bookmark from item`。

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Hero hero)`

**用途 / Purpose:** 处理 `is encyclopedia bookmarked` 相关逻辑。

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(ShipHull shipHull)`

**用途 / Purpose:** 处理 `is encyclopedia bookmarked` 相关逻辑。

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Clan clan)`

**用途 / Purpose:** 处理 `is encyclopedia bookmarked` 相关逻辑。

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Concept concept)`

**用途 / Purpose:** 处理 `is encyclopedia bookmarked` 相关逻辑。

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Kingdom kingdom)`

**用途 / Purpose:** 处理 `is encyclopedia bookmarked` 相关逻辑。

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(Settlement settlement)`

**用途 / Purpose:** 处理 `is encyclopedia bookmarked` 相关逻辑。

### IsEncyclopediaBookmarked
`public bool IsEncyclopediaBookmarked(CharacterObject unit)`

**用途 / Purpose:** 处理 `is encyclopedia bookmarked` 相关逻辑。

### SetQuestSelection
`public void SetQuestSelection(QuestBase selection)`

**用途 / Purpose:** 设置 `quest selection` 的值或状态。

### GetQuestSelection
`public QuestBase GetQuestSelection()`

**用途 / Purpose:** 获取 `quest selection` 的当前值。

### GetPlunderItems
`public MBReadOnlyList<ItemRosterElement> GetPlunderItems()`

**用途 / Purpose:** 获取 `plunder items` 的当前值。

### OnFigureheadExamined
`public void OnFigureheadExamined(Figurehead figurehead)`

**用途 / Purpose:** 当 `figurehead examined` 事件触发时调用此方法。

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SetQuestSortTypeSelection
`public void SetQuestSortTypeSelection(int questSortTypeSelection)`

**用途 / Purpose:** 设置 `quest sort type selection` 的值或状态。

### GetQuestSortTypeSelection
`public int GetQuestSortTypeSelection()`

**用途 / Purpose:** 获取 `quest sort type selection` 的当前值。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

## 使用示例

```csharp
var value = new ViewDataTrackerCampaignBehavior();
value.GetPartyNotificationText();
```

## 参见

- [完整类目录](../catalog)