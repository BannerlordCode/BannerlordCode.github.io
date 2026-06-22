<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartySizeLimitModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartySizeLimitModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartySizeLimitModel : PartySizeLimitModel`
**Base:** `PartySizeLimitModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartySizeLimitModel.cs`

## 概述

`DefaultPartySizeLimitModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultPartySizeLimitModel>(new MyDefaultPartySizeLimitModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumNumberOfVillagersAtVillagerParty` | `public override int MinimumNumberOfVillagersAtVillagerParty { get; }` |

## 主要方法

### GetPartyMemberSizeLimit
```csharp
public override ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)
```

### GetPartyPrisonerSizeLimit
```csharp
public override ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)
```

### CalculateGarrisonPartySizeLimit
```csharp
public override ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)
```

### GetNextClanTierPartySizeEffectChangeForHero
```csharp
public override int GetNextClanTierPartySizeEffectChangeForHero(Hero hero)
```

### GetAssumedPartySizeForLordParty
```csharp
public override int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)
```

### GetClanTierPartySizeEffectForHero
```csharp
public override int GetClanTierPartySizeEffectForHero(Hero hero)
```

### GetIdealVillagerPartySize
```csharp
public override int GetIdealVillagerPartySize(Village village)
```

### FindAppropriateInitialRosterForMobileParty
```csharp
public override TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)
```

### FindAppropriateInitialShipsForMobileParty
```csharp
public override List<Ship> FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)
```

## 使用示例

```csharp
// DefaultPartySizeLimitModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultPartySizeLimitModel>(new MyDefaultPartySizeLimitModel());
```

## 参见

- [完整类目录](../catalog)