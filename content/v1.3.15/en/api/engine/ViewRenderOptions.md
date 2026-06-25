---
title: "ViewRenderOptions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ViewRenderOptions`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ViewRenderOptions

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public enum ViewRenderOptions`
**Area:** engine

## Overview

`ViewRenderOptions` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `ClearColor` |

## Usage Example

```csharp
ViewRenderOptions example = ViewRenderOptions.ClearColor;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
