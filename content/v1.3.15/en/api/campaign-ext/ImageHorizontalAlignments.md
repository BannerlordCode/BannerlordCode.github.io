---
title: "ImageHorizontalAlignments"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ImageHorizontalAlignments`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ImageHorizontalAlignments

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public enum ImageHorizontalAlignments : byte`
**Base:** `byte`
**Area:** campaign-ext

## Overview

`ImageHorizontalAlignments` lives in `TaleWorlds.GauntletUI`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Left` |
| `Center` |

## Usage Example

```csharp
ImageHorizontalAlignments example = ImageHorizontalAlignments.Left;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
