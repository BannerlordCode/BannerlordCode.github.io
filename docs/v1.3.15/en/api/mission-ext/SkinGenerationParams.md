<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkinGenerationParams`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SkinGenerationParams

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct SkinGenerationParams`
**Area:** mission-ext

## Overview

`SkinGenerationParams` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Create
`public static SkinGenerationParams Create()`

**Purpose:** Creates a new `create` instance or object.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
SkinGenerationParams.Create();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
