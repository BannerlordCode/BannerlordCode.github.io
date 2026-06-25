---
title: "UIContext"
description: "Auto-generated class reference for UIContext."
---
# UIContext

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class UIContext`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/UIContext.cs`

## Overview

`UIContext` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveCursorOfContext` | `public UIContext.MouseCursors ActiveCursorOfContext { get; set; }` |
| `IsDynamicScaleEnabled` | `public bool IsDynamicScaleEnabled { get; }` |
| `ScaleModifier` | `public float ScaleModifier { get; }` |
| `ContextAlpha` | `public float ContextAlpha { get; }` |
| `Scale` | `public float Scale { get; }` |
| `CustomScale` | `public float CustomScale { get; }` |
| `CustomInverseScale` | `public float CustomInverseScale { get; }` |
| `CurrentLanugageCode` | `public string CurrentLanugageCode { get; }` |
| `UIRandom` | `public Random UIRandom { get; }` |
| `InverseScale` | `public float InverseScale { get; }` |
| `EventManager` | `public EventManager EventManager { get; }` |
| `Root` | `public Widget Root { get; }` |
| `ResourceDepot` | `public ResourceDepot ResourceDepot { get; }` |
| `TwoDimensionContext` | `public TwoDimensionContext TwoDimensionContext { get; }` |
| `Brushes` | `public IEnumerable<Brush> Brushes { get; }` |
| `DefaultBrush` | `public Brush DefaultBrush { get; }` |
| `SpriteData` | `public SpriteData SpriteData { get; }` |
| `BrushFactory` | `public BrushFactory BrushFactory { get; }` |
| `FontFactory` | `public FontFactory FontFactory { get; }` |
| `InputContext` | `public IReadonlyInputContext InputContext { get; }` |
| `GamepadNavigation` | `public IGamepadNavigationContext GamepadNavigation { get; }` |
| `LocalFrameNumber` | `public ulong LocalFrameNumber { get; }` |

## Key Methods

### GetBrush
`public Brush GetBrush(string name)`

**Purpose:** Reads and returns the brush value held by the this instance.

```csharp
// Obtain an instance of UIContext from the subsystem API first
UIContext uIContext = ...;
var result = uIContext.GetBrush("example");
```

### RefreshResources
`public void RefreshResources(SpriteData spriteData, FontFactory fontFactory, BrushFactory brushFactory)`

**Purpose:** Keeps the display or cache of resources in sync with the underlying state.

```csharp
// Obtain an instance of UIContext from the subsystem API first
UIContext uIContext = ...;
uIContext.RefreshResources(spriteData, fontFactory, brushFactory);
```

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of UIContext from the subsystem API first
UIContext uIContext = ...;
uIContext.Initialize();
```

### InitializeGamepadNavigation
`public void InitializeGamepadNavigation(IGamepadNavigationContext context)`

**Purpose:** Prepares the resources, state, or bindings required by gamepad navigation.

```csharp
// Obtain an instance of UIContext from the subsystem API first
UIContext uIContext = ...;
uIContext.InitializeGamepadNavigation(context);
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of UIContext from the subsystem API first
UIContext uIContext = ...;
uIContext.OnFinalize();
```

### Update
`public void Update(float dt)`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of UIContext from the subsystem API first
UIContext uIContext = ...;
uIContext.Update(0);
```

### LateUpdate
`public void LateUpdate(float dt)`

**Purpose:** Executes the LateUpdate logic.

```csharp
// Obtain an instance of UIContext from the subsystem API first
UIContext uIContext = ...;
uIContext.LateUpdate(0);
```

### RenderTick
`public void RenderTick(float dt)`

**Purpose:** Executes the RenderTick logic.

```csharp
// Obtain an instance of UIContext from the subsystem API first
UIContext uIContext = ...;
uIContext.RenderTick(0);
```

### OnOnScreenkeyboardTextInputDone
`public void OnOnScreenkeyboardTextInputDone(string inputText)`

**Purpose:** Invoked when the on screenkeyboard text input done event is raised.

```csharp
// Obtain an instance of UIContext from the subsystem API first
UIContext uIContext = ...;
uIContext.OnOnScreenkeyboardTextInputDone("example");
```

### OnOnScreenKeyboardCanceled
`public void OnOnScreenKeyboardCanceled()`

**Purpose:** Invoked when the on screen keyboard canceled event is raised.

```csharp
// Obtain an instance of UIContext from the subsystem API first
UIContext uIContext = ...;
uIContext.OnOnScreenKeyboardCanceled();
```

### HitTest
`public bool HitTest(Widget root, Vector2 position)`

**Purpose:** Executes the HitTest logic.

```csharp
// Obtain an instance of UIContext from the subsystem API first
UIContext uIContext = ...;
var result = uIContext.HitTest(root, position);
```

### HitTest
`public bool HitTest(Widget root)`

**Purpose:** Executes the HitTest logic.

```csharp
// Obtain an instance of UIContext from the subsystem API first
UIContext uIContext = ...;
var result = uIContext.HitTest(root);
```

### FocusTest
`public bool FocusTest(Widget root)`

**Purpose:** Executes the FocusTest logic.

```csharp
// Obtain an instance of UIContext from the subsystem API first
UIContext uIContext = ...;
var result = uIContext.FocusTest(root);
```

### SetIsMouseEnabled
`public void SetIsMouseEnabled(bool isMouseEnabled)`

**Purpose:** Assigns a new value to is mouse enabled and updates the object's internal state.

```csharp
// Obtain an instance of UIContext from the subsystem API first
UIContext uIContext = ...;
uIContext.SetIsMouseEnabled(false);
```

### UpdateInput
`public void UpdateInput(InputType handleInputs)`

**Purpose:** Recalculates and stores the latest representation of input.

```csharp
// Obtain an instance of UIContext from the subsystem API first
UIContext uIContext = ...;
uIContext.UpdateInput(handleInputs);
```

### OnMovieLoaded
`public void OnMovieLoaded(string movieName)`

**Purpose:** Invoked when the movie loaded event is raised.

```csharp
// Obtain an instance of UIContext from the subsystem API first
UIContext uIContext = ...;
uIContext.OnMovieLoaded("example");
```

### OnMovieReleased
`public void OnMovieReleased(string movieName)`

**Purpose:** Invoked when the movie released event is raised.

```csharp
// Obtain an instance of UIContext from the subsystem API first
UIContext uIContext = ...;
uIContext.OnMovieReleased("example");
```

### DrawWidgetDebugInfo
`public void DrawWidgetDebugInfo()`

**Purpose:** Executes the DrawWidgetDebugInfo logic.

```csharp
// Obtain an instance of UIContext from the subsystem API first
UIContext uIContext = ...;
uIContext.DrawWidgetDebugInfo();
```

### DebugDraw
`public void DebugDraw()`

**Purpose:** Executes the DebugDraw logic.

```csharp
// Obtain an instance of UIContext from the subsystem API first
UIContext uIContext = ...;
uIContext.DebugDraw();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
UIContext uIContext = ...;
uIContext.GetBrush("example");
```

## See Also

- [Area Index](../)