---
title: "IFriendInvitationListRetrieveListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IFriendInvitationListRetrieveListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IFriendInvitationListRetrieveListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IFriendInvitationListRetrieveListener : GalaxyTypeAwareListenerFriendInvitationListRetrieve`
**Base:** `GalaxyTypeAwareListenerFriendInvitationListRetrieve`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IFriendInvitationListRetrieveListener.cs`

## Overview

`IFriendInvitationListRetrieveListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIFriendInvitationListRetrieveListener_0
`public delegate void SwigDelegateIFriendInvitationListRetrieveListener_0(IntPtr cPtr)`

**Purpose:** Handles logic related to `swig delegate i friend invitation list retrieve listener_0`.

### SwigDelegateIFriendInvitationListRetrieveListener_1
`public delegate void SwigDelegateIFriendInvitationListRetrieveListener_1(IntPtr cPtr, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i friend invitation list retrieve listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnFriendInvitationListRetrieveSuccess
`public abstract void OnFriendInvitationListRetrieveSuccess()`

**Purpose:** Called when the `friend invitation list retrieve success` event is raised.

### OnFriendInvitationListRetrieveFailure
`public abstract void OnFriendInvitationListRetrieveFailure(FailureReason failureReason)`

**Purpose:** Called when the `friend invitation list retrieve failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomIFriendInvitationListRetrieveListener();
```

## See Also

- [Complete Class Catalog](../catalog)