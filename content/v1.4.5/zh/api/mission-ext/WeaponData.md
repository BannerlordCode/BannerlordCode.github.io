---
title: "WeaponData"
description: "WeaponData 的自动生成类参考。"
---
# WeaponData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct WeaponData`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/WeaponData.cs`

## 概述

`WeaponData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `WeaponData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsValid
`public bool IsValid()`

**用途 / Purpose:** 判断当前对象是否处于 「valid」 状态或条件。

```csharp
// 先通过子系统 API 拿到 WeaponData 实例
WeaponData weaponData = ...;
var result = weaponData.IsValid();
```

### GetItemObject
`public ItemObject GetItemObject()`

**用途 / Purpose:** 读取并返回当前对象中 「item object」 的结果。

```csharp
// 先通过子系统 API 拿到 WeaponData 实例
WeaponData weaponData = ...;
var result = weaponData.GetItemObject();
```

### DeinitializeManagedPointers
`public void DeinitializeManagedPointers()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 WeaponData 实例
WeaponData weaponData = ...;
weaponData.DeinitializeManagedPointers();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
WeaponData entry = ...;
```

## 参见

- [本区域目录](../)