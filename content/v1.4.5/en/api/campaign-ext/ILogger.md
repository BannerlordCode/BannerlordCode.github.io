---
title: "ILogger"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ILogger`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ILogger

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class ILogger : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ILogger.cs`

## Overview

`ILogger` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Dispose
`public virtual void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### Trace
`public virtual void Trace(string format)`

**Purpose:** Handles logic related to `trace`.

### Debug
`public virtual void Debug(string format)`

**Purpose:** Handles logic related to `debug`.

### Info
`public virtual void Info(string format)`

**Purpose:** Handles logic related to `info`.

### Warning
`public virtual void Warning(string format)`

**Purpose:** Handles logic related to `warning`.

### Error
`public virtual void Error(string format)`

**Purpose:** Handles logic related to `error`.

### Fatal
`public virtual void Fatal(string format)`

**Purpose:** Handles logic related to `fatal`.

## Usage Example

```csharp
var value = new ILogger();
value.Dispose();
```

## See Also

- [Complete Class Catalog](../catalog)