<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPPerkSelectionManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPPerkSelectionManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerkSelectionManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MPPerkSelectionManager.cs`

## Overview

`MPPerkSelectionManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### FreeInstance
```csharp
public static void FreeInstance()
```

### InitializeForUser
```csharp
public void InitializeForUser(string username, PlayerId playerId)
```

### ResetPendingChanges
```csharp
public void ResetPendingChanges()
```

### TryToApplyAndSavePendingChanges
```csharp
public void TryToApplyAndSavePendingChanges()
```

### GetSelectionsForHeroClass
```csharp
public List<MPPerkSelectionManager.MPPerkSelection> GetSelectionsForHeroClass(MultiplayerClassDivisions.MPHeroClass currentHeroClass)
```

### SetSelectionsForHeroClassTemporarily
```csharp
public void SetSelectionsForHeroClassTemporarily(MultiplayerClassDivisions.MPHeroClass currentHeroClass, List<MPPerkSelectionManager.MPPerkSelection> perkChoices)
```

## Usage Example

```csharp
// Typical usage of MPPerkSelectionManager (Manager)
MPPerkSelectionManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)