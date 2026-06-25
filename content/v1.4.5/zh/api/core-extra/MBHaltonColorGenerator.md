---
title: "MBHaltonColorGenerator"
description: "MBHaltonColorGenerator 的自动生成类参考。"
---
# MBHaltonColorGenerator

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBHaltonColorGenerator`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MBHaltonColorGenerator.cs`

## 概述

`MBHaltonColorGenerator` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetBase
`public void SetBase()`

**用途 / Purpose:** 为 「base」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBHaltonColorGenerator 实例
MBHaltonColorGenerator mBHaltonColorGenerator = ...;
mBHaltonColorGenerator.SetBase();
```

### SetBase
`public void SetBase(int baseValue)`

**用途 / Purpose:** 为 「base」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBHaltonColorGenerator 实例
MBHaltonColorGenerator mBHaltonColorGenerator = ...;
mBHaltonColorGenerator.SetBase(0);
```

### SetOffset
`public void SetOffset(float offset)`

**用途 / Purpose:** 为 「offset」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBHaltonColorGenerator 实例
MBHaltonColorGenerator mBHaltonColorGenerator = ...;
mBHaltonColorGenerator.SetOffset(0);
```

### SetRandomOffset
`public void SetRandomOffset()`

**用途 / Purpose:** 为 「random offset」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBHaltonColorGenerator 实例
MBHaltonColorGenerator mBHaltonColorGenerator = ...;
mBHaltonColorGenerator.SetRandomOffset();
```

### GetColor
`public Color GetColor(int index, int maxIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「color」 的结果。

```csharp
// 先通过子系统 API 拿到 MBHaltonColorGenerator 实例
MBHaltonColorGenerator mBHaltonColorGenerator = ...;
var result = mBHaltonColorGenerator.GetColor(0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MBHaltonColorGenerator mBHaltonColorGenerator = ...;
mBHaltonColorGenerator.SetBase();
```

## 参见

- [本区域目录](../)