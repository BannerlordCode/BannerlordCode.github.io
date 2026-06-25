---
title: "SittableType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SittableType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SittableType

**Namespace:** SandBox.Objects.Usables
**Module:** SandBox.Objects
**Type:** `public enum SittableType`
**Area:** campaign-ext

## Overview

`SittableType` lives in `SandBox.Objects.Usables`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.Objects.Usables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Chair` |
| `Log` |
| `Sofa` |

## Usage Example

```csharp
SittableType example = SittableType.Chair;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
