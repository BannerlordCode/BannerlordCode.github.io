---
title: "ObjectInstanceTracker"
description: "ObjectInstanceTracker 的自动生成类参考。"
---
# ObjectInstanceTracker

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ObjectInstanceTracker`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/ObjectInstanceTracker.cs`

## 概述

`ObjectInstanceTracker` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterTrackedInstance
`public static void RegisterTrackedInstance(string name, WeakReference instance)`

**用途 / Purpose:** **用途 / Purpose:** 将tracked instance注册到当前系统，以便后续监听或分发。

```csharp
// 静态调用，不需要实例
ObjectInstanceTracker.RegisterTrackedInstance("example", instance);
```

### CheckBlacklistedTypeCounts
`public static bool CheckBlacklistedTypeCounts(Dictionary<string, int> typeNameCounts, ref string outputLog)`

**用途 / Purpose:** **用途 / Purpose:** 检查blacklisted type counts在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
ObjectInstanceTracker.CheckBlacklistedTypeCounts(dictionary<string, 0, outputLog);
```

## 使用示例

```csharp
ObjectInstanceTracker.RegisterTrackedInstance("example", instance);
```

## 参见

- [本区域目录](../)