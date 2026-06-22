<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSettlementAccessModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementAccessModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementAccessModel : SettlementAccessModel`
**Base:** `SettlementAccessModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementAccessModel.cs`

## 概述

`DefaultSettlementAccessModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultSettlementAccessModel>(new MyDefaultSettlementAccessModel())` 注册，以改变其计算逻辑。

## 主要方法

### CanMainHeroEnterSettlement
```csharp
public override void CanMainHeroEnterSettlement(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)
```

### CanMainHeroEnterDungeon
```csharp
public override void CanMainHeroEnterDungeon(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)
```

### CanMainHeroEnterLordsHall
```csharp
public override void CanMainHeroEnterLordsHall(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)
```

### CanMainHeroAccessLocation
```csharp
public override bool CanMainHeroAccessLocation(Settlement settlement, string locationId, out bool disableOption, out TextObject disabledText)
```

### IsRequestMeetingOptionAvailable
```csharp
public override bool IsRequestMeetingOptionAvailable(Settlement settlement, out bool disableOption, out TextObject disabledText)
```

### CanMainHeroDoSettlementAction
```csharp
public override bool CanMainHeroDoSettlementAction(Settlement settlement, SettlementAccessModel.SettlementAction settlementAction, out bool disableOption, out TextObject disabledText)
```

## 使用示例

```csharp
// DefaultSettlementAccessModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultSettlementAccessModel>(new MyDefaultSettlementAccessModel());
```

## 参见

- [完整类目录](../catalog)