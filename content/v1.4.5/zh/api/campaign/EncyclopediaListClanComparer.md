---
title: "EncyclopediaListClanComparer"
description: "EncyclopediaListClanComparer 的自动生成类参考。"
---
# EncyclopediaListClanComparer

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncyclopediaListClanComparer : EncyclopediaListItemComparerBase`
**Base:** `EncyclopediaListItemComparerBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encyclopedia.Pages/DefaultEncyclopediaClanPage.cs`

## 概述

`EncyclopediaListClanComparer` 位于 `TaleWorlds.CampaignSystem.Encyclopedia.Pages`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Encyclopedia.Pages` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CompareClans
`public int CompareClans(EncyclopediaListItem x, EncyclopediaListItem y, Func<Clan, Clan, int> comparison)`

**用途 / Purpose:** 比较两个「clans」对象并返回大小/顺序结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListClanComparer 实例
EncyclopediaListClanComparer encyclopediaListClanComparer = ...;
var result = encyclopediaListClanComparer.CompareClans(x, y, func<Clan, clan, 0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
EncyclopediaListClanComparer instance = ...;
```

## 参见

- [本区域目录](../)