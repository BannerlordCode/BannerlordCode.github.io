<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AvatarThumbnailCache`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AvatarThumbnailCache

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AvatarThumbnailCache : ThumbnailCache<AvatarThumbnailCreationData>`
**Base:** `ThumbnailCache<AvatarThumbnailCreationData>`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/AvatarThumbnailCache.cs`

## Overview

`AvatarThumbnailCache` lives in `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static AvatarThumbnailCache Current { get; }` |

## Key Methods

### FlushCache
`public void FlushCache()`

**Purpose:** Handles logic related to `flush cache`.

## Usage Example

```csharp
var value = new AvatarThumbnailCache();
value.FlushCache();
```

## See Also

- [Complete Class Catalog](../catalog)