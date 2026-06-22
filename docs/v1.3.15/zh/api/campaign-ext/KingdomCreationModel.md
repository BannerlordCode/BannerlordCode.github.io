<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomCreationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomCreationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomCreationModel : MBGameModel<KingdomCreationModel>`
**Base:** `MBGameModel<KingdomCreationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomCreationModel.cs`

## 概述

`KingdomCreationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<KingdomCreationModel>(new MyKingdomCreationModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumClanTierToCreateKingdom` | `public abstract int MinimumClanTierToCreateKingdom { get; }` |
| `MinimumNumberOfSettlementsOwnedToCreateKingdom` | `public abstract int MinimumNumberOfSettlementsOwnedToCreateKingdom { get; }` |
| `MinimumTroopCountToCreateKingdom` | `public abstract int MinimumTroopCountToCreateKingdom { get; }` |
| `MaximumNumberOfInitialPolicies` | `public abstract int MaximumNumberOfInitialPolicies { get; }` |

## 主要方法

### IsPlayerKingdomCreationPossible
```csharp
public abstract bool IsPlayerKingdomCreationPossible(out List<TextObject> explanations)
```

### IsPlayerKingdomAbdicationPossible
```csharp
public abstract bool IsPlayerKingdomAbdicationPossible(out List<TextObject> explanations)
```

### GetAvailablePlayerKingdomCultures
```csharp
public abstract IEnumerable<CultureObject> GetAvailablePlayerKingdomCultures()
```

## 使用示例

```csharp
// KingdomCreationModel (Model) 的典型用法
Game.Current.ReplaceModel<KingdomCreationModel>(new MyKingdomCreationModel());
```

## 参见

- [完整类目录](../catalog)