---
title: "IndexEntry"
description: "Auto-generated class reference for IndexEntry."
---
# IndexEntry

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct IndexEntry`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MBFastRandomSelector.cs`

## Overview

`IndexEntry` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IndexEntry
`public struct IndexEntry(ushort index, ushort version)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of IndexEntry from the subsystem API first
IndexEntry indexEntry = ...;
var result = indexEntry.IndexEntry(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
IndexEntry indexEntry = ...;
indexEntry.IndexEntry(0, 0);
```

## See Also

- [Area Index](../)