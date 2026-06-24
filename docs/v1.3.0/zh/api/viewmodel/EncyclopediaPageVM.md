<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaPageVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaPageVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaPageVM.cs`

## 概述

`EncyclopediaPageVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Obj` | `public object Obj { get; }` |
| `IsLoadingOver` | `public bool IsLoadingOver { get; set; }` |
| `IsBookmarked` | `public bool IsBookmarked { get; set; }` |
| `BookmarkHint` | `public HintViewModel BookmarkHint { get; set; }` |
| `Items` | `public virtual MBBindingList<EncyclopediaListItemVM> Items { get; set; }` |
| `FilterGroups` | `public virtual MBBindingList<EncyclopediaFilterGroupVM> FilterGroups { get; set; }` |
| `SortController` | `public virtual EncyclopediaListSortControllerVM SortController { get; set; }` |

## 主要方法

### GetName
`public virtual string GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### GetNavigationBarURL
`public virtual string GetNavigationBarURL()`

**用途 / Purpose:** 获取 `navigation bar u r l` 的当前值。

### Refresh
`public virtual void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### OnTick
`public virtual void OnTick()`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### ExecuteSwitchBookmarkedState
`public virtual void ExecuteSwitchBookmarkedState()`

**用途 / Purpose:** 执行 `switch bookmarked state` 操作或流程。

## 使用示例

```csharp
var value = new EncyclopediaPageVM();
value.GetName();
```

## 参见

- [完整类目录](../catalog)