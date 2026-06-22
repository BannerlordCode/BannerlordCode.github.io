<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CircularAutoScrollablePanelWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CircularAutoScrollablePanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CircularAutoScrollablePanelWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircularAutoScrollablePanelWidget.cs`

## 概述

`CircularAutoScrollablePanelWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `InnerPanel` | `public Widget InnerPanel { get; set; }` |
| `ClipRect` | `public Widget ClipRect { get; set; }` |
| `ScrollRatioPerSecond` | `public float ScrollRatioPerSecond { get; set; }` |
| `ScrollPixelsPerSecond` | `public float ScrollPixelsPerSecond { get; set; }` |
| `IdleTime` | `public float IdleTime { get; set; }` |
| `AutoScrollWhenSelected` | `public bool AutoScrollWhenSelected { get; set; }` |
| `AutoScroll` | `public bool AutoScroll { get; set; }` |
| `ScrollType` | `public CircularAutoScrollablePanelWidget.ScrollMovementType ScrollType { get; set; }` |
| `ShouldResetImmediately` | `public bool ShouldResetImmediately { get; set; }` |

## 主要方法

### SetScrollMouse
```csharp
public void SetScrollMouse()
```

### SetHoverBegin
```csharp
public void SetHoverBegin()
```

### SetHoverEnd
```csharp
public void SetHoverEnd()
```

## 使用示例

```csharp
// CircularAutoScrollablePanelWidget (Widget) 的典型用法
// 声明/访问一个 CircularAutoScrollablePanelWidget
var widget = root.GetChild("circularAutoScrollablePanelWidget");;
```

## 参见

- [完整类目录](../catalog)