---
title: "PeerId"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PeerId`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `to byte array` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### FromString
`public static PeerId FromString(string peerIdAsString)`

**用途 / Purpose:** 处理 `from string` 相关逻辑。

### Equals
`public override bool Equals(object o)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

## 使用示例

```csharp
var value = new PeerId();
value.ToByteArray();
```

## 参见

- [完整类目录](../catalog)