<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RangedSiegeEngine`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RangedSiegeEngine

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RangedSiegeEngine`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/SiegeEvent.cs`

## 概述

`RangedSiegeEngine` 位于 `TaleWorlds.CampaignSystem.Siege`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Siege` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NextTimeEngineCanBombard` | `public CampaignTime NextTimeEngineCanBombard { get; }` |
| `AlreadyFired` | `public bool AlreadyFired { get; }` |
| `CurrentTargetType` | `public SiegeBombardTargets CurrentTargetType { get; }` |
| `CurrentTargetIndex` | `public int CurrentTargetIndex { get; }` |
| `PreviousDamagedTargetType` | `public SiegeBombardTargets PreviousDamagedTargetType { get; }` |
| `PreviousTargetIndex` | `public int PreviousTargetIndex { get; }` |
| `LastBombardTime` | `public CampaignTime LastBombardTime { get; }` |
| `NextProjectileCollisionTime` | `public CampaignTime NextProjectileCollisionTime { get; }` |

## 主要方法

### Hold
`public void Hold()`

**用途 / Purpose:** 处理 `hold` 相关逻辑。

### Reload
`public void Reload()`

**用途 / Purpose:** 处理 `reload` 相关逻辑。

### OnFireDecisionTaken
`public void OnFireDecisionTaken(SiegeEvent siegeEvent, BattleSideEnum battleSide, int targetSlotIndex, SiegeBombardTargets targetType)`

**用途 / Purpose:** 当 `fire decision taken` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new RangedSiegeEngine();
value.Hold();
```

## 参见

- [完整类目录](../catalog)