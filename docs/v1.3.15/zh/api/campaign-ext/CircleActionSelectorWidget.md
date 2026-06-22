<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CircleActionSelectorWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CircleActionSelectorWidget

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CircleActionSelectorWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleActionSelectorWidget.cs`

## 概述

`CircleActionSelectorWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `AllowInvalidSelection` | `public bool AllowInvalidSelection { get { return this._allowInvalidSelection; }` |
| `ActivateOnlyWithController` | `public bool ActivateOnlyWithController { get { return this._activateOnlyWithController; }` |
| `IsCircularInputEnabled` | `public bool IsCircularInputEnabled { get { return !this.IsCircularInputDisabled; }` |
| `IsCircularInputDisabled` | `public bool IsCircularInputDisabled { get { return this._isCircularInputDisabled; }` |
| `DistanceFromCenterModifier` | `public float DistanceFromCenterModifier { get { return this._distanceFromCenterModifier; }` |
| `DirectionWidgetDistanceMultiplier` | `public float DirectionWidgetDistanceMultiplier { get { return this._directionWidgetDistanceMultiplier; }` |
| `DirectionWidget` | `public Widget DirectionWidget { get { return this._directionWidget; }` |

## 主要方法

### AnimateDistanceFromCenterTo
```csharp
public void AnimateDistanceFromCenterTo(float distanceFromCenter, float animationDuration)
```

### TrySetSelectedIndex
```csharp
public bool TrySetSelectedIndex(int index)
```

## 使用示例

```csharp
// CircleActionSelectorWidget (Widget) 的典型用法
// 声明/访问一个 CircleActionSelectorWidget
var widget = root.GetChild("circleActionSelectorWidget");;
```

## 参见

- [完整类目录](../catalog)