---
title: "PlayerId"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerId`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerId

**Namespace:** TaleWorlds.PlayerServices
**Module:** TaleWorlds.PlayerServices
**Type:** `public struct PlayerId : IComparable<PlayerId>, IEquatable<PlayerId>`
**Base:** `IComparable<PlayerId>`
**File:** `TaleWorlds.PlayerServices/PlayerServices/PlayerId.cs`

## 概述

`PlayerId` 位于 `TaleWorlds.PlayerServices`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.PlayerServices` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id1` | `public ulong Id1 { get; }` |
| `Id2` | `public ulong Id2 { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `ProvidedType` | `public PlayerIdProvidedTypes ProvidedType { get; }` |
| `Part1` | `public ulong Part1 { get; }` |
| `Part2` | `public ulong Part2 { get; }` |
| `Part3` | `public ulong Part3 { get; }` |
| `Part4` | `public ulong Part4 { get; }` |
| `Empty` | `public static PlayerId Empty { get; }` |

## 主要方法

### ToByteArray
`public byte ToByteArray()`

**用途 / Purpose:** 处理 `to byte array` 相关逻辑。

### Serialize
`public void Serialize(IWriter writer)`

**用途 / Purpose:** 处理 `serialize` 相关逻辑。

### Deserialize
`public void Deserialize(IReader reader)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### Equals
`public override bool Equals(object o)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### FromString
`public static PlayerId FromString(string id)`

**用途 / Purpose:** 处理 `from string` 相关逻辑。

### CompareTo
`public int CompareTo(PlayerId other)`

**用途 / Purpose:** 处理 `compare to` 相关逻辑。

### Equals
`public bool Equals(PlayerId other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

## 使用示例

```csharp
var value = new PlayerId();
value.ToByteArray();
```

## 参见

- [完整类目录](../catalog)