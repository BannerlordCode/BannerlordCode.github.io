<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AssemblyLoadResult`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AssemblyLoadResult

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public enum AssemblyLoadResult`
**Area:** core-extra

## Overview

`AssemblyLoadResult` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Success` |
| `LoadedWithErrors` |

## Usage Example

```csharp
AssemblyLoadResult example = AssemblyLoadResult.Success;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
