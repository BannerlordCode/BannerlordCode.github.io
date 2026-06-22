<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionObject`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionObject

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionObject` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public MissionObjectId Id { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; }` |
| `HitObjectName` | `public virtual TextObject HitObjectName { get; }` |
| `CreatedAtRuntime` | `public bool CreatedAtRuntime { get; }` |


## 主要方法

### SetAbilityOfFaces

```csharp
public virtual void SetAbilityOfFaces(bool enabled)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### AfterMissionStart

```csharp
public virtual void AfterMissionStart()
```

### OnMissionEnded

```csharp
public virtual void OnMissionEnded()
```

### OnDeploymentFinished

```csharp
public virtual void OnDeploymentFinished()
```

### SetEnabled

```csharp
public void SetEnabled(bool isParentObject = false)
```

### SetEnabledAndMakeVisible

```csharp
public void SetEnabledAndMakeVisible(bool isParentObject = false, bool enableFaces = false)
```

### SetDisabled

```csharp
public void SetDisabled(bool isParentObject = false)
```

### SetDisabledAndMakeInvisible

```csharp
public void SetDisabledAndMakeInvisible(bool isParentObject = false, bool disableFaces = false)
```

### OnEndMission

```csharp
public virtual void OnEndMission()
```

### AddStuckMissile

```csharp
public virtual void AddStuckMissile(GameEntity missileEntity)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)