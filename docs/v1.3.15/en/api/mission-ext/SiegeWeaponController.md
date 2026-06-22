<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeWeaponController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeWeaponController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeWeaponController`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/SiegeWeaponController.cs`

## Overview

`SiegeWeaponController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedWeapons` | `public MBReadOnlyList<SiegeWeapon> SelectedWeapons { get { return this._selectedWeapons; }` |

## Key Methods

### Select
```csharp
public void Select(SiegeWeapon weapon)
```

### ClearSelectedWeapons
```csharp
public void ClearSelectedWeapons()
```

### Deselect
```csharp
public void Deselect(SiegeWeapon weapon)
```

### SelectAll
```csharp
public void SelectAll()
```

### IsWeaponSelectable
```csharp
public static bool IsWeaponSelectable(SiegeWeapon weapon)
```

### GetActiveOrderOf
```csharp
public static SiegeWeaponOrderType GetActiveOrderOf(SiegeWeapon weapon)
```

### GetActiveMovementOrderOf
```csharp
public static SiegeWeaponOrderType GetActiveMovementOrderOf(SiegeWeapon weapon)
```

### GetActiveFacingOrderOf
```csharp
public static SiegeWeaponOrderType GetActiveFacingOrderOf(SiegeWeapon weapon)
```

### GetActiveFiringOrderOf
```csharp
public static SiegeWeaponOrderType GetActiveFiringOrderOf(SiegeWeapon weapon)
```

### GetActiveAIControlOrderOf
```csharp
public static SiegeWeaponOrderType GetActiveAIControlOrderOf(SiegeWeapon weapon)
```

### SetOrder
```csharp
public void SetOrder(SiegeWeaponOrderType order)
```

### GetShortcutIndexOf
```csharp
public int GetShortcutIndexOf(SiegeWeapon weapon)
```

## Usage Example

```csharp
// Typical usage of SiegeWeaponController (Controller)
Mission.Current.GetMissionBehavior<SiegeWeaponController>();
```

## See Also

- [Complete Class Catalog](../catalog)