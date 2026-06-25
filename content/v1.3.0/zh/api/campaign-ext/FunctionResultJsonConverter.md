---
title: "FunctionResultJsonConverter"
description: "FunctionResultJsonConverter 的自动生成类参考。"
---
# FunctionResultJsonConverter

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public class FunctionResultJsonConverter : JsonConverter`
**Base:** `JsonConverter`
**File:** `TaleWorlds.Diamond/FunctionResultJsonConverter.cs`

## 概述

`FunctionResultJsonConverter` 位于 `TaleWorlds.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CanWrite` | `public override bool CanWrite { get; }` |

## 主要方法

### CanConvert
`public override bool CanConvert(Type objectType)`

**用途 / Purpose:** 检查当前对象是否满足 「convert」 的前置条件。

```csharp
// 先通过子系统 API 拿到 FunctionResultJsonConverter 实例
FunctionResultJsonConverter functionResultJsonConverter = ...;
var result = functionResultJsonConverter.CanConvert(objectType);
```

### ReadJson
`public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)`

**用途 / Purpose:** 读取「json」的数据或状态。

```csharp
// 先通过子系统 API 拿到 FunctionResultJsonConverter 实例
FunctionResultJsonConverter functionResultJsonConverter = ...;
var result = functionResultJsonConverter.ReadJson(reader, objectType, existingValue, serializer);
```

### WriteJson
`public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)`

**用途 / Purpose:** 将「json」写入目标位置。

```csharp
// 先通过子系统 API 拿到 FunctionResultJsonConverter 实例
FunctionResultJsonConverter functionResultJsonConverter = ...;
functionResultJsonConverter.WriteJson(writer, value, serializer);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FunctionResultJsonConverter functionResultJsonConverter = ...;
functionResultJsonConverter.CanConvert(objectType);
```

## 参见

- [本区域目录](../)