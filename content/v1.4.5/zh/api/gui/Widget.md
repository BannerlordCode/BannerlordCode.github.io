---
title: "Widget"
description: "Widget 的自动生成类参考。"
---
# Widget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class Widget : PropertyOwnerObject`
**Base:** `PropertyOwnerObject`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/Widget.cs`

## 概述

`Widget` 位于 `TaleWorlds.GauntletUI.BaseTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.BaseTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ColorFactor` | `public float ColorFactor { get; set; }` |
| `AlphaFactor` | `public float AlphaFactor { get; set; }` |
| `ValueFactor` | `public float ValueFactor { get; set; }` |
| `SaturationFactor` | `public float SaturationFactor { get; set; }` |
| `ExtendLeft` | `public float ExtendLeft { get; set; }` |
| `ExtendRight` | `public float ExtendRight { get; set; }` |
| `ExtendTop` | `public float ExtendTop { get; set; }` |
| `ExtendBottom` | `public float ExtendBottom { get; set; }` |
| `VerticalFlip` | `public bool VerticalFlip { get; set; }` |
| `HorizontalFlip` | `public bool HorizontalFlip { get; set; }` |
| `NinePatchTop` | `public int NinePatchTop { get; set; }` |
| `NinePatchBottom` | `public int NinePatchBottom { get; set; }` |
| `NinePatchLeft` | `public int NinePatchLeft { get; set; }` |
| `NinePatchRight` | `public int NinePatchRight { get; set; }` |
| `ImageFit` | `public ImageFit ImageFit { get; set; }` |
| `GlobalRotation` | `public float GlobalRotation { get; set; }` |
| `Rotation` | `public float Rotation { get; set; }` |
| `PivotX` | `public float PivotX { get; set; }` |
| `PivotY` | `public float PivotY { get; set; }` |
| `Left` | `public float Left { get; }` |
| `Top` | `public float Top { get; }` |
| `Size` | `public Vector2 Size { get; }` |
| `FrictionEnabled` | `public bool FrictionEnabled { get; set; }` |
| `Color` | `public Color Color { get; set; }` |
| `Id` | `public string Id { get; }` |
| `LocalPosition` | `public Vector2 LocalPosition { get; }` |
| `GlobalPosition` | `public Vector2 GlobalPosition { get; }` |
| `GamepadCursorAreaRect` | `public Rectangle2D GamepadCursorAreaRect { get; }` |
| `DoNotUseCustomScaleAndChildren` | `public bool DoNotUseCustomScaleAndChildren { get; set; }` |
| `DoNotUseCustomScale` | `public bool DoNotUseCustomScale { get; set; }` |
| `SuggestedWidth` | `public float SuggestedWidth { get; set; }` |
| `SuggestedHeight` | `public float SuggestedHeight { get; set; }` |
| `ScaledSuggestedWidth` | `public float ScaledSuggestedWidth { get; set; }` |
| `ScaledSuggestedHeight` | `public float ScaledSuggestedHeight { get; set; }` |
| `HoveredCursorState` | `public string HoveredCursorState { get; set; }` |
| `AlternateClickEventHasSpecialEvent` | `public bool AlternateClickEventHasSpecialEvent { get; set; }` |
| `PosOffset` | `public Vector2 PosOffset { get; set; }` |
| `PositionXOffset` | `public float PositionXOffset { get; set; }` |
| `PositionYOffset` | `public float PositionYOffset { get; set; }` |
| `ScaledPositionXOffset` | `public float ScaledPositionXOffset { get; set; }` |
| `ScaledPositionYOffset` | `public float ScaledPositionYOffset { get; set; }` |
| `ParentWidget` | `public Widget ParentWidget { get; set; }` |
| `Context` | `public UIContext Context { get; }` |
| `MeasuredSize` | `public Vector2 MeasuredSize { get; }` |
| `MarginTop` | `public float MarginTop { get; set; }` |
| `MarginLeft` | `public float MarginLeft { get; set; }` |
| `MarginBottom` | `public float MarginBottom { get; set; }` |
| `MarginRight` | `public float MarginRight { get; set; }` |
| `VerticalAlignment` | `public VerticalAlignment VerticalAlignment { get; set; }` |
| `HorizontalAlignment` | `public HorizontalAlignment HorizontalAlignment { get; set; }` |
| `ForcePixelPerfectRenderPlacement` | `public bool ForcePixelPerfectRenderPlacement { get; set; }` |
| `UseGlobalTimeForAnimation` | `public bool UseGlobalTimeForAnimation { get; set; }` |
| `UseSpriteDimensions` | `public bool UseSpriteDimensions { get; set; }` |
| `WidthSizePolicy` | `public SizePolicy WidthSizePolicy { get; set; }` |
| `HeightSizePolicy` | `public SizePolicy HeightSizePolicy { get; set; }` |
| `AcceptDrag` | `public bool AcceptDrag { get; set; }` |
| `AcceptDrop` | `public bool AcceptDrop { get; set; }` |
| `HideOnDrag` | `public bool HideOnDrag { get; set; }` |
| `DragWidget` | `public Widget DragWidget { get; set; }` |
| `ClipContents` | `public bool ClipContents { get; set; }` |
| `ClipHorizontalContent` | `public bool ClipHorizontalContent { get; set; }` |
| `ClipVerticalContent` | `public bool ClipVerticalContent { get; set; }` |
| `CircularClipEnabled` | `public bool CircularClipEnabled { get; set; }` |
| `CircularClipRadius` | `public float CircularClipRadius { get; set; }` |
| `IsCircularClipRadiusHalfOfWidth` | `public bool IsCircularClipRadiusHalfOfWidth { get; set; }` |
| `IsCircularClipRadiusHalfOfHeight` | `public bool IsCircularClipRadiusHalfOfHeight { get; set; }` |
| `CircularClipSmoothingRadius` | `public float CircularClipSmoothingRadius { get; set; }` |
| `CircularClipXOffset` | `public float CircularClipXOffset { get; set; }` |
| `CircularClipYOffset` | `public float CircularClipYOffset { get; set; }` |
| `RenderLate` | `public bool RenderLate { get; set; }` |
| `DoNotRenderIfNotFullyInsideScissor` | `public bool DoNotRenderIfNotFullyInsideScissor { get; set; }` |
| `IsHovered` | `public bool IsHovered { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsFocusable` | `public bool IsFocusable { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `RestartAnimationFirstFrame` | `public bool RestartAnimationFirstFrame { get; set; }` |
| `DoNotPassEventsToChildren` | `public bool DoNotPassEventsToChildren { get; set; }` |
| `DoNotAcceptEvents` | `public bool DoNotAcceptEvents { get; set; }` |
| `CanAcceptEvents` | `public bool CanAcceptEvents { get; set; }` |
| `IsPressed` | `public bool IsPressed { get; set; }` |
| `IsHidden` | `public bool IsHidden { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `Sprite` | `public Sprite Sprite { get; set; }` |
| `VisualDefinition` | `public VisualDefinition VisualDefinition { get; set; }` |
| `CurrentState` | `public string CurrentState { get; set; }` |
| `UpdateChildrenStates` | `public bool UpdateChildrenStates { get; set; }` |
| `Tag` | `public object Tag { get; }` |
| `LayoutImp` | `public ILayout LayoutImp { get; }` |
| `DropEventHandledManually` | `public bool DropEventHandledManually { get; }` |
| `ConnectedToRoot` | `public bool ConnectedToRoot { get; }` |
| `MaxWidth` | `public float MaxWidth { get; set; }` |
| `MaxHeight` | `public float MaxHeight { get; set; }` |
| `MinWidth` | `public float MinWidth { get; set; }` |
| `MinHeight` | `public float MinHeight { get; set; }` |
| `DisableRender` | `public bool DisableRender { get; set; }` |
| `ExtendCursorAreaTop` | `public float ExtendCursorAreaTop { get; set; }` |
| `ExtendCursorAreaRight` | `public float ExtendCursorAreaRight { get; set; }` |
| `ExtendCursorAreaBottom` | `public float ExtendCursorAreaBottom { get; set; }` |
| `ExtendCursorAreaLeft` | `public float ExtendCursorAreaLeft { get; set; }` |
| `CursorAreaXOffset` | `public float CursorAreaXOffset { get; set; }` |
| `CursorAreaYOffset` | `public float CursorAreaYOffset { get; set; }` |
| `AcceptNavigation` | `public bool AcceptNavigation { get; set; }` |
| `DoNotAcceptNavigation` | `public bool DoNotAcceptNavigation { get; set; }` |
| `IsUsingNavigation` | `public bool IsUsingNavigation { get; set; }` |
| `UseSiblingIndexForNavigation` | `public bool UseSiblingIndexForNavigation { get; set; }` |
| `GamepadNavigationIndex` | `public int GamepadNavigationIndex { get; set; }` |
| `UsedNavigationMovements` | `public GamepadNavigationTypes UsedNavigationMovements { get; set; }` |
| `EventFire` | `public event Action<Widget, string, object > EventFire { get; }` |

## 主要方法

### GetAllChildrenAndThisRecursive
`public List<Widget> GetAllChildrenAndThisRecursive()`

**用途 / Purpose:** 读取并返回当前对象中 all children and this recursive 的结果。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.GetAllChildrenAndThisRecursive();
```

### ApplyActionToAllChildren
`public void ApplyActionToAllChildren(Action<Widget> action)`

**用途 / Purpose:** 将 action to all children 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.ApplyActionToAllChildren(action);
```

### ApplyActionToAllChildrenRecursive
`public void ApplyActionToAllChildrenRecursive(Action<Widget> action)`

**用途 / Purpose:** 将 action to all children recursive 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.ApplyActionToAllChildrenRecursive(action);
```

### GetAllChildrenRecursive
`public List<Widget> GetAllChildrenRecursive(Func<Widget, bool> predicate = null)`

**用途 / Purpose:** 读取并返回当前对象中 all children recursive 的结果。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.GetAllChildrenRecursive(func<Widget, false);
```

### GetAllParents
`public List<Widget> GetAllParents()`

**用途 / Purpose:** 读取并返回当前对象中 all parents 的结果。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.GetAllParents();
```

### AddComponent
`public void AddComponent(WidgetComponent component)`

**用途 / Purpose:** 将 component 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.AddComponent(component);
```

### AddState
`public void AddState(string stateName)`

**用途 / Purpose:** 将 state 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.AddState("example");
```

### ContainsState
`public bool ContainsState(string stateName)`

**用途 / Purpose:** 检查当前对象是否含有state。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.ContainsState("example");
```

### SetState
`public virtual void SetState(string stateName)`

**用途 / Purpose:** 为 state 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.SetState("example");
```

### FindChild
`public Widget FindChild(BindingPath path)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的child。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.FindChild(path);
```

### FindChild
`public Widget FindChild(string singlePathNode)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的child。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.FindChild("example");
```

### FindChild
`public Widget FindChild(WidgetSearchDelegate widgetSearchDelegate)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的child。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.FindChild(widgetSearchDelegate);
```

### FindChild
`public Widget FindChild(string id, bool includeAllChildren = false)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的child。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.FindChild("example", false);
```

### GetFirstInChildrenAndThisRecursive
`public Widget GetFirstInChildrenAndThisRecursive(Func<Widget, bool> predicate)`

**用途 / Purpose:** 读取并返回当前对象中 first in children and this recursive 的结果。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.GetFirstInChildrenAndThisRecursive(func<Widget, false);
```

### GetFirstInChildrenRecursive
`public Widget GetFirstInChildrenRecursive(Func<Widget, bool> predicate)`

**用途 / Purpose:** 读取并返回当前对象中 first in children recursive 的结果。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.GetFirstInChildrenRecursive(func<Widget, false);
```

### RemoveAllChildren
`public void RemoveAllChildren()`

**用途 / Purpose:** 从当前容器或状态中移除 all children。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.RemoveAllChildren();
```

### UpdateAnimationPropertiesSubTask
`public virtual void UpdateAnimationPropertiesSubTask(float alphaFactor)`

**用途 / Purpose:** 重新计算并更新 animation properties sub task 的最新表示。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.UpdateAnimationPropertiesSubTask(0);
```

### Measure
`public void Measure(Vector2 measureSpec)`

**用途 / Purpose:** 调用 Measure 对应的操作。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.Measure(measureSpec);
```

### CheckIsMyChildRecursive
`public bool CheckIsMyChildRecursive(Widget child)`

**用途 / Purpose:** 检查is my child recursive在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.CheckIsMyChildRecursive(child);
```

### AddChild
`public void AddChild(Widget widget)`

**用途 / Purpose:** 将 child 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.AddChild(widget);
```

### AddChildAtIndex
`public void AddChildAtIndex(Widget widget, int index)`

**用途 / Purpose:** 将 child at index 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.AddChildAtIndex(widget, 0);
```

### SwapChildren
`public void SwapChildren(Widget widget1, Widget widget2)`

**用途 / Purpose:** 调用 SwapChildren 对应的操作。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.SwapChildren(widget1, widget2);
```

### RemoveChild
`public void RemoveChild(Widget widget)`

**用途 / Purpose:** 从当前容器或状态中移除 child。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.RemoveChild(widget);
```

### OnBeforeRemovedChild
`public virtual void OnBeforeRemovedChild(Widget widget)`

**用途 / Purpose:** 在 before removed child 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.OnBeforeRemovedChild(widget);
```

### HasChild
`public bool HasChild(Widget widget)`

**用途 / Purpose:** 判断当前对象是否已经持有 child。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.HasChild(widget);
```

### UpdateBrushes
`public virtual void UpdateBrushes(float dt)`

**用途 / Purpose:** 重新计算并更新 brushes 的最新表示。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.UpdateBrushes(0);
```

### GetChildIndex
`public int GetChildIndex(Widget child)`

**用途 / Purpose:** 读取并返回当前对象中 child index 的结果。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.GetChildIndex(child);
```

### GetVisibleChildIndex
`public int GetVisibleChildIndex(Widget child)`

**用途 / Purpose:** 读取并返回当前对象中 visible child index 的结果。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.GetVisibleChildIndex(child);
```

### GetFilterChildIndex
`public int GetFilterChildIndex(Widget child, Func<Widget, bool> childrenFilter)`

**用途 / Purpose:** 读取并返回当前对象中 filter child index 的结果。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.GetFilterChildIndex(child, func<Widget, false);
```

### GetChild
`public Widget GetChild(int i)`

**用途 / Purpose:** 读取并返回当前对象中 child 的结果。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.GetChild(0);
```

### Layout
`public void Layout(float left, float bottom, float right, float top)`

**用途 / Purpose:** 调用 Layout 对应的操作。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.Layout(0, 0, 0, 0);
```

### HandleInput
`public virtual void HandleInput(IReadOnlyList<int> lastKeysPressed)`

**用途 / Purpose:** 响应 input 事件，执行对应的处理逻辑。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.HandleInput(lastKeysPressed);
```

### IsPointInsideMeasuredArea
`public bool IsPointInsideMeasuredArea(Vector2 p)`

**用途 / Purpose:** 判断当前对象是否处于 point inside measured area 状态或条件。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.IsPointInsideMeasuredArea(p);
```

### IsPointInsideGamepadCursorArea
`public bool IsPointInsideGamepadCursorArea(Vector2 p)`

**用途 / Purpose:** 判断当前对象是否处于 point inside gamepad cursor area 状态或条件。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.IsPointInsideGamepadCursorArea(p);
```

### Hide
`public void Hide()`

**用途 / Purpose:** 隐藏当前对象对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.Hide();
```

### Show
`public void Show()`

**用途 / Purpose:** 显示当前对象对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.Show();
```

### GetLocalPoint
`public Vector2 GetLocalPoint(Vector2 globalPoint)`

**用途 / Purpose:** 读取并返回当前对象中 local point 的结果。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.GetLocalPoint(globalPoint);
```

### SetSiblingIndex
`public void SetSiblingIndex(int index, bool force = false)`

**用途 / Purpose:** 为 sibling index 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.SetSiblingIndex(0, false);
```

### GetSiblingIndex
`public int GetSiblingIndex()`

**用途 / Purpose:** 读取并返回当前对象中 sibling index 的结果。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.GetSiblingIndex();
```

### GetVisibleSiblingIndex
`public int GetVisibleSiblingIndex()`

**用途 / Purpose:** 读取并返回当前对象中 visible sibling index 的结果。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.GetVisibleSiblingIndex();
```

### Render
`public void Render(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)`

**用途 / Purpose:** 调用 Render 对应的操作。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.Render(twoDimensionContext, drawContext);
```

### IsRecursivelyVisible
`public bool IsRecursivelyVisible()`

**用途 / Purpose:** 判断当前对象是否处于 recursively visible 状态或条件。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.IsRecursivelyVisible();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
var result = widget.ToString();
```

### OnGamepadNavigationFocusGain
`public void OnGamepadNavigationFocusGain()`

**用途 / Purpose:** 在 gamepad navigation focus gain 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Widget 实例
Widget widget = ...;
widget.OnGamepadNavigationFocusGain();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Widget widget = ...;
widget.GetAllChildrenAndThisRecursive();
```

## 参见

- [本区域目录](../)