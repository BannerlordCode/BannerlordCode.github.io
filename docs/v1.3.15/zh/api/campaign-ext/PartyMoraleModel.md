<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyMoraleModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyMoraleModel : MBGameModel<PartyMoraleModel>`
**Base:** `MBGameModel<PartyMoraleModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyMoraleModel.cs`

## 概述

`PartyMoraleModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<PartyMoraleModel>(new MyPartyMoraleModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `HighMoraleValue` | `public abstract float HighMoraleValue { get; }` |

## 主要方法

### GetDailyStarvationMoralePenalty
```csharp
public abstract int GetDailyStarvationMoralePenalty(PartyBase party)
```

### GetDailyNoWageMoralePenalty
```csharp
public abstract int GetDailyNoWageMoralePenalty(MobileParty party)
```

### GetStandardBaseMorale
```csharp
public abstract float GetStandardBaseMorale(PartyBase party)
```

### GetVictoryMoraleChange
```csharp
public abstract float GetVictoryMoraleChange(PartyBase party)
```

### GetDefeatMoraleChange
```csharp
public abstract float GetDefeatMoraleChange(PartyBase party)
```

### GetEffectivePartyMorale
```csharp
public abstract ExplainedNumber GetEffectivePartyMorale(MobileParty party, bool includeDescription = false)
```

## 使用示例

```csharp
// PartyMoraleModel (Model) 的典型用法
Game.Current.ReplaceModel<PartyMoraleModel>(new MyPartyMoraleModel());
```

## 参见

- [完整类目录](../catalog)