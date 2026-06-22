<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultBannerItemModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBannerItemModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBannerItemModel : BannerItemModel`
**Base:** `BannerItemModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBannerItemModel.cs`

## 概述

`DefaultBannerItemModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultBannerItemModel>(new MyDefaultBannerItemModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetPossibleRewardBannerItems
```csharp
public override IEnumerable<ItemObject> GetPossibleRewardBannerItems()
```

### GetPossibleRewardBannerItemsForHero
```csharp
public override IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero)
```

### GetBannerItemLevelForHero
```csharp
public override int GetBannerItemLevelForHero(Hero hero)
```

### CanBannerBeUpdated
```csharp
public override bool CanBannerBeUpdated(ItemObject item)
```

## 使用示例

```csharp
// DefaultBannerItemModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultBannerItemModel>(new MyDefaultBannerItemModel());
```

## 参见

- [完整类目录](../catalog)