<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ITelemetry`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ITelemetry

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class ITelemetry : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ITelemetry.cs`

## Overview

`ITelemetry` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Dispose
`public virtual void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### AddStringParam
`public virtual void AddStringParam(string name, string value)`

**Purpose:** Adds `string param` to the current collection or state.

### AddIntParam
`public virtual void AddIntParam(string name, int value)`

**Purpose:** Adds `int param` to the current collection or state.

### AddFloatParam
`public virtual void AddFloatParam(string name, double value)`

**Purpose:** Adds `float param` to the current collection or state.

### AddBoolParam
`public virtual void AddBoolParam(string name, bool value)`

**Purpose:** Adds `bool param` to the current collection or state.

### AddObjectParam
`public virtual void AddObjectParam(string name)`

**Purpose:** Adds `object param` to the current collection or state.

### AddArrayParam
`public virtual void AddArrayParam(string name)`

**Purpose:** Adds `array param` to the current collection or state.

### CloseParam
`public virtual void CloseParam()`

**Purpose:** Handles logic related to `close param`.

### ClearParams
`public virtual void ClearParams()`

**Purpose:** Handles logic related to `clear params`.

### SetSamplingClass
`public virtual void SetSamplingClass(string name)`

**Purpose:** Sets the value or state of `sampling class`.

### SendTelemetryEvent
`public virtual uint SendTelemetryEvent(string eventType, ITelemetryEventSendListener listener)`

**Purpose:** Handles logic related to `send telemetry event`.

### SendTelemetryEvent
`public virtual uint SendTelemetryEvent(string eventType)`

**Purpose:** Handles logic related to `send telemetry event`.

### SendAnonymousTelemetryEvent
`public virtual uint SendAnonymousTelemetryEvent(string eventType, ITelemetryEventSendListener listener)`

**Purpose:** Handles logic related to `send anonymous telemetry event`.

### SendAnonymousTelemetryEvent
`public virtual uint SendAnonymousTelemetryEvent(string eventType)`

**Purpose:** Handles logic related to `send anonymous telemetry event`.

### GetVisitID
`public virtual string GetVisitID()`

**Purpose:** Gets the current value of `visit i d`.

### GetVisitIDCopy
`public virtual void GetVisitIDCopy(out string buffer, uint bufferLength)`

**Purpose:** Gets the current value of `visit i d copy`.

### ResetVisitID
`public virtual void ResetVisitID()`

**Purpose:** Resets `visit i d` to its initial state.

## Usage Example

```csharp
var value = new ITelemetry();
value.Dispose();
```

## See Also

- [Complete Class Catalog](../catalog)