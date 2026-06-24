<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMainAgentEquipmentControllerVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMainAgentEquipmentControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentEquipmentControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentEquipmentControllerVM.cs`

## 概述

`MissionMainAgentEquipmentControllerVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDropControllerActive` | `public bool IsDropControllerActive { get; set; }` |
| `IsEquipControllerActive` | `public bool IsEquipControllerActive { get; set; }` |
| `DropText` | `public string DropText { get; set; }` |
| `EquipText` | `public string EquipText { get; set; }` |
| `FocusedItemText` | `public string FocusedItemText { get; set; }` |
| `SelectedItemText` | `public string SelectedItemText { get; set; }` |
| `DropActions` | `public MBBindingList<EquipmentActionItemVM> DropActions { get; set; }` |
| `EquipActions` | `public MBBindingList<EquipmentActionItemVM> EquipActions { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnDropControllerToggle
`public void OnDropControllerToggle(bool isActive)`

**用途 / Purpose:** 当 `drop controller toggle` 事件触发时调用此方法。

### SetCurrentFocusedWeaponEntity
`public void SetCurrentFocusedWeaponEntity(SpawnedItemEntity weaponEntity)`

**用途 / Purpose:** 设置 `current focused weapon entity` 的值或状态。

### OnEquipControllerToggle
`public void OnEquipControllerToggle(bool isActive)`

**用途 / Purpose:** 当 `equip controller toggle` 事件触发时调用此方法。

### OnCancelEquipController
`public void OnCancelEquipController()`

**用途 / Purpose:** 当 `cancel equip controller` 事件触发时调用此方法。

### OnCancelDropController
`public void OnCancelDropController()`

**用途 / Purpose:** 当 `cancel drop controller` 事件触发时调用此方法。

### GetItemTypeAsString
`public static string GetItemTypeAsString(ItemObject item)`

**用途 / Purpose:** 获取 `item type as string` 的当前值。

## 使用示例

```csharp
var value = new MissionMainAgentEquipmentControllerVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)