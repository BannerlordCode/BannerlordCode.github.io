<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AutoScrollParameters`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AutoScrollParameters

**命名空间:** TaleWorlds.GauntletUI.BaseTypes
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`AutoScrollParameters` 是 `TaleWorlds.GauntletUI.BaseTypes` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public void ResetTweenSpeed()
```

### ScrollToChild

```csharp
public void ScrollToChild(Widget targetWidget, ScrollablePanel.AutoScrollParameters scrollParameters = null)
```

### SetVerticalScrollTarget

```csharp
public void SetVerticalScrollTarget(float targetValue, float interpolationDuration)
```

### SetHorizontalScrollTarget

```csharp
public void SetHorizontalScrollTarget(float targetValue, float interpolationDuration)
```

### SetControlledScrollbar

```csharp
public void SetControlledScrollbar(ScrollbarWidget scrollbar)
```

### StartInterpolation

```csharp
public void StartInterpolation(float targetValue, float duration)
```

### StopInterpolation

```csharp
public void StopInterpolation()
```

### GetValue

```csharp
public float GetValue()
```

### Tick

```csharp
public void Tick(float dt)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)