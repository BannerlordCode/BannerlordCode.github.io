---
title: "CheatGroupItemVM"
description: "CheatGroupItemVM 的自动生成类参考。"
---
# CheatGroupItemVM

**Namespace:** SandBox.ViewModelCollection.Map.Cheat
**Module:** SandBox.ViewModelCollection
**Type:** `public class CheatGroupItemVM : CheatItemBaseVM`
**Base:** `CheatItemBaseVM`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Map.Cheat/CheatGroupItemVM.cs`

## 概述

`CheatGroupItemVM` 位于 `SandBox.ViewModelCollection.Map.Cheat`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Map.Cheat` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CheatGroupItemVM 实例
CheatGroupItemVM cheatGroupItemVM = ...;
cheatGroupItemVM.RefreshValues();
```

### ExecuteAction
`public override void ExecuteAction()`

**用途 / Purpose:** **用途 / Purpose:** 执行 action 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CheatGroupItemVM 实例
CheatGroupItemVM cheatGroupItemVM = ...;
cheatGroupItemVM.ExecuteAction();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CheatGroupItemVM cheatGroupItemVM = ...;
cheatGroupItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)