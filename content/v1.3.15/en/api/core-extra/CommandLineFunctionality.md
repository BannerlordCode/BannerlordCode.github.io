---
title: "CommandLineFunctionality"
description: "Auto-generated class reference for CommandLineFunctionality."
---
# CommandLineFunctionality

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class CommandLineFunctionality`
**Base:** none
**File:** `TaleWorlds.Library/CommandLineFunctionality.cs`

## Overview

`CommandLineFunctionality` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CollectCommandLineFunctions
`public static List<string> CollectCommandLineFunctions()`

**Purpose:** Executes the CollectCommandLineFunctions logic.

```csharp
// Static call; no instance required
CommandLineFunctionality.CollectCommandLineFunctions();
```

### HasFunctionForCommand
`public static bool HasFunctionForCommand(string command)`

**Purpose:** Determines whether the this instance already holds function for command.

```csharp
// Static call; no instance required
CommandLineFunctionality.HasFunctionForCommand("example");
```

### CallFunction
`public static string CallFunction(string concatName, string concatArguments, out bool found)`

**Purpose:** Executes the CallFunction logic.

```csharp
// Static call; no instance required
CommandLineFunctionality.CallFunction("example", "example", found);
```

### CallFunction
`public static string CallFunction(string concatName, List<string> argList, out bool found)`

**Purpose:** Executes the CallFunction logic.

```csharp
// Static call; no instance required
CommandLineFunctionality.CallFunction("example", argList, found);
```

### Call
`public string Call(List<string> objects)`

**Purpose:** Executes the Call logic.

```csharp
// Obtain an instance of CommandLineFunctionality from the subsystem API first
CommandLineFunctionality commandLineFunctionality = ...;
var result = commandLineFunctionality.Call(objects);
```

## Usage Example

```csharp
CommandLineFunctionality.CollectCommandLineFunctions();
```

## See Also

- [Area Index](../)