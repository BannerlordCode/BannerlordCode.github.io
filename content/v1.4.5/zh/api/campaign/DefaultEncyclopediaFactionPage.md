---
title: "DefaultEncyclopediaFactionPage"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultEncyclopediaFactionPage`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultEncyclopediaFactionPage

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncyclopediaFactionPage : EncyclopediaPage`
**Base:** `EncyclopediaPage`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encyclopedia.Pages/DefaultEncyclopediaFactionPage.cs`

## 概述

`DefaultEncyclopediaFactionPage` 位于 `TaleWorlds.CampaignSystem.Encyclopedia.Pages`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Encyclopedia.Pages` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

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

## 使用示例

```csharp
var value = new DefaultEncyclopediaFactionPage();
value.Compare(x, y);
```

## 参见

- [完整类目录](../catalog)