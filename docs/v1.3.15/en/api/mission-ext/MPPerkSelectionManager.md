<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPPerkSelectionManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPPerkSelectionManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerkSelectionManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MPPerkSelectionManager.cs`

## Overview

`MPPerkSelectionManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MPPerkSelectionManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
var manager = MPPerkSelectionManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)