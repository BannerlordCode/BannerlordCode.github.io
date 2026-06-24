<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ContainerType`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ContainerType

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `internal enum ContainerType`
**Area:** save-system

## Overview

`ContainerType` lives in `TaleWorlds.GauntletUI`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Update` |
| `ParallelUpdate` |
| `LateUpdate` |
| `VisualDefinition` |

## Usage Example

```csharp
ContainerType example = ContainerType.Update;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
