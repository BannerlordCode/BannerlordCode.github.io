<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionScoreboardPlayerVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionScoreboardPlayerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardPlayerVM : MPPlayerVM`
**Base:** `MPPlayerVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MissionScoreboardPlayerVM.cs`

## 概述

`MissionScoreboardPlayerVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Score` | `public int Score { get; }` |
| `IsBot` | `public bool IsBot { get; }` |
| `IsMine` | `public bool IsMine { get; }` |
| `IsTeammate` | `public bool IsTeammate { get; set; }` |
| `Ping` | `public int Ping { get; set; }` |
| `IsPlayer` | `public bool IsPlayer { get; set; }` |
| `IsVoiceMuted` | `public bool IsVoiceMuted { get; set; }` |
| `IsTextMuted` | `public bool IsTextMuted { get; set; }` |
| `Stats` | `public MBBindingList<MissionScoreboardStatItemVM> Stats { get; set; }` |
| `MVPBadges` | `public MBBindingList<MissionScoreboardMVPItemVM> MVPBadges { get; set; }` |

## 主要方法

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### UpdateAttributes
`public void UpdateAttributes(string attributes, int score)`

**用途 / Purpose:** 更新 `attributes` 的状态或数据。

### ExecuteSelection
`public void ExecuteSelection()`

**用途 / Purpose:** 执行 `selection` 操作或流程。

### UpdateIsMuted
`public void UpdateIsMuted()`

**用途 / Purpose:** 更新 `is muted` 的状态或数据。

### SetMVPBadgeCount
`public void SetMVPBadgeCount(int badgeCount)`

**用途 / Purpose:** 设置 `m v p badge count` 的值或状态。

## 使用示例

```csharp
var value = new MissionScoreboardPlayerVM();
value.Tick(0);
```

## 参见

- [完整类目录](../catalog)