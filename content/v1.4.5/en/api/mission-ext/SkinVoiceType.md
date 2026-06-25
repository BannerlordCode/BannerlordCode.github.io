---
title: "SkinVoiceType"
description: "Auto-generated class reference for SkinVoiceType."
---
# SkinVoiceType

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct SkinVoiceType`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SkinVoiceManager.cs`

## Overview

`SkinVoiceType` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TypeID` | `public string TypeID { get; }` |
| `Index` | `public int Index { get; }` |

## Key Methods

### GetName
`public TextObject GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of SkinVoiceType from the subsystem API first
SkinVoiceType skinVoiceType = ...;
var result = skinVoiceType.GetName();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SkinVoiceType skinVoiceType = ...;
skinVoiceType.GetName();
```

## See Also

- [Area Index](../)