---
title: "SkeletonHorse"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkeletonHorse`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SkeletonHorse

## Mental Model

Treat `SkeletonHorse` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Class Overview

| Item | Description |
|------|-------------|
| **Namespace** | TaleWorlds.MountAndBlade (Native Engine) |
| **File Path** | Native engine class, no C# source |

## Description

`SkeletonHorse` is a native engine class used for managing horse skeleton entities. This class is implemented in Bannerlord's native C++ engine and is not exposed in the decompiled C# source.

For horse skeleton functionality, consider:
- Using `HorseComponent` to manage horse data
- Using `Agent.Mount` related methods for mount operations
- Referencing `SkeletonScale` for skeleton scale system

## Related Classes

- `HorseComponent` - Horse data component
- `Agent` - Agent/unit base class
- `SkeletonScale` - Skeleton scale

## Usage Example

```csharp
var example = new SkeletonHorse();
```
