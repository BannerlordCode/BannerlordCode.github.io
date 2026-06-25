---
title: "TwoDimensionContext"
description: "Auto-generated class reference for TwoDimensionContext."
---
# TwoDimensionContext

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class TwoDimensionContext`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/TwoDimensionContext.cs`

## Overview

`TwoDimensionContext` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Platform` | `public ITwoDimensionPlatform Platform { get; }` |
| `ResourceContext` | `public ITwoDimensionResourceContext ResourceContext { get; }` |
| `ResourceDepot` | `public ResourceDepot ResourceDepot { get; }` |

## Key Methods

### PlaySound
`public void PlaySound(string soundName)`

**Purpose:** Executes the PlaySound logic.

```csharp
// Obtain an instance of TwoDimensionContext from the subsystem API first
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.PlaySound("example");
```

### CreateSoundEvent
`public void CreateSoundEvent(string soundName)`

**Purpose:** Constructs a new sound event entity and returns it to the caller.

```csharp
// Obtain an instance of TwoDimensionContext from the subsystem API first
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.CreateSoundEvent("example");
```

### StopAndRemoveSoundEvent
`public void StopAndRemoveSoundEvent(string soundName)`

**Purpose:** Stops the and remove sound event flow or state machine.

```csharp
// Obtain an instance of TwoDimensionContext from the subsystem API first
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.StopAndRemoveSoundEvent("example");
```

### PlaySoundEvent
`public void PlaySoundEvent(string soundName)`

**Purpose:** Executes the PlaySoundEvent logic.

```csharp
// Obtain an instance of TwoDimensionContext from the subsystem API first
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.PlaySoundEvent("example");
```

### DrawImage
`public void DrawImage(SimpleMaterial material, in ImageDrawObject drawObject2D, int layer = 0)`

**Purpose:** Executes the DrawImage logic.

```csharp
// Obtain an instance of TwoDimensionContext from the subsystem API first
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.DrawImage(material, drawObject2D, 0);
```

### DrawText
`public void DrawText(TextMaterial material, in TextDrawObject drawObject2D, int layer = 0)`

**Purpose:** Executes the DrawText logic.

```csharp
// Obtain an instance of TwoDimensionContext from the subsystem API first
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.DrawText(material, drawObject2D, 0);
```

### BeginDebugPanel
`public void BeginDebugPanel(string panelTitle)`

**Purpose:** Executes the BeginDebugPanel logic.

```csharp
// Obtain an instance of TwoDimensionContext from the subsystem API first
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.BeginDebugPanel("example");
```

### EndDebugPanel
`public void EndDebugPanel()`

**Purpose:** Executes the EndDebugPanel logic.

```csharp
// Obtain an instance of TwoDimensionContext from the subsystem API first
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.EndDebugPanel();
```

### DrawDebugText
`public void DrawDebugText(string text)`

**Purpose:** Executes the DrawDebugText logic.

```csharp
// Obtain an instance of TwoDimensionContext from the subsystem API first
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.DrawDebugText("example");
```

### DrawDebugTreeNode
`public bool DrawDebugTreeNode(string text)`

**Purpose:** Executes the DrawDebugTreeNode logic.

```csharp
// Obtain an instance of TwoDimensionContext from the subsystem API first
TwoDimensionContext twoDimensionContext = ...;
var result = twoDimensionContext.DrawDebugTreeNode("example");
```

### PopDebugTreeNode
`public void PopDebugTreeNode()`

**Purpose:** Executes the PopDebugTreeNode logic.

```csharp
// Obtain an instance of TwoDimensionContext from the subsystem API first
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.PopDebugTreeNode();
```

### DrawCheckbox
`public void DrawCheckbox(string label, ref bool isChecked)`

**Purpose:** Executes the DrawCheckbox logic.

```csharp
// Obtain an instance of TwoDimensionContext from the subsystem API first
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.DrawCheckbox("example", isChecked);
```

### IsDebugItemHovered
`public bool IsDebugItemHovered()`

**Purpose:** Determines whether the this instance is in the debug item hovered state or condition.

```csharp
// Obtain an instance of TwoDimensionContext from the subsystem API first
TwoDimensionContext twoDimensionContext = ...;
var result = twoDimensionContext.IsDebugItemHovered();
```

### LoadTexture
`public Texture LoadTexture(string name)`

**Purpose:** Reads texture from persistent storage or a stream.

```csharp
// Obtain an instance of TwoDimensionContext from the subsystem API first
TwoDimensionContext twoDimensionContext = ...;
var result = twoDimensionContext.LoadTexture("example");
```

### SetScissor
`public void SetScissor(ScissorTestInfo scissor)`

**Purpose:** Assigns a new value to scissor and updates the object's internal state.

```csharp
// Obtain an instance of TwoDimensionContext from the subsystem API first
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.SetScissor(scissor);
```

### ResetScissor
`public void ResetScissor()`

**Purpose:** Returns scissor to its default or initial condition.

```csharp
// Obtain an instance of TwoDimensionContext from the subsystem API first
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.ResetScissor();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.PlaySound("example");
```

## See Also

- [Area Index](../)