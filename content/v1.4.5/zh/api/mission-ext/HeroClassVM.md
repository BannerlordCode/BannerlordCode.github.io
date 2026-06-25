---
title: "HeroClassVM"
description: "HeroClassVM 的自动生成类参考。"
---
# HeroClassVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HeroClassVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/HeroClassVM.cs`

## 概述

`HeroClassVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SelectedPerks` | `public List<IReadOnlyPerkObject> SelectedPerks { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Perks` | `public MBBindingList<HeroPerkVM> Perks { get; set; }` |
| `CultureId` | `public string CultureId { get; set; }` |
| `TroopTypeId` | `public string TroopTypeId { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IconType` | `public string IconType { get; set; }` |
| `Gold` | `public int Gold { get; set; }` |
| `NumOfTroops` | `public int NumOfTroops { get; set; }` |
| `IsGoldEnabled` | `public bool IsGoldEnabled { get; set; }` |
| `IsNumOfTroopsEnabled` | `public bool IsNumOfTroopsEnabled { get; set; }` |
| `CultureColor` | `public Color CultureColor { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 HeroClassVM 实例
HeroClassVM heroClassVM = ...;
heroClassVM.RefreshValues();
```

### UpdateEnabled
`public void UpdateEnabled()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 enabled 的最新表示。

```csharp
// 先通过子系统 API 拿到 HeroClassVM 实例
HeroClassVM heroClassVM = ...;
heroClassVM.UpdateEnabled();
```

### OnSelect
`public void OnSelect()`

**用途 / Purpose:** **用途 / Purpose:** 在 select 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HeroClassVM 实例
HeroClassVM heroClassVM = ...;
heroClassVM.OnSelect();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
HeroClassVM heroClassVM = ...;
heroClassVM.RefreshValues();
```

## 参见

- [本区域目录](../)