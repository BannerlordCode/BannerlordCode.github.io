<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IPersonaDataChangedListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IPersonaDataChangedListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IPersonaDataChangedListener : GalaxyTypeAwareListenerPersonaDataChanged`
**Base:** `GalaxyTypeAwareListenerPersonaDataChanged`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IPersonaDataChangedListener.cs`

## Overview

`IPersonaDataChangedListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIPersonaDataChangedListener_0
`public delegate void SwigDelegateIPersonaDataChangedListener_0(IntPtr cPtr, IntPtr userID, uint personaStateChange)`

**Purpose:** Handles logic related to `swig delegate i persona data changed listener_0`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnPersonaDataChanged
`public abstract void OnPersonaDataChanged(GalaxyID userID, uint personaStateChange)`

**Purpose:** Called when the `persona data changed` event is raised.

## Usage Example

```csharp
var implementation = new CustomIPersonaDataChangedListener();
```

## See Also

- [Complete Class Catalog](../catalog)