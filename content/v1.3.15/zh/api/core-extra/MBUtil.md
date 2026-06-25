---
title: "MBUtil"
description: "MBUtil 的自动生成类参考。"
---
# MBUtil

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class MBUtil`
**Base:** 无
**File:** `TaleWorlds.Library/MBUtil.cs`

## 概述

`MBUtil` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### DirectoryCopy
`public static void DirectoryCopy(string sourceDirName, string destDirName, bool copySubDirs)`

**用途 / Purpose:** 处理与 「directory copy」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBUtil.DirectoryCopy("example", "example", false);
```

## 使用示例

```csharp
MBUtil.DirectoryCopy("example", "example", false);
```

## 参见

- [本区域目录](../)