<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyWageModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyWageModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyWageModel : MBGameModel<PartyWageModel>`
**Base:** `MBGameModel<PartyWageModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyWageModel.cs`

## 概述

`PartyWageModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<PartyWageModel>(new MyPartyWageModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxWagePaymentLimit` | `public abstract int MaxWagePaymentLimit { get; }` |

## 主要方法

### GetCharacterWage
```csharp
public abstract int GetCharacterWage(CharacterObject character)
```

### GetTotalWage
```csharp
public abstract ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)
```

### GetTroopRecruitmentCost
```csharp
public abstract ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)
```

## 使用示例

```csharp
// PartyWageModel (Model) 的典型用法
Game.Current.ReplaceModel<PartyWageModel>(new MyPartyWageModel());
```

## 参见

- [完整类目录](../catalog)