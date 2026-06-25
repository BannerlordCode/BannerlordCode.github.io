---
title: "MultipleBattleResult"
description: "MultipleBattleResult 的自动生成类参考。"
---
# MultipleBattleResult

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultipleBattleResult`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/MultipleBattleResult.cs`

## 概述

`MultipleBattleResult` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BattleResults` | `public List<BattleResult> BattleResults { get; set; }` |

## 主要方法

### CreateNewBattleResult
`public void CreateNewBattleResult(string gameType)`

**用途 / Purpose:** 构建一个新的 new battle result 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 MultipleBattleResult 实例
MultipleBattleResult multipleBattleResult = ...;
multipleBattleResult.CreateNewBattleResult("example");
```

### GetCurrentBattleResult
`public BattleResult GetCurrentBattleResult()`

**用途 / Purpose:** 读取并返回当前对象中 current battle result 的结果。

```csharp
// 先通过子系统 API 拿到 MultipleBattleResult 实例
MultipleBattleResult multipleBattleResult = ...;
var result = multipleBattleResult.GetCurrentBattleResult();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MultipleBattleResult multipleBattleResult = ...;
multipleBattleResult.CreateNewBattleResult("example");
```

## 参见

- [本区域目录](../)