<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultBribeCalculationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBribeCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBribeCalculationModel : BribeCalculationModel`
**Base:** `BribeCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBribeCalculationModel.cs`

## 概述

`DefaultBribeCalculationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultBribeCalculationModel>(new MyDefaultBribeCalculationModel())` 注册，以改变其计算逻辑。

## 主要方法

### IsBribeNotNeededToEnterKeep
```csharp
public override bool IsBribeNotNeededToEnterKeep(Settlement settlement)
```

### IsBribeNotNeededToEnterDungeon
```csharp
public override bool IsBribeNotNeededToEnterDungeon(Settlement settlement)
```

### GetBribeToEnterLordsHall
```csharp
public override int GetBribeToEnterLordsHall(Settlement settlement)
```

### GetBribeToEnterDungeon
```csharp
public override int GetBribeToEnterDungeon(Settlement settlement)
```

## 使用示例

```csharp
// DefaultBribeCalculationModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultBribeCalculationModel>(new MyDefaultBribeCalculationModel());
```

## 参见

- [完整类目录](../catalog)