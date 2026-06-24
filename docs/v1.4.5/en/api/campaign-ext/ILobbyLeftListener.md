<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ILobbyLeftListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ILobbyLeftListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class ILobbyLeftListener : GalaxyTypeAwareListenerLobbyLeft`
**Base:** `GalaxyTypeAwareListenerLobbyLeft`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ILobbyLeftListener.cs`

## Overview

`ILobbyLeftListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateILobbyLeftListener_0
`public delegate void SwigDelegateILobbyLeftListener_0(IntPtr cPtr, IntPtr lobbyID, int leaveReason)`

**Purpose:** Handles logic related to `swig delegate i lobby left listener_0`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnLobbyLeft
`public abstract void OnLobbyLeft(GalaxyID lobbyID, LobbyLeaveReason leaveReason)`

**Purpose:** Called when the `lobby left` event is raised.

## Usage Example

```csharp
var implementation = new CustomILobbyLeftListener();
```

## See Also

- [Complete Class Catalog](../catalog)