---
title: "IEncryptedAppTicketListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IEncryptedAppTicketListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IEncryptedAppTicketListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IEncryptedAppTicketListener : GalaxyTypeAwareListenerEncryptedAppTicket`
**Base:** `GalaxyTypeAwareListenerEncryptedAppTicket`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IEncryptedAppTicketListener.cs`

## Overview

`IEncryptedAppTicketListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIEncryptedAppTicketListener_0
`public delegate void SwigDelegateIEncryptedAppTicketListener_0(IntPtr cPtr)`

**Purpose:** Handles logic related to `swig delegate i encrypted app ticket listener_0`.

### SwigDelegateIEncryptedAppTicketListener_1
`public delegate void SwigDelegateIEncryptedAppTicketListener_1(IntPtr cPtr, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i encrypted app ticket listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnEncryptedAppTicketRetrieveSuccess
`public abstract void OnEncryptedAppTicketRetrieveSuccess()`

**Purpose:** Called when the `encrypted app ticket retrieve success` event is raised.

### OnEncryptedAppTicketRetrieveFailure
`public virtual void OnEncryptedAppTicketRetrieveFailure(FailureReason failureReason)`

**Purpose:** Called when the `encrypted app ticket retrieve failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomIEncryptedAppTicketListener();
```

## See Also

- [Complete Class Catalog](../catalog)