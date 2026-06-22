<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AccessDetails`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AccessDetails

**命名空间:** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块:** TaleWorlds.CampaignSystem
**类型:** 结构体 struct struct
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`AccessDetails` 是 `TaleWorlds.CampaignSystem.ComponentInterfaces` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
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

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)