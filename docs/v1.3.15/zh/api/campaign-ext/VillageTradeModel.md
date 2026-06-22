<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VillageTradeModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillageTradeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VillageTradeModel : MBGameModel<VillageTradeModel>`
**Base:** `MBGameModel<VillageTradeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VillageTradeModel.cs`

## 概述

`VillageTradeModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<VillageTradeModel>(new MyVillageTradeModel())` 注册，以改变其计算逻辑。

## 主要方法

### TradeBoundDistanceLimitAsDays
```csharp
public abstract float TradeBoundDistanceLimitAsDays(MobileParty.NavigationType navigationType)
```

### GetTradeBoundToAssignForVillage
```csharp
public abstract Settlement GetTradeBoundToAssignForVillage(Village village)
```

## 使用示例

```csharp
// VillageTradeModel (Model) 的典型用法
Game.Current.ReplaceModel<VillageTradeModel>(new MyVillageTradeModel());
```

## 参见

- [完整类目录](../catalog)