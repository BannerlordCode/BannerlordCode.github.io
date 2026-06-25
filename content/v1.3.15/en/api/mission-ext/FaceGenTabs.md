---
title: "FaceGenTabs"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FaceGenTabs`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FaceGenTabs

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum FaceGenTabs`
**Area:** mission-ext

## Overview

`FaceGenTabs` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `1` |
| `Body` |
| `Face` |
| `Eyes` |
| `Nose` |
| `Mouth` |
| `Hair` |
| `Taint` |

## Usage Example

```csharp
FaceGenTabs example = FaceGenTabs.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
