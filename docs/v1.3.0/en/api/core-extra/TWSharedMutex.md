<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TWSharedMutex`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TWSharedMutex

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class TWSharedMutex`
**Base:** none
**File:** `TaleWorlds.Library/TWSharedMutex.cs`

## Overview

`TWSharedMutex` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsReadLockHeld` | `public bool IsReadLockHeld { get; }` |
| `IsWriteLockHeld` | `public bool IsWriteLockHeld { get; }` |

## Key Methods

### EnterReadLock
`public void EnterReadLock()`

**Purpose:** Handles logic related to `enter read lock`.

### EnterWriteLock
`public void EnterWriteLock()`

**Purpose:** Handles logic related to `enter write lock`.

### ExitReadLock
`public void ExitReadLock()`

**Purpose:** Handles logic related to `exit read lock`.

### ExitWriteLock
`public void ExitWriteLock()`

**Purpose:** Handles logic related to `exit write lock`.

## Usage Example

```csharp
var value = new TWSharedMutex();
value.EnterReadLock();
```

## See Also

- [Complete Class Catalog](../catalog)