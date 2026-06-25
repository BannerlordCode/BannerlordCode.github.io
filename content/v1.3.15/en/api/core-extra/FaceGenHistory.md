---
title: "FaceGenHistory"
description: "Auto-generated class reference for FaceGenHistory."
---
# FaceGenHistory

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class FaceGenHistory`
**Base:** none
**File:** `TaleWorlds.Core/FaceGenHistory.cs`

## Overview

`FaceGenHistory` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ClearHistory
`public void ClearHistory()`

**Purpose:** **Purpose:** Removes all history from the this instance.

```csharp
// Obtain an instance of FaceGenHistory from the subsystem API first
FaceGenHistory faceGenHistory = ...;
faceGenHistory.ClearHistory();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FaceGenHistory faceGenHistory = ...;
faceGenHistory.ClearHistory();
```

## See Also

- [Area Index](../)