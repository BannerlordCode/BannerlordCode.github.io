---
title: "ObjectiveMarkersParentWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ObjectiveMarkersParentWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ObjectiveMarkersParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ObjectiveMarkersParentWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker/ObjectiveMarkersParentWidget.cs`

## 概述

`ObjectiveMarkersParentWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ObjectiveMarkersParentWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinDistanceToFocus` | `public float MinDistanceToFocus { get; set; }` |
| `IsMarkersEnabled` | `public bool IsMarkersEnabled { get; set; }` |
| `TargetAlphaValue` | `public float TargetAlphaValue { get; set; }` |
| `MaxDistanceToCombineMarkers` | `public float MaxDistanceToCombineMarkers { get; set; }` |
| `MarkersContainer` | `public Widget MarkersContainer { get; set; }` |

## 主要方法

### Compare
`public int Compare(ObjectiveMarkerWidget x, ObjectiveMarkerWidget y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public int Compare(Widget x, Widget y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

## 使用示例

```csharp
var widget = new ObjectiveMarkersParentWidget(context);
```

## 参见

- [完整类目录](../catalog)