<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VolumeBox`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VolumeBox

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`VolumeBox` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### AddToCheckList

```csharp
public void AddToCheckList(Agent agent)
```

### RemoveFromCheckList

```csharp
public void RemoveFromCheckList(Agent agent)
```

### SetIsOccupiedDelegate

```csharp
public void SetIsOccupiedDelegate(VolumeBox.VolumeBoxDelegate volumeBoxDelegate)
```

### HasAgentsInAttackerSide

```csharp
public bool HasAgentsInAttackerSide()
```

### IsPointIn

```csharp
public bool IsPointIn(Vec3 point)
```

### VolumeBoxDelegate

```csharp
public delegate void VolumeBoxDelegate(VolumeBox volumeBox, List<Agent> agentsInVolume)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)