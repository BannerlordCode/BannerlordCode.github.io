<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NodeComparer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NodeComparer

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NodeComparer : IComparer<ThumbnailCacheNode>`
**Base:** `IComparer<ThumbnailCacheNode>`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/NodeComparer.cs`

## Overview

`NodeComparer` lives in `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(ThumbnailCacheNode x, ThumbnailCacheNode y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new NodeComparer();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)