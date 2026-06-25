---
title: "ParameterFile"
description: "ParameterFile 的自动生成类参考。"
---
# ParameterFile

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ParameterFile`
**Base:** 无
**File:** `TaleWorlds.Library/ParameterFile.cs`

## 概述

`ParameterFile` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Path` | `public string Path { get; }` |
| `LastCheckedTime` | `public DateTime LastCheckedTime { get; }` |
| `ParameterContainer` | `public ParameterContainer ParameterContainer { get; }` |

## 主要方法

### CheckIfNeedsToBeRefreshed
`public bool CheckIfNeedsToBeRefreshed()`

**用途 / Purpose:** 检查if needs to be refreshed在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 ParameterFile 实例
ParameterFile parameterFile = ...;
var result = parameterFile.CheckIfNeedsToBeRefreshed();
```

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ParameterFile 实例
ParameterFile parameterFile = ...;
parameterFile.Refresh();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ParameterFile parameterFile = ...;
parameterFile.CheckIfNeedsToBeRefreshed();
```

## 参见

- [本区域目录](../)