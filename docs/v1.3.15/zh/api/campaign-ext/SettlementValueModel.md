<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementValueModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementValueModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementValueModel : MBGameModel<SettlementValueModel>`
**Base:** `MBGameModel<SettlementValueModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementValueModel.cs`

## 概述

`SettlementValueModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<SettlementValueModel>(new MySettlementValueModel())` 注册，以改变其计算逻辑。

## 主要方法

### FindMostSuitableHomeSettlement
```csharp
public abstract Settlement FindMostSuitableHomeSettlement(Clan clan)
```

### CalculateSettlementValueForFaction
```csharp
public abstract float CalculateSettlementValueForFaction(Settlement settlement, IFaction faction)
```

### CalculateSettlementBaseValue
```csharp
public abstract float CalculateSettlementBaseValue(Settlement settlement)
```

### CalculateSettlementValueForEnemyHero
```csharp
public abstract float CalculateSettlementValueForEnemyHero(Settlement settlement, Hero hero)
```

## 使用示例

```csharp
// SettlementValueModel (Model) 的典型用法
Game.Current.ReplaceModel<SettlementValueModel>(new MySettlementValueModel());
```

## 参见

- [完整类目录](../catalog)