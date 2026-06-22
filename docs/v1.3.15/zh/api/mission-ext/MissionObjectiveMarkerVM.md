<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionObjectiveMarkerVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionObjectiveMarkerVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionObjectiveMarkerVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Distance` | `public int Distance { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `ObjectiveTypeId` | `public string ObjectiveTypeId { get; set; }` |
| `ObjectiveName` | `public string ObjectiveName { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### UpdateActiveState

```csharp
public void UpdateActiveState()
```

### UpdatePosition

```csharp
public void UpdatePosition(Camera missionCamera)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)