<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StoryModeCheats`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeCheats

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public static class StoryModeCheats`
**Base:** 无
**File:** `StoryMode/StoryModeCheats.cs`

## 概述

`StoryModeCheats` 位于 `StoryMode`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CheckCheatUsage
`public static bool CheckCheatUsage(ref string message)`

**用途 / Purpose:** 处理 `check cheat usage` 相关逻辑。

### AddFamilyMembers
`public static string AddFamilyMembers(List<string> strings)`

**用途 / Purpose:** 向当前集合/状态中添加 `family members`。

## 使用示例

```csharp
StoryModeCheats.CheckCheatUsage(message);
```

## 参见

- [完整类目录](../catalog)