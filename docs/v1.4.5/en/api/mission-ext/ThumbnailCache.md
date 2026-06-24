<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ThumbnailCache`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ThumbnailCache

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ThumbnailCache<T> : IThumbnailCache where T : ThumbnailCreationData`
**Base:** `IThumbnailCache where T : ThumbnailCreationData`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/ThumbnailCache.cs`

## Overview

`ThumbnailCache` lives in `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Count` | `public int Count { get; }` |

## Key Methods

### CreateTexture
`public TextureCreationInfo CreateTexture(ThumbnailCreationData thumbnailCreationData)`

**Purpose:** Creates a new `texture` instance or object.

### ReleaseTexture
`public bool ReleaseTexture(ThumbnailCreationData thumbnailCreationData)`

**Purpose:** Handles logic related to `release texture`.

## Usage Example

```csharp
var implementation = new CustomThumbnailCache();
```

## See Also

- [Complete Class Catalog](../catalog)