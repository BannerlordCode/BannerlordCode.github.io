---
title: "CharacterViewModel"
description: "CharacterViewModel 的自动生成类参考。"
---
# CharacterViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class CharacterViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection/CharacterViewModel.cs`

## 概述

`CharacterViewModel` 是一个 Gauntlet ViewModel——C# 逻辑与 UI 之间的数据绑定桥梁。mod 常通过它暴露状态、命令和列表项给界面。

## 心智模型

把 `CharacterViewModel` 当作一个 ViewModel 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BannerCodeText` | `public string BannerCodeText { get; set; }` |
| `BodyProperties` | `public string BodyProperties { get; set; }` |
| `MountCreationKey` | `public string MountCreationKey { get; set; }` |
| `CharStringId` | `public string CharStringId { get; set; }` |
| `CustomAnimation` | `public string CustomAnimation { get; set; }` |
| `StanceIndex` | `public int StanceIndex { get; }` |
| `IsFemale` | `public bool IsFemale { get; set; }` |
| `IsHidden` | `public bool IsHidden { get; set; }` |
| `IsTableauEnabled` | `public bool IsTableauEnabled { get; set; }` |
| `IsPlayingCustomAnimations` | `public bool IsPlayingCustomAnimations { get; set; }` |
| `ShouldLoopCustomAnimation` | `public bool ShouldLoopCustomAnimation { get; set; }` |
| `CustomAnimationProgressRatio` | `public float CustomAnimationProgressRatio { get; set; }` |
| `CustomAnimationWaitDuration` | `public float CustomAnimationWaitDuration { get; set; }` |
| `Race` | `public int Race { get; set; }` |
| `HasMount` | `public bool HasMount { get; set; }` |
| `EquipmentCode` | `public string EquipmentCode { get; set; }` |
| `IdleAction` | `public string IdleAction { get; set; }` |
| `IdleFaceAnim` | `public string IdleFaceAnim { get; set; }` |
| `ArmorColor1` | `public uint ArmorColor1 { get; set; }` |
| `ArmorColor2` | `public uint ArmorColor2 { get; set; }` |
| `LeftHandWieldedEquipmentIndex` | `public int LeftHandWieldedEquipmentIndex { get; set; }` |
| `RightHandWieldedEquipmentIndex` | `public int RightHandWieldedEquipmentIndex { get; set; }` |

## 主要方法

### SetEquipment
`public void SetEquipment(EquipmentIndex index, EquipmentElement item)`

**用途 / Purpose:** 为 equipment 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterViewModel 实例
CharacterViewModel characterViewModel = ...;
characterViewModel.SetEquipment(index, item);
```

### SetEquipment
`public virtual void SetEquipment(Equipment equipment)`

**用途 / Purpose:** 为 equipment 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterViewModel 实例
CharacterViewModel characterViewModel = ...;
characterViewModel.SetEquipment(equipment);
```

### FillFrom
`public void FillFrom(BasicCharacterObject character, int seed = -1, string bannerCode = null)`

**用途 / Purpose:** 调用 FillFrom 对应的操作。

```csharp
// 先通过子系统 API 拿到 CharacterViewModel 实例
CharacterViewModel characterViewModel = ...;
characterViewModel.FillFrom(character, 0, "example");
```

### FillFrom
`public void FillFrom(CharacterViewModel characterViewModel, int seed = -1)`

**用途 / Purpose:** 调用 FillFrom 对应的操作。

```csharp
// 先通过子系统 API 拿到 CharacterViewModel 实例
CharacterViewModel characterViewModel = ...;
characterViewModel.FillFrom(characterViewModel, 0);
```

### ExecuteEquipWeaponAtIndex
`public void ExecuteEquipWeaponAtIndex(EquipmentIndex index, bool isLeftHand)`

**用途 / Purpose:** 执行 equip weapon at index 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CharacterViewModel 实例
CharacterViewModel characterViewModel = ...;
characterViewModel.ExecuteEquipWeaponAtIndex(index, false);
```

### ExecuteStartCustomAnimation
`public void ExecuteStartCustomAnimation(string animation, bool loop = false, float loopInterval = 0f)`

**用途 / Purpose:** 执行 start custom animation 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CharacterViewModel 实例
CharacterViewModel characterViewModel = ...;
characterViewModel.ExecuteStartCustomAnimation("example", false, 0);
```

### ExecuteStopCustomAnimation
`public void ExecuteStopCustomAnimation()`

**用途 / Purpose:** 执行 stop custom animation 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CharacterViewModel 实例
CharacterViewModel characterViewModel = ...;
characterViewModel.ExecuteStopCustomAnimation();
```

## 使用示例

```csharp
// 将实例绑定到 Movie 或 View 的 ViewModel
CharacterViewModel vm = ...;
movie.SetViewModel(vm);
```

## 参见

- [本区域目录](../)