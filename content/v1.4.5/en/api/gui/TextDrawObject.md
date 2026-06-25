---
title: "TextDrawObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextDrawObject`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TextDrawObject

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct TextDrawObject : IDrawObject`
**Base:** `IDrawObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/TextDrawObject.cs`

## Overview

`TextDrawObject` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Create
`public static TextDrawObject Create(float vertices, float uvs, uint indices, float text_MeshWidth, float text_MeshHeight, in Rectangle2D rectangle)`

**Purpose:** Creates a new `create` instance or object.

### ConvertToHashInPlace
`public void ConvertToHashInPlace()`

**Purpose:** Handles logic related to `convert to hash in place`.

## Usage Example

```csharp
TextDrawObject.Create(0, 0, 0, 0, 0, rectangle);
```

## See Also

- [Complete Class Catalog](../catalog)