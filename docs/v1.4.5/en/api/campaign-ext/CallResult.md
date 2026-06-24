<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CallResult`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CallResult

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public abstract class CallResult`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/CallResult.cs`

## Overview

`CallResult` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### APIDispatchDelegate
`public delegate void APIDispatchDelegate(T param, bool bIOFailure)`

**Purpose:** Handles logic related to `a p i dispatch delegate`.

### Create
`public static CallResult<T> Create(APIDispatchDelegate func = null)`

**Purpose:** Creates a new `create` instance or object.

### Dispose
`public void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### Set
`public void Set(SteamAPICall_t hAPICall, APIDispatchDelegate func = null)`

**Purpose:** Sets the value or state of `set`.

### IsActive
`public bool IsActive()`

**Purpose:** Handles logic related to `is active`.

### Cancel
`public void Cancel()`

**Purpose:** Checks whether the current object can `cel`.

## Usage Example

```csharp
var implementation = new CustomCallResult();
```

## See Also

- [Complete Class Catalog](../catalog)