<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMainAgentControllerEquipDropVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMainAgentControllerEquipDropVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentControllerEquipDropVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD/MissionMainAgentControllerEquipDropVM.cs`

## 概述

`MissionMainAgentControllerEquipDropVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `EquippedWeapons` | `public MBBindingList<ControllerEquippedItemVM> EquippedWeapons { get; set; }` |
| `EquippedExtraWeapon` | `public ControllerEquippedItemVM EquippedExtraWeapon { get; set; }` |
| `HoldToDropText` | `public string HoldToDropText { get; set; }` |
| `PressToEquipText` | `public string PressToEquipText { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `HaveExtraWeapon` | `public bool HaveExtraWeapon { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### InitializeMainAgentPropterties
`public void InitializeMainAgentPropterties()`

**用途 / Purpose:** 初始化 `main agent propterties` 的状态、资源或绑定。

### OnToggle
`public void OnToggle(bool isEnabled)`

**用途 / Purpose:** 当 `toggle` 事件触发时调用此方法。

### OnCancelHoldController
`public void OnCancelHoldController()`

**用途 / Purpose:** 当 `cancel hold controller` 事件触发时调用此方法。

### OnWeaponDroppedAtIndex
`public void OnWeaponDroppedAtIndex(int droppedWeaponIndex)`

**用途 / Purpose:** 当 `weapon dropped at index` 事件触发时调用此方法。

### OnWeaponEquippedAtIndex
`public void OnWeaponEquippedAtIndex(int equippedWeaponIndex)`

**用途 / Purpose:** 当 `weapon equipped at index` 事件触发时调用此方法。

### SetDropProgressForIndex
`public void SetDropProgressForIndex(EquipmentIndex eqIndex, float progress)`

**用途 / Purpose:** 设置 `drop progress for index` 的值或状态。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OnGamepadActiveChanged
`public void OnGamepadActiveChanged(bool isActive)`

**用途 / Purpose:** 当 `gamepad active changed` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MissionMainAgentControllerEquipDropVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)