---
title: "IOverlayInitializationStateChangeListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IOverlayInitializationStateChangeListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IOverlayInitializationStateChangeListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IOverlayInitializationStateChangeListener : GalaxyTypeAwareListenerOverlayInitializationStateChange`
**Base:** `GalaxyTypeAwareListenerOverlayInitializationStateChange`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IOverlayInitializationStateChangeListener.cs`

## Overview

`IOverlayInitializationStateChangeListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIOverlayInitializationStateChangeListener_0
`public delegate void SwigDelegateIOverlayInitializationStateChangeListener_0(IntPtr cPtr, int overlayState)`

**Purpose:** Handles logic related to `swig delegate i overlay initialization state change listener_0`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnOverlayStateChanged
`public abstract void OnOverlayStateChanged(OverlayState overlayState)`

**Purpose:** Called when the `overlay state changed` event is raised.

## Usage Example

```csharp
var implementation = new CustomIOverlayInitializationStateChangeListener();
```

## See Also

- [Complete Class Catalog](../catalog)