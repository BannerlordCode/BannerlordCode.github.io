<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MountCreationKey`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MountCreationKey

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`MountCreationKey` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `_leftFrontLegColorIndex` | `public byte _leftFrontLegColorIndex { get; }` |
| `_rightFrontLegColorIndex` | `public byte _rightFrontLegColorIndex { get; }` |
| `_leftBackLegColorIndex` | `public byte _leftBackLegColorIndex { get; }` |
| `_rightBackLegColorIndex` | `public byte _rightBackLegColorIndex { get; }` |
| `MaterialIndex` | `public byte MaterialIndex { get; }` |
| `MeshMultiplierIndex` | `public byte MeshMultiplierIndex { get; }` |


## 主要方法

### FromString

```csharp
public static MountCreationKey FromString(string str)
```

### ToString

```csharp
public override string ToString()
```

### GetRandomMountKeyString

```csharp
public static string GetRandomMountKeyString(ItemObject mountItem, int randomSeed)
```

### GetRandomMountKey

```csharp
public static MountCreationKey GetRandomMountKey(ItemObject mountItem, int randomSeed)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)