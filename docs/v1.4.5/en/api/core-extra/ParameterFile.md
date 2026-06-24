<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ParameterFile`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ParameterFile

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ParameterFile`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/ParameterFile.cs`

## Overview

`ParameterFile` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Path` | `public string Path { get; }` |
| `LastCheckedTime` | `public DateTime LastCheckedTime { get; }` |
| `ParameterContainer` | `public ParameterContainer ParameterContainer { get; }` |

## Key Methods

### CheckIfNeedsToBeRefreshed
`public bool CheckIfNeedsToBeRefreshed()`

**Purpose:** Handles logic related to `check if needs to be refreshed`.

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

## Usage Example

```csharp
var value = new ParameterFile();
value.CheckIfNeedsToBeRefreshed();
```

## See Also

- [Complete Class Catalog](../catalog)