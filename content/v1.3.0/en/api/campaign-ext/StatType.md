---
title: "StatType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StatType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StatType

**Namespace:** SandBox.ViewModelCollection.GameOver
**Module:** SandBox.ViewModelCollection
**Type:** `public enum StatType`
**Area:** campaign-ext

## Overview

`StatType` lives in `SandBox.ViewModelCollection.GameOver`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.GameOver` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `Influence` |
| `Issue` |
| `Tournament` |
| `Gold` |
| `Crime` |

## Usage Example

```csharp
StatType example = StatType.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
