---
title: "UIContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UIContext`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UIContext

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class UIContext`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/UIContext.cs`

## Overview

`UIContext` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveCursorOfContext` | `public MouseCursors ActiveCursorOfContext { get; set; }` |
| `IsDynamicScaleEnabled` | `public bool IsDynamicScaleEnabled { get; }` |
| `ScaleModifier` | `public float ScaleModifier { get; }` |
| `Name` | `public string Name { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `ContextAlpha` | `public float ContextAlpha { get; }` |
| `Scale` | `public float Scale { get; }` |
| `CustomScale` | `public float CustomScale { get; }` |
| `CustomInverseScale` | `public float CustomInverseScale { get; }` |
| `CurrentLanugageCode` | `public string CurrentLanugageCode { get; }` |
| `UIRandom` | `public Random UIRandom { get; }` |
| `InverseScale` | `public float InverseScale { get; }` |
| `EventManager` | `public EventManager EventManager { get; }` |
| `TwoDimensionContext` | `public TwoDimensionContext TwoDimensionContext { get; }` |
| `SpriteData` | `public SpriteData SpriteData { get; }` |
| `BrushFactory` | `public BrushFactory BrushFactory { get; }` |
| `FontFactory` | `public FontFactory FontFactory { get; }` |
| `GamepadNavigation` | `public IGamepadNavigationContext GamepadNavigation { get; }` |
| `LocalFrameNumber` | `public ulong LocalFrameNumber { get; }` |

## Key Methods

### DebugDraw
`public void DebugDraw()`

**Purpose:** Handles logic related to `debug draw`.

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### GetBrush
`public Brush GetBrush(string name)`

**Purpose:** Gets the current value of `brush`.

### RefreshResources
`public void RefreshResources(SpriteData spriteData, FontFactory fontFactory, BrushFactory brushFactory)`

**Purpose:** Refreshes the display or cache of `resources`.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Deactivate
`public void Deactivate()`

**Purpose:** Handles logic related to `deactivate`.

### Activate
`public void Activate()`

**Purpose:** Handles logic related to `activate`.

### Update
`public void Update(float dt)`

**Purpose:** Updates the state or data of `update`.

### LateUpdate
`public void LateUpdate(float dt)`

**Purpose:** Handles logic related to `late update`.

### RenderTick
`public void RenderTick(float dt)`

**Purpose:** Handles logic related to `render tick`.

### OnOnScreenkeyboardTextInputDone
`public void OnOnScreenkeyboardTextInputDone(string inputText)`

**Purpose:** Called when the `on screenkeyboard text input done` event is raised.

### InitializeGamepadNavigation
`public void InitializeGamepadNavigation(IGamepadNavigationContext context)`

**Purpose:** Initializes the state, resources, or bindings for `gamepad navigation`.

### OnOnScreenKeyboardCanceled
`public void OnOnScreenKeyboardCanceled()`

**Purpose:** Called when the `on screen keyboard canceled` event is raised.

### HitTest
`public bool HitTest(Widget root, Vector2 position)`

**Purpose:** Handles logic related to `hit test`.

### HitTest
`public bool HitTest(Widget root)`

**Purpose:** Handles logic related to `hit test`.

### FocusTest
`public bool FocusTest(Widget root)`

**Purpose:** Handles logic related to `focus test`.

### SetIsMouseEnabled
`public void SetIsMouseEnabled(bool isMouseEnabled)`

**Purpose:** Sets the value or state of `is mouse enabled`.

### UpdateInput
`public void UpdateInput(InputType handleInputs)`

**Purpose:** Updates the state or data of `input`.

### OnMovieLoaded
`public void OnMovieLoaded(string movieName)`

**Purpose:** Called when the `movie loaded` event is raised.

### OnMovieReleased
`public void OnMovieReleased(string movieName)`

**Purpose:** Called when the `movie released` event is raised.

### CancelMouseClick
`public void CancelMouseClick()`

**Purpose:** Checks whether the current object can `cel mouse click`.

### DrawWidgetDebugInfo
`public void DrawWidgetDebugInfo()`

**Purpose:** Handles logic related to `draw widget debug info`.

## Usage Example

```csharp
var value = new UIContext();
value.DebugDraw();
```

## See Also

- [Complete Class Catalog](../catalog)