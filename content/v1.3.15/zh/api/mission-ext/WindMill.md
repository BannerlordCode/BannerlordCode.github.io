---
title: "WindMill"
description: "WindMill 的自动生成类参考。"
---
# WindMill

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class WindMill : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/WindMill.cs`

## 概述

`WindMill` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetIntegerFromStringEnd
`public static int GetIntegerFromStringEnd(string str)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 integer from string end 的结果。

```csharp
// 静态调用，不需要实例
WindMill.GetIntegerFromStringEnd("example");
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tick requirement 的结果。

```csharp
// 先通过子系统 API 拿到 WindMill 实例
WindMill windMill = ...;
var result = windMill.GetTickRequirement();
```

## 使用示例

```csharp
WindMill.GetIntegerFromStringEnd("example");
```

## 参见

- [本区域目录](../)