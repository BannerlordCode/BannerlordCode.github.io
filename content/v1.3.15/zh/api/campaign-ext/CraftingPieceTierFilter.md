---
title: "CraftingPieceTierFilter"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingPieceTierFilter`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingPieceTierFilter

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**模块:** TaleWorlds.CampaignSystem
**类型:** `public enum CraftingPieceTierFilter`
**领域:** campaign-ext

## 概述

`CraftingPieceTierFilter` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 枚举值

| Name |
|------|
| `None` |
| `0` |
| `Tier1` |
| `1` |
| `Tier2` |
| `2` |
| `Tier3` |
| `4` |
| `Tier4` |
| `8` |
| `Tier5` |
| `16` |
| `All` |

## 使用示例

```csharp
CraftingPieceTierFilter example = CraftingPieceTierFilter.None;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
