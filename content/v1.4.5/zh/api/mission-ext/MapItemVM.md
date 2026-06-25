---
title: "MapItemVM"
description: "MapItemVM 的自动生成类参考。"
---
# MapItemVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapItemVM : SelectorItemVM`
**Base:** `SelectorItemVM`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem/MapItemVM.cs`

## 概述

`MapItemVM` 位于 `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MapName` | `public string MapName { get; }` |
| `MapId` | `public string MapId { get; }` |
| `ForcedSceneLevel` | `public string ForcedSceneLevel { get; }` |
| `NameText` | `public string NameText { get; set; }` |

## 主要方法

### UpdateSearchedText
`public void UpdateSearchedText(string searchedText)`

**用途 / Purpose:** 重新计算并更新 「searched text」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MapItemVM 实例
MapItemVM mapItemVM = ...;
mapItemVM.UpdateSearchedText("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapItemVM mapItemVM = ...;
mapItemVM.UpdateSearchedText("example");
```

## 参见

- [本区域目录](../)