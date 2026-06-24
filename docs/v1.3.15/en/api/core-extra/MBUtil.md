<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBUtil`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBUtil

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class MBUtil`
**Area:** core-extra

## Overview

`MBUtil` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DirectoryCopy
`public static void DirectoryCopy(string sourceDirName, string destDirName, bool copySubDirs)`

**Purpose:** Handles logic related to `directory copy`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MBUtil.DirectoryCopy("example", "example", false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
