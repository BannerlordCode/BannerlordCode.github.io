---
title: "IAuthListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IAuthListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IAuthListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IAuthListener : GalaxyTypeAwareListenerAuth`
**Base:** `GalaxyTypeAwareListenerAuth`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IAuthListener.cs`

## Overview

`IAuthListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIAuthListener_0
`public delegate void SwigDelegateIAuthListener_0(IntPtr cPtr)`

**Purpose:** Handles logic related to `swig delegate i auth listener_0`.

### SwigDelegateIAuthListener_1
`public delegate void SwigDelegateIAuthListener_1(IntPtr cPtr, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i auth listener_1`.

### SwigDelegateIAuthListener_2
`public delegate void SwigDelegateIAuthListener_2(IntPtr cPtr)`

**Purpose:** Handles logic related to `swig delegate i auth listener_2`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnAuthSuccess
`public abstract void OnAuthSuccess()`

**Purpose:** Called when the `auth success` event is raised.

### OnAuthFailure
`public abstract void OnAuthFailure(FailureReason failureReason)`

**Purpose:** Called when the `auth failure` event is raised.

### OnAuthLost
`public abstract void OnAuthLost()`

**Purpose:** Called when the `auth lost` event is raised.

## Usage Example

```csharp
var implementation = new CustomIAuthListener();
```

## See Also

- [Complete Class Catalog](../catalog)