---
title: "CustomBattleFactionSelectionVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleFactionSelectionVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleFactionSelectionVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleFactionSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem/CustomBattleFactionSelectionVM.cs`

## 概述

`CustomBattleFactionSelectionVM` 位于 `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Factions` | `public MBBindingList<FactionItemVM> Factions { get; set; }` |
| `SelectedFactionName` | `public string SelectedFactionName { get; set; }` |
| `SelectedItem` | `public FactionItemVM SelectedItem { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### SelectFaction
`public void SelectFaction(int index)`

**用途 / Purpose:** 处理 `select faction` 相关逻辑。

### ExecuteRandomize
`public void ExecuteRandomize()`

**用途 / Purpose:** 执行 `randomize` 操作或流程。

## 使用示例

```csharp
var value = new CustomBattleFactionSelectionVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)