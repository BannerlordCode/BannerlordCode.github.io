<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ISentFriendInvitationListRetrieveListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ISentFriendInvitationListRetrieveListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class ISentFriendInvitationListRetrieveListener : GalaxyTypeAwareListenerSentFriendInvitationListRetrieve`
**Base:** `GalaxyTypeAwareListenerSentFriendInvitationListRetrieve`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ISentFriendInvitationListRetrieveListener.cs`

## Overview

`ISentFriendInvitationListRetrieveListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateISentFriendInvitationListRetrieveListener_0
`public delegate void SwigDelegateISentFriendInvitationListRetrieveListener_0(IntPtr cPtr)`

**Purpose:** Handles logic related to `swig delegate i sent friend invitation list retrieve listener_0`.

### SwigDelegateISentFriendInvitationListRetrieveListener_1
`public delegate void SwigDelegateISentFriendInvitationListRetrieveListener_1(IntPtr cPtr, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i sent friend invitation list retrieve listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnSentFriendInvitationListRetrieveSuccess
`public abstract void OnSentFriendInvitationListRetrieveSuccess()`

**Purpose:** Called when the `sent friend invitation list retrieve success` event is raised.

### OnSentFriendInvitationListRetrieveFailure
`public abstract void OnSentFriendInvitationListRetrieveFailure(FailureReason failureReason)`

**Purpose:** Called when the `sent friend invitation list retrieve failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomISentFriendInvitationListRetrieveListener();
```

## See Also

- [Complete Class Catalog](../catalog)