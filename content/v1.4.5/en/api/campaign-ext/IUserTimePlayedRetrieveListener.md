---
title: "IUserTimePlayedRetrieveListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IUserTimePlayedRetrieveListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IUserTimePlayedRetrieveListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IUserTimePlayedRetrieveListener : GalaxyTypeAwareListenerUserTimePlayedRetrieve`
**Base:** `GalaxyTypeAwareListenerUserTimePlayedRetrieve`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IUserTimePlayedRetrieveListener.cs`

## Overview

`IUserTimePlayedRetrieveListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIUserTimePlayedRetrieveListener_0
`public delegate void SwigDelegateIUserTimePlayedRetrieveListener_0(IntPtr cPtr, IntPtr userID)`

**Purpose:** Handles logic related to `swig delegate i user time played retrieve listener_0`.

### SwigDelegateIUserTimePlayedRetrieveListener_1
`public delegate void SwigDelegateIUserTimePlayedRetrieveListener_1(IntPtr cPtr, IntPtr userID, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i user time played retrieve listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnUserTimePlayedRetrieveSuccess
`public abstract void OnUserTimePlayedRetrieveSuccess(GalaxyID userID)`

**Purpose:** Called when the `user time played retrieve success` event is raised.

### OnUserTimePlayedRetrieveFailure
`public abstract void OnUserTimePlayedRetrieveFailure(GalaxyID userID, FailureReason failureReason)`

**Purpose:** Called when the `user time played retrieve failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomIUserTimePlayedRetrieveListener();
```

## See Also

- [Complete Class Catalog](../catalog)