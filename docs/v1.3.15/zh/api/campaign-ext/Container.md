<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Container`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Container

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class Container : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/Container.cs`

## 概述

`Container` 位于 `TaleWorlds.GauntletUI.BaseTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.BaseTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public abstract Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)`

**用途 / Purpose:** 获取 `drop gizmo position` 的当前值。

### GetIndexForDrop
`public abstract int GetIndexForDrop(Vector2 draggedWidgetPosition)`

**用途 / Purpose:** 获取 `index for drop` 的当前值。

### OnChildSelected
`public abstract void OnChildSelected(Widget widget)`

**用途 / Purpose:** 当 `child selected` 事件触发时调用此方法。

### GetItemDescription
`public ContainerItemDescription GetItemDescription(string id, int index)`

**用途 / Purpose:** 获取 `item description` 的当前值。

### AddItemDescription
`public void AddItemDescription(ContainerItemDescription itemDescription)`

**用途 / Purpose:** 向当前集合/状态中添加 `item description`。

### FindParentPanel
`public ScrollablePanel FindParentPanel()`

**用途 / Purpose:** 处理 `find parent panel` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomContainer();
```

## 参见

- [完整类目录](../catalog)