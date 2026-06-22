<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartySizeLimitModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartySizeLimitModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartySizeLimitModel : MBGameModel<PartySizeLimitModel>`
**Base:** `MBGameModel<PartySizeLimitModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs`

## 概述

`PartySizeLimitModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<PartySizeLimitModel>(new MyPartySizeLimitModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumNumberOfVillagersAtVillagerParty` | `public abstract int MinimumNumberOfVillagersAtVillagerParty { get; }` |

## 主要方法

### GetPartyMemberSizeLimit
```csharp
public abstract ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)
```

### GetPartyPrisonerSizeLimit
```csharp
public abstract ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)
```

### CalculateGarrisonPartySizeLimit
```csharp
public abstract ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)
```

### GetClanTierPartySizeEffectForHero
```csharp
public abstract int GetClanTierPartySizeEffectForHero(Hero hero)
```

### GetNextClanTierPartySizeEffectChangeForHero
```csharp
public abstract int GetNextClanTierPartySizeEffectChangeForHero(Hero hero)
```

### GetAssumedPartySizeForLordParty
```csharp
public abstract int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)
```

### GetIdealVillagerPartySize
```csharp
public abstract int GetIdealVillagerPartySize(Village village)
```

### FindAppropriateInitialRosterForMobileParty
```csharp
public abstract TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)
```

### FindAppropriateInitialShipsForMobileParty
```csharp
public abstract List<Ship> FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)
```

## 使用示例

```csharp
// PartySizeLimitModel (Model) 的典型用法
Game.Current.ReplaceModel<PartySizeLimitModel>(new MyPartySizeLimitModel());
```

## 参见

- [完整类目录](../catalog)