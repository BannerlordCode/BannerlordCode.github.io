<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMainAgentControllerEquipDropVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMainAgentControllerEquipDropVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionMainAgentControllerEquipDropVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public override void RefreshValues()
```

### InitializeMainAgentPropterties

```csharp
public void InitializeMainAgentPropterties()
```

### OnToggle

```csharp
public void OnToggle(bool isEnabled)
```

### OnCancelHoldController

```csharp
public void OnCancelHoldController()
```

### OnWeaponDroppedAtIndex

```csharp
public void OnWeaponDroppedAtIndex(int droppedWeaponIndex)
```

### OnWeaponEquippedAtIndex

```csharp
public void OnWeaponEquippedAtIndex(int equippedWeaponIndex)
```

### SetDropProgressForIndex

```csharp
public void SetDropProgressForIndex(EquipmentIndex eqIndex, float progress)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### OnGamepadActiveChanged

```csharp
public void OnGamepadActiveChanged(bool isActive)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)