<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextDrawObject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextDrawObject

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct TextDrawObject : IDrawObject`
**Base:** `IDrawObject`
**Area:** campaign-ext

## Overview

`TextDrawObject` lives in `TaleWorlds.TwoDimension`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Invalid` | `public static TextDrawObject Invalid { get; }` |

## Key Methods

### Create
`public static TextDrawObject Create(float vertices, float uvs, uint indices, float text_MeshWidth, float text_MeshHeight, in Rectangle2D rectangle)`

**Purpose:** Creates a new `create` instance or object.

### ConvertToHashInPlace
`public void ConvertToHashInPlace()`

**Purpose:** Handles logic related to `convert to hash in place`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
TextDrawObject.Create(0, 0, 0, 0, 0, rectangle);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
