<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPPerkSelection`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPPerkSelection

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerkSelection`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MPPerkSelectionManager.cs`

## Overview

`MPPerkSelection` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static MPPerkSelectionManager Instance { get; }` |

## Key Methods

### FreeInstance
`public static void FreeInstance()`

**Purpose:** Handles logic related to `free instance`.

### InitializeForUser
`public void InitializeForUser(string username, PlayerId playerId)`

**Purpose:** Initializes the state, resources, or bindings for `for user`.

### ResetPendingChanges
`public void ResetPendingChanges()`

**Purpose:** Resets `pending changes` to its initial state.

### TryToApplyAndSavePendingChanges
`public void TryToApplyAndSavePendingChanges()`

**Purpose:** Attempts to get `to apply and save pending changes`, usually returning the result in an out parameter.

### GetSelectionsForHeroClass
`public List<MPPerkSelectionManager.MPPerkSelection> GetSelectionsForHeroClass(MultiplayerClassDivisions.MPHeroClass currentHeroClass)`

**Purpose:** Gets the current value of `selections for hero class`.

### SetSelectionsForHeroClassTemporarily
`public void SetSelectionsForHeroClassTemporarily(MultiplayerClassDivisions.MPHeroClass currentHeroClass, List<MPPerkSelectionManager.MPPerkSelection> perkChoices)`

**Purpose:** Sets the value or state of `selections for hero class temporarily`.

## Usage Example

```csharp
MPPerkSelection.FreeInstance();
```

## See Also

- [Complete Class Catalog](../catalog)