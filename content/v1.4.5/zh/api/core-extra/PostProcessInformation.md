---
title: "PostProcessInformation"
description: "PostProcessInformation 的自动生成类参考。"
---
# PostProcessInformation

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PostProcessInformation`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/PostProcessInformation.cs`

## 概述

`PostProcessInformation` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### DeserializeFrom
`public void DeserializeFrom(IReader reader)`

**用途 / Purpose:** **用途 / Purpose:** 从序列化数据还原出from。

```csharp
// 先通过子系统 API 拿到 PostProcessInformation 实例
PostProcessInformation postProcessInformation = ...;
postProcessInformation.DeserializeFrom(reader);
```

### SerializeTo
`public void SerializeTo(IWriter writer)`

**用途 / Purpose:** **用途 / Purpose:** 将to序列化为可存储或传输的格式。

```csharp
// 先通过子系统 API 拿到 PostProcessInformation 实例
PostProcessInformation postProcessInformation = ...;
postProcessInformation.SerializeTo(writer);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PostProcessInformation postProcessInformation = ...;
postProcessInformation.DeserializeFrom(reader);
```

## 参见

- [本区域目录](../)