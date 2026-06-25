---
title: "CanvasLineText"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CanvasLineText`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CanvasLineText

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CanvasLineText : CanvasLineElement`
**Base:** `CanvasLineElement`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/CanvasLineText.cs`

## Overview

`CanvasLineText` lives in `TaleWorlds.GauntletUI.Canvas` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Canvas` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Value` | `public string Value { get; set; }` |
| `FontSize` | `public float FontSize { get; set; }` |
| `FontColor` | `public Color FontColor { get; set; }` |

## Key Methods

### LoadFrom
`public void LoadFrom(XmlNode textNode)`

**Purpose:** Loads `from` data.

### Update
`public override void Update(float scale)`

**Purpose:** Updates the state or data of `update`.

## Usage Example

```csharp
var value = new CanvasLineText();
value.LoadFrom(textNode);
```

## See Also

- [Complete Class Catalog](../catalog)