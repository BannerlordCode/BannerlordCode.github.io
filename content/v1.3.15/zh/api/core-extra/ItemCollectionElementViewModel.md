---
title: "ItemCollectionElementViewModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemCollectionElementViewModel`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemCollectionElementViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class ItemCollectionElementViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/ItemCollectionElementViewModel.cs`

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

**用途 / Purpose:** 处理 `fill from` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var vm = new ItemCollectionElementViewModel();
movie.SetViewModel(vm);
```

## 参见

- [完整类目录](../catalog)