<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Callback`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Callback

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public abstract class Callback`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/Callback.cs`

## Overview

`Callback` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsGameServer` | `public abstract bool IsGameServer { get; }` |

## Key Methods

### DispatchDelegate
`public delegate void DispatchDelegate(T param)`

**Purpose:** Handles logic related to `dispatch delegate`.

### Create
`public static Callback<T> Create(DispatchDelegate func)`

**Purpose:** Creates a new `create` instance or object.

### CreateGameServer
`public static Callback<T> CreateGameServer(DispatchDelegate func)`

**Purpose:** Creates a new `game server` instance or object.

### Dispose
`public void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### Register
`public void Register(DispatchDelegate func)`

**Purpose:** Handles logic related to `register`.

### Unregister
`public void Unregister()`

**Purpose:** Handles logic related to `unregister`.

## Usage Example

```csharp
var implementation = new CustomCallback();
```

## See Also

- [Complete Class Catalog](../catalog)