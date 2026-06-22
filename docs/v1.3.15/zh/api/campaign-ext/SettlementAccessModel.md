<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementAccessModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementAccessModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementAccessModel : MBGameModel<SettlementAccessModel>`
**Base:** `MBGameModel<SettlementAccessModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs`

## 概述

`SettlementAccessModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<SettlementAccessModel>(new MySettlementAccessModel())` 注册，以改变其计算逻辑。

## 主要方法

### CanMainHeroEnterSettlement
```csharp
public abstract void CanMainHeroEnterSettlement(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)
```

### CanMainHeroEnterLordsHall
```csharp
public abstract void CanMainHeroEnterLordsHall(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)
```

### CanMainHeroEnterDungeon
```csharp
public abstract void CanMainHeroEnterDungeon(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)
```

### CanMainHeroAccessLocation
```csharp
public abstract bool CanMainHeroAccessLocation(Settlement settlement, string locationId, out bool disableOption, out TextObject disabledText)
```

### CanMainHeroDoSettlementAction
```csharp
public abstract bool CanMainHeroDoSettlementAction(Settlement settlement, SettlementAccessModel.SettlementAction settlementAction, out bool disableOption, out TextObject disabledText)
```

### IsRequestMeetingOptionAvailable
```csharp
public abstract bool IsRequestMeetingOptionAvailable(Settlement settlement, out bool disableOption, out TextObject disabledText)
```

## 使用示例

```csharp
// SettlementAccessModel (Model) 的典型用法
Game.Current.ReplaceModel<SettlementAccessModel>(new MySettlementAccessModel());
```

## 参见

- [完整类目录](../catalog)