---
title: "StoryModeCheats"
description: "StoryModeCheats 的自动生成类参考。"
---
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

**用途 / Purpose:** 检查「cheat usage」在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
StoryModeCheats.CheckCheatUsage(message);
```

### AddFamilyMembers
`public static string AddFamilyMembers(List<string> strings)`

**用途 / Purpose:** 将 「family members」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
StoryModeCheats.AddFamilyMembers(strings);
```

## 使用示例

```csharp
StoryModeCheats.CheckCheatUsage(message);
```

## 参见

- [本区域目录](../)