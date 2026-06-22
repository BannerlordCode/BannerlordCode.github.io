<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionSiegeEngineMarkerVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSiegeEngineMarkerVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionSiegeEngineMarkerVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Targets` | `public MBBindingList<MissionSiegeEngineMarkerTargetVM> Targets { get; set; }` |


## 主要方法

### InitializeWith

```csharp
public void InitializeWith(List<SiegeWeapon> siegeEngines)
```

### Tick

```csharp
public void Tick(float dt)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### Compare

```csharp
public int Compare(MissionSiegeEngineMarkerTargetVM x, MissionSiegeEngineMarkerTargetVM y)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)