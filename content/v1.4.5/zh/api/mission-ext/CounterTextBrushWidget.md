---
title: "CounterTextBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CounterTextBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CounterTextBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CounterTextBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/CounterTextBrushWidget.cs`

## 概述

`CounterTextBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `CounterTextBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CounterTime` | `public float CounterTime { get; set; }` |
| `IntTarget` | `public int IntTarget { get; set; }` |
| `FloatTarget` | `public float FloatTarget { get; set; }` |
| `MinValue` | `public float MinValue { get; set; }` |
| `MaxValue` | `public float MaxValue { get; set; }` |
| `ShowSign` | `public bool ShowSign { get; set; }` |
| `Clamped` | `public bool Clamped { get; set; }` |
| `ShowFloatingPoint` | `public bool ShowFloatingPoint { get; set; }` |

## 主要方法

### SetInitialValue
`public void SetInitialValue(float value)`

**用途 / Purpose:** 设置 `initial value` 的值或状态。

### ForceSetValue
`public void ForceSetValue(float value)`

**用途 / Purpose:** 处理 `force set value` 相关逻辑。

## 使用示例

```csharp
var widget = new CounterTextBrushWidget(context);
```

## 参见

- [完整类目录](../catalog)