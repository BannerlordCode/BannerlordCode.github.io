<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyShipLimitModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyShipLimitModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyShipLimitModel : MBGameModel<PartyShipLimitModel>`
**Base:** `MBGameModel<PartyShipLimitModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyShipLimitModel.cs`

## 概述

`PartyShipLimitModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<PartyShipLimitModel>(new MyPartyShipLimitModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetIdealShipNumber
```csharp
public abstract int GetIdealShipNumber(MobileParty mobileParty)
```

### GetIdealShipNumber
```csharp
public abstract int GetIdealShipNumber(Clan clan)
```

### GetShipPriority
```csharp
public abstract float GetShipPriority(MobileParty mobileParty, Ship ship, bool isSelling)
```

## 使用示例

```csharp
// PartyShipLimitModel (Model) 的典型用法
Game.Current.ReplaceModel<PartyShipLimitModel>(new MyPartyShipLimitModel());
```

## 参见

- [完整类目录](../catalog)