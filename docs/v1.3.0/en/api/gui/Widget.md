<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Widget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Widget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class Widget : PropertyOwnerObject`
**Base:** `PropertyOwnerObject`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/Widget.cs`

## Overview

`Widget` lives in `TaleWorlds.GauntletUI.BaseTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.BaseTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Key Methods

### GetAllChildrenAndThisRecursive
`public List<Widget> GetAllChildrenAndThisRecursive()`

**Purpose:** Gets the current value of `all children and this recursive`.

### ApplyActionToAllChildren
`public void ApplyActionToAllChildren(Action<Widget> action)`

**Purpose:** Applies `action to all children` to the current object.

### ApplyActionToAllChildrenRecursive
`public void ApplyActionToAllChildrenRecursive(Action<Widget> action)`

**Purpose:** Applies `action to all children recursive` to the current object.

### GetAllChildrenRecursive
`public List<Widget> GetAllChildrenRecursive(Func<Widget, bool> predicate = null)`

**Purpose:** Gets the current value of `all children recursive`.

### GetAllParents
`public List<Widget> GetAllParents()`

**Purpose:** Gets the current value of `all parents`.

### AddComponent
`public void AddComponent(WidgetComponent component)`

**Purpose:** Adds `component` to the current collection or state.

### AddState
`public void AddState(string stateName)`

**Purpose:** Adds `state` to the current collection or state.

### ContainsState
`public bool ContainsState(string stateName)`

**Purpose:** Handles logic related to `contains state`.

### SetState
`public virtual void SetState(string stateName)`

**Purpose:** Sets the value or state of `state`.

### FindChild
`public Widget FindChild(BindingPath path)`

**Purpose:** Handles logic related to `find child`.

### FindChild
`public Widget FindChild(string singlePathNode)`

**Purpose:** Handles logic related to `find child`.

### FindChild
`public Widget FindChild(WidgetSearchDelegate widgetSearchDelegate)`

**Purpose:** Handles logic related to `find child`.

### FindChild
`public Widget FindChild(string id, bool includeAllChildren = false)`

**Purpose:** Handles logic related to `find child`.

### GetFirstInChildrenAndThisRecursive
`public Widget GetFirstInChildrenAndThisRecursive(Func<Widget, bool> predicate)`

**Purpose:** Gets the current value of `first in children and this recursive`.

### GetFirstInChildrenRecursive
`public Widget GetFirstInChildrenRecursive(Func<Widget, bool> predicate)`

**Purpose:** Gets the current value of `first in children recursive`.

### RemoveAllChildren
`public void RemoveAllChildren()`

**Purpose:** Removes `all children` from the current collection or state.

### UpdateAnimationPropertiesSubTask
`public virtual void UpdateAnimationPropertiesSubTask(float alphaFactor)`

**Purpose:** Updates the state or data of `animation properties sub task`.

### Measure
`public void Measure(Vector2 measureSpec)`

**Purpose:** Handles logic related to `measure`.

### CheckIsMyChildRecursive
`public bool CheckIsMyChildRecursive(Widget child)`

**Purpose:** Handles logic related to `check is my child recursive`.

### AddChild
`public void AddChild(Widget widget)`

**Purpose:** Adds `child` to the current collection or state.

### AddChildAtIndex
`public void AddChildAtIndex(Widget widget, int index)`

**Purpose:** Adds `child at index` to the current collection or state.

### SwapChildren
`public void SwapChildren(Widget widget1, Widget widget2)`

**Purpose:** Handles logic related to `swap children`.

### RemoveChild
`public void RemoveChild(Widget widget)`

**Purpose:** Removes `child` from the current collection or state.

### OnBeforeRemovedChild
`public virtual void OnBeforeRemovedChild(Widget widget)`

**Purpose:** Called when the `before removed child` event is raised.

### HasChild
`public bool HasChild(Widget widget)`

**Purpose:** Checks whether the current object has/contains `child`.

### UpdateBrushes
`public virtual void UpdateBrushes(float dt)`

**Purpose:** Updates the state or data of `brushes`.

### GetChildIndex
`public int GetChildIndex(Widget child)`

**Purpose:** Gets the current value of `child index`.

### GetVisibleChildIndex
`public int GetVisibleChildIndex(Widget child)`

**Purpose:** Gets the current value of `visible child index`.

### GetFilterChildIndex
`public int GetFilterChildIndex(Widget child, Func<Widget, bool> childrenFilter)`

**Purpose:** Gets the current value of `filter child index`.

### GetChild
`public Widget GetChild(int i)`

**Purpose:** Gets the current value of `child`.

### Layout
`public void Layout(float left, float bottom, float right, float top)`

**Purpose:** Handles logic related to `layout`.

### HandleInput
`public virtual void HandleInput(IReadOnlyList<int> lastKeysPressed)`

**Purpose:** Handles the `input` event or callback.

### IsPointInsideMeasuredArea
`public bool IsPointInsideMeasuredArea(Vector2 p)`

**Purpose:** Handles logic related to `is point inside measured area`.

### IsPointInsideGamepadCursorArea
`public bool IsPointInsideGamepadCursorArea(Vector2 p)`

**Purpose:** Handles logic related to `is point inside gamepad cursor area`.

### Hide
`public void Hide()`

**Purpose:** Handles logic related to `hide`.

### Show
`public void Show()`

**Purpose:** Handles logic related to `show`.

### GetLocalPoint
`public Vector2 GetLocalPoint(Vector2 globalPoint)`

**Purpose:** Gets the current value of `local point`.

### SetSiblingIndex
`public void SetSiblingIndex(int index, bool force = false)`

**Purpose:** Sets the value or state of `sibling index`.

### GetSiblingIndex
`public int GetSiblingIndex()`

**Purpose:** Gets the current value of `sibling index`.

### GetVisibleSiblingIndex
`public int GetVisibleSiblingIndex()`

**Purpose:** Gets the current value of `visible sibling index`.

### Render
`public void Render(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)`

**Purpose:** Handles logic related to `render`.

### IsRecursivelyVisible
`public bool IsRecursivelyVisible()`

**Purpose:** Handles logic related to `is recursively visible`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### OnGamepadNavigationFocusGain
`public void OnGamepadNavigationFocusGain()`

**Purpose:** Called when the `gamepad navigation focus gain` event is raised.

## Usage Example

```csharp
var value = new Widget();
value.GetAllChildrenAndThisRecursive();
```

## See Also

- [Complete Class Catalog](../catalog)