---
title: "MBStringBuilder"
description: "MBStringBuilder 的自动生成类参考。"
---
# MBStringBuilder

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct MBStringBuilder`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/MBStringBuilder.cs`

## 概述

`MBStringBuilder` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Acquire
`public static StringBuilder Acquire(int capacity = 16)`

**用途 / Purpose:** 调用 Acquire 对应的操作。

```csharp
// 静态调用，不需要实例
MBStringBuilder.Acquire(0);
```

### Release
`public static void Release(StringBuilder sb)`

**用途 / Purpose:** 调用 Release 对应的操作。

```csharp
// 静态调用，不需要实例
MBStringBuilder.Release("example");
```

### GetStringAndReleaseBuilder
`public static string GetStringAndReleaseBuilder(StringBuilder sb)`

**用途 / Purpose:** 读取并返回当前对象中 string and release builder 的结果。

```csharp
// 静态调用，不需要实例
MBStringBuilder.GetStringAndReleaseBuilder("example");
```

### Initialize
`public void Initialize(int capacity = 16, string callerMemberName = "")`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MBStringBuilder 实例
MBStringBuilder mBStringBuilder = ...;
mBStringBuilder.Initialize(0, "example");
```

### ToStringAndRelease
`public string ToStringAndRelease()`

**用途 / Purpose:** 生成当前对象的可读字符串表示。

```csharp
// 先通过子系统 API 拿到 MBStringBuilder 实例
MBStringBuilder mBStringBuilder = ...;
var result = mBStringBuilder.ToStringAndRelease();
```

### Release
`public void Release()`

**用途 / Purpose:** 调用 Release 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBStringBuilder 实例
MBStringBuilder mBStringBuilder = ...;
mBStringBuilder.Release();
```

### Append
`public MBStringBuilder Append(char value)`

**用途 / Purpose:** 将append追加到当前集合或序列末尾。

```csharp
// 先通过子系统 API 拿到 MBStringBuilder 实例
MBStringBuilder mBStringBuilder = ...;
var result = mBStringBuilder.Append(value);
```

### Append
`public MBStringBuilder Append(int value)`

**用途 / Purpose:** 将append追加到当前集合或序列末尾。

```csharp
// 先通过子系统 API 拿到 MBStringBuilder 实例
MBStringBuilder mBStringBuilder = ...;
var result = mBStringBuilder.Append(0);
```

### Append
`public MBStringBuilder Append(uint value)`

**用途 / Purpose:** 将append追加到当前集合或序列末尾。

```csharp
// 先通过子系统 API 拿到 MBStringBuilder 实例
MBStringBuilder mBStringBuilder = ...;
var result = mBStringBuilder.Append(0);
```

### Append
`public MBStringBuilder Append(float value)`

**用途 / Purpose:** 将append追加到当前集合或序列末尾。

```csharp
// 先通过子系统 API 拿到 MBStringBuilder 实例
MBStringBuilder mBStringBuilder = ...;
var result = mBStringBuilder.Append(0);
```

### Append
`public MBStringBuilder Append(double value)`

**用途 / Purpose:** 将append追加到当前集合或序列末尾。

```csharp
// 先通过子系统 API 拿到 MBStringBuilder 实例
MBStringBuilder mBStringBuilder = ...;
var result = mBStringBuilder.Append(0);
```

### AppendLine
`public MBStringBuilder AppendLine()`

**用途 / Purpose:** 将line追加到当前集合或序列末尾。

```csharp
// 先通过子系统 API 拿到 MBStringBuilder 实例
MBStringBuilder mBStringBuilder = ...;
var result = mBStringBuilder.AppendLine();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 MBStringBuilder 实例
MBStringBuilder mBStringBuilder = ...;
var result = mBStringBuilder.ToString();
```

## 使用示例

```csharp
MBStringBuilder.Acquire(0);
```

## 参见

- [本区域目录](../)