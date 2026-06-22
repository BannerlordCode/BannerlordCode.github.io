<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerItemModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerItemModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BannerItemModel : MBGameModel<BannerItemModel>`
**Base:** `MBGameModel<BannerItemModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BannerItemModel.cs`

## 概述

`BannerItemModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<BannerItemModel>(new MyBannerItemModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetPossibleRewardBannerItems
```csharp
public abstract IEnumerable<ItemObject> GetPossibleRewardBannerItems()
```

### GetPossibleRewardBannerItemsForHero
```csharp
public abstract IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero)
```

### GetBannerItemLevelForHero
```csharp
public abstract int GetBannerItemLevelForHero(Hero hero)
```

### CanBannerBeUpdated
```csharp
public abstract bool CanBannerBeUpdated(ItemObject item)
```

## 使用示例

```csharp
// BannerItemModel (Model) 的典型用法
Game.Current.ReplaceModel<BannerItemModel>(new MyBannerItemModel());
```

## 参见

- [完整类目录](../catalog)