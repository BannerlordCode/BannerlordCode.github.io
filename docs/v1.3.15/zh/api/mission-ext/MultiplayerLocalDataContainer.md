<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLocalDataContainer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLocalDataContainer

**命名空间:** TaleWorlds.MountAndBlade.Diamond.Lobby
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MultiplayerLocalDataContainer` 是 `TaleWorlds.MountAndBlade.Diamond.Lobby` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### AddEntry

```csharp
public void AddEntry(T item)
```

### InsertEntry

```csharp
public void InsertEntry(T item, int index)
```

### RemoveEntry

```csharp
public void RemoveEntry(T item)
```

### GetEntries

```csharp
public MBReadOnlyList<T> GetEntries()
```

### CreateAsAdd

```csharp
public static MultiplayerLocalDataContainer<T>.ContainerOperation CreateAsAdd(T item)
```

### CreateAsRemove

```csharp
public static MultiplayerLocalDataContainer<T>.ContainerOperation CreateAsRemove(T item)
```

### CreateAsInsert

```csharp
public static MultiplayerLocalDataContainer<T>.ContainerOperation CreateAsInsert(T item, int index)
```

### Compare

```csharp
public int Compare(MultiplayerLocalDataContainer<T>.ContainerOperation x, MultiplayerLocalDataContainer<T>.ContainerOperation y)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)