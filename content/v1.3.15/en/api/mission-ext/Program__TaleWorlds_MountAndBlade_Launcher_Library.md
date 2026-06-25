---
title: "Program"
description: "Auto-generated class reference for Program."
---
# Program

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Program`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/Program.cs`

## Overview

`Program` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### NativeMain
`public static void NativeMain(string commandLine)`

**Purpose:** Executes the NativeMain logic.

```csharp
// Static call; no instance required
Program.NativeMain("example");
```

### Main
`public static void Main(string args)`

**Purpose:** Executes the Main logic.

```csharp
// Static call; no instance required
Program.Main("example");
```

### StartGame
`public static void StartGame()`

**Purpose:** Starts the game flow or state machine.

```csharp
// Static call; no instance required
Program.StartGame();
```

### StartDigitalCompanion
`public static void StartDigitalCompanion()`

**Purpose:** Starts the digital companion flow or state machine.

```csharp
// Static call; no instance required
Program.StartDigitalCompanion();
```

### IsDigitalCompanionAvailable
`public static bool IsDigitalCompanionAvailable()`

**Purpose:** Determines whether the this instance is in the digital companion available state or condition.

```csharp
// Static call; no instance required
Program.IsDigitalCompanionAvailable();
```

## Usage Example

```csharp
Program.NativeMain("example");
```

## See Also

- [Area Index](../)