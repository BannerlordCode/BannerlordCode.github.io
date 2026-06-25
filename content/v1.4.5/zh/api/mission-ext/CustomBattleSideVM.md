---
title: "CustomBattleSideVM"
description: "CustomBattleSideVM 的自动生成类参考。"
---
# CustomBattleSideVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleSideVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSideVM.cs`

## 概述

`CustomBattleSideVM` 位于 `TaleWorlds.MountAndBlade.CustomBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.CustomBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SelectedCharacter` | `public BasicCharacterObject SelectedCharacter { get; }` |
| `CurrentSelectedCharacter` | `public CharacterViewModel CurrentSelectedCharacter { get; set; }` |
| `ArmorsList` | `public MBBindingList<CharacterEquipmentItemVM> ArmorsList { get; set; }` |
| `WeaponsList` | `public MBBindingList<CharacterEquipmentItemVM> WeaponsList { get; set; }` |
| `FactionText` | `public string FactionText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `CharacterSelectionGroup` | `public SelectorVM<CharacterItemVM> CharacterSelectionGroup { get; set; }` |
| `CompositionGroup` | `public ArmyCompositionGroupVM CompositionGroup { get; set; }` |
| `FactionSelectionGroup` | `public CustomBattleFactionSelectionVM FactionSelectionGroup { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CustomBattleSideVM 实例
CustomBattleSideVM customBattleSideVM = ...;
customBattleSideVM.RefreshValues();
```

### OnPlayerTypeChange
`public void OnPlayerTypeChange(CustomBattlePlayerType playerType)`

**用途 / Purpose:** 在 player type change 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CustomBattleSideVM 实例
CustomBattleSideVM customBattleSideVM = ...;
customBattleSideVM.OnPlayerTypeChange(playerType);
```

### UpdateCharacterVisual
`public void UpdateCharacterVisual()`

**用途 / Purpose:** 重新计算并更新 character visual 的最新表示。

```csharp
// 先通过子系统 API 拿到 CustomBattleSideVM 实例
CustomBattleSideVM customBattleSideVM = ...;
customBattleSideVM.UpdateCharacterVisual();
```

### Randomize
`public void Randomize(CustomBattleSideVM oppositeSide = null)`

**用途 / Purpose:** 调用 Randomize 对应的操作。

```csharp
// 先通过子系统 API 拿到 CustomBattleSideVM 实例
CustomBattleSideVM customBattleSideVM = ...;
customBattleSideVM.Randomize(null);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CustomBattleSideVM customBattleSideVM = ...;
customBattleSideVM.RefreshValues();
```

## 参见

- [本区域目录](../)