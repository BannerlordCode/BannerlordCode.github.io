<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultBattleCaptainModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBattleCaptainModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBattleCaptainModel : BattleCaptainModel`
**Base:** `BattleCaptainModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBattleCaptainModel.cs`

## 概述

`DefaultBattleCaptainModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultBattleCaptainModel>(new MyDefaultBattleCaptainModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetCaptainRatingForTroopUsages
```csharp
public override float GetCaptainRatingForTroopUsages(Hero hero, TroopUsageFlags flag, out List<PerkObject> compatiblePerks)
```

## 使用示例

```csharp
// DefaultBattleCaptainModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultBattleCaptainModel>(new MyDefaultBattleCaptainModel());
```

## 参见

- [完整类目录](../catalog)