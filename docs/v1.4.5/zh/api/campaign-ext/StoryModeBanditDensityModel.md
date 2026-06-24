<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StoryModeBanditDensityModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeBanditDensityModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeBanditDensityModel : BanditDensityModel`
**Base:** `BanditDensityModel`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeBanditDensityModel.cs`

## 概述

`StoryModeBanditDensityModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModeBanditDensityModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `public override int NumberOfMaximumBanditPartiesAroundEachHideout { get; }` |
| `NumberOfMaximumBanditPartiesInEachHideout` | `public override int NumberOfMaximumBanditPartiesInEachHideout { get; }` |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `public override int NumberOfMaximumHideoutsAtEachBanditFaction { get; }` |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `public override int NumberOfInitialHideoutsAtEachBanditFaction { get; }` |

## 主要方法

### GetMaximumTroopCountForHideoutMission
`public override int GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault)`

**用途 / Purpose:** 获取 `maximum troop count for hideout mission` 的当前值。

### IsPositionInsideNavalSafeZone
`public override bool IsPositionInsideNavalSafeZone(CampaignVec2 position)`

**用途 / Purpose:** 处理 `is position inside naval safe zone` 相关逻辑。

### GetMaxSupportedNumberOfLootersForClan
`public override int GetMaxSupportedNumberOfLootersForClan(Clan clan)`

**用途 / Purpose:** 获取 `max supported number of looters for clan` 的当前值。

### GetMinimumTroopCountForHideoutMission
`public override int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault)`

**用途 / Purpose:** 获取 `minimum troop count for hideout mission` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModeBanditDensityModel>(new MyStoryModeBanditDensityModel());
```

## 参见

- [完整类目录](../catalog)