<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FlagCapturePoint`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FlagCapturePoint

**命名空间:** TaleWorlds.MountAndBlade.Objects
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`FlagCapturePoint` 是 `TaleWorlds.MountAndBlade.Objects` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Position` | `public Vec3 Position { get; }` |
| `FlagChar` | `public int FlagChar { get; }` |
| `IsContested` | `public bool IsContested { get; }` |
| `IsFullyRaised` | `public bool IsFullyRaised { get; }` |
| `IsDeactivated` | `public bool IsDeactivated { get; }` |


## 主要方法

### ResetPointAsServer

```csharp
public void ResetPointAsServer(uint defaultColor, uint defaultColor2)
```

### RemovePointAsServer

```csharp
public void RemovePointAsServer()
```

### OnAfterTick

```csharp
public void OnAfterTick(bool canOwnershipChange, out bool ownerTeamChanged)
```

### SetMoveFlag

```csharp
public void SetMoveFlag(CaptureTheFlagFlagDirection directionTo, float speedMultiplier = 1f)
```

### ChangeMovementSpeed

```csharp
public void ChangeMovementSpeed(float speedMultiplier)
```

### SetMoveNone

```csharp
public void SetMoveNone()
```

### SetVisibleWithAllSynched

```csharp
public void SetVisibleWithAllSynched(bool value, bool forceChildrenVisible = false)
```

### SetTeamColorsWithAllSynched

```csharp
public void SetTeamColorsWithAllSynched(uint color, uint color2)
```

### GetFlagColor

```csharp
public uint GetFlagColor()
```

### GetFlagColor2

```csharp
public uint GetFlagColor2()
```

### GetFlagProgress

```csharp
public float GetFlagProgress()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)