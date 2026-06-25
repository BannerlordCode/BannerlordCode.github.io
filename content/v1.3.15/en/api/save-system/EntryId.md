---
title: "EntryId"
description: "Auto-generated class reference for EntryId."
---
# EntryId

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public struct EntryId : IEquatable<EntryId>`
**Base:** `IEquatable<EntryId>`
**File:** `TaleWorlds.SaveSystem/EntryId.cs`

## Overview

`EntryId` lives in `TaleWorlds.SaveSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `Extension` | `public SaveEntryExtension Extension { get; }` |

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of EntryId from the subsystem API first
EntryId entryId = ...;
var result = entryId.Equals(obj);
```

### Equals
`public bool Equals(EntryId other)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of EntryId from the subsystem API first
EntryId entryId = ...;
var result = entryId.Equals(other);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of EntryId from the subsystem API first
EntryId entryId = ...;
var result = entryId.GetHashCode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EntryId entryId = ...;
entryId.Equals(obj);
```

## See Also

- [Area Index](../)