---
title: "IThumbnailCache"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IThumbnailCache`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IThumbnailCache

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/IThumbnailCache.cs`

## Overview

`IThumbnailCache` lives in `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
IThumbnailCache implementation = GetThumbnailCacheImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)