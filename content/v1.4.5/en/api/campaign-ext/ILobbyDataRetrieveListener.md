---
title: "ILobbyDataRetrieveListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ILobbyDataRetrieveListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ILobbyDataRetrieveListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class ILobbyDataRetrieveListener : GalaxyTypeAwareListenerLobbyDataRetrieve`
**Base:** `GalaxyTypeAwareListenerLobbyDataRetrieve`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ILobbyDataRetrieveListener.cs`

## Overview

`ILobbyDataRetrieveListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateILobbyDataRetrieveListener_0
`public delegate void SwigDelegateILobbyDataRetrieveListener_0(IntPtr cPtr, IntPtr lobbyID)`

**Purpose:** Handles logic related to `swig delegate i lobby data retrieve listener_0`.

### SwigDelegateILobbyDataRetrieveListener_1
`public delegate void SwigDelegateILobbyDataRetrieveListener_1(IntPtr cPtr, IntPtr lobbyID, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i lobby data retrieve listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnLobbyDataRetrieveSuccess
`public abstract void OnLobbyDataRetrieveSuccess(GalaxyID lobbyID)`

**Purpose:** Called when the `lobby data retrieve success` event is raised.

### OnLobbyDataRetrieveFailure
`public abstract void OnLobbyDataRetrieveFailure(GalaxyID lobbyID, FailureReason failureReason)`

**Purpose:** Called when the `lobby data retrieve failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomILobbyDataRetrieveListener();
```

## See Also

- [Complete Class Catalog](../catalog)