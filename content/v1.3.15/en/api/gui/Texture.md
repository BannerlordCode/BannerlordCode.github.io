---
title: "Texture"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Texture`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Texture

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class Texture`
**Base:** none
**File:** `TaleWorlds.TwoDimension/Texture.cs`

## Overview

`Texture` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlatformTexture` | `public ITexture PlatformTexture { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `Width` | `public int Width { get; }` |
| `Height` | `public int Height { get; }` |

## Key Methods

### IsLoaded
`public bool IsLoaded()`

**Purpose:** Handles logic related to `is loaded`.

## Usage Example

```csharp
var value = new Texture();
value.IsLoaded();
```

## See Also

- [Complete Class Catalog](../catalog)