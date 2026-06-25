---
title: "INetworkingListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `INetworkingListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# INetworkingListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class INetworkingListener : GalaxyTypeAwareListenerNetworking`
**Base:** `GalaxyTypeAwareListenerNetworking`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/INetworkingListener.cs`

## Overview

`INetworkingListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateINetworkingListener_0
`public delegate void SwigDelegateINetworkingListener_0(IntPtr cPtr, uint msgSize, byte channel)`

**Purpose:** Handles logic related to `swig delegate i networking listener_0`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnP2PPacketAvailable
`public abstract void OnP2PPacketAvailable(uint msgSize, byte channel)`

**Purpose:** Called when the `p2 p packet available` event is raised.

## Usage Example

```csharp
var implementation = new CustomINetworkingListener();
```

## See Also

- [Complete Class Catalog](../catalog)