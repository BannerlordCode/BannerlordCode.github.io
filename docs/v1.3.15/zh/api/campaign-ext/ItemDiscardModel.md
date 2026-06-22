<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemDiscardModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemDiscardModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ItemDiscardModel : MBGameModel<ItemDiscardModel>`
**Base:** `MBGameModel<ItemDiscardModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ItemDiscardModel.cs`

## 概述

`ItemDiscardModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<ItemDiscardModel>(new MyItemDiscardModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetXpBonusForDiscardingItems
```csharp
public abstract int GetXpBonusForDiscardingItems(ItemRoster itemRoster)
```

### GetXpBonusForDiscardingItem
```csharp
public abstract int GetXpBonusForDiscardingItem(ItemObject item, int amount = 1)
```

### PlayerCanDonateItem
```csharp
public abstract bool PlayerCanDonateItem(ItemObject item)
```

## 使用示例

```csharp
// ItemDiscardModel (Model) 的典型用法
Game.Current.ReplaceModel<ItemDiscardModel>(new MyItemDiscardModel());
```

## 参见

- [完整类目录](../catalog)