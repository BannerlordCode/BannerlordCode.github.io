<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultKingdomCreationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultKingdomCreationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultKingdomCreationModel : KingdomCreationModel`
**Base:** `KingdomCreationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomCreationModel.cs`

## 概述

`DefaultKingdomCreationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultKingdomCreationModel>(new MyDefaultKingdomCreationModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumClanTierToCreateKingdom` | `public override int MinimumClanTierToCreateKingdom { get; }` |
| `MinimumNumberOfSettlementsOwnedToCreateKingdom` | `public override int MinimumNumberOfSettlementsOwnedToCreateKingdom { get; }` |
| `MinimumTroopCountToCreateKingdom` | `public override int MinimumTroopCountToCreateKingdom { get; }` |
| `MaximumNumberOfInitialPolicies` | `public override int MaximumNumberOfInitialPolicies { get; }` |

## 主要方法

### IsPlayerKingdomCreationPossible
```csharp
public override bool IsPlayerKingdomCreationPossible(out List<TextObject> explanations)
```

### IsPlayerKingdomAbdicationPossible
```csharp
public override bool IsPlayerKingdomAbdicationPossible(out List<TextObject> explanations)
```

### GetAvailablePlayerKingdomCultures
```csharp
public override IEnumerable<CultureObject> GetAvailablePlayerKingdomCultures()
```

## 使用示例

```csharp
// DefaultKingdomCreationModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultKingdomCreationModel>(new MyDefaultKingdomCreationModel());
```

## 参见

- [完整类目录](../catalog)