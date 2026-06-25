---
title: "ParameterFile"
description: "Auto-generated class reference for ParameterFile."
---
# ParameterFile

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ParameterFile`
**Base:** none
**File:** `TaleWorlds.Library/ParameterFile.cs`

## Overview

`ParameterFile` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Path` | `public string Path { get; }` |
| `LastCheckedTime` | `public DateTime LastCheckedTime { get; }` |
| `ParameterContainer` | `public ParameterContainer ParameterContainer { get; }` |

## Key Methods

### CheckIfNeedsToBeRefreshed
`public bool CheckIfNeedsToBeRefreshed()`

**Purpose:** Verifies whether `if needs to be refreshed` holds true for the current object.

```csharp
// Obtain an instance of ParameterFile from the subsystem API first
ParameterFile parameterFile = ...;
var result = parameterFile.CheckIfNeedsToBeRefreshed();
```

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Obtain an instance of ParameterFile from the subsystem API first
ParameterFile parameterFile = ...;
parameterFile.Refresh();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ParameterFile parameterFile = ...;
parameterFile.CheckIfNeedsToBeRefreshed();
```

## See Also

- [Area Index](../)