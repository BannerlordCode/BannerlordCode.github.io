<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MinorFactionsModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MinorFactionsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MinorFactionsModel : MBGameModel<MinorFactionsModel>`
**Base:** `MBGameModel<MinorFactionsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MinorFactionsModel.cs`

## 概述

`MinorFactionsModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<MinorFactionsModel>(new MyMinorFactionsModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `DailyMinorFactionHeroSpawnChance` | `public abstract float DailyMinorFactionHeroSpawnChance { get; }` |
| `MinorFactionHeroLimit` | `public abstract int MinorFactionHeroLimit { get; }` |

## 主要方法

### GetMercenaryAwardFactorToJoinKingdom
```csharp
public abstract int GetMercenaryAwardFactorToJoinKingdom(Clan mercenaryClan, Kingdom kingdom, bool neededAmountForClanToJoinCalculation = false)
```

## 使用示例

```csharp
// MinorFactionsModel (Model) 的典型用法
Game.Current.ReplaceModel<MinorFactionsModel>(new MyMinorFactionsModel());
```

## 参见

- [完整类目录](../catalog)