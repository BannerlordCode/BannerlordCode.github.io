<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SelectorVM`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SelectorVM

**命名空间:** TaleWorlds.Core.ViewModelCollection.Selector
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`SelectorVM` 是 `TaleWorlds.Core.ViewModelCollection.Selector` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ItemList` | `public MBBindingList<T> ItemList { get; set; }` |
| `SelectedIndex` | `public int SelectedIndex { get; set; }` |
| `SelectedItem` | `public T SelectedItem { get; set; }` |
| `HasSingleItem` | `public bool HasSingleItem { get; set; }` |


## 主要方法

### Refresh

```csharp
public void Refresh(IEnumerable<string> list, int selectedIndex, Action<SelectorVM<T>> onChange)
```

### Refresh

```csharp
public void Refresh(IEnumerable<TextObject> list, int selectedIndex, Action<SelectorVM<T>> onChange)
```

### Refresh

```csharp
public void Refresh(IEnumerable<T> list, int selectedIndex, Action<SelectorVM<T>> onChange)
```

### SetOnChangeAction

```csharp
public void SetOnChangeAction(Action<SelectorVM<T>> onChange)
```

### AddItem

```csharp
public void AddItem(T item)
```

### ExecuteRandomize

```csharp
public void ExecuteRandomize()
```

### ExecuteSelectNextItem

```csharp
public void ExecuteSelectNextItem()
```

### ExecuteSelectPreviousItem

```csharp
public void ExecuteSelectPreviousItem()
```

### GetCurrentItem

```csharp
public T GetCurrentItem()
```

### RefreshValues

```csharp
public override void RefreshValues()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)