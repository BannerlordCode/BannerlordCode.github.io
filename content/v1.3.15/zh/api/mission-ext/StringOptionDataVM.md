---
title: "StringOptionDataVM"
description: "StringOptionDataVM 的自动生成类参考。"
---
# StringOptionDataVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StringOptionDataVM : GenericOptionDataVM`
**Base:** `GenericOptionDataVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/StringOptionDataVM.cs`

## 概述

`StringOptionDataVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Selector` | `public SelectorVM<SelectorItemVM> Selector { get; set; }` |

## 主要方法

### UpdateData
`public override void UpdateData(bool initialUpdate)`

**用途 / Purpose:** 重新计算并更新 「data」 的最新表示。

```csharp
// 先通过子系统 API 拿到 StringOptionDataVM 实例
StringOptionDataVM stringOptionDataVM = ...;
stringOptionDataVM.UpdateData(false);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 StringOptionDataVM 实例
StringOptionDataVM stringOptionDataVM = ...;
stringOptionDataVM.RefreshValues();
```

### UpdateValue
`public void UpdateValue(SelectorVM<SelectorItemVM> selector)`

**用途 / Purpose:** 重新计算并更新 「value」 的最新表示。

```csharp
// 先通过子系统 API 拿到 StringOptionDataVM 实例
StringOptionDataVM stringOptionDataVM = ...;
stringOptionDataVM.UpdateValue(selector);
```

### UpdateValue
`public override void UpdateValue()`

**用途 / Purpose:** 重新计算并更新 「value」 的最新表示。

```csharp
// 先通过子系统 API 拿到 StringOptionDataVM 实例
StringOptionDataVM stringOptionDataVM = ...;
stringOptionDataVM.UpdateValue();
```

### Cancel
`public override void Cancel()`

**用途 / Purpose:** 检查当前对象是否满足 「cel」 的前置条件。

```csharp
// 先通过子系统 API 拿到 StringOptionDataVM 实例
StringOptionDataVM stringOptionDataVM = ...;
stringOptionDataVM.Cancel();
```

### SetValue
`public override void SetValue(float value)`

**用途 / Purpose:** 为 「value」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 StringOptionDataVM 实例
StringOptionDataVM stringOptionDataVM = ...;
stringOptionDataVM.SetValue(0);
```

### ResetData
`public override void ResetData()`

**用途 / Purpose:** 将 「data」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 StringOptionDataVM 实例
StringOptionDataVM stringOptionDataVM = ...;
stringOptionDataVM.ResetData();
```

### IsChanged
`public override bool IsChanged()`

**用途 / Purpose:** 判断当前对象是否处于 「changed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 StringOptionDataVM 实例
StringOptionDataVM stringOptionDataVM = ...;
var result = stringOptionDataVM.IsChanged();
```

### ApplyValue
`public override void ApplyValue()`

**用途 / Purpose:** 将 「value」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 StringOptionDataVM 实例
StringOptionDataVM stringOptionDataVM = ...;
stringOptionDataVM.ApplyValue();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
StringOptionDataVM stringOptionDataVM = ...;
stringOptionDataVM.UpdateData(false);
```

## 参见

- [本区域目录](../)