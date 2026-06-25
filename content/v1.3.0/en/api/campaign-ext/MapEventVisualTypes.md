---
title: "MapEventVisualTypes"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEventVisualTypes`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapEventVisualTypes

**Namespace:** SandBox.ViewModelCollection
**Module:** SandBox.ViewModelCollection
**Type:** `public enum MapEventVisualTypes`
**Area:** campaign-ext

## Overview

`MapEventVisualTypes` lives in `SandBox.ViewModelCollection`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `Raid` |
| `Siege` |
| `Battle` |
| `Rebellion` |

## Usage Example

```csharp
MapEventVisualTypes example = MapEventVisualTypes.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
