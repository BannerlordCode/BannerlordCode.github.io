---
title: "CommandLineFunctionality"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CommandLineFunctionality`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `collect command line functions`.

### HasFunctionForCommand
`public static bool HasFunctionForCommand(string command)`

**Purpose:** Checks whether the current object has/contains `function for command`.

### CallFunction
`public static string CallFunction(string concatName, string concatArguments, out bool found)`

**Purpose:** Handles logic related to `call function`.

### CallFunction
`public static string CallFunction(string concatName, List<string> argList, out bool found)`

**Purpose:** Handles logic related to `call function`.

### Call
`public string Call(List<string> objects)`

**Purpose:** Handles logic related to `call`.

## Usage Example

```csharp
CommandLineFunctionality.CollectCommandLineFunctions();
```

## See Also

- [Complete Class Catalog](../catalog)