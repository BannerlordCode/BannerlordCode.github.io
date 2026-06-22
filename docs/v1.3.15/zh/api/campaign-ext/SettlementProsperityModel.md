<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementProsperityModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementProsperityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementProsperityModel : MBGameModel<SettlementProsperityModel>`
**Base:** `MBGameModel<SettlementProsperityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementProsperityModel.cs`

## 概述

`SettlementProsperityModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<SettlementProsperityModel>(new MySettlementProsperityModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateProsperityChange
```csharp
public abstract ExplainedNumber CalculateProsperityChange(Town fortification, bool includeDescriptions = false)
```

### CalculateHearthChange
```csharp
public abstract ExplainedNumber CalculateHearthChange(Village village, bool includeDescriptions = false)
```

## 使用示例

```csharp
// SettlementProsperityModel (Model) 的典型用法
Game.Current.ReplaceModel<SettlementProsperityModel>(new MySettlementProsperityModel());
```

## 参见

- [完整类目录](../catalog)