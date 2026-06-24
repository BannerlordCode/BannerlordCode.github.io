<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ModuleInfoModelExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ModuleInfoModelExtensions

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ModuleInfoModelExtensions`
**Area:** mission-ext

## Overview

`ModuleInfoModelExtensions` lives in `TaleWorlds.MountAndBlade.Diamond`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsCompatibleWith
`public static bool IsCompatibleWith(this IEnumerable<ModuleInfoModel> a, IEnumerable<ModuleInfoModel> b, bool allowOptionalModules)`

**Purpose:** Handles logic related to `is compatible with`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
ModuleInfoModelExtensions.IsCompatibleWith(a, b, false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
