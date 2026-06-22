<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Container`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Container

**命名空间:** TaleWorlds.GauntletUI.BaseTypes
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Container` 是 `TaleWorlds.GauntletUI.BaseTypes` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `DefaultItemDescription` | `public ContainerItemDescription DefaultItemDescription { get; }` |
| `AcceptDropPredicate` | `public abstract Predicate<Widget> AcceptDropPredicate { get; set; }` |
| `IntValue` | `public int IntValue { get; set; }` |
| `IsDragHovering` | `public abstract bool IsDragHovering { get; set; }` |
| `DragHoverInsertionIndex` | `public int DragHoverInsertionIndex { get; set; }` |
| `ClearSelectedOnRemoval` | `public bool ClearSelectedOnRemoval { get; set; }` |


## 主要方法

### GetDropGizmoPosition

```csharp
public abstract Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)
```

### GetIndexForDrop

```csharp
public abstract int GetIndexForDrop(Vector2 draggedWidgetPosition)
```

### OnChildSelected

```csharp
public abstract void OnChildSelected(Widget widget)
```

### GetItemDescription

```csharp
public ContainerItemDescription GetItemDescription(string id, int index)
```

### AddItemDescription

```csharp
public void AddItemDescription(ContainerItemDescription itemDescription)
```

### FindParentPanel

```csharp
public ScrollablePanel FindParentPanel()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)