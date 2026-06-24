<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IFriendDeleteListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IFriendDeleteListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IFriendDeleteListener : GalaxyTypeAwareListenerFriendDelete`
**Base:** `GalaxyTypeAwareListenerFriendDelete`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IFriendDeleteListener.cs`

## Overview

`IFriendDeleteListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIFriendDeleteListener_0
`public delegate void SwigDelegateIFriendDeleteListener_0(IntPtr cPtr, IntPtr userID)`

**Purpose:** Handles logic related to `swig delegate i friend delete listener_0`.

### SwigDelegateIFriendDeleteListener_1
`public delegate void SwigDelegateIFriendDeleteListener_1(IntPtr cPtr, IntPtr userID, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i friend delete listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnFriendDeleteSuccess
`public abstract void OnFriendDeleteSuccess(GalaxyID userID)`

**Purpose:** Called when the `friend delete success` event is raised.

### OnFriendDeleteFailure
`public abstract void OnFriendDeleteFailure(GalaxyID userID, FailureReason failureReason)`

**Purpose:** Called when the `friend delete failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomIFriendDeleteListener();
```

## See Also

- [Complete Class Catalog](../catalog)