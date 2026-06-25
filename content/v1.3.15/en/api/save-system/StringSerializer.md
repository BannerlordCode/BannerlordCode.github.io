---
title: "StringSerializer"
description: "Auto-generated class reference for StringSerializer."
---
# StringSerializer

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class StringSerializer : IBasicTypeSerializer`
**Base:** `IBasicTypeSerializer`
**File:** `TaleWorlds.SaveSystem/Definition/StringSerializer.cs`

## Overview

`StringSerializer` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSizeInBytes
`public int GetSizeInBytes()`

**Purpose:** Reads and returns the `size in bytes` value held by the current object.

```csharp
// Obtain an instance of StringSerializer from the subsystem API first
StringSerializer stringSerializer = ...;
var result = stringSerializer.GetSizeInBytes();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StringSerializer stringSerializer = ...;
stringSerializer.GetSizeInBytes();
```

## See Also

- [Area Index](../)