---
title: "MapOverlayType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapOverlayType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapOverlayType

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public enum MapOverlayType`
**Area:** campaign-ext

## Overview

`MapOverlayType` lives in `SandBox.View.Map`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |

## Usage Example

```csharp
MapOverlayType example = MapOverlayType.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
