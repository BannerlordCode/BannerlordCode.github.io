<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HighlightType`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HighlightType

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`HighlightType` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `IsHighlightsInitialized` | `public static bool IsHighlightsInitialized { get; }` |
| `IsAnyHighlightSaved` | `public bool IsAnyHighlightSaved { get; }` |
| `Id` | `public string Id { get; }` |
| `Description` | `public string Description { get; }` |
| `GroupId` | `public string GroupId { get; }` |
| `StartDelta` | `public int StartDelta { get; }` |
| `EndDelta` | `public int EndDelta { get; }` |
| `MinVisibilityScore` | `public float MinVisibilityScore { get; }` |
| `MaxHighlightDistance` | `public float MaxHighlightDistance { get; }` |
| `IsVisibilityRequired` | `public bool IsVisibilityRequired { get; }` |


## 主要方法

### RemoveHighlights

```csharp
public static void RemoveHighlights()
```

### GetHighlightTypeWithId

```csharp
public HighlightsController.HighlightType GetHighlightTypeWithId(string highlightId)
```

### AfterStart

```csharp
public override void AfterStart()
```

### OnAgentRemoved

```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
```

### OnScoreHit

```csharp
public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)
```

### OnMissionTick

```csharp
public override void OnMissionTick(float dt)
```

### AddHighlightType

```csharp
public static void AddHighlightType(HighlightsController.HighlightType highlightType)
```

### SaveHighlight

```csharp
public void SaveHighlight(HighlightsController.Highlight highlight)
```

### SaveHighlight

```csharp
public void SaveHighlight(HighlightsController.Highlight highlight, Vec3 position)
```

### CanSaveHighlight

```csharp
public bool CanSaveHighlight(HighlightsController.HighlightType highlightType, Vec3 position)
```

### GetPlayerIsLookingAtPositionScore

```csharp
public float GetPlayerIsLookingAtPositionScore(Vec3 position)
```

### CanSeePosition

```csharp
public bool CanSeePosition(Vec3 position)
```

### ShowSummary

```csharp
public void ShowSummary()
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)