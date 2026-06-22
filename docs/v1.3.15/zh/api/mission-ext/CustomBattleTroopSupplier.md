<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleTroopSupplier`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleTroopSupplier

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`CustomBattleTroopSupplier` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `NumRemovedTroops` | `public int NumRemovedTroops { get; }` |
| `NumTroopsNotSupplied` | `public int NumTroopsNotSupplied { get; }` |
| `AnyTroopRemainsToBeSupplied` | `public bool AnyTroopRemainsToBeSupplied { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)