---
title: "IListenerRegistrar"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IListenerRegistrar`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IListenerRegistrar

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class IListenerRegistrar : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IListenerRegistrar.cs`

## Overview

`IListenerRegistrar` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Dispose
`public virtual void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### Register
`public virtual void Register(ListenerType listenerType, IGalaxyListener listener)`

**Purpose:** Handles logic related to `register`.

### Unregister
`public virtual void Unregister(ListenerType listenerType, IGalaxyListener listener)`

**Purpose:** Handles logic related to `unregister`.

## Usage Example

```csharp
var value = new IListenerRegistrar();
value.Dispose();
```

## See Also

- [Complete Class Catalog](../catalog)