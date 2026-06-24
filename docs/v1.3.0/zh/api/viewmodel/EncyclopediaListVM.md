<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaListVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaListVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaListVM : EncyclopediaPageVM`
**Base:** `EncyclopediaPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListVM.cs`

## 概述

`EncyclopediaListVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `EmptyListText` | `public string EmptyListText { get; set; }` |
| `LastSelectedItemId` | `public string LastSelectedItemId { get; set; }` |
| `Items` | `public override MBBindingList<EncyclopediaListItemVM> Items { get; set; }` |
| `SortController` | `public override EncyclopediaListSortControllerVM SortController { get; set; }` |
| `IsInitializationOver` | `public bool IsInitializationOver { get; set; }` |
| `IsFilterHighlightEnabled` | `public bool IsFilterHighlightEnabled { get; set; }` |
| `FilterGroups` | `public override MBBindingList<EncyclopediaFilterGroupVM> FilterGroups { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### GetName
`public override string GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**用途 / Purpose:** 获取 `navigation bar u r l` 的当前值。

### CopyFiltersFrom
`public void CopyFiltersFrom(Dictionary<EncyclopediaFilterItem, bool> filters)`

**用途 / Purpose:** 处理 `copy filters from` 相关逻辑。

### Refresh
`public override void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

## 使用示例

```csharp
var value = new EncyclopediaListVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)