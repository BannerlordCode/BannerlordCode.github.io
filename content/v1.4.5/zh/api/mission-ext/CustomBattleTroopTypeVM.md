---
title: "CustomBattleTroopTypeVM"
description: "CustomBattleTroopTypeVM 的自动生成类参考。"
---
# CustomBattleTroopTypeVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleTroopTypeVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleTroopTypeVM.cs`

## 概述

`CustomBattleTroopTypeVM` 位于 `TaleWorlds.MountAndBlade.CustomBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.CustomBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Character` | `public BasicCharacterObject Character { get; }` |
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `TroopSkillsHint` | `public BasicTooltipViewModel TroopSkillsHint { get; set; }` |
| `NameHint` | `public HintViewModel NameHint { get; set; }` |
| `TierIconData` | `public StringItemWithHintVM TierIconData { get; set; }` |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CustomBattleTroopTypeVM 实例
CustomBattleTroopTypeVM customBattleTroopTypeVM = ...;
customBattleTroopTypeVM.RefreshValues();
```

### ExecuteToggleSelection
`public void ExecuteToggleSelection()`

**用途 / Purpose:** 执行 toggle selection 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CustomBattleTroopTypeVM 实例
CustomBattleTroopTypeVM customBattleTroopTypeVM = ...;
customBattleTroopTypeVM.ExecuteToggleSelection();
```

### ExecuteRandomize
`public void ExecuteRandomize()`

**用途 / Purpose:** 执行 randomize 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CustomBattleTroopTypeVM 实例
CustomBattleTroopTypeVM customBattleTroopTypeVM = ...;
customBattleTroopTypeVM.ExecuteRandomize();
```

### GetCharacterTierData
`public static StringItemWithHintVM GetCharacterTierData(BasicCharacterObject character, bool isBig = false)`

**用途 / Purpose:** 读取并返回当前对象中 character tier data 的结果。

```csharp
// 静态调用，不需要实例
CustomBattleTroopTypeVM.GetCharacterTierData(character, false);
```

### GetCharacterTier
`public static int GetCharacterTier(BasicCharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 character tier 的结果。

```csharp
// 静态调用，不需要实例
CustomBattleTroopTypeVM.GetCharacterTier(character);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CustomBattleTroopTypeVM customBattleTroopTypeVM = ...;
customBattleTroopTypeVM.RefreshValues();
```

## 参见

- [本区域目录](../)