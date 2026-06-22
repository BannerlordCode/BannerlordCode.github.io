<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ModuleNetworkData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ModuleNetworkData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ModuleNetworkData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/ModuleNetworkData.cs`

## 概述

`ModuleNetworkData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要方法

### ReadItemReferenceFromPacket
```csharp
public static EquipmentElement ReadItemReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)
```

### WriteItemReferenceToPacket
```csharp
public static void WriteItemReferenceToPacket(EquipmentElement equipElement)
```

### ReadWeaponReferenceFromPacket
```csharp
public static MissionWeapon ReadWeaponReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)
```

### WriteWeaponReferenceToPacket
```csharp
public static void WriteWeaponReferenceToPacket(MissionWeapon weapon)
```

### ReadMissileWeaponReferenceFromPacket
```csharp
public static MissionWeapon ReadMissileWeaponReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)
```

### WriteMissileWeaponReferenceToPacket
```csharp
public static void WriteMissileWeaponReferenceToPacket(MissionWeapon weapon)
```

## 使用示例

```csharp
// ModuleNetworkData (Data) 的典型用法
new ModuleNetworkData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)