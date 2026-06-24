<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TeleportType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TeleportType

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public enum TeleportType`
**Area:** campaign-ext

## Overview

`TeleportType` lives in `SandBox.Objects`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Lair` |
| `Door` |

## Usage Example

```csharp
TeleportType example = TeleportType.Lair;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
