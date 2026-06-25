---
title: "SelectorVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SelectorVM`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SelectorVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Selector
**Module:** TaleWorlds.Core
**Type:** `public class SelectorVM<T> : ViewModel where T : SelectorItemVM`
**Base:** `ViewModel where T : SelectorItemVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Selector/SelectorVM.cs`

## 概述

`SelectorVM` 位于 `TaleWorlds.Core.ViewModelCollection.Selector`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection.Selector` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ItemList` | `public MBBindingList<T> ItemList { get; set; }` |
| `SelectedIndex` | `public int SelectedIndex { get; set; }` |
| `SelectedItem` | `public T SelectedItem { get; set; }` |
| `HasSingleItem` | `public bool HasSingleItem { get; set; }` |

## 主要方法

### Refresh
`public void Refresh(IEnumerable<string> list, int selectedIndex, Action<SelectorVM<T>> onChange)`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### Refresh
`public void Refresh(IEnumerable<TextObject> list, int selectedIndex, Action<SelectorVM<T>> onChange)`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### Refresh
`public void Refresh(IEnumerable<T> list, int selectedIndex, Action<SelectorVM<T>> onChange)`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### SetOnChangeAction
`public void SetOnChangeAction(Action<SelectorVM<T>> onChange)`

**用途 / Purpose:** 设置 `on change action` 的值或状态。

### AddItem
`public void AddItem(T item)`

**用途 / Purpose:** 向当前集合/状态中添加 `item`。

### ExecuteRandomize
`public void ExecuteRandomize()`

**用途 / Purpose:** 执行 `randomize` 操作或流程。

### ExecuteSelectNextItem
`public void ExecuteSelectNextItem()`

**用途 / Purpose:** 执行 `select next item` 操作或流程。

### ExecuteSelectPreviousItem
`public void ExecuteSelectPreviousItem()`

**用途 / Purpose:** 执行 `select previous item` 操作或流程。

### GetCurrentItem
`public T GetCurrentItem()`

**用途 / Purpose:** 获取 `current item` 的当前值。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

## 使用示例

```csharp
var value = new SelectorVM();
value.Refresh(list, 0, onChange);
```

## 参见

- [完整类目录](../catalog)