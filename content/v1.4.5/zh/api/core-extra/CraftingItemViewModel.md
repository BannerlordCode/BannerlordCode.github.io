---
title: "CraftingItemViewModel"
description: "CraftingItemViewModel 的自动生成类参考。"
---
# CraftingItemViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class CraftingItemViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection/CraftingItemViewModel.cs`

## 概述

`CraftingItemViewModel` 是一个 Gauntlet ViewModel——C# 逻辑与 UI 之间的数据绑定桥梁。mod 常通过它暴露状态、命令和列表项给界面。

## 心智模型

把 `CraftingItemViewModel` 当作一个 ViewModel 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `UsedPieces` | `public string UsedPieces { get; set; }` |
| `WeaponClass` | `public int WeaponClass { get; set; }` |

## 主要方法

### GetWeaponClass
`public WeaponClass GetWeaponClass()`

**用途 / Purpose:** 读取并返回当前对象中 weapon class 的结果。

```csharp
// 先通过子系统 API 拿到 CraftingItemViewModel 实例
CraftingItemViewModel craftingItemViewModel = ...;
var result = craftingItemViewModel.GetWeaponClass();
```

### SetCraftingData
`public void SetCraftingData(WeaponClass weaponClass, WeaponDesignElement craftingPieces)`

**用途 / Purpose:** 为 crafting data 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CraftingItemViewModel 实例
CraftingItemViewModel craftingItemViewModel = ...;
craftingItemViewModel.SetCraftingData(weaponClass, craftingPieces);
```

## 使用示例

```csharp
// 将实例绑定到 Movie 或 View 的 ViewModel
CraftingItemViewModel vm = ...;
movie.SetViewModel(vm);
```

## 参见

- [本区域目录](../)