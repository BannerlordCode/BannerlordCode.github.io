---
title: "IFriendInvitationRespondToListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IFriendInvitationRespondToListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IFriendInvitationRespondToListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IFriendInvitationRespondToListener : GalaxyTypeAwareListenerFriendInvitationRespondTo`
**Base:** `GalaxyTypeAwareListenerFriendInvitationRespondTo`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IFriendInvitationRespondToListener.cs`

## Overview

`IFriendInvitationRespondToListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIFriendInvitationRespondToListener_0
`public delegate void SwigDelegateIFriendInvitationRespondToListener_0(IntPtr cPtr, IntPtr userID, bool accept)`

**Purpose:** Handles logic related to `swig delegate i friend invitation respond to listener_0`.

### SwigDelegateIFriendInvitationRespondToListener_1
`public delegate void SwigDelegateIFriendInvitationRespondToListener_1(IntPtr cPtr, IntPtr userID, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i friend invitation respond to listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnFriendInvitationRespondToSuccess
`public abstract void OnFriendInvitationRespondToSuccess(GalaxyID userID, bool accept)`

**Purpose:** Called when the `friend invitation respond to success` event is raised.

### OnFriendInvitationRespondToFailure
`public abstract void OnFriendInvitationRespondToFailure(GalaxyID userID, FailureReason failureReason)`

**Purpose:** Called when the `friend invitation respond to failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomIFriendInvitationRespondToListener();
```

## See Also

- [Complete Class Catalog](../catalog)