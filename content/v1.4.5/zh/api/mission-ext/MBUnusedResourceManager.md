---
title: "MBUnusedResourceManager"
description: "MBUnusedResourceManager 的自动生成类参考。"
---
# MBUnusedResourceManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBUnusedResourceManager`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBUnusedResourceManager.cs`

## 概述

`MBUnusedResourceManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MBUnusedResourceManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetMeshUsed
`public static void SetMeshUsed(string meshName)`

**用途 / Purpose:** 为 「mesh used」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBUnusedResourceManager.SetMeshUsed("example");
```

### SetMaterialUsed
`public static void SetMaterialUsed(string meshName)`

**用途 / Purpose:** 为 「material used」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBUnusedResourceManager.SetMaterialUsed("example");
```

### SetBodyUsed
`public static void SetBodyUsed(string bodyName)`

**用途 / Purpose:** 为 「body used」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBUnusedResourceManager.SetBodyUsed("example");
```

## 使用示例

```csharp
var manager = MBUnusedResourceManager.Current;
```

## 参见

- [本区域目录](../)