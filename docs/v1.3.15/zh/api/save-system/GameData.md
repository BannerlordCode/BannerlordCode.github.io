<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameData`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameData

**命名空间:** TaleWorlds.SaveSystem
**模块:** TaleWorlds.SaveSystem
**类型:** 类 class class
**领域:** 存档系统 SaveSystem

## 概述

> 本页为自动生成的存根。`GameData` 是 `TaleWorlds.SaveSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Header` | `public byte Header { get; set; }` |
| `Strings` | `public byte Strings { get; set; }` |
| `ObjectData` | `public byte ObjectData { get; set; }` |
| `ContainerData` | `public byte ContainerData { get; set; }` |
| `TotalSize` | `public int TotalSize { get; }` |


## 主要方法

### Inspect

```csharp
public void Inspect()
```

### CreateFrom

```csharp
public static GameData CreateFrom(byte readBytes)
```

### GetData

```csharp
public byte GetData()
```

### Write

```csharp
public static void Write(BinaryWriter writer, GameData gameData)
```

### Read

```csharp
public static GameData Read(BinaryReader reader)
```

### IsEqualTo

```csharp
public bool IsEqualTo(GameData gameData)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)