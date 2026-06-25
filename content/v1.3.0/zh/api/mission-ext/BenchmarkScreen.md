---
title: "BenchmarkScreen"
description: "BenchmarkScreen 的自动生成类参考。"
---
# BenchmarkScreen

**Namespace:** TaleWorlds.MountAndBlade.View.Screens
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BenchmarkScreen : ScreenBase`
**Base:** `ScreenBase`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/BenchmarkScreen.cs`

## 概述

`BenchmarkScreen` 位于 `TaleWorlds.MountAndBlade.View.Screens`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Screens` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### UpdateCamera
`public void UpdateCamera()`

**用途 / Purpose:** 重新计算并更新 「camera」 的最新表示。

```csharp
// 先通过子系统 API 拿到 BenchmarkScreen 实例
BenchmarkScreen benchmarkScreen = ...;
benchmarkScreen.UpdateCamera();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BenchmarkScreen benchmarkScreen = ...;
benchmarkScreen.UpdateCamera();
```

## 参见

- [本区域目录](../)