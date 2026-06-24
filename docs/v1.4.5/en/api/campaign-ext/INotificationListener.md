<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `INotificationListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# INotificationListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class INotificationListener : GalaxyTypeAwareListenerNotification`
**Base:** `GalaxyTypeAwareListenerNotification`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/INotificationListener.cs`

## Overview

`INotificationListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateINotificationListener_0
`public delegate void SwigDelegateINotificationListener_0(IntPtr cPtr, ulong notificationID, uint typeLength, uint contentSize)`

**Purpose:** Handles logic related to `swig delegate i notification listener_0`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnNotificationReceived
`public abstract void OnNotificationReceived(ulong notificationID, uint typeLength, uint contentSize)`

**Purpose:** Called when the `notification received` event is raised.

## Usage Example

```csharp
var implementation = new CustomINotificationListener();
```

## See Also

- [Complete Class Catalog](../catalog)