<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyWageModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyWageModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyWageModel : PartyWageModel`
**Base:** `PartyWageModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyWageModel.cs`

## 概述

`DefaultPartyWageModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultPartyWageModel>(new MyDefaultPartyWageModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxWagePaymentLimit` | `public override int MaxWagePaymentLimit { get; }` |

## 主要方法

### GetCharacterWage
```csharp
public override int GetCharacterWage(CharacterObject character)
```

### GetTotalWage
```csharp
public override ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)
```

### GetTroopRecruitmentCost
```csharp
public override ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)
```

## 使用示例

```csharp
// DefaultPartyWageModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultPartyWageModel>(new MyDefaultPartyWageModel());
```

## 参见

- [完整类目录](../catalog)