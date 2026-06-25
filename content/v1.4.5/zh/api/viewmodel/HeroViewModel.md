---
title: "HeroViewModel"
description: "HeroViewModel 的自动生成类参考。"
---
# HeroViewModel

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroViewModel : CharacterViewModel`
**Base:** `CharacterViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/HeroViewModel.cs`

## 概述

`HeroViewModel` 是一个 Gauntlet ViewModel——C# 逻辑与 UI 之间的数据绑定桥梁。mod 常通过它暴露状态、命令和列表项给界面。

## 心智模型

把 `HeroViewModel` 当作一个 ViewModel 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDead` | `public bool IsDead { get; set; }` |

## 主要方法

### SetEquipment
`public override void SetEquipment(Equipment equipment)`

**用途 / Purpose:** 为 「equipment」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HeroViewModel 实例
HeroViewModel heroViewModel = ...;
heroViewModel.SetEquipment(equipment);
```

### FillFrom
`public void FillFrom(Hero hero, int seed = -1, bool useCivilian = false, bool useCharacteristicIdleAction = false)`

**用途 / Purpose:** 处理与 「fill from」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 HeroViewModel 实例
HeroViewModel heroViewModel = ...;
heroViewModel.FillFrom(hero, 0, false, false);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HeroViewModel 实例
HeroViewModel heroViewModel = ...;
heroViewModel.OnFinalize();
```

## 使用示例

```csharp
// 将实例绑定到 Movie 或 View 的 ViewModel
HeroViewModel vm = ...;
movie.SetViewModel(vm);
```

## 参见

- [本区域目录](../)