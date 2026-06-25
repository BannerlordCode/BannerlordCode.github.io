---
title: "ScrollablePanelFixedHeaderWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScrollablePanelFixedHeaderWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScrollablePanelFixedHeaderWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ScrollablePanelFixedHeaderWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollablePanelFixedHeaderWidget.cs`

## 概述

`ScrollablePanelFixedHeaderWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ScrollablePanelFixedHeaderWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `FixedHeader` | `public Widget FixedHeader { get; set; }` |
| `TopOffset` | `public float TopOffset { get; set; }` |
| `BottomOffset` | `public float BottomOffset { get; set; }` |
| `HeaderHeight` | `public float HeaderHeight { get; set; }` |
| `AdditionalTopOffset` | `public float AdditionalTopOffset { get; set; }` |
| `AdditionalBottomOffset` | `public float AdditionalBottomOffset { get; set; }` |
| `IsRelevant` | `public bool IsRelevant { get; set; }` |

## 使用示例

```csharp
var widget = new ScrollablePanelFixedHeaderWidget(context);
```

## 参见

- [完整类目录](../catalog)