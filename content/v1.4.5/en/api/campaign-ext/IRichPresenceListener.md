---
title: "IRichPresenceListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IRichPresenceListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IRichPresenceListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IRichPresenceListener : GalaxyTypeAwareListenerRichPresence`
**Base:** `GalaxyTypeAwareListenerRichPresence`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IRichPresenceListener.cs`

## Overview

`IRichPresenceListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIRichPresenceListener_0
`public delegate void SwigDelegateIRichPresenceListener_0(IntPtr cPtr, IntPtr userID)`

**Purpose:** Handles logic related to `swig delegate i rich presence listener_0`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnRichPresenceUpdated
`public abstract void OnRichPresenceUpdated(GalaxyID userID)`

**Purpose:** Called when the `rich presence updated` event is raised.

## Usage Example

```csharp
var implementation = new CustomIRichPresenceListener();
```

## See Also

- [Complete Class Catalog](../catalog)