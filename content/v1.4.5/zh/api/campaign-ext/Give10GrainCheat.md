---
title: "Give10GrainCheat"
description: "Give10GrainCheat 的自动生成类参考。"
---
# Give10GrainCheat

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class Give10GrainCheat : GameplayCheatItem`
**Base:** `GameplayCheatItem`
**File:** `Modules.SandBox/SandBox/Sandbox/Give10GrainCheat.cs`

## 概述

`Give10GrainCheat` 位于 `SandBox`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ExecuteCheat
`public override void ExecuteCheat()`

**用途 / Purpose:** 执行 「cheat」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 Give10GrainCheat 实例
Give10GrainCheat give10GrainCheat = ...;
give10GrainCheat.ExecuteCheat();
```

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 读取并返回当前对象中 「name」 的结果。

```csharp
// 先通过子系统 API 拿到 Give10GrainCheat 实例
Give10GrainCheat give10GrainCheat = ...;
var result = give10GrainCheat.GetName();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Give10GrainCheat give10GrainCheat = ...;
give10GrainCheat.ExecuteCheat();
```

## 参见

- [本区域目录](../)