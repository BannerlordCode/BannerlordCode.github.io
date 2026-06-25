---
title: "KeyOptionVM"
description: "KeyOptionVM 的自动生成类参考。"
---
# KeyOptionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class KeyOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/KeyOptionVM.cs`

## 概述

`KeyOptionVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentKey` | `public Key CurrentKey { get; set; }` |
| `Key` | `public Key Key { get; set; }` |
| `OptionValueText` | `public string OptionValueText { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `IsChanged` | `public bool IsChanged { get; set; }` |
| `RevertHint` | `public HintViewModel RevertHint { get; set; }` |
| `ExtraInformationText` | `public string ExtraInformationText { get; set; }` |

## 主要方法

### Set
`public abstract void Set(InputKey newKey)`

**用途 / Purpose:** **用途 / Purpose:** 为当前对象的属性或状态赋新值。

```csharp
// 先通过子系统 API 拿到 KeyOptionVM 实例
KeyOptionVM keyOptionVM = ...;
keyOptionVM.Set(newKey);
```

### Update
`public abstract void Update()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 KeyOptionVM 实例
KeyOptionVM keyOptionVM = ...;
keyOptionVM.Update();
```

### OnDone
`public abstract void OnDone()`

**用途 / Purpose:** **用途 / Purpose:** 在 done 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 KeyOptionVM 实例
KeyOptionVM keyOptionVM = ...;
keyOptionVM.OnDone();
```

### ExecuteRevert
`public abstract void ExecuteRevert()`

**用途 / Purpose:** **用途 / Purpose:** 执行 revert 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 KeyOptionVM 实例
KeyOptionVM keyOptionVM = ...;
keyOptionVM.ExecuteRevert();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
KeyOptionVM instance = ...;
```

## 参见

- [本区域目录](../)