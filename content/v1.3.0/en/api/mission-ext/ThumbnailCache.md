---
title: "ThumbnailCache"
description: "Auto-generated class reference for ThumbnailCache."
---
# ThumbnailCache

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ThumbnailCache<T> : IThumbnailCache where T : ThumbnailCreationData`
**Base:** `IThumbnailCache where T : ThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ThumbnailCache.cs`

## Overview

`ThumbnailCache` lives in `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Count` | `public int Count { get; }` |
| `RenderCallbackCount` | `public int RenderCallbackCount { get; }` |

## Key Methods

### CreateTexture
`public virtual Texture CreateTexture(ThumbnailCreationData thumbnailCreationData)`

**Purpose:** Constructs a new `texture` entity and returns it to the caller.

```csharp
// Obtain an instance of ThumbnailCache from the subsystem API first
ThumbnailCache thumbnailCache = ...;
var result = thumbnailCache.CreateTexture(thumbnailCreationData);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ThumbnailCache instance = ...;
```

## See Also

- [Area Index](../)