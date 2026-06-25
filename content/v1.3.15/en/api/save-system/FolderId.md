---
title: "FolderId"
description: "Auto-generated class reference for FolderId."
---
# FolderId

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public struct FolderId : IEquatable<FolderId>`
**Base:** `IEquatable<FolderId>`
**File:** `TaleWorlds.SaveSystem/FolderId.cs`

## Overview

`FolderId` lives in `TaleWorlds.SaveSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LocalId` | `public int LocalId { get; }` |
| `Extension` | `public SaveFolderExtension Extension { get; }` |

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of FolderId from the subsystem API first
FolderId folderId = ...;
var result = folderId.Equals(obj);
```

### Equals
`public bool Equals(FolderId other)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of FolderId from the subsystem API first
FolderId folderId = ...;
var result = folderId.Equals(other);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of FolderId from the subsystem API first
FolderId folderId = ...;
var result = folderId.GetHashCode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FolderId folderId = ...;
folderId.Equals(obj);
```

## See Also

- [Area Index](../)