<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeroDeathProbabilityCalculationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeroDeathProbabilityCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeroDeathProbabilityCalculationModel : MBGameModel<HeroDeathProbabilityCalculationModel>`
**Base:** `MBGameModel<HeroDeathProbabilityCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeroDeathProbabilityCalculationModel.cs`

## 概述

`HeroDeathProbabilityCalculationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<HeroDeathProbabilityCalculationModel>(new MyHeroDeathProbabilityCalculationModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateHeroDeathProbability
```csharp
public abstract float CalculateHeroDeathProbability(Hero hero)
```

## 使用示例

```csharp
// HeroDeathProbabilityCalculationModel (Model) 的典型用法
Game.Current.ReplaceModel<HeroDeathProbabilityCalculationModel>(new MyHeroDeathProbabilityCalculationModel());
```

## 参见

- [完整类目录](../catalog)