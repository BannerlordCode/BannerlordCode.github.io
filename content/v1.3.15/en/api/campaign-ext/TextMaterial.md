---
title: "TextMaterial"
description: "Auto-generated class reference for TextMaterial."
---
# TextMaterial

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class TextMaterial : Material`
**Base:** `Material`
**File:** `TaleWorlds.TwoDimension/TextMaterial.cs`

## Overview

`TextMaterial` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; set; }` |
| `Color` | `public Color Color { get; set; }` |
| `SmoothingConstant` | `public float SmoothingConstant { get; set; }` |
| `Smooth` | `public bool Smooth { get; set; }` |
| `ScaleFactor` | `public float ScaleFactor { get; set; }` |
| `GlowColor` | `public Color GlowColor { get; set; }` |
| `OutlineColor` | `public Color OutlineColor { get; set; }` |
| `OutlineAmount` | `public float OutlineAmount { get; set; }` |
| `GlowRadius` | `public float GlowRadius { get; set; }` |
| `Blur` | `public float Blur { get; set; }` |
| `ShadowOffset` | `public float ShadowOffset { get; set; }` |
| `ShadowAngle` | `public float ShadowAngle { get; set; }` |
| `ColorFactor` | `public float ColorFactor { get; set; }` |
| `AlphaFactor` | `public float AlphaFactor { get; set; }` |
| `HueFactor` | `public float HueFactor { get; set; }` |
| `SaturationFactor` | `public float SaturationFactor { get; set; }` |
| `ValueFactor` | `public float ValueFactor { get; set; }` |

## Key Methods

### CopyFrom
`public void CopyFrom(TextMaterial sourceMaterial)`

**Purpose:** **Purpose:** Copies the from state of the this instance to a target.

```csharp
// Obtain an instance of TextMaterial from the subsystem API first
TextMaterial textMaterial = ...;
textMaterial.CopyFrom(sourceMaterial);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TextMaterial textMaterial = ...;
textMaterial.CopyFrom(sourceMaterial);
```

## See Also

- [Area Index](../)