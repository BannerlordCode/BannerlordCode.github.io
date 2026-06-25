---
title: "ConversationTagView"
description: "ConversationTagView 的自动生成类参考。"
---
# ConversationTagView

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConversationTagView`
**Base:** 无
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/ConversationTagView.cs`

## 概述

`ConversationTagView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `ConversationTagView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSkillMeshName
`public static string GetSkillMeshName(SkillObject skillEnum, bool isOn = false)`

**用途 / Purpose:** 读取并返回当前对象中 skill mesh name 的结果。

```csharp
// 静态调用，不需要实例
ConversationTagView.GetSkillMeshName(skillEnum, false);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
ConversationTagView view = ...;
```

## 参见

- [本区域目录](../)