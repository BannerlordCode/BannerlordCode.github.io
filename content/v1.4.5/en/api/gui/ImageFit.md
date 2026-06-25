---
title: "ImageFit"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ImageFit`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ImageFit

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ImageFit`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/ImageFit.cs`

## Overview

`ImageFit` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public ImageFitTypes Type { get; set; }` |
| `HorizontalAlignment` | `public ImageHorizontalAlignments HorizontalAlignment { get; set; }` |
| `VerticalAlignment` | `public ImageVerticalAlignments VerticalAlignment { get; set; }` |
| `OffsetX` | `public float OffsetX { get; set; }` |
| `OffsetY` | `public float OffsetY { get; set; }` |

## Key Methods

### GetFittedRectangle
`public ImageFitResult GetFittedRectangle(in Vector2 containerSize, in Vector2 imageSize)`

**Purpose:** Gets the current value of `fitted rectangle`.

## Usage Example

```csharp
var value = new ImageFit();
value.GetFittedRectangle(containerSize, imageSize);
```

## See Also

- [Complete Class Catalog](../catalog)