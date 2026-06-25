---
title: "StringItemWithEnabledAndHintVM"
description: "StringItemWithEnabledAndHintVM 的自动生成类参考。"
---
# StringItemWithEnabledAndHintVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Generic
**Module:** TaleWorlds.Core
**Type:** `public class StringItemWithEnabledAndHintVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Generic/StringItemWithEnabledAndHintVM.cs`

## 概述

`StringItemWithEnabledAndHintVM` 位于 `TaleWorlds.Core.ViewModelCollection.Generic`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection.Generic` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ActionText` | `public string ActionText { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |

## 主要方法

### ExecuteAction
`public void ExecuteAction()`

**用途 / Purpose:** 执行 action 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 StringItemWithEnabledAndHintVM 实例
StringItemWithEnabledAndHintVM stringItemWithEnabledAndHintVM = ...;
stringItemWithEnabledAndHintVM.ExecuteAction();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
StringItemWithEnabledAndHintVM stringItemWithEnabledAndHintVM = ...;
stringItemWithEnabledAndHintVM.ExecuteAction();
```

## 参见

- [本区域目录](../)