<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Hideout`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Hideout

**命名空间:** TaleWorlds.CampaignSystem.Settlements
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Hideout` 是 `TaleWorlds.CampaignSystem.Settlements` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `NextPossibleAttackTime` | `public CampaignTime NextPossibleAttackTime { get; }` |
| `All` | `public static MBReadOnlyList<Hideout> All { get; }` |
| `IsInfested` | `public bool IsInfested { get; }` |
| `MapFaction` | `public override IFaction MapFaction { get; }` |
| `IsSpotted` | `public bool IsSpotted { get; set; }` |


## 主要方法

### SetNextPossibleAttackTime

```csharp
public void SetNextPossibleAttackTime(CampaignTime hiddenDurationFromNow)
```

### GetDefenderParties

```csharp
public IEnumerable<PartyBase> GetDefenderParties(MapEvent.BattleTypes battleType)
```

### GetNextDefenderParty

```csharp
public PartyBase GetNextDefenderParty(ref int partyIndex, MapEvent.BattleTypes battleType)
```

### OnPartyEntered

```csharp
public override void OnPartyEntered(MobileParty mobileParty)
```

### OnPartyLeft

```csharp
public override void OnPartyLeft(MobileParty mobileParty)
```

### OnRelatedPartyRemoved

```csharp
public override void OnRelatedPartyRemoved(MobileParty mobileParty)
```

### OnInit

```csharp
public override void OnInit()
```

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)