<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ILobbyEnteredListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ILobbyEnteredListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class ILobbyEnteredListener : GalaxyTypeAwareListenerLobbyEntered`
**Base:** `GalaxyTypeAwareListenerLobbyEntered`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ILobbyEnteredListener.cs`

## Overview

`ILobbyEnteredListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateILobbyEnteredListener_0
`public delegate void SwigDelegateILobbyEnteredListener_0(IntPtr cPtr, IntPtr lobbyID, int _result)`

**Purpose:** Handles logic related to `swig delegate i lobby entered listener_0`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnLobbyEntered
`public abstract void OnLobbyEntered(GalaxyID lobbyID, LobbyEnterResult _result)`

**Purpose:** Called when the `lobby entered` event is raised.

## Usage Example

```csharp
var implementation = new CustomILobbyEnteredListener();
```

## See Also

- [Complete Class Catalog](../catalog)