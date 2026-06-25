---
title: "PeerId"
description: "PeerId 的自动生成类参考。"
---
# PeerId

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public struct PeerId`
**Base:** 无
**File:** `TaleWorlds.Diamond/PeerId.cs`

## 概述

`PeerId` 位于 `TaleWorlds.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Empty` | `public static PeerId Empty { get; }` |

## 主要方法

### ToByteArray
`public byte ToByteArray()`

**用途 / Purpose:** 处理与 「to byte array」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PeerId 实例
PeerId peerId = ...;
var result = peerId.ToByteArray();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 PeerId 实例
PeerId peerId = ...;
var result = peerId.ToString();
```

### FromString
`public static PeerId FromString(string peerIdAsString)`

**用途 / Purpose:** 处理与 「from string」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PeerId.FromString("example");
```

### Equals
`public override bool Equals(object o)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 PeerId 实例
PeerId peerId = ...;
var result = peerId.Equals(o);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 PeerId 实例
PeerId peerId = ...;
var result = peerId.GetHashCode();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PeerId peerId = ...;
peerId.ToByteArray();
```

## 参见

- [本区域目录](../)