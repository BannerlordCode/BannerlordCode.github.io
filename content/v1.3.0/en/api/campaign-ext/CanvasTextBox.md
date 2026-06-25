---
title: "CanvasTextBox"
description: "Auto-generated class reference for CanvasTextBox."
---
# CanvasTextBox

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CanvasTextBox : CanvasElement`
**Base:** `CanvasElement`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/CanvasTextBox.cs`

## Overview

`CanvasTextBox` lives in `TaleWorlds.GauntletUI.Canvas` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Canvas` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### LoadFrom
`public override void LoadFrom(XmlNode canvasTextNode)`

**Purpose:** Reads from from persistent storage or a stream.

```csharp
// Obtain an instance of CanvasTextBox from the subsystem API first
CanvasTextBox canvasTextBox = ...;
canvasTextBox.LoadFrom(canvasTextNode);
```

### GetVerticalPositionOf
`public float GetVerticalPositionOf(int index)`

**Purpose:** Reads and returns the vertical position of value held by the this instance.

```csharp
// Obtain an instance of CanvasTextBox from the subsystem API first
CanvasTextBox canvasTextBox = ...;
var result = canvasTextBox.GetVerticalPositionOf(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CanvasTextBox canvasTextBox = ...;
canvasTextBox.LoadFrom(canvasTextNode);
```

## See Also

- [Area Index](../)