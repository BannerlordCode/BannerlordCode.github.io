---
title: "GenderEnum"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GenderEnum`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GenderEnum

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public enum GenderEnum`
**Area:** campaign-ext

## Overview

`GenderEnum` lives in `SandBox.View.Missions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.View.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Male` |
| `1` |
| `Unisex` |

## Usage Example

```csharp
GenderEnum example = GenderEnum.Male;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
