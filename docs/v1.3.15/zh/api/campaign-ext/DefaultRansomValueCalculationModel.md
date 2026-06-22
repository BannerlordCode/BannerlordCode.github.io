<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultRansomValueCalculationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultRansomValueCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultRansomValueCalculationModel : RansomValueCalculationModel`
**Base:** `RansomValueCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultRansomValueCalculationModel.cs`

## 概述

`DefaultRansomValueCalculationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultRansomValueCalculationModel>(new MyDefaultRansomValueCalculationModel())` 注册，以改变其计算逻辑。

## 主要方法

### PrisonerRansomValue
```csharp
public override int PrisonerRansomValue(CharacterObject prisoner, Hero sellerHero = null)
```

## 使用示例

```csharp
// DefaultRansomValueCalculationModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultRansomValueCalculationModel>(new MyDefaultRansomValueCalculationModel());
```

## 参见

- [完整类目录](../catalog)