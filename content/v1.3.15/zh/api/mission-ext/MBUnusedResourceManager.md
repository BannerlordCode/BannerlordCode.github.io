---
title: "MBUnusedResourceManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBUnusedResourceManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBUnusedResourceManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBUnusedResourceManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBUnusedResourceManager.cs`

## 概述

`MBUnusedResourceManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MBUnusedResourceManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetMeshUsed
`public static void SetMeshUsed(string meshName)`

**用途 / Purpose:** 设置 `mesh used` 的值或状态。

### SetMaterialUsed
`public static void SetMaterialUsed(string meshName)`

**用途 / Purpose:** 设置 `material used` 的值或状态。

### SetBodyUsed
`public static void SetBodyUsed(string bodyName)`

**用途 / Purpose:** 设置 `body used` 的值或状态。

## 使用示例

```csharp
var manager = MBUnusedResourceManager.Current;
```

## 参见

- [完整类目录](../catalog)