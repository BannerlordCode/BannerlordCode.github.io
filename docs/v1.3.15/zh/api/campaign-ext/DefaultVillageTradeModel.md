<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultVillageTradeModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultVillageTradeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVillageTradeModel : VillageTradeModel`
**Base:** `VillageTradeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVillageTradeModel.cs`

## 概述

`DefaultVillageTradeModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultVillageTradeModel>(new MyDefaultVillageTradeModel())` 注册，以改变其计算逻辑。

## 主要方法

### TradeBoundDistanceLimitAsDays
```csharp
public override float TradeBoundDistanceLimitAsDays(MobileParty.NavigationType navigationType)
```

### GetTradeBoundToAssignForVillage
```csharp
public override Settlement GetTradeBoundToAssignForVillage(Village village)
```

## 使用示例

```csharp
// DefaultVillageTradeModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultVillageTradeModel>(new MyDefaultVillageTradeModel());
```

## 参见

- [完整类目录](../catalog)