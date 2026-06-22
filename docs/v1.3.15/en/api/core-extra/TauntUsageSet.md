<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TauntUsageSet`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TauntUsageSet

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `TauntUsageSet` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static TauntUsageManager Instance { get; }` |
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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)