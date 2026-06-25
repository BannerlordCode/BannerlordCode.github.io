---
title: "Widget"
description: "Auto-generated class reference for Widget."
---
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
| `ImageFit` | `public ImageFit ImageFit { get; set; }` |
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

**Purpose:** **Purpose:** Reads and returns the all children and this recursive value held by the this instance.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.GetAllChildrenAndThisRecursive();
```

### ApplyActionToAllChildren
`public void ApplyActionToAllChildren(Action<Widget> action)`

**Purpose:** **Purpose:** Applies the effect of action to all children to the this instance.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.ApplyActionToAllChildren(action);
```

### ApplyActionToAllChildrenRecursive
`public void ApplyActionToAllChildrenRecursive(Action<Widget> action)`

**Purpose:** **Purpose:** Applies the effect of action to all children recursive to the this instance.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.ApplyActionToAllChildrenRecursive(action);
```

### GetAllChildrenRecursive
`public List<Widget> GetAllChildrenRecursive(Func<Widget, bool> predicate = null)`

**Purpose:** **Purpose:** Reads and returns the all children recursive value held by the this instance.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.GetAllChildrenRecursive(func<Widget, false);
```

### GetAllParents
`public List<Widget> GetAllParents()`

**Purpose:** **Purpose:** Reads and returns the all parents value held by the this instance.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.GetAllParents();
```

### AddComponent
`public void AddComponent(WidgetComponent component)`

**Purpose:** **Purpose:** Adds component to the current collection or state.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.AddComponent(component);
```

### AddState
`public void AddState(string stateName)`

**Purpose:** **Purpose:** Adds state to the current collection or state.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.AddState("example");
```

### ContainsState
`public bool ContainsState(string stateName)`

**Purpose:** **Purpose:** Indicates whether the this instance contains state.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.ContainsState("example");
```

### SetState
`public virtual void SetState(string stateName)`

**Purpose:** **Purpose:** Assigns a new value to state and updates the object's internal state.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.SetState("example");
```

### FindChild
`public Widget FindChild(BindingPath path)`

**Purpose:** **Purpose:** Looks up the matching child in the current collection or scope.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.FindChild(path);
```

### FindChild
`public Widget FindChild(string singlePathNode)`

**Purpose:** **Purpose:** Looks up the matching child in the current collection or scope.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.FindChild("example");
```

### FindChild
`public Widget FindChild(WidgetSearchDelegate widgetSearchDelegate)`

**Purpose:** **Purpose:** Looks up the matching child in the current collection or scope.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.FindChild(widgetSearchDelegate);
```

### FindChild
`public Widget FindChild(string id, bool includeAllChildren = false)`

**Purpose:** **Purpose:** Looks up the matching child in the current collection or scope.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.FindChild("example", false);
```

### GetFirstInChildrenAndThisRecursive
`public Widget GetFirstInChildrenAndThisRecursive(Func<Widget, bool> predicate)`

**Purpose:** **Purpose:** Reads and returns the first in children and this recursive value held by the this instance.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.GetFirstInChildrenAndThisRecursive(func<Widget, false);
```

### GetFirstInChildrenRecursive
`public Widget GetFirstInChildrenRecursive(Func<Widget, bool> predicate)`

**Purpose:** **Purpose:** Reads and returns the first in children recursive value held by the this instance.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.GetFirstInChildrenRecursive(func<Widget, false);
```

### RemoveAllChildren
`public void RemoveAllChildren()`

**Purpose:** **Purpose:** Removes all children from the current collection or state.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.RemoveAllChildren();
```

### UpdateAnimationPropertiesSubTask
`public virtual void UpdateAnimationPropertiesSubTask(float alphaFactor)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of animation properties sub task.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.UpdateAnimationPropertiesSubTask(0);
```

### Measure
`public void Measure(Vector2 measureSpec)`

**Purpose:** **Purpose:** Executes the Measure logic.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.Measure(measureSpec);
```

### CheckIsMyChildRecursive
`public bool CheckIsMyChildRecursive(Widget child)`

**Purpose:** **Purpose:** Verifies whether is my child recursive holds true for the this instance.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.CheckIsMyChildRecursive(child);
```

### AddChild
`public void AddChild(Widget widget)`

**Purpose:** **Purpose:** Adds child to the current collection or state.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.AddChild(widget);
```

### AddChildAtIndex
`public void AddChildAtIndex(Widget widget, int index)`

**Purpose:** **Purpose:** Adds child at index to the current collection or state.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.AddChildAtIndex(widget, 0);
```

### SwapChildren
`public void SwapChildren(Widget widget1, Widget widget2)`

**Purpose:** **Purpose:** Executes the SwapChildren logic.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.SwapChildren(widget1, widget2);
```

### RemoveChild
`public void RemoveChild(Widget widget)`

**Purpose:** **Purpose:** Removes child from the current collection or state.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.RemoveChild(widget);
```

### OnBeforeRemovedChild
`public virtual void OnBeforeRemovedChild(Widget widget)`

**Purpose:** **Purpose:** Invoked when the before removed child event is raised.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.OnBeforeRemovedChild(widget);
```

### HasChild
`public bool HasChild(Widget widget)`

**Purpose:** **Purpose:** Determines whether the this instance already holds child.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.HasChild(widget);
```

### UpdateBrushes
`public virtual void UpdateBrushes(float dt)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of brushes.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.UpdateBrushes(0);
```

### GetChildIndex
`public int GetChildIndex(Widget child)`

**Purpose:** **Purpose:** Reads and returns the child index value held by the this instance.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.GetChildIndex(child);
```

### GetVisibleChildIndex
`public int GetVisibleChildIndex(Widget child)`

**Purpose:** **Purpose:** Reads and returns the visible child index value held by the this instance.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.GetVisibleChildIndex(child);
```

### GetFilterChildIndex
`public int GetFilterChildIndex(Widget child, Func<Widget, bool> childrenFilter)`

**Purpose:** **Purpose:** Reads and returns the filter child index value held by the this instance.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.GetFilterChildIndex(child, func<Widget, false);
```

### GetChild
`public Widget GetChild(int i)`

**Purpose:** **Purpose:** Reads and returns the child value held by the this instance.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.GetChild(0);
```

### Layout
`public void Layout(float left, float bottom, float right, float top)`

**Purpose:** **Purpose:** Executes the Layout logic.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.Layout(0, 0, 0, 0);
```

### HandleInput
`public virtual void HandleInput(IReadOnlyList<int> lastKeysPressed)`

**Purpose:** **Purpose:** Executes the response logic associated with input.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.HandleInput(lastKeysPressed);
```

### IsPointInsideMeasuredArea
`public bool IsPointInsideMeasuredArea(Vector2 p)`

**Purpose:** **Purpose:** Determines whether the this instance is in the point inside measured area state or condition.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.IsPointInsideMeasuredArea(p);
```

### IsPointInsideGamepadCursorArea
`public bool IsPointInsideGamepadCursorArea(Vector2 p)`

**Purpose:** **Purpose:** Determines whether the this instance is in the point inside gamepad cursor area state or condition.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.IsPointInsideGamepadCursorArea(p);
```

### Hide
`public void Hide()`

**Purpose:** **Purpose:** Hides the UI or element associated with the this instance.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.Hide();
```

### Show
`public void Show()`

**Purpose:** **Purpose:** Displays the UI or element associated with the this instance.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.Show();
```

### GetLocalPoint
`public Vector2 GetLocalPoint(Vector2 globalPoint)`

**Purpose:** **Purpose:** Reads and returns the local point value held by the this instance.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.GetLocalPoint(globalPoint);
```

### SetSiblingIndex
`public void SetSiblingIndex(int index, bool force = false)`

**Purpose:** **Purpose:** Assigns a new value to sibling index and updates the object's internal state.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.SetSiblingIndex(0, false);
```

### GetSiblingIndex
`public int GetSiblingIndex()`

**Purpose:** **Purpose:** Reads and returns the sibling index value held by the this instance.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.GetSiblingIndex();
```

### GetVisibleSiblingIndex
`public int GetVisibleSiblingIndex()`

**Purpose:** **Purpose:** Reads and returns the visible sibling index value held by the this instance.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.GetVisibleSiblingIndex();
```

### Render
`public void Render(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)`

**Purpose:** **Purpose:** Executes the Render logic.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.Render(twoDimensionContext, drawContext);
```

### IsRecursivelyVisible
`public bool IsRecursivelyVisible()`

**Purpose:** **Purpose:** Determines whether the this instance is in the recursively visible state or condition.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.IsRecursivelyVisible();
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
var result = widget.ToString();
```

### OnGamepadNavigationFocusGain
`public void OnGamepadNavigationFocusGain()`

**Purpose:** **Purpose:** Invoked when the gamepad navigation focus gain event is raised.

```csharp
// Obtain an instance of Widget from the subsystem API first
Widget widget = ...;
widget.OnGamepadNavigationFocusGain();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Widget widget = ...;
widget.GetAllChildrenAndThisRecursive();
```

## See Also

- [Area Index](../)