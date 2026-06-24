<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CommandLineFunctionality`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CommandLineFunctionality

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class CommandLineFunctionality`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/CommandLineFunctionality.cs`

## Overview

`CommandLineFunctionality` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Call
`public string Call(List<string> objects)`

**Purpose:** Handles logic related to `call`.

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

## Usage Example

```csharp
var value = new CommandLineFunctionality();
value.Call(objects);
```

## See Also

- [Complete Class Catalog](../catalog)