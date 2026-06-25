---
title: "HeroViewModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeroViewModel`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# HeroViewModel

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroViewModel : CharacterViewModel`
**Base:** `CharacterViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/HeroViewModel.cs`

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

**用途 / Purpose:** 设置 `equipment` 的值或状态。

### FillFrom
`public void FillFrom(Hero hero, int seed = -1, bool useCivilian = false, bool useCharacteristicIdleAction = false)`

**用途 / Purpose:** 处理 `fill from` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var vm = new HeroViewModel();
movie.SetViewModel(vm);
```

## 参见

- [完整类目录](../catalog)