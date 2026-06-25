---
title: "IConnectionCloseListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IConnectionCloseListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IConnectionCloseListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IConnectionCloseListener : GalaxyTypeAwareListenerConnectionClose`
**Base:** `GalaxyTypeAwareListenerConnectionClose`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IConnectionCloseListener.cs`

## Overview

`IConnectionCloseListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIConnectionCloseListener_0
`public delegate void SwigDelegateIConnectionCloseListener_0(IntPtr cPtr, ulong connectionID, int closeReason)`

**Purpose:** Handles logic related to `swig delegate i connection close listener_0`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnConnectionClosed
`public abstract void OnConnectionClosed(ulong connectionID, CloseReason closeReason)`

**Purpose:** Called when the `connection closed` event is raised.

## Usage Example

```csharp
var implementation = new CustomIConnectionCloseListener();
```

## See Also

- [Complete Class Catalog](../catalog)