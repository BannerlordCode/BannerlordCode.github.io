---
title: "Logik"
description: "Auto-generated class reference for Logik."
---
# Logik

**Namespace:** psai.net
**Module:** psai.net
**Type:** `internal class Logik`
**Base:** none
**File:** `bin/TaleWorlds.PSAI/psai.net/Logik.cs`

## Overview

`Logik` lives in `psai.net` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.net` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### LoadSoundtrackByPsaiProject
`public PsaiResult LoadSoundtrackByPsaiProject(PsaiProject psaiProject)`

**Purpose:** Reads soundtrack by psai project from persistent storage or a stream.

```csharp
// Obtain an instance of Logik from the subsystem API first
Logik logik = ...;
var result = logik.LoadSoundtrackByPsaiProject(psaiProject);
```

### SetLastBasicMood
`public void SetLastBasicMood(int themeId)`

**Purpose:** Assigns a new value to last basic mood and updates the object's internal state.

```csharp
// Obtain an instance of Logik from the subsystem API first
Logik logik = ...;
logik.SetLastBasicMood(0);
```

### GoToRest
`public PsaiResult GoToRest(bool immediately, int fadeOutMilliSeconds)`

**Purpose:** Executes the GoToRest logic.

```csharp
// Obtain an instance of Logik from the subsystem API first
Logik logik = ...;
var result = logik.GoToRest(false, 0);
```

### GoToRest
`public PsaiResult GoToRest(bool immediately, int fadeOutMilliSeconds, int restSecondsOverrideMin, int restSecondsOverrideMax)`

**Purpose:** Executes the GoToRest logic.

```csharp
// Obtain an instance of Logik from the subsystem API first
Logik logik = ...;
var result = logik.GoToRest(false, 0, 0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Logik logik = ...;
logik.LoadSoundtrackByPsaiProject(psaiProject);
```

## See Also

- [Area Index](../)