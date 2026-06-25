---
title: "ILobbyDataListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ILobbyDataListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ILobbyDataListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class ILobbyDataListener : GalaxyTypeAwareListenerLobbyData`
**Base:** `GalaxyTypeAwareListenerLobbyData`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ILobbyDataListener.cs`

## Overview

`ILobbyDataListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateILobbyDataListener_0
`public delegate void SwigDelegateILobbyDataListener_0(IntPtr cPtr, IntPtr lobbyID, IntPtr memberID)`

**Purpose:** Handles logic related to `swig delegate i lobby data listener_0`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnLobbyDataUpdated
`public abstract void OnLobbyDataUpdated(GalaxyID lobbyID, GalaxyID memberID)`

**Purpose:** Called when the `lobby data updated` event is raised.

## Usage Example

```csharp
var implementation = new CustomILobbyDataListener();
```

## See Also

- [Complete Class Catalog](../catalog)