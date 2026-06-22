<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameType`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameType

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class enum
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`GameType` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个枚举 enum。
> 如需了解其属性、方法和开发者用例，请参考源码或贡献
## 主要属性

| Name | Signature |
|------|-----------|
| `SupportsSaving` | `public virtual bool SupportsSaving { get; set; }` |
| `CurrentGame` | `public Game CurrentGame { get; set; }` |
| `ObjectManager` | `public MBObjectManager ObjectManager { get; }` |
| `GameManager` | `public GameManagerBase GameManager { get; }` |
| `IsInventoryAccessibleAtMission` | `public virtual bool IsInventoryAccessibleAtMission { get; }` |
| `IsQuestScreenAccessibleAtMission` | `public virtual bool IsQuestScreenAccessibleAtMission { get; }` |
| `IsCharacterWindowAccessibleAtMission` | `public virtual bool IsCharacterWindowAccessibleAtMission { get; }` |
| `IsPartyWindowAccessibleAtMission` | `public virtual bool IsPartyWindowAccessibleAtMission { get; }` |
| `IsKingdomWindowAccessibleAtMission` | `public virtual bool IsKingdomWindowAccessibleAtMission { get; }` |
| `IsClanWindowAccessibleAtMission` | `public virtual bool IsClanWindowAccessibleAtMission { get; }` |
| `IsEncyclopediaWindowAccessibleAtMission` | `public virtual bool IsEncyclopediaWindowAccessibleAtMission { get; }` |
| `IsBannerWindowAccessibleAtMission` | `public virtual bool IsBannerWindowAccessibleAtMission { get; }` |
| `IsDevelopment` | `public virtual bool IsDevelopment { get; }` |
| `IsCoreOnlyGameMode` | `public virtual bool IsCoreOnlyGameMode { get; }` |
| `RequiresTutorial` | `public virtual bool RequiresTutorial { get; }` |
| `GameTypeStringId` | `public virtual string GameTypeStringId { get; }` |


## 主要方法

### OnStateChanged

```csharp
public abstract void OnStateChanged(GameState oldState)
```

### DoLoadingForGameType

```csharp
public bool DoLoadingForGameType()
```

### OnDestroy

```csharp
public abstract void OnDestroy()
```

### OnMissionIsStarting

```csharp
public virtual void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)
```

### InitializeParameters

```csharp
public virtual void InitializeParameters()
```

文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)