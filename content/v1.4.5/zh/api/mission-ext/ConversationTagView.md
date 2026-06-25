---
title: "ConversationTagView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConversationTagView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationTagView

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConversationTagView`
**Base:** 无
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/ConversationTagView.cs`

## 概述

`ConversationTagView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `ConversationTagView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSkillMeshName
`public static string GetSkillMeshName(SkillObject skillEnum, bool isOn = false)`

**用途 / Purpose:** 获取 `skill mesh name` 的当前值。

## 使用示例

```csharp
var view = new ConversationTagView();
```

## 参见

- [完整类目录](../catalog)