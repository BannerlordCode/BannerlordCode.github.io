---
title: "SaveOutput"
description: "SaveOutput 的自动生成类参考。"
---
# SaveOutput

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveOutput`
**Base:** 无
**File:** `TaleWorlds.SaveSystem/Save/SaveOutput.cs`

## 概述

`SaveOutput` 位于 `TaleWorlds.SaveSystem.Save`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Save` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Data` | `public GameData Data { get; }` |
| `Result` | `public SaveResult Result { get; }` |
| `Errors` | `public SaveError Errors { get; }` |
| `Successful` | `public bool Successful { get; }` |
| `IsContinuing` | `public bool IsContinuing { get; }` |

## 主要方法

### PrintStatus
`public void PrintStatus()`

**用途 / Purpose:** 获取或更新 「print status」 的状态。

```csharp
// 先通过子系统 API 拿到 SaveOutput 实例
SaveOutput saveOutput = ...;
saveOutput.PrintStatus();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SaveOutput saveOutput = ...;
saveOutput.PrintStatus();
```

## 参见

- [本区域目录](../)