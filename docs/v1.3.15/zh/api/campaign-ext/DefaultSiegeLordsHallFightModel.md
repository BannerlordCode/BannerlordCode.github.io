<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSiegeLordsHallFightModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSiegeLordsHallFightModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSiegeLordsHallFightModel : SiegeLordsHallFightModel`
**Base:** `SiegeLordsHallFightModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeLordsHallFightModel.cs`

## 概述

`DefaultSiegeLordsHallFightModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultSiegeLordsHallFightModel>(new MyDefaultSiegeLordsHallFightModel())` 注册，以改变其计算逻辑。

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
```csharp
public override FlattenedTroopRoster GetPriorityListForLordsHallFightMission(MapEvent playerMapEvent, BattleSideEnum side, int troopCount)
```

## 使用示例

```csharp
// DefaultSiegeLordsHallFightModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultSiegeLordsHallFightModel>(new MyDefaultSiegeLordsHallFightModel());
```

## 参见

- [完整类目录](../catalog)