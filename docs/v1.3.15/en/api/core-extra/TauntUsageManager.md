<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TauntUsageManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TauntUsageManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class TauntUsageManager`
**Base:** none
**File:** `TaleWorlds.Core/TauntUsageManager.cs`

## Overview

`TauntUsageManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `TauntUsageManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static TauntUsageManager Instance { get; }` |
| `UsageFlag` | `public TauntUsageManager.TauntUsage.TauntUsageFlag UsageFlag { get; }` |

## Key Methods

### Initialize
`public static TauntUsageManager Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Read
`public void Read()`

**Purpose:** Handles logic related to `read`.

### GetUsageSet
`public TauntUsageManager.TauntUsageSet GetUsageSet(string id)`

**Purpose:** Gets the current value of `usage set`.

### GetAction
`public string GetAction(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**Purpose:** Gets the current value of `action`.

### GetActionDisabledReasonText
`public static string GetActionDisabledReasonText(TauntUsageManager.TauntUsage.TauntUsageFlag disabledReasonFlag)`

**Purpose:** Gets the current value of `action disabled reason text`.

### GetIsActionNotSuitableReason
`public TauntUsageManager.TauntUsage.TauntUsageFlag GetIsActionNotSuitableReason(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**Purpose:** Gets the current value of `is action not suitable reason`.

### GetTauntItemCount
`public int GetTauntItemCount()`

**Purpose:** Gets the current value of `taunt item count`.

### GetIndexOfAction
`public int GetIndexOfAction(string id)`

**Purpose:** Gets the current value of `index of action`.

### GetDefaultAction
`public string GetDefaultAction(int index)`

**Purpose:** Gets the current value of `default action`.

### Compare
`public int Compare(TauntUsageManager.TauntUsage.TauntUsageFlag x, TauntUsageManager.TauntUsage.TauntUsageFlag y)`

**Purpose:** Handles logic related to `compare`.

### AddUsage
`public void AddUsage(TauntUsageManager.TauntUsage usage)`

**Purpose:** Adds `usage` to the current collection or state.

### GetUsages
`public MBReadOnlyList<TauntUsageManager.TauntUsage> GetUsages()`

**Purpose:** Gets the current value of `usages`.

### IsSuitable
`public bool IsSuitable(bool isLeftStance, bool isOnFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**Purpose:** Handles logic related to `is suitable`.

### GetIsNotSuitableReason
`public TauntUsageManager.TauntUsage.TauntUsageFlag GetIsNotSuitableReason(bool isLeftStance, bool isOnFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**Purpose:** Gets the current value of `is not suitable reason`.

### GetAction
`public string GetAction()`

**Purpose:** Gets the current value of `action`.

## Usage Example

```csharp
var manager = TauntUsageManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)