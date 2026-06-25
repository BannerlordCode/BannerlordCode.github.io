---
title: "HeroClassVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeroClassVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# HeroClassVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HeroClassVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/HeroClassVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### UpdateEnabled
`public void UpdateEnabled()`

**用途 / Purpose:** 更新 `enabled` 的状态或数据。

### OnSelect
`public void OnSelect()`

**用途 / Purpose:** 当 `select` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new HeroClassVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)