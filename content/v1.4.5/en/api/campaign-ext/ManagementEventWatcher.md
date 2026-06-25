---
title: "ManagementEventWatcher"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagementEventWatcher`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ManagementEventWatcher

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class ManagementEventWatcher : Component`
**Base:** `Component`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/ManagementEventWatcher.cs`

## Overview

`ManagementEventWatcher` lives in `System.Management` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `System.Management` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Options` | `public EventWatcherOptions Options { get; set; }` |
| `Query` | `public EventQuery Query { get; set; }` |
| `Scope` | `public ManagementScope Scope { get; set; }` |
| `EventArrived` | `public event EventArrivedEventHandler EventArrived { get; }` |
| `Stopped` | `public event StoppedEventHandler Stopped { get; }` |

## Key Methods

### Start
`public void Start()`

**Purpose:** Handles logic related to `start`.

### Stop
`public void Stop()`

**Purpose:** Handles logic related to `stop`.

### WaitForNextEvent
`public ManagementBaseObject WaitForNextEvent()`

**Purpose:** Handles logic related to `wait for next event`.

## Usage Example

```csharp
var value = new ManagementEventWatcher();
value.Start();
```

## See Also

- [Complete Class Catalog](../catalog)