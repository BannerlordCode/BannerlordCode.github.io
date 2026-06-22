<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultItemDiscardModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultItemDiscardModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultItemDiscardModel : ItemDiscardModel`
**Base:** `ItemDiscardModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultItemDiscardModel.cs`

## 概述

`DefaultItemDiscardModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultItemDiscardModel>(new MyDefaultItemDiscardModel())` 注册，以改变其计算逻辑。

## 主要方法

### PlayerCanDonateItem
```csharp
public override bool PlayerCanDonateItem(ItemObject item)
```

### GetXpBonusForDiscardingItem
```csharp
public override int GetXpBonusForDiscardingItem(ItemObject item, int amount = 1)
```

### GetXpBonusForDiscardingItems
```csharp
public override int GetXpBonusForDiscardingItems(ItemRoster itemRoster)
```

## 使用示例

```csharp
// DefaultItemDiscardModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultItemDiscardModel>(new MyDefaultItemDiscardModel());
```

## 参见

- [完整类目录](../catalog)