---
title: "MountCreationKey"
description: "MountCreationKey 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 调用 FromString 对应的操作。

```csharp
// 静态调用，不需要实例
MountCreationKey.FromString("example");
```

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 MountCreationKey 实例
MountCreationKey mountCreationKey = ...;
var result = mountCreationKey.ToString();
```

### GetRandomMountKeyString
`public static string GetRandomMountKeyString(ItemObject mountItem, int randomSeed)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 random mount key string 的结果。

```csharp
// 静态调用，不需要实例
MountCreationKey.GetRandomMountKeyString(mountItem, 0);
```

### GetRandomMountKey
`public static MountCreationKey GetRandomMountKey(ItemObject mountItem, int randomSeed)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 random mount key 的结果。

```csharp
// 静态调用，不需要实例
MountCreationKey.GetRandomMountKey(mountItem, 0);
```

## 使用示例

```csharp
MountCreationKey.FromString("example");
```

## 参见

- [本区域目录](../)