---
title: "AutoScrollParameters"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AutoScrollParameters`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AutoScrollParameters

**命名空间:** TaleWorlds.GauntletUI.BaseTypes
**模块:** TaleWorlds.GauntletUI
**类型:** `public class AutoScrollParameters`
**领域:** campaign-ext

## 概述

`AutoScrollParameters` 位于 `TaleWorlds.GauntletUI.BaseTypes`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.BaseTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ClipRect` | `public Widget ClipRect { get; set; }` |
| `InnerPanel` | `public Widget InnerPanel { get; set; }` |
| `ActiveScrollbar` | `public ScrollbarWidget ActiveScrollbar { get; set; }` |
| `UpdateScrollbarVisibility` | `public bool UpdateScrollbarVisibility { get; set; }` |
| `FixedHeader` | `public Widget FixedHeader { get; set; }` |
| `ScrolledHeader` | `public Widget ScrolledHeader { get; set; }` |
| `AutoHideScrollBars` | `public bool AutoHideScrollBars { get; set; }` |
| `AutoHideScrollBarHandle` | `public bool AutoHideScrollBarHandle { get; set; }` |
| `AutoAdjustScrollbarHandleSize` | `public bool AutoAdjustScrollbarHandleSize { get; set; }` |
| `OnlyAcceptScrollEventIfCanScroll` | `public bool OnlyAcceptScrollEventIfCanScroll { get; set; }` |
| `ReverseInitialScrollBarAlignment` | `public bool ReverseInitialScrollBarAlignment { get; set; }` |
| `HorizontalScrollbar` | `public ScrollbarWidget HorizontalScrollbar { get; set; }` |
| `VerticalScrollbar` | `public ScrollbarWidget VerticalScrollbar { get; set; }` |
| `IsInterpolating` | `public bool IsInterpolating { get; }` |

## 主要方法

### ResetTweenSpeed
`public void ResetTweenSpeed()`

**用途 / Purpose:** 将 `tween speed` 重置为初始状态。

### ScrollToChild
`public void ScrollToChild(Widget targetWidget, ScrollablePanel.AutoScrollParameters scrollParameters = null)`

**用途 / Purpose:** 处理 `scroll to child` 相关逻辑。

### SetVerticalScrollTarget
`public void SetVerticalScrollTarget(float targetValue, float interpolationDuration)`

**用途 / Purpose:** 设置 `vertical scroll target` 的值或状态。

### SetHorizontalScrollTarget
`public void SetHorizontalScrollTarget(float targetValue, float interpolationDuration)`

**用途 / Purpose:** 设置 `horizontal scroll target` 的值或状态。

### SetControlledScrollbar
`public void SetControlledScrollbar(ScrollbarWidget scrollbar)`

**用途 / Purpose:** 设置 `controlled scrollbar` 的值或状态。

### StartInterpolation
`public void StartInterpolation(float targetValue, float duration)`

**用途 / Purpose:** 处理 `start interpolation` 相关逻辑。

### StopInterpolation
`public void StopInterpolation()`

**用途 / Purpose:** 处理 `stop interpolation` 相关逻辑。

### GetValue
`public float GetValue()`

**用途 / Purpose:** 获取 `value` 的当前值。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 AutoScrollParameters 实例，再调用它的公开方法
var value = new AutoScrollParameters();
value.ResetTweenSpeed();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
