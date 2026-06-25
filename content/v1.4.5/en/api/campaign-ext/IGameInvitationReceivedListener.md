---
title: "IGameInvitationReceivedListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IGameInvitationReceivedListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IGameInvitationReceivedListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IGameInvitationReceivedListener : GalaxyTypeAwareListenerGameInvitationReceived`
**Base:** `GalaxyTypeAwareListenerGameInvitationReceived`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IGameInvitationReceivedListener.cs`

## Overview

`IGameInvitationReceivedListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIGameInvitationReceivedListener_0
`public delegate void SwigDelegateIGameInvitationReceivedListener_0(IntPtr cPtr, IntPtr userID, string connectionString)`

**Purpose:** Handles logic related to `swig delegate i game invitation received listener_0`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnGameInvitationReceived
`public abstract void OnGameInvitationReceived(GalaxyID userID, string connectionString)`

**Purpose:** Called when the `game invitation received` event is raised.

## Usage Example

```csharp
var implementation = new CustomIGameInvitationReceivedListener();
```

## See Also

- [Complete Class Catalog](../catalog)