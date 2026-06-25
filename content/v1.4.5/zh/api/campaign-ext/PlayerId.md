---
title: "PlayerId"
description: "PlayerId 的自动生成类参考。"
---
# PlayerId

**Namespace:** TaleWorlds.PlayerServices
**Module:** TaleWorlds.PlayerServices
**Type:** `public struct PlayerId : IComparable<PlayerId>, IEquatable<PlayerId>`
**Base:** `IComparable<PlayerId>`
**File:** `bin/TaleWorlds.PlayerServices/TaleWorlds.PlayerServices/PlayerId.cs`

## 概述

`PlayerId` 位于 `TaleWorlds.PlayerServices`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.PlayerServices` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## 主要方法

### ToByteArray
`public byte ToByteArray()`

**用途 / Purpose:** 处理与 「to byte array」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PlayerId 实例
PlayerId playerId = ...;
var result = playerId.ToByteArray();
```

### Serialize
`public void Serialize(IWriter writer)`

**用途 / Purpose:** 将当前对象序列化为可存储或传输的格式。

```csharp
// 先通过子系统 API 拿到 PlayerId 实例
PlayerId playerId = ...;
playerId.Serialize(writer);
```

### Deserialize
`public void Deserialize(IReader reader)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 PlayerId 实例
PlayerId playerId = ...;
playerId.Deserialize(reader);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 PlayerId 实例
PlayerId playerId = ...;
var result = playerId.ToString();
```

### Equals
`public override bool Equals(object o)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 PlayerId 实例
PlayerId playerId = ...;
var result = playerId.Equals(o);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 PlayerId 实例
PlayerId playerId = ...;
var result = playerId.GetHashCode();
```

### FromString
`public static PlayerId FromString(string id)`

**用途 / Purpose:** 处理与 「from string」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerId.FromString("example");
```

### CompareTo
`public int CompareTo(PlayerId other)`

**用途 / Purpose:** 将当前对象与传入实例比较大小或顺序。

```csharp
// 先通过子系统 API 拿到 PlayerId 实例
PlayerId playerId = ...;
var result = playerId.CompareTo(other);
```

### Equals
`public bool Equals(PlayerId other)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 PlayerId 实例
PlayerId playerId = ...;
var result = playerId.Equals(other);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PlayerId playerId = ...;
playerId.ToByteArray();
```

## 参见

- [本区域目录](../)