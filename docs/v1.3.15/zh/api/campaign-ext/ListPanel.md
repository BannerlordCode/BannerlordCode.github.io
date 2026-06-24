<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ListPanel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ListPanel

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ListPanel : Container`
**Base:** `Container`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ListPanel.cs`

## 概述

`ListPanel` 位于 `TaleWorlds.GauntletUI.BaseTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.BaseTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `StackLayout` | `public StackLayout StackLayout { get; }` |
| `AcceptDropPredicate` | `public override Predicate<Widget> AcceptDropPredicate { get; set; }` |
| `IsDragHovering` | `public override bool IsDragHovering { get; set; }` |
| `ResetSelectedOnLosingFocus` | `public bool ResetSelectedOnLosingFocus { get; set; }` |

## 主要方法

### GetIndexForDrop
`public override int GetIndexForDrop(Vector2 draggedWidgetPosition)`

**用途 / Purpose:** 获取 `index for drop` 的当前值。

### GetDropGizmoPosition
`public override Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)`

**用途 / Purpose:** 获取 `drop gizmo position` 的当前值。

### OnChildSelected
`public override void OnChildSelected(Widget widget)`

**用途 / Purpose:** 当 `child selected` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new ListPanel();
value.GetIndexForDrop(draggedWidgetPosition);
```

## 参见

- [完整类目录](../catalog)