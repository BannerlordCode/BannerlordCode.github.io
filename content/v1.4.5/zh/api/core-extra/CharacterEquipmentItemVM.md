---
title: "CharacterEquipmentItemVM"
description: "CharacterEquipmentItemVM 的自动生成类参考。"
---
# CharacterEquipmentItemVM

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class CharacterEquipmentItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection/CharacterEquipmentItemVM.cs`

## 概述

`CharacterEquipmentItemVM` 位于 `TaleWorlds.Core.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Type` | `public string Type { get; set; }` |
| `HasItem` | `public bool HasItem { get; set; }` |

## 主要方法

### ExecuteBeginHint
`public virtual void ExecuteBeginHint()`

**用途 / Purpose:** 执行 「begin hint」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CharacterEquipmentItemVM 实例
CharacterEquipmentItemVM characterEquipmentItemVM = ...;
characterEquipmentItemVM.ExecuteBeginHint();
```

### ExecuteEndHint
`public virtual void ExecuteEndHint()`

**用途 / Purpose:** 执行 「end hint」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CharacterEquipmentItemVM 实例
CharacterEquipmentItemVM characterEquipmentItemVM = ...;
characterEquipmentItemVM.ExecuteEndHint();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CharacterEquipmentItemVM characterEquipmentItemVM = ...;
characterEquipmentItemVM.ExecuteBeginHint();
```

## 参见

- [本区域目录](../)