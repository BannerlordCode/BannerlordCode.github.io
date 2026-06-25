---
title: "ResultData"
description: "ResultData 的自动生成类参考。"
---
# ResultData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ResultData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/ResultData.cs`

## 概述

`ResultData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ResultData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Errors` | `public string Errors { get; set; }` |
| `DLLs` | `public List<DLLResult> DLLs { get; set; }` |

## 主要方法

### AddDLLResult
`public void AddDLLResult(string dllName, bool isSafe, string information)`

**用途 / Purpose:** 将 d l l result 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ResultData 实例
ResultData resultData = ...;
resultData.AddDLLResult("example", false, "example");
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 ResultData 实例
ResultData resultData = ...;
var result = resultData.ToString();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
ResultData entry = ...;
```

## 参见

- [本区域目录](../)