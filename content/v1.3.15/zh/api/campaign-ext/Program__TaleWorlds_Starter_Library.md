---
title: "Program__TaleWorlds_Starter_Library"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Program`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `main` 相关逻辑。

## 使用示例

```csharp
Program.Main("example");
```

## 参见

- [完整类目录](../catalog)