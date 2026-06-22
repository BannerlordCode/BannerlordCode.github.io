<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMainAgentEquipmentControllerVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMainAgentEquipmentControllerVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionMainAgentEquipmentControllerVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public override void RefreshValues()
```

### OnDropControllerToggle

```csharp
public void OnDropControllerToggle(bool isActive)
```

### SetCurrentFocusedWeaponEntity

```csharp
public void SetCurrentFocusedWeaponEntity(SpawnedItemEntity weaponEntity)
```

### OnEquipControllerToggle

```csharp
public void OnEquipControllerToggle(bool isActive)
```

### OnCancelEquipController

```csharp
public void OnCancelEquipController()
```

### OnCancelDropController

```csharp
public void OnCancelDropController()
```

### GetItemTypeAsString

```csharp
public static string GetItemTypeAsString(ItemObject item)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)