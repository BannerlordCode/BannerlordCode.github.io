---
title: "IRichPresenceRetrieveListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IRichPresenceRetrieveListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IRichPresenceRetrieveListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IRichPresenceRetrieveListener : GalaxyTypeAwareListenerRichPresenceRetrieve`
**Base:** `GalaxyTypeAwareListenerRichPresenceRetrieve`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IRichPresenceRetrieveListener.cs`

## Overview

`IRichPresenceRetrieveListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIRichPresenceRetrieveListener_0
`public delegate void SwigDelegateIRichPresenceRetrieveListener_0(IntPtr cPtr, IntPtr userID)`

**Purpose:** Handles logic related to `swig delegate i rich presence retrieve listener_0`.

### SwigDelegateIRichPresenceRetrieveListener_1
`public delegate void SwigDelegateIRichPresenceRetrieveListener_1(IntPtr cPtr, IntPtr userID, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i rich presence retrieve listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnRichPresenceRetrieveSuccess
`public virtual void OnRichPresenceRetrieveSuccess(GalaxyID userID)`

**Purpose:** Called when the `rich presence retrieve success` event is raised.

### OnRichPresenceRetrieveFailure
`public virtual void OnRichPresenceRetrieveFailure(GalaxyID userID, FailureReason failureReason)`

**Purpose:** Called when the `rich presence retrieve failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomIRichPresenceRetrieveListener();
```

## See Also

- [Complete Class Catalog](../catalog)