---
title: "ManagedDllFolder"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedDllFolder`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedDllFolder

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class ManagedDllFolder`
**Area:** core-extra

## Overview

`ManagedDllFolder` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public static string Name { get; }` |

## Key Methods

### OverrideManagedDllFolder
`public static void OverrideManagedDllFolder(string overridenFolder)`

**Purpose:** Handles logic related to `override managed dll folder`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
ManagedDllFolder.OverrideManagedDllFolder("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
