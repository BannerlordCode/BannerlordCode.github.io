---
title: "GraphicsForm"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GraphicsForm`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GraphicsForm

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class GraphicsForm : IMessageCommunicator`
**Base:** `IMessageCommunicator`
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/GraphicsForm.cs`

## Overview

`GraphicsForm` lives in `TaleWorlds.TwoDimension.Standalone` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GraphicsContext` | `public GraphicsContext GraphicsContext { get; }` |

## Key Methods

### CompareRecrangles
`public bool CompareRecrangles(DXGI.RECT Rect1, DXGI.RECT Rect2)`

**Purpose:** Handles logic related to `compare recrangles`.

### DecideWindowPosition
`public DXGI.RECT DecideWindowPosition()`

**Purpose:** Handles logic related to `decide window position`.

### Destroy
`public void Destroy()`

**Purpose:** Handles logic related to `destroy`.

### MinimizeWindow
`public void MinimizeWindow()`

**Purpose:** Handles logic related to `minimize window`.

### InitializeGraphicsContext
`public void InitializeGraphicsContext(ResourceDepot resourceDepot)`

**Purpose:** Initializes the state, resources, or bindings for `graphics context`.

### BeginFrame
`public void BeginFrame()`

**Purpose:** Handles logic related to `begin frame`.

### Update
`public void Update()`

**Purpose:** Updates the state or data of `update`.

### MessageLoop
`public void MessageLoop()`

**Purpose:** Handles logic related to `message loop`.

### UpdateInput
`public void UpdateInput(bool mouseOverDragArea = false)`

**Purpose:** Updates the state or data of `input`.

### PostRender
`public void PostRender()`

**Purpose:** Handles logic related to `post render`.

### GetKeyDown
`public bool GetKeyDown(InputKey keyCode)`

**Purpose:** Gets the current value of `key down`.

### GetKey
`public bool GetKey(InputKey keyCode)`

**Purpose:** Gets the current value of `key`.

### GetKeyUp
`public bool GetKeyUp(InputKey keyCode)`

**Purpose:** Gets the current value of `key up`.

### GetMouseDeltaZ
`public float GetMouseDeltaZ()`

**Purpose:** Gets the current value of `mouse delta z`.

### LeftMouse
`public bool LeftMouse()`

**Purpose:** Handles logic related to `left mouse`.

### LeftMouseDown
`public bool LeftMouseDown()`

**Purpose:** Handles logic related to `left mouse down`.

### LeftMouseUp
`public bool LeftMouseUp()`

**Purpose:** Handles logic related to `left mouse up`.

### RightMouse
`public bool RightMouse()`

**Purpose:** Handles logic related to `right mouse`.

### RightMouseDown
`public bool RightMouseDown()`

**Purpose:** Handles logic related to `right mouse down`.

### RightMouseUp
`public bool RightMouseUp()`

**Purpose:** Handles logic related to `right mouse up`.

### MousePosition
`public Vector2 MousePosition()`

**Purpose:** Handles logic related to `mouse position`.

### MouseMove
`public bool MouseMove()`

**Purpose:** Handles logic related to `mouse move`.

### FillInputDataFromCurrent
`public void FillInputDataFromCurrent(InputData inputData)`

**Purpose:** Handles logic related to `fill input data from current`.

## Usage Example

```csharp
var value = new GraphicsForm();
value.CompareRecrangles(rect1, rect2);
```

## See Also

- [Complete Class Catalog](../catalog)