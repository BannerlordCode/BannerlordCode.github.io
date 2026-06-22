<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyShipLimitModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyShipLimitModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyShipLimitModel : PartyShipLimitModel`
**Base:** `PartyShipLimitModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyShipLimitModel.cs`

## 概述

`DefaultPartyShipLimitModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultPartyShipLimitModel>(new MyDefaultPartyShipLimitModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetIdealShipNumber
```csharp
public override int GetIdealShipNumber(MobileParty mobileParty)
```

### GetIdealShipNumber
```csharp
public override int GetIdealShipNumber(Clan clan)
```

### GetShipPriority
```csharp
public override float GetShipPriority(MobileParty mobileParty, Ship ship, bool isSelling)
```

## 使用示例

```csharp
// DefaultPartyShipLimitModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultPartyShipLimitModel>(new MyDefaultPartyShipLimitModel());
```

## 参见

- [完整类目录](../catalog)