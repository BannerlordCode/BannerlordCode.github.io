---
title: "ManagementOperationObserver"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagementOperationObserver`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ManagementOperationObserver

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class ManagementOperationObserver`
**Base:** none
**File:** `Bannerlord.Source/bin/System.Management/System.Management/ManagementOperationObserver.cs`

## Overview

`ManagementOperationObserver` lives in `System.Management` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `System.Management` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Completed` | `public event CompletedEventHandler Completed { get; }` |
| `ObjectPut` | `public event ObjectPutEventHandler ObjectPut { get; }` |
| `ObjectReady` | `public event ObjectReadyEventHandler ObjectReady { get; }` |
| `Progress` | `public event ProgressEventHandler Progress { get; }` |

## Key Methods

### Cancel
`public void Cancel()`

**Purpose:** Checks whether the current object can `cel`.

## Usage Example

```csharp
var value = new ManagementOperationObserver();
value.Cancel();
```

## See Also

- [Complete Class Catalog](../catalog)