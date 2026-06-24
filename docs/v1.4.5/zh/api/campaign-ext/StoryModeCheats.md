<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StoryModeCheats`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeCheats

**命名空间:** StoryMode
**模块:** StoryMode
**类型:** `public static class StoryModeCheats`
**领域:** campaign-ext

## 概述

`StoryModeCheats` 位于 `StoryMode`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先准备该类型需要的上下文，然后直接调用静态入口
StoryModeCheats.CheckCheatUsage(message);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
