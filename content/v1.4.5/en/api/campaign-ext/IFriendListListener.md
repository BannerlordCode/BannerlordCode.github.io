---
title: "IFriendListListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IFriendListListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IFriendListListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IFriendListListener : GalaxyTypeAwareListenerFriendList`
**Base:** `GalaxyTypeAwareListenerFriendList`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IFriendListListener.cs`

## Overview

`IFriendListListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIFriendListListener_0
`public delegate void SwigDelegateIFriendListListener_0(IntPtr cPtr)`

**Purpose:** Handles logic related to `swig delegate i friend list listener_0`.

### SwigDelegateIFriendListListener_1
`public delegate void SwigDelegateIFriendListListener_1(IntPtr cPtr, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i friend list listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnFriendListRetrieveSuccess
`public abstract void OnFriendListRetrieveSuccess()`

**Purpose:** Called when the `friend list retrieve success` event is raised.

### OnFriendListRetrieveFailure
`public abstract void OnFriendListRetrieveFailure(FailureReason failureReason)`

**Purpose:** Called when the `friend list retrieve failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomIFriendListListener();
```

## See Also

- [Complete Class Catalog](../catalog)