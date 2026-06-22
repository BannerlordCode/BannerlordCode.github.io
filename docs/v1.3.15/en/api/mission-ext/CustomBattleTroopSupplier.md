<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleTroopSupplier`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleTroopSupplier

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `CustomBattleTroopSupplier` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `NumRemovedTroops` | `public int NumRemovedTroops { get; }` |
| `NumTroopsNotSupplied` | `public int NumTroopsNotSupplied { get; }` |
| `AnyTroopRemainsToBeSupplied` | `public bool AnyTroopRemainsToBeSupplied { get; }` |


## Key Methods

### SupplyTroops

```csharp
public IEnumerable<IAgentOriginBase> SupplyTroops(int numberToAllocate)
```

### SupplyOneTroop

```csharp
public IAgentOriginBase SupplyOneTroop()
```

### GetAllTroops

```csharp
public IEnumerable<IAgentOriginBase> GetAllTroops()
```

### GetGeneralCharacter

```csharp
public BasicCharacterObject GetGeneralCharacter()
```

### OnTroopWounded

```csharp
public void OnTroopWounded()
```

### OnTroopKilled

```csharp
public void OnTroopKilled()
```

### OnTroopRouted

```csharp
public void OnTroopRouted()
```

### GetNumberOfPlayerControllableTroops

```csharp
public int GetNumberOfPlayerControllableTroops()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)