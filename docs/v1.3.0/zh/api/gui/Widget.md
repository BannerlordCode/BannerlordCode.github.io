<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Widget`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Widget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class Widget : PropertyOwnerObject`
**Base:** `PropertyOwnerObject`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/Widget.cs`

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
| `GlobalRotation` | `public float GlobalRotation { get; }` |
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
| `TweenPosition` | `public bool TweenPosition { get; set; }` |
| `HoveredCursorState` | `public string HoveredCursorState { get; set; }` |
| `AlternateClickEventHasSpecialEvent` | `public bool AlternateClickEventHasSpecialEvent { get; set; }` |
| `PosOffset` | `public Vector2 PosOffset { get; set; }` |
| `ScaledPositionOffset` | `public Vector2 ScaledPositionOffset { get; set; }` |
| `PositionXOffset` | `public float PositionXOffset { get; set; }` |
| `PositionYOffset` | `public float PositionYOffset { get; set; }` |
| `ScaledPositionXOffset` | `public float ScaledPositionXOffset { get; set; }` |
| `ScaledPositionYOffset` | `public float ScaledPositionYOffset { get; set; }` |
| `ParentWidget` | `public Widget ParentWidget { get; set; }` |
| `EventManager` | `public EventManager EventManager { get; }` |
| `GamepadNavigationContext` | `public IGamepadNavigationContext GamepadNavigationContext { get; }` |
| `Context` | `public UIContext Context { get; }` |
| `MeasuredSize` | `public Vector2 MeasuredSize { get; }` |
| `MarginTop` | `public float MarginTop { get; set; }` |
| `MarginLeft` | `public float MarginLeft { get; set; }` |
| `MarginBottom` | `public float MarginBottom { get; set; }` |
| `MarginRight` | `public float MarginRight { get; set; }` |
| `ScaledMarginTop` | `public float ScaledMarginTop { get; }` |
| `ScaledMarginLeft` | `public float ScaledMarginLeft { get; }` |
| `ScaledMarginBottom` | `public float ScaledMarginBottom { get; }` |
| `ScaledMarginRight` | `public float ScaledMarginRight { get; set; }` |
| `VerticalAlignment` | `public VerticalAlignment VerticalAlignment { get; set; }` |
| `HorizontalAlignment` | `public HorizontalAlignment HorizontalAlignment { get; set; }` |
| `Right` | `public float Right { get; }` |
| `Bottom` | `public float Bottom { get; }` |
| `ChildCount` | `public int ChildCount { get; set; }` |
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
| `FixedWidth` | `public bool FixedWidth { get; }` |
| `FixedHeight` | `public bool FixedHeight { get; }` |
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
| `Children` | `public List<Widget> Children { get; }` |
| `ConnectedToRoot` | `public bool ConnectedToRoot { get; set; }` |
| `MaxWidth` | `public float MaxWidth { get; set; }` |
| `MaxHeight` | `public float MaxHeight { get; set; }` |
| `MinWidth` | `public float MinWidth { get; set; }` |
| `MinHeight` | `public float MinHeight { get; set; }` |
| `ScaledMaxWidth` | `public float ScaledMaxWidth { get; }` |
| `ScaledMaxHeight` | `public float ScaledMaxHeight { get; }` |
| `ScaledMinWidth` | `public float ScaledMinWidth { get; }` |
| `ScaledMinHeight` | `public float ScaledMinHeight { get; }` |
| `DisableRender` | `public bool DisableRender { get; set; }` |
| `EventFire` | `public event Action<Widget, string, object > EventFire { get; }` |
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

## 主要方法

### GetAllChildrenAndThisRecursive
`public List<Widget> GetAllChildrenAndThisRecursive()`

**用途 / Purpose:** 获取 `all children and this recursive` 的当前值。

### ApplyActionToAllChildren
`public void ApplyActionToAllChildren(Action<Widget> action)`

**用途 / Purpose:** 将 `action to all children` 应用到当前对象。

### ApplyActionToAllChildrenRecursive
`public void ApplyActionToAllChildrenRecursive(Action<Widget> action)`

**用途 / Purpose:** 将 `action to all children recursive` 应用到当前对象。

### GetAllChildrenRecursive
`public List<Widget> GetAllChildrenRecursive(Func<Widget, bool> predicate = null)`

**用途 / Purpose:** 获取 `all children recursive` 的当前值。

### GetAllParents
`public List<Widget> GetAllParents()`

**用途 / Purpose:** 获取 `all parents` 的当前值。

### AddComponent
`public void AddComponent(WidgetComponent component)`

**用途 / Purpose:** 向当前集合/状态中添加 `component`。

### AddState
`public void AddState(string stateName)`

**用途 / Purpose:** 向当前集合/状态中添加 `state`。

### ContainsState
`public bool ContainsState(string stateName)`

**用途 / Purpose:** 处理 `contains state` 相关逻辑。

### SetState
`public virtual void SetState(string stateName)`

**用途 / Purpose:** 设置 `state` 的值或状态。

### FindChild
`public Widget FindChild(BindingPath path)`

**用途 / Purpose:** 处理 `find child` 相关逻辑。

### FindChild
`public Widget FindChild(string singlePathNode)`

**用途 / Purpose:** 处理 `find child` 相关逻辑。

### FindChild
`public Widget FindChild(WidgetSearchDelegate widgetSearchDelegate)`

**用途 / Purpose:** 处理 `find child` 相关逻辑。

### FindChild
`public Widget FindChild(string id, bool includeAllChildren = false)`

**用途 / Purpose:** 处理 `find child` 相关逻辑。

### GetFirstInChildrenAndThisRecursive
`public Widget GetFirstInChildrenAndThisRecursive(Func<Widget, bool> predicate)`

**用途 / Purpose:** 获取 `first in children and this recursive` 的当前值。

### GetFirstInChildrenRecursive
`public Widget GetFirstInChildrenRecursive(Func<Widget, bool> predicate)`

**用途 / Purpose:** 获取 `first in children recursive` 的当前值。

### RemoveAllChildren
`public void RemoveAllChildren()`

**用途 / Purpose:** 从当前集合/状态中移除 `all children`。

### UpdateAnimationPropertiesSubTask
`public virtual void UpdateAnimationPropertiesSubTask(float alphaFactor)`

**用途 / Purpose:** 更新 `animation properties sub task` 的状态或数据。

### Measure
`public void Measure(Vector2 measureSpec)`

**用途 / Purpose:** 处理 `measure` 相关逻辑。

### CheckIsMyChildRecursive
`public bool CheckIsMyChildRecursive(Widget child)`

**用途 / Purpose:** 处理 `check is my child recursive` 相关逻辑。

### AddChild
`public void AddChild(Widget widget)`

**用途 / Purpose:** 向当前集合/状态中添加 `child`。

### AddChildAtIndex
`public void AddChildAtIndex(Widget widget, int index)`

**用途 / Purpose:** 向当前集合/状态中添加 `child at index`。

### SwapChildren
`public void SwapChildren(Widget widget1, Widget widget2)`

**用途 / Purpose:** 处理 `swap children` 相关逻辑。

### RemoveChild
`public void RemoveChild(Widget widget)`

**用途 / Purpose:** 从当前集合/状态中移除 `child`。

### OnBeforeRemovedChild
`public virtual void OnBeforeRemovedChild(Widget widget)`

**用途 / Purpose:** 当 `before removed child` 事件触发时调用此方法。

### HasChild
`public bool HasChild(Widget widget)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `child`。

### UpdateBrushes
`public virtual void UpdateBrushes(float dt)`

**用途 / Purpose:** 更新 `brushes` 的状态或数据。

### GetChildIndex
`public int GetChildIndex(Widget child)`

**用途 / Purpose:** 获取 `child index` 的当前值。

### GetVisibleChildIndex
`public int GetVisibleChildIndex(Widget child)`

**用途 / Purpose:** 获取 `visible child index` 的当前值。

### GetFilterChildIndex
`public int GetFilterChildIndex(Widget child, Func<Widget, bool> childrenFilter)`

**用途 / Purpose:** 获取 `filter child index` 的当前值。

### GetChild
`public Widget GetChild(int i)`

**用途 / Purpose:** 获取 `child` 的当前值。

### Layout
`public void Layout(float left, float bottom, float right, float top)`

**用途 / Purpose:** 处理 `layout` 相关逻辑。

### HandleInput
`public virtual void HandleInput(IReadOnlyList<int> lastKeysPressed)`

**用途 / Purpose:** 处理 `input` 事件或回调。

### IsPointInsideMeasuredArea
`public bool IsPointInsideMeasuredArea(Vector2 p)`

**用途 / Purpose:** 处理 `is point inside measured area` 相关逻辑。

### IsPointInsideGamepadCursorArea
`public bool IsPointInsideGamepadCursorArea(Vector2 p)`

**用途 / Purpose:** 处理 `is point inside gamepad cursor area` 相关逻辑。

### Hide
`public void Hide()`

**用途 / Purpose:** 处理 `hide` 相关逻辑。

### Show
`public void Show()`

**用途 / Purpose:** 处理 `show` 相关逻辑。

### GetLocalPoint
`public Vector2 GetLocalPoint(Vector2 globalPoint)`

**用途 / Purpose:** 获取 `local point` 的当前值。

### SetSiblingIndex
`public void SetSiblingIndex(int index, bool force = false)`

**用途 / Purpose:** 设置 `sibling index` 的值或状态。

### GetSiblingIndex
`public int GetSiblingIndex()`

**用途 / Purpose:** 获取 `sibling index` 的当前值。

### GetVisibleSiblingIndex
`public int GetVisibleSiblingIndex()`

**用途 / Purpose:** 获取 `visible sibling index` 的当前值。

### Render
`public void Render(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)`

**用途 / Purpose:** 处理 `render` 相关逻辑。

### IsRecursivelyVisible
`public bool IsRecursivelyVisible()`

**用途 / Purpose:** 处理 `is recursively visible` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### OnGamepadNavigationFocusGain
`public void OnGamepadNavigationFocusGain()`

**用途 / Purpose:** 当 `gamepad navigation focus gain` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new Widget();
value.GetAllChildrenAndThisRecursive();
```

## 参见

- [完整类目录](../catalog)