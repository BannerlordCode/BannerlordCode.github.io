---
title: "WeaponPropertyComparer"
description: "WeaponPropertyComparer 的自动生成类参考。"
---
# WeaponPropertyComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponPropertyComparer : IComparer<CraftingListPropertyItem>`
**Base:** `IComparer<CraftingListPropertyItem>`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignVM.cs`

## 概述

`WeaponPropertyComparer` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Compare
`public int Compare(CraftingListPropertyItem x, CraftingListPropertyItem y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 WeaponPropertyComparer 实例
WeaponPropertyComparer weaponPropertyComparer = ...;
var result = weaponPropertyComparer.Compare(x, y);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WeaponPropertyComparer weaponPropertyComparer = ...;
weaponPropertyComparer.Compare(x, y);
```

## 参见

- [本区域目录](../)