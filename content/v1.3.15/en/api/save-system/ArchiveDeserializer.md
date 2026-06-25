---
title: "ArchiveDeserializer"
description: "Auto-generated class reference for ArchiveDeserializer."
---
# ArchiveDeserializer

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class ArchiveDeserializer`
**Base:** none
**File:** `TaleWorlds.SaveSystem/ArchiveDeserializer.cs`

## Overview

`ArchiveDeserializer` lives in `TaleWorlds.SaveSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RootFolder` | `public SaveEntryFolder RootFolder { get; }` |

## Key Methods

### LoadFrom
`public void LoadFrom(byte binaryArchive)`

**Purpose:** Reads from from persistent storage or a stream.

```csharp
// Obtain an instance of ArchiveDeserializer from the subsystem API first
ArchiveDeserializer archiveDeserializer = ...;
archiveDeserializer.LoadFrom(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArchiveDeserializer archiveDeserializer = ...;
archiveDeserializer.LoadFrom(0);
```

## See Also

- [Area Index](../)