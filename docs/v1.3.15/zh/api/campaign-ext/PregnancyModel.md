<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PregnancyModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PregnancyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PregnancyModel : MBGameModel<PregnancyModel>`
**Base:** `MBGameModel<PregnancyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PregnancyModel.cs`

## 概述

`PregnancyModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<PregnancyModel>(new MyPregnancyModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `PregnancyDurationInDays` | `public abstract float PregnancyDurationInDays { get; }` |
| `MaternalMortalityProbabilityInLabor` | `public abstract float MaternalMortalityProbabilityInLabor { get; }` |
| `StillbirthProbability` | `public abstract float StillbirthProbability { get; }` |
| `DeliveringFemaleOffspringProbability` | `public abstract float DeliveringFemaleOffspringProbability { get; }` |
| `DeliveringTwinsProbability` | `public abstract float DeliveringTwinsProbability { get; }` |

## 主要方法

### GetDailyChanceOfPregnancyForHero
```csharp
public abstract float GetDailyChanceOfPregnancyForHero(Hero hero)
```

## 使用示例

```csharp
// PregnancyModel (Model) 的典型用法
Game.Current.ReplaceModel<PregnancyModel>(new MyPregnancyModel());
```

## 参见

- [完整类目录](../catalog)