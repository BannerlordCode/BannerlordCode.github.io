<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ITelemetryEventSendListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ITelemetryEventSendListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class ITelemetryEventSendListener : GalaxyTypeAwareListenerTelemetryEventSend`
**Base:** `GalaxyTypeAwareListenerTelemetryEventSend`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ITelemetryEventSendListener.cs`

## Overview

`ITelemetryEventSendListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateITelemetryEventSendListener_0
`public delegate void SwigDelegateITelemetryEventSendListener_0(IntPtr cPtr, string eventType, uint sentEventIndex)`

**Purpose:** Handles logic related to `swig delegate i telemetry event send listener_0`.

### SwigDelegateITelemetryEventSendListener_1
`public delegate void SwigDelegateITelemetryEventSendListener_1(IntPtr cPtr, string eventType, uint sentEventIndex, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i telemetry event send listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnTelemetryEventSendSuccess
`public abstract void OnTelemetryEventSendSuccess(string eventType, uint sentEventIndex)`

**Purpose:** Called when the `telemetry event send success` event is raised.

### OnTelemetryEventSendFailure
`public abstract void OnTelemetryEventSendFailure(string eventType, uint sentEventIndex, FailureReason failureReason)`

**Purpose:** Called when the `telemetry event send failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomITelemetryEventSendListener();
```

## See Also

- [Complete Class Catalog](../catalog)