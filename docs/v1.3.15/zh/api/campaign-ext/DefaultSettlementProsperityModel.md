<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSettlementProsperityModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementProsperityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementProsperityModel : SettlementProsperityModel`
**Base:** `SettlementProsperityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementProsperityModel.cs`

## 概述

`DefaultSettlementProsperityModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultSettlementProsperityModel>(new MyDefaultSettlementProsperityModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateProsperityChange
```csharp
public override ExplainedNumber CalculateProsperityChange(Town fortification, bool includeDescriptions = false)
```

### CalculateHearthChange
```csharp
public override ExplainedNumber CalculateHearthChange(Village village, bool includeDescriptions = false)
```

## 使用示例

```csharp
// DefaultSettlementProsperityModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultSettlementProsperityModel>(new MyDefaultSettlementProsperityModel());
```

## 参见

- [完整类目录](../catalog)