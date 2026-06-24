<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingHistoryVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingHistoryVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingHistoryVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingHistoryVM.cs`

## 概述

`CraftingHistoryVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDoneAvailable` | `public bool IsDoneAvailable { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `HasItemsInHistory` | `public bool HasItemsInHistory { get; set; }` |
| `HistoryHint` | `public HintViewModel HistoryHint { get; set; }` |
| `HistoryDisabledHint` | `public HintViewModel HistoryDisabledHint { get; set; }` |
| `CraftingHistory` | `public MBBindingList<WeaponDesignSelectorVM> CraftingHistory { get; set; }` |
| `SelectedDesign` | `public WeaponDesignSelectorVM SelectedDesign { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `CancelKey` | `public InputKeyItemVM CancelKey { get; set; }` |
| `DoneKey` | `public InputKeyItemVM DoneKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### RefreshAvailability
`public void RefreshAvailability()`

**用途 / Purpose:** 刷新 `availability` 的显示或缓存。

### ExecuteOpen
`public void ExecuteOpen()`

**用途 / Purpose:** 执行 `open` 操作或流程。

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 `done` 操作或流程。

### SetDoneKey
`public void SetDoneKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `done key` 的值或状态。

### SetCancelKey
`public void SetCancelKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `cancel key` 的值或状态。

## 使用示例

```csharp
var value = new CraftingHistoryVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)