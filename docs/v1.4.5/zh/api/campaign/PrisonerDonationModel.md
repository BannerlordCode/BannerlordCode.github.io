<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PrisonerDonationModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PrisonerDonationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PrisonerDonationModel : MBGameModel<PrisonerDonationModel>`
**Base:** `MBGameModel<PrisonerDonationModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PrisonerDonationModel.cs`

## 概述

`PrisonerDonationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PrisonerDonationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateRelationGainAfterHeroPrisonerDonate
`public abstract float CalculateRelationGainAfterHeroPrisonerDonate(PartyBase donatingParty, Hero donatedHero, Settlement donatedSettlement)`

**用途 / Purpose:** 处理 `calculate relation gain after hero prisoner donate` 相关逻辑。

### CalculateInfluenceGainAfterPrisonerDonation
`public abstract float CalculateInfluenceGainAfterPrisonerDonation(PartyBase donatingParty, CharacterObject donatedPrisoner, Settlement donatedSettlement)`

**用途 / Purpose:** 处理 `calculate influence gain after prisoner donation` 相关逻辑。

### CalculateInfluenceGainAfterTroopDonation
`public abstract float CalculateInfluenceGainAfterTroopDonation(PartyBase donatingParty, CharacterObject donatedTroop, Settlement donatedSettlement)`

**用途 / Purpose:** 处理 `calculate influence gain after troop donation` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomPrisonerDonationModel();
```

## 参见

- [完整类目录](../catalog)