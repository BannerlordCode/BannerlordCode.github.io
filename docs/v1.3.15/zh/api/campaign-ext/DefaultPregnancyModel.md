<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPregnancyModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPregnancyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPregnancyModel : PregnancyModel`
**Base:** `PregnancyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPregnancyModel.cs`

## 概述

`DefaultPregnancyModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultPregnancyModel>(new MyDefaultPregnancyModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `PregnancyDurationInDays` | `public override float PregnancyDurationInDays { get; }` |
| `MaternalMortalityProbabilityInLabor` | `public override float MaternalMortalityProbabilityInLabor { get; }` |
| `StillbirthProbability` | `public override float StillbirthProbability { get; }` |
| `DeliveringFemaleOffspringProbability` | `public override float DeliveringFemaleOffspringProbability { get; }` |
| `DeliveringTwinsProbability` | `public override float DeliveringTwinsProbability { get; }` |

## 主要方法

### GetDailyChanceOfPregnancyForHero
```csharp
public override float GetDailyChanceOfPregnancyForHero(Hero hero)
```

## 使用示例

```csharp
// DefaultPregnancyModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultPregnancyModel>(new MyDefaultPregnancyModel());
```

## 参见

- [完整类目录](../catalog)