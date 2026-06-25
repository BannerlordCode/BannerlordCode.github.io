---
title: "IFriendInvitationSendListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IFriendInvitationSendListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IFriendInvitationSendListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IFriendInvitationSendListener : GalaxyTypeAwareListenerFriendInvitationSend`
**Base:** `GalaxyTypeAwareListenerFriendInvitationSend`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IFriendInvitationSendListener.cs`

## Overview

`IFriendInvitationSendListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIFriendInvitationSendListener_0
`public delegate void SwigDelegateIFriendInvitationSendListener_0(IntPtr cPtr, IntPtr userID)`

**Purpose:** Handles logic related to `swig delegate i friend invitation send listener_0`.

### SwigDelegateIFriendInvitationSendListener_1
`public delegate void SwigDelegateIFriendInvitationSendListener_1(IntPtr cPtr, IntPtr userID, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i friend invitation send listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnFriendInvitationSendSuccess
`public abstract void OnFriendInvitationSendSuccess(GalaxyID userID)`

**Purpose:** Called when the `friend invitation send success` event is raised.

### OnFriendInvitationSendFailure
`public abstract void OnFriendInvitationSendFailure(GalaxyID userID, FailureReason failureReason)`

**Purpose:** Called when the `friend invitation send failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomIFriendInvitationSendListener();
```

## See Also

- [Complete Class Catalog](../catalog)