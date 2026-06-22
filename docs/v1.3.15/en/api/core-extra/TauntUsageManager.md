<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TauntUsageManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TauntUsageManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class TauntUsageManager`
**Base:** none
**File:** `TaleWorlds.Core/TauntUsageManager.cs`

## Overview

`TauntUsageManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static TauntUsageManager Instance { get { if (TauntUsageManager._instance == null) { TauntUsageManager._instance = TauntUsageManager.Initialize(); }` |
| `UsageFlag` | `public TauntUsageManager.TauntUsage.TauntUsageFlag UsageFlag { get; }` |

## Key Methods

### Initialize
```csharp
public static TauntUsageManager Initialize()
```

### Read
```csharp
public void Read()
```

### GetUsageSet
```csharp
public TauntUsageManager.TauntUsageSet GetUsageSet(string id)
```

### GetAction
```csharp
public string GetAction(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)
```

### GetActionDisabledReasonText
```csharp
public static string GetActionDisabledReasonText(TauntUsageManager.TauntUsage.TauntUsageFlag disabledReasonFlag)
```

### GetIsActionNotSuitableReason
```csharp
public TauntUsageManager.TauntUsage.TauntUsageFlag GetIsActionNotSuitableReason(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)
```

### GetTauntItemCount
```csharp
public int GetTauntItemCount()
```

### GetIndexOfAction
```csharp
public int GetIndexOfAction(string id)
```

### GetDefaultAction
```csharp
public string GetDefaultAction(int index)
```

### Compare
```csharp
public int Compare(TauntUsageManager.TauntUsage.TauntUsageFlag x, TauntUsageManager.TauntUsage.TauntUsageFlag y)
```

### AddUsage
```csharp
public void AddUsage(TauntUsageManager.TauntUsage usage)
```

### GetUsages
```csharp
public MBReadOnlyList<TauntUsageManager.TauntUsage> GetUsages()
```

### IsSuitable
```csharp
public bool IsSuitable(bool isLeftStance, bool isOnFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)
```

### GetIsNotSuitableReason
```csharp
public TauntUsageManager.TauntUsage.TauntUsageFlag GetIsNotSuitableReason(bool isLeftStance, bool isOnFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)
```

### GetAction
```csharp
public string GetAction()
```

## Usage Example

```csharp
// Typical usage of TauntUsageManager (Manager)
TauntUsageManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)