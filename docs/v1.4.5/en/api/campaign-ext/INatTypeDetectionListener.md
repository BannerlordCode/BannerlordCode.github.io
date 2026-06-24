<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `INatTypeDetectionListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# INatTypeDetectionListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class INatTypeDetectionListener : GalaxyTypeAwareListenerNatTypeDetection`
**Base:** `GalaxyTypeAwareListenerNatTypeDetection`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/INatTypeDetectionListener.cs`

## Overview

`INatTypeDetectionListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateINatTypeDetectionListener_0
`public delegate void SwigDelegateINatTypeDetectionListener_0(IntPtr cPtr, int natType)`

**Purpose:** Handles logic related to `swig delegate i nat type detection listener_0`.

### SwigDelegateINatTypeDetectionListener_1
`public delegate void SwigDelegateINatTypeDetectionListener_1(IntPtr cPtr)`

**Purpose:** Handles logic related to `swig delegate i nat type detection listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnNatTypeDetectionSuccess
`public abstract void OnNatTypeDetectionSuccess(NatType natType)`

**Purpose:** Called when the `nat type detection success` event is raised.

### OnNatTypeDetectionFailure
`public abstract void OnNatTypeDetectionFailure()`

**Purpose:** Called when the `nat type detection failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomINatTypeDetectionListener();
```

## See Also

- [Complete Class Catalog](../catalog)