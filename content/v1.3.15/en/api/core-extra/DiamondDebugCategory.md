---
title: "DiamondDebugCategory"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DiamondDebugCategory`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DiamondDebugCategory

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public enum DiamondDebugCategory`
**Area:** core-extra

## Overview

`DiamondDebugCategory` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `General` |
| `Warning` |

## Usage Example

```csharp
DiamondDebugCategory example = DiamondDebugCategory.General;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
