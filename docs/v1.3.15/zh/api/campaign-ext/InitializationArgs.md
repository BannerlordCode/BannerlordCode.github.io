<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InitializationArgs`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InitializationArgs

**命名空间:** TaleWorlds.CampaignSystem.Party.PartyComponents
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`InitializationArgs` 是 `TaleWorlds.CampaignSystem.Party.PartyComponents` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Hideout` | `public Hideout Hideout { get; }` |
| `IsBossParty` | `public bool IsBossParty { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |


## 主要方法

### CreateBanditParty

```csharp
public static MobileParty CreateBanditParty(string stringId, Clan clan, Hideout hideout, bool isBossParty, PartyTemplateObject pt, CampaignVec2 initialPosition)
```

### ConvertPartyToBanditParty

```csharp
public static void ConvertPartyToBanditParty(MobileParty mobileParty, Clan clan, Hideout hideout, bool isBossParty)
```

### CreateLooterParty

```csharp
public static MobileParty CreateLooterParty(string stringId, Clan clan, Settlement relatedSettlement, bool isBossParty, PartyTemplateObject pt, CampaignVec2 initialPosition)
```

### ConvertPartyToLooterParty

```csharp
public static void ConvertPartyToLooterParty(MobileParty mobileParty, Clan clan, Settlement relatedSettlement)
```

### SetHomeHideout

```csharp
public void SetHomeHideout(Hideout hideout)
```

### ClearCachedName

```csharp
public override void ClearCachedName()
```

### InitializeBanditOnCreation

```csharp
public void InitializeBanditOnCreation(MobileParty mobileParty)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)