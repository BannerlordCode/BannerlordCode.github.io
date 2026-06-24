<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IUserFindListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IUserFindListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IUserFindListener : GalaxyTypeAwareListenerUserFind`
**Base:** `GalaxyTypeAwareListenerUserFind`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IUserFindListener.cs`

## Overview

`IUserFindListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIUserFindListener_0
`public delegate void SwigDelegateIUserFindListener_0(IntPtr cPtr, string userSpecifier, IntPtr userID)`

**Purpose:** Handles logic related to `swig delegate i user find listener_0`.

### SwigDelegateIUserFindListener_1
`public delegate void SwigDelegateIUserFindListener_1(IntPtr cPtr, string userSpecifier, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i user find listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnUserFindSuccess
`public abstract void OnUserFindSuccess(string userSpecifier, GalaxyID userID)`

**Purpose:** Called when the `user find success` event is raised.

### OnUserFindFailure
`public abstract void OnUserFindFailure(string userSpecifier, FailureReason failureReason)`

**Purpose:** Called when the `user find failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomIUserFindListener();
```

## See Also

- [Complete Class Catalog](../catalog)