<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ObjectiveMarkersParentWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ObjectiveMarkersParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ObjectiveMarkersParentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkersParentWidget.cs`

## 概述

`ObjectiveMarkersParentWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

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
```csharp
public int Compare(ObjectiveMarkerWidget x, ObjectiveMarkerWidget y)
```

### Compare
```csharp
public int Compare(Widget x, Widget y)
```

## 使用示例

```csharp
// ObjectiveMarkersParentWidget (Widget) 的典型用法
// 声明/访问一个 ObjectiveMarkersParentWidget
var widget = root.GetChild("objectiveMarkersParentWidget");;
```

## 参见

- [完整类目录](../catalog)