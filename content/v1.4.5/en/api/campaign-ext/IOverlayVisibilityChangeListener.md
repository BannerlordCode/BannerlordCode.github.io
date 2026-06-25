---
title: "IOverlayVisibilityChangeListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IOverlayVisibilityChangeListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IOverlayVisibilityChangeListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IOverlayVisibilityChangeListener : GalaxyTypeAwareListenerOverlayVisibilityChange`
**Base:** `GalaxyTypeAwareListenerOverlayVisibilityChange`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IOverlayVisibilityChangeListener.cs`

## Overview

`IOverlayVisibilityChangeListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIOverlayVisibilityChangeListener_0
`public delegate void SwigDelegateIOverlayVisibilityChangeListener_0(IntPtr cPtr, bool overlayVisible)`

**Purpose:** Handles logic related to `swig delegate i overlay visibility change listener_0`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnOverlayVisibilityChanged
`public virtual void OnOverlayVisibilityChanged(bool overlayVisible)`

**Purpose:** Called when the `overlay visibility changed` event is raised.

## Usage Example

```csharp
var implementation = new CustomIOverlayVisibilityChangeListener();
```

## See Also

- [Complete Class Catalog](../catalog)