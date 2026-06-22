<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionResult`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionResult

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`MissionResult` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `BattleState` | `public BattleState BattleState { get; }` |
| `BattleResolved` | `public bool BattleResolved { get; }` |
| `PlayerVictory` | `public bool PlayerVictory { get; }` |
| `PlayerDefeated` | `public bool PlayerDefeated { get; }` |
| `EnemyRetreated` | `public bool EnemyRetreated { get; }` |


## 主要方法

### CreateSuccessful

```csharp
public static MissionResult CreateSuccessful(IMission mission, bool enemyRetreated = false)
```

### CreateDefeated

```csharp
public static MissionResult CreateDefeated(IMission mission)
```

### CreateDefenderPushedBack

```csharp
public static MissionResult CreateDefenderPushedBack()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)