<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PrisonerDonationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PrisonerDonationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PrisonerDonationModel : MBGameModel<PrisonerDonationModel>`
**Base:** `MBGameModel<PrisonerDonationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonerDonationModel.cs`

## 概述

`PrisonerDonationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<PrisonerDonationModel>(new MyPrisonerDonationModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateRelationGainAfterHeroPrisonerDonate
```csharp
public abstract float CalculateRelationGainAfterHeroPrisonerDonate(PartyBase donatingParty, Hero donatedHero, Settlement donatedSettlement)
```

### CalculateInfluenceGainAfterPrisonerDonation
```csharp
public abstract float CalculateInfluenceGainAfterPrisonerDonation(PartyBase donatingParty, CharacterObject donatedPrisoner, Settlement donatedSettlement)
```

### CalculateInfluenceGainAfterTroopDonation
```csharp
public abstract float CalculateInfluenceGainAfterTroopDonation(PartyBase donatingParty, CharacterObject donatedTroop, Settlement donatedSettlement)
```

## 使用示例

```csharp
// PrisonerDonationModel (Model) 的典型用法
Game.Current.ReplaceModel<PrisonerDonationModel>(new MyPrisonerDonationModel());
```

## 参见

- [完整类目录](../catalog)