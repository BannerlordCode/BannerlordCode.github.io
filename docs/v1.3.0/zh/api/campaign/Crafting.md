<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Crafting`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Crafting

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Crafting`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## 概述

`Crafting` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IronMaker` | `public static PerkObject IronMaker { get; }` |
| `CharcoalMaker` | `public static PerkObject CharcoalMaker { get; }` |
| `SteelMaker` | `public static PerkObject SteelMaker { get; }` |
| `SteelMaker2` | `public static PerkObject SteelMaker2 { get; }` |
| `SteelMaker3` | `public static PerkObject SteelMaker3 { get; }` |
| `CuriousSmelter` | `public static PerkObject CuriousSmelter { get; }` |
| `CuriousSmith` | `public static PerkObject CuriousSmith { get; }` |
| `PracticalRefiner` | `public static PerkObject PracticalRefiner { get; }` |
| `PracticalSmelter` | `public static PerkObject PracticalSmelter { get; }` |
| `PracticalSmith` | `public static PerkObject PracticalSmith { get; }` |
| `ArtisanSmith` | `public static PerkObject ArtisanSmith { get; }` |
| `ExperiencedSmith` | `public static PerkObject ExperiencedSmith { get; }` |
| `MasterSmith` | `public static PerkObject MasterSmith { get; }` |
| `LegendarySmith` | `public static PerkObject LegendarySmith { get; }` |
| `VigorousSmith` | `public static PerkObject VigorousSmith { get; }` |
| `StrongSmith` | `public static PerkObject StrongSmith { get; }` |
| `EnduringSmith` | `public static PerkObject EnduringSmith { get; }` |
| `WeaponMasterSmith` | `public static PerkObject WeaponMasterSmith { get; }` |
| `SharpenedEdge` | `public static PerkObject SharpenedEdge { get; }` |
| `SharpenedTip` | `public static PerkObject SharpenedTip { get; }` |

## 使用示例

```csharp
var example = new Crafting();
```

## 参见

- [完整类目录](../catalog)