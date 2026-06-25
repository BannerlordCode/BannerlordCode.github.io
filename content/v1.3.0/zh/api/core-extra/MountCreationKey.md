---
title: "MountCreationKey"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MountCreationKey`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MountCreationKey

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MountCreationKey`
**Base:** 无
**File:** `TaleWorlds.Core/MountCreationKey.cs`

## 概述

`MountCreationKey` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `_leftFrontLegColorIndex` | `public byte _leftFrontLegColorIndex { get; }` |
| `_rightFrontLegColorIndex` | `public byte _rightFrontLegColorIndex { get; }` |
| `_leftBackLegColorIndex` | `public byte _leftBackLegColorIndex { get; }` |
| `_rightBackLegColorIndex` | `public byte _rightBackLegColorIndex { get; }` |
| `MaterialIndex` | `public byte MaterialIndex { get; }` |
| `MeshMultiplierIndex` | `public byte MeshMultiplierIndex { get; }` |

## 主要方法

### FromString
`public static MountCreationKey FromString(string str)`

**用途 / Purpose:** 处理 `from string` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### GetRandomMountKeyString
`public static string GetRandomMountKeyString(ItemObject mountItem, int randomSeed)`

**用途 / Purpose:** 获取 `random mount key string` 的当前值。

### GetRandomMountKey
`public static MountCreationKey GetRandomMountKey(ItemObject mountItem, int randomSeed)`

**用途 / Purpose:** 获取 `random mount key` 的当前值。

## 使用示例

```csharp
MountCreationKey.FromString("example");
```

## 参见

- [完整类目录](../catalog)