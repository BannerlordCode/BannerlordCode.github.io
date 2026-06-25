---
title: "KingdomClanItemVM"
description: "KingdomClanItemVM 的自动生成类参考。"
---
# KingdomClanItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomClanItemVM : KingdomItemVM`
**Base:** `KingdomItemVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans/KingdomClanItemVM.cs`

## 概述

`KingdomClanItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `ClanType` | `public int ClanType { get; set; }` |
| `NumOfMembers` | `public int NumOfMembers { get; set; }` |
| `NumOfFiefs` | `public int NumOfFiefs { get; set; }` |
| `TierText` | `public string TierText { get; set; }` |
| `Banner` | `public BannerImageIdentifierVM Banner { get; set; }` |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9 { get; set; }` |
| `Members` | `public MBBindingList<HeroVM> Members { get; set; }` |
| `Fiefs` | `public MBBindingList<KingdomClanFiefItemVM> Fiefs { get; set; }` |
| `Influence` | `public int Influence { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 KingdomClanItemVM 实例
KingdomClanItemVM kingdomClanItemVM = ...;
kingdomClanItemVM.RefreshValues();
```

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 KingdomClanItemVM 实例
KingdomClanItemVM kingdomClanItemVM = ...;
kingdomClanItemVM.Refresh();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
KingdomClanItemVM kingdomClanItemVM = ...;
kingdomClanItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)