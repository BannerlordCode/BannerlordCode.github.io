<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameType`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameType

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** `public abstract class GameType`
**领域:** mission-ext

## 概述

`GameType` 位于 `TaleWorlds.Core`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public abstract void OnStateChanged(GameState oldState)`

**用途 / Purpose:** 当 `state changed` 事件触发时调用此方法。

### DoLoadingForGameType
`public bool DoLoadingForGameType()`

**用途 / Purpose:** 处理 `do loading for game type` 相关逻辑。

### OnDestroy
`public abstract void OnDestroy()`

**用途 / Purpose:** 当 `destroy` 事件触发时调用此方法。

### OnMissionIsStarting
`public virtual void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)`

**用途 / Purpose:** 当 `mission is starting` 事件触发时调用此方法。

### InitializeParameters
`public virtual void InitializeParameters()`

**用途 / Purpose:** 初始化 `parameters` 的状态、资源或绑定。

## 使用示例

```csharp
var implementation = new CustomGameType();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
