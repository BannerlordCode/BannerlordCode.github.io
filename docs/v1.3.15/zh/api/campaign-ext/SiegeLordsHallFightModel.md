<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeLordsHallFightModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeLordsHallFightModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SiegeLordsHallFightModel : MBGameModel<SiegeLordsHallFightModel>`
**Base:** `MBGameModel<SiegeLordsHallFightModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeLordsHallFightModel.cs`

## 概述

`SiegeLordsHallFightModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<SiegeLordsHallFightModel>(new MySiegeLordsHallFightModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `AreaLostRatio` | `public abstract float AreaLostRatio { get; }` |
| `AttackerDefenderTroopCountRatio` | `public abstract float AttackerDefenderTroopCountRatio { get; }` |
| `DefenderTroopNumberForSuccessfulPullBack` | `public abstract int DefenderTroopNumberForSuccessfulPullBack { get; }` |
| `DefenderMaxArcherRatio` | `public abstract float DefenderMaxArcherRatio { get; }` |
| `MaxDefenderSideTroopCount` | `public abstract int MaxDefenderSideTroopCount { get; }` |
| `MaxDefenderArcherCount` | `public abstract int MaxDefenderArcherCount { get; }` |
| `MaxAttackerSideTroopCount` | `public abstract int MaxAttackerSideTroopCount { get; }` |

## 主要方法

### GetPriorityListForLordsHallFightMission
```csharp
public abstract FlattenedTroopRoster GetPriorityListForLordsHallFightMission(MapEvent playerMapEvent, BattleSideEnum side, int troopCount)
```

## 使用示例

```csharp
// SiegeLordsHallFightModel (Model) 的典型用法
Game.Current.ReplaceModel<SiegeLordsHallFightModel>(new MySiegeLordsHallFightModel());
```

## 参见

- [完整类目录](../catalog)