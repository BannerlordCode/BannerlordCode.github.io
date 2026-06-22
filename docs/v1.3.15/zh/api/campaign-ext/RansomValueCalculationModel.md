<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RansomValueCalculationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RansomValueCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class RansomValueCalculationModel : MBGameModel<RansomValueCalculationModel>`
**Base:** `MBGameModel<RansomValueCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/RansomValueCalculationModel.cs`

## 概述

`RansomValueCalculationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<RansomValueCalculationModel>(new MyRansomValueCalculationModel())` 注册，以改变其计算逻辑。

## 主要方法

### PrisonerRansomValue
```csharp
public abstract int PrisonerRansomValue(CharacterObject prisoner, Hero sellerHero = null)
```

## 使用示例

```csharp
// RansomValueCalculationModel (Model) 的典型用法
Game.Current.ReplaceModel<RansomValueCalculationModel>(new MyRansomValueCalculationModel());
```

## 参见

- [完整类目录](../catalog)