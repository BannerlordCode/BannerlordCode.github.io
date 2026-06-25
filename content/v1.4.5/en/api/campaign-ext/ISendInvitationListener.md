---
title: "ISendInvitationListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ISendInvitationListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ISendInvitationListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class ISendInvitationListener : GalaxyTypeAwareListenerSendInvitation`
**Base:** `GalaxyTypeAwareListenerSendInvitation`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ISendInvitationListener.cs`

## Overview

`ISendInvitationListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateISendInvitationListener_0
`public delegate void SwigDelegateISendInvitationListener_0(IntPtr cPtr, IntPtr userID, string connectionString)`

**Purpose:** Handles logic related to `swig delegate i send invitation listener_0`.

### SwigDelegateISendInvitationListener_1
`public delegate void SwigDelegateISendInvitationListener_1(IntPtr cPtr, IntPtr userID, string connectionString, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i send invitation listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnInvitationSendSuccess
`public abstract void OnInvitationSendSuccess(GalaxyID userID, string connectionString)`

**Purpose:** Called when the `invitation send success` event is raised.

### OnInvitationSendFailure
`public abstract void OnInvitationSendFailure(GalaxyID userID, string connectionString, FailureReason failureReason)`

**Purpose:** Called when the `invitation send failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomISendInvitationListener();
```

## See Also

- [Complete Class Catalog](../catalog)