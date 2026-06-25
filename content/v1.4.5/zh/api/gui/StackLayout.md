---
title: "StackLayout"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StackLayout`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StackLayout

**Namespace:** TaleWorlds.GauntletUI.Layout
**Module:** TaleWorlds.GauntletUI
**Type:** `public class StackLayout : ILayout`
**Base:** `ILayout`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.Layout/StackLayout.cs`

## 概述

`StackLayout` 位于 `TaleWorlds.GauntletUI.Layout`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.Layout` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DefaultItemDescription` | `public ContainerItemDescription DefaultItemDescription { get; }` |
| `LayoutMethod` | `public LayoutMethod LayoutMethod { get; set; }` |

## 主要方法

### GetItemDescription
`public ContainerItemDescription GetItemDescription(Widget owner, Widget child, int childIndex)`

**用途 / Purpose:** 获取 `item description` 的当前值。

### MeasureChildren
`public Vector2 MeasureChildren(Widget widget, Vector2 measureSpec, SpriteData spriteData, float renderScale)`

**用途 / Purpose:** 处理 `measure children` 相关逻辑。

### OnLayout
`public void OnLayout(Widget widget, float left, float bottom, float right, float top)`

**用途 / Purpose:** 当 `layout` 事件触发时调用此方法。

### GetIndexForDrop
`public int GetIndexForDrop(Container widget, Vector2 draggedWidgetPosition)`

**用途 / Purpose:** 获取 `index for drop` 的当前值。

### GetDropGizmoPosition
`public Vector2 GetDropGizmoPosition(Container widget, Vector2 draggedWidgetPosition)`

**用途 / Purpose:** 获取 `drop gizmo position` 的当前值。

## 使用示例

```csharp
var value = new StackLayout();
value.GetItemDescription(owner, child, 0);
```

## 参见

- [完整类目录](../catalog)