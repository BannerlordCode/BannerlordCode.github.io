<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CommandLineFunctionality`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CommandLineFunctionality

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class CommandLineFunctionality`
**Area:** core-extra

## Overview

`CommandLineFunctionality` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
CommandLineFunctionality.CollectCommandLineFunctions();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
