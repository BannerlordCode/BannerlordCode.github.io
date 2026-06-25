---
title: "PathFaceRecord"
description: "Auto-generated class reference for PathFaceRecord."
---
# PathFaceRecord

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PathFaceRecord`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/PathFaceRecord.cs`

## Overview

`PathFaceRecord` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### PathFaceRecord
`public struct PathFaceRecord(int index, int groupIndex, int islandIndex)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PathFaceRecord from the subsystem API first
PathFaceRecord pathFaceRecord = ...;
var result = pathFaceRecord.PathFaceRecord(0, 0, 0);
```

### IsValid
`public bool IsValid()`

**Purpose:** Determines whether the current object is in the `valid` state or condition.

```csharp
// Obtain an instance of PathFaceRecord from the subsystem API first
PathFaceRecord pathFaceRecord = ...;
var result = pathFaceRecord.IsValid();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PathFaceRecord pathFaceRecord = ...;
pathFaceRecord.PathFaceRecord(0, 0, 0);
```

## See Also

- [Area Index](../)