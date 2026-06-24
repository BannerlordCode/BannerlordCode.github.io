<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaPage`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaPage

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncyclopediaPage`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encyclopedia/EncyclopediaPage.cs`

## 概述

`EncyclopediaPage` 位于 `TaleWorlds.CampaignSystem.Encyclopedia`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Encyclopedia` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HomePageOrderIndex` | `public int HomePageOrderIndex { get; set; }` |
| `Parent` | `public EncyclopediaPage Parent { get; }` |

## 主要方法

### IsRelevant
`public virtual bool IsRelevant()`

**用途 / Purpose:** 处理 `is relevant` 相关逻辑。

### HasIdentifierType
`public bool HasIdentifierType(Type identifierType)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `identifier type`。

### GetIdentifier
`public string GetIdentifier(Type identifierType)`

**用途 / Purpose:** 获取 `identifier` 的当前值。

### GetIdentifierNames
`public string GetIdentifierNames()`

**用途 / Purpose:** 获取 `identifier names` 的当前值。

### IsFiltered
`public bool IsFiltered(object o)`

**用途 / Purpose:** 处理 `is filtered` 相关逻辑。

### GetViewFullyQualifiedName
`public virtual string GetViewFullyQualifiedName()`

**用途 / Purpose:** 获取 `view fully qualified name` 的当前值。

### GetStringID
`public virtual string GetStringID()`

**用途 / Purpose:** 获取 `string i d` 的当前值。

### GetName
`public virtual TextObject GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### GetObject
`public virtual MBObjectBase GetObject(string typeName, string stringID)`

**用途 / Purpose:** 获取 `object` 的当前值。

### IsValidEncyclopediaItem
`public virtual bool IsValidEncyclopediaItem(object o)`

**用途 / Purpose:** 处理 `is valid encyclopedia item` 相关逻辑。

### GetDescriptionText
`public virtual TextObject GetDescriptionText()`

**用途 / Purpose:** 获取 `description text` 的当前值。

### GetListItems
`public IEnumerable<EncyclopediaListItem> GetListItems()`

**用途 / Purpose:** 获取 `list items` 的当前值。

### GetFilterItems
`public IEnumerable<EncyclopediaFilterGroup> GetFilterItems()`

**用途 / Purpose:** 获取 `filter items` 的当前值。

### GetSortControllers
`public IEnumerable<EncyclopediaSortController> GetSortControllers()`

**用途 / Purpose:** 获取 `sort controllers` 的当前值。

## 使用示例

```csharp
var implementation = new CustomEncyclopediaPage();
```

## 参见

- [完整类目录](../catalog)