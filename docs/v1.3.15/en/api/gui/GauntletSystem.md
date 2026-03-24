# GauntletSystem / Gauntlet系统事件管理

**Namespace**: TaleWorlds.GauntletUI
**File**: `TaleWorlds.GauntletUI/EventManager.cs`
**Purpose**: Core UI event system, manages input events, focus, drag, and widget updates

EventManager is the central hub for GauntletUI events. It handles all UI input events (mouse, keyboard, controller), manages widget focus, handles drag operations, and coordinates widget update cycles.

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| UIEventManager | EventManager | Static singleton instance |
| FocusedWidget | Widget | Current focused widget |
| HoveredView | Widget | Current hovered widget |
| DraggedWidget | Widget | Currently dragged widget |
| DragHoveredView | Widget | Drag hover target widget |
| MousePosition | Vector2 | Current mouse position |
| MousePositionInReferenceResolution | Vector2 | Mouse position in reference resolution |
| DeltaMouseScroll | float | Mouse scroll delta |
| LatestMouseDownWidget | Widget | Most recent mouse press widget |
| LatestMouseUpWidget | Widget | Most recent mouse release widget |
| LatestMouseAlternateDownWidget | Widget | Most recent right-click press widget |
| LatestMouseAlternateUpWidget | Widget | Most recent right-click release widget |
| Time | float | Accumulated time |
| IsControllerActive | bool | Whether controller is active |
| RightStickVerticalScrollAmount | float | Right stick vertical scroll amount |
| RightStickHorizontalScrollAmount | float | Right stick horizontal scroll amount |

## Key Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| ClearFocus | `void ClearFocus()` | Clears current focus |
| SetHoveredView | `void SetHoveredView(Widget view)` | Sets hovered widget |
| BeginDragging | `void BeginDragging(Widget draggedObject)` | Starts dragging a widget |
| ReleaseDraggedWidget | `Widget ReleaseDraggedWidget()` | Releases the dragged widget |
| HitTest | `static bool HitTest(Widget widget, Vector2 position)` | Static hit test |
| FocusTest | `bool FocusTest(Widget root)` | Tests if widget is parent of focus |
| IsPointInsideUsableArea | `bool IsPointInsideUsableArea(Vector2 p)` | Checks if point is in usable area |
| AddLateUpdateAction | `void AddLateUpdateAction(Widget owner, Action float action, int order)` | Adds a late update callback |
| UpdateLayout | `void UpdateLayout()` | Triggers layout update |
| Update | `void Update(float dt)` | Main update |
| LateUpdate | `void LateUpdate(float dt)` | Late update |
| Render | `void Render(TwoDimensionContext twoDimensionContext)` | Renders |
| AddAfterFinalizedCallback | `void AddAfterFinalizedCallback(Action callback)` | Adds post-finalization callback |

## Events

| Event | Description |
|-------|-------------|
| OnDragStarted | Triggered when dragging starts |
| OnDragEnded | Triggered when dragging ends |
| OnFocusedWidgetChanged | Triggered when focused widget changes |

## Usage Examples

```csharp
// Get the EventManager instance
EventManager eventManager = UIContext.EventManager;

// Listen for focus changes
eventManager.OnFocusedWidgetChanged += () =>
{
    Widget focused = eventManager.FocusedWidget;
    Debug.WriteLine($"Focus changed to: {focused?.Id ?? "null"}");
};

// Manually start dragging
eventManager.BeginDragging(myWidget);

// Clear focus
eventManager.ClearFocus();

// Check if point is in usable area
Vector2 mousePos = eventManager.MousePosition;
if (eventManager.IsPointInsideUsableArea(mousePos))
{
    // Mouse is within usable area
}

// Use hit testing
Widget targetWidget = someParentWidget;
if (EventManager.HitTest(targetWidget, mousePos))
{
    // Mouse hit targetWidget or its children
}

// Add late update (order 1-5, higher numbers execute later)
eventManager.AddLateUpdateAction(this, (dt) => {
    // Custom late update logic
}, order: 3);
```
