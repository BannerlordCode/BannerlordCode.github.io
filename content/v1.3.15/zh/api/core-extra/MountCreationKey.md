---
title: "MountCreationKey"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MountCreationKey`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MountCreationKey

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** `public class MountCreationKey`
**领域:** core-extra

## 概述

`MountCreationKey` 位于 `TaleWorlds.Core`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先准备该类型需要的上下文，然后直接调用静态入口
MountCreationKey.FromString("example");
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
