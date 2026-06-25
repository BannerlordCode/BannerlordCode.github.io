---
title: "GameMenuItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemVM.cs`

## 概述

`GameMenuItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OptionID` | `public string OptionID { get; }` |
| `GameMenuOption` | `public GameMenuOption GameMenuOption { get; }` |
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |
| `OptionLeaveType` | `public string OptionLeaveType { get; set; }` |
| `ItemType` | `public int ItemType { get; set; }` |
| `IsWaitActive` | `public bool IsWaitActive { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |
| `ItemHint` | `public HintViewModel ItemHint { get; set; }` |
| `QuestHint` | `public HintViewModel QuestHint { get; set; }` |
| `IssueHint` | `public HintViewModel IssueHint { get; set; }` |
| `GameMenuStringId` | `public string GameMenuStringId { get; set; }` |
| `Item` | `public string Item { get; set; }` |
| `BattleSize` | `public int BattleSize { get; set; }` |
| `IsNavalBattle` | `public bool IsNavalBattle { get; set; }` |
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey { get; set; }` |
| `OptionID` | `public string OptionID { get; }` |

## 主要方法

### InitializeWith
`public void InitializeWith(in GameMenuItemVM.GameMenuItemCreationData data)`

**用途 / Purpose:** 初始化 `with` 的状态、资源或绑定。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteAction
`public void ExecuteAction()`

**用途 / Purpose:** 执行 `action` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### UpdateWith
`public void UpdateWith(GameMenuItemVM newItem)`

**用途 / Purpose:** 更新 `with` 的状态或数据。

## 使用示例

```csharp
var value = new GameMenuItemVM();
value.InitializeWith(data);
```

## 参见

- [完整类目录](../catalog)