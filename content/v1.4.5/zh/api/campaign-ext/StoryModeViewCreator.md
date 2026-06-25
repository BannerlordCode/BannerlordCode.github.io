---
title: "StoryModeViewCreator"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StoryModeViewCreator`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeViewCreator

**命名空间:** StoryMode.View
**模块:** StoryMode.View
**类型:** `public static class StoryModeViewCreator`
**领域:** campaign-ext

## 概述

`StoryModeViewCreator` 位于 `StoryMode.View`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `StoryMode.View` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateTrainingFieldObjectiveView
`public static MissionView CreateTrainingFieldObjectiveView(Mission mission)`

**用途 / Purpose:** 创建一个 `training field objective view` 实例或对象。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
StoryModeViewCreator.CreateTrainingFieldObjectiveView(mission);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
