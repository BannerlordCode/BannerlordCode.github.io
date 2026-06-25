---
title: "AtmosphereInfo"
description: "AtmosphereInfo 的自动生成类参考。"
---
# AtmosphereInfo

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct AtmosphereInfo`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/AtmosphereInfo.cs`

## 概述

`AtmosphereInfo` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetInvalidAtmosphereInfo
`public static AtmosphereInfo GetInvalidAtmosphereInfo()`

**用途 / Purpose:** 读取并返回当前对象中 invalid atmosphere info 的结果。

```csharp
// 静态调用，不需要实例
AtmosphereInfo.GetInvalidAtmosphereInfo();
```

### DeserializeFrom
`public void DeserializeFrom(IReader reader)`

**用途 / Purpose:** 从序列化数据还原出from。

```csharp
// 先通过子系统 API 拿到 AtmosphereInfo 实例
AtmosphereInfo atmosphereInfo = ...;
atmosphereInfo.DeserializeFrom(reader);
```

### SerializeTo
`public void SerializeTo(IWriter writer)`

**用途 / Purpose:** 将to序列化为可存储或传输的格式。

```csharp
// 先通过子系统 API 拿到 AtmosphereInfo 实例
AtmosphereInfo atmosphereInfo = ...;
atmosphereInfo.SerializeTo(writer);
```

## 使用示例

```csharp
AtmosphereInfo.GetInvalidAtmosphereInfo();
```

## 参见

- [本区域目录](../)