<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NavigationState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NavigationState

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public enum NavigationState`
**Area:** campaign-ext

## Overview

`NavigationState` lives in `SandBox`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `NoTarget` |
| `GoToTarget` |
| `AtTargetPosition` |

## Usage Example

```csharp
NavigationState example = NavigationState.NoTarget;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
