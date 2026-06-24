<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IRichPresenceChangeListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IRichPresenceChangeListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IRichPresenceChangeListener : GalaxyTypeAwareListenerRichPresenceChange`
**Base:** `GalaxyTypeAwareListenerRichPresenceChange`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IRichPresenceChangeListener.cs`

## Overview

`IRichPresenceChangeListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIRichPresenceChangeListener_0
`public delegate void SwigDelegateIRichPresenceChangeListener_0(IntPtr cPtr)`

**Purpose:** Handles logic related to `swig delegate i rich presence change listener_0`.

### SwigDelegateIRichPresenceChangeListener_1
`public delegate void SwigDelegateIRichPresenceChangeListener_1(IntPtr cPtr, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i rich presence change listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnRichPresenceChangeSuccess
`public abstract void OnRichPresenceChangeSuccess()`

**Purpose:** Called when the `rich presence change success` event is raised.

### OnRichPresenceChangeFailure
`public abstract void OnRichPresenceChangeFailure(FailureReason failureReason)`

**Purpose:** Called when the `rich presence change failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomIRichPresenceChangeListener();
```

## See Also

- [Complete Class Catalog](../catalog)