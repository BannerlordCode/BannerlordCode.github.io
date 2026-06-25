---
title: "ItemPlacements"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemPlacements`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ItemPlacements

**Namespace:** SandBox.ViewModelCollection.Tutorial
**Module:** SandBox.ViewModelCollection
**Type:** `public enum ItemPlacements`
**Area:** campaign-ext

## Overview

`ItemPlacements` lives in `SandBox.ViewModelCollection.Tutorial`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Left` |
| `Right` |
| `Top` |
| `Bottom` |
| `TopLeft` |
| `TopRight` |
| `BottomLeft` |
| `BottomRight` |

## Usage Example

```csharp
ItemPlacements example = ItemPlacements.Left;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
