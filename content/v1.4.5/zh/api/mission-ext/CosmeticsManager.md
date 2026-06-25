---
title: "CosmeticsManager"
description: "CosmeticsManager 的自动生成类参考。"
---
# CosmeticsManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Cosmetics
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CosmeticsManager`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Cosmetics/CosmeticsManager.cs`

## 概述

`CosmeticsManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CosmeticsManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetCosmeticElement
`public static CosmeticElement GetCosmeticElement(string cosmeticId)`

**用途 / Purpose:** 读取并返回当前对象中 cosmetic element 的结果。

```csharp
// 静态调用，不需要实例
CosmeticsManager.GetCosmeticElement("example");
```

### LoadFromXml
`public static void LoadFromXml(string path)`

**用途 / Purpose:** 从持久化存储或流中读取 from xml。

```csharp
// 静态调用，不需要实例
CosmeticsManager.LoadFromXml("example");
```

## 使用示例

```csharp
var manager = CosmeticsManager.Current;
```

## 参见

- [本区域目录](../)