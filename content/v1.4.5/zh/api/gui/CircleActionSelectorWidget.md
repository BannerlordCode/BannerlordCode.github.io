---
title: "CircleActionSelectorWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CircleActionSelectorWidget`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CircleActionSelectorWidget

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CircleActionSelectorWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/CircleActionSelectorWidget.cs`

## 概述

`CircleActionSelectorWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `CircleActionSelectorWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AllowInvalidSelection` | `public bool AllowInvalidSelection { get; set; }` |
| `ActivateOnlyWithController` | `public bool ActivateOnlyWithController { get; set; }` |
| `IsCircularInputEnabled` | `public bool IsCircularInputEnabled { get; set; }` |
| `IsCircularInputDisabled` | `public bool IsCircularInputDisabled { get; set; }` |
| `DistanceFromCenterModifier` | `public float DistanceFromCenterModifier { get; set; }` |
| `DirectionWidgetDistanceMultiplier` | `public float DirectionWidgetDistanceMultiplier { get; set; }` |
| `DirectionWidget` | `public Widget DirectionWidget { get; set; }` |

## 主要方法

### AnimateDistanceFromCenterTo
`public void AnimateDistanceFromCenterTo(float distanceFromCenter, float animationDuration)`

**用途 / Purpose:** 处理 `animate distance from center to` 相关逻辑。

### TrySetSelectedIndex
`public bool TrySetSelectedIndex(int index)`

**用途 / Purpose:** 尝试获取 `set selected index`，通常以 out 参数返回结果。

## 使用示例

```csharp
var widget = new CircleActionSelectorWidget(context);
```

## 参见

- [完整类目录](../catalog)