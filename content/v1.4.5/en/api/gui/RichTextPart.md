---
title: "RichTextPart"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RichTextPart`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RichTextPart

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class RichTextPart`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/RichTextPart.cs`

## Overview

`RichTextPart` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Style` | `public string Style { get; set; }` |
| `ImageDrawObject` | `public ImageDrawObject ImageDrawObject { get; set; }` |
| `TextDrawObject` | `public TextDrawObject TextDrawObject { get; set; }` |
| `DefaultFont` | `public Font DefaultFont { get; set; }` |
| `WordWidth` | `public float WordWidth { get; set; }` |
| `PartPosition` | `public Vector2 PartPosition { get; set; }` |
| `Sprite` | `public Sprite Sprite { get; set; }` |
| `SpritePosition` | `public Vector2 SpritePosition { get; set; }` |
| `Type` | `public RichTextPartType Type { get; set; }` |
| `Extend` | `public float Extend { get; set; }` |

## Usage Example

```csharp
var example = new RichTextPart();
```

## See Also

- [Complete Class Catalog](../catalog)