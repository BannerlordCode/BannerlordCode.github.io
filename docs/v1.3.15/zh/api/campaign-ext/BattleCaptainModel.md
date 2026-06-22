<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleCaptainModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleCaptainModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BattleCaptainModel : MBGameModel<BattleCaptainModel>`
**Base:** `MBGameModel<BattleCaptainModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BattleCaptainModel.cs`

## 概述

`BattleCaptainModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<BattleCaptainModel>(new MyBattleCaptainModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetCaptainRatingForTroopUsages
```csharp
public abstract float GetCaptainRatingForTroopUsages(Hero hero, TroopUsageFlags flag, out List<PerkObject> compatiblePerks)
```

## 使用示例

```csharp
// BattleCaptainModel (Model) 的典型用法
Game.Current.ReplaceModel<BattleCaptainModel>(new MyBattleCaptainModel());
```

## 参见

- [完整类目录](../catalog)