---
title: "ActionSetCode"
description: "ActionSetCode 的自动生成类参考。"
---
# ActionSetCode

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class ActionSetCode`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ActionSetCode.cs`

## 概述

`ActionSetCode` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GenerateActionSetNameWithSuffix
`public static string GenerateActionSetNameWithSuffix(Monster monster, bool isFemale, string suffix)`

**用途 / Purpose:** 生成「action set name with suffix」的实例、数据或表示。

```csharp
// 静态调用，不需要实例
ActionSetCode.GenerateActionSetNameWithSuffix(monster, false, "example");
```

## 使用示例

```csharp
ActionSetCode.GenerateActionSetNameWithSuffix(monster, false, "example");
```

## 参见

- [本区域目录](../)