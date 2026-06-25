---
title: "ModuleNetworkData"
description: "ModuleNetworkData 的自动生成类参考。"
---
# ModuleNetworkData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ModuleNetworkData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/ModuleNetworkData.cs`

## 概述

`ModuleNetworkData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ModuleNetworkData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ReadItemReferenceFromPacket
`public static EquipmentElement ReadItemReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)`

**用途 / Purpose:** 从当前实例读取item reference from packet相关数据。

```csharp
// 静态调用，不需要实例
ModuleNetworkData.ReadItemReferenceFromPacket(objectManager, bufferReadValid);
```

### WriteItemReferenceToPacket
`public static void WriteItemReferenceToPacket(EquipmentElement equipElement)`

**用途 / Purpose:** 将item reference to packet写入目标位置。

```csharp
// 静态调用，不需要实例
ModuleNetworkData.WriteItemReferenceToPacket(equipElement);
```

### ReadWeaponReferenceFromPacket
`public static MissionWeapon ReadWeaponReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)`

**用途 / Purpose:** 从当前实例读取weapon reference from packet相关数据。

```csharp
// 静态调用，不需要实例
ModuleNetworkData.ReadWeaponReferenceFromPacket(objectManager, bufferReadValid);
```

### WriteWeaponReferenceToPacket
`public static void WriteWeaponReferenceToPacket(MissionWeapon weapon)`

**用途 / Purpose:** 将weapon reference to packet写入目标位置。

```csharp
// 静态调用，不需要实例
ModuleNetworkData.WriteWeaponReferenceToPacket(weapon);
```

### ReadMissileWeaponReferenceFromPacket
`public static MissionWeapon ReadMissileWeaponReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)`

**用途 / Purpose:** 从当前实例读取missile weapon reference from packet相关数据。

```csharp
// 静态调用，不需要实例
ModuleNetworkData.ReadMissileWeaponReferenceFromPacket(objectManager, bufferReadValid);
```

### WriteMissileWeaponReferenceToPacket
`public static void WriteMissileWeaponReferenceToPacket(MissionWeapon weapon)`

**用途 / Purpose:** 将missile weapon reference to packet写入目标位置。

```csharp
// 静态调用，不需要实例
ModuleNetworkData.WriteMissileWeaponReferenceToPacket(weapon);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
ModuleNetworkData entry = ...;
```

## 参见

- [本区域目录](../)