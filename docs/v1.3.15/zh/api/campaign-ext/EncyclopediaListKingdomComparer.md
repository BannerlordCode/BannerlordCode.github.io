<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaListKingdomComparer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaListKingdomComparer

**命名空间:** TaleWorlds.CampaignSystem.Encyclopedia.Pages
**模块:** TaleWorlds.CampaignSystem
**类型:** `public abstract class EncyclopediaListKingdomComparer : EncyclopediaListItemComparerBase`
**Base:** `EncyclopediaListItemComparerBase`
**领域:** campaign-ext

## 概述

`EncyclopediaListKingdomComparer` 位于 `TaleWorlds.CampaignSystem.Encyclopedia.Pages`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Encyclopedia.Pages` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetViewFullyQualifiedName
`public override string GetViewFullyQualifiedName()`

**用途 / Purpose:** 获取 `view fully qualified name` 的当前值。

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### GetDescriptionText
`public override TextObject GetDescriptionText()`

**用途 / Purpose:** 获取 `description text` 的当前值。

### GetStringID
`public override string GetStringID()`

**用途 / Purpose:** 获取 `string i d` 的当前值。

### GetObject
`public override MBObjectBase GetObject(string typeName, string stringID)`

**用途 / Purpose:** 获取 `object` 的当前值。

### IsValidEncyclopediaItem
`public override bool IsValidEncyclopediaItem(object o)`

**用途 / Purpose:** 处理 `is valid encyclopedia item` 相关逻辑。

### Compare
`public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### GetComparedValueText
`public override string GetComparedValueText(EncyclopediaListItem item)`

**用途 / Purpose:** 获取 `compared value text` 的当前值。

### Compare
`public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### GetComparedValueText
`public override string GetComparedValueText(EncyclopediaListItem item)`

**用途 / Purpose:** 获取 `compared value text` 的当前值。

### Compare
`public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### GetComparedValueText
`public override string GetComparedValueText(EncyclopediaListItem item)`

**用途 / Purpose:** 获取 `compared value text` 的当前值。

### CompareKingdoms
`public int CompareKingdoms(EncyclopediaListItem x, EncyclopediaListItem y, Func<Kingdom, Kingdom, int> comparison)`

**用途 / Purpose:** 处理 `compare kingdoms` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomEncyclopediaListKingdomComparer();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
