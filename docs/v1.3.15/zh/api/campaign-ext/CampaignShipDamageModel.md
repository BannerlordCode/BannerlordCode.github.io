<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignShipDamageModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignShipDamageModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignShipDamageModel : MBGameModel<CampaignShipDamageModel>`
**Base:** `MBGameModel<CampaignShipDamageModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignShipDamageModel.cs`

## 概述

`CampaignShipDamageModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<CampaignShipDamageModel>(new MyCampaignShipDamageModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetHourlyShipDamage
```csharp
public abstract int GetHourlyShipDamage(MobileParty owner, Ship ship)
```

### GetEstimatedSafeSailDuration
```csharp
public abstract float GetEstimatedSafeSailDuration(MobileParty mobileParty)
```

### GetShipDamage
```csharp
public abstract float GetShipDamage(Ship ship, Ship rammingShip, float rawDamage)
```

## 使用示例

```csharp
// CampaignShipDamageModel (Model) 的典型用法
Game.Current.ReplaceModel<CampaignShipDamageModel>(new MyCampaignShipDamageModel());
```

## 参见

- [完整类目录](../catalog)