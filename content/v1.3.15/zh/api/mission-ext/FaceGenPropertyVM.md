---
title: "FaceGenPropertyVM"
description: "FaceGenPropertyVM 的自动生成类参考。"
---
# FaceGenPropertyVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FaceGenPropertyVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenPropertyVM.cs`

## 概述

`FaceGenPropertyVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `KeyTimePoint` | `public int KeyTimePoint { get; }` |
| `Min` | `public float Min { get; set; }` |
| `TabID` | `public int TabID { get; set; }` |
| `Max` | `public float Max { get; set; }` |
| `Value` | `public float Value { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDiscrete` | `public bool IsDiscrete { get; set; }` |

## 主要方法

### Reset
`public void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 FaceGenPropertyVM 实例
FaceGenPropertyVM faceGenPropertyVM = ...;
faceGenPropertyVM.Reset();
```

### Randomize
`public void Randomize()`

**用途 / Purpose:** 处理与 「randomize」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 FaceGenPropertyVM 实例
FaceGenPropertyVM faceGenPropertyVM = ...;
faceGenPropertyVM.Randomize();
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 FaceGenPropertyVM 实例
FaceGenPropertyVM faceGenPropertyVM = ...;
faceGenPropertyVM.RefreshValues();
```

### AddCommand
`public void AddCommand()`

**用途 / Purpose:** 将 「command」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 FaceGenPropertyVM 实例
FaceGenPropertyVM faceGenPropertyVM = ...;
faceGenPropertyVM.AddCommand();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FaceGenPropertyVM faceGenPropertyVM = ...;
faceGenPropertyVM.Reset();
```

## 参见

- [本区域目录](../)