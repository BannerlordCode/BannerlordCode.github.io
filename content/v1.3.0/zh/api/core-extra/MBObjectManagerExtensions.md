---
title: "MBObjectManagerExtensions"
description: "MBObjectManagerExtensions 的自动生成类参考。"
---
# MBObjectManagerExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MBObjectManagerExtensions`
**Base:** 无
**File:** `TaleWorlds.Core/MBObjectManagerExtensions.cs`

## 概述

`MBObjectManagerExtensions` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### LoadXML
`public static void LoadXML(this MBObjectManager objectManager, string id, bool skipXmlFilterForEditor = false)`

**用途 / Purpose:** 从持久化存储或流中读取 「x m l」。

```csharp
// 静态调用，不需要实例
MBObjectManagerExtensions.LoadXML(objectManager, "example", false);
```

## 使用示例

```csharp
MBObjectManagerExtensions.LoadXML(objectManager, "example", false);
```

## 参见

- [本区域目录](../)