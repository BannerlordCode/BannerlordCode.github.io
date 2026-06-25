---
title: "Icon"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Icon`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Icon

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum Icon : uint`
**Base:** `uint`
**Area:** mission-ext

## Overview

`Icon` lives in `TaleWorlds.MountAndBlade.Launcher.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `Information` |
| `64U` |
| `Warning` |
| `48U` |
| `Error` |
| `16U` |
| `Question` |

## Usage Example

```csharp
Icon example = Icon.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
