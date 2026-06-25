---
title: "StreamHelpers"
description: "StreamHelpers 的自动生成类参考。"
---
# StreamHelpers

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class StreamHelpers`
**Base:** 无
**File:** `TaleWorlds.Library/SRTHelper.cs`

## 概述

`StreamHelpers` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CopyStream
`public static Stream CopyStream(Stream inputStream)`

**用途 / Purpose:** **用途 / Purpose:** 把当前对象的stream状态复制到目标对象。

```csharp
// 静态调用，不需要实例
StreamHelpers.CopyStream(inputStream);
```

## 使用示例

```csharp
StreamHelpers.CopyStream(inputStream);
```

## 参见

- [本区域目录](../)