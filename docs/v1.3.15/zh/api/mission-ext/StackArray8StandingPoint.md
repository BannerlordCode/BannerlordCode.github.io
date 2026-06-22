<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StackArray8StandingPoint`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StackArray8StandingPoint

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`StackArray8StandingPoint` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `DisableScriptedFrameFlags` | `public virtual Agent.AIScriptedFrameFlags DisableScriptedFrameFlags { get; }` |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse { get; set; }` |
| `FavoredUser` | `public Agent FavoredUser { get; set; }` |
| `PlayerStopsUsingWhenInteractsWithOther` | `public virtual bool PlayerStopsUsingWhenInteractsWithOther { get; }` |
| `UseOwnPositionInsteadOfWorldPosition` | `public bool UseOwnPositionInsteadOfWorldPosition { get; }` |
| `CustomPlayerInteractionDistance` | `public float CustomPlayerInteractionDistance { get; }` |
| `this` | `public StandingPoint this { get; }` |


## 主要方法

### OnParentMachinePhysicsStateChanged

```csharp
public void OnParentMachinePhysicsStateChanged()
```

### IsDisabledForAgent

```csharp
public override bool IsDisabledForAgent(Agent agent)
```

### GetTickRequirement

```csharp
public override ScriptComponentBehavior.TickRequirement GetTickRequirement()
```

### OnUse

```csharp
public override void OnUse(Agent userAgent, sbyte agentBoneIndex)
```

### OnUseStopped

```csharp
public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)
```

### GetUserFrameForAgent

```csharp
public override WorldFrame GetUserFrameForAgent(Agent agent)
```

### HasAlternative

```csharp
public virtual bool HasAlternative()
```

### GetUsageScoreForAgent

```csharp
public virtual float GetUsageScoreForAgent(Agent agent)
```

### GetUsageScoreForAgent

```csharp
public virtual float GetUsageScoreForAgent(ValueTuple<Agent, float> agentPair)
```

### SetupOnUsingStoppedBehavior

```csharp
public void SetupOnUsingStoppedBehavior(bool autoAttach, Action<Agent, bool> action)
```

### OnEndMission

```csharp
public override void OnEndMission()
```

### GetDescriptionText

```csharp
public override TextObject GetDescriptionText(WeakGameEntity gameEntity)
```

### IsUsableByAgent

```csharp
public override bool IsUsableByAgent(Agent userAgent)
```

### SetUsableByAIOnly

```csharp
public void SetUsableByAIOnly()
```

### SetUsableByPlayerOnly

```csharp
public void SetUsableByPlayerOnly()
```

### SetUsableByPlayerOrAI

```csharp
public void SetUsableByPlayerOrAI()
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)