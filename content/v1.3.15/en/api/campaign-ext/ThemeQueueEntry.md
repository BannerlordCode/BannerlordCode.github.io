---
title: "ThemeQueueEntry"
description: "Auto-generated class reference for ThemeQueueEntry."
---
# ThemeQueueEntry

**Namespace:** psai.net
**Module:** psai.net
**Type:** `internal class ThemeQueueEntry : ICloneable`
**Base:** `ICloneable`
**File:** `TaleWorlds.PSAI/net/ThemeQueueEntry.cs`

## Overview

`ThemeQueueEntry` lives in `psai.net` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.net` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Clone
`public object Clone()`

**Purpose:** **Purpose:** Duplicates the this instance's state and returns a new instance.

```csharp
// Obtain an instance of ThemeQueueEntry from the subsystem API first
ThemeQueueEntry themeQueueEntry = ...;
var result = themeQueueEntry.Clone();
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of ThemeQueueEntry from the subsystem API first
ThemeQueueEntry themeQueueEntry = ...;
var result = themeQueueEntry.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ThemeQueueEntry themeQueueEntry = ...;
themeQueueEntry.Clone();
```

## See Also

- [Area Index](../)