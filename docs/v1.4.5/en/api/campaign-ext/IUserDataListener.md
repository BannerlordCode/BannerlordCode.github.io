<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IUserDataListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IUserDataListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IUserDataListener : GalaxyTypeAwareListenerUserData`
**Base:** `GalaxyTypeAwareListenerUserData`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IUserDataListener.cs`

## Overview

`IUserDataListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIUserDataListener_0
`public delegate void SwigDelegateIUserDataListener_0(IntPtr cPtr)`

**Purpose:** Handles logic related to `swig delegate i user data listener_0`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnUserDataUpdated
`public abstract void OnUserDataUpdated()`

**Purpose:** Called when the `user data updated` event is raised.

## Usage Example

```csharp
var implementation = new CustomIUserDataListener();
```

## See Also

- [Complete Class Catalog](../catalog)