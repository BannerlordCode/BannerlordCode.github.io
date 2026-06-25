---
title: "MBFastRandomSelector"
description: "MBFastRandomSelector 的自动生成类参考。"
---
# MBFastRandomSelector

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBFastRandomSelector<T>`
**Base:** 无
**File:** `TaleWorlds.Core/MBFastRandomSelector.cs`

## 概述

`MBFastRandomSelector` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RemainingCount` | `public ushort RemainingCount { get; }` |

## 主要方法

### Initialize
`public void Initialize(MBReadOnlyList<T> list)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MBFastRandomSelector 实例
MBFastRandomSelector mBFastRandomSelector = ...;
mBFastRandomSelector.Initialize(list);
```

### Reset
`public void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MBFastRandomSelector 实例
MBFastRandomSelector mBFastRandomSelector = ...;
mBFastRandomSelector.Reset();
```

### Pack
`public void Pack()`

**用途 / Purpose:** 处理与 「pack」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MBFastRandomSelector 实例
MBFastRandomSelector mBFastRandomSelector = ...;
mBFastRandomSelector.Pack();
```

### SelectRandom
`public bool SelectRandom(out T selection, Predicate<T> conditions = null)`

**用途 / Purpose:** 处理与 「select random」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MBFastRandomSelector 实例
MBFastRandomSelector mBFastRandomSelector = ...;
var result = mBFastRandomSelector.SelectRandom(selection, null);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MBFastRandomSelector mBFastRandomSelector = ...;
mBFastRandomSelector.Initialize(list);
```

## 参见

- [本区域目录](../)