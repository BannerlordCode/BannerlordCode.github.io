<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ModuleNetworkData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `read item reference from packet` 相关逻辑。

### WriteItemReferenceToPacket
`public static void WriteItemReferenceToPacket(EquipmentElement equipElement)`

**用途 / Purpose:** 处理 `write item reference to packet` 相关逻辑。

### ReadWeaponReferenceFromPacket
`public static MissionWeapon ReadWeaponReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read weapon reference from packet` 相关逻辑。

### WriteWeaponReferenceToPacket
`public static void WriteWeaponReferenceToPacket(MissionWeapon weapon)`

**用途 / Purpose:** 处理 `write weapon reference to packet` 相关逻辑。

### ReadMissileWeaponReferenceFromPacket
`public static MissionWeapon ReadMissileWeaponReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read missile weapon reference from packet` 相关逻辑。

### WriteMissileWeaponReferenceToPacket
`public static void WriteMissileWeaponReferenceToPacket(MissionWeapon weapon)`

**用途 / Purpose:** 处理 `write missile weapon reference to packet` 相关逻辑。

## 使用示例

```csharp
var value = new ModuleNetworkData();
```

## 参见

- [完整类目录](../catalog)