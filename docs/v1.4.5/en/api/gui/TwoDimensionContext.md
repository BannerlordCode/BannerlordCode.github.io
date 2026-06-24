<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TwoDimensionContext`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TwoDimensionContext

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class TwoDimensionContext`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/TwoDimensionContext.cs`

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

**Purpose:** Handles logic related to `play sound`.

### CreateSoundEvent
`public void CreateSoundEvent(string soundName)`

**Purpose:** Creates a new `sound event` instance or object.

### StopAndRemoveSoundEvent
`public void StopAndRemoveSoundEvent(string soundName)`

**Purpose:** Handles logic related to `stop and remove sound event`.

### PlaySoundEvent
`public void PlaySoundEvent(string soundName)`

**Purpose:** Handles logic related to `play sound event`.

### DrawImage
`public void DrawImage(SimpleMaterial material, in ImageDrawObject drawObject2D, int layer = 0)`

**Purpose:** Handles logic related to `draw image`.

### DrawText
`public void DrawText(TextMaterial material, in TextDrawObject drawObject2D, int layer = 0)`

**Purpose:** Handles logic related to `draw text`.

### BeginDebugPanel
`public void BeginDebugPanel(string panelTitle)`

**Purpose:** Handles logic related to `begin debug panel`.

### EndDebugPanel
`public void EndDebugPanel()`

**Purpose:** Handles logic related to `end debug panel`.

### DrawDebugText
`public void DrawDebugText(string text)`

**Purpose:** Handles logic related to `draw debug text`.

### DrawDebugTreeNode
`public bool DrawDebugTreeNode(string text)`

**Purpose:** Handles logic related to `draw debug tree node`.

### PopDebugTreeNode
`public void PopDebugTreeNode()`

**Purpose:** Handles logic related to `pop debug tree node`.

### DrawCheckbox
`public void DrawCheckbox(string label, ref bool isChecked)`

**Purpose:** Handles logic related to `draw checkbox`.

### IsDebugItemHovered
`public bool IsDebugItemHovered()`

**Purpose:** Handles logic related to `is debug item hovered`.

### LoadTexture
`public Texture LoadTexture(string name)`

**Purpose:** Loads `texture` data.

### SetScissor
`public void SetScissor(ScissorTestInfo scissor)`

**Purpose:** Sets the value or state of `scissor`.

### ResetScissor
`public void ResetScissor()`

**Purpose:** Resets `scissor` to its initial state.

## Usage Example

```csharp
var value = new TwoDimensionContext();
value.PlaySound("example");
```

## See Also

- [Complete Class Catalog](../catalog)