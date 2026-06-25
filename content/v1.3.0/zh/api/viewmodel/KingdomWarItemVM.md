---
title: "KingdomWarItemVM"
description: "KingdomWarItemVM 的自动生成类参考。"
---
# KingdomWarItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomWarItemVM : KingdomDiplomacyItemVM`
**Base:** `KingdomDiplomacyItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarItemVM.cs`

## 概述

`KingdomWarItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `WarName` | `public string WarName { get; set; }` |
| `NumberOfDaysSinceWarBegan` | `public string NumberOfDaysSinceWarBegan { get; set; }` |
| `IsBehaviorSelectionEnabled` | `public bool IsBehaviorSelectionEnabled { get; set; }` |
| `Score` | `public int Score { get; set; }` |
| `CasualtiesOfFaction1` | `public int CasualtiesOfFaction1 { get; set; }` |
| `CasualtiesOfFaction2` | `public int CasualtiesOfFaction2 { get; set; }` |
| `WarLog` | `public MBBindingList<KingdomWarLogItemVM> WarLog { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 KingdomWarItemVM 实例
KingdomWarItemVM kingdomWarItemVM = ...;
kingdomWarItemVM.RefreshValues();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
KingdomWarItemVM kingdomWarItemVM = ...;
kingdomWarItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)