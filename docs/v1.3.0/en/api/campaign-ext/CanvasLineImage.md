<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CanvasLineImage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CanvasLineImage

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CanvasLineImage : CanvasLineElement`
**Base:** `CanvasLineElement`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/CanvasLineImage.cs`

## Overview

`CanvasLineImage` lives in `TaleWorlds.GauntletUI.Canvas` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Canvas` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Sprite` | `public Sprite Sprite { get; set; }` |

## Key Methods

### LoadFrom
`public void LoadFrom(XmlNode imageNode)`

**Purpose:** Loads `from` data.

## Usage Example

```csharp
var value = new CanvasLineImage();
value.LoadFrom(imageNode);
```

## See Also

- [Complete Class Catalog](../catalog)