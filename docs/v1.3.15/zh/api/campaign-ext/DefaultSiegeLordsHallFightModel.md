<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSiegeLordsHallFightModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSiegeLordsHallFightModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSiegeLordsHallFightModel : SiegeLordsHallFightModel`
**Base:** `SiegeLordsHallFightModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeLordsHallFightModel.cs`

## 概述

`DefaultSiegeLordsHallFightModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSiegeLordsHallFightModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AreaLostRatio` | `public override float AreaLostRatio { get; }` |
| `AttackerDefenderTroopCountRatio` | `public override float AttackerDefenderTroopCountRatio { get; }` |
| `DefenderMaxArcherRatio` | `public override float DefenderMaxArcherRatio { get; }` |
| `MaxDefenderSideTroopCount` | `public override int MaxDefenderSideTroopCount { get; }` |
| `MaxDefenderArcherCount` | `public override int MaxDefenderArcherCount { get; }` |
| `MaxAttackerSideTroopCount` | `public override int MaxAttackerSideTroopCount { get; }` |
| `DefenderTroopNumberForSuccessfulPullBack` | `public override int DefenderTroopNumberForSuccessfulPullBack { get; }` |

## 主要方法

### GetPriorityListForLordsHallFightMission
`public override FlattenedTroopRoster GetPriorityListForLordsHallFightMission(MapEvent playerMapEvent, BattleSideEnum side, int troopCount)`

**用途 / Purpose:** 获取 `priority list for lords hall fight mission` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSiegeLordsHallFightModel>(new MyDefaultSiegeLordsHallFightModel());
```

## 参见

- [完整类目录](../catalog)