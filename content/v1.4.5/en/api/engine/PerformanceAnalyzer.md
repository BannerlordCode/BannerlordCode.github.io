---
title: "PerformanceAnalyzer"
description: "Auto-generated class reference for PerformanceAnalyzer."
---
# PerformanceAnalyzer

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class PerformanceAnalyzer`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/PerformanceAnalyzer.cs`

## Overview

`PerformanceAnalyzer` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddFps
`public void AddFps(float fps, float main, float renderer)`

**Purpose:** Adds fps to the current collection or state.

```csharp
// Obtain an instance of PerformanceAnalyzer from the subsystem API first
PerformanceAnalyzer performanceAnalyzer = ...;
performanceAnalyzer.AddFps(0, 0, 0);
```

### Write
`public void Write(XmlNode node, XmlDocument document)`

**Purpose:** Writes the this instance's data to the target location.

```csharp
// Obtain an instance of PerformanceAnalyzer from the subsystem API first
PerformanceAnalyzer performanceAnalyzer = ...;
performanceAnalyzer.Write(node, document);
```

### Start
`public void Start(string name)`

**Purpose:** Starts the this instance's flow or state machine.

```csharp
// Obtain an instance of PerformanceAnalyzer from the subsystem API first
PerformanceAnalyzer performanceAnalyzer = ...;
performanceAnalyzer.Start("example");
```

### End
`public void End()`

**Purpose:** Executes the End logic.

```csharp
// Obtain an instance of PerformanceAnalyzer from the subsystem API first
PerformanceAnalyzer performanceAnalyzer = ...;
performanceAnalyzer.End();
```

### FinalizeAndWrite
`public void FinalizeAndWrite(string filePath)`

**Purpose:** Executes the FinalizeAndWrite logic.

```csharp
// Obtain an instance of PerformanceAnalyzer from the subsystem API first
PerformanceAnalyzer performanceAnalyzer = ...;
performanceAnalyzer.FinalizeAndWrite("example");
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of PerformanceAnalyzer from the subsystem API first
PerformanceAnalyzer performanceAnalyzer = ...;
performanceAnalyzer.Tick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PerformanceAnalyzer performanceAnalyzer = ...;
performanceAnalyzer.AddFps(0, 0, 0);
```

## See Also

- [Area Index](../)