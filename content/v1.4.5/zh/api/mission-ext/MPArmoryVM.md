---
title: "MPArmoryVM"
description: "MPArmoryVM 的自动生成类参考。"
---
# MPArmoryVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory/MPArmoryVM.cs`

## 概述

`MPArmoryVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsManagingTaunts` | `public bool IsManagingTaunts { get; set; }` |
| `IsTauntAssignmentActive` | `public bool IsTauntAssignmentActive { get; set; }` |
| `CanOpenFacegen` | `public bool CanOpenFacegen { get; set; }` |
| `ClassFilter` | `public MPLobbyClassFilterVM ClassFilter { get; set; }` |
| `HeroPreview` | `public MPArmoryHeroPreviewVM HeroPreview { get; set; }` |
| `ClassStats` | `public MPArmoryClassStatsVM ClassStats { get; set; }` |
| `HeroPerkSelection` | `public MPArmoryHeroPerkSelectionVM HeroPerkSelection { get; set; }` |
| `Cosmetics` | `public MPArmoryCosmeticsVM Cosmetics { get; set; }` |
| `TauntAssignmentClickToCloseText` | `public string TauntAssignmentClickToCloseText { get; set; }` |
| `StatsText` | `public string StatsText { get; set; }` |
| `CustomizationText` | `public string CustomizationText { get; set; }` |
| `FacegenText` | `public string FacegenText { get; set; }` |
| `ManageTauntsText` | `public string ManageTauntsText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPArmoryVM 实例
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPArmoryVM 实例
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.OnFinalize();
```

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPArmoryVM 实例
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.OnTick(0);
```

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData)`

**用途 / Purpose:** 使 player data 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPArmoryVM 实例
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.RefreshPlayerData(playerData);
```

### ForceRefreshCharacter
`public void ForceRefreshCharacter()`

**用途 / Purpose:** 调用 ForceRefreshCharacter 对应的操作。

```csharp
// 先通过子系统 API 拿到 MPArmoryVM 实例
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.ForceRefreshCharacter();
```

### SetCanOpenFacegen
`public void SetCanOpenFacegen(bool enabled)`

**用途 / Purpose:** 为 can open facegen 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPArmoryVM 实例
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.SetCanOpenFacegen(false);
```

### ExecuteClearTauntSelection
`public void ExecuteClearTauntSelection()`

**用途 / Purpose:** 执行 clear taunt selection 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPArmoryVM 实例
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.ExecuteClearTauntSelection();
```

### ExecuteToggleManageTauntsState
`public void ExecuteToggleManageTauntsState()`

**用途 / Purpose:** 执行 toggle manage taunts state 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPArmoryVM 实例
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.ExecuteToggleManageTauntsState();
```

### ExecuteSelectFocusedSlot
`public void ExecuteSelectFocusedSlot()`

**用途 / Purpose:** 执行 select focused slot 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPArmoryVM 实例
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.ExecuteSelectFocusedSlot();
```

### ExecuteEmptyFocusedSlot
`public void ExecuteEmptyFocusedSlot()`

**用途 / Purpose:** 执行 empty focused slot 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPArmoryVM 实例
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.ExecuteEmptyFocusedSlot();
```

### ApplyPerkEffectsToEquipment
`public static void ApplyPerkEffectsToEquipment(ref Equipment equipment, List<IReadOnlyPerkObject> selectedPerks)`

**用途 / Purpose:** 将 perk effects to equipment 的效果应用到当前对象。

```csharp
// 静态调用，不需要实例
MPArmoryVM.ApplyPerkEffectsToEquipment(equipment, selectedPerks);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPArmoryVM mPArmoryVM = ...;
mPArmoryVM.RefreshValues();
```

## 参见

- [本区域目录](../)