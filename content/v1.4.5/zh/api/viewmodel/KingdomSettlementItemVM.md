---
title: "KingdomSettlementItemVM"
description: "KingdomSettlementItemVM 的自动生成类参考。"
---
# KingdomSettlementItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomSettlementItemVM : KingdomItemVM`
**Base:** `KingdomItemVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements/KingdomSettlementItemVM.cs`

## 概述

`KingdomSettlementItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Garrison` | `public int Garrison { get; }` |
| `Militia` | `public int Militia { get; }` |
| `ItemProperties` | `public MBBindingList<SelectableFiefItemPropertyVM> ItemProperties { get; set; }` |
| `Villages` | `public MBBindingList<KingdomSettlementVillageItemVM> Villages { get; set; }` |
| `IconPath` | `public string IconPath { get; set; }` |
| `Defenders` | `public int Defenders { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ImageName` | `public string ImageName { get; set; }` |
| `SettlementImagePath` | `public string SettlementImagePath { get; set; }` |
| `GovernorName` | `public string GovernorName { get; set; }` |
| `OwnerClanBanner` | `public BannerImageIdentifierVM OwnerClanBanner { get; set; }` |
| `OwnerClanBanner_9` | `public BannerImageIdentifierVM OwnerClanBanner_9 { get; set; }` |
| `Owner` | `public HeroVM Owner { get; set; }` |
| `WallLevel` | `public int WallLevel { get; set; }` |
| `Prosperity` | `public int Prosperity { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 KingdomSettlementItemVM 实例
KingdomSettlementItemVM kingdomSettlementItemVM = ...;
kingdomSettlementItemVM.RefreshValues();
```

### ExecuteLink
`public void ExecuteLink()`

**用途 / Purpose:** 执行 「link」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 KingdomSettlementItemVM 实例
KingdomSettlementItemVM kingdomSettlementItemVM = ...;
kingdomSettlementItemVM.ExecuteLink();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
KingdomSettlementItemVM kingdomSettlementItemVM = ...;
kingdomSettlementItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)