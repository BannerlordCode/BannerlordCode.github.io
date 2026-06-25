---
title: "RestData"
description: "RestData 的自动生成类参考。"
---
# RestData

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public abstract class RestData`
**Base:** 无
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond.Rest/RestData.cs`

## 概述

`RestData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `RestData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TypeName` | `public string TypeName { get; set; }` |

## 主要方法

### SerializeAsJson
`public string SerializeAsJson()`

**用途 / Purpose:** 将「as json」序列化为可存储或传输的格式。

```csharp
// 先通过子系统 API 拿到 RestData 实例
RestData restData = ...;
var result = restData.SerializeAsJson();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
RestData instance = ...;
```

## 参见

- [本区域目录](../)