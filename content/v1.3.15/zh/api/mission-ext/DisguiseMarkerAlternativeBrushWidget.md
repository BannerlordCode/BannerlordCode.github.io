---
title: "DisguiseMarkerAlternativeBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DisguiseMarkerAlternativeBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DisguiseMarkerAlternativeBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DisguiseMarkerAlternativeBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DisguiseMarkerAlternativeBrushWidget.cs`

## 概述

`DisguiseMarkerAlternativeBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `DisguiseMarkerAlternativeBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BackgroundGlowWidget` | `public Widget BackgroundGlowWidget { get; set; }` |
| `FrameWidget` | `public Widget FrameWidget { get; set; }` |
| `FillBarWidget` | `public Widget FillBarWidget { get; set; }` |
| `AlarmedHeight` | `public float AlarmedHeight { get; set; }` |
| `DefaultHeight` | `public float DefaultHeight { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `AlarmProgress` | `public int AlarmProgress { get; set; }` |
| `AlarmState` | `public string AlarmState { get; set; }` |
| `OffenseTypeIdentifier` | `public string OffenseTypeIdentifier { get; set; }` |

## 使用示例

```csharp
var widget = new DisguiseMarkerAlternativeBrushWidget(context);
```

## 参见

- [完整类目录](../catalog)