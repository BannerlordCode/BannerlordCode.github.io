<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLocalDataContainer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLocalDataContainer

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MultiplayerLocalDataContainer` is a class in the `TaleWorlds.MountAndBlade.Diamond.Lobby` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)