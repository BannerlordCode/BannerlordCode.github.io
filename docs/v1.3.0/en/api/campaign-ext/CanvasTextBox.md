<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CanvasTextBox`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Loads `from` data.

### GetVerticalPositionOf
`public float GetVerticalPositionOf(int index)`

**Purpose:** Gets the current value of `vertical position of`.

## Usage Example

```csharp
var value = new CanvasTextBox();
value.LoadFrom(canvasTextNode);
```

## See Also

- [Complete Class Catalog](../catalog)