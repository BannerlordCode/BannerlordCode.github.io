<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPConditionalEffect`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPConditionalEffect

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MPConditionalEffect` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Conditions` | `public MBReadOnlyList<MPPerkCondition> Conditions { get; }` |
| `Effects` | `public MBReadOnlyList<MPPerkEffectBase> Effects { get; }` |
| `EventFlags` | `public MPPerkCondition.PerkEventFlags EventFlags { get; }` |
| `IsTickRequired` | `public bool IsTickRequired { get; }` |
| `IsSatisfied` | `public bool IsSatisfied { get; set; }` |


## 主要方法

### Check

```csharp
public bool Check(MissionPeer peer)
```

### Check

```csharp
public bool Check(Agent agent)
```

### OnEvent

```csharp
public void OnEvent(bool isWarmup, MissionPeer peer, MPConditionalEffect.ConditionalEffectContainer container)
```

### OnEvent

```csharp
public void OnEvent(bool isWarmup, Agent agent, MPConditionalEffect.ConditionalEffectContainer container)
```

### OnTick

```csharp
public void OnTick(bool isWarmup, MissionPeer peer, int tickCount)
```

### GetState

```csharp
public bool GetState(MPConditionalEffect conditionalEffect, Agent agent)
```

### SetState

```csharp
public void SetState(MPConditionalEffect conditionalEffect, Agent agent, bool state)
```

### ResetStates

```csharp
public void ResetStates()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)