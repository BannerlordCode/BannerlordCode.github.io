<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CircleItemPlacerWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CircleItemPlacerWidget

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CircleItemPlacerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleItemPlacerWidget.cs`

## 概述

`CircleItemPlacerWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `DistanceFromCenterModifier` | `public float DistanceFromCenterModifier { get; set; }` |
| `DirectionWidget` | `public Widget DirectionWidget { get; set; }` |
| `DirectionWidgetDistanceMultiplier` | `public float DirectionWidgetDistanceMultiplier { get; set; }` |
| `ActivateOnlyWithController` | `public bool ActivateOnlyWithController { get; set; }` |

## 主要方法

### AnimateDistanceFromCenterTo
```csharp
public void AnimateDistanceFromCenterTo(float distanceFromCenter, float animationDuration)
```

## 使用示例

```csharp
// CircleItemPlacerWidget (Widget) 的典型用法
// 声明/访问一个 CircleItemPlacerWidget
var widget = root.GetChild("circleItemPlacerWidget");;
```

## 参见

- [完整类目录](../catalog)