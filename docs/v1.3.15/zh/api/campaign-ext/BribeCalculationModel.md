<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BribeCalculationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BribeCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BribeCalculationModel : MBGameModel<BribeCalculationModel>`
**Base:** `MBGameModel<BribeCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BribeCalculationModel.cs`

## 概述

`BribeCalculationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<BribeCalculationModel>(new MyBribeCalculationModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetBribeToEnterLordsHall
```csharp
public abstract int GetBribeToEnterLordsHall(Settlement settlement)
```

### GetBribeToEnterDungeon
```csharp
public abstract int GetBribeToEnterDungeon(Settlement settlement)
```

### IsBribeNotNeededToEnterKeep
```csharp
public abstract bool IsBribeNotNeededToEnterKeep(Settlement settlement)
```

### IsBribeNotNeededToEnterDungeon
```csharp
public abstract bool IsBribeNotNeededToEnterDungeon(Settlement settlement)
```

## 使用示例

```csharp
// BribeCalculationModel (Model) 的典型用法
Game.Current.ReplaceModel<BribeCalculationModel>(new MyBribeCalculationModel());
```

## 参见

- [完整类目录](../catalog)