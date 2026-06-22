<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeWeaponController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeWeaponController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeWeaponController`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/SiegeWeaponController.cs`

## 概述

`SiegeWeaponController` 是一个任务控制器，驱动某个任务子系统（部署、高光、援兵等）。经 Mission.Current 或作为任务行为访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `SelectedWeapons` | `public MBReadOnlyList<SiegeWeapon> SelectedWeapons { get { return this._selectedWeapons; }` |

## 主要方法

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

## 使用示例

```csharp
// SiegeWeaponController (Controller) 的典型用法
Mission.Current.GetMissionBehavior<SiegeWeaponController>();
```

## 参见

- [完整类目录](../catalog)