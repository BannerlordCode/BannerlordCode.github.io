<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeEngineConstructionProgress`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeEngineConstructionProgress

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeEngineConstructionProgress`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/SiegeEvent.cs`

## 概述

`SiegeEngineConstructionProgress` 位于 `TaleWorlds.CampaignSystem.Siege`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Siege` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |
| `Hitpoints` | `public float Hitpoints { get; }` |
| `Progress` | `public float Progress { get; }` |
| `RangedSiegeEngine` | `public RangedSiegeEngine RangedSiegeEngine { get; }` |
| `RedeploymentProgress` | `public float RedeploymentProgress { get; }` |
| `MaxHitPoints` | `public float MaxHitPoints { get; }` |

## 主要方法

### SetRedeploymentProgress
`public void SetRedeploymentProgress(float redeploymentProgress)`

**用途 / Purpose:** 设置 `redeployment progress` 的值或状态。

### SetHitpoints
`public void SetHitpoints(float hitPoints)`

**用途 / Purpose:** 设置 `hitpoints` 的值或状态。

### SetProgress
`public void SetProgress(float progress)`

**用途 / Purpose:** 设置 `progress` 的值或状态。

### SetRangedSiegeEngine
`public void SetRangedSiegeEngine(RangedSiegeEngine rangedSiegeEngine)`

**用途 / Purpose:** 设置 `ranged siege engine` 的值或状态。

## 使用示例

```csharp
var value = new SiegeEngineConstructionProgress();
value.SetRedeploymentProgress(0);
```

## 参见

- [完整类目录](../catalog)