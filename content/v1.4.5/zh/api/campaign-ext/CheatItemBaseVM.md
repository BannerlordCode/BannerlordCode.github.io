---
title: "CheatItemBaseVM"
description: "CheatItemBaseVM 的自动生成类参考。"
---
# CheatItemBaseVM

**Namespace:** SandBox.ViewModelCollection.Map.Cheat
**Module:** SandBox.ViewModelCollection
**Type:** `public abstract class CheatItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Map.Cheat/CheatItemBaseVM.cs`

## 概述

`CheatItemBaseVM` 位于 `SandBox.ViewModelCollection.Map.Cheat`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Map.Cheat` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |

## 主要方法

### ExecuteAction
`public abstract void ExecuteAction()`

**用途 / Purpose:** 执行 「action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CheatItemBaseVM 实例
CheatItemBaseVM cheatItemBaseVM = ...;
cheatItemBaseVM.ExecuteAction();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
CheatItemBaseVM instance = ...;
```

## 参见

- [本区域目录](../)