<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPPerkSelection`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPPerkSelection

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MPPerkSelection` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static MPPerkSelectionManager Instance { get; }` |


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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)