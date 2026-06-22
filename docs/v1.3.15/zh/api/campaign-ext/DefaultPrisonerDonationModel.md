<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPrisonerDonationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPrisonerDonationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPrisonerDonationModel : PrisonerDonationModel`
**Base:** `PrisonerDonationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonerDonationModel.cs`

## 概述

`DefaultPrisonerDonationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultPrisonerDonationModel>(new MyDefaultPrisonerDonationModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateRelationGainAfterHeroPrisonerDonate
```csharp
public override float CalculateRelationGainAfterHeroPrisonerDonate(PartyBase donatingParty, Hero donatedHero, Settlement donatedSettlement)
```

### CalculateInfluenceGainAfterPrisonerDonation
```csharp
public override float CalculateInfluenceGainAfterPrisonerDonation(PartyBase donatingParty, CharacterObject donatedPrisoner, Settlement donatedSettlement)
```

### CalculateInfluenceGainAfterTroopDonation
```csharp
public override float CalculateInfluenceGainAfterTroopDonation(PartyBase donatingParty, CharacterObject donatedCharacter, Settlement donatedSettlement)
```

## 使用示例

```csharp
// DefaultPrisonerDonationModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultPrisonerDonationModel>(new MyDefaultPrisonerDonationModel());
```

## 参见

- [完整类目录](../catalog)