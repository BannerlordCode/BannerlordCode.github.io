---
title: "VirtualFolders"
description: "VirtualFolders 的自动生成类参考。"
---
# VirtualFolders

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class VirtualFolders`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/VirtualFolders.cs`

## 概述

`VirtualFolders` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetFileContent
`public static string GetFileContent(string filePath, Type type = null)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 file content 的结果。

```csharp
// 静态调用，不需要实例
VirtualFolders.GetFileContent("example", null);
```

## 使用示例

```csharp
VirtualFolders.GetFileContent("example", null);
```

## 参见

- [本区域目录](../)