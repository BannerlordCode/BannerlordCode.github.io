---
title: "ILobbyMemberStateListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ILobbyMemberStateListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ILobbyMemberStateListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class ILobbyMemberStateListener : GalaxyTypeAwareListenerLobbyMemberState`
**Base:** `GalaxyTypeAwareListenerLobbyMemberState`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ILobbyMemberStateListener.cs`

## Overview

`ILobbyMemberStateListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateILobbyMemberStateListener_0
`public delegate void SwigDelegateILobbyMemberStateListener_0(IntPtr cPtr, IntPtr lobbyID, IntPtr memberID, int memberStateChange)`

**Purpose:** Handles logic related to `swig delegate i lobby member state listener_0`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnLobbyMemberStateChanged
`public abstract void OnLobbyMemberStateChanged(GalaxyID lobbyID, GalaxyID memberID, LobbyMemberStateChange memberStateChange)`

**Purpose:** Called when the `lobby member state changed` event is raised.

## Usage Example

```csharp
var implementation = new CustomILobbyMemberStateListener();
```

## See Also

- [Complete Class Catalog](../catalog)