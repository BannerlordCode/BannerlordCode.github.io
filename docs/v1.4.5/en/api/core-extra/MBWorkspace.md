<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBWorkspace`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBWorkspace

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBWorkspace<T>`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/MBWorkspace.cs`

## Overview

`MBWorkspace` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### StartUsingWorkspace
`public T StartUsingWorkspace()`

**Purpose:** Handles logic related to `start using workspace`.

### StopUsingWorkspace
`public void StopUsingWorkspace()`

**Purpose:** Handles logic related to `stop using workspace`.

### GetWorkspace
`public T GetWorkspace()`

**Purpose:** Gets the current value of `workspace`.

## Usage Example

```csharp
var value = new MBWorkspace();
value.StartUsingWorkspace();
```

## See Also

- [Complete Class Catalog](../catalog)