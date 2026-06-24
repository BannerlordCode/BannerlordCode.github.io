<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IFriendInvitationListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IFriendInvitationListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IFriendInvitationListener : GalaxyTypeAwareListenerFriendInvitation`
**Base:** `GalaxyTypeAwareListenerFriendInvitation`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IFriendInvitationListener.cs`

## Overview

`IFriendInvitationListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIFriendInvitationListener_0
`public delegate void SwigDelegateIFriendInvitationListener_0(IntPtr cPtr, IntPtr userID, uint sendTime)`

**Purpose:** Handles logic related to `swig delegate i friend invitation listener_0`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnFriendInvitationReceived
`public abstract void OnFriendInvitationReceived(GalaxyID userID, uint sendTime)`

**Purpose:** Called when the `friend invitation received` event is raised.

## Usage Example

```csharp
var implementation = new CustomIFriendInvitationListener();
```

## See Also

- [Complete Class Catalog](../catalog)