---
title: "TWSharedMutex"
description: "Auto-generated class reference for TWSharedMutex."
---
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

**Purpose:** Executes the EnterReadLock logic.

```csharp
// Obtain an instance of TWSharedMutex from the subsystem API first
TWSharedMutex tWSharedMutex = ...;
tWSharedMutex.EnterReadLock();
```

### EnterWriteLock
`public void EnterWriteLock()`

**Purpose:** Executes the EnterWriteLock logic.

```csharp
// Obtain an instance of TWSharedMutex from the subsystem API first
TWSharedMutex tWSharedMutex = ...;
tWSharedMutex.EnterWriteLock();
```

### ExitReadLock
`public void ExitReadLock()`

**Purpose:** Executes the ExitReadLock logic.

```csharp
// Obtain an instance of TWSharedMutex from the subsystem API first
TWSharedMutex tWSharedMutex = ...;
tWSharedMutex.ExitReadLock();
```

### ExitWriteLock
`public void ExitWriteLock()`

**Purpose:** Executes the ExitWriteLock logic.

```csharp
// Obtain an instance of TWSharedMutex from the subsystem API first
TWSharedMutex tWSharedMutex = ...;
tWSharedMutex.ExitWriteLock();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TWSharedMutex tWSharedMutex = ...;
tWSharedMutex.EnterReadLock();
```

## See Also

- [Area Index](../)