---
title: "MPOptionsVM"
description: "MPOptionsVM 的自动生成类参考。"
---
# MPOptionsVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPOptionsVM : OptionsVM`
**Base:** `OptionsVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/MPOptionsVM.cs`

## 概述

`MPOptionsVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AreHotkeysEnabled` | `public bool AreHotkeysEnabled { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `ApplyText` | `public string ApplyText { get; set; }` |
| `RevertText` | `public string RevertText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPOptionsVM 实例
MPOptionsVM mPOptionsVM = ...;
mPOptionsVM.RefreshValues();
```

### ExecuteCancel
`public new void ExecuteCancel()`

**用途 / Purpose:** 执行 「cancel」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPOptionsVM 实例
MPOptionsVM mPOptionsVM = ...;
mPOptionsVM.ExecuteCancel();
```

### ExecuteApply
`public void ExecuteApply()`

**用途 / Purpose:** 执行 「apply」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPOptionsVM 实例
MPOptionsVM mPOptionsVM = ...;
mPOptionsVM.ExecuteApply();
```

### ForceCancel
`public void ForceCancel()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MPOptionsVM 实例
MPOptionsVM mPOptionsVM = ...;
mPOptionsVM.ForceCancel();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPOptionsVM mPOptionsVM = ...;
mPOptionsVM.RefreshValues();
```

## 参见

- [本区域目录](../)