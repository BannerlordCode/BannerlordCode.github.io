<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeWeaponController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeWeaponController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeWeaponController`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/SiegeWeaponController.cs`

## 概述

`SiegeWeaponController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `SiegeWeaponController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SelectedWeapons` | `public MBReadOnlyList<SiegeWeapon> SelectedWeapons { get; }` |

## 主要方法

### Select
`public void Select(SiegeWeapon weapon)`

**用途 / Purpose:** 处理 `select` 相关逻辑。

### ClearSelectedWeapons
`public void ClearSelectedWeapons()`

**用途 / Purpose:** 处理 `clear selected weapons` 相关逻辑。

### Deselect
`public void Deselect(SiegeWeapon weapon)`

**用途 / Purpose:** 处理 `deselect` 相关逻辑。

### SelectAll
`public void SelectAll()`

**用途 / Purpose:** 处理 `select all` 相关逻辑。

### IsWeaponSelectable
`public static bool IsWeaponSelectable(SiegeWeapon weapon)`

**用途 / Purpose:** 处理 `is weapon selectable` 相关逻辑。

### GetActiveOrderOf
`public static SiegeWeaponOrderType GetActiveOrderOf(SiegeWeapon weapon)`

**用途 / Purpose:** 获取 `active order of` 的当前值。

### GetActiveMovementOrderOf
`public static SiegeWeaponOrderType GetActiveMovementOrderOf(SiegeWeapon weapon)`

**用途 / Purpose:** 获取 `active movement order of` 的当前值。

### GetActiveFacingOrderOf
`public static SiegeWeaponOrderType GetActiveFacingOrderOf(SiegeWeapon weapon)`

**用途 / Purpose:** 获取 `active facing order of` 的当前值。

### GetActiveFiringOrderOf
`public static SiegeWeaponOrderType GetActiveFiringOrderOf(SiegeWeapon weapon)`

**用途 / Purpose:** 获取 `active firing order of` 的当前值。

### GetActiveAIControlOrderOf
`public static SiegeWeaponOrderType GetActiveAIControlOrderOf(SiegeWeapon weapon)`

**用途 / Purpose:** 获取 `active a i control order of` 的当前值。

### SetOrder
`public void SetOrder(SiegeWeaponOrderType order)`

**用途 / Purpose:** 设置 `order` 的值或状态。

### GetShortcutIndexOf
`public int GetShortcutIndexOf(SiegeWeapon weapon)`

**用途 / Purpose:** 获取 `shortcut index of` 的当前值。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<SiegeWeaponController>();
```

## 参见

- [完整类目录](../catalog)