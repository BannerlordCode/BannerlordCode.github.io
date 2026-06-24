<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MetaDataExtensions`
- [← 本领域 / 返回 gameplay](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MetaDataExtensions

**Namespace:** StoryMode.Extensions
**Module:** StoryMode.Extensions
**Type:** `public static class MetaDataExtensions`
**Base:** 无
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.Extensions/MetaDataExtensions.cs`

## 概述

`MetaDataExtensions` 位于 `StoryMode.Extensions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.Extensions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### HasStoryMode
`public static bool HasStoryMode(this MetaData metaData)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `story mode`。

### AreAchievementsDisabled
`public static bool AreAchievementsDisabled(this MetaData metaData)`

**用途 / Purpose:** 处理 `are achievements disabled` 相关逻辑。

## 使用示例

```csharp
MetaDataExtensions.HasStoryMode(metaData);
```

## 参见

- [完整类目录](../catalog)