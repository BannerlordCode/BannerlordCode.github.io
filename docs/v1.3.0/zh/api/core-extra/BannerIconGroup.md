<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerIconGroup`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BannerIconGroup

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BannerIconGroup`
**Base:** 无
**File:** `TaleWorlds.Core/BannerIconGroup.cs`

## 概述

`BannerIconGroup` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `IsPattern` | `public bool IsPattern { get; }` |
| `Id` | `public int Id { get; }` |

## 主要方法

### Deserialize
`public void Deserialize(XmlNode xmlNode, MBList<BannerIconGroup> previouslyAddedGroups)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### Merge
`public void Merge(BannerIconGroup otherGroup)`

**用途 / Purpose:** 处理 `merge` 相关逻辑。

## 使用示例

```csharp
var value = new BannerIconGroup();
value.Deserialize(xmlNode, previouslyAddedGroups);
```

## 参见

- [完整类目录](../catalog)