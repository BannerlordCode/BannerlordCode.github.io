---
title: "MPArmoryCosmeticCategoryBaseVM"
description: "MPArmoryCosmeticCategoryBaseVM 的自动生成类参考。"
---
# MPArmoryCosmeticCategoryBaseVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPArmoryCosmeticCategoryBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory/MPArmoryCosmeticCategoryBaseVM.cs`

## 概述

`MPArmoryCosmeticCategoryBaseVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CosmeticTypeName` | `public string CosmeticTypeName { get; set; }` |
| `CosmeticCategoryName` | `public string CosmeticCategoryName { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `AvailableCosmetics` | `public MBBindingList<MPArmoryCosmeticItemBaseVM> AvailableCosmetics { get; set; }` |

## 主要方法

### MPArmoryCosmeticCategoryBaseVM
`public unsafe MPArmoryCosmeticCategoryBaseVM(CosmeticType cosmeticType)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MPArmoryCosmeticCategoryBaseVM 对应的操作。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticCategoryBaseVM 实例
MPArmoryCosmeticCategoryBaseVM mPArmoryCosmeticCategoryBaseVM = ...;
var result = mPArmoryCosmeticCategoryBaseVM.MPArmoryCosmeticCategoryBaseVM(cosmeticType);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticCategoryBaseVM 实例
MPArmoryCosmeticCategoryBaseVM mPArmoryCosmeticCategoryBaseVM = ...;
mPArmoryCosmeticCategoryBaseVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticCategoryBaseVM 实例
MPArmoryCosmeticCategoryBaseVM mPArmoryCosmeticCategoryBaseVM = ...;
mPArmoryCosmeticCategoryBaseVM.OnFinalize();
```

### Sort
`public void Sort(MPArmoryCosmeticsVM.CosmeticItemComparer comparer)`

**用途 / Purpose:** **用途 / Purpose:** 对当前对象中的内容进行排序。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticCategoryBaseVM 实例
MPArmoryCosmeticCategoryBaseVM mPArmoryCosmeticCategoryBaseVM = ...;
mPArmoryCosmeticCategoryBaseVM.Sort(comparer);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MPArmoryCosmeticCategoryBaseVM instance = ...;
```

## 参见

- [本区域目录](../)