<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CounterTextBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CounterTextBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CounterTextBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CounterTextBrushWidget.cs`

## 概述

`CounterTextBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

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
```csharp
public void SetInitialValue(float value)
```

### ForceSetValue
```csharp
public void ForceSetValue(float value)
```

## 使用示例

```csharp
// CounterTextBrushWidget (Widget) 的典型用法
// 声明/访问一个 CounterTextBrushWidget
var widget = root.GetChild("counterTextBrushWidget");;
```

## 参见

- [完整类目录](../catalog)