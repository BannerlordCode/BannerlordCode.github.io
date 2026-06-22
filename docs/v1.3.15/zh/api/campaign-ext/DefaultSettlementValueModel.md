<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSettlementValueModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementValueModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementValueModel : SettlementValueModel`
**Base:** `SettlementValueModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementValueModel.cs`

## 概述

`DefaultSettlementValueModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultSettlementValueModel>(new MyDefaultSettlementValueModel())` 注册，以改变其计算逻辑。

## 主要方法

### FindMostSuitableHomeSettlement
```csharp
public override Settlement FindMostSuitableHomeSettlement(Clan clan)
```

### CalculateSettlementBaseValue
```csharp
public override float CalculateSettlementBaseValue(Settlement settlement)
```

### CalculateSettlementValueForFaction
```csharp
public override float CalculateSettlementValueForFaction(Settlement settlement, IFaction faction)
```

### CalculateSettlementValueForEnemyHero
```csharp
public override float CalculateSettlementValueForEnemyHero(Settlement settlement, Hero hero)
```

## 使用示例

```csharp
// DefaultSettlementValueModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultSettlementValueModel>(new MyDefaultSettlementValueModel());
```

## 参见

- [完整类目录](../catalog)