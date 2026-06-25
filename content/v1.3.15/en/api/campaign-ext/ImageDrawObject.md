---
title: "ImageDrawObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ImageDrawObject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ImageDrawObject

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct ImageDrawObject : IDrawObject`
**Base:** `IDrawObject`
**Area:** campaign-ext

## Overview

`ImageDrawObject` lives in `TaleWorlds.TwoDimension`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Invalid` | `public static ImageDrawObject Invalid { get; }` |

## Key Methods

### Create
`public static ImageDrawObject Create(in Rectangle2D rectangle, in Vec2 uvMin, in Vec2 uvMax)`

**Purpose:** Creates a new `create` instance or object.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
ImageDrawObject.Create(rectangle, uvMin, uvMax);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
