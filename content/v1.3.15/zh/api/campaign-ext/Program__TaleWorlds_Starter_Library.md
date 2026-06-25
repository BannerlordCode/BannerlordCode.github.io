---
title: "Program"
description: "Program 的自动生成类参考。"
---
# Program

**Namespace:** TaleWorlds.Starter.Library
**Module:** TaleWorlds.Starter
**Type:** `public class Program`
**Base:** 无
**File:** `TaleWorlds.Starter.Library/Program.cs`

## 概述

`Program` 位于 `TaleWorlds.Starter.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Starter.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Main
`public static int Main(string args)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Program.Main("example");
```

## 使用示例

```csharp
Program.Main("example");
```

## 参见

- [本区域目录](../)