---
title: "MetaData"
description: "MetaData 的自动生成类参考。"
---
# MetaData

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class MetaData`
**Base:** 无
**File:** `TaleWorlds.SaveSystem/MetaData.cs`

## 概述

`MetaData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `MetaData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Count` | `public int Count { get; }` |
| `this` | `public string this { get; set; }` |
| `Keys` | `public Dictionary<string, string>.KeyCollection Keys { get; }` |

## 主要方法

### Add
`public void Add(string key, string value)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 MetaData 实例
MetaData metaData = ...;
metaData.Add("example", "example");
```

### TryGetValue
`public bool TryGetValue(string key, out string value)`

**用途 / Purpose:** 尝试获取 「get value」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 MetaData 实例
MetaData metaData = ...;
var result = metaData.TryGetValue("example", value);
```

### Serialize
`public void Serialize(Stream stream)`

**用途 / Purpose:** 将当前对象序列化为可存储或传输的格式。

```csharp
// 先通过子系统 API 拿到 MetaData 实例
MetaData metaData = ...;
metaData.Serialize(stream);
```

### Deserialize
`public static MetaData Deserialize(Stream stream)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 静态调用，不需要实例
MetaData.Deserialize(stream);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
MetaData entry = ...;
```

## 参见

- [本区域目录](../)