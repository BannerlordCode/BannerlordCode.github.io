---
title: "StoryModePermissionsSystem"
description: "StoryModePermissionsSystem 的自动生成类参考。"
---
# StoryModePermissionsSystem

**Namespace:** StoryMode.View.Permissions
**Module:** StoryMode.View
**Type:** `public class StoryModePermissionsSystem`
**Base:** 无
**File:** `StoryMode.View/Permissions/StoryModePermissionsSystem.cs`

## 概述

`StoryModePermissionsSystem` 位于 `StoryMode.View.Permissions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.View.Permissions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnInitialize
`public static void OnInitialize()`

**用途 / Purpose:** 在 initialize 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
StoryModePermissionsSystem.OnInitialize();
```

## 使用示例

```csharp
StoryModePermissionsSystem.OnInitialize();
```

## 参见

- [本区域目录](../)