---
title: "CraftedDataViewManager"
description: "CraftedDataViewManager 的自动生成类参考。"
---
# CraftedDataViewManager

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftedDataViewManager`
**Base:** 无
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/CraftedDataViewManager.cs`

## 概述

`CraftedDataViewManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CraftedDataViewManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 静态调用，不需要实例
CraftedDataViewManager.Initialize();
```

### Clear
`public static void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 静态调用，不需要实例
CraftedDataViewManager.Clear();
```

### GetCraftedDataView
`public static CraftedDataView GetCraftedDataView(WeaponDesign craftedData)`

**用途 / Purpose:** 读取并返回当前对象中 crafted data view 的结果。

```csharp
// 静态调用，不需要实例
CraftedDataViewManager.GetCraftedDataView(craftedData);
```

## 使用示例

```csharp
var manager = CraftedDataViewManager.Current;
```

## 参见

- [本区域目录](../)