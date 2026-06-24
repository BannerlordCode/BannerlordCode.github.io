<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ILobbyCreatedListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ILobbyCreatedListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class ILobbyCreatedListener : GalaxyTypeAwareListenerLobbyCreated`
**Base:** `GalaxyTypeAwareListenerLobbyCreated`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ILobbyCreatedListener.cs`

## Overview

`ILobbyCreatedListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateILobbyCreatedListener_0
`public delegate void SwigDelegateILobbyCreatedListener_0(IntPtr cPtr, IntPtr lobbyID, int _result)`

**Purpose:** Handles logic related to `swig delegate i lobby created listener_0`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnLobbyCreated
`public abstract void OnLobbyCreated(GalaxyID lobbyID, LobbyCreateResult _result)`

**Purpose:** Called when the `lobby created` event is raised.

## Usage Example

```csharp
var implementation = new CustomILobbyCreatedListener();
```

## See Also

- [Complete Class Catalog](../catalog)