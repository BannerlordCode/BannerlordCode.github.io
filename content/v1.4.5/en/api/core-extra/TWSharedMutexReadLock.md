---
title: "TWSharedMutexReadLock"
description: "Auto-generated class reference for TWSharedMutexReadLock."
---
# TWSharedMutexReadLock

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct TWSharedMutexReadLock : IDisposable`
**Base:** `IDisposable`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/TWSharedMutexReadLock.cs`

## Overview

`TWSharedMutexReadLock` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Dispose
`public void Dispose()`

**Purpose:** Releases unmanaged resources held by the this instance.

```csharp
// Obtain an instance of TWSharedMutexReadLock from the subsystem API first
TWSharedMutexReadLock tWSharedMutexReadLock = ...;
tWSharedMutexReadLock.Dispose();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TWSharedMutexReadLock tWSharedMutexReadLock = ...;
tWSharedMutexReadLock.Dispose();
```

## See Also

- [Area Index](../)