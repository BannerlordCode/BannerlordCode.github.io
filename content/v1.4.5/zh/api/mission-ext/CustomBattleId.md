---
title: "CustomBattleId"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleId`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleId

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CustomBattleId`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/CustomBattleId.cs`

## 概述

`CustomBattleId` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Guid` | `public Guid Guid { get; }` |

## 主要方法

### NewGuid
`public static CustomBattleId NewGuid()`

**用途 / Purpose:** 处理 `new guid` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToByteArray
`public byte ToByteArray()`

**用途 / Purpose:** 处理 `to byte array` 相关逻辑。

### Equals
`public override bool Equals(object o)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

## 使用示例

```csharp
CustomBattleId.NewGuid();
```

## 参见

- [完整类目录](../catalog)