---
title: "CoreManaged"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CoreManaged`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CoreManaged

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CoreManaged : IManagedComponent`
**Base:** `IManagedComponent`
**Area:** mission-ext

## Overview

`CoreManaged` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ManagedCallbacksDll` | `public string ManagedCallbacksDll { get; }` |

## Key Methods

### Start
`public static void Start()`

**Purpose:** Handles logic related to `start`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
CoreManaged.Start();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
