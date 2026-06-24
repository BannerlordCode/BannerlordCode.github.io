<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ILobbyDataUpdateListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ILobbyDataUpdateListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class ILobbyDataUpdateListener : GalaxyTypeAwareListenerLobbyDataUpdate`
**Base:** `GalaxyTypeAwareListenerLobbyDataUpdate`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ILobbyDataUpdateListener.cs`

## Overview

`ILobbyDataUpdateListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateILobbyDataUpdateListener_0
`public delegate void SwigDelegateILobbyDataUpdateListener_0(IntPtr cPtr, IntPtr lobbyID)`

**Purpose:** Handles logic related to `swig delegate i lobby data update listener_0`.

### SwigDelegateILobbyDataUpdateListener_1
`public delegate void SwigDelegateILobbyDataUpdateListener_1(IntPtr cPtr, IntPtr lobbyID, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i lobby data update listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnLobbyDataUpdateSuccess
`public abstract void OnLobbyDataUpdateSuccess(GalaxyID lobbyID)`

**Purpose:** Called when the `lobby data update success` event is raised.

### OnLobbyDataUpdateFailure
`public abstract void OnLobbyDataUpdateFailure(GalaxyID lobbyID, FailureReason failureReason)`

**Purpose:** Called when the `lobby data update failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomILobbyDataUpdateListener();
```

## See Also

- [Complete Class Catalog](../catalog)