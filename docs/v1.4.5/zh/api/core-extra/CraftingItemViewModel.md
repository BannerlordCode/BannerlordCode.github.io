<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingItemViewModel`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingItemViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class CraftingItemViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection/CraftingItemViewModel.cs`

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

**用途 / Purpose:** 获取 `weapon class` 的当前值。

### SetCraftingData
`public void SetCraftingData(WeaponClass weaponClass, WeaponDesignElement craftingPieces)`

**用途 / Purpose:** 设置 `crafting data` 的值或状态。

## 使用示例

```csharp
var vm = new CraftingItemViewModel();
movie.SetViewModel(vm);
```

## 参见

- [完整类目录](../catalog)