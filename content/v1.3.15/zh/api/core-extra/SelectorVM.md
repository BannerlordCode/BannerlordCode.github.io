---
title: "SelectorVM"
description: "SelectorVM 的自动生成类参考。"
---
# SelectorVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Selector
**Module:** TaleWorlds.Core
**Type:** `public class SelectorVM<T> : ViewModel where T : SelectorItemVM`
**Base:** `ViewModel where T : SelectorItemVM`
**File:** `TaleWorlds.Core.ViewModelCollection/Selector/SelectorVM.cs`

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

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SelectorVM 实例
SelectorVM selectorVM = ...;
selectorVM.Refresh(list, 0, onChange);
```

### Refresh
`public void Refresh(IEnumerable<TextObject> list, int selectedIndex, Action<SelectorVM<T>> onChange)`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SelectorVM 实例
SelectorVM selectorVM = ...;
selectorVM.Refresh(list, 0, onChange);
```

### Refresh
`public void Refresh(IEnumerable<T> list, int selectedIndex, Action<SelectorVM<T>> onChange)`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SelectorVM 实例
SelectorVM selectorVM = ...;
selectorVM.Refresh(list, 0, onChange);
```

### SetOnChangeAction
`public void SetOnChangeAction(Action<SelectorVM<T>> onChange)`

**用途 / Purpose:** 为 「on change action」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SelectorVM 实例
SelectorVM selectorVM = ...;
selectorVM.SetOnChangeAction(onChange);
```

### AddItem
`public void AddItem(T item)`

**用途 / Purpose:** 将 「item」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 SelectorVM 实例
SelectorVM selectorVM = ...;
selectorVM.AddItem(item);
```

### ExecuteRandomize
`public void ExecuteRandomize()`

**用途 / Purpose:** 执行 「randomize」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SelectorVM 实例
SelectorVM selectorVM = ...;
selectorVM.ExecuteRandomize();
```

### ExecuteSelectNextItem
`public void ExecuteSelectNextItem()`

**用途 / Purpose:** 执行 「select next item」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SelectorVM 实例
SelectorVM selectorVM = ...;
selectorVM.ExecuteSelectNextItem();
```

### ExecuteSelectPreviousItem
`public void ExecuteSelectPreviousItem()`

**用途 / Purpose:** 执行 「select previous item」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SelectorVM 实例
SelectorVM selectorVM = ...;
selectorVM.ExecuteSelectPreviousItem();
```

### GetCurrentItem
`public T GetCurrentItem()`

**用途 / Purpose:** 读取并返回当前对象中 「current item」 的结果。

```csharp
// 先通过子系统 API 拿到 SelectorVM 实例
SelectorVM selectorVM = ...;
var result = selectorVM.GetCurrentItem();
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SelectorVM 实例
SelectorVM selectorVM = ...;
selectorVM.RefreshValues();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SelectorVM selectorVM = ...;
selectorVM.Refresh(list, 0, onChange);
```

## 参见

- [本区域目录](../)