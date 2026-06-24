<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MachineId`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MachineId

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class MachineId`
**Base:** none
**File:** `TaleWorlds.Library/MachineId.cs`

## Overview

`MachineId` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### AsInteger
`public static int AsInteger()`

**Purpose:** Handles logic related to `as integer`.

## Usage Example

```csharp
MachineId.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)