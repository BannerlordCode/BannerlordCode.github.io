---
title: "GraphicsForm"
description: "Auto-generated class reference for GraphicsForm."
---
# GraphicsForm

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class GraphicsForm : IMessageCommunicator`
**Base:** `IMessageCommunicator`
**File:** `TaleWorlds.TwoDimension.Standalone/GraphicsForm.cs`

## Overview

`GraphicsForm` lives in `TaleWorlds.TwoDimension.Standalone` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GraphicsContext` | `public GraphicsContext GraphicsContext { get; }` |
| `Width` | `public int Width { get; }` |
| `Height` | `public int Height { get; }` |

## Key Methods

### CompareRecrangles
`public bool CompareRecrangles(DXGI.RECT Rect1, DXGI.RECT Rect2)`

**Purpose:** **Purpose:** Compares two recrangles objects and returns an ordering result.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
var result = graphicsForm.CompareRecrangles(rect1, rect2);
```

### DecideWindowPosition
`public DXGI.RECT DecideWindowPosition()`

**Purpose:** **Purpose:** Executes the DecideWindowPosition logic.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
var result = graphicsForm.DecideWindowPosition();
```

### Destroy
`public void Destroy()`

**Purpose:** **Purpose:** Executes the Destroy logic.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
graphicsForm.Destroy();
```

### MinimizeWindow
`public void MinimizeWindow()`

**Purpose:** **Purpose:** Executes the MinimizeWindow logic.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
graphicsForm.MinimizeWindow();
```

### InitializeGraphicsContext
`public void InitializeGraphicsContext(ResourceDepot resourceDepot)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by graphics context.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
graphicsForm.InitializeGraphicsContext(resourceDepot);
```

### BeginFrame
`public void BeginFrame()`

**Purpose:** **Purpose:** Executes the BeginFrame logic.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
graphicsForm.BeginFrame();
```

### Update
`public void Update()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
graphicsForm.Update();
```

### MessageLoop
`public void MessageLoop()`

**Purpose:** **Purpose:** Executes the MessageLoop logic.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
graphicsForm.MessageLoop();
```

### UpdateInput
`public void UpdateInput(bool mouseOverDragArea = false)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of input.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
graphicsForm.UpdateInput(false);
```

### PostRender
`public void PostRender()`

**Purpose:** **Purpose:** Executes the PostRender logic.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
graphicsForm.PostRender();
```

### GetKeyDown
`public bool GetKeyDown(InputKey keyCode)`

**Purpose:** **Purpose:** Reads and returns the key down value held by the this instance.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
var result = graphicsForm.GetKeyDown(keyCode);
```

### GetKey
`public bool GetKey(InputKey keyCode)`

**Purpose:** **Purpose:** Reads and returns the key value held by the this instance.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
var result = graphicsForm.GetKey(keyCode);
```

### GetKeyUp
`public bool GetKeyUp(InputKey keyCode)`

**Purpose:** **Purpose:** Reads and returns the key up value held by the this instance.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
var result = graphicsForm.GetKeyUp(keyCode);
```

### GetMouseDeltaZ
`public float GetMouseDeltaZ()`

**Purpose:** **Purpose:** Reads and returns the mouse delta z value held by the this instance.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
var result = graphicsForm.GetMouseDeltaZ();
```

### LeftMouse
`public bool LeftMouse()`

**Purpose:** **Purpose:** Executes the LeftMouse logic.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
var result = graphicsForm.LeftMouse();
```

### LeftMouseDown
`public bool LeftMouseDown()`

**Purpose:** **Purpose:** Executes the LeftMouseDown logic.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
var result = graphicsForm.LeftMouseDown();
```

### LeftMouseUp
`public bool LeftMouseUp()`

**Purpose:** **Purpose:** Executes the LeftMouseUp logic.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
var result = graphicsForm.LeftMouseUp();
```

### RightMouse
`public bool RightMouse()`

**Purpose:** **Purpose:** Executes the RightMouse logic.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
var result = graphicsForm.RightMouse();
```

### RightMouseDown
`public bool RightMouseDown()`

**Purpose:** **Purpose:** Executes the RightMouseDown logic.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
var result = graphicsForm.RightMouseDown();
```

### RightMouseUp
`public bool RightMouseUp()`

**Purpose:** **Purpose:** Executes the RightMouseUp logic.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
var result = graphicsForm.RightMouseUp();
```

### MousePosition
`public Vector2 MousePosition()`

**Purpose:** **Purpose:** Executes the MousePosition logic.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
var result = graphicsForm.MousePosition();
```

### MouseMove
`public bool MouseMove()`

**Purpose:** **Purpose:** Executes the MouseMove logic.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
var result = graphicsForm.MouseMove();
```

### FillInputDataFromCurrent
`public void FillInputDataFromCurrent(InputData inputData)`

**Purpose:** **Purpose:** Executes the FillInputDataFromCurrent logic.

```csharp
// Obtain an instance of GraphicsForm from the subsystem API first
GraphicsForm graphicsForm = ...;
graphicsForm.FillInputDataFromCurrent(inputData);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GraphicsForm graphicsForm = ...;
graphicsForm.CompareRecrangles(rect1, rect2);
```

## See Also

- [Area Index](../)