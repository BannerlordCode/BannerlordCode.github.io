<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameData`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameData

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** class
**Area:** Save System

## Overview

> This is an auto-generated stub. `GameData` is a class in the `TaleWorlds.SaveSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Header` | `public byte Header { get; set; }` |
| `Strings` | `public byte Strings { get; set; }` |
| `ObjectData` | `public byte ObjectData { get; set; }` |
| `ContainerData` | `public byte ContainerData { get; set; }` |
| `TotalSize` | `public int TotalSize { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)