---
title: "ImageDrawObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ImageDrawObject`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ImageDrawObject

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct ImageDrawObject : IDrawObject`
**Base:** `IDrawObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/ImageDrawObject.cs`

## Overview

`ImageDrawObject` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Create
`public static ImageDrawObject Create(in Rectangle2D rectangle, in Vec2 uvMin, in Vec2 uvMax)`

**Purpose:** Creates a new `create` instance or object.

## Usage Example

```csharp
ImageDrawObject.Create(rectangle, uvMin, uvMax);
```

## See Also

- [Complete Class Catalog](../catalog)