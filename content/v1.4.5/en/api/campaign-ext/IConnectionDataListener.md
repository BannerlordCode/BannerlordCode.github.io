---
title: "IConnectionDataListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IConnectionDataListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IConnectionDataListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IConnectionDataListener : GalaxyTypeAwareListenerConnectionData`
**Base:** `GalaxyTypeAwareListenerConnectionData`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IConnectionDataListener.cs`

## Overview

`IConnectionDataListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIConnectionDataListener_0
`public delegate void SwigDelegateIConnectionDataListener_0(IntPtr cPtr, ulong connectionID, uint dataSize)`

**Purpose:** Handles logic related to `swig delegate i connection data listener_0`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnConnectionDataReceived
`public abstract void OnConnectionDataReceived(ulong connectionID, uint dataSize)`

**Purpose:** Called when the `connection data received` event is raised.

## Usage Example

```csharp
var implementation = new CustomIConnectionDataListener();
```

## See Also

- [Complete Class Catalog](../catalog)