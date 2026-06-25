---
title: "ItemCollectionElementViewModel"
description: "ItemCollectionElementViewModel 的自动生成类参考。"
---
# ItemCollectionElementViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class ItemCollectionElementViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection/ItemCollectionElementViewModel.cs`

## 概述

`ItemCollectionElementViewModel` 是一个 Gauntlet ViewModel——C# 逻辑与 UI 之间的数据绑定桥梁。mod 常通过它暴露状态、命令和列表项给界面。

## 心智模型

把 `ItemCollectionElementViewModel` 当作一个 ViewModel 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `StringId` | `public string StringId { get; set; }` |
| `Ammo` | `public int Ammo { get; set; }` |
| `AverageUnitCost` | `public int AverageUnitCost { get; set; }` |
| `ItemModifierId` | `public string ItemModifierId { get; set; }` |
| `BannerCode` | `public string BannerCode { get; set; }` |
| `InitialPanRotation` | `public float InitialPanRotation { get; set; }` |

## 主要方法

### FillFrom
`public void FillFrom(EquipmentElement item, Banner banner = null)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FillFrom 对应的操作。

```csharp
// 先通过子系统 API 拿到 ItemCollectionElementViewModel 实例
ItemCollectionElementViewModel itemCollectionElementViewModel = ...;
itemCollectionElementViewModel.FillFrom(item, null);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ItemCollectionElementViewModel 实例
ItemCollectionElementViewModel itemCollectionElementViewModel = ...;
itemCollectionElementViewModel.OnFinalize();
```

## 使用示例

```csharp
// 将实例绑定到 Movie 或 View 的 ViewModel
ItemCollectionElementViewModel vm = ...;
movie.SetViewModel(vm);
```

## 参见

- [本区域目录](../)