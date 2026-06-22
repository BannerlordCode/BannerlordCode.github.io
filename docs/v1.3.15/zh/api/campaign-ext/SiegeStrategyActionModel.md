<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeStrategyActionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeStrategyActionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SiegeStrategyActionModel : MBGameModel<SiegeStrategyActionModel>`
**Base:** `MBGameModel<SiegeStrategyActionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeStrategyActionModel.cs`

## 概述

`SiegeStrategyActionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<SiegeStrategyActionModel>(new MySiegeStrategyActionModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetLogicalActionForStrategy
```csharp
public abstract void GetLogicalActionForStrategy(ISiegeEventSide side, out SiegeStrategyActionModel.SiegeAction siegeAction, out SiegeEngineType siegeEngineType, out int deploymentIndex, out int reserveIndex)
```

## 使用示例

```csharp
// SiegeStrategyActionModel (Model) 的典型用法
Game.Current.ReplaceModel<SiegeStrategyActionModel>(new MySiegeStrategyActionModel());
```

## 参见

- [完整类目录](../catalog)