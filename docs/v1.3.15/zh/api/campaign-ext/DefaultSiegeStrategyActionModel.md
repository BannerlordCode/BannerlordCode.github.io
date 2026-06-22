<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSiegeStrategyActionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSiegeStrategyActionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSiegeStrategyActionModel : SiegeStrategyActionModel`
**Base:** `SiegeStrategyActionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeStrategyActionModel.cs`

## 概述

`DefaultSiegeStrategyActionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultSiegeStrategyActionModel>(new MyDefaultSiegeStrategyActionModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetLogicalActionForStrategy
```csharp
public override void GetLogicalActionForStrategy(ISiegeEventSide side, out SiegeStrategyActionModel.SiegeAction siegeAction, out SiegeEngineType siegeEngineType, out int deploymentIndex, out int reserveIndex)
```

## 使用示例

```csharp
// DefaultSiegeStrategyActionModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultSiegeStrategyActionModel>(new MyDefaultSiegeStrategyActionModel());
```

## 参见

- [完整类目录](../catalog)