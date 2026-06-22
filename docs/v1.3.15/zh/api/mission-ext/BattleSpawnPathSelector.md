<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleSpawnPathSelector`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleSpawnPathSelector

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`BattleSpawnPathSelector` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `InitialPath` | `public Path InitialPath { get; }` |


## 主要方法

### Initialize

```csharp
public void Initialize()
```

### HasPath

```csharp
public bool HasPath(Path path)
```

### GetInitialPathDataOfSide

```csharp
public bool GetInitialPathDataOfSide(BattleSideEnum side, out SpawnPathData pathPathData)
```

### GetReinforcementPathsDataOfSide

```csharp
public MBReadOnlyList<SpawnPathData> GetReinforcementPathsDataOfSide(BattleSideEnum side)
```

### FindBestInitialPath

```csharp
public static Path FindBestInitialPath(Mission mission, out float pivotRatio, out bool isInverted)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)