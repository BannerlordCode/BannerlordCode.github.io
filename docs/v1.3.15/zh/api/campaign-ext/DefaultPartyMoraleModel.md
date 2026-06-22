<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyMoraleModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyMoraleModel : PartyMoraleModel`
**Base:** `PartyMoraleModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyMoraleModel.cs`

## 概述

`DefaultPartyMoraleModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultPartyMoraleModel>(new MyDefaultPartyMoraleModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `HighMoraleValue` | `public override float HighMoraleValue { get; }` |

## 主要方法

### GetDailyStarvationMoralePenalty
```csharp
public override int GetDailyStarvationMoralePenalty(PartyBase party)
```

### GetDailyNoWageMoralePenalty
```csharp
public override int GetDailyNoWageMoralePenalty(MobileParty party)
```

### GetStandardBaseMorale
```csharp
public override float GetStandardBaseMorale(PartyBase party)
```

### GetVictoryMoraleChange
```csharp
public override float GetVictoryMoraleChange(PartyBase party)
```

### GetDefeatMoraleChange
```csharp
public override float GetDefeatMoraleChange(PartyBase party)
```

### GetEffectivePartyMorale
```csharp
public override ExplainedNumber GetEffectivePartyMorale(MobileParty mobileParty, bool includeDescription = false)
```

## 使用示例

```csharp
// DefaultPartyMoraleModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultPartyMoraleModel>(new MyDefaultPartyMoraleModel());
```

## 参见

- [完整类目录](../catalog)