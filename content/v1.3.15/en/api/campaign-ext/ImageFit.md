---
title: "ImageFit"
description: "Auto-generated class reference for ImageFit."
---
# ImageFit

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ImageFit`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/ImageFit.cs`

## Overview

`ImageFit` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public ImageFit.ImageFitTypes Type { get; set; }` |
| `HorizontalAlignment` | `public ImageFit.ImageHorizontalAlignments HorizontalAlignment { get; set; }` |
| `VerticalAlignment` | `public ImageFit.ImageVerticalAlignments VerticalAlignment { get; set; }` |
| `OffsetX` | `public float OffsetX { get; set; }` |
| `OffsetY` | `public float OffsetY { get; set; }` |

## Key Methods

### GetFittedRectangle
`public ImageFitResult GetFittedRectangle(in Vector2 containerSize, in Vector2 imageSize)`

**Purpose:** Reads and returns the `fitted rectangle` value held by the current object.

```csharp
// Obtain an instance of ImageFit from the subsystem API first
ImageFit imageFit = ...;
var result = imageFit.GetFittedRectangle(containerSize, imageSize);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ImageFit imageFit = ...;
imageFit.GetFittedRectangle(containerSize, imageSize);
```

## See Also

- [Area Index](../)