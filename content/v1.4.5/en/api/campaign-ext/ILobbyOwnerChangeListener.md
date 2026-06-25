---
title: "ILobbyOwnerChangeListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ILobbyOwnerChangeListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ILobbyOwnerChangeListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class ILobbyOwnerChangeListener : GalaxyTypeAwareListenerLobbyOwnerChange`
**Base:** `GalaxyTypeAwareListenerLobbyOwnerChange`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ILobbyOwnerChangeListener.cs`

## Overview

`ILobbyOwnerChangeListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateILobbyOwnerChangeListener_0
`public delegate void SwigDelegateILobbyOwnerChangeListener_0(IntPtr cPtr, IntPtr lobbyID, IntPtr newOwnerID)`

**Purpose:** Handles logic related to `swig delegate i lobby owner change listener_0`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnLobbyOwnerChanged
`public abstract void OnLobbyOwnerChanged(GalaxyID lobbyID, GalaxyID newOwnerID)`

**Purpose:** Called when the `lobby owner changed` event is raised.

## Usage Example

```csharp
var implementation = new CustomILobbyOwnerChangeListener();
```

## See Also

- [Complete Class Catalog](../catalog)