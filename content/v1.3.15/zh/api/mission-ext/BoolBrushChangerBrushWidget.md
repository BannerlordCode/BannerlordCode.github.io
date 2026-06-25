---
title: "BoolBrushChangerBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BoolBrushChangerBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BoolBrushChangerBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoolBrushChangerBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BoolBrushChangerBrushWidget.cs`

## 概述

`BoolBrushChangerBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `BoolBrushChangerBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BooleanCheck` | `public bool BooleanCheck { get; set; }` |
| `TrueBrush` | `public string TrueBrush { get; set; }` |
| `FalseBrush` | `public string FalseBrush { get; set; }` |
| `TargetWidget` | `public BrushWidget TargetWidget { get; set; }` |
| `IncludeChildren` | `public bool IncludeChildren { get; set; }` |

## 使用示例

```csharp
var widget = new BoolBrushChangerBrushWidget(context);
```

## 参见

- [完整类目录](../catalog)