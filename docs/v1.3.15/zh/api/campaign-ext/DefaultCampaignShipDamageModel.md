<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultCampaignShipDamageModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCampaignShipDamageModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCampaignShipDamageModel : CampaignShipDamageModel`
**Base:** `CampaignShipDamageModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipDamageModel.cs`

## 概述

`DefaultCampaignShipDamageModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultCampaignShipDamageModel>(new MyDefaultCampaignShipDamageModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetHourlyShipDamage
```csharp
public override int GetHourlyShipDamage(MobileParty owner, Ship ship)
```

### GetEstimatedSafeSailDuration
```csharp
public override float GetEstimatedSafeSailDuration(MobileParty mobileParty)
```

### GetShipDamage
```csharp
public override float GetShipDamage(Ship ship, Ship rammingShip, float rawDamage)
```

## 使用示例

```csharp
// DefaultCampaignShipDamageModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultCampaignShipDamageModel>(new MyDefaultCampaignShipDamageModel());
```

## 参见

- [完整类目录](../catalog)