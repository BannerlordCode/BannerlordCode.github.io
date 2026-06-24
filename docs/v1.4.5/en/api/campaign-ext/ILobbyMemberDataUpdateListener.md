<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ILobbyMemberDataUpdateListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ILobbyMemberDataUpdateListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class ILobbyMemberDataUpdateListener : GalaxyTypeAwareListenerLobbyMemberDataUpdate`
**Base:** `GalaxyTypeAwareListenerLobbyMemberDataUpdate`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ILobbyMemberDataUpdateListener.cs`

## Overview

`ILobbyMemberDataUpdateListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateILobbyMemberDataUpdateListener_0
`public delegate void SwigDelegateILobbyMemberDataUpdateListener_0(IntPtr cPtr, IntPtr lobbyID, IntPtr memberID)`

**Purpose:** Handles logic related to `swig delegate i lobby member data update listener_0`.

### SwigDelegateILobbyMemberDataUpdateListener_1
`public delegate void SwigDelegateILobbyMemberDataUpdateListener_1(IntPtr cPtr, IntPtr lobbyID, IntPtr memberID, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i lobby member data update listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnLobbyMemberDataUpdateSuccess
`public abstract void OnLobbyMemberDataUpdateSuccess(GalaxyID lobbyID, GalaxyID memberID)`

**Purpose:** Called when the `lobby member data update success` event is raised.

### OnLobbyMemberDataUpdateFailure
`public abstract void OnLobbyMemberDataUpdateFailure(GalaxyID lobbyID, GalaxyID memberID, FailureReason failureReason)`

**Purpose:** Called when the `lobby member data update failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomILobbyMemberDataUpdateListener();
```

## See Also

- [Complete Class Catalog](../catalog)