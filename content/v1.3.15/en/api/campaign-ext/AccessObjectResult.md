---
title: "AccessObjectResult"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AccessObjectResult`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AccessObjectResult

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public class AccessObjectResult`
**Area:** campaign-ext

## Overview

`AccessObjectResult` lives in `TaleWorlds.Diamond`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AccessObject` | `public AccessObject AccessObject { get; set; }` |
| `Success` | `public bool Success { get; set; }` |
| `FailReason` | `public TextObject FailReason { get; set; }` |

## Key Methods

### CreateSuccess
`public static AccessObjectResult CreateSuccess(AccessObject accessObject)`

**Purpose:** Creates a new `success` instance or object.

### CreateFailed
`public static AccessObjectResult CreateFailed(TextObject failReason)`

**Purpose:** Creates a new `failed` instance or object.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
AccessObjectResult.CreateSuccess(accessObject);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
